import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { config as dotenvConfig } from 'dotenv';
import { PrismaService } from '@layerg-mkp-workspace/shared/services';

dotenvConfig();

@Injectable()
export class AnalyticsService {
  constructor(private readonly prismaService: PrismaService) {}

  private baseURL = process.env.ANALYTICS_SERVER_URL;

  async getGameChart(gameId: string, queryStr: string) {
    const response = await axios.get(
      this.baseURL + '/hourly-game-volume?' + queryStr + '&gameId=' + gameId,
    );
    const data = response.data as {
      data: Array<{
        _id: {
          gameId: string;
          dateIndex?: string;
          timeKey?: string;
        };
        totalVolume: number;
        floorPrice: number;
      }>;
    };
    const gameDetails = await this.prismaService.gameLayerg.findFirst({
      where: { id: data.data[0]._id.gameId },
    });
    return {
      gameDetails: gameDetails
        ? {
            id: gameDetails.id,
            name: gameDetails.name,
            banner: gameDetails.banner,
            avatar: gameDetails.avatar,
            slug: gameDetails.slug,
          }
        : null,
      chartData: data.data.map((item) => {
        return {
          dateTime: item._id.dateIndex ?? item._id.timeKey,
          time: item._id.timeKey,
          volume: item.totalVolume,
          floorPrice: item.floorPrice,
        };
      }),
    };
  }
}
