import { IsString, IsOptional, IsIn, IsEnum, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

import { OffsetPaginationDto } from '@/apps/api/src/app/commons/definitions/OffsetPagination.input';
import {
  AnalysisModeMinMax,
  AnalysisModeSort,
  AnalysisType,
} from '@/apps/api/src/app/constants/enums/Analysis.enum';

export class GetAnalysisDto extends OffsetPaginationDto {
  // id: string;
  @IsString()
  @IsOptional()
  min: string;

  @IsString()
  @IsOptional()
  max: string;

  @IsEnum(AnalysisType)
  @IsOptional()
  type: AnalysisType = AnalysisType.ONEDAY;

  @IsEnum(AnalysisModeSort)
  @IsOptional()
  orderBy: AnalysisModeSort = AnalysisModeSort.vol;

  @IsOptional()
  @IsEnum(AnalysisModeMinMax)
  minMaxBy: AnalysisModeMinMax = AnalysisModeMinMax.vol;

  @IsString()
  @IsOptional()
  search: string;

  @IsNumber()
  @IsOptional()
  chainId: number;

  @IsString()
  @IsOptional()
  gameId: string;
}
