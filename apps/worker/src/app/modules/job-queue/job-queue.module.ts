import { PrismaService } from '@layerg-mkp-workspace/shared/services';
import { Module } from '@nestjs/common';
import { SchedulerRegistry } from '@nestjs/schedule';

import { ApiCallerModule } from '../api-caller/api-caller.module';
import { CommonService } from '../common/common.service';
import { GraphQlcallerService } from '../graph-qlcaller/graph-qlcaller.service';
import { DynamicScheduleService } from '../helper/dynamic-schedule.service';
import { BullConfigModule } from './bull.config';
import { CMSProcessor } from './cms.processor';
import { QueueService } from './queue.service';
import { QuoteTokenAcceptProcessor } from './quote-token-accept.processor';
import { RedisSubscriberService } from './redis.service';
import { UserProcessor } from './user.processor';

@Module({
  providers: [
    QueueService,
    RedisSubscriberService,
    PrismaService,
    CommonService,
    GraphQlcallerService,
    UserProcessor,
    QuoteTokenAcceptProcessor,
    CMSProcessor,
    DynamicScheduleService,
    SchedulerRegistry,
  ],
  imports: [BullConfigModule, ApiCallerModule],
})
export class JobQueueModule {}
