import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

import { OffsetPaginationDto } from '../../../commons/definitions/OffsetPagination.input';

export class CreatePlatformOverviewDto {
  @ApiProperty({ description: 'Platform identifier' })
  @IsString()
  platform: string;

  @ApiProperty({ description: 'Slugified name of the platform' })
  @IsString()
  nameSlug: string;

  @ApiProperty({ description: 'Platform name' })
  @IsString()
  name: string;

  @ApiPropertyOptional({ description: 'Platform avatar URL' })
  @IsOptional()
  @IsString()
  avatar?: string;

  @ApiPropertyOptional({ description: 'Platform banner URL' })
  @IsOptional()
  @IsString()
  banner?: string;

  @ApiPropertyOptional({ description: 'Description of the platform' })
  @IsOptional()
  @IsString()
  description?: string;
}

export class PlatformOverviewFilter extends OffsetPaginationDto {
  @ApiPropertyOptional({ description: 'Filter by platform identifier' })
  @IsOptional()
  @IsString()
  platform?: string;

  @ApiPropertyOptional({
    description: 'Filter by template status',
    example: true,
  })
  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => value === 'true')
  templateStatus?: boolean;
}
