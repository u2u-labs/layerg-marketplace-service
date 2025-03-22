import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';

import { OffsetPaginationDto } from '@/apps/api/src/app/commons/definitions/OffsetPagination.input';
import {
  AnalysisModeMinMax,
  AnalysisModeSort,
  AnalysisType,
} from '@/apps/api/src/app/constants/enums/Analysis.enum';

export class GetAnalysisDto extends OffsetPaginationDto {
  @ApiPropertyOptional({
    example: '0.01',
    description: 'Minimum value for filtering',
  })
  @IsString()
  @IsOptional()
  min?: string;

  @ApiPropertyOptional({
    example: '10',
    description: 'Maximum value for filtering',
  })
  @IsString()
  @IsOptional()
  max?: string;

  @ApiPropertyOptional({
    enum: AnalysisType,
    example: AnalysisType.ONEDAY,
    description: 'Analysis time range',
  })
  @IsEnum(AnalysisType)
  @IsOptional()
  type?: AnalysisType = AnalysisType.ONEDAY;

  @ApiPropertyOptional({
    enum: AnalysisModeSort,
    example: AnalysisModeSort.vol,
    description: 'Sorting method',
  })
  @IsEnum(AnalysisModeSort)
  @IsOptional()
  orderBy?: AnalysisModeSort = AnalysisModeSort.vol;

  @ApiPropertyOptional({
    enum: AnalysisModeMinMax,
    example: AnalysisModeMinMax.vol,
    description: 'Min/Max filtering method',
  })
  @IsEnum(AnalysisModeMinMax)
  @IsOptional()
  minMaxBy?: AnalysisModeMinMax = AnalysisModeMinMax.vol;

  @ApiPropertyOptional({ example: 'Cool NFT', description: 'Search keyword' })
  @IsString()
  @IsOptional()
  search?: string;

  @ApiPropertyOptional({ example: 1, description: 'Blockchain chain ID' })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  chainId?: number;

  @ApiPropertyOptional({ example: 'game-123', description: 'Game ID' })
  @IsString()
  @IsOptional()
  gameId?: string;
}
