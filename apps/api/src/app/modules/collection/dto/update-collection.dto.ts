import { InputType } from '@nestjs/graphql';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { CONTRACT_TYPE, TX_STATUS } from '@prisma/client';
import { IsEnum, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateCollectionDto {
  @ApiPropertyOptional({ description: 'Transaction Hash' })
  @IsOptional()
  @IsString({ message: 'Transaction Hash is invalid' })
  txCreationHash?: string;

  @ApiPropertyOptional({ description: 'Name of the Collection' })
  @IsOptional()
  @IsString({ message: 'Name Collection is invalid' })
  name?: string;

  @ApiPropertyOptional({ description: 'Symbol of the Collection' })
  @IsOptional()
  @IsString({ message: 'Symbol Collection is invalid' })
  symbol?: string;

  @ApiPropertyOptional({ description: 'Short URL' })
  @IsOptional()
  @IsString({ message: 'Short URL is invalid' })
  shortUrl?: string;

  @ApiPropertyOptional({ description: 'Description of the collection' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({ enum: TX_STATUS, description: 'Transaction Status' })
  @IsOptional()
  @IsEnum(TX_STATUS)
  status?: TX_STATUS;

  @ApiPropertyOptional({ enum: CONTRACT_TYPE, description: 'Contract Type' })
  @IsOptional()
  @IsEnum(CONTRACT_TYPE)
  type?: CONTRACT_TYPE;

  @ApiPropertyOptional({ description: 'Category ID' })
  @IsOptional()
  @IsString()
  categoryId?: string;

  @ApiPropertyOptional({ description: 'Creators of the collection' })
  @IsOptional()
  @IsString()
  creators?: string;

  @ApiPropertyOptional({ description: 'Cover image URL' })
  @IsOptional()
  @IsString()
  coverImage?: string;
}
