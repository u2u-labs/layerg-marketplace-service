import { NFT, TX_STATUS } from '@prisma/client';

import { TraitEntity } from './trait.entity';

import { CollectionEntity } from '@/apps/api/src/app/modules/collection/entities/collection.entity';
import { UserEntity } from '@/apps/api/src/app/modules/user/entities/user.entity';

type JsonValue = string | number | boolean | null | JsonObject | JsonArray;
interface JsonObject {
  [key: string]: JsonValue;
}
type JsonArray = Array<JsonValue>;

export class NftEntity implements NFT {
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
  collection?: CollectionEntity;
  owners?: UserEntity[];
  constructor(partial: Partial<NFT>) {
    Object.assign(this, partial);
  }
  animationUrl: string;
  description: string;
  u2uId: string;
  image: string;
  totalSupply?: number;
  nameSlug: string;
  isActive: boolean;
  // Add metricPoint and metricDetail properties
  metricPoint: bigint;
  metricDetail: JsonValue;
  source: string;
}

export enum TXSTATUS {
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
}
