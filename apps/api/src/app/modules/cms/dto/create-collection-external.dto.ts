import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

import { CreateCollectionDto } from '@/apps/api/src/app/modules/collection/dto/create-collection.dto';

export class CreateCollectionExternalDto extends CreateCollectionDto {
  @ApiProperty({
    description: 'Indicates if the collection is external',
    required: false,
    example: true,
  })
  @IsOptional()
  @IsBoolean()
  flagExternal: boolean;

  @ApiProperty({
    description: 'Subgraph URL for the external collection',
    required: false,
    example: 'https://subgraph.example.com',
  })
  @IsOptional()
  @IsString()
  subgraphUrl: string;

  @ApiProperty({
    description: 'User ID associated with the external collection',
    required: false,
    example: 'user123',
  })
  @IsOptional()
  @IsString()
  userId: string;
}

export class Category {
  @ApiProperty({ description: 'Category ID', example: 'cat123' })
  @IsNotEmpty()
  @IsString()
  id: string;

  @ApiProperty({
    description: 'Category extract/summary',
    example: 'This is a game category',
  })
  @IsNotEmpty()
  @IsString()
  extract: string;

  @ApiProperty({ description: 'Category name', example: 'Action' })
  @IsNotEmpty()
  @IsString()
  name: string;
}

export class Game {
  @ApiProperty({ description: 'Game name', example: 'GameXYZ' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'List of categories the game belongs to',
    type: [Category],
  })
  @ValidateNested({ each: true })
  @Type(() => Category)
  category: Category[];
}

export class WebhookCollectionDto extends CreateCollectionDto {
  @ApiProperty({
    description: 'Indicates if the collection is external',
    required: false,
    example: true,
  })
  @IsOptional()
  @IsBoolean()
  flagExternal: boolean;

  @ApiProperty({
    description: 'Subgraph URL for webhook collection',
    required: false,
    example: 'https://subgraph.example.com',
  })
  @IsOptional()
  @IsString()
  subgraphUrl: string;

  @ApiProperty({
    description: 'Metadata as a JSON object',
    example: '{ "key": "value" }',
  })
  meta: JSON;

  @ApiProperty({
    description: 'Blockchain address of the collection',
    example: '0x1234567890abcdef',
  })
  @IsNotEmpty()
  @IsString()
  address: string;

  @ApiProperty({ description: 'Associated game ID', example: 'game123' })
  @IsNotEmpty()
  @IsString()
  gameId: string;
}
