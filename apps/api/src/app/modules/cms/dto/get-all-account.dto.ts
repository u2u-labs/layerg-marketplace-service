import { IsOptional } from 'class-validator';

import { OffsetPaginationDto } from '@/apps/api/src/app/commons/definitions/OffsetPagination.input';

export class GetAllAccountDto extends OffsetPaginationDto {
  @IsOptional()
  username: string;
}
