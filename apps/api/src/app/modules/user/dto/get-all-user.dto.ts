import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsEnum,
  IsNumber,
  IsNumberString,
  Min,
  IsBoolean,
  IsDefined,
} from 'class-validator';

import { CursorPagination } from '@/apps/api/src/app/commons/definitions/CursorPagition.input';
import { OffsetPaginationDto } from '@/apps/api/src/app/commons/definitions/OffsetPagination.input';

export class GetAllUser extends OffsetPaginationDto {
  @IsOptional()
  search: string;
}
