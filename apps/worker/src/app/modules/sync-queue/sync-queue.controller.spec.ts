import { Test, TestingModule } from '@nestjs/testing';
import { SyncQueueController } from './sync-queue.controller';
import { SyncQueueService } from './sync-queue.service';

describe('SyncQueueController', () => {
  let controller: SyncQueueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SyncQueueController],
      providers: [SyncQueueService],
    }).compile();

    controller = module.get<SyncQueueController>(SyncQueueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
