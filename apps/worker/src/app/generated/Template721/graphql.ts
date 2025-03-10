import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql';
import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  BigDecimal: { input: any; output: any };
  BigInt: { input: any; output: any };
  Bytes: { input: any; output: any };
  Int8: { input: any; output: any };
};

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type Item = {
  __typename?: 'Item';
  createdAt: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  owner: User;
  tokenID: Scalars['BigInt']['output'];
  tokenURI: Scalars['String']['output'];
  updatedAt: Scalars['BigInt']['output'];
};

export type Item_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Item_Filter>>>;
  createdAt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Item_Filter>>>;
  owner?: InputMaybe<Scalars['String']['input']>;
  owner_?: InputMaybe<User_Filter>;
  owner_contains?: InputMaybe<Scalars['String']['input']>;
  owner_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_gt?: InputMaybe<Scalars['String']['input']>;
  owner_gte?: InputMaybe<Scalars['String']['input']>;
  owner_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_lt?: InputMaybe<Scalars['String']['input']>;
  owner_lte?: InputMaybe<Scalars['String']['input']>;
  owner_not?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains?: InputMaybe<Scalars['String']['input']>;
  owner_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  owner_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with?: InputMaybe<Scalars['String']['input']>;
  owner_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenID?: InputMaybe<Scalars['BigInt']['input']>;
  tokenID_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenID_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenID_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenID_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenID_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenID_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenID_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenURI?: InputMaybe<Scalars['String']['input']>;
  tokenURI_contains?: InputMaybe<Scalars['String']['input']>;
  tokenURI_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenURI_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenURI_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenURI_gt?: InputMaybe<Scalars['String']['input']>;
  tokenURI_gte?: InputMaybe<Scalars['String']['input']>;
  tokenURI_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenURI_lt?: InputMaybe<Scalars['String']['input']>;
  tokenURI_lte?: InputMaybe<Scalars['String']['input']>;
  tokenURI_not?: InputMaybe<Scalars['String']['input']>;
  tokenURI_not_contains?: InputMaybe<Scalars['String']['input']>;
  tokenURI_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenURI_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenURI_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenURI_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenURI_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenURI_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenURI_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenURI_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  updatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Item_OrderBy {
  CreatedAt = 'createdAt',
  Id = 'id',
  Owner = 'owner',
  OwnerId = 'owner__id',
  TokenId = 'tokenID',
  TokenUri = 'tokenURI',
  UpdatedAt = 'updatedAt',
}

export type MetadataUpdateRecord = {
  __typename?: 'MetadataUpdateRecord';
  actor: User;
  id: Scalars['ID']['output'];
  tokenID: Scalars['BigInt']['output'];
};

export type MetadataUpdateRecord_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  actor?: InputMaybe<Scalars['String']['input']>;
  actor_?: InputMaybe<User_Filter>;
  actor_contains?: InputMaybe<Scalars['String']['input']>;
  actor_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  actor_ends_with?: InputMaybe<Scalars['String']['input']>;
  actor_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  actor_gt?: InputMaybe<Scalars['String']['input']>;
  actor_gte?: InputMaybe<Scalars['String']['input']>;
  actor_in?: InputMaybe<Array<Scalars['String']['input']>>;
  actor_lt?: InputMaybe<Scalars['String']['input']>;
  actor_lte?: InputMaybe<Scalars['String']['input']>;
  actor_not?: InputMaybe<Scalars['String']['input']>;
  actor_not_contains?: InputMaybe<Scalars['String']['input']>;
  actor_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  actor_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  actor_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  actor_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  actor_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  actor_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  actor_starts_with?: InputMaybe<Scalars['String']['input']>;
  actor_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  and?: InputMaybe<Array<InputMaybe<MetadataUpdateRecord_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<MetadataUpdateRecord_Filter>>>;
  tokenID?: InputMaybe<Scalars['BigInt']['input']>;
  tokenID_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenID_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenID_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenID_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenID_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenID_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenID_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum MetadataUpdateRecord_OrderBy {
  Actor = 'actor',
  ActorId = 'actor__id',
  Id = 'id',
  TokenId = 'tokenID',
}

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc',
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  item?: Maybe<Item>;
  items: Array<Item>;
  metadataUpdateRecord?: Maybe<MetadataUpdateRecord>;
  metadataUpdateRecords: Array<MetadataUpdateRecord>;
  transferHistories: Array<TransferHistory>;
  transferHistory?: Maybe<TransferHistory>;
  user?: Maybe<User>;
  users: Array<User>;
};

export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type QueryItemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryItemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Item_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Item_Filter>;
};

export type QueryMetadataUpdateRecordArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryMetadataUpdateRecordsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MetadataUpdateRecord_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MetadataUpdateRecord_Filter>;
};

export type QueryTransferHistoriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TransferHistory_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TransferHistory_Filter>;
};

export type QueryTransferHistoryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryUserArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryUsersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<User_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<User_Filter>;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  item?: Maybe<Item>;
  items: Array<Item>;
  metadataUpdateRecord?: Maybe<MetadataUpdateRecord>;
  metadataUpdateRecords: Array<MetadataUpdateRecord>;
  transferHistories: Array<TransferHistory>;
  transferHistory?: Maybe<TransferHistory>;
  user?: Maybe<User>;
  users: Array<User>;
};

export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type SubscriptionItemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionItemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Item_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Item_Filter>;
};

export type SubscriptionMetadataUpdateRecordArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionMetadataUpdateRecordsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MetadataUpdateRecord_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MetadataUpdateRecord_Filter>;
};

export type SubscriptionTransferHistoriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TransferHistory_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TransferHistory_Filter>;
};

export type SubscriptionTransferHistoryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionUserArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionUsersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<User_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<User_Filter>;
};

export type TransferHistory = {
  __typename?: 'TransferHistory';
  from: User;
  id: Scalars['ID']['output'];
  to: User;
  tokenID: Scalars['BigInt']['output'];
  transferAt: Scalars['BigInt']['output'];
  txHash: Scalars['ID']['output'];
};

export type TransferHistory_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TransferHistory_Filter>>>;
  from?: InputMaybe<Scalars['String']['input']>;
  from_?: InputMaybe<User_Filter>;
  from_contains?: InputMaybe<Scalars['String']['input']>;
  from_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  from_ends_with?: InputMaybe<Scalars['String']['input']>;
  from_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from_gt?: InputMaybe<Scalars['String']['input']>;
  from_gte?: InputMaybe<Scalars['String']['input']>;
  from_in?: InputMaybe<Array<Scalars['String']['input']>>;
  from_lt?: InputMaybe<Scalars['String']['input']>;
  from_lte?: InputMaybe<Scalars['String']['input']>;
  from_not?: InputMaybe<Scalars['String']['input']>;
  from_not_contains?: InputMaybe<Scalars['String']['input']>;
  from_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  from_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  from_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  from_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  from_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from_starts_with?: InputMaybe<Scalars['String']['input']>;
  from_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<TransferHistory_Filter>>>;
  to?: InputMaybe<Scalars['String']['input']>;
  to_?: InputMaybe<User_Filter>;
  to_contains?: InputMaybe<Scalars['String']['input']>;
  to_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  to_ends_with?: InputMaybe<Scalars['String']['input']>;
  to_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_gt?: InputMaybe<Scalars['String']['input']>;
  to_gte?: InputMaybe<Scalars['String']['input']>;
  to_in?: InputMaybe<Array<Scalars['String']['input']>>;
  to_lt?: InputMaybe<Scalars['String']['input']>;
  to_lte?: InputMaybe<Scalars['String']['input']>;
  to_not?: InputMaybe<Scalars['String']['input']>;
  to_not_contains?: InputMaybe<Scalars['String']['input']>;
  to_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  to_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  to_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  to_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  to_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_starts_with?: InputMaybe<Scalars['String']['input']>;
  to_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenID?: InputMaybe<Scalars['BigInt']['input']>;
  tokenID_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenID_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenID_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenID_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenID_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenID_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenID_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transferAt?: InputMaybe<Scalars['BigInt']['input']>;
  transferAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  transferAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  transferAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transferAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  transferAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  transferAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  transferAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  txHash?: InputMaybe<Scalars['ID']['input']>;
  txHash_gt?: InputMaybe<Scalars['ID']['input']>;
  txHash_gte?: InputMaybe<Scalars['ID']['input']>;
  txHash_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  txHash_lt?: InputMaybe<Scalars['ID']['input']>;
  txHash_lte?: InputMaybe<Scalars['ID']['input']>;
  txHash_not?: InputMaybe<Scalars['ID']['input']>;
  txHash_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export enum TransferHistory_OrderBy {
  From = 'from',
  FromId = 'from__id',
  Id = 'id',
  To = 'to',
  ToId = 'to__id',
  TokenId = 'tokenID',
  TransferAt = 'transferAt',
  TxHash = 'txHash',
}

export type User = {
  __typename?: 'User';
  id: Scalars['ID']['output'];
  items: Array<Item>;
};

export type UserItemsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Item_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Item_Filter>;
};

export type User_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<User_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  items_?: InputMaybe<Item_Filter>;
  or?: InputMaybe<Array<InputMaybe<User_Filter>>>;
};

export enum User_OrderBy {
  Id = 'id',
  Items = 'items',
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny',
}

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']['output']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']['output']>;
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_Height;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']['output']>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Int8: ResolverTypeWrapper<Scalars['Int8']['output']>;
  Item: ResolverTypeWrapper<Item>;
  Item_filter: Item_Filter;
  Item_orderBy: Item_OrderBy;
  MetadataUpdateRecord: ResolverTypeWrapper<MetadataUpdateRecord>;
  MetadataUpdateRecord_filter: MetadataUpdateRecord_Filter;
  MetadataUpdateRecord_orderBy: MetadataUpdateRecord_OrderBy;
  OrderDirection: OrderDirection;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Subscription: ResolverTypeWrapper<{}>;
  TransferHistory: ResolverTypeWrapper<TransferHistory>;
  TransferHistory_filter: TransferHistory_Filter;
  TransferHistory_orderBy: TransferHistory_OrderBy;
  User: ResolverTypeWrapper<User>;
  User_filter: User_Filter;
  User_orderBy: User_OrderBy;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  BigDecimal: Scalars['BigDecimal']['output'];
  BigInt: Scalars['BigInt']['output'];
  BlockChangedFilter: BlockChangedFilter;
  Block_height: Block_Height;
  Boolean: Scalars['Boolean']['output'];
  Bytes: Scalars['Bytes']['output'];
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Int8: Scalars['Int8']['output'];
  Item: Item;
  Item_filter: Item_Filter;
  MetadataUpdateRecord: MetadataUpdateRecord;
  MetadataUpdateRecord_filter: MetadataUpdateRecord_Filter;
  Query: {};
  String: Scalars['String']['output'];
  Subscription: {};
  TransferHistory: TransferHistory;
  TransferHistory_filter: TransferHistory_Filter;
  User: User;
  User_filter: User_Filter;
  _Block_: _Block_;
  _Meta_: _Meta_;
};

export type DerivedFromDirectiveArgs = {
  field: Scalars['String']['input'];
};

export type DerivedFromDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = DerivedFromDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EntityDirectiveArgs = {};

export type EntityDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = EntityDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type SubgraphIdDirectiveArgs = {
  id: Scalars['String']['input'];
};

export type SubgraphIdDirectiveResolver<
  Result,
  Parent,
  ContextType = any,
  Args = SubgraphIdDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export interface BigDecimalScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface BytesScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export interface Int8ScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['Int8'], any> {
  name: 'Int8';
}

export type ItemResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Item'] = ResolversParentTypes['Item'],
> = {
  createdAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  tokenID?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tokenURI?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MetadataUpdateRecordResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['MetadataUpdateRecord'] = ResolversParentTypes['MetadataUpdateRecord'],
> = {
  actor?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  tokenID?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
  _meta?: Resolver<
    Maybe<ResolversTypes['_Meta_']>,
    ParentType,
    ContextType,
    Partial<Query_MetaArgs>
  >;
  item?: Resolver<
    Maybe<ResolversTypes['Item']>,
    ParentType,
    ContextType,
    RequireFields<QueryItemArgs, 'id' | 'subgraphError'>
  >;
  items?: Resolver<
    Array<ResolversTypes['Item']>,
    ParentType,
    ContextType,
    RequireFields<QueryItemsArgs, 'first' | 'skip' | 'subgraphError'>
  >;
  metadataUpdateRecord?: Resolver<
    Maybe<ResolversTypes['MetadataUpdateRecord']>,
    ParentType,
    ContextType,
    RequireFields<QueryMetadataUpdateRecordArgs, 'id' | 'subgraphError'>
  >;
  metadataUpdateRecords?: Resolver<
    Array<ResolversTypes['MetadataUpdateRecord']>,
    ParentType,
    ContextType,
    RequireFields<
      QueryMetadataUpdateRecordsArgs,
      'first' | 'skip' | 'subgraphError'
    >
  >;
  transferHistories?: Resolver<
    Array<ResolversTypes['TransferHistory']>,
    ParentType,
    ContextType,
    RequireFields<
      QueryTransferHistoriesArgs,
      'first' | 'skip' | 'subgraphError'
    >
  >;
  transferHistory?: Resolver<
    Maybe<ResolversTypes['TransferHistory']>,
    ParentType,
    ContextType,
    RequireFields<QueryTransferHistoryArgs, 'id' | 'subgraphError'>
  >;
  user?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<QueryUserArgs, 'id' | 'subgraphError'>
  >;
  users?: Resolver<
    Array<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<QueryUsersArgs, 'first' | 'skip' | 'subgraphError'>
  >;
};

export type SubscriptionResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription'],
> = {
  _meta?: SubscriptionResolver<
    Maybe<ResolversTypes['_Meta_']>,
    '_meta',
    ParentType,
    ContextType,
    Partial<Subscription_MetaArgs>
  >;
  item?: SubscriptionResolver<
    Maybe<ResolversTypes['Item']>,
    'item',
    ParentType,
    ContextType,
    RequireFields<SubscriptionItemArgs, 'id' | 'subgraphError'>
  >;
  items?: SubscriptionResolver<
    Array<ResolversTypes['Item']>,
    'items',
    ParentType,
    ContextType,
    RequireFields<SubscriptionItemsArgs, 'first' | 'skip' | 'subgraphError'>
  >;
  metadataUpdateRecord?: SubscriptionResolver<
    Maybe<ResolversTypes['MetadataUpdateRecord']>,
    'metadataUpdateRecord',
    ParentType,
    ContextType,
    RequireFields<SubscriptionMetadataUpdateRecordArgs, 'id' | 'subgraphError'>
  >;
  metadataUpdateRecords?: SubscriptionResolver<
    Array<ResolversTypes['MetadataUpdateRecord']>,
    'metadataUpdateRecords',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionMetadataUpdateRecordsArgs,
      'first' | 'skip' | 'subgraphError'
    >
  >;
  transferHistories?: SubscriptionResolver<
    Array<ResolversTypes['TransferHistory']>,
    'transferHistories',
    ParentType,
    ContextType,
    RequireFields<
      SubscriptionTransferHistoriesArgs,
      'first' | 'skip' | 'subgraphError'
    >
  >;
  transferHistory?: SubscriptionResolver<
    Maybe<ResolversTypes['TransferHistory']>,
    'transferHistory',
    ParentType,
    ContextType,
    RequireFields<SubscriptionTransferHistoryArgs, 'id' | 'subgraphError'>
  >;
  user?: SubscriptionResolver<
    Maybe<ResolversTypes['User']>,
    'user',
    ParentType,
    ContextType,
    RequireFields<SubscriptionUserArgs, 'id' | 'subgraphError'>
  >;
  users?: SubscriptionResolver<
    Array<ResolversTypes['User']>,
    'users',
    ParentType,
    ContextType,
    RequireFields<SubscriptionUsersArgs, 'first' | 'skip' | 'subgraphError'>
  >;
};

export type TransferHistoryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['TransferHistory'] = ResolversParentTypes['TransferHistory'],
> = {
  from?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  tokenID?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transferAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['User'] = ResolversParentTypes['User'],
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  items?: Resolver<
    Array<ResolversTypes['Item']>,
    ParentType,
    ContextType,
    RequireFields<UserItemsArgs, 'first' | 'skip'>
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _Block_Resolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_'],
> = {
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _Meta_Resolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_'],
> = {
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<
    ResolversTypes['Boolean'],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Bytes?: GraphQLScalarType;
  Int8?: GraphQLScalarType;
  Item?: ItemResolvers<ContextType>;
  MetadataUpdateRecord?: MetadataUpdateRecordResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  TransferHistory?: TransferHistoryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  derivedFrom?: DerivedFromDirectiveResolver<any, any, ContextType>;
  entity?: EntityDirectiveResolver<any, any, ContextType>;
  subgraphId?: SubgraphIdDirectiveResolver<any, any, ContextType>;
};

export const GetBalances721Document = gql`
  query getBalances721($tokenId: BigInt!) {
    items(where: { tokenID: $tokenId }) {
      tokenURI
      tokenID
      id
      owner {
        id
      }
    }
  }
`;
export const GetItems721Document = gql`
  query getItems721(
    $first: Int = 1000
    $skip: Int = 0
    $createdAt: BigInt = 0
  ) {
    items(
      first: $first
      skip: $skip
      orderBy: createdAt
      where: { createdAt_gte: $createdAt }
    ) {
      tokenURI
      tokenID
      id
      createdAt
    }
  }
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string,
  variables?: any,
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType,
  _variables,
) => action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper,
) {
  return {
    getBalances721(
      variables: GetBalances721QueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetBalances721Query> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetBalances721Query>(
            GetBalances721Document,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'getBalances721',
        'query',
        variables,
      );
    },
    getItems721(
      variables?: GetItems721QueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetItems721Query> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetItems721Query>(GetItems721Document, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'getItems721',
        'query',
        variables,
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
export type GetBalances721QueryVariables = Exact<{
  tokenId: Scalars['BigInt']['input'];
}>;

export type GetBalances721Query = {
  __typename?: 'Query';
  items: Array<{
    __typename?: 'Item';
    tokenURI: string;
    tokenID: any;
    id: string;
    owner: { __typename?: 'User'; id: string };
  }>;
};

export type GetItems721QueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['BigInt']['input']>;
}>;

export type GetItems721Query = {
  __typename?: 'Query';
  items: Array<{
    __typename?: 'Item';
    tokenURI: string;
    tokenID: any;
    id: string;
    createdAt: any;
  }>;
};
