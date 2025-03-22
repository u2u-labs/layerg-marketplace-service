import { InputType } from '@nestjs/graphql';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { CONTRACT_TYPE, TX_STATUS } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

import { CreationMode } from '@/apps/api/src/app/constants/enums/Creation.enum';
import { SourceType } from '@/apps/api/src/app/constants/enums/Source.enum';

@InputType()
export class CreateCollectionDto {
  @ApiProperty({
    example: '0xabc123...',
    description: 'Transaction creation hash',
  })
  @IsString({ message: 'Transaction Hash is invalid' })
  @IsNotEmpty({ message: 'Please Enter Transaction Hash' })
  txCreationHash: string;

  @ApiPropertyOptional({
    example: 'short-url',
    description: 'Short URL for the collection',
  })
  @IsString({ message: 'Short url is invalid' })
  @IsOptional()
  shortUrl: string;

  @ApiProperty({
    example: 'My NFT Collection',
    description: 'Name of the collection',
  })
  @IsString({ message: 'Name Collection is invalid' })
  @IsNotEmpty({ message: 'Please Enter Name Collection' })
  name: string;

  @ApiProperty({ example: 'MYNFT', description: 'Symbol of the collection' })
  @IsString({ message: 'Symbol Collection is invalid' })
  @IsNotEmpty({ message: 'Please Enter Symbol Collection' })
  symbol: string;

  @ApiPropertyOptional({
    example: 'This is an NFT collection',
    description: 'Description of the collection',
  })
  @IsOptional()
  description: string;

  @ApiPropertyOptional({
    example: '{"key": "value"}',
    description: 'Metadata of the collection',
  })
  @IsOptional()
  metadata: string;

  @ApiPropertyOptional({ enum: TX_STATUS, description: 'Transaction status' })
  @IsOptional()
  @IsEnum(TX_STATUS)
  status: TX_STATUS;

  @ApiProperty({ enum: CONTRACT_TYPE, description: 'Type of contract' })
  @IsEnum(CONTRACT_TYPE)
  type: CONTRACT_TYPE;

  @ApiPropertyOptional({
    example: 1,
    description: 'Category ID of the collection',
  })
  @IsOptional()
  categoryId: number;

  @ApiPropertyOptional({ example: 'user123', description: 'ID of the creator' })
  @IsOptional()
  @IsNotEmpty({ message: 'Please Enter User ID' })
  creators: string;

  @ApiPropertyOptional({
    example: 'https://example.com/image.jpg',
    description: 'Cover image URL',
  })
  @IsOptional()
  @IsString()
  coverImage: string;

  @ApiPropertyOptional({
    example: 'https://example.com/avatar.jpg',
    description: 'Avatar URL',
  })
  @IsOptional()
  @IsString()
  avatar: string;

  @ApiPropertyOptional({ enum: CreationMode, description: 'Creation mode' })
  @IsOptional()
  @IsEnum(CreationMode)
  modeCreate: CreationMode;

  @ApiPropertyOptional({
    example: '0xabc123...',
    description: 'Creator address',
  })
  @IsString()
  @IsOptional()
  creatorAddress: string;

  @ApiPropertyOptional({ enum: SourceType, description: 'Source of creation' })
  @IsOptional()
  @IsEnum(SourceType)
  source: SourceType;
}
