import {
  Controller,
  Get,
  HttpStatus,
  Param,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { GetGameVolumeDto } from './dto/get-game-volume.dto';
import { Response, Request } from 'express';

@Controller('analytics')
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Get('/games/:gameId/sales-chart')
  async getGameAnalytics(
    @Query()
    query: GetGameVolumeDto,
    @Param('gameId')
    gameId: string,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    try {
      const queryString = req.url.split('?')[1] || '';
      const result = await this.analyticsService.getGameChart(
        gameId,
        queryString,
      );
      res.status(HttpStatus.OK).json(result);
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: error.message,
      });
    }
  }
}
