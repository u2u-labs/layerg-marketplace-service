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
import { GetCollectionByUserDto } from './dto/get-collection-by-user.dto';
import { CollectionDetailDto } from './dto/get-detail-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';
import { CollectionEntity } from './entities/collection.entity';

// import SecureUtil from '../../commons/Secure.common';

import {
  collectionSelect,
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
import { sampleCollections } from './sample';
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
    // const minBigInt = input.min
    //   ? BigInt(input.min) / BigInt(10) ** 18n
    //   : undefined;
    // const maxBigInt = input.max
    //   ? BigInt(input.max) / BigInt(10) ** 18n
    //   : undefined;
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
      take: input.limit,
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
    const hasNext = await PaginationCommon.hasNextPage(
      input.page,
      input.limit,
      'collection',
      whereCondition,
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

  async findWithUserIDOrAddress(
    id: string,
    input: GetCollectionByUserDto,
  ): Promise<PagingResponse<CollectionEntity>> {
    console.log('🚀 ~ id:', id);
    try {
      let isUuid = true;
      if (!isValidUUID(id)) {
        isUuid = false;
      }
      const userWithCollection = await this.prisma.userCollection.findMany({
        where: {
          user: {
            ...(isUuid
              ? { id }
              : {
                  OR: [{ signer: id?.toLowerCase() }, { shortLink: id }],
                }),
          },
          collection: {
            status: TX_STATUS.SUCCESS,
          },
        },
        skip: (input.page - 1) * input.limit,
        take: input.limit,
        include: {
          collection: {
            select: collectionSelect,
          },
        },
      });
      const response = userWithCollection.map((item) => {
        return { collection: item.collection };
      });

      if (input.hasBase) {
        const baseCollection721 = await this.prisma.collection.findUnique({
          where: {
            address: process.env.BASE_ADDR_721,
          },
        });
        const baseCollection1155 = await this.prisma.collection.findUnique({
          where: {
            address: process.env.BASE_ADDR_1155,
          },
        });

        if (baseCollection721) {
          response.push({ collection: baseCollection721 } as any);
        }
        if (baseCollection1155) {
          response.push({ collection: baseCollection1155 } as any);
        }
      }

      const total = await this.prisma.userCollection.count({
        where: {
          user: {
            ...(isUuid ? { id } : { OR: [{ signer: id }, { shortLink: id }] }),
          },
          collection: {
            status: TX_STATUS.SUCCESS,
          },
        },
      });

      const collections = response.map((i) => i.collection);

      const subgraphCollection = collections.map(async (item) => {
        const generalInfo = await this.getGeneralCollectionData(
          item?.address,
          item?.type,
          item?.flagExtend,
          item?.volumeWei,
        );
        return { ...item, ...generalInfo };
      });
      const dataArray = await Promise.all(subgraphCollection);
      return {
        data: dataArray,
        paging: {
          total: total,
          limit: input.limit,
          page: input.page,
        },
      };
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
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
}
