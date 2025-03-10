import { Module } from '@nestjs/common';
import { PrismaService } from '@layerg-mkp-workspace/shared/services';

import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { GraphQlcallerService } from '../graph-qlcaller/graph-qlcaller.service';
import { UserService } from '../user/user.service';
import { ActivityService } from '../nft/activity.service';
import { NftService } from '../nft/nft.service';
import { MarketplaceService } from '../nft/nft-marketplace.service';
import { ValidatorService } from '../validator/validator.service';
import { CollectionPriceService } from '../collection/collectionPrice.service';
import { GetCollectionMarketData } from '../graph-qlcaller/getCollectionMarketData.service';
import { NFTHepler } from '../nft/helper/nft-helper.service';
import { LayerService } from '../nft/layerg.service';

import { RedisService } from '@/shared/src/lib/services/redis/redis.service';
@Module({
  controllers: [OrderController],
  providers: [
    OrderService,
    PrismaService,
    GraphQlcallerService,
    UserService,
    ActivityService,
    NftService,
    MarketplaceService,
    ValidatorService,
    ActivityService,
    CollectionPriceService,
    GetCollectionMarketData,
    NFTHepler,
    LayerService,
    RedisService,
  ],
})
export class OrderModule {}
