import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '@/shared/src/lib/services';
import CollectionHelperService from '@/apps/api/src/app/modules/collection/helper/collection-helper.service';
import PaginationCommon from '@/apps/api/src/app/commons/HasNext.common';
import { AnalysisType } from '@/apps/api/src/app/constants/enums/Analysis.enum';
import { Prisma } from '@prisma/client';
import { GetAnalysisGameDto } from '@/apps/api/src/app/modules/game-layerg/dto/get-analysis-game.dto';
import moment from 'moment';
import { gameLayergSelect } from '@/apps/api/src/app/commons/definitions/Constraint.Object';
import { TimeSeriesDataPoint } from './entities/game-layerg.entity';

@Injectable()
export class GameLayergService {
  constructor(private prisma: PrismaService) {}

  // Get analysis collection group by games
  async getGameAnalysis(input: GetAnalysisGameDto) {
    try {
      const whereCondition: Prisma.CollectionWhereInput = {};
      if (input.chainId) {
        whereCondition.chainId = input.chainId;
      }
      if (input.gameId) {
        whereCondition.gameLayergId = input.gameId;
      }

      const trendingGames = await this.prisma.collection.groupBy({
        by: ['gameLayergId'],
        where: whereCondition,
        _sum: {
          vol: true,
          floor: true,
          floorPrice: true,
        },
        orderBy: {
          _sum: {
            [input.orderBy]: input.order,
          },
        },
        skip: (input.page - 1) * input.limit,
        take: input.limit,
      });

      const dataCompare = await Promise.all(
        (
          await Promise.all(
            trendingGames.map(async (item) =>
              this.getAndCompare(item, input.type),
            ),
          )
        ).map(async (item) => {
          const gameInfo = await this.prisma.gameLayerg.findFirst({
            select: gameLayergSelect,
            where: { id: item.gameLayergId },
          });

          return {
            ...item,
            ...gameInfo,
          };
        }),
      );

      const hasNext = await PaginationCommon.hasNextPage(
        input.page,
        input.limit,
        'collection',
        whereCondition,
      );

      return {
        data: dataCompare,
        paging: {
          hasNext: hasNext,
          limit: input.limit,
          page: input.page,
        },
      };
    } catch (error) {
      console.log(error);
      throw new HttpException(
        `${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getGameTimeSeriesData(gameId: string, input: GetAnalysisGameDto) {
    try {
      const exist = await this.prisma.gameLayerg.findFirst({
        where: {
          id: gameId,
        },
      });
      if (!exist) {
        throw new HttpException('Game not found', 400);
      }

      const timeRangeConfig = {
        [AnalysisType.ONEHOUR]: {
          hours: 1,
          interval: 'minutes',
          intervalValue: 5,
        },
        [AnalysisType.ONEWEEK]: {
          days: 7,
          interval: 'hours',
          intervalValue: 1,
        },
        [AnalysisType.ONEMONTH]: {
          days: 30,
          interval: 'days',
          intervalValue: 1,
        },
        default: {
          days: 1,
          interval: 'hours',
          intervalValue: 1,
        },
      };

      const timeConfig = timeRangeConfig[input.type] || timeRangeConfig.default;

      const endTime = new Date();
      const startTime = new Date();

      if (timeConfig.hours) {
        startTime.setHours(startTime.getHours() - timeConfig.hours);
      } else if (timeConfig.days) {
        startTime.setDate(startTime.getDate() - timeConfig.days);
      }

      const whereCondition: Prisma.AnalysisCollectionWhereInput = {
        createdAt: {
          gte: startTime,
          lte: endTime,
        },
        collection: {
          gameLayergId: gameId,
        },
      };

      // Get all records within the time range
      const records = await this.prisma.analysisCollection.findMany({
        where: whereCondition,
        select: {
          createdAt: true,
          vol: true,
          floor: true,
        },
        orderBy: {
          createdAt: 'asc',
        },
      });

      if (!records.length) {
        return {
          data: [],
          paging: {
            hasNext: false,
            limit: input.limit,
            page: input.page,
          },
        };
      }

      const timePoints: Date[] = [];
      const currentTime = new Date(startTime);

      while (currentTime <= endTime) {
        timePoints.push(new Date(currentTime));

        // Increment by the configured interval
        if (timeConfig.interval === 'minutes') {
          currentTime.setMinutes(
            currentTime.getMinutes() + timeConfig.intervalValue,
          );
        } else if (timeConfig.interval === 'hours') {
          currentTime.setHours(
            currentTime.getHours() + timeConfig.intervalValue,
          );
        } else if (timeConfig.interval === 'days') {
          currentTime.setDate(currentTime.getDate() + timeConfig.intervalValue);
        }
      }

      // Apply Last Observation Carried Forward (LOCF) method
      const result: TimeSeriesDataPoint[] = [];
      let lastKnownValues = { vol: 0, floor: 0 };

      for (const timePoint of timePoints) {
        // Find the closest record before or at this time point
        const recordsBeforeOrAt = records.filter(
          (r) => new Date(r.createdAt) <= timePoint,
        );

        if (recordsBeforeOrAt.length > 0) {
          // Use the most recent record
          const latestRecord = recordsBeforeOrAt[recordsBeforeOrAt.length - 1];
          lastKnownValues = {
            vol: Number(latestRecord.vol),
            floor: Number(latestRecord.floor),
          };
        }

        // Add the data point with LOCF values
        result.push({
          timestamp: timePoint.getTime(),
          vol: lastKnownValues.vol,
          floor: lastKnownValues.floor,
        });
      }

      const hasNext = await PaginationCommon.hasNextPage(
        input.page,
        input.limit,
        'analysisCollection',
        whereCondition,
      );

      return {
        data: records,
        paging: {
          hasNext: hasNext,
          limit: input.limit,
          page: input.page,
        },
      };
    } catch (error) {
      console.log(error);

      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException(
        `${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getAndCompare(
    item: Prisma.PickEnumerable<
      Prisma.CollectionGroupByOutputType,
      'gameLayergId'[]
    > & {
      _sum: {
        vol: number;
        floor: number;
        floorPrice: bigint;
      };
    },
    type: AnalysisType,
  ) {
    try {
      const typeTimeMap = {
        [AnalysisType.ONEHOUR]: { amount: 1, unit: 'hours' },
        [AnalysisType.ONEWEEK]: { amount: 7, unit: 'days' },
        [AnalysisType.ONEMONTH]: { amount: 30, unit: 'days' },
        default: { amount: 1, unit: 'days' },
      };

      const { amount, unit } = typeTimeMap[type] ?? typeTimeMap.default;

      const { start: startPast, end: endPast } = this.getPastRecordTimestamp(
        amount,
        unit,
      );

      const pastRecord = await this.prisma.analysisCollection.aggregate({
        where: {
          createdAt: {
            gte: startPast,
            lte: endPast,
          },
          collection: {
            gameLayergId: item.gameLayergId,
          },
        },
        _sum: {
          vol: true,
          volume: true,
          floorPrice: true,
          floor: true,
        },
      });

      if (!pastRecord) {
        return {
          volumeChange: BigInt(0),
          floorPriceChange: BigInt(0),
          ...item,
        };
      }

      const calculateChangeBigInt = (current: bigint, past: bigint) =>
        past > Number(0)
          ? ((Number(current) - Number(past)) / Number(past)) * Number(100)
          : Number(0);

      const calculateChange = (current: number, past: number) =>
        past > 0 ? ((current - past) / past) * 100 : 0;

      const currentVolume = item?._sum.vol || 0;
      const pastVolume = pastRecord._sum.vol || item?._sum.vol || 0; // volume change will be 0 if past record not found
      const currentFloorPrice = item?._sum.floorPrice;
      const pastFloorPrice =
        pastRecord._sum.floorPrice || item?._sum.floorPrice || BigInt(0);
      const volumeChange = calculateChange(currentVolume, pastVolume);
      const floorPriceChange = calculateChangeBigInt(
        currentFloorPrice,
        pastFloorPrice,
      );

      return {
        volumeChange,
        floorPriceChange,
        volumeDiff: currentVolume - pastVolume,
        floorPriceDiff: currentFloorPrice - pastFloorPrice,
        ...item,
      };
    } catch (error) {
      throw new HttpException(
        `Error in function getAndCompare: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  getPastRecordTimestamp(number: number, unit: 'days' | 'hours' = 'days') {
    const date = new Date();
    const momentDate = moment(date).subtract(number, unit);
    // const periodUnit = unit === 'hours' ? 'hour' : 'day';
    return {
      start: momentDate.clone().utc().toDate(),
      end: date,
    };
  }
}
