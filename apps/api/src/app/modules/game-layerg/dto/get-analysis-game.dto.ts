import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';

import { OffsetPaginationDto } from '@/apps/api/src/app/commons/definitions/OffsetPagination.input';
import {
  AnalysisModeSort,
  AnalysisType,
} from '@/apps/api/src/app/constants/enums/Analysis.enum';

export class GetAnalysisGameDto extends OffsetPaginationDto {
  @IsEnum(AnalysisType)
  @IsOptional()
  type: AnalysisType = AnalysisType.ONEHOUR;

  @IsEnum(AnalysisModeSort)
  @IsOptional()
  orderBy: AnalysisModeSort = AnalysisModeSort.vol;

  @IsNumber()
  @IsOptional()
  chainId: number;

  @IsString()
  @IsOptional()
  gameId: string;
}
