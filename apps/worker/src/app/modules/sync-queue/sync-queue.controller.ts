import { Controller } from '@nestjs/common';
import { SyncQueueService } from './sync-queue.service';

@Controller('sync-queue')
export class SyncQueueController {
  constructor(private readonly syncQueueService: SyncQueueService) {}
}
