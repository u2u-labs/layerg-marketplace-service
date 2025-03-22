import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsEnum, IsOptional, IsString } from 'class-validator';

import { OffsetPaginationDto } from '@/apps/api/src/app/commons/definitions/OffsetPagination.input';
import { SourceType } from '@/apps/api/src/app/constants/enums/Source.enum';

export class GetAllCollectionDto extends OffsetPaginationDto {
  @ApiPropertyOptional({ example: '0.01', description: 'Minimum price filter' })
  @IsString()
  @IsOptional()
  min?: string;

  @ApiPropertyOptional({ example: '10', description: 'Maximum price filter' })
  @IsString()
  @IsOptional()
  max?: string;

  @ApiPropertyOptional({
    example: 'Cool Collection',
    description: 'Collection name',
  })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiPropertyOptional({
    example: ['0xabc...', '0xdef...'],
    description: 'List of creator addresses',
  })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  creatorAddresses?: string[];

  @ApiPropertyOptional({
    enum: ['time', 'price', 'all'],
    example: 'all',
    description: 'Sorting option',
  })
  @IsOptional()
  @IsEnum(['time', 'price', 'all'], {
    message: 'orderBy must be one of: time, price, all',
  })
  orderBy?: 'time' | 'price' | 'all' = 'all';

  @ApiPropertyOptional({ enum: SourceType, description: 'Source type filter' })
  @IsOptional()
  @IsEnum(SourceType)
  source?: SourceType;

  @ApiPropertyOptional({ example: 'game-123', description: 'Game ID' })
  @IsOptional()
  @IsString()
  gameId?: string;

  @ApiPropertyOptional({ example: 1, description: 'Blockchain chain ID' })
  @IsOptional()
  @Type(() => Number)
  chainId?: number;
}
