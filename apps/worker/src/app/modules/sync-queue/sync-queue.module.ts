import { Module } from '@nestjs/common';
import { SyncQueueService } from './sync-queue.service';
import { SyncQueueController } from './sync-queue.controller';
import { PrismaService } from '@/shared/src/lib/services';

@Module({
  controllers: [SyncQueueController],
  providers: [SyncQueueService, PrismaService],
})
export class SyncQueueModule {}
