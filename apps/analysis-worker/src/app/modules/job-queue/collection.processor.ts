// import { Job } from 'kue';
import { GraphQLClient } from 'graphql-request';
import { PrismaService } from '@layerg-mkp-workspace/shared/services';
import { CONTRACT_TYPE, Prisma, TX_STATUS } from '@prisma/client';
import { Processor, Process, OnQueueFailed } from '@nestjs/bull';
import { Job } from 'bull';
import { Cron, CronExpression } from '@nestjs/schedule';
import { OnModuleInit } from '@nestjs/common';
import { ethers } from 'ethers';
import PQueue from 'p-queue';
import moment from 'moment';

import { RedisSubscriberService } from './redis.service';
import subgraphServiceCommon from '../helper/subgraph-helper.service';

import { QUEUE_NAME_COLLECTION } from '@/apps/analysis-worker/src/app/constants/Job.constant';
import {
  GetCollections1155QueryVariables,
  GetCollections721QueryVariables,
  GetNfTsSelling721QueryVariables,
  getSdk,
} from '@/apps/analysis-worker/src/app/generated/graphql';
import OtherCommon from '@/apps/analysis-worker/src/app/commons/Other.common';
import { logger } from '@/apps/analysis-worker/src/app/commons';

interface CollectionGeneral {
  totalOwner: number;
  volumn: string;
  totalNft: number;
  // floorPrice: bigint;
}

interface AnalysisObject {
  totalOwner: number;
  type: CONTRACT_TYPE;
  volume: number;
  volumeWei: string;
  totalNft: number;
  floorPrice: number;
  floor: number;
  floorWei: string;
  address: string;
  id: string;
  vol: number;
  // floorPrice: bigint;
}

@Processor(QUEUE_NAME_COLLECTION)
export class CollectionsCheckProcessor implements OnModuleInit {
  private readonly endpoint = process.env.SUBGRAPH_URL;

  constructor(
    private readonly prisma: PrismaService,
    private readonly redisService: RedisSubscriberService,
  ) {}

  private getGraphqlClient() {
    return new GraphQLClient(this.endpoint);
  }

  async onModuleInit() {
    logger.info(`call First time: QUEUE_NAME_CMS `);
    await Promise.allSettled([this.GetAnalysisCollection()]);
  }

  @Cron('00 23 * * *')
  async GetAnalysisCollection() {
    try {
      const batchSize = 100;
      let offset = 0;
      let hasMore = true;
      while (hasMore) {
        const listCollection = await this.prisma.collection.findMany({
          where: {
            status: 'SUCCESS',
          },
          select: {
            id: true,
            address: true,
            flagExtend: true,
            type: true,
            floorPrice: true,
            floor: true,
            floorWei: true,
            txCreationHash: true,
            volumeWei: true,
            vol: true,
          },
          take: batchSize,
          skip: offset,
        });
        if (listCollection?.length > 0) {
          const analysisPromises = listCollection.map(async (item) => {
            const {
              volumn: volume,
              totalNft,
              totalOwner,
            } = await this.getGeneralCollectionData(
              item.address,
              item.type,
              item.flagExtend,
              item?.volumeWei,
            );
            const inputAnalysis: AnalysisObject = {
              ...item,
              floorPrice: Number(item.floorPrice),
              floor: item.floor,
              floorWei: item.floorWei,
              volume: OtherCommon.weiToEther(volume),
              volumeWei: `${volume}`,
              totalNft: Number(totalNft),
              totalOwner: Number(totalOwner),
            };
            return this.getAndCaculator(inputAnalysis);
          });
          await Promise.allSettled(analysisPromises);
          offset += batchSize;
        } else {
          hasMore = false;
        }
      }
      logger.info('GetAnalysisCollection successful');
    } catch (error) {
      logger.error(`getCountVolume: ${error}`);
    }
  }

  async getGeneralCollectionData(
    collectionAddress: string,
    type: CONTRACT_TYPE,
    flagExtend = false,
    volumeWei: string,
  ): Promise<CollectionGeneral> {
    if (!collectionAddress) {
      return {
        volumn: '0',
        totalOwner: Number(0),
        totalNft: Number(0),
        // floorPrice: BigInt(0),
      };
    }
    let totalNftExternal = 0;
    let totalOwnerExternal = 0;

    if (flagExtend) {
      const resultExternal =
        await subgraphServiceCommon.getAllCollectionExternal(collectionAddress);
      totalNftExternal = resultExternal.totalNftExternal;
      totalOwnerExternal = resultExternal.totalOwnerExternal;
    }

    const [statusCollection, contractOwner] = await Promise.all([
      subgraphServiceCommon.getCollectionCount(collectionAddress),
      subgraphServiceCommon.getContractInfor(collectionAddress),
      // this.getVolumeCollection(collectionAddress),
    ]);

    if (type === 'ERC721') {
      return {
        // volumn: statusCollection.erc721Contract?.volume || 0,
        volumn: volumeWei || `0`,
        totalOwner: flagExtend
          ? totalOwnerExternal
          : contractOwner?.contract?.count || 0,
        totalNft: flagExtend
          ? totalNftExternal
          : statusCollection.erc721Contract?.count || 0,
      };
    } else {
      return {
        // volumn: statusCollection.erc1155Contract?.volume || 0,
        volumn: volumeWei || `0`,
        totalOwner: flagExtend
          ? totalOwnerExternal
          : contractOwner?.contract?.count || 0,
        totalNft: flagExtend
          ? totalNftExternal
          : statusCollection.erc1155Contract?.count || 0,
      };
    }
  }
  @Cron(CronExpression.EVERY_10_SECONDS)
  async CountExternalCollection() {
    try {
      const externalCollections = await this.prisma.collection.findMany({
        where: {
          flagExtend: true,
        },
        select: {
          id: true,
          address: true,
        },
      });

      for (const collection of externalCollections) {
        const { totalNftExternal, totalOwnerExternal } =
          await subgraphServiceCommon.getAllCollectionExternal(
            collection.address,
          );
        const key = `External-${collection.address}`;
        this.redisService.set(
          `session:${key}`,
          {
            address: collection.address,
            totalNft: totalNftExternal.toString(),
            totalOwner: totalOwnerExternal.toString(),
          },
          20,
        );
      }
      logger.info('handleExternalCollection successful');
    } catch (error) {
      logger.error(`CountExternalCollection: ${JSON.stringify(error)}`);
    }
  }

  async getAndCaculator(input: AnalysisObject) {
    try {
      const dateObj = new Date();
      const day = String(dateObj.getDate()).padStart(2, '0');
      const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Months are 0-based
      const year = dateObj.getFullYear();

      // Combine them into the desired format "20240824"
      const formattedDate = `${day}${month}${year}`;
      const collectionId_createdAt = `${input.address.toLowerCase()}_${formattedDate}`;

      const checkExist = await this.prisma.analysisCollection.findUnique({
        where: {
          id: collectionId_createdAt,
        },
      });
      if (!checkExist) {
        await this.prisma.analysisCollection.create({
          data: {
            keyTime: formattedDate,
            id: collectionId_createdAt,
            collectionId: input.id,
            type: input.type,
            address: input.address,
            owner: input.totalOwner,
            items: input.totalNft,
            volume: input.volume,
            vol: Number(`${BigInt(input.volumeWei) / BigInt(10 ** 18)}`),
            volumeWei: input.volumeWei,
            floorPrice: BigInt(input.floorWei) / BigInt(10 ** 18),
            floor: Number(`${BigInt(input.floorWei) / BigInt(10 ** 18)}`),
            floorWei: input.floorWei.toString(),
          },
        });
      }
    } catch (error) {
      logger.error(`getAndCaculator: ${error}`);
    }
  }

  @Cron('30 23 * * *')
  async handleRemoveOutDate() {
    try {
      const { start } = this.getPastDay(32);
      const batchSize = 1000;
      let offset = 0;
      let hasMore = true;
      while (hasMore) {
        const listOutDate = await this.prisma.analysisCollection.findMany({
          where: {
            createdAt: {
              lte: start,
            },
          },
          select: {
            id: true,
          },
          take: batchSize,
          skip: offset,
        });
        if (listOutDate && listOutDate.length > 0) {
          const listOutDateFormat = listOutDate.map((item) => {
            return item.id;
          });
          await this.prisma.analysisCollection.deleteMany({
            where: {
              id: {
                in: listOutDateFormat,
              },
            },
          });
          offset += batchSize;
        } else {
          hasMore = false;
        }
      }
      logger.info('handleRemoveOutDate successful');
    } catch (error) {
      logger.error(`handleRemoveOutDate: ${error}`);
    }
  }

  getPastDay(number: number) {
    const date = new Date();
    const momentDate = moment(date).subtract(number, 'days');
    return {
      start: momentDate.utc().startOf('day').toDate(),
      end: momentDate.utc().endOf('day').toDate(),
    };
  }
}
