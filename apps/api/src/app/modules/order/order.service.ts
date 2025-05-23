import { PrismaService } from '@layerg-mkp-workspace/shared/services';
import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ORDERSTATUS, ORDERTYPE, Prisma, User } from '@prisma/client';
import { ethers } from 'ethers';
import { GraphQLClient } from 'graphql-request';
import { encodeAbiParameters, keccak256 } from 'viem';

import { NFTHepler } from '../nft/helper/nft-helper.service';
import { NftService } from '../nft/nft.service';
import { CreateBulkDto, CreateSingleDto } from './dto/create-order.dto';
import {
  ActionOrderDto,
  VerifyOrderDto,
  VerifyOrdersDto,
} from './dto/get-order.dto';

import { abi as exchangeABI } from '@/apps/api/abis/Exchange.json';
import {
  nftSelectShort,
  userSelect,
} from '@/apps/api/src/app/commons/definitions/Constraint.Object';
import { MerkleTree } from '@/apps/api/src/app/commons/MerkleTree.common';
import { getSdk } from '@/apps/api/src/app/generated/graphql';
import { RedisService } from '@/shared/src/lib/services/redis/redis.service';
import OrderHeplerCommon from './helper/order.helper.service';

@Injectable()
export class OrderService {
  constructor(
    private prisma: PrismaService,
    private nftService: NftService,
    private nftHepler: NFTHepler,
    private redisService: RedisService,
  ) {}
  private readonly endpoint = process.env.SUBGRAPH_URL;
  private client = this.getGraphqlClient();
  private getGraphqlClient() {
    return new GraphQLClient(this.endpoint);
  }
  private sdk = getSdk(this.client);

  private readonly endpointStaking = process.env.SUBGRAPH_URL_STAKING;
  private provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);

  async createSingle(input: CreateSingleDto, user: User) {
    try {
      const userTaker = await this.prisma.user.findUnique({
        where: {
          signer: input.taker.toLowerCase(),
        },
      });
      const collectionAddress =
        input.orderType == ORDERTYPE.BID
          ? input.takeAssetAddress
          : input.makeAssetAddress;
      const tokenId =
        input.orderType == ORDERTYPE.BID
          ? input.takeAssetId
          : input.makeAssetId;
      const quoteToken =
        input.orderType == ORDERTYPE.BID
          ? input.makeAssetAddress
          : input.takeAssetAddress;
      const quanity =
        input.orderType == ORDERTYPE.BID
          ? input.takeAssetValue
          : input.makeAssetValue;

      const aaWallet = await this.prisma.aAWallet.findFirst({
        where: {
          userId: user.id,
          appKey: input.appKey,
        },
      });

      const { check, collection, nft } = await this.validateNftOwnership(
        collectionAddress,
        aaWallet.aaAddress,
        userTaker ? userTaker.signer : null,
        input.orderType,
        tokenId,
      );

      if (!check) {
        throw new Error('Owner NFT invalid');
      }
      const checkExists = await this.prisma.order.findUnique({
        where: {
          sig_index: {
            sig: input?.sig,
            index: input?.index,
          },
        },
      });
      if (checkExists) {
        throw new Error('Order already exists');
      }
      const dataInput: Prisma.OrderUncheckedCreateInput = {
        sig: input.sig,
        makerId: user.id,
        makeAssetType: input.makeAssetType,
        makeAssetAddress: input.makeAssetAddress,
        makeAssetValue: input.makeAssetValue,
        makeAssetId: input.makeAssetId,
        makerAddress: aaWallet.aaAddress,
        takerId: userTaker ? userTaker.id : null,
        takeAssetType: input.takeAssetType,
        takeAssetAddress: input.takeAssetAddress,
        takeAssetValue: input.takeAssetValue,
        takeAssetId: input.takeAssetId,
        salt: input.salt,
        start: parseInt(`${input.start}`),
        end: parseInt(`${input.end}`),
        orderType: input.orderType,
        tokenId: nft.id,
        collectionId: collection.id,
        price: input.price,
        quantity: parseInt(quanity),
        priceNum: OrderHeplerCommon.weiToEtherQuoteToken(
          input.price,
          quoteToken.toLowerCase(),
        ),
        netPrice: input.netPrice,
        netPriceNum: OrderHeplerCommon.weiToEtherQuoteToken(
          input.netPrice,
          quoteToken.toLowerCase(),
        ),
        quoteToken: quoteToken.toLowerCase(),
        index: input.index,
        proof: input.proof,
        root: input.root,
      };
      const newOrder = await this.prisma.order.create({
        data: dataInput,
        include: {
          Maker: {
            select: userSelect,
          },
          Taker: {
            select: userSelect,
          },
          nftById: {
            select: nftSelectShort,
          },
        },
      });
      // await this.redisService.publish('collectionUtils-channel', {
      //   data: collection.address,
      //   process: 'update-floor-price',
      // });
      return newOrder;
    } catch (error) {
      const statusCode = error?.response?.statusCode || HttpStatus.BAD_REQUEST;
      throw new HttpException(`Create Single: ${error.message}`, statusCode);
    }
  }

  async generateMerkleTree(input: CreateBulkDto, user: User) {
    try {
      const endcodeOrder = input?.orders.map((ele, index) => {
        return keccak256(
          encodeAbiParameters(
            [
              { name: 'index', type: 'uint16' },
              { name: 'maker', type: 'address' },
              { name: 'makeAssetAddress', type: 'address' },
              { name: 'makeAssetId', type: 'uint256' },
              { name: 'makeAssetValue', type: 'uint256' },
              { name: 'makeAssetType', type: 'uint256' },
              { name: 'taker', type: 'address' },
              { name: 'takeAssetAddress', type: 'address' },
              { name: 'takeAssetId', type: 'uint256' },
              { name: 'takeAssetValue', type: 'uint256' },
              { name: 'takeAssetType', type: 'uint256' },
            ],
            [
              index,
              user.publicKey as any,
              ele.makeAssetAddress as any,
              BigInt(ele.makeAssetId),
              BigInt(ele.makeAssetValue),
              BigInt(ele.makeAssetType),
              ele.taker as any,
              ele.takeAssetAddress as any,
              BigInt(ele.takeAssetId),
              ele.takeAssetValue as any,
              BigInt(ele.takeAssetType),
            ],
          ),
        );
      });

      const merkeleTree = new MerkleTree(endcodeOrder);
      merkeleTree.generateTree();

      return {
        root: merkeleTree?.root,
        proof: merkeleTree?.proof,
      };
    } catch (error) {
      const statusCode = error?.response?.statusCode || HttpStatus.BAD_REQUEST;
      throw new HttpException(
        `Generate Merkle Tree: ${error.message}`,
        statusCode,
      );
    }
  }

  async createBulk(input: CreateBulkDto, user: User) {
    try {
      const { orders = [] } = input;
      if (orders && orders.length <= 0) {
        return;
      }
      const resultBulk = await Promise.all(
        orders.map(async (item) => {
          const data = await this.createSingle(item, user);
          return data;
        }),
      );
      return resultBulk;
    } catch (error) {
      const statusCode = error?.response?.statusCode || HttpStatus.BAD_REQUEST;
      throw new HttpException(`Check order: ${error.message}`, statusCode);
    }
  }

  async verifyOrder(input: VerifyOrderDto, user: User) {
    try {
      const { checkOwner, order } = await this.validateOrderAndOwner(
        input,
        user.signer,
      );
      if (!checkOwner) {
        throw new Error('Owner NFT invalid');
      }
      return order;
    } catch (error) {
      throw new HttpException(
        `Error verifying order: ${error.message}`,
        error?.response?.statusCode
          ? error?.response?.statusCode
          : HttpStatus.BAD_REQUEST,
      );
    }
  }

  async verifyOrders(input: VerifyOrdersDto, user: User) {
    try {
      const orders = await Promise.all(
        input?.orders?.map(async (item) => {
          try {
            const { checkOwner, order } = await this.validateOrderAndOwner(
              item,
              user.signer,
            );
            if (!checkOwner) {
              // throw new Error('Owner NFT invalid');
              return { ...order, isSuccess: false };
            }
            return { ...order, isSuccess: true };
          } catch (error) {
            return { ...item, isSuccess: false };
          }
        }),
      );
      return orders;
    } catch (error) {
      throw new HttpException(
        `Error verifying order: ${error.message}`,
        error?.response?.statusCode
          ? error?.response?.statusCode
          : HttpStatus.BAD_REQUEST,
      );
    }
  }

  async create(input: VerifyOrderDto, user: User) {
    try {
      const { checkOwner, order } = await this.validateOrderAndOwner(
        input,
        user.signer,
      );
      if (!checkOwner) {
        throw new Error('Owner NFT invalid');
      }
      return order;
    } catch (error) {
      throw new HttpException(
        `Error verifying order: ${error.message}`,
        error?.response?.statusCode
          ? error?.response?.statusCode
          : HttpStatus.BAD_REQUEST,
      );
    }
  }

  async validateOrderAndOwner(input: VerifyOrderDto, signer: string) {
    try {
      const currentDate = Math.floor(Date.now() / 1000);
      const order = await this.prisma.order.findFirst({
        where: {
          AND: [
            { index: input.index },
            { sig: input.sig },
            { orderStatus: ORDERSTATUS.OPEN },
            {
              start: {
                lte: currentDate,
              },
              end: {
                gte: currentDate,
              },
            },
          ],
        },
        include: {
          Maker: {
            select: userSelect,
          },
          Taker: {
            select: userSelect,
          },
        },
      });

      if (!order) {
        throw new NotFoundException('Order not found');
      }

      const checkOwner = await this.nftHepler.checkNftOwner(
        order.collectionId,
        order.tokenId,
        signer,
        // order?.makerId,
      );

      return { checkOwner, order };
    } catch (error) {
      const statusCode = error?.response?.statusCode || HttpStatus.BAD_REQUEST;
      throw new HttpException(`Check order: ${error.message}`, statusCode);
    }
  }

  async actionOrder(input: ActionOrderDto, user: User) {
    try {
      const { tx } = input;
      const transaction = await this.provider.getTransaction(tx);

      if (!transaction) {
        throw new NotFoundException('Transaction not found');
      }

      const iface = new ethers.utils.Interface(exchangeABI);
      const { data: inputData, to, from } = transaction;
      const decodedInput = iface.parseTransaction({ data: inputData });

      const sig = decodedInput?.args[0]?.[0]?.[10];
      const index = decodedInput?.args[0]?.[0]?.[13];

      if (!sig || !index) {
        throw new Error('Invalid input data');
      }

      // Validate contract address
      if (to?.toLowerCase() !== process.env.MATCH_ORDER.toLowerCase()) {
        throw new Error('Contract is invalid');
      }

      // Validate owner
      if (from?.toLowerCase() !== user.signer?.toLowerCase()) {
        throw new Error('Owner is invalid');
      }

      // Check for existing order
      const order = await this.prisma.order.findFirst({
        where: {
          index: parseInt(index),
          sig,
          orderStatus: ORDERSTATUS.OPEN,
        },
      });

      if (!order) {
        throw new NotFoundException('Order not found');
      }

      // Update order status to PENDING
      return await this.prisma.order.update({
        where: {
          sig_index: {
            index: parseInt(index),
            sig,
          },
        },
        data: { orderStatus: ORDERSTATUS.PENDING },
      });
    } catch (error) {
      console.error('Error action order:', error);
      const statusCode = error?.response?.statusCode || HttpStatus.BAD_REQUEST;
      throw new HttpException(
        `Error action order: ${error.message}`,
        statusCode,
      );
    }
  }

  async validateNftOwnership(
    collectionId: string,
    makerAddress: string,
    takerAddress: string | null,
    orderType: ORDERTYPE,
    tokenId: string,
  ) {
    try {
      if (orderType === ORDERTYPE.SINGLE || orderType === ORDERTYPE.BULK) {
        const { checkOwner, collection, nft } =
          await this.nftHepler.checkNftOwner(
            collectionId,
            tokenId,
            makerAddress,
          );
        return { check: !!checkOwner, collection, nft };
      } else {
        const { collection, nft } = await this.nftHepler.checkNftOwner(
          collectionId,
          tokenId,
          takerAddress,
        );
        return { check: true, collection, nft };
      }
    } catch (error) {
      const statusCode = error?.response?.statusCode || HttpStatus.BAD_REQUEST;
      throw new HttpException(
        `Error validateNftOwnership: ${error.message}`,
        statusCode,
      );
    }
  }
}
