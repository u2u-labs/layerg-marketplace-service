import { IsOptional, IsEnum } from 'class-validator';
import { OffsetPaginationDto } from '@/apps/api/src/app/commons/definitions/OffsetPagination.input';
import { Transform } from 'class-transformer';
export class GetCollectionByUserDto extends OffsetPaginationDto {
  @IsOptional()
  @Transform(({ value }) => value === 'true')
  hasBase: boolean;
}
