import { Injectable, OnModuleInit } from '@nestjs/common';
import { config as dotenvConfig } from 'dotenv';
import Redis from 'ioredis';

import { QueueService } from './queue.service';
dotenvConfig();
@Injectable()
export class RedisSubscriberService implements OnModuleInit {
  private redisClient: Redis;
  public redisGetSet: Redis;

  constructor(private queueService: QueueService) {
    this.redisClient = new Redis({
      // Redis configuration
      host: process.env.REDIS_HOST,
      port: process.env.REDISDB_PORT as unknown as number,
      keyPrefix: process.env.REDIS_PREFIX,
      password: process.env.REDIS_PASSWORD,
    });

    this.redisGetSet = new Redis({
      // Redis configuration
      host: process.env.REDIS_HOST,
      port: process.env.REDISDB_PORT as unknown as number,
      password: process.env.REDIS_PASSWORD,
    });
  }

  onModuleInit() {
    this.redisClient.subscribe('collection-channel');
    this.redisClient.subscribe('nft-channel');
    this.redisClient.subscribe('ipfs');
    this.redisClient.subscribe('project-channel');
    this.redisClient.subscribe('user-channel');
    this.redisClient.subscribe('collectionUtils-channel');
    this.redisClient.on('message', this.handleMessage.bind(this));
  }

  private handleMessage(channel: string, message: string) {
    console.log(channel, message);
    if (channel === 'project-channel') {
      const jobData = JSON.parse(message);
      this.queueService.addProjectJob(jobData.process, jobData.data);
    }
    if (channel === 'user-channel') {
      const jobData = JSON.parse(message);
      this.queueService.addUserJob(jobData.process, jobData.data);
    }
  }

  async set(key: string, value: any, expireInSeconds?: number): Promise<void> {
    try {
      const serializedValue = JSON.stringify(value);
      await this.redisGetSet.set(key, serializedValue);
      if (expireInSeconds) {
        await this.redisGetSet.expire(key, expireInSeconds);
      }
    } catch (error) {
      console.error('Error setting key in Redis:', error);
    }
  }
}
