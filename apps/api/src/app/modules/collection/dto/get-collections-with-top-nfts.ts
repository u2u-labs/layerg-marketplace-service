import { ApiPropertyOptional } from '@nestjs/swagger';
import { OffsetPaginationDto } from '@/apps/api/src/app/commons/definitions/OffsetPagination.input';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class GetCollectionsWithTopNftsDTO extends OffsetPaginationDto {
  @ApiPropertyOptional({
    description: 'Id of user to get collections',
  })
  @IsString()
  @IsOptional()
  userId?: string;

  @ApiPropertyOptional({
    description: 'Game id of collections',
  })
  @IsString()
  @IsOptional()
  gameId?: string;

  @ApiPropertyOptional({
    example: 5,
    default: 5,
    description: 'Number of top nfts per collection to get',
  })
  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  top?: number;
}
