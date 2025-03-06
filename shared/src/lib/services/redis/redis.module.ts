import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RedisService } from './redis.service';
import { RedisModule } from '@nestjs-modules/ioredis';

@Module({
  imports: [
    ConfigModule.forRoot(), // Load .env variables globally
    RedisModule.forRootAsync({
        useFactory: () => ({
          type: 'single',
          url: `redis://:${process.env.REDIS_PASSWORD}@${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
        }),
      }),
  ],
  providers: [RedisService],
  exports: [RedisService],
})
export class RedisSharedModule {}
