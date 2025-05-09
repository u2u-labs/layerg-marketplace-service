import { CONTRACT_TYPE, ORDERSTATUS, ORDERTYPE } from '@prisma/client';
import { IsArray, IsEnum, IsOptional, IsString } from 'class-validator';

import { OffsetPaginationDto } from '@/apps/api/src/app/commons/definitions/OffsetPagination.input';
import { SellStatus } from '@/apps/api/src/app/generated/graphql';

export class GetEventMarketplace extends OffsetPaginationDto {
  @IsOptional()
  @IsString()
  nftId: string;
  @IsString()
  @IsOptional()
  from?: string;
  @IsString()
  @IsOptional()
  to?: string;
  @IsString()
  @IsOptional()
  quoteToken?: string;

  @IsOptional()
  @IsEnum(SellStatus)
  event?: SellStatus;

  @IsOptional()
  @IsEnum(CONTRACT_TYPE)
  type?: CONTRACT_TYPE;

  contractAddress: string;
}

export class GetEventOrder extends OffsetPaginationDto {
  @IsOptional()
  @IsString()
  nftId: string;

  @IsString()
  @IsOptional()
  from?: string;

  @IsString()
  @IsOptional()
  to?: string;

  @IsString()
  @IsOptional()
  quoteToken?: string;

  @IsOptional()
  @IsArray() // Add this to specify it's an array
  @IsEnum(ORDERSTATUS, { each: true }) // Validate each item in the array
  status?: ORDERSTATUS[];

  @IsOptional()
  @IsArray() // Add this to specify it's an array
  @IsEnum(ORDERTYPE, { each: true }) // Validate each item in the array
  event?: ORDERTYPE[];

  @IsString()
  @IsOptional()
  contractAddress: string;
}
