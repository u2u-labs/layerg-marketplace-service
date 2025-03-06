import { Module } from '@nestjs/common';
import { CollectionService } from './collection.service';
import { CollectionController } from './collection.controller';
import { PrismaService } from '@layerg-mkp-workspace/shared/services';
import { TraitService } from '../nft/trait.service';
import { GetCollectionMarketData } from '../graph-qlcaller/getCollectionMarketData.service';
import { GraphQlcallerService } from '../graph-qlcaller/graph-qlcaller.service';
import { CollectionPriceService } from './collectionPrice.service';
import { UserService } from '../user/user.service';
import { ActivityService } from '../nft/activity.service';
import { RedisService } from '@/shared/src/lib/services/redis/redis.service';

@Module({
  providers: [
    CollectionService,
    PrismaService,
    TraitService,
    GetCollectionMarketData,
    GraphQlcallerService,
    CollectionPriceService,
    UserService,
    ActivityService,
    RedisService
  ],
  controllers: [CollectionController],
})
export class CollectionModule {}
