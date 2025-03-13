import { Controller, Get, Query } from '@nestjs/common';
import { GameLayergService } from './game-layerg.service';
import { GetAnalysisGameDto } from '@/apps/api/src/app/modules/game-layerg/dto/get-analysis-game.dto';

@Controller('game-layerg')
export class GameLayergController {
  constructor(private readonly gameLayergService: GameLayergService) {}

  @Get('/analysis')
  getAnalysis(@Query() input: GetAnalysisGameDto) {
    return this.gameLayergService.getGameAnalysis(input);
  }
}
