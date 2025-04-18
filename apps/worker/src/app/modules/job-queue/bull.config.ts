import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';

import {
  QUEUE_COLLECTION_UTILS,
  QUEUE_NAME_CMS,
  QUEUE_NAME_COLLECTION,
  QUEUE_NAME_IPFS,
  QUEUE_NAME_MARKETPLACE_STATUS,
  QUEUE_NAME_NFT,
  QUEUE_NAME_ORDER,
  QUEUE_NAME_PROJECT,
  QUEUE_NAME_QUOTE_TOKEN_ACCEPT,
  QUEUE_NAME_TIMER,
  QUEUE_NAME_USER,
} from '../../constants/Job.constant';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: process.env.REDIS_HOST,
        port: parseInt(process.env.REDIS_PORT),
        password: process.env.REDIS_PASSWORD,
      },
    }),
    BullModule.registerQueue(
      {
        name: QUEUE_NAME_COLLECTION,
      },
      { name: QUEUE_NAME_NFT },
      { name: QUEUE_NAME_IPFS },
      { name: QUEUE_NAME_PROJECT },
      { name: QUEUE_NAME_TIMER },
      { name: QUEUE_NAME_USER },
      { name: QUEUE_NAME_ORDER },
      { name: QUEUE_COLLECTION_UTILS },
      { name: QUEUE_NAME_MARKETPLACE_STATUS },
      {
        name: QUEUE_NAME_QUOTE_TOKEN_ACCEPT,
      },
      {
        name: QUEUE_NAME_CMS,
      },
    ),
  ],
  exports: [BullModule],
})
export class BullConfigModule {}
