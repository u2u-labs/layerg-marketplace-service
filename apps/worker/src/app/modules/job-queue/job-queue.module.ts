import { Module } from '@nestjs/common';
import { QueueService } from './queue.service';
import { RedisSubscriberService } from './redis.service';
import { CollectionsCheckProcessor } from './collection.processor';
import { PrismaService } from '@layerg-mkp-workspace/shared/services';
import { CommonService } from '../common/common.service';
import { BullConfigModule } from './bull.config';
import { GraphQlcallerService } from '../graph-qlcaller/graph-qlcaller.service';
import { ApiCallerModule } from '../api-caller/api-caller.module';
import { UserProcessor } from './user.processor';
import { CollectionsUtilsProcessor } from './collection-utils.processor';
import { MarketplaceStatusProcessor } from './marketplace-status.processor';
import { QuoteTokenAcceptProcessor } from './quote-token-accept.processor';
import { CMSProcessor } from './cms.processor';
import { DynamicScheduleService } from '../helper/dynamic-schedule.service';
import { SchedulerRegistry } from '@nestjs/schedule';
@Module({
  providers: [
    QueueService,
    RedisSubscriberService,
    CollectionsCheckProcessor,
    PrismaService,
    CommonService,
    GraphQlcallerService,
    UserProcessor,
    CollectionsUtilsProcessor,
    MarketplaceStatusProcessor,
    QuoteTokenAcceptProcessor,
    CMSProcessor,
    DynamicScheduleService,
    SchedulerRegistry,
  ],
  imports: [BullConfigModule, ApiCallerModule],
})
export class JobQueueModule {}
