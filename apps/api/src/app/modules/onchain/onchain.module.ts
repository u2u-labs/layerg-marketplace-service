import { ApiUAService, PrismaService } from '@/shared/src/lib/services';
import { RedisService } from '@/shared/src/lib/services/redis/redis.service';
import { Module } from '@nestjs/common';
import { OnchainController } from './onchain.controller';
import { OnchainService } from './onchain.service';
@Module({
  controllers: [OnchainController],
  providers: [OnchainService, ApiUAService, RedisService, PrismaService],
})
export class OnchainModule {}
