import { ApiProperty } from '@nestjs/swagger';
import { Collection } from '@prisma/client';
import { TraitGeneralInfo } from '../../nft/trait.service';

export class CollectionDetailDto {
  @ApiProperty({ description: 'Collection details' })
  collection: Collection;

  @ApiProperty({
    description: 'List of available traits',
  })
  traitAvailable: TraitGeneralInfo[];

  @ApiProperty({
    description: 'General information related to the collection',
    example: {},
  })
  generalInfo: Record<string, any>; // Define as a generic object instead of `any`
}
