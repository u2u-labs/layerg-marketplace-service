import { Module } from '@nestjs/common';
import { GameLayergService } from './game-layerg.service';
import { GameLayergController } from './game-layerg.controller';
import { PrismaService } from '@/shared/src/lib/services';
import { AnalyticsModule } from '../analytics/analytics.module';

@Module({
  controllers: [GameLayergController],
  imports: [AnalyticsModule],
  providers: [GameLayergService, PrismaService],
})
export class GameLayergModule {}
