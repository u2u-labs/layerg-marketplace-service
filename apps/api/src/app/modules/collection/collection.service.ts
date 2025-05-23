import { PrismaService } from '@layerg-mkp-workspace/shared/services';
import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  AnalysisCollection,
  CONTRACT_TYPE,
  NFT,
  Prisma,
  TX_STATUS,
  User,
} from '@prisma/client';
import { ethers } from 'ethers';
import { GraphQLClient } from 'graphql-request';
import { validate as isValidUUID } from 'uuid';

import { GetCollectionMarketData } from '../graph-qlcaller/getCollectionMarketData.service';
import { TraitService } from '../nft/trait.service';
import { CollectionPriceService } from './collectionPrice.service';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { GetAllCollectionDto } from './dto/get-all-collection.dto';
import { CollectionDetailDto } from './dto/get-detail-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';
import { CollectionEntity } from './entities/collection.entity';

// import SecureUtil from '../../commons/Secure.common';

import {
  CollectionSelect,
  creatorSelect,
  gameLayergSelect,
} from '../../commons/definitions/Constraint.Object';
import { oneWeekInMilliseconds } from '../../constants/Timestamp.constant';
import { getSdk } from '../../generated/graphql';
import { UserService } from '../user/user.service';
import { GetAnalysisDto } from './dto/get-analysis-collection.dto';
import CollectionHepler from './helper/collection-helper.service';

import PaginationCommon from '@/apps/api/src/app/commons/HasNext.common';
import OtherCommon from '@/apps/api/src/app/commons/Other.common';
import {
  AnalysisModeMinMax,
  AnalysisType,
} from '@/apps/api/src/app/constants/enums/Analysis.enum';
import { CreationMode } from '@/apps/api/src/app/constants/enums/Creation.enum';
import { RedisService } from '@/shared/src/lib/services/redis/redis.service';
import { GetCollectionsWithTopNftsDTO } from './dto/get-collections-with-top-nfts';
import { sampleCollections } from './sample';
import { GetCollectionsWithTopNftsItem } from './types/query-response.types';
interface CollectionGeneral {
  totalOwner: number;
  volumn: string;
  totalNft: number;
  // floorPrice: bigint;
}

interface CollectionVolumeInterface {
  timestamp: string;
  total: string;
}

interface CollectionOwnernterface {
  timestamp: string;
  total: string;
  lastId: string;
}

@Injectable()
export class CollectionService {
  constructor(
    private prisma: PrismaService,
    private traitService: TraitService,
    private readonly collectionData: GetCollectionMarketData,
    private readonly collectionPriceService: CollectionPriceService,
    private userService: UserService,
    private readonly redisService: RedisService,
  ) {}

  private readonly endpoint = process.env.SUBGRAPH_URL;
  private client = this.getGraphqlClient();
  private getGraphqlClient() {
    return new GraphQLClient(this.endpoint);
  }

  private sdk = getSdk(this.client);

  async create(input: CreateCollectionDto, user: User): Promise<any> {
    let userCreator = user;
    try {
      const checkExist = await this.prisma.collection.findFirst({
        where: {
          OR: [
            { txCreationHash: input.txCreationHash },
            { name: input.name },
            { shortUrl: input.shortUrl },
          ],
        },
      });
      if (checkExist) {
        throw new Error(
          'Transaction hash or name or Short URL are already exists',
        );
      } else {
        if (input.modeCreate == CreationMode.outside) {
          if (!input.creatorAddress) {
            throw new Error('Please enter creator address.');
          }
          if (!ethers.utils.isAddress(input.creatorAddress)) {
            throw new Error('Invalid wallet address.');
          }
          userCreator = await this.userService.fetchOrCreateUser(
            input.creatorAddress,
          );
        }
        const collection = await this.prisma.collection.create({
          data: {
            txCreationHash: input.txCreationHash,
            name: input.name,
            symbol: input.symbol,
            description: input.description,
            status: TX_STATUS.PENDING,
            type: input.type,
            ...(input.shortUrl && { shortUrl: input.shortUrl }),
            coverImage: input.coverImage,
            metadata: input.metadata,
            avatar: input.avatar,
            // categoryId: ...(input.categoryId  Number(input.categoryId),
            ...(input.categoryId && { categoryId: Number(input.categoryId) }),
            source: input.source,
          },
        });

        await this.prisma.userCollection.create({
          data: {
            userId: userCreator.id,
            collectionId: collection.id,
          },
        });
        await this.redisService.publish('collection-channel', {
          data: {
            txCreation: collection.txCreationHash,
            type: collection.type,
          },
          process: 'collection-create',
        });
        return collection;
      }
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
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
        await this.collectionData.getAllCollectionExternal(collectionAddress);
      totalNftExternal = resultExternal.totalNftExternal;
      totalOwnerExternal = resultExternal.totalOwnerExternal;
    }

    const [statusCollection, contractOwner] = await Promise.all([
      this.collectionData.getCollectionCount(collectionAddress),
      this.collectionData.getContractInfor(collectionAddress),
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

  async findAll(
    input: GetAllCollectionDto,
  ): Promise<PagingResponseHasNext<CollectionEntity>> {
    // TODO: get all collection from subgraph first, got the id and map it back to local collection
    const creators = input.creatorAddresses
      ? await this.prisma.user.findMany({
          where: {
            publicKey: {
              in: input.creatorAddresses,
              mode: 'insensitive',
            },
          },
        })
      : [];
    const minBigInt = input.min ? OtherCommon.weiToEther(input.min) : undefined;
    const maxBigInt = input.max ? OtherCommon.weiToEther(input.max) : undefined;
    const addresses = creators.map((item) => item.id);
    let whereCondition: Prisma.CollectionWhereInput = {
      ...(input.name && {
        nameSlug: {
          contains: OtherCommon.stringToSlugSearch(input.name),
          mode: 'insensitive',
        },
      }),
      ...(input.source && {
        source: input.source,
      }),
      ...(addresses.length > 0 && {
        creators: {
          some: {
            userId: {
              in: addresses,
            },
          },
        },
      }),
      status: TX_STATUS.SUCCESS,
    };
    if (input.min) {
      whereCondition = {
        ...whereCondition,
        floor: {
          gte: minBigInt,
        },
      };
    }

    if (input.max) {
      whereCondition = {
        ...whereCondition,
        floor: {
          lte: maxBigInt,
        },
      };
    }

    if (input.gameId) {
      whereCondition = {
        ...whereCondition,
        gameLayergId: input.gameId,
      };
    }

    if (input.chainId) {
      whereCondition = {
        ...whereCondition,
        chainId: input.chainId,
      };
    }

    if (input.min && input.max) {
      whereCondition = {
        ...whereCondition,
        floor: {
          gte: minBigInt,
          lte: maxBigInt,
        },
      };
    }
    whereCondition = {
      ...whereCondition,
      isActive: true,
    };

    if (input.max && input.min && BigInt(input.min) > BigInt(input.max)) {
      return {
        data: [],
        paging: {
          hasNext: false,
          page: input.page,
          limit: input.limit,
        },
      };
    }
    const orderByProperties: Prisma.CollectionOrderByWithRelationInput[] = [];
    if (input.orderBy == 'price') {
      orderByProperties.push({ floorPrice: input.order });
    } else {
      orderByProperties.push({ createdAt: input.order });
    }
    orderByProperties.push({ metricPoint: input.order });

    const collections = await this.prisma.collection.findMany({
      where: whereCondition,
      skip: (input.page - 1) * input.limit,
      take: input.limit + 1,
      orderBy: orderByProperties,
      include: {
        creators: {
          select: {
            userId: true,
            user: {
              select: creatorSelect,
            },
          },
        },
        gameLayerg: {
          select: gameLayergSelect,
        },
      },
    });
    const hasNext = collections.length == input.limit + 1;
    if (hasNext) {
      collections.pop();
    }
    // const subgraphCollection = collections.map(async (item) => {
    //   const generalInfo = await this.getGeneralCollectionData(
    //     item.address,
    //     item.type,
    //   );
    //   return { ...item, ...generalInfo };
    // });
    // const dataArray = Promise.all(subgraphCollection);

    const dataArray = await Promise.all(
      collections.map(async (item) => {
        const generalInfo = await this.getGeneralCollectionData(
          item?.address,
          item?.type,
          item?.flagExtend,
          item?.volumeWei,
        );
        return { ...item, ...generalInfo };
      }),
    );
    return {
      data: await dataArray,
      paging: {
        hasNext,
        limit: input.limit,
        page: input.page,
      },
    };
    // }
  }

  async findOne(id: string): Promise<CollectionDetailDto> {
    try {
      const whereCondition: Prisma.CollectionWhereInput = {};
      whereCondition.OR = [];
      if (!isValidUUID(id)) {
        whereCondition.OR.push({ shortUrl: id }, { address: id });
      } else {
        whereCondition.OR.push({ id });
      }

      const collection = await this.prisma.collection.findFirst({
        where: {
          ...whereCondition,
          status: TX_STATUS.SUCCESS,
        },
        include: {
          creators: {
            select: {
              userId: true,
              user: {
                select: creatorSelect,
              },
            },
          },
        },
      });
      if (!collection) {
        throw new NotFoundException();
      }
      const { id: collectionId, address, type } = collection;

      // Parallelize async operations
      const [traitsAvailable, generalInfo, royalties] = await Promise.all([
        this.traitService.findUniqueTraitsInCollection(collectionId),
        this.getGeneralCollectionData(
          address,
          type,
          collection?.flagExtend,
          collection?.volumeWei,
        ),
        this.collectionPriceService.FetchRoyaltiesFromGraph(address),
      ]);
      const totalRoyalties = royalties.reduce(
        (acc, item) => acc + item.value,
        0,
      );

      const collectionReponse = {
        ...collection,
        totalRoyalties,
        listRoyalties: royalties,
      };
      return {
        collection: collectionReponse,
        traitAvailable: traitsAvailable,
        generalInfo,
      };
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async update(
    id: string,
    input: UpdateCollectionDto,
    user: User,
  ): Promise<any> {
    try {
      // Validate ID
      if (!isValidUUID(id)) {
        throw new Error('Invalid ID. Please try again!');
      }

      // Check if Collection Exists
      const existingCollection = await this.prisma.collection.findFirst({
        where: { id: id },
      });

      if (!existingCollection) {
        throw new NotFoundException();
      }

      // Check if User is the Creator of the Collection
      const isCreator = await this.prisma.userCollection.findFirst({
        where: { AND: [{ userId: user.id }, { collectionId: id }] },
      });

      if (!isCreator) {
        throw new Error(`You can't update this collection`);
      }

      const dataUpdateCollection: Prisma.CollectionUpdateInput = {};

      if (input.description) {
        dataUpdateCollection.description = input.description;
      }

      if (input.coverImage) {
        dataUpdateCollection.coverImage = input.coverImage;
      }

      if (input.shortUrl) {
        // Add a condition to check if input.shortUrl is different from existing shortUrl
        if (
          !existingCollection.shortUrl ||
          input.shortUrl !== existingCollection.shortUrl
        ) {
          dataUpdateCollection.shortUrl = input.shortUrl;
        }
      }

      // Update Collection
      try {
        const updatedCollection = await this.prisma.collection.update({
          where: { id: id },
          data: dataUpdateCollection,
        });
        return updatedCollection;
      } catch (error) {
        throw new Error(`Short URL already exists`);
      }
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async getCollectionsByUserId(userId: string) {
    const data = (await this.prisma.$queryRaw`
          SELECT
              n."collectionId",
              c."gameLayergId",
              c."name" AS "collection_name",
              g."name" AS "game_name",
              c."address" AS "collection_address",
              COUNT(*) AS "total_nft"
          FROM
              public."NFT" n
          INNER JOIN
              public."Collection" c ON n."collectionId" = c."id"
          LEFT JOIN
              public."GameLayerg" g ON c."gameLayergId" = g."id"
          WHERE
              n."ownerId" = ${userId}
          GROUP BY
              n."collectionId",
              c."gameLayergId",
              c."name",
              g."name",
              c."address";
      `) as Array<{
      total_nft: number;
      collectionId: string;
      gameLayergId: string;
      collection_name: string;
      collection_address: string;
      game_name: string;
    }>;
    const gamesWithCollections: Array<{
      game_id: string;
      total_nfts: number;
      game_name: string;
      collections: Array<{
        collectionId: string;
        collection_address: string;
        collection_name: string;
        total_nfts: number;
      }>;
    }> = [];
    data.forEach((item) => {
      const foundIndex = gamesWithCollections.findIndex(
        (game) => game.game_id === item.gameLayergId,
      );
      if (foundIndex === -1) {
        gamesWithCollections.push({
          game_id: item.gameLayergId,
          total_nfts: item.total_nft,
          game_name: item.game_name,
          collections: [
            {
              collectionId: item.collectionId,
              collection_name: item.collection_name,
              total_nfts: item.total_nft,
              collection_address: item.collection_address,
            },
          ],
        });
      } else {
        gamesWithCollections[foundIndex].total_nfts += item.total_nft;
        gamesWithCollections[foundIndex].collections.push({
          collectionId: item.collectionId,
          collection_name: item.collection_name,
          total_nfts: item.total_nft,
          collection_address: item.collection_address,
        });
      }
    });
    return gamesWithCollections;
  }
  async checkRecord(address: string) {
    try {
      const result = await this.redisService.getKey(address);
      return result ? JSON.parse(result) : null;
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async saveVolumeCollection(
    address: string,
    input: CollectionVolumeInterface,
  ) {
    try {
      const result = await this.redisService.setKeyObject(
        address,
        input,
        oneWeekInMilliseconds,
      );
      return result;
    } catch (error) {
      console.log(error);
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async saveOwnerCollection(address: string, input: CollectionOwnernterface) {
    try {
      const result = await this.redisService.setKeyObject(
        address,
        input,
        oneWeekInMilliseconds,
      );
      return result;
    } catch (error) {
      console.log(error);
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  // async getVolumeCollection(address: string) {
  // return '0';
  // const { blocks = [] } = await this.sdk.getActivity({ address });
  // const redisData = await this.checkRecord(address);
  // const lastUpdate = `${blocks?.[0]?.timestampt || ''}`;
  // const isTradeOrAcceptBid = (item: any) =>
  //   item.event === 'Trade' || item.event === 'AcceptBid';
  // const sum = blocks
  //   .filter(isTradeOrAcceptBid)
  //   .reduce((acc, obj) => acc + BigInt(obj.price), BigInt(0));
  // if (redisData !== null) {
  //   const redisTimestamp = parseInt(redisData.timestamp, 10);
  //   const newBlocks = blocks.filter(
  //     (item) => item.timestampt > redisTimestamp,
  //   );
  //   if (newBlocks.length > 0) {
  //     const sumNewBlock = newBlocks
  //       .filter(isTradeOrAcceptBid)
  //       .reduce((acc, obj) => acc + BigInt(obj.price), BigInt(0));
  //     const updatedTotal = (BigInt(redisData.total) + sumNewBlock).toString();
  //     await this.saveVolumeCollection(address, {
  //       timestamp: lastUpdate,
  //       total: updatedTotal,
  //     });
  //     return updatedTotal;
  //   }
  //   return sum;
  // } else {
  //   await this.saveVolumeCollection(address, {
  //     timestamp: lastUpdate,
  //     total: sum.toString(),
  //   });
  //   return sum;
  // }
  // }

  async getCountOwnerCollection(address: string) {
    const { ownedTokenCounts = [] } = await this.sdk.GetUniqueOwnersCount({
      contractAddress: address,
    });
    const redisData = await this.checkRecord(`${address}-owner`);
    const lastUpdate = `${ownedTokenCounts?.[0]?.timestamp || ''}`;
    const lastId = `${ownedTokenCounts?.[0]?.id || ''}`;

    if (redisData !== null) {
      const totalOwner = redisData.total;
      const redisTimestamp = parseInt(redisData.timestamp, 10);
      const redisLastId = redisData.lastId;

      const newOwner = ownedTokenCounts.filter(
        (item) =>
          item.timestamp > redisTimestamp ||
          (item.timestamp === redisTimestamp && item.id !== redisLastId),
      );

      if (newOwner.length > 0) {
        const newTotalOwner = newOwner.length;

        const updatedTotal = (
          BigInt(redisData.total) + BigInt(newTotalOwner)
        ).toString();
        await this.saveOwnerCollection(`${address}-owner`, {
          lastId: lastId,
          timestamp: lastUpdate,
          total: updatedTotal,
        });
        return updatedTotal;
      }
      return totalOwner;
    } else {
      const totalOwnerNullable = ownedTokenCounts.length;
      await this.saveOwnerCollection(`${address}-owner`, {
        lastId: lastId,
        timestamp: lastUpdate,
        total: totalOwnerNullable.toString(),
      });
      return totalOwnerNullable;
    }
  }

  async updateFloorPrice(collection: string) {
    await this.redisService.publish('collectionUtils-channel', {
      data: collection,
      process: 'update-floor-price',
    });
    return true;
  }

  async getAnalysis(input: GetAnalysisDto) {
    try {
      const minValue =
        input.minMaxBy === AnalysisModeMinMax.vol
          ? input.min
            ? parseFloat(input.min)
            : undefined
          : undefined;

      const maxValue =
        input.minMaxBy === AnalysisModeMinMax.vol
          ? input.max
            ? parseFloat(input.max)
            : undefined
          : undefined;

      // Construct whereCondition based on min and max values
      let whereCondition: Prisma.AnalysisCollectionWhereInput = {
        ...(input.search && {
          collection: {
            OR: [
              {
                nameSlug: {
                  contains: OtherCommon.stringToSlugSearch(input.search),
                  mode: 'insensitive',
                },
              },
              {
                address: {
                  contains: input.search,
                  mode: 'insensitive',
                },
              },
            ],
          },
        }),
        [input.minMaxBy]: {
          ...(minValue !== undefined && { gte: minValue }),
          ...(maxValue !== undefined && { lte: maxValue }),
        },
      };

      const { start: startDay, end: endDay } = CollectionHepler.getPastDay(1); // Current => Get back 1 day
      if (startDay && endDay) {
        whereCondition = {
          ...whereCondition,
          createdAt: {
            gte: startDay,
            lte: endDay,
          },
        };
      }

      // Determine sorting order based on input mode and order
      const orderBy: Prisma.Enumerable<Prisma.AnalysisCollectionOrderByWithAggregationInput> =
        [
          { createdAt: 'desc' }, // Default to sorting by createdAt first
          { [input.orderBy]: input.order }, // Dynamic sorting based on mode and order
        ];

      const dataAnalysis = await this.prisma.analysisCollection.findMany({
        where: whereCondition,
        skip: (input.page - 1) * input.limit,
        take: input.limit,
        include: {
          collection: {
            select: CollectionSelect,
          },
        },
        orderBy: orderBy,
      });

      const dataCompare = await Promise.all(
        dataAnalysis.map(async (item) => this.getAndCompare(item, input.type)),
      );

      const hasNext = await PaginationCommon.hasNextPage(
        input.page,
        input.limit,
        'analysisCollection',
        whereCondition,
      );

      return {
        data: dataCompare,
        paging: {
          hasNext: hasNext,
          limit: input.limit,
          page: input.page,
        },
      };
    } catch (error) {
      console.log(error);
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async getAndCompare(item: AnalysisCollection, type: AnalysisType) {
    try {
      const typeTimeMap = {
        [AnalysisType.ONEHOUR]: { amount: 1, unit: 'hours' },
        [AnalysisType.ONEWEEK]: { amount: 8, unit: 'days' },
        [AnalysisType.ONEMONTH]: { amount: 31, unit: 'days' },
        default: { amount: 2, unit: 'days' },
      };

      const { amount, unit } = typeTimeMap[type] ?? typeTimeMap.default;

      const { start: startPast, end: EndPast } = CollectionHepler.getPastDay(
        amount,
        unit,
      );

      const pastRecord = await this.prisma.analysisCollection.findFirst({
        where: {
          collectionId: item.collectionId,
          createdAt: {
            gte: startPast,
            lte: EndPast,
          },
        },
      });

      if (!pastRecord) {
        return {
          volumeChange: BigInt(0),
          floorPriceChange: BigInt(0),
          ...item,
        };
      }

      const calculateChangeBigInt = (current: bigint, past: bigint) =>
        past > Number(0)
          ? ((Number(current) - Number(past)) / Number(past)) * Number(100)
          : Number(0);

      const calculateChange = (current: any, past: any) =>
        past > 0 ? ((current - past) / past) * 100 : 0;

      const volumeChange = calculateChange(item?.volume, pastRecord.volume);
      const floorPriceChange = calculateChangeBigInt(
        item?.floorPrice,
        pastRecord.floorPrice,
      );

      return { volumeChange, floorPriceChange, ...item };
    } catch (error) {
      throw new HttpException(
        `Error in function getAndCompare: ${error.message}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async migrate() {
    console.log(123);
    await Promise.allSettled(
      sampleCollections.map(async (item) => {
        const collection = await this.prisma.collection.create({
          data: {
            id: item.id,
            name: item.name,
            address: item.address,
            type: item.type as CONTRACT_TYPE,
            symbol: item.symbol,
            txCreationHash: item.txCreationHash,
            avatar: item.avatar,
            isActive: true,
            description: item.description,
            status: TX_STATUS.SUCCESS,
            createdAt: item.createdAt,
            updatedAt: item.updatedAt,
            chainId: BigInt('2484'),
          },
        });
      }),
    );
  }

  async getCollectionsGameId(gameId: string) {
    const data = (await this.prisma.$queryRaw`
                  SELECT COUNT("collectionId") as "total_nft","collectionId",
                        "gameLayergId", public."Collection"."name" as "collection_name",
                        public."GameLayerg"."name" as "game_name", public."Collection"."address" as "collection_address"
                  FROM public."NFT"
                  LEFT JOIN public."Collection"
                  ON "collectionId" = public."Collection"."id"
                  LEFT JOIN public."GameLayerg"
                  ON "gameLayergId" = public."GameLayerg"."id"
                  WHERE "gameLayergId" = ${gameId}
                  GROUP BY "collectionId", "gameLayergId",
                  public."Collection"."name", public."GameLayerg"."name", public."Collection"."address"`) as Array<{
      total_nft: number;
      collectionId: string;
      gameLayergId: string;
      collection_name: string;
      collection_address: string;
      game_name: string;
    }>;
    const gamesWithCollections: Array<{
      game_id: string;
      total_nfts: number;
      game_name: string;
      collections: Array<{
        collectionId: string;
        collection_address: string;
        collection_name: string;
        total_nfts: number;
      }>;
    }> = [];
    data.forEach((item) => {
      const foundIndex = gamesWithCollections.findIndex(
        (game) => game.game_id === item.gameLayergId,
      );
      if (foundIndex === -1) {
        gamesWithCollections.push({
          game_id: item.gameLayergId,
          total_nfts: item.total_nft,
          game_name: item.game_name,
          collections: [
            {
              collectionId: item.collectionId,
              collection_name: item.collection_name,
              total_nfts: item.total_nft,
              collection_address: item.collection_address,
            },
          ],
        });
      } else {
        gamesWithCollections[foundIndex].total_nfts += item.total_nft;
        gamesWithCollections[foundIndex].collections.push({
          collectionId: item.collectionId,
          collection_name: item.collection_name,
          total_nfts: item.total_nft,
          collection_address: item.collection_address,
        });
      }
    });
    return gamesWithCollections;
  }

  async getCollectionsWithTopNfts(
    getCollectionsWithTopNftsDTO: GetCollectionsWithTopNftsDTO,
  ) {
    const {
      gameId,
      userId,
      limit,
      page,
      top = 5,
      name = '',
    } = getCollectionsWithTopNftsDTO;
    const offset = limit * (page - 1);
    const args: (string | number)[] = [];

    if (userId) {
      args.push(userId);
    }
    let whereClause = '';
    if (gameId) {
      whereClause = gameId
        ? ` c."gameLayergId" = $${args.length + 1} AND c."isActive" = true`
        : ' c."isActive" = true';
      args.push(gameId);
    }
    args.push(`'${name}:*'`, limit + 1, offset, top);
    const data = (await this.prisma.$queryRawUnsafe(
      `
WITH user_addresses AS (
  SELECT "aaAddress"
  FROM "public"."AAWallet"
  ${userId ? `WHERE "userId" = $1::uuid` : ''}
),
user_ownerships AS (
  SELECT o.*
  FROM "public"."Ownership" o
  ${userId ? `JOIN user_addresses ua ON o."userAddress" = ua."aaAddress"` : ''}
  WHERE o."quantity" > 0
),
filtered_collections AS (
  SELECT DISTINCT c.*
  FROM "public"."Collection" c
  ${userId ? `JOIN user_ownerships uo ON uo."collectionId" = c."id"` : ''}
  ${name ? `WHERE to_tsvector('english', c.name) @@ to_tsquery('english', $${args.length - 3})` : ''}
  ${whereClause ? `${name ? '' : 'WHERE'} ${whereClause}` : ''}
  ORDER BY c."updatedAt" DESC
  LIMIT $${args.length - 2} OFFSET $${args.length - 1}
),
ranked_nfts AS (
  SELECT DISTINCT ON (o."nftId", o."collectionId")
    o.*,
    ROW_NUMBER() OVER (
      PARTITION BY o."collectionId"
      ORDER BY o."updatedAt" DESC
    ) AS rank
  FROM user_ownerships o
  WHERE o."collectionId" IN (SELECT id FROM filtered_collections)
)
SELECT
  nft.*,
  c.name AS "collection_name",
  c.address AS "collection_address"
FROM filtered_collections c
LEFT JOIN ranked_nfts rn
  ON rn."collectionId" = c."id" AND rn.rank <= $${args.length}
LEFT JOIN "public"."NFT" nft
  ON nft."id" = rn."nftId" AND nft."collectionId" = rn."collectionId"
ORDER BY c."id", rn.rank;

      `,
      ...args,
    )) as Array<GetCollectionsWithTopNftsItem>;
    const collectionsMap = new Map<
      string,
      {
        collection_id: string;
        collection_name: string;
        collection_address: string;
        nfts: NFT[];
      }
    >();
    let hasNext = false;
    for (const item of data) {
      if (!collectionsMap.has(item.collectionId)) {
        if (collectionsMap.size === limit) {
          hasNext = true;
          break;
        }
        collectionsMap.set(item.collectionId, {
          collection_id: item.collectionId,
          collection_name: item.collection_name,
          collection_address: item.collection_address,
          nfts: [],
        });
      }
      collectionsMap.get(item.collectionId).nfts.push(item);
    }

    return {
      data: Array.from(collectionsMap.values()),
      paging: {
        limit,
        hasNext,
        page,
      },
    };
  }
}
