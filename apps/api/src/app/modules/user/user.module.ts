import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from '@layerg-mkp-workspace/shared/services';
import { UserServiceExtend } from './user-graph.service';
import { CollectionService } from '../collection/collection.service';
import { TraitService } from '../nft/trait.service';
import { GetCollectionMarketData } from '../graph-qlcaller/getCollectionMarketData.service';
import { CollectionPriceService } from '../collection/collectionPrice.service';
import { GraphQlcallerService } from '../graph-qlcaller/graph-qlcaller.service';
import { ActivityService } from '../nft/activity.service';
import { RedisService } from '@/shared/src/lib/services/redis/redis.service';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    PrismaService,
    UserServiceExtend,
    CollectionService,
    TraitService,
    GetCollectionMarketData,
    CollectionPriceService,
    GraphQlcallerService,
    ActivityService,
    RedisService
  ],
})
export class UserModule {}
