import {
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  IsIn,
  IsEthereumAddress,
  IsNotEmpty,
} from 'class-validator';
import { CONTRACT_TYPE, ORDERSTATUS, ORDERTYPE } from '@prisma/client';

import { QueryTraitDto } from './query-trait.dto';

import { OffsetPaginationDto } from '@/apps/api/src/app/commons/definitions/OffsetPagination.input';
import { SellStatus } from '@/apps/api/src/app/generated/graphql';
import { SourceType } from '@/apps/api/src/app/constants/enums/Source.enum';

export class GetAllNftDto extends OffsetPaginationDto {
  @IsOptional()
  traits: QueryTraitDto[];

  @IsOptional()
  @IsEnum(SellStatus)
  sellStatus: SellStatus;

  @IsOptional()
  @IsString()
  priceMax: number;

  @IsOptional()
  @IsString()
  priceMin: number;

  @IsOptional()
  @IsEthereumAddress()
  collectionAddress: string;

  @IsOptional()
  creatorAddress: string;

  @IsOptional()
  name: string;

  @IsOptional()
  owner: string;

  @IsOptional()
  from: string;

  @IsOptional()
  to: string;

  @IsOptional()
  quoteToken: string;

  @IsOptional()
  @IsEnum(CONTRACT_TYPE)
  type: CONTRACT_TYPE;

  @IsOptional()
  @IsIn(['time', 'price', 'all'])
  orderBy?: 'time' | 'price' | 'all' = 'all';

  @IsOptional()
  @IsEnum(SourceType)
  source?: SourceType;

  @IsOptional()
  @IsEnum(ORDERSTATUS)
  orderStatus: ORDERSTATUS;

  @IsOptional()
  @IsEnum(ORDERTYPE)
  orderType: ORDERTYPE;

  @IsOptional()
  chainId: number;

  @IsOptional()
  gameId: string;
}

export class GetSweepOrdersDto extends OffsetPaginationDto {
  @IsOptional()
  @IsString()
  priceMax: number;

  @IsOptional()
  @IsString()
  priceMin: number;

  @IsNotEmpty()
  @IsEthereumAddress()
  collectionAddress: string;

  @IsOptional()
  @IsEnum(SourceType)
  source?: SourceType;

  @IsOptional()
  @IsEnum(ORDERSTATUS)
  orderStatus: ORDERSTATUS;

  @IsOptional()
  @IsEnum(ORDERTYPE)
  orderType: ORDERTYPE;

  @IsOptional()
  owner: string;

  @IsOptional()
  quoteToken: string;

  @IsOptional()
  @IsEnum(CONTRACT_TYPE)
  type: CONTRACT_TYPE;

  @IsOptional()
  @IsIn(['time', 'price', 'all'])
  orderBy?: 'time' | 'price' | 'all' = 'all';

  @IsOptional()
  name: string;
}
