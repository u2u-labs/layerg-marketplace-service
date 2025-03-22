import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';

import { OffsetPaginationDto } from '@/apps/api/src/app/commons/definitions/OffsetPagination.input';
import {
  AnalysisModeSort,
  AnalysisType,
} from '@/apps/api/src/app/constants/enums/Analysis.enum';

export class GetAnalysisGameDto extends OffsetPaginationDto {
  @ApiPropertyOptional({ enum: AnalysisType, description: 'Type of analysis' })
  @IsEnum(AnalysisType)
  @IsOptional()
  type?: AnalysisType = AnalysisType.ONEHOUR;

  @ApiPropertyOptional({ enum: AnalysisModeSort, description: 'Sorting mode' })
  @IsEnum(AnalysisModeSort)
  @IsOptional()
  orderBy?: AnalysisModeSort = AnalysisModeSort.vol;

  @ApiPropertyOptional({ description: 'Blockchain Chain ID' })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  chainId?: number;

  @ApiPropertyOptional({ description: 'Game ID' })
  @IsOptional()
  @IsString()
  gameId?: string;
}
