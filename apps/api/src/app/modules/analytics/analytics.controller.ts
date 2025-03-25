import { Controller, Get, HttpStatus, Param, Query, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { AnalyticsService } from './analytics.service';
import { GetGameVolumeDto } from './dto/get-game-volume.dto';
import { GetTotalGamesVolumeDTO } from './dto/get-total-games-volume.dto';
@Controller('analytics')
@ApiTags('analytics')
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Get('/games/:gameId/sales-chart')
  async getGameAnalytics(
    @Query()
    query: GetGameVolumeDto,
    @Param('gameId')
    gameId: string,
    @Res() res: Response,
  ) {
    try {
      const urlSearchParams = new URLSearchParams();
      urlSearchParams.set('gameId', gameId);
      Object.keys(query).forEach((key) => {
        urlSearchParams.set(key, query[key]);
      });
      const result = await this.analyticsService.getGameSalesChart(
        urlSearchParams.toString(),
      );
      res.status(HttpStatus.OK).json(result);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: error.message,
      });
    }
  }

  @Get('/games/sales-chart')
  async getTotal(
    @Query()
    query: GetTotalGamesVolumeDTO,
    @Res() res: Response,
  ) {
    try {
      const urlSearchParams = new URLSearchParams();
      Object.keys(query).forEach((key) => {
        urlSearchParams.set(key, query[key]);
      });
      const result = await this.analyticsService.getTotalGamesSalesChart(
        urlSearchParams.toString(),
        query.chainId,
      );
      res.status(HttpStatus.OK).json(result);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: error.message,
      });
    }
  }
}
