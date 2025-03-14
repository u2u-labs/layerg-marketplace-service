import { Module } from '@nestjs/common';
import { GameLayergService } from './game-layerg.service';
import { GameLayergController } from './game-layerg.controller';
import { PrismaService } from '@/shared/src/lib/services';

@Module({
  controllers: [GameLayergController],
  providers: [GameLayergService, PrismaService],
})
export class GameLayergModule {}
