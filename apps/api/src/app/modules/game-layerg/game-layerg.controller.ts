import { GetAnalysisGameDto } from '@/apps/api/src/app/modules/game-layerg/dto/get-analysis-game.dto';
import { GetListameDto } from '@/apps/api/src/app/modules/game-layerg/dto/query-game.dto';
import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GameLayergService } from './game-layerg.service';

@Controller('game-layerg')
@ApiTags('game-layerg')
export class GameLayergController {
  constructor(private readonly gameLayergService: GameLayergService) {}

  @Get('/analysis')
  getAnalysis(@Query() input: GetAnalysisGameDto) {
    return this.gameLayergService.getGameAnalysis(input);
  }

  @Get('/chart/:id')
  getTimeSeriesData(
    @Param('id') gameId: string,
    @Query() input: GetAnalysisGameDto,
  ) {
    return this.gameLayergService.getGameTimeSeriesData(gameId, input);
  }

  @Get()
  getListGame(@Query() input: GetListameDto) {
    return this.gameLayergService.getListGame(input);
  }

  @Get('/:id')
  getGameDetail(@Param('id') id: string) {
    return this.gameLayergService.getGameDetail(id);
  }
}
