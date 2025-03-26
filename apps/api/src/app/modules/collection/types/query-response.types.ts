import { NFT } from '@prisma/client';

export type GetCollectionsWithTopNftsItem = {
  rank: bigint;
  collection_name: string;
  collection_address: string;
} & NFT;
