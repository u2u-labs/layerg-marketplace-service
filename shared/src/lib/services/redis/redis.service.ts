import { InjectRedis } from '@nestjs-modules/ioredis';
import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { Redis } from 'ioredis';

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  constructor(@InjectRedis() private readonly redisClient: Redis) {}

  async onModuleInit() {
    this.redisClient.on('connect', () => console.log('Redis connected'));
    this.redisClient.on('error', (err) => console.error('Redis Error:', err));
  }

  async onModuleDestroy() {
    await this.redisClient.quit();
  }

  async getKeyTTL(key: string): Promise<number> {
    return await this.redisClient.ttl(key);
  }

  async publish<T>(channel: string, message: T): Promise<number> {
    return await this.redisClient.publish(channel, JSON.stringify(message));
  }

  async subscribe(
    channel: string,
    callback: (channel: string, message: string) => void,
  ) {
    await this.redisClient.subscribe(channel);
    this.redisClient.on('message', callback);
  }

  async unsubscribe(channel: string): Promise<void> {
    await this.redisClient.unsubscribe(channel);
  }

  async setKey(
    key: string,
    value: string,
    iexpireInSeconds?: number,
  ): Promise<string> {
    const expireInSeconds = iexpireInSeconds
      ? iexpireInSeconds
      : 7 * 24 * 60 * 60;
    return await this.redisClient.set(key, value, 'EX', expireInSeconds); // Set with expiration
  }

  async getKey(key: string) {
    return await this.redisClient.get(key); // Promisified get method
  }

  async setKeyObject(
    key: string,
    value: object,
    iexpireInSeconds?: number,
  ): Promise<string> {
    const expireInSeconds = iexpireInSeconds ?? 7 * 24 * 60 * 60;
    return await this.redisClient.set(
      `${key}`,
      JSON.stringify(value),
      'EX',
      expireInSeconds,
    );
  }

  async getKeyObject(key: string): Promise<string> {
    // return await this.redisClient.get(key); // Promisified get method
    const result = await this.redisClient.get(key);
    return JSON.parse(result);
  }

  async deleteKey(key: string): Promise<number> {
    return await this.redisClient.del(key); // Deletes the key and returns the number of keys deleted
  }
}
