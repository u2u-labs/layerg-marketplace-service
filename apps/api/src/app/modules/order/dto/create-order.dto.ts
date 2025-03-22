import { InputType } from '@nestjs/graphql';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ORDERTYPE } from '@prisma/client';
import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

import { makeTakeType } from '@/apps/api/src/app/constants/enums/order.enum';

@InputType()
export class CreateSingleDto {
  @ApiProperty({ description: 'Signature of the order' })
  @IsString()
  @IsNotEmpty()
  sig: string;

  @ApiProperty({ enum: makeTakeType, description: 'Type of asset being made' })
  @IsEnum(makeTakeType)
  @IsNotEmpty()
  makeAssetType: makeTakeType;

  @ApiProperty({ description: 'Address of the asset being made' })
  @IsString()
  @IsNotEmpty()
  makeAssetAddress: string;

  @ApiProperty({ description: 'Value of the asset being made' })
  @IsString()
  @IsNotEmpty()
  makeAssetValue: string;

  @ApiProperty({ description: 'ID of the asset being made' })
  @IsString()
  @IsNotEmpty()
  makeAssetId: string;

  @ApiPropertyOptional({ description: 'Address of the taker (optional)' })
  @IsString()
  @IsOptional()
  taker: string;

  @ApiProperty({ enum: makeTakeType, description: 'Type of asset being taken' })
  @IsEnum(makeTakeType)
  @IsNotEmpty()
  takeAssetType: makeTakeType;

  @ApiProperty({ description: 'Address of the asset being taken' })
  @IsString()
  @IsNotEmpty()
  takeAssetAddress: string;

  @ApiPropertyOptional({
    description: 'Value of the asset being taken (optional)',
  })
  @IsString()
  @IsOptional()
  takeAssetValue: string;

  @ApiPropertyOptional({
    description: 'ID of the asset being taken (optional)',
  })
  @IsString()
  @IsOptional()
  takeAssetId: string;

  @ApiProperty({ description: 'Unique salt value for the order' })
  @IsString()
  @IsNotEmpty()
  salt: string;

  @ApiProperty({ description: 'Start timestamp of the order' })
  @IsNotEmpty()
  @IsNumber()
  start: number;

  @ApiProperty({ description: 'End timestamp of the order' })
  @IsNotEmpty()
  @IsNumber()
  end: number;

  @ApiProperty({ enum: ORDERTYPE, description: 'Type of order' })
  @IsEnum(ORDERTYPE)
  @IsNotEmpty()
  orderType: ORDERTYPE;

  @ApiProperty({ description: 'Price of the order' })
  @IsString()
  @IsNotEmpty()
  price: string;

  @ApiProperty({ description: 'Net price of the order after fees' })
  @IsString()
  @IsNotEmpty()
  netPrice: string;

  @ApiProperty({ description: 'Index of the order' })
  @IsNotEmpty()
  @IsNumber()
  index: number;

  @ApiPropertyOptional({ description: 'Merkle root (optional)' })
  @IsString()
  @IsOptional()
  root: string;

  @ApiPropertyOptional({
    description: 'Merkle proof array (optional)',
    type: [String],
  })
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  proof: string[];
}

export class CreateBulkDto {
  @ApiProperty({ type: [CreateSingleDto], description: 'List of orders' })
  orders: CreateSingleDto[];
}

export class ItemBulkDto extends CreateSingleDto {
  @ApiPropertyOptional({ description: 'Signature of the item (optional)' })
  @IsString()
  @IsOptional()
  sig: string;
}
