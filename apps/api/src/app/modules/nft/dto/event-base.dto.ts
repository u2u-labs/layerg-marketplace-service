import { IsEnum, IsOptional, ValidateNested } from 'class-validator';
import { CONTRACT_TYPE } from '@prisma/client';
import { Type } from 'class-transformer';

import { GetEventMarketplaceQuery } from './get-event-marketplace-query.dto';

import { OffsetPaginationDto } from '@/apps/api/src/app/commons/definitions/OffsetPagination.input';

export class GetEventBase extends OffsetPaginationDto {
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => GetEventMarketplaceQuery)
  or?: GetEventMarketplaceQuery[];

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => GetEventMarketplaceQuery)
  and?: GetEventMarketplaceQuery[];

  @IsOptional()
  @IsEnum(CONTRACT_TYPE)
  type?: CONTRACT_TYPE;
}
