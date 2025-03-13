import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '@/shared/src/lib/services';
import CollectionHelperService from '@/apps/api/src/app/modules/collection/helper/collection-helper.service';
import PaginationCommon from '@/apps/api/src/app/commons/HasNext.common';
import { AnalysisType } from '@/apps/api/src/app/constants/enums/Analysis.enum';
import { Prisma } from '@prisma/client';
import { GetAnalysisGameDto } from '@/apps/api/src/app/modules/game-layerg/dto/get-analysis-game.dto';
import moment from 'moment';
import { gameLayergSelect } from '@/apps/api/src/app/commons/definitions/Constraint.Object';

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

      console.log('dataCompare', dataCompare);

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

  async getAndCompare(
    item: Prisma.PickEnumerable<
      Prisma.CollectionGroupByOutputType,
      'gameLayergId'[]
    > & {
      _sum: {
        vol: number;
        floor: number;
      };
    },
    type: AnalysisType,
  ) {
    try {
      const typeTimeMap = {
        [AnalysisType.ONEHOUR]: { amount: 1, unit: 'hours' },
        [AnalysisType.ONEWEEK]: { amount: 8, unit: 'days' },
        [AnalysisType.ONEMONTH]: { amount: 31, unit: 'days' },
        default: { amount: 2, unit: 'days' },
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

      const volumeChange = calculateChange(
        item?._sum.vol || 0,
        pastRecord._sum.vol || item?._sum.vol || 0, // volume change will be 0 if past record not found
      );
      const floorPriceChange = calculateChangeBigInt(
        BigInt(item?._sum.floor || 0),
        BigInt(pastRecord._sum.floor || item?._sum.floor || 0),
      );

      return { volumeChange, floorPriceChange, ...item };
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
