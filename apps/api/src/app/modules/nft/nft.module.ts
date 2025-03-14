import { Module } from '@nestjs/common';
import { PrismaService } from '@layerg-mkp-workspace/shared/services';

import { NftService } from './nft.service';
import { NftController } from './nft.controller';
import { TokenService } from './token.service';
import { GraphQlcallerService } from '../graph-qlcaller/graph-qlcaller.service';
import { MarketplaceService } from './nft-marketplace.service';
import { ValidatorService } from '../validator/validator.service';
import { ActivityService } from './activity.service';
import { CollectionPriceService } from '../collection/collectionPrice.service';
import { GetCollectionMarketData } from '../graph-qlcaller/getCollectionMarketData.service';
import { NFTHepler } from './helper/nft-helper.service';
import { UserService } from '../user/user.service';
import { LayerService } from './layerg.service';
import { LayerController } from './layerg.controller';

import { RedisService } from '@/shared/src/lib/services/redis/redis.service';

@Module({
  providers: [
    NftService,
    PrismaService,
    TokenService,
    GraphQlcallerService,
    MarketplaceService,
    ValidatorService,
    ActivityService,
    CollectionPriceService,
    GetCollectionMarketData,
    NFTHepler,
    UserService,
    ActivityService,
    LayerService,
    RedisService,
  ],
  controllers: [NftController, LayerController],
})
export class NftModule {}
