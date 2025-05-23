import { PrismaService } from '@layerg-mkp-workspace/shared/services';
import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  CONTRACT_TYPE,
  ORDERSTATUS,
  ORDERTYPE,
  Prisma,
  TX_STATUS,
  User,
} from '@prisma/client';
import { ethers } from 'ethers';
import { GraphQLClient } from 'graphql-request';
import { validate as isValidUUID } from 'uuid';

import { GraphQlcallerService } from '../graph-qlcaller/graph-qlcaller.service';
import { OwnerOutputDto } from '../user/dto/owners.dto';
import { ValidatorService } from '../validator/validator.service';
import { ActivityService } from './activity.service';
import { GetActivityBase, GetHistoryOrderDto } from './dto/activity-nft.dto';
import { CreateNftDto } from './dto/create-nft.dto';
import { GetAllNftDto, GetSweepOrdersDto } from './dto/get-all-nft.dto';
import { CollectionDetailDto, NftDto } from './dto/nft.dto';
import { MarketplaceService } from './nft-marketplace.service';

// import { ZERO_ADDR } from '@/apps/api/src/app/constants/web3Const/messages';

import {
  CollectionSelect,
  creatorSelect,
  nftOwnerShip,
  orderNFTSelect,
  userSelect,
} from '../../commons/definitions/Constraint.Object';
import { CollectionPriceService } from '../collection/collectionPrice.service';
import {
  GetGeneralInforAllDto,
  GetGeneralInforDto,
} from './dto/get-general-infor.dto';
import { NftEntity } from './entities/nft.entity';
import subgraphServiceCommon from './helper/subgraph-helper.service';

// import { GeneralInfor } from '@/apps/api/src/app/constants/enums/GeneralInfor.enum';
import { UserService } from '../user/user.service';
import { NFTHepler } from './helper/nft-helper.service';

import OtherCommon from '@/apps/api/src/app/commons/Other.common';
import { CreationMode } from '@/apps/api/src/app/constants/enums/Creation.enum';
import { GeneralInfor } from '@/apps/api/src/app/constants/enums/GeneralInfor.enum';
import { ZERO_ADDR } from '@/apps/api/src/app/constants/web3Const/messages';
import { OrderDirection } from '@/apps/api/src/app/generated/graphql';
import { RedisService } from '@/shared/src/lib/services/redis/redis.service';
import { sampleNfts } from './sample';

@Injectable()
export class NftService {
  constructor(
    private prisma: PrismaService,
    private readonly GraphqlService: GraphQlcallerService,
    private readonly eventService: MarketplaceService,
    private validatorService: ValidatorService,
    private activityService: ActivityService,
    private collectionPriceService: CollectionPriceService,
    private nftHepler: NFTHepler,
    private userService: UserService,
    private redisService: RedisService,
  ) {}

  private readonly endpoint = process.env.SUBGRAPH_URL;
  private client = this.getGraphqlClient();
  private getGraphqlClient() {
    return new GraphQLClient(this.endpoint);
  }
  async crawlNftInfo(collectionAddress: string, txCreation?: string) {
    try {
      const collection = await this.prisma.collection.findUnique({
        where: { address: collectionAddress.toLowerCase() },
      });
      if (!collection) {
        throw new NotFoundException('Collection not found');
      }
      if (!txCreation) {
        await this.redisService.publish('nft-channel', {
          data: {
            type: collection.type,
            collectionAddress: collection.address,
          },
          process: 'nft-crawl-collection',
        });
        return true;
      } else {
        await this.redisService.publish('nft-channel', {
          data: {
            type: collection.type,
            txCreation: txCreation,
          },
          process: 'nft-crawl-single',
        });
      }
    } catch (err) {
      throw new Error(err);
    }
  }
  async create(input: CreateNftDto, user: User): Promise<NftDto> {
    try {
      let userCreator = user;
      const checkExist = await this.prisma.nFT.findFirst({
        where: {
          txCreationHash: input.txCreationHash,
        },
      });
      if (checkExist) {
        throw new BadRequestException('Transaction already submitted');
      }
      const collection = await this.prisma.collection.findFirst({
        where: {
          address: {
            mode: 'insensitive',
            contains: input.collectionId,
          },
        },
      });
      // if (!isValidUUID(input.creatorId)) {
      //   throw new Error('Invalid Creator ID. Please try again !');
      // }

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

      if (!collection) throw new NotFoundException('Collection not found');

      const collectionHasNameNFT =
        await this.validatorService.checkNFTExistence(
          'name',
          'collectionId',
          input.name,
          collection.id,
        );

      if (collectionHasNameNFT) {
        throw new Error('The name of the NFT already exists in Collection');
      }

      if (checkExist) {
        throw new Error('Transaction hash or ID already exists');
      }

      const nft = await this.prisma.nFT.create({
        data: {
          u2uId: input.u2uId,
          id: input.id,
          name: input.name,
          image: input.image,
          status: TX_STATUS.PENDING,
          tokenUri: input.tokenUri,
          txCreationHash: input.txCreationHash,
          creatorId: userCreator.id,
          collectionId: collection.id,
          animationUrl: input.animationUrl,
          source: input.source,
          ownerId: input.creatorAddress,
        },
        include: {
          traits: true,
          collection: true,
        },
      });
      await this.prisma.userNFT.create({
        data: {
          userId: userCreator.id,
          nftId: input.id,
          collectionId: collection.id,
        },
      });
      await this.redisService.publish('nft-channel', {
        data: {
          txCreation: nft.txCreationHash,
          type: nft.collection.type,
          collectionId: collection.id,
        },
        process: 'nft-create',
      });
      await this.redisService.publish('ipfs', {
        data: {
          collectionAddress: collection.address,
          tokenId: nft.id,
          ipfsUrl: nft.tokenUri.replace('ipfs://', ''),
        },
        process: 'get-ipfs',
      });
      return nft;
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  // async findAll(filter: GetAllNftDto): Promise<PagingResponseHasNext<NftDto>> {
  async findAll(filter: GetAllNftDto) {
    // TODO: Reimplement pagination strategy
    // Get the result totally from subgraph and match data to local storage
    // For each set of condition, use different subgraph query as source
    // owner: getNFTFromOwner
    // owner + sellStatus + priceMax + priceMin + collectionType: marketplace721S and marketplace1155S
    try {
      let traitsConditions = [];

      const isCheckFilter = ['name', 'gameId', 'chainId'];
      const hasMatchingKey = Object.keys(filter).some((key) =>
        isCheckFilter.includes(key),
      );

      // TODO: if price and status are included, then use subgraph as main source and use other to eliminate
      if (filter.traits) {
        traitsConditions = filter.traits.map((trait) => ({
          traits: {
            some: {
              trait_type: trait.trait_type,
              ...(trait.value && { value: trait.value }),
              ...(trait.display_type && { display_type: trait.display_type }),
            },
          },
        }));
      }
      let nftIdFromOwner = [];
      let nftCollectionFromOwner = [];
      let hasNextNftOwner = false;
      if (filter.ownerId) {
        const {
          nftIdFromOwner: ids = [],
          nftCollectionFromOwner: collections = [],
          hasNextNftOwner: hasNext = false,
        } = (await this.nftHepler.handleGetOwnerNFT(filter)) || {};
        nftIdFromOwner = ids;
        nftCollectionFromOwner = collections;
        hasNextNftOwner = hasNext;
      }

      const whereCondition: Prisma.NFTWhereInput = {};
      const whereConditionInternal: Prisma.NFTWhereInput = {};
      whereConditionInternal.AND = [];
      whereCondition.OR = [];

      // Handle traits conditions
      if (traitsConditions.length > 0) {
        whereConditionInternal.AND.push(...traitsConditions);
      }

      whereConditionInternal.AND.push({
        status: TX_STATUS.SUCCESS,
      });

      whereConditionInternal.AND.push({
        isActive: true,
      });
      if (filter.creatorAddress) {
        whereConditionInternal.AND.push({
          creator: {
            publicKey: filter.creatorAddress,
          },
        });
      }
      if (filter.source) {
        const collectionCondition: Prisma.CollectionWhereInput = {};
        collectionCondition.source = filter.source;
        whereConditionInternal.AND.push({ collection: collectionCondition });
      }

      if (filter.collectionAddress || filter.type) {
        const collectionCondition: Prisma.CollectionWhereInput = {};

        if (filter.collectionAddress) {
          collectionCondition.address = filter.collectionAddress;
        }

        if (filter.type) {
          collectionCondition.type = filter.type;
        }

        whereConditionInternal.AND.push({ collection: collectionCondition });
      }

      if (filter.name) {
        whereConditionInternal.AND.push({
          OR: [
            {
              nameSlug: {
                contains: OtherCommon.stringToSlugSearch(filter.name),
                mode: 'insensitive',
              },
            },
            {
              slug: {
                contains: OtherCommon.stringToSlugSearch(filter.name),
                mode: 'insensitive',
              },
            },
          ],
        });
      }

      if (filter.chainId) {
        whereConditionInternal.AND.push({
          collection: {
            chainId: filter.chainId,
          },
        });
      }

      if (filter.gameId) {
        whereConditionInternal.AND.push({
          collection: {
            gameLayergId: filter.gameId,
          },
        });
      }

      if (nftIdFromOwner.length > 0) {
        const collectionToTokenIds: Record<string, string[]> = {};
        for (let i = 0; i < nftIdFromOwner.length; i++) {
          const collection = nftCollectionFromOwner[i];
          if (!collectionToTokenIds[collection]) {
            collectionToTokenIds[collection] = [];
          }
          collectionToTokenIds[collection].push(nftIdFromOwner[i]);
        }
        for (const [collection, tokenIds] of Object.entries(
          collectionToTokenIds,
        )) {
          const tokenIdConditions = tokenIds.map((tokenId) => ({
            OR: [{ u2uId: tokenId }, { id: tokenId }],
          }));
          whereCondition.OR.push({
            AND: [
              { OR: tokenIdConditions },
              {
                collectionId: collection,
              },
              ...whereConditionInternal.AND,
            ],
          });
        }
        // eslint-disable-next-line no-empty
      } else if (filter.ownerId) {
      } else {
        whereCondition.AND = whereConditionInternal.AND;
        delete whereCondition.OR;
      }
      if (
        (!filter.priceMin &&
          !filter.priceMax &&
          (!filter.orderType || !filter.orderStatus)) ||
        hasMatchingKey == true
      ) {
        if (filter.quoteToken !== undefined) {
          whereCondition.OrderByTokenId = { some: {} };
          whereCondition.OrderByTokenId.some.quoteToken =
            filter.quoteToken.toLowerCase();
        }
        const whereOrder: Prisma.OrderWhereInput =
          this.nftHepler.generateWhereOrder(filter);

        if (filter.orderBy === 'price') {
          whereOrder.nftById = whereCondition;
          const { result, hasNext } = await this.nftHepler.getListNFTWithOrder(
            filter,
            whereOrder,
          );
          return {
            data: result,
            paging: {
              hasNext: hasNext,
              limit: filter.limit,
              page: filter.page,
            },
          };
        } else {
          const orderByProperties: Prisma.NFTOrderByWithRelationInput[] = [];

          if (filter.orderBy == 'time') {
            orderByProperties.push({ createdAt: filter.order });
          } else {
            orderByProperties.push({ metricPoint: 'desc' });
            orderByProperties.push({ createdAt: 'desc' });
          }

          const nfts = await this.prisma.nFT.findMany({
            ...(!filter.ownerId && {
              skip: (filter.page - 1) * filter.limit,
              take: filter.limit + 1,
            }),
            where: whereCondition,
            orderBy: orderByProperties,
            include: {
              creator: {
                select: creatorSelect,
              },
              collection: {
                select: CollectionSelect,
              },
              OrderByTokenId: {
                select: orderNFTSelect,
                where: whereOrder,
                take: 1,
                orderBy: { priceNum: 'desc' },
              },
            },
          });
          // Remove last element in array
          const nextPageExists = nfts?.length == filter.limit + 1;

          if (nextPageExists) {
            nfts.pop();
          }
          const Nftformat =
            await this.nftHepler.handleFormatNFTResponseOrder(nfts);

          const hasNext = hasMatchingKey
            ? nextPageExists
            : nextPageExists || hasNextNftOwner;
          return {
            data: Nftformat,
            paging: {
              hasNext: hasNext,
              limit: filter.limit,
              page: filter.page,
            },
          };
        }
      } else {
        if (Number(filter.priceMin) > Number(filter.priceMax)) {
          // If priceMin is higher than priceMax, return an empty array
          return {
            data: [],
            paging: {
              hasNext: false,
              limit: filter.limit,
              page: filter.page,
            },
          };
        }
        const whereOrder: Prisma.OrderWhereInput =
          this.nftHepler.generateWhereOrder(filter);
        const whereCondition1: Prisma.NFTWhereInput = {
          AND: [whereCondition],
        };
        // Ensure that MarketplaceByTokenId is initialized
        if (!whereCondition1.OrderByTokenId) {
          whereCondition1.OrderByTokenId = { some: {} };
        }

        if (filter.priceMin !== undefined || filter.priceMax !== undefined) {
          whereCondition1.OrderByTokenId.some.priceNum = {};
          if (filter.priceMin !== undefined) {
            whereCondition1.OrderByTokenId.some.priceNum.gte = Number(
              OtherCommon.weiToEther(filter.priceMin),
            );
          }
          if (filter.priceMax !== undefined) {
            whereCondition1.OrderByTokenId.some.priceNum.lte = Number(
              OtherCommon.weiToEther(filter.priceMax),
            );
          }
        }
        // Check if filter.from or filter.quoteToken is defined before adding it to the query
        if (filter.from !== undefined || filter.ownerId !== undefined) {
          const ownerAddress = await this.prisma.user.findFirst({
            where: {
              signer:
                (filter.orderStatus === ORDERSTATUS.OPEN &&
                  filter.orderType == ORDERTYPE.SINGLE) ||
                (filter.orderType == ORDERTYPE.BULK && filter.ownerId)
                  ? filter.ownerId.toLowerCase()
                  : filter.from,
            },
          });
          whereCondition1.OrderByTokenId.some.makerId = ownerAddress.id;
        }

        whereCondition1.OrderByTokenId.some = {
          // quoteToken:
          //   (filter.quoteToken
          //     ? filter.quoteToken.toLowerCase()
          //     : process.env.NATIVE_U2U) ?? process.env.NATIVE_U2U,
          orderStatus: filter.orderStatus, // Adding orderStatus condition
          orderType: { in: ['BULK', 'SINGLE'] }, // Adding orderType condition
          start: {
            lte: Math.floor(Date.now() / 1000), // Adding start condition with current date fallback
          },
          end: {
            gte: Math.floor(Date.now() / 1000), // Adding end condition with current date fallback
          },
        };

        if (filter.quoteToken !== undefined) {
          whereCondition1.OrderByTokenId.some.quoteToken =
            (filter.quoteToken
              ? filter.quoteToken.toLowerCase()
              : process.env.NATIVE_U2U) ?? process.env.NATIVE_U2U;
        }
        if (filter.orderBy === 'price') {
          whereOrder.nftById = whereCondition1;
          const { result, hasNext } = await this.nftHepler.getListNFTWithOrder(
            filter,
            whereOrder,
          );
          return {
            data: result,
            paging: {
              hasNext: hasNext,
              limit: filter.limit,
              page: filter.page,
            },
          };
        } else {
          const orderByProperties: Prisma.NFTOrderByWithRelationInput[] = [];

          if (filter.orderBy == 'time') {
            orderByProperties.push({ createdAt: filter.order });
          } else {
            orderByProperties.push({ metricPoint: 'desc' });
            orderByProperties.push({ createdAt: 'desc' });
          }

          const nfts = await this.prisma.nFT.findMany({
            ...(!filter.ownerId && {
              skip: (filter.page - 1) * filter.limit,
              take: filter.limit,
            }),
            where: whereCondition1,
            orderBy: orderByProperties,
            include: {
              creator: {
                select: creatorSelect,
              },
              collection: {
                select: CollectionSelect,
              },
              OrderByTokenId: {
                select: orderNFTSelect,
                where: whereOrder,
                take: 1,
                orderBy: { priceNum: 'asc' },
              },
            },
          });
          // remove last element in array
          const hasNext = nfts?.length == filter.limit + 1;
          if (hasNext) {
            nfts.pop();
          }
          const Nftformat =
            await this.nftHepler.handleFormatNFTResponseOrder(nfts);
          return {
            data: Nftformat,
            paging: {
              hasNext: hasNext,
              limit: filter.limit,
              page: filter.page,
            },
          };
        }
      }
    } catch (error) {
      console.error(error);
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async getNftDetailTransactionInfo(
    nftId: string,
    collectionAddress: string,
    page: number,
    limit: number,
  ) {
    const collection =
      (await this.prisma.collection.findUnique({
        where: { address: collectionAddress.toLowerCase() },
      })) ||
      (await this.prisma.collection.findUnique({
        where: { address: collectionAddress },
      }));
    if (!collection) {
      throw new NotFoundException('No collection was found');
    }
    // Fetch NFT details
    const nft = await this.prisma.nFT.findUnique({
      where: { id_collectionId: { id: nftId, collectionId: collection.id } },
      include: {
        creator: { select: creatorSelect },
        collection: { select: CollectionSelect },
        traits: true,
      },
    });
    if (!nft) {
      throw new NotFoundException();
    }
    const owners = await this.prisma.ownership.findMany({
      where: {
        collectionId: collection.id,
        nftId: nft.id,
      },
    });

    // Fetch sell and bid info
    const [sellInfo, bidInfo] = await Promise.all([
      this.eventService.findOrder({
        contractAddress: nft.collection.address,
        nftId: nft.id,
        status: [ORDERSTATUS.OPEN, ORDERSTATUS.PENDING],
        event: [ORDERTYPE.BULK, ORDERTYPE.SINGLE],
        page,
        limit,
      }),
      this.eventService.findOrder({
        contractAddress: nft.collection.address,
        nftId: nft.id,
        status: [ORDERSTATUS.OPEN, ORDERSTATUS.PENDING],
        event: [ORDERTYPE.BID],
        page,
        limit,
      }),
    ]);

    // Get unique bidder and seller addresses
    const bidderAddress = bidInfo
      .map((bid) => bid?.Taker?.signer)
      .filter(Boolean);
    const sellerAddress = [
      ...new Set(sellInfo.concat(bidInfo).map((sell) => sell.Maker?.signer)),
    ].filter(Boolean);

    // Fetch bidder and seller information
    const [bidderInfo, sellerInfo] = await Promise.all([
      this.prisma.user.findMany({
        where: { signer: { in: bidderAddress } },
        select: userSelect,
      }),
      this.prisma.user.findMany({
        where: { signer: { in: sellerAddress } },
        select: userSelect,
      }),
    ]);

    // Merge bidder info
    const mergedBidder = bidInfo.map((bid) => {
      const match = bidderInfo.find(
        (user) => user.signer === bid?.Taker?.signer,
      );
      return match ? { ...bid, to: match } : bid;
    });

    // Merge seller info
    const mergedSeller = sellInfo.map((sell) => {
      const match = sellerInfo.find(
        (user) => user.signer === sell?.Maker?.signer,
      );
      return match ? { ...sell, Maker: match } : sell;
    });

    // Handle LAYERG-specific logic

    return {
      bidInfo: mergedBidder,
      sellInfo: mergedSeller,
      owners,
      totalSupply: nft?.totalSupply || 0,
    };
  }

  async getCurrentOwnersExtend(
    subgraphUri: string,
    nft: NftEntity,
  ): Promise<{ owners: OwnerOutputDto[]; totalSupply: number }> {
    let owners: OwnerOutputDto[] = [];
    let nftInfoWithOwner;
    let totalSupply = 0;
    if (nft.collection.type === 'ERC1155') {
      nftInfoWithOwner = await subgraphServiceCommon.subgraphQuery(
        subgraphUri,
        CONTRACT_TYPE.ERC1155,
        nft.id,
      );
      const totalSupplyFilter = nftInfoWithOwner?.userBalances?.filter(
        (i) => i.balance > 0 && i?.token?.balance > 0,
      );

      totalSupply =
        totalSupplyFilter?.length > 0 &&
        totalSupplyFilter?.[0] &&
        totalSupplyFilter[0]?.token?.balance;
      const ownerAddresses = nftInfoWithOwner?.userBalances
        ?.map((i) => {
          if (i.owner && i.owner.id !== ZERO_ADDR && i?.token?.balance > 0) {
            return i.owner.id;
          }
        })
        .filter((i) => !!i);
      const ownersFromLocal = await this.prisma.user.findMany({
        where: {
          signer: { in: ownerAddresses },
        },
        select: creatorSelect,
      });
      owners = ownersFromLocal.map((item2) => {
        const item1 = nftInfoWithOwner.userBalances.find(
          (i1) => i1.owner && i1.owner.id === item2.signer,
        );
        if (item1) {
          return {
            ...item2,
            publicKey: item2?.publicKey ?? item2?.signer,
            username: item2?.username ?? item2?.signer,
            quantity: item1?.balance,
          };
        }
        return item2;
      });
    } else {
      nftInfoWithOwner = await subgraphServiceCommon.subgraphQuery(
        subgraphUri,
        CONTRACT_TYPE.ERC721,
        nft.id,
      );
      totalSupply = 1;
      const ownerId = nftInfoWithOwner?.items?.[0]?.owner?.id;
      owners = await this.prisma.user.findMany({
        where: {
          signer: ownerId,
        },
        select: creatorSelect,
      });
    }

    if (owners.length === 0) {
      if (nft.collection.type === 'ERC1155') {
        const ownersNon =
          nftInfoWithOwner?.userBalances?.map((item) => ({
            signer: item?.owner?.id || '',
            quantity: item?.balance || 0,
          })) || [];

        return {
          owners: ownersNon,
          totalSupply: totalSupply,
        };
      } else {
        return {
          owners: [
            {
              signer: nftInfoWithOwner?.items?.[0]?.owner?.id || '',
            },
          ],
          totalSupply,
        };
      }
    } else {
      return { owners, totalSupply };
    }
  }

  async getCurrentOwnersInternal(
    nft: NftEntity,
  ): Promise<{ owners: OwnerOutputDto[]; totalSupply: number }> {
    let owners: OwnerOutputDto[] = [];
    let nftInfoWithOwner;
    let totalSupply = 0;
    if (nft.collection.type === 'ERC1155') {
      nftInfoWithOwner = await this.GraphqlService.getOneNFTOwnersInfo1155(
        nft.collection.address,
        nft.u2uId ? nft.u2uId : nft.id,
      );
      const totalSupplyFilter = nftInfoWithOwner.erc1155Balances.filter(
        (i) => i.value > 0 && !i.account,
      );
      totalSupply = totalSupplyFilter?.length > 0 && totalSupplyFilter[0].value;
      const ownerAddresses = nftInfoWithOwner.erc1155Balances
        .map((i) => {
          if (i.account && i.account.id !== ZERO_ADDR && i.value > 0)
            return i.account.id;
        })
        .filter((i) => !!i);
      const ownersFromLocal = await this.prisma.user.findMany({
        where: {
          signer: { in: ownerAddresses },
        },
        select: creatorSelect,
      });
      owners = ownersFromLocal.map((item2) => {
        const item1 = nftInfoWithOwner.erc1155Balances.find(
          (i1) => i1.account && i1.account.id === item2.signer,
        );
        if (item1) {
          return {
            ...item2,
            quantity: item1.value,
          };
        }
        return item2;
      });
    } else {
      nftInfoWithOwner = await this.GraphqlService.getOneNFTOwnersInfo721(
        nft.collection.address,
        nft.u2uId ? nft.u2uId : nft.id,
      );
      totalSupply = 1;
      owners = await this.prisma.user.findMany({
        where: {
          signer: nftInfoWithOwner.erc721Tokens[0].owner.id,
        },
        select: creatorSelect,
      });
    }
    if (owners.length === 0) {
      return {
        // @ts-ignore
        owners: [
          {
            signer:
              nftInfoWithOwner?.erc721Tokens?.length > 0 &&
              nftInfoWithOwner?.erc721Tokens[0].owner.id,
          },
        ],
        totalSupply,
      };
    } else {
      return { owners, totalSupply };
    }
  }

  async findOne(input: CollectionDetailDto) {
    // const { id, collectionAddress, chainId } = input;
    const { slug } = input;
    try {
      const nft = await this.prisma.nFT.findFirst({
        where: {
          slug,
          // collection: {
          //   address: collectionAddress,
          //   chainId: BigInt(chainId),
          // },
        },
        include: {
          creator: {
            select: creatorSelect,
          },
          collection: {
            select: {
              address: true,
              name: true,
              id: true,
              avatar: true,
              coverImage: true,
              type: true,
              gameLayerg: {
                select: {
                  id: true,
                  name: true,
                  appKey: true,
                },
              },
            },
          },
          traits: true,
        },
      });
      if (!nft) {
        throw new NotFoundException('No NFT found');
      }
      // let owners: OwnerOutputDto[];
      const owners = await this.prisma.ownership.findMany({
        where: {
          nftId: nft.id,
          collectionId: nft.collection.id,
        },
      });
      // @ts-ignore
      // nft.owners = owners;
      // const royalties =
      //   await this.collectionPriceService.FetchRoyaltiesFromGraph(
      //     collectionAddress,
      //   );
      // const totalRoyalties = royalties.reduce(
      //   (acc, item) => acc + item.value,
      //   0,
      // );
      const returnNft = {
        ...nft,
        owners: owners,
      };
      // if (nft.collection?.flagExtend == true && !returnNft?.creator) {
      //   const creator = await this.prisma.userCollection.findFirst({
      //     where: {
      //       collectionId: nft.collection.id,
      //     },
      //     include: {
      //       user: {
      //         select: creatorSelect,
      //       },
      //     },
      //   });
      //   returnNft.creator = creator?.user || null;
      // }
      return returnNft;
    } catch (error) {
      console.error(error);
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async findNFTByUserID(id: string): Promise<any[]> {
    try {
      if (!isValidUUID(id)) {
        throw new Error('Invalid User. Please try again !');
      }
      const checkExist = await this.prisma.user.findFirst({
        where: { id: id },
      });
      if (!checkExist) {
        throw new NotFoundException();
      }
      return this.prisma.user.findMany({
        where: {
          id: id,
        },
        include: {
          nftsOwnership: {
            select: nftOwnerShip,
          },
        },
      });
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async findActivityNFT(input: GetActivityBase) {
    try {
      const { tokenId, quoteToken, collectionAddress, page, limit, type } =
        input;
      const _limit = limit ?? 10;
      const _page = page ?? 1;

      const whereCondition: Prisma.ActivityWhereInput = {};

      if (tokenId) {
        whereCondition.nftId = tokenId;
      }

      if (collectionAddress) {
        const collection = await this.prisma.collection.findUnique({
          where: {
            address: collectionAddress,
          },
        });
        if (!collection) {
          throw new NotFoundException('Collection not found');
        }
        whereCondition.collectionId = collection.id;
      }

      if (type) {
        whereCondition.type = type;
      }

      const activityNFT = await this.prisma.activity.findMany({
        take: _limit + 1,
        skip: (_page - 1) * _limit,
        where: whereCondition,
      });

      const isHasNext = activityNFT?.length == _limit + 1;
      if (isHasNext) {
        activityNFT.pop();
      }

      return {
        data: activityNFT,
        paging: {
          hasNext: isHasNext,
          page: input.page,
          limit: input.limit,
        },
      };
    } catch (error) {
      console.log(error);
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  getUserData = async (signer: string) => {
    try {
      return await this.prisma.user.findFirst({
        where: { signer },
        select: userSelect,
      });
    } catch (error) {
      console.error(`Error fetching user data for signer ${signer}:`, error);
      throw error; // You may want to handle or log the error accordingly
    }
  };

  async getGeneralInfor(filter: GetGeneralInforDto) {
    try {
      switch (filter.mode) {
        case GeneralInfor.LAYERG:
          const { data: dataResponseFlatForm } =
            await this.nftHepler.requestNFTLayerG({
              page: 1,
              limit: 1,
              owner: filter.owner.toLowerCase(),
            });
          return dataResponseFlatForm?.totalItems || 0;
        // // Get Owner NFT
        case GeneralInfor.OWNER:
          // const { nftIdFromOwner = [] } =
          //   await this.nftHepler.handleGetOwnerNFT({
          //     owner: filter.creatorAddress || filter.owner,
          //     page: 1,
          //     limit: 1000,
          //   });
          // return nftIdFromOwner?.length || 0;
          const { erc721Tokens = [], erc1155Balances = [] } =
            await this.GraphqlService.getNFTExternalFromOwner(
              filter.owner.toLowerCase(),
              'desc' as OrderDirection,
              1,
              1000,
            );
          const { account } = await this.GraphqlService.getNFTFromOwner(
            filter.owner.toLowerCase(),
            'desc' as OrderDirection,
            1,
            1000,
          );
          // const { ERC721tokens = [], ERC1155balances = [] } = account;
          let internal721Filter = [];
          let internal1155Filter = [];

          if (account) {
            internal721Filter = await this.nftHepler.filterExistingNFTs(
              account?.ERC721tokens,
              (item) => item?.tokenId,
              (item) => item?.contract?.id,
              false,
            );

            internal1155Filter = await this.nftHepler.filterExistingNFTs(
              account?.ERC1155balances,
              (item) => item?.token?.tokenId,
              (item) => item?.token?.contract?.id,
              false,
            );
          }

          const external721Filter = await this.nftHepler.filterExistingNFTs(
            erc721Tokens,
            (item) => item?.tokenID,
            (item) => item?.contract,
            true,
          );
          const external1155Filter = await this.nftHepler.filterExistingNFTs(
            erc1155Balances,
            (item) => item?.token?.tokenID,
            (item) => item?.token?.contract,
            true,
          );

          const countERC1155 = this.nftHepler.reduceData1155([
            ...internal1155Filter,
            ...external1155Filter,
          ]);
          const countERC721 = this.nftHepler.reduceData721([
            ...internal721Filter,
            ...external721Filter,
          ]);
          const countHolding =
            (countERC721.length || 0) + (countERC1155.length || 0);

          return countHolding;
        case GeneralInfor.CREATOR:
          const totalOwnerCreator = await this.prisma.userNFT.count({
            where: {
              user: {
                signer: filter.creatorAddress.toLowerCase(),
              },
              nft: {
                status: TX_STATUS.SUCCESS,
              },
            },
          });
          return totalOwnerCreator;
        case GeneralInfor.ONSALES:
          const user = await this.prisma.user.findUnique({
            where: {
              signer: filter.owner.toLowerCase(),
            },
          });

          if (!user) {
            return 0;
          }

          const listSales = await this.prisma.order.count({
            where: {
              orderStatus: ORDERSTATUS.OPEN,
              orderType: {
                in: ['BULK', 'SINGLE'],
              },
              makerId: user.id,
            },
          });
          return listSales;
        case GeneralInfor.COLLECTION:
          let isUuid = true;
          if (!isValidUUID(filter.owner)) {
            isUuid = false;
          }
          const totalCollection = await this.prisma.userCollection.count({
            where: {
              user: {
                ...(isUuid
                  ? { id: filter.owner }
                  : {
                      OR: [{ signer: filter.owner.toLowerCase() }],
                    }),
              },
              collection: {
                status: TX_STATUS.SUCCESS,
              },
            },
          });
          return totalCollection;
      }
    } catch (error) {
      console.log(error);
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }
  async getHistoryPrices(query: GetHistoryOrderDto) {
    try {
      if (!query.id || !query.collection) {
        throw new Error('Invalid Input');
      }
      const collection = await this.prisma.collection.findUnique({
        where: {
          address: query?.collection?.toLowerCase(),
        },
      });

      if (!collection) {
        throw new NotFoundException('No collection was found');
      }

      const nftCondition: Prisma.NFTWhereInput = {};
      nftCondition.OR = [];

      const nftOrConditionId: Prisma.NFTWhereInput = {
        AND: [{ id: query?.id, collectionId: collection.id }],
      };
      const nftOrConditionu2uId: Prisma.NFTWhereInput = {
        AND: [{ u2uId: query?.id, collectionId: collection.id }],
      };

      nftCondition.OR.push(nftOrConditionId, nftOrConditionu2uId);

      const nft = await this.prisma.nFT.findFirst({
        where: nftCondition,
      });
      if (!nft) {
        throw new NotFoundException('No NFT found');
      }

      const historyList = await this.prisma.orderHistory.findMany({
        where: {
          orderBySig: {
            collectionId: collection.id,
            tokenId: nft?.id,
          },
        },
        orderBy: {
          timestamp: 'asc',
        },
        include: {
          From: {
            select: userSelect,
          },
          To: {
            select: userSelect,
          },
          orderBySig: {
            select: {
              quoteToken: true,
            },
          },
        },
      });
      return historyList;
    } catch (error) {
      throw new HttpException(
        `${error.message}`,
        error?.response?.statusCode
          ? error?.response?.statusCode
          : HttpStatus.BAD_REQUEST,
      );
    }
  }

  async getGeneralInforAll(filter: GetGeneralInforAllDto) {
    try {
      const [
        countLayerG,
        countOwner,
        countOnSales,
        countCreator,
        countCollection,
      ] = await Promise.allSettled([
        // Get Count Owner NFT on LayerG flatform
        this.getCountLayerG(filter?.owner),
        // Get Count Owner NFT on X721
        this.getCountOwner(filter?.owner),
        // Get Count NFT Owner On Sales
        this.getCountOnSales(filter?.owner),
        // Get Count NFT Created By User
        this.prisma.userNFT.count({
          where: {
            user: {
              signer: filter.owner.toLowerCase(),
            },
            nft: {
              status: TX_STATUS.SUCCESS,
            },
          },
        }),
        // Get Count Collection Created By User
        this.getCountCollection(filter?.owner),
      ]);
      return {
        countLayerG: (countLayerG as unknown as any).value || 0,
        countOwner: (countOwner as unknown as any).value || 0,
        countOnSales: (countOnSales as unknown as any).value || 0,
        countCreator: (countCreator as unknown as any).value || 0,
        countCollection: (countCollection as unknown as any).value || 0,
      };
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async getCountLayerG(ownerInput: string) {
    try {
      const { data: dataResponseFlatForm } =
        await this.nftHepler.requestNFTLayerG({
          page: 1,
          limit: 1,
          owner: ownerInput.toLowerCase(),
        });
      return dataResponseFlatForm?.totalItems || 0;
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async getCountOwner(ownerInput: string) {
    try {
      const { erc721Tokens = [], erc1155Balances = [] } =
        await this.GraphqlService.getNFTExternalFromOwner(
          ownerInput.toLowerCase(),
          'desc' as OrderDirection,
          1,
          1000,
        );
      const { account } = await this.GraphqlService.getNFTFromOwner(
        ownerInput.toLowerCase(),
        'desc' as OrderDirection,
        1,
        1000,
      );
      // const { ERC721tokens = [], ERC1155balances = [] } = account;
      let internal721Filter = [];
      let internal1155Filter = [];
      if (account) {
        internal721Filter = await this.nftHepler.filterExistingNFTs(
          account?.ERC721tokens,
          (item) => item?.tokenId,
          (item) => item?.contract?.id,
          false,
        );
        internal1155Filter = await this.nftHepler.filterExistingNFTs(
          account?.ERC1155balances,
          (item) => item?.token?.tokenId,
          (item) => item?.token?.contract?.id,
          false,
        );
      }
      const external721Filter = await this.nftHepler.filterExistingNFTs(
        erc721Tokens,
        (item) => item?.tokenID,
        (item) => item?.contract,
        true,
      );
      const external1155Filter = await this.nftHepler.filterExistingNFTs(
        erc1155Balances,
        (item) => item?.token?.tokenID,
        (item) => item?.token?.contract,
        true,
      );
      const countERC1155 = this.nftHepler.reduceData1155([
        ...internal1155Filter,
        ...external1155Filter,
      ]);
      const countERC721 = this.nftHepler.reduceData721([
        ...internal721Filter,
        ...external721Filter,
      ]);
      const countHolding =
        (countERC721.length || 0) + (countERC1155.length || 0);
      return countHolding;
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async getCountOnSales(ownerInput: string) {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          signer: ownerInput.toLowerCase(),
        },
      });
      if (!user) {
        return 0;
      }
      const listSales = await this.prisma.order.count({
        where: {
          orderStatus: ORDERSTATUS.OPEN,
          orderType: {
            in: ['BULK', 'SINGLE'],
          },
          makerId: user.id,
        },
      });
      return listSales;
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async getCountCollection(ownerInput: string) {
    try {
      let isUuid = true;
      if (!isValidUUID(ownerInput)) {
        isUuid = false;
      }
      const totalCollection = await this.prisma.userCollection.count({
        where: {
          user: {
            ...(isUuid
              ? { id: ownerInput }
              : {
                  OR: [{ signer: ownerInput.toLowerCase() }],
                }),
          },
          collection: {
            status: TX_STATUS.SUCCESS,
          },
        },
      });
      return totalCollection;
    } catch (error) {
      throw new HttpException(`${error.message}`, HttpStatus.BAD_REQUEST);
    }
  }

  async getSweepOrders(
    filter: GetSweepOrdersDto,
    user: User,
  ): Promise<PagingResponseHasNext<NftDto>> {
    try {
      // TODO: if price and status are included, then use subgraph as main source and use other to eliminate
      const whereCondition: Prisma.NFTWhereInput = {};
      whereCondition.AND = [];

      whereCondition.AND.push({
        status: TX_STATUS.SUCCESS,
      });

      whereCondition.AND.push({
        isActive: true,
      });
      if (filter.source) {
        const collectionCondition: Prisma.CollectionWhereInput = {};
        collectionCondition.source = filter.source;
        whereCondition.AND.push({ collection: collectionCondition });
      }

      if (filter.collectionAddress || filter.type) {
        const collectionCondition: Prisma.CollectionWhereInput = {};

        if (filter.collectionAddress) {
          collectionCondition.address = filter.collectionAddress;
        }

        if (filter.type) {
          collectionCondition.type = filter.type;
        }

        whereCondition.AND.push({ collection: collectionCondition });
      }

      if (filter.name) {
        whereCondition.AND.push({
          nameSlug: {
            contains: OtherCommon.stringToSlugSearch(filter.name),
            mode: 'insensitive',
          },
        });
      }

      if (Number(filter.priceMin) > Number(filter.priceMax)) {
        // If priceMin is higher than priceMax, return an empty array
        return {
          data: [],
          paging: {
            hasNext: false,
            limit: filter.limit,
            page: filter.page,
          },
        };
      }

      const whereOrder: Prisma.OrderWhereInput =
        this.nftHepler.generateWhereOrder(filter, user);
      const whereCondition1: Prisma.NFTWhereInput = {
        AND: [whereCondition],
      };
      // Ensure that MarketplaceByTokenId is initialized
      if (!whereCondition1.OrderByTokenId) {
        whereCondition1.OrderByTokenId = { some: {} };
      }

      if (filter.priceMin !== undefined || filter.priceMax !== undefined) {
        whereCondition1.OrderByTokenId.some.priceNum = {};
        if (filter.priceMin !== undefined) {
          whereCondition1.OrderByTokenId.some.priceNum.gte = Number(
            OtherCommon.weiToEther(filter.priceMin),
          );
        }
        if (filter.priceMax !== undefined) {
          whereCondition1.OrderByTokenId.some.priceNum.lte = Number(
            OtherCommon.weiToEther(filter.priceMax),
          );
        }
      }
      if (filter.quoteToken !== undefined) {
        whereCondition1.OrderByTokenId.some.quoteToken =
          (filter.quoteToken
            ? filter.quoteToken.toLowerCase()
            : process.env.NATIVE_U2U) ?? process.env.NATIVE_U2U;
      }
      whereOrder.nftById = whereCondition1;
      const { result, hasNext } = await this.nftHepler.formatSweepOrders(
        filter,
        whereOrder,
      );
      return {
        data: result,
        paging: {
          hasNext: hasNext,
          limit: filter.limit,
          page: filter.page,
        },
      };
    } catch (error) {
      throw new HttpException(
        `Error find order: ${error.message}`,
        error?.response?.statusCode
          ? error?.response?.statusCode
          : HttpStatus.BAD_REQUEST,
      );
    }
  }

  async migrate() {
    await Promise.allSettled(
      sampleNfts.map(async (item) => {
        const nft = await this.prisma.nFT.create({
          data: {
            id: item.id,
            name: item.name,
            image: item.image,
            status: TX_STATUS.PENDING,
            tokenUri: item.tokenUri,
            txCreationHash: item.txCreationHash,
            collectionId: item.collectionId,
            animationUrl: item.animationUrl,
            source: item.source,
            description: item.description,
            nameSlug: item.nameSlug,
            createdAt: item.createdAt,
            ownerId: '',
          },
          include: {
            traits: true,
            collection: true,
          },
        });
      }),
    );
  }
}
