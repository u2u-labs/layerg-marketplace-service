import { TX_STATUS } from '@prisma/client';

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { TraitEntity } from '../entities/trait.entity';

export class NftDto {
  id: string;
  name: string;
  txCreationHash: string;
  traits: TraitEntity[];
  createdAt: Date;
  updatedAt: Date;
  status: TX_STATUS;
  tokenUri: string;
  creatorId: string;
  collectionId: string;
  // owners?: Array<UserNFT>;
  sellInfo?: unknown;
  bidInfo?: unknown;
  collection?: unknown;
  quoteToken?: string;
  creator?: unknown;
  quantity?: unknown;
  gameId?: string;
  ownerId?: string;
}

export class CollectionDetailDto {
  @ApiProperty({
    description: 'The slug of the collection',
    example: 'my-collection-slug',
  })
  @IsString()
  @IsNotEmpty()
  slug: string;
}

// export class CollectionDetailDto {
// @ApiProperty({
//   description: 'Unique identifier of the collection',
//   example: '12345',
// })
// @IsString()
// @IsNotEmpty()
// id: string;
// @ApiProperty({ description: 'Blockchain chain ID', example: '1' })
// @IsString()
// @IsNotEmpty()
// chainId: string;
// @ApiProperty({
//   description: 'Collection contract address',
//   example: '0x1234567890abcdef1234567890abcdef12345678',
// })
// @IsString()
// @IsNotEmpty()
// collectionAddress: string;
// }
