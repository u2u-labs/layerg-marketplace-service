import { OffsetPaginationDto } from '@/apps/api/src/app/commons/definitions/OffsetPagination.input';
import { IsOptional } from 'class-validator';

export class GetAllAccountDto extends OffsetPaginationDto {
  @IsOptional()
  username: string;
}
