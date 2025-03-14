import { Module } from '@nestjs/common';
import { PrismaService } from '@layerg-mkp-workspace/shared/services';

import { QueueService } from './queue.service';
import { RedisSubscriberService } from './redis.service';
import { CollectionsCheckProcessor } from './collection.processor';
import { CommonService } from '../common/common.service';
import { BullConfigModule } from './bull.config';
import { GraphQlcallerService } from '../graph-qlcaller/graph-qlcaller.service';
import { ApiCallerModule } from '../api-caller/api-caller.module';
import { CMSProcessor } from './cms.processor';
@Module({
  providers: [
    QueueService,
    RedisSubscriberService,
    CollectionsCheckProcessor,
    PrismaService,
    CommonService,
    GraphQlcallerService,
    CMSProcessor,
  ],
  imports: [BullConfigModule, ApiCallerModule],
})
export class JobQueueModule {}
