import { IsOptional, IsEnum } from 'class-validator';
import { Transform } from 'class-transformer';

import { OffsetPaginationDto } from '@/apps/api/src/app/commons/definitions/OffsetPagination.input';
export class GetCollectionByUserDto extends OffsetPaginationDto {
  @IsOptional()
  @Transform(({ value }) => value === 'true')
  hasBase: boolean;
}
