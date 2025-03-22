import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsBoolean, IsOptional } from 'class-validator';

import { OffsetPaginationDto } from '@/apps/api/src/app/commons/definitions/OffsetPagination.input';

export class GetCollectionByUserDto extends OffsetPaginationDto {
  @ApiPropertyOptional({
    example: true,
    description: 'Filter collections with a base setting',
  })
  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => value === 'true')
  hasBase?: boolean;
}
