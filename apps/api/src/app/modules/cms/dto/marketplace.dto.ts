import { ApiProperty } from '@nestjs/swagger';
import { CONTRACT_TYPE } from '@prisma/client';
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

import { OffsetPaginationDto } from '@/apps/api/src/app/commons/definitions/OffsetPagination.input';

export class ActiveGeneral {
  @ApiProperty({ description: 'Unique identifier', example: '123456' })
  @IsString()
  @IsNotEmpty()
  id: string;

  @ApiProperty({
    description: 'Indicates if the entity is active',
    example: true,
  })
  @IsBoolean()
  @IsNotEmpty()
  isActive: boolean;
}

export class ActiveNFTDto extends ActiveGeneral {
  @ApiProperty({
    description: 'Collection ID associated with the NFT',
    example: 'collection_12345',
  })
  @IsString()
  @IsNotEmpty()
  collectionId: string;
}

export class ActiveCollectionDto extends ActiveGeneral {}

export class ActiveUserDto extends ActiveGeneral {}

export class VerifyCollectionDto {
  @ApiProperty({
    description: 'Unique identifier for the collection',
    example: 'collection_67890',
  })
  @IsString()
  @IsNotEmpty()
  id: string;

  @ApiProperty({
    description: 'Indicates if the collection is verified',
    example: true,
  })
  @IsBoolean()
  @IsNotEmpty()
  isVerified: boolean;
}

export class OptionDto extends OffsetPaginationDto {
  @ApiProperty({
    description: 'Search keyword',
    required: false,
    example: 'CryptoPunks',
  })
  @IsString()
  @IsOptional()
  search: string;

  @ApiProperty({
    description: 'Contract type',
    enum: CONTRACT_TYPE,
    required: false,
  })
  @IsEnum(CONTRACT_TYPE)
  @IsOptional()
  type: CONTRACT_TYPE;
}
