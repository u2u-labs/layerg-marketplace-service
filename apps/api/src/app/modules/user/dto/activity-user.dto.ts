import { IsEnum, IsOptional, IsString, IsNotEmpty } from 'class-validator';
import { CONTRACT_TYPE } from '@prisma/client';
import { Type, Transform } from 'class-transformer';

import { OffsetPaginationDto } from '@/apps/api/src/app/commons/definitions/OffsetPagination.input';
import { LowercasePipe } from '@/apps/api/src/app/commons/pipe/LowerCase.pipe';
import { EventType } from '@/apps/api/src/app/generated/graphql';

export class GetActivityBase extends OffsetPaginationDto {
  @IsString()
  @Transform(({ value }) => new LowercasePipe().transform(value))
  user: string;

  @IsOptional()
  @IsEnum(CONTRACT_TYPE)
  type?: CONTRACT_TYPE;
}

export class GetFollowingDto extends OffsetPaginationDto {
  @IsString()
  @IsOptional()
  search: string;
}

export class GetListBid extends OffsetPaginationDto {
  @IsEnum(EventType)
  @IsNotEmpty()
  event: EventType;
}
