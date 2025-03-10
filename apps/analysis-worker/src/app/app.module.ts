import { PrismaService } from '@layerg-mkp-workspace/shared/services';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule as CronModule } from '@nestjs/schedule';
import { ThrottlerModule } from '@nestjs/throttler';

import { ApiCallerModule } from './modules/api-caller/api-caller.module';
import { CommonModule } from './modules/common/common.module';
import { GraphQlcallerModule } from './modules/graph-qlcaller/graph-qlcaller.module';
import { JobQueueModule } from './modules/job-queue/job-queue.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 80,
    }),
    CronModule.forRoot(),
    ApiCallerModule,
    CommonModule,
    GraphQlcallerModule,
    JobQueueModule,
  ],
  providers: [PrismaService],
})
export class AppModule {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
}
