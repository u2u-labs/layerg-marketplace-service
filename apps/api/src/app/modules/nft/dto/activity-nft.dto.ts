import { IsEnum, IsOptional, ValidateNested, IsString } from 'class-validator';
import { CONTRACT_TYPE } from '@prisma/client';
import { Type, Transform } from 'class-transformer';

import { GetEventMarketplaceQuery } from './get-event-marketplace-query.dto';

import { OffsetPaginationDto } from '@/apps/api/src/app/commons/definitions/OffsetPagination.input';
import { LowercasePipe } from '@/apps/api/src/app/commons/pipe/LowerCase.pipe';

export class GetActivityBase extends OffsetPaginationDto {
  @IsOptional()
  @IsString()
  tokenId?: string;

  @IsOptional()
  @IsString()
  collectionAddress?: string;

  @IsString()
  @IsOptional()
  quoteToken?: string;

  @IsOptional()
  @IsEnum(CONTRACT_TYPE)
  type?: CONTRACT_TYPE;
}

export class GetHistoryOrderDto {
  @IsOptional()
  @IsString()
  id?: string;

  @IsOptional()
  @IsString()
  collection?: string;

  @IsString()
  @IsOptional()
  quoteToken?: string;
}
