import { CONTRACT_TYPE, ORDERSTATUS, ORDERTYPE } from '@prisma/client';
import {
  IsEnum,
  IsEthereumAddress,
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

import { QueryTraitDto } from './query-trait.dto';

import { OffsetPaginationDto } from '@/apps/api/src/app/commons/definitions/OffsetPagination.input';
import { SourceType } from '@/apps/api/src/app/constants/enums/Source.enum';
import { SellStatus } from '@/apps/api/src/app/generated/graphql';

import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsNumberString } from 'class-validator';

export class GetAllNftDto extends OffsetPaginationDto {
  @ApiPropertyOptional({
    type: () => [QueryTraitDto],
    description: 'List of traits to filter NFTs',
  })
  @IsOptional()
  traits: QueryTraitDto[];

  @ApiPropertyOptional({
    enum: SellStatus,
    description: 'Filter by sell status',
  })
  @IsOptional()
  @IsEnum(SellStatus)
  sellStatus: SellStatus;

  @ApiPropertyOptional({ type: String, description: 'Maximum price filter' })
  @IsOptional()
  @IsNumberString()
  priceMax: number;

  @ApiPropertyOptional({ type: String, description: 'Minimum price filter' })
  @IsOptional()
  @IsNumberString()
  priceMin: number;

  @ApiPropertyOptional({
    description: 'Collection address (Ethereum address format)',
  })
  @IsOptional()
  @IsEthereumAddress()
  collectionAddress: string;

  @ApiPropertyOptional({
    description: 'Creator address (Ethereum address format)',
  })
  @IsOptional()
  @IsEthereumAddress()
  creatorAddress: string;

  @ApiPropertyOptional({ description: 'NFT name filter' })
  @IsOptional()
  @IsString()
  name: string;

  @ApiPropertyOptional({
    description: 'Owner address (Ethereum address format)',
  })
  @IsOptional()
  @IsEthereumAddress()
  owner: string;

  @ApiPropertyOptional({
    description: 'Sender address (Ethereum address format)',
  })
  @IsOptional()
  @IsEthereumAddress()
  from: string;

  @ApiPropertyOptional({
    description: 'Receiver address (Ethereum address format)',
  })
  @IsOptional()
  @IsEthereumAddress()
  to: string;

  @ApiPropertyOptional({ description: 'Quote token (Ethereum address format)' })
  @IsOptional()
  @IsEthereumAddress()
  quoteToken: string;

  @ApiPropertyOptional({
    enum: CONTRACT_TYPE,
    description: 'NFT contract type',
  })
  @IsOptional()
  @IsEnum(CONTRACT_TYPE)
  type: CONTRACT_TYPE;

  @ApiPropertyOptional({
    enum: ['time', 'price', 'all'],
    description: 'Sorting criteria',
  })
  @IsOptional()
  @IsIn(['time', 'price', 'all'])
  orderBy?: 'time' | 'price' | 'all' = 'all';

  @ApiPropertyOptional({ enum: SourceType, description: 'Source of the NFT' })
  @IsOptional()
  @IsEnum(SourceType)
  source?: SourceType;

  @ApiPropertyOptional({
    enum: ORDERSTATUS,
    description: 'Order status filter',
  })
  @IsOptional()
  @IsEnum(ORDERSTATUS)
  orderStatus: ORDERSTATUS;

  @ApiPropertyOptional({ enum: ORDERTYPE, description: 'Order type filter' })
  @IsOptional()
  @IsEnum(ORDERTYPE)
  orderType: ORDERTYPE;

  @ApiPropertyOptional({ type: Number, description: 'Blockchain chain ID' })
  @IsOptional()
  @IsInt()
  chainId: number;

  @ApiPropertyOptional({ description: 'Game ID associated with the NFT' })
  @IsOptional()
  @IsString()
  gameId: string;

  @ApiPropertyOptional({ description: 'Owner ID associated with the NFT' })
  @IsOptional()
  @IsString()
  ownerId: string;
}

import { ApiProperty } from '@nestjs/swagger';

export class GetSweepOrdersDto extends OffsetPaginationDto {
  @ApiPropertyOptional({ type: String, description: 'Maximum price filter' })
  @IsOptional()
  @IsNumberString()
  priceMax: number;

  @ApiPropertyOptional({ type: String, description: 'Minimum price filter' })
  @IsOptional()
  @IsNumberString()
  priceMin: number;

  @ApiProperty({
    description: 'Collection address (Ethereum address format)',
    example: '0x1234567890abcdef1234567890abcdef12345678',
  })
  @IsNotEmpty()
  @IsEthereumAddress()
  collectionAddress: string;

  @ApiPropertyOptional({ enum: SourceType, description: 'Source of the order' })
  @IsOptional()
  @IsEnum(SourceType)
  source?: SourceType;

  @ApiPropertyOptional({
    enum: ORDERSTATUS,
    description: 'Order status filter',
  })
  @IsOptional()
  @IsEnum(ORDERSTATUS)
  orderStatus: ORDERSTATUS;

  @ApiPropertyOptional({ enum: ORDERTYPE, description: 'Order type filter' })
  @IsOptional()
  @IsEnum(ORDERTYPE)
  orderType: ORDERTYPE;

  @ApiPropertyOptional({
    description: 'Owner address (Ethereum address format)',
    example: '0xabcdef1234567890abcdef1234567890abcdef12',
  })
  @IsOptional()
  @IsEthereumAddress()
  owner: string;

  @ApiPropertyOptional({
    description: 'Quote token address (Ethereum address format)',
  })
  @IsOptional()
  @IsEthereumAddress()
  quoteToken: string;

  @ApiPropertyOptional({
    enum: CONTRACT_TYPE,
    description: 'NFT contract type',
  })
  @IsOptional()
  @IsEnum(CONTRACT_TYPE)
  type: CONTRACT_TYPE;

  @ApiPropertyOptional({
    enum: ['time', 'price', 'all'],
    description: 'Sorting criteria',
  })
  @IsOptional()
  @IsIn(['time', 'price', 'all'])
  orderBy?: 'time' | 'price' | 'all' = 'all';

  @ApiPropertyOptional({ description: 'NFT name filter' })
  @IsOptional()
  @IsString()
  name: string;
}
