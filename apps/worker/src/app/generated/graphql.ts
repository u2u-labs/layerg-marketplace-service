import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: any; output: any; }
  BigInt: { input: any; output: any; }
  Bytes: { input: any; output: any; }
  /**
   * 8 bytes signed integer
   *
   */
  Int8: { input: any; output: any; }
};

export type Account = {
  __typename?: 'Account';
  ERC721tokens: Array<Erc721Token>;
  ERC721transferFromEvent: Array<Erc721Transfer>;
  ERC721transferToEvent: Array<Erc721Transfer>;
  ERC1155balances: Array<Erc1155Balance>;
  ERC1155transferFromEvent: Array<Erc1155Transfer>;
  ERC1155transferToEvent: Array<Erc1155Transfer>;
  OnSaleStatus1155?: Maybe<Array<OnSaleStatus1155>>;
  OwnedTokens?: Maybe<Array<OwnedTokenCount>>;
  asERC721?: Maybe<Erc721Contract>;
  asERC1155?: Maybe<Erc1155Contract>;
  events: Array<Event>;
  holdingCount: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  onSaleCount: Scalars['BigInt']['output'];
};


export type AccountErc721tokensArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc721Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Erc721Token_Filter>;
};


export type AccountErc721transferFromEventArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc721Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Erc721Transfer_Filter>;
};


export type AccountErc721transferToEventArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc721Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Erc721Transfer_Filter>;
};


export type AccountErc1155balancesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc1155Balance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Erc1155Balance_Filter>;
};


export type AccountErc1155transferFromEventArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc1155Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Erc1155Transfer_Filter>;
};


export type AccountErc1155transferToEventArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc1155Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Erc1155Transfer_Filter>;
};


export type AccountOnSaleStatus1155Args = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OnSaleStatus1155_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OnSaleStatus1155_Filter>;
};


export type AccountOwnedTokensArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OwnedTokenCount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OwnedTokenCount_Filter>;
};


export type AccountEventsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Event_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Event_Filter>;
};

export type AccountCollectionOwnership = {
  __typename?: 'AccountCollectionOwnership';
  account: Account;
  contract: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  ownsTokens: Scalars['Boolean']['output'];
};

export type AccountCollectionOwnership_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']['input']>;
  account_?: InputMaybe<Account_Filter>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_not?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  and?: InputMaybe<Array<InputMaybe<AccountCollectionOwnership_Filter>>>;
  contract?: InputMaybe<Scalars['String']['input']>;
  contract_contains?: InputMaybe<Scalars['String']['input']>;
  contract_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_ends_with?: InputMaybe<Scalars['String']['input']>;
  contract_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_gt?: InputMaybe<Scalars['String']['input']>;
  contract_gte?: InputMaybe<Scalars['String']['input']>;
  contract_in?: InputMaybe<Array<Scalars['String']['input']>>;
  contract_lt?: InputMaybe<Scalars['String']['input']>;
  contract_lte?: InputMaybe<Scalars['String']['input']>;
  contract_not?: InputMaybe<Scalars['String']['input']>;
  contract_not_contains?: InputMaybe<Scalars['String']['input']>;
  contract_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  contract_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  contract_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  contract_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_starts_with?: InputMaybe<Scalars['String']['input']>;
  contract_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<AccountCollectionOwnership_Filter>>>;
  ownsTokens?: InputMaybe<Scalars['Boolean']['input']>;
  ownsTokens_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  ownsTokens_not?: InputMaybe<Scalars['Boolean']['input']>;
  ownsTokens_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

export enum AccountCollectionOwnership_OrderBy {
  Account = 'account',
  AccountHoldingCount = 'account__holdingCount',
  AccountId = 'account__id',
  AccountOnSaleCount = 'account__onSaleCount',
  Contract = 'contract',
  Id = 'id',
  OwnsTokens = 'ownsTokens'
}

export type Account_Filter = {
  ERC721tokens_?: InputMaybe<Erc721Token_Filter>;
  ERC721transferFromEvent_?: InputMaybe<Erc721Transfer_Filter>;
  ERC721transferToEvent_?: InputMaybe<Erc721Transfer_Filter>;
  ERC1155balances_?: InputMaybe<Erc1155Balance_Filter>;
  ERC1155transferFromEvent_?: InputMaybe<Erc1155Transfer_Filter>;
  ERC1155transferToEvent_?: InputMaybe<Erc1155Transfer_Filter>;
  OnSaleStatus1155_?: InputMaybe<OnSaleStatus1155_Filter>;
  OwnedTokens_?: InputMaybe<OwnedTokenCount_Filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Account_Filter>>>;
  asERC721?: InputMaybe<Scalars['String']['input']>;
  asERC721_?: InputMaybe<Erc721Contract_Filter>;
  asERC721_contains?: InputMaybe<Scalars['String']['input']>;
  asERC721_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asERC721_ends_with?: InputMaybe<Scalars['String']['input']>;
  asERC721_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asERC721_gt?: InputMaybe<Scalars['String']['input']>;
  asERC721_gte?: InputMaybe<Scalars['String']['input']>;
  asERC721_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asERC721_lt?: InputMaybe<Scalars['String']['input']>;
  asERC721_lte?: InputMaybe<Scalars['String']['input']>;
  asERC721_not?: InputMaybe<Scalars['String']['input']>;
  asERC721_not_contains?: InputMaybe<Scalars['String']['input']>;
  asERC721_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asERC721_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  asERC721_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asERC721_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asERC721_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  asERC721_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asERC721_starts_with?: InputMaybe<Scalars['String']['input']>;
  asERC721_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asERC1155?: InputMaybe<Scalars['String']['input']>;
  asERC1155_?: InputMaybe<Erc1155Contract_Filter>;
  asERC1155_contains?: InputMaybe<Scalars['String']['input']>;
  asERC1155_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asERC1155_ends_with?: InputMaybe<Scalars['String']['input']>;
  asERC1155_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asERC1155_gt?: InputMaybe<Scalars['String']['input']>;
  asERC1155_gte?: InputMaybe<Scalars['String']['input']>;
  asERC1155_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asERC1155_lt?: InputMaybe<Scalars['String']['input']>;
  asERC1155_lte?: InputMaybe<Scalars['String']['input']>;
  asERC1155_not?: InputMaybe<Scalars['String']['input']>;
  asERC1155_not_contains?: InputMaybe<Scalars['String']['input']>;
  asERC1155_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asERC1155_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  asERC1155_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asERC1155_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asERC1155_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  asERC1155_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asERC1155_starts_with?: InputMaybe<Scalars['String']['input']>;
  asERC1155_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  events_?: InputMaybe<Event_Filter>;
  holdingCount?: InputMaybe<Scalars['BigInt']['input']>;
  holdingCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  holdingCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  holdingCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  holdingCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  holdingCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  holdingCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  holdingCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  onSaleCount?: InputMaybe<Scalars['BigInt']['input']>;
  onSaleCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  onSaleCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  onSaleCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  onSaleCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  onSaleCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  onSaleCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  onSaleCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Account_Filter>>>;
};

export enum Account_OrderBy {
  Erc721tokens = 'ERC721tokens',
  Erc721transferFromEvent = 'ERC721transferFromEvent',
  Erc721transferToEvent = 'ERC721transferToEvent',
  Erc1155balances = 'ERC1155balances',
  Erc1155transferFromEvent = 'ERC1155transferFromEvent',
  Erc1155transferToEvent = 'ERC1155transferToEvent',
  OnSaleStatus1155 = 'OnSaleStatus1155',
  OwnedTokens = 'OwnedTokens',
  AsErc721 = 'asERC721',
  AsErc721Count = 'asERC721__count',
  AsErc721CreateAt = 'asERC721__createAt',
  AsErc721HolderCount = 'asERC721__holderCount',
  AsErc721Id = 'asERC721__id',
  AsErc721Name = 'asERC721__name',
  AsErc721SupportsMetadata = 'asERC721__supportsMetadata',
  AsErc721Symbol = 'asERC721__symbol',
  AsErc721TransactionCount = 'asERC721__transactionCount',
  AsErc721TxCreation = 'asERC721__txCreation',
  AsErc721Volume = 'asERC721__volume',
  AsErc1155 = 'asERC1155',
  AsErc1155Count = 'asERC1155__count',
  AsErc1155CreateAt = 'asERC1155__createAt',
  AsErc1155HolderCount = 'asERC1155__holderCount',
  AsErc1155Id = 'asERC1155__id',
  AsErc1155Name = 'asERC1155__name',
  AsErc1155Symbol = 'asERC1155__symbol',
  AsErc1155TransactionCount = 'asERC1155__transactionCount',
  AsErc1155TxCreation = 'asERC1155__txCreation',
  AsErc1155Volume = 'asERC1155__volume',
  Events = 'events',
  HoldingCount = 'holdingCount',
  Id = 'id',
  OnSaleCount = 'onSaleCount'
}

export enum ActionState {
  Executed = 'EXECUTED',
  Pending = 'PENDING'
}

export type Block = {
  __typename?: 'Block';
  address: Scalars['String']['output'];
  blockNumber: Scalars['Int']['output'];
  event: EventType;
  from?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  price?: Maybe<Scalars['BigInt']['output']>;
  quantity?: Maybe<Scalars['BigInt']['output']>;
  quoteToken?: Maybe<Scalars['String']['output']>;
  timestampt: Scalars['Int']['output'];
  to?: Maybe<Scalars['String']['output']>;
  tokenId: Scalars['BigInt']['output'];
};

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['String']['input']>;
  address_contains?: InputMaybe<Scalars['String']['input']>;
  address_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  address_ends_with?: InputMaybe<Scalars['String']['input']>;
  address_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_gt?: InputMaybe<Scalars['String']['input']>;
  address_gte?: InputMaybe<Scalars['String']['input']>;
  address_in?: InputMaybe<Array<Scalars['String']['input']>>;
  address_lt?: InputMaybe<Scalars['String']['input']>;
  address_lte?: InputMaybe<Scalars['String']['input']>;
  address_not?: InputMaybe<Scalars['String']['input']>;
  address_not_contains?: InputMaybe<Scalars['String']['input']>;
  address_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  address_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  address_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  address_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  address_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_starts_with?: InputMaybe<Scalars['String']['input']>;
  address_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  and?: InputMaybe<Array<InputMaybe<Block_Filter>>>;
  blockNumber?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not?: InputMaybe<Scalars['Int']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  event?: InputMaybe<EventType>;
  event_in?: InputMaybe<Array<EventType>>;
  event_not?: InputMaybe<EventType>;
  event_not_in?: InputMaybe<Array<EventType>>;
  from?: InputMaybe<Scalars['String']['input']>;
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
  or?: InputMaybe<Array<InputMaybe<Block_Filter>>>;
  price?: InputMaybe<Scalars['BigInt']['input']>;
  price_gt?: InputMaybe<Scalars['BigInt']['input']>;
  price_gte?: InputMaybe<Scalars['BigInt']['input']>;
  price_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  price_lt?: InputMaybe<Scalars['BigInt']['input']>;
  price_lte?: InputMaybe<Scalars['BigInt']['input']>;
  price_not?: InputMaybe<Scalars['BigInt']['input']>;
  price_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  quantity?: InputMaybe<Scalars['BigInt']['input']>;
  quantity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  quantity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  quantity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  quantity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  quantity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  quantity_not?: InputMaybe<Scalars['BigInt']['input']>;
  quantity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  quoteToken?: InputMaybe<Scalars['String']['input']>;
  quoteToken_contains?: InputMaybe<Scalars['String']['input']>;
  quoteToken_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  quoteToken_ends_with?: InputMaybe<Scalars['String']['input']>;
  quoteToken_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  quoteToken_gt?: InputMaybe<Scalars['String']['input']>;
  quoteToken_gte?: InputMaybe<Scalars['String']['input']>;
  quoteToken_in?: InputMaybe<Array<Scalars['String']['input']>>;
  quoteToken_lt?: InputMaybe<Scalars['String']['input']>;
  quoteToken_lte?: InputMaybe<Scalars['String']['input']>;
  quoteToken_not?: InputMaybe<Scalars['String']['input']>;
  quoteToken_not_contains?: InputMaybe<Scalars['String']['input']>;
  quoteToken_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  quoteToken_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  quoteToken_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  quoteToken_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  quoteToken_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  quoteToken_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  quoteToken_starts_with?: InputMaybe<Scalars['String']['input']>;
  quoteToken_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestampt?: InputMaybe<Scalars['Int']['input']>;
  timestampt_gt?: InputMaybe<Scalars['Int']['input']>;
  timestampt_gte?: InputMaybe<Scalars['Int']['input']>;
  timestampt_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestampt_lt?: InputMaybe<Scalars['Int']['input']>;
  timestampt_lte?: InputMaybe<Scalars['Int']['input']>;
  timestampt_not?: InputMaybe<Scalars['Int']['input']>;
  timestampt_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  to?: InputMaybe<Scalars['String']['input']>;
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
  tokenId?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export enum Block_OrderBy {
  Address = 'address',
  BlockNumber = 'blockNumber',
  Event = 'event',
  From = 'from',
  Id = 'id',
  Price = 'price',
  Quantity = 'quantity',
  QuoteToken = 'quoteToken',
  Timestampt = 'timestampt',
  To = 'to',
  TokenId = 'tokenId'
}

export type Bundle = {
  __typename?: 'Bundle';
  ethPriceUSD: Scalars['BigDecimal']['output'];
  id: Scalars['ID']['output'];
};

export type Bundle_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Bundle_Filter>>>;
  ethPriceUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  ethPriceUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  ethPriceUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  ethPriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  ethPriceUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  ethPriceUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  ethPriceUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  ethPriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Bundle_Filter>>>;
};

export enum Bundle_OrderBy {
  EthPriceUsd = 'ethPriceUSD',
  Id = 'id'
}

export type Burn = {
  __typename?: 'Burn';
  amount: Scalars['BigInt']['output'];
  amount0: Scalars['BigDecimal']['output'];
  amount1: Scalars['BigDecimal']['output'];
  amountUSD?: Maybe<Scalars['BigDecimal']['output']>;
  id: Scalars['ID']['output'];
  logIndex?: Maybe<Scalars['BigInt']['output']>;
  origin: Scalars['Bytes']['output'];
  owner?: Maybe<Scalars['Bytes']['output']>;
  pool: Pool;
  tickLower: Scalars['BigInt']['output'];
  tickUpper: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  token0: Token;
  token1: Token;
  transaction: Transaction;
};

export type Burn_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount0?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount1?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amountUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amountUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Burn_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Burn_Filter>>>;
  origin?: InputMaybe<Scalars['Bytes']['input']>;
  origin_contains?: InputMaybe<Scalars['Bytes']['input']>;
  origin_gt?: InputMaybe<Scalars['Bytes']['input']>;
  origin_gte?: InputMaybe<Scalars['Bytes']['input']>;
  origin_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  origin_lt?: InputMaybe<Scalars['Bytes']['input']>;
  origin_lte?: InputMaybe<Scalars['Bytes']['input']>;
  origin_not?: InputMaybe<Scalars['Bytes']['input']>;
  origin_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  origin_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  owner?: InputMaybe<Scalars['Bytes']['input']>;
  owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tickLower?: InputMaybe<Scalars['BigInt']['input']>;
  tickLower_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tickLower_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tickLower_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tickLower_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tickLower_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tickLower_not?: InputMaybe<Scalars['BigInt']['input']>;
  tickLower_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tickUpper?: InputMaybe<Scalars['BigInt']['input']>;
  tickUpper_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tickUpper_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tickUpper_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tickUpper_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tickUpper_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tickUpper_not?: InputMaybe<Scalars['BigInt']['input']>;
  tickUpper_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token0?: InputMaybe<Scalars['String']['input']>;
  token0_?: InputMaybe<Token_Filter>;
  token0_contains?: InputMaybe<Scalars['String']['input']>;
  token0_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token0_ends_with?: InputMaybe<Scalars['String']['input']>;
  token0_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token0_gt?: InputMaybe<Scalars['String']['input']>;
  token0_gte?: InputMaybe<Scalars['String']['input']>;
  token0_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token0_lt?: InputMaybe<Scalars['String']['input']>;
  token0_lte?: InputMaybe<Scalars['String']['input']>;
  token0_not?: InputMaybe<Scalars['String']['input']>;
  token0_not_contains?: InputMaybe<Scalars['String']['input']>;
  token0_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token0_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token0_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token0_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token0_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token0_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token0_starts_with?: InputMaybe<Scalars['String']['input']>;
  token0_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token1?: InputMaybe<Scalars['String']['input']>;
  token1_?: InputMaybe<Token_Filter>;
  token1_contains?: InputMaybe<Scalars['String']['input']>;
  token1_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token1_ends_with?: InputMaybe<Scalars['String']['input']>;
  token1_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token1_gt?: InputMaybe<Scalars['String']['input']>;
  token1_gte?: InputMaybe<Scalars['String']['input']>;
  token1_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token1_lt?: InputMaybe<Scalars['String']['input']>;
  token1_lte?: InputMaybe<Scalars['String']['input']>;
  token1_not?: InputMaybe<Scalars['String']['input']>;
  token1_not_contains?: InputMaybe<Scalars['String']['input']>;
  token1_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token1_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token1_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token1_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token1_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token1_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token1_starts_with?: InputMaybe<Scalars['String']['input']>;
  token1_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum Burn_OrderBy {
  Amount = 'amount',
  Amount0 = 'amount0',
  Amount1 = 'amount1',
  AmountUsd = 'amountUSD',
  Id = 'id',
  LogIndex = 'logIndex',
  Origin = 'origin',
  Owner = 'owner',
  Pool = 'pool',
  PoolCollectedFeesToken0 = 'pool__collectedFeesToken0',
  PoolCollectedFeesToken1 = 'pool__collectedFeesToken1',
  PoolCollectedFeesUsd = 'pool__collectedFeesUSD',
  PoolCreatedAtBlockNumber = 'pool__createdAtBlockNumber',
  PoolCreatedAtTimestamp = 'pool__createdAtTimestamp',
  PoolFeeGrowthGlobal0X128 = 'pool__feeGrowthGlobal0X128',
  PoolFeeGrowthGlobal1X128 = 'pool__feeGrowthGlobal1X128',
  PoolFeeProtocol = 'pool__feeProtocol',
  PoolFeeTier = 'pool__feeTier',
  PoolFeesUsd = 'pool__feesUSD',
  PoolId = 'pool__id',
  PoolLiquidity = 'pool__liquidity',
  PoolLiquidityProviderCount = 'pool__liquidityProviderCount',
  PoolObservationIndex = 'pool__observationIndex',
  PoolProtocolFeesUsd = 'pool__protocolFeesUSD',
  PoolSqrtPrice = 'pool__sqrtPrice',
  PoolTick = 'pool__tick',
  PoolToken0Price = 'pool__token0Price',
  PoolToken1Price = 'pool__token1Price',
  PoolTotalValueLockedEth = 'pool__totalValueLockedETH',
  PoolTotalValueLockedEthUntracked = 'pool__totalValueLockedETHUntracked',
  PoolTotalValueLockedToken0 = 'pool__totalValueLockedToken0',
  PoolTotalValueLockedToken1 = 'pool__totalValueLockedToken1',
  PoolTotalValueLockedUsd = 'pool__totalValueLockedUSD',
  PoolTotalValueLockedUsdUntracked = 'pool__totalValueLockedUSDUntracked',
  PoolTxCount = 'pool__txCount',
  PoolUntrackedVolumeUsd = 'pool__untrackedVolumeUSD',
  PoolVolumeToken0 = 'pool__volumeToken0',
  PoolVolumeToken1 = 'pool__volumeToken1',
  PoolVolumeUsd = 'pool__volumeUSD',
  TickLower = 'tickLower',
  TickUpper = 'tickUpper',
  Timestamp = 'timestamp',
  Token0 = 'token0',
  Token0Decimals = 'token0__decimals',
  Token0DerivedEth = 'token0__derivedETH',
  Token0DerivedUsd = 'token0__derivedUSD',
  Token0FeesUsd = 'token0__feesUSD',
  Token0Id = 'token0__id',
  Token0Name = 'token0__name',
  Token0PoolCount = 'token0__poolCount',
  Token0ProtocolFeesUsd = 'token0__protocolFeesUSD',
  Token0Symbol = 'token0__symbol',
  Token0TotalSupply = 'token0__totalSupply',
  Token0TotalValueLocked = 'token0__totalValueLocked',
  Token0TotalValueLockedUsd = 'token0__totalValueLockedUSD',
  Token0TotalValueLockedUsdUntracked = 'token0__totalValueLockedUSDUntracked',
  Token0TxCount = 'token0__txCount',
  Token0UntrackedVolumeUsd = 'token0__untrackedVolumeUSD',
  Token0Volume = 'token0__volume',
  Token0VolumeUsd = 'token0__volumeUSD',
  Token1 = 'token1',
  Token1Decimals = 'token1__decimals',
  Token1DerivedEth = 'token1__derivedETH',
  Token1DerivedUsd = 'token1__derivedUSD',
  Token1FeesUsd = 'token1__feesUSD',
  Token1Id = 'token1__id',
  Token1Name = 'token1__name',
  Token1PoolCount = 'token1__poolCount',
  Token1ProtocolFeesUsd = 'token1__protocolFeesUSD',
  Token1Symbol = 'token1__symbol',
  Token1TotalSupply = 'token1__totalSupply',
  Token1TotalValueLocked = 'token1__totalValueLocked',
  Token1TotalValueLockedUsd = 'token1__totalValueLockedUSD',
  Token1TotalValueLockedUsdUntracked = 'token1__totalValueLockedUSDUntracked',
  Token1TxCount = 'token1__txCount',
  Token1UntrackedVolumeUsd = 'token1__untrackedVolumeUSD',
  Token1Volume = 'token1__volume',
  Token1VolumeUsd = 'token1__volumeUSD',
  Transaction = 'transaction',
  TransactionBlockNumber = 'transaction__blockNumber',
  TransactionGasPrice = 'transaction__gasPrice',
  TransactionGasUsed = 'transaction__gasUsed',
  TransactionId = 'transaction__id',
  TransactionTimestamp = 'transaction__timestamp'
}

export type Collect = {
  __typename?: 'Collect';
  amount0: Scalars['BigDecimal']['output'];
  amount1: Scalars['BigDecimal']['output'];
  amountUSD?: Maybe<Scalars['BigDecimal']['output']>;
  id: Scalars['ID']['output'];
  logIndex?: Maybe<Scalars['BigInt']['output']>;
  owner?: Maybe<Scalars['Bytes']['output']>;
  pool: Pool;
  tickLower: Scalars['BigInt']['output'];
  tickUpper: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  transaction: Transaction;
};

export type Collect_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount0?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount1?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amountUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amountUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Collect_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Collect_Filter>>>;
  owner?: InputMaybe<Scalars['Bytes']['input']>;
  owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tickLower?: InputMaybe<Scalars['BigInt']['input']>;
  tickLower_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tickLower_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tickLower_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tickLower_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tickLower_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tickLower_not?: InputMaybe<Scalars['BigInt']['input']>;
  tickLower_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tickUpper?: InputMaybe<Scalars['BigInt']['input']>;
  tickUpper_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tickUpper_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tickUpper_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tickUpper_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tickUpper_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tickUpper_not?: InputMaybe<Scalars['BigInt']['input']>;
  tickUpper_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum Collect_OrderBy {
  Amount0 = 'amount0',
  Amount1 = 'amount1',
  AmountUsd = 'amountUSD',
  Id = 'id',
  LogIndex = 'logIndex',
  Owner = 'owner',
  Pool = 'pool',
  PoolCollectedFeesToken0 = 'pool__collectedFeesToken0',
  PoolCollectedFeesToken1 = 'pool__collectedFeesToken1',
  PoolCollectedFeesUsd = 'pool__collectedFeesUSD',
  PoolCreatedAtBlockNumber = 'pool__createdAtBlockNumber',
  PoolCreatedAtTimestamp = 'pool__createdAtTimestamp',
  PoolFeeGrowthGlobal0X128 = 'pool__feeGrowthGlobal0X128',
  PoolFeeGrowthGlobal1X128 = 'pool__feeGrowthGlobal1X128',
  PoolFeeProtocol = 'pool__feeProtocol',
  PoolFeeTier = 'pool__feeTier',
  PoolFeesUsd = 'pool__feesUSD',
  PoolId = 'pool__id',
  PoolLiquidity = 'pool__liquidity',
  PoolLiquidityProviderCount = 'pool__liquidityProviderCount',
  PoolObservationIndex = 'pool__observationIndex',
  PoolProtocolFeesUsd = 'pool__protocolFeesUSD',
  PoolSqrtPrice = 'pool__sqrtPrice',
  PoolTick = 'pool__tick',
  PoolToken0Price = 'pool__token0Price',
  PoolToken1Price = 'pool__token1Price',
  PoolTotalValueLockedEth = 'pool__totalValueLockedETH',
  PoolTotalValueLockedEthUntracked = 'pool__totalValueLockedETHUntracked',
  PoolTotalValueLockedToken0 = 'pool__totalValueLockedToken0',
  PoolTotalValueLockedToken1 = 'pool__totalValueLockedToken1',
  PoolTotalValueLockedUsd = 'pool__totalValueLockedUSD',
  PoolTotalValueLockedUsdUntracked = 'pool__totalValueLockedUSDUntracked',
  PoolTxCount = 'pool__txCount',
  PoolUntrackedVolumeUsd = 'pool__untrackedVolumeUSD',
  PoolVolumeToken0 = 'pool__volumeToken0',
  PoolVolumeToken1 = 'pool__volumeToken1',
  PoolVolumeUsd = 'pool__volumeUSD',
  TickLower = 'tickLower',
  TickUpper = 'tickUpper',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  TransactionBlockNumber = 'transaction__blockNumber',
  TransactionGasPrice = 'transaction__gasPrice',
  TransactionGasUsed = 'transaction__gasUsed',
  TransactionId = 'transaction__id',
  TransactionTimestamp = 'transaction__timestamp'
}

export type Contract = {
  __typename?: 'Contract';
  contract: Scalars['String']['output'];
  count: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
};

export enum ContractType {
  Erc721Factory = 'ERC721Factory',
  Erc721Proxy = 'ERC721Proxy',
  Erc1155Factory = 'ERC1155Factory',
  Erc1155Proxy = 'ERC1155Proxy',
  ExchangeV2 = 'ExchangeV2',
  NftTransferProxies = 'NFTTransferProxies',
  Royalties = 'Royalties'
}

export type Contract_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Contract_Filter>>>;
  contract?: InputMaybe<Scalars['String']['input']>;
  contract_contains?: InputMaybe<Scalars['String']['input']>;
  contract_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_ends_with?: InputMaybe<Scalars['String']['input']>;
  contract_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_gt?: InputMaybe<Scalars['String']['input']>;
  contract_gte?: InputMaybe<Scalars['String']['input']>;
  contract_in?: InputMaybe<Array<Scalars['String']['input']>>;
  contract_lt?: InputMaybe<Scalars['String']['input']>;
  contract_lte?: InputMaybe<Scalars['String']['input']>;
  contract_not?: InputMaybe<Scalars['String']['input']>;
  contract_not_contains?: InputMaybe<Scalars['String']['input']>;
  contract_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  contract_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  contract_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  contract_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_starts_with?: InputMaybe<Scalars['String']['input']>;
  contract_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  count?: InputMaybe<Scalars['BigInt']['input']>;
  count_gt?: InputMaybe<Scalars['BigInt']['input']>;
  count_gte?: InputMaybe<Scalars['BigInt']['input']>;
  count_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  count_lt?: InputMaybe<Scalars['BigInt']['input']>;
  count_lte?: InputMaybe<Scalars['BigInt']['input']>;
  count_not?: InputMaybe<Scalars['BigInt']['input']>;
  count_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Contract_Filter>>>;
};

export enum Contract_OrderBy {
  Contract = 'contract',
  Count = 'count',
  Id = 'id'
}

export type Creator = {
  __typename?: 'Creator';
  id: Scalars['ID']['output'];
  token721?: Maybe<Array<Erc721Creator>>;
  token1155?: Maybe<Array<Erc1155Creator>>;
};


export type CreatorToken721Args = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc721Creator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Erc721Creator_Filter>;
};


export type CreatorToken1155Args = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc1155Creator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Erc1155Creator_Filter>;
};

export type Creator_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Creator_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Creator_Filter>>>;
  token721_?: InputMaybe<Erc721Creator_Filter>;
  token1155_?: InputMaybe<Erc1155Creator_Filter>;
};

export enum Creator_OrderBy {
  Id = 'id',
  Token721 = 'token721',
  Token1155 = 'token1155'
}

export enum DealType {
  Bid = 'Bid',
  Order = 'Order'
}

export type Delegation = {
  __typename?: 'Delegation';
  delegator: Delegator;
  id: Scalars['ID']['output'];
  lockedUp: LockedUp;
  stakedAmount: Scalars['BigInt']['output'];
  totalClaimedRewards: Scalars['BigInt']['output'];
  validatorId: Scalars['BigInt']['output'];
  wr: WithdrawalRequest;
};

export type Delegation_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Delegation_Filter>>>;
  delegator?: InputMaybe<Scalars['String']['input']>;
  delegator_?: InputMaybe<Delegator_Filter>;
  delegator_contains?: InputMaybe<Scalars['String']['input']>;
  delegator_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegator_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_gt?: InputMaybe<Scalars['String']['input']>;
  delegator_gte?: InputMaybe<Scalars['String']['input']>;
  delegator_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegator_lt?: InputMaybe<Scalars['String']['input']>;
  delegator_lte?: InputMaybe<Scalars['String']['input']>;
  delegator_not?: InputMaybe<Scalars['String']['input']>;
  delegator_not_contains?: InputMaybe<Scalars['String']['input']>;
  delegator_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegator_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegator_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegator_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegator_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lockedUp?: InputMaybe<Scalars['String']['input']>;
  lockedUp_?: InputMaybe<LockedUp_Filter>;
  lockedUp_contains?: InputMaybe<Scalars['String']['input']>;
  lockedUp_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lockedUp_ends_with?: InputMaybe<Scalars['String']['input']>;
  lockedUp_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lockedUp_gt?: InputMaybe<Scalars['String']['input']>;
  lockedUp_gte?: InputMaybe<Scalars['String']['input']>;
  lockedUp_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lockedUp_lt?: InputMaybe<Scalars['String']['input']>;
  lockedUp_lte?: InputMaybe<Scalars['String']['input']>;
  lockedUp_not?: InputMaybe<Scalars['String']['input']>;
  lockedUp_not_contains?: InputMaybe<Scalars['String']['input']>;
  lockedUp_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  lockedUp_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  lockedUp_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lockedUp_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  lockedUp_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  lockedUp_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  lockedUp_starts_with?: InputMaybe<Scalars['String']['input']>;
  lockedUp_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<Delegation_Filter>>>;
  stakedAmount?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stakedAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalClaimedRewards?: InputMaybe<Scalars['BigInt']['input']>;
  totalClaimedRewards_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalClaimedRewards_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalClaimedRewards_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalClaimedRewards_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalClaimedRewards_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalClaimedRewards_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalClaimedRewards_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  validatorId?: InputMaybe<Scalars['BigInt']['input']>;
  validatorId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  validatorId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  validatorId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  validatorId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  validatorId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  validatorId_not?: InputMaybe<Scalars['BigInt']['input']>;
  validatorId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  wr?: InputMaybe<Scalars['String']['input']>;
  wr_?: InputMaybe<WithdrawalRequest_Filter>;
  wr_contains?: InputMaybe<Scalars['String']['input']>;
  wr_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  wr_ends_with?: InputMaybe<Scalars['String']['input']>;
  wr_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  wr_gt?: InputMaybe<Scalars['String']['input']>;
  wr_gte?: InputMaybe<Scalars['String']['input']>;
  wr_in?: InputMaybe<Array<Scalars['String']['input']>>;
  wr_lt?: InputMaybe<Scalars['String']['input']>;
  wr_lte?: InputMaybe<Scalars['String']['input']>;
  wr_not?: InputMaybe<Scalars['String']['input']>;
  wr_not_contains?: InputMaybe<Scalars['String']['input']>;
  wr_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  wr_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  wr_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  wr_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  wr_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  wr_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  wr_starts_with?: InputMaybe<Scalars['String']['input']>;
  wr_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum Delegation_OrderBy {
  Delegator = 'delegator',
  DelegatorAddress = 'delegator__address',
  DelegatorCreatedOn = 'delegator__createdOn',
  DelegatorId = 'delegator__id',
  DelegatorStakedAmount = 'delegator__stakedAmount',
  DelegatorTotalClaimedRewards = 'delegator__totalClaimedRewards',
  DelegatorTotalLockStake = 'delegator__totalLockStake',
  Id = 'id',
  LockedUp = 'lockedUp',
  LockedUpDuration = 'lockedUp__duration',
  LockedUpEndTime = 'lockedUp__endTime',
  LockedUpId = 'lockedUp__id',
  LockedUpLockedAmount = 'lockedUp__lockedAmount',
  LockedUpPenalty = 'lockedUp__penalty',
  LockedUpUnlockedAmount = 'lockedUp__unlockedAmount',
  StakedAmount = 'stakedAmount',
  TotalClaimedRewards = 'totalClaimedRewards',
  ValidatorId = 'validatorId',
  Wr = 'wr',
  WrDelegatorAddress = 'wr__delegatorAddress',
  WrHash = 'wr__hash',
  WrId = 'wr__id',
  WrTime = 'wr__time',
  WrUnbondingAmount = 'wr__unbondingAmount',
  WrValidatorId = 'wr__validatorId',
  WrWithdrawHash = 'wr__withdrawHash',
  WrWithdrawTime = 'wr__withdrawTime',
  WrWithdrawalAmount = 'wr__withdrawalAmount',
  WrWrId = 'wr__wrID'
}

export type Delegator = {
  __typename?: 'Delegator';
  address: Scalars['Bytes']['output'];
  createdOn: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  stakedAmount: Scalars['BigInt']['output'];
  totalClaimedRewards: Scalars['BigInt']['output'];
  totalLockStake: Scalars['BigInt']['output'];
  validations: Array<Validation>;
};


export type DelegatorValidationsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Validation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Validation_Filter>;
};

export type Delegator_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['Bytes']['input']>;
  address_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_gt?: InputMaybe<Scalars['Bytes']['input']>;
  address_gte?: InputMaybe<Scalars['Bytes']['input']>;
  address_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  address_lt?: InputMaybe<Scalars['Bytes']['input']>;
  address_lte?: InputMaybe<Scalars['Bytes']['input']>;
  address_not?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  address_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Delegator_Filter>>>;
  createdOn?: InputMaybe<Scalars['BigInt']['input']>;
  createdOn_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdOn_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdOn_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdOn_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdOn_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdOn_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdOn_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Delegator_Filter>>>;
  stakedAmount?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stakedAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalClaimedRewards?: InputMaybe<Scalars['BigInt']['input']>;
  totalClaimedRewards_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalClaimedRewards_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalClaimedRewards_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalClaimedRewards_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalClaimedRewards_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalClaimedRewards_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalClaimedRewards_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalLockStake?: InputMaybe<Scalars['BigInt']['input']>;
  totalLockStake_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalLockStake_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalLockStake_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalLockStake_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalLockStake_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalLockStake_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalLockStake_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  validations?: InputMaybe<Array<Scalars['String']['input']>>;
  validations_?: InputMaybe<Validation_Filter>;
  validations_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  validations_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  validations_not?: InputMaybe<Array<Scalars['String']['input']>>;
  validations_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  validations_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
};

export enum Delegator_OrderBy {
  Address = 'address',
  CreatedOn = 'createdOn',
  Id = 'id',
  StakedAmount = 'stakedAmount',
  TotalClaimedRewards = 'totalClaimedRewards',
  TotalLockStake = 'totalLockStake',
  Validations = 'validations'
}

export type Erc721Contract = {
  __typename?: 'ERC721Contract';
  asAccount: Account;
  count: Scalars['BigInt']['output'];
  createAt?: Maybe<Scalars['BigInt']['output']>;
  holderCount: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  supportsMetadata?: Maybe<Scalars['Boolean']['output']>;
  symbol?: Maybe<Scalars['String']['output']>;
  tokens: Array<Erc721Token>;
  transactionCount: Scalars['BigInt']['output'];
  transfers: Array<Erc721Transfer>;
  txCreation: Scalars['String']['output'];
  volume: Scalars['BigInt']['output'];
};


export type Erc721ContractTokensArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc721Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Erc721Token_Filter>;
};


export type Erc721ContractTransfersArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc721Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Erc721Transfer_Filter>;
};

export type Erc721Contract_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Erc721Contract_Filter>>>;
  asAccount?: InputMaybe<Scalars['String']['input']>;
  asAccount_?: InputMaybe<Account_Filter>;
  asAccount_contains?: InputMaybe<Scalars['String']['input']>;
  asAccount_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asAccount_ends_with?: InputMaybe<Scalars['String']['input']>;
  asAccount_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asAccount_gt?: InputMaybe<Scalars['String']['input']>;
  asAccount_gte?: InputMaybe<Scalars['String']['input']>;
  asAccount_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asAccount_lt?: InputMaybe<Scalars['String']['input']>;
  asAccount_lte?: InputMaybe<Scalars['String']['input']>;
  asAccount_not?: InputMaybe<Scalars['String']['input']>;
  asAccount_not_contains?: InputMaybe<Scalars['String']['input']>;
  asAccount_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asAccount_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  asAccount_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asAccount_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asAccount_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  asAccount_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asAccount_starts_with?: InputMaybe<Scalars['String']['input']>;
  asAccount_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  count?: InputMaybe<Scalars['BigInt']['input']>;
  count_gt?: InputMaybe<Scalars['BigInt']['input']>;
  count_gte?: InputMaybe<Scalars['BigInt']['input']>;
  count_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  count_lt?: InputMaybe<Scalars['BigInt']['input']>;
  count_lte?: InputMaybe<Scalars['BigInt']['input']>;
  count_not?: InputMaybe<Scalars['BigInt']['input']>;
  count_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createAt?: InputMaybe<Scalars['BigInt']['input']>;
  createAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  createAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  holderCount?: InputMaybe<Scalars['BigInt']['input']>;
  holderCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  holderCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  holderCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  holderCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  holderCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  holderCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  holderCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<Erc721Contract_Filter>>>;
  supportsMetadata?: InputMaybe<Scalars['Boolean']['input']>;
  supportsMetadata_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  supportsMetadata_not?: InputMaybe<Scalars['Boolean']['input']>;
  supportsMetadata_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  symbol_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_gt?: InputMaybe<Scalars['String']['input']>;
  symbol_gte?: InputMaybe<Scalars['String']['input']>;
  symbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_lt?: InputMaybe<Scalars['String']['input']>;
  symbol_lte?: InputMaybe<Scalars['String']['input']>;
  symbol_not?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokens_?: InputMaybe<Erc721Token_Filter>;
  transactionCount?: InputMaybe<Scalars['BigInt']['input']>;
  transactionCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  transactionCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  transactionCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  transactionCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  transactionCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  transactionCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transfers_?: InputMaybe<Erc721Transfer_Filter>;
  txCreation?: InputMaybe<Scalars['String']['input']>;
  txCreation_contains?: InputMaybe<Scalars['String']['input']>;
  txCreation_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  txCreation_ends_with?: InputMaybe<Scalars['String']['input']>;
  txCreation_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  txCreation_gt?: InputMaybe<Scalars['String']['input']>;
  txCreation_gte?: InputMaybe<Scalars['String']['input']>;
  txCreation_in?: InputMaybe<Array<Scalars['String']['input']>>;
  txCreation_lt?: InputMaybe<Scalars['String']['input']>;
  txCreation_lte?: InputMaybe<Scalars['String']['input']>;
  txCreation_not?: InputMaybe<Scalars['String']['input']>;
  txCreation_not_contains?: InputMaybe<Scalars['String']['input']>;
  txCreation_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  txCreation_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  txCreation_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  txCreation_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  txCreation_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  txCreation_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  txCreation_starts_with?: InputMaybe<Scalars['String']['input']>;
  txCreation_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  volume?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Erc721Contract_OrderBy {
  AsAccount = 'asAccount',
  AsAccountHoldingCount = 'asAccount__holdingCount',
  AsAccountId = 'asAccount__id',
  AsAccountOnSaleCount = 'asAccount__onSaleCount',
  Count = 'count',
  CreateAt = 'createAt',
  HolderCount = 'holderCount',
  Id = 'id',
  Name = 'name',
  SupportsMetadata = 'supportsMetadata',
  Symbol = 'symbol',
  Tokens = 'tokens',
  TransactionCount = 'transactionCount',
  Transfers = 'transfers',
  TxCreation = 'txCreation',
  Volume = 'volume'
}

export type Erc721Creator = {
  __typename?: 'ERC721Creator';
  collection: Erc721Token;
  creator: Creator;
  id: Scalars['ID']['output'];
  share: Scalars['BigInt']['output'];
};

export type Erc721Creator_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Erc721Creator_Filter>>>;
  collection?: InputMaybe<Scalars['String']['input']>;
  collection_?: InputMaybe<Erc721Token_Filter>;
  collection_contains?: InputMaybe<Scalars['String']['input']>;
  collection_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  collection_ends_with?: InputMaybe<Scalars['String']['input']>;
  collection_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collection_gt?: InputMaybe<Scalars['String']['input']>;
  collection_gte?: InputMaybe<Scalars['String']['input']>;
  collection_in?: InputMaybe<Array<Scalars['String']['input']>>;
  collection_lt?: InputMaybe<Scalars['String']['input']>;
  collection_lte?: InputMaybe<Scalars['String']['input']>;
  collection_not?: InputMaybe<Scalars['String']['input']>;
  collection_not_contains?: InputMaybe<Scalars['String']['input']>;
  collection_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  collection_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  collection_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collection_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  collection_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  collection_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collection_starts_with?: InputMaybe<Scalars['String']['input']>;
  collection_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  creator?: InputMaybe<Scalars['String']['input']>;
  creator_?: InputMaybe<Creator_Filter>;
  creator_contains?: InputMaybe<Scalars['String']['input']>;
  creator_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_ends_with?: InputMaybe<Scalars['String']['input']>;
  creator_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_gt?: InputMaybe<Scalars['String']['input']>;
  creator_gte?: InputMaybe<Scalars['String']['input']>;
  creator_in?: InputMaybe<Array<Scalars['String']['input']>>;
  creator_lt?: InputMaybe<Scalars['String']['input']>;
  creator_lte?: InputMaybe<Scalars['String']['input']>;
  creator_not?: InputMaybe<Scalars['String']['input']>;
  creator_not_contains?: InputMaybe<Scalars['String']['input']>;
  creator_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  creator_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  creator_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  creator_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_starts_with?: InputMaybe<Scalars['String']['input']>;
  creator_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Erc721Creator_Filter>>>;
  share?: InputMaybe<Scalars['BigInt']['input']>;
  share_gt?: InputMaybe<Scalars['BigInt']['input']>;
  share_gte?: InputMaybe<Scalars['BigInt']['input']>;
  share_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  share_lt?: InputMaybe<Scalars['BigInt']['input']>;
  share_lte?: InputMaybe<Scalars['BigInt']['input']>;
  share_not?: InputMaybe<Scalars['BigInt']['input']>;
  share_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Erc721Creator_OrderBy {
  Collection = 'collection',
  CollectionCreateAt = 'collection__createAt',
  CollectionId = 'collection__id',
  CollectionIdentifier = 'collection__identifier',
  CollectionTokenId = 'collection__tokenId',
  CollectionTxCreation = 'collection__txCreation',
  CollectionUri = 'collection__uri',
  Creator = 'creator',
  CreatorId = 'creator__id',
  Id = 'id',
  Share = 'share'
}

export type Erc721Token = {
  __typename?: 'ERC721Token';
  approval: Account;
  contract: Erc721Contract;
  createAt?: Maybe<Scalars['BigInt']['output']>;
  creators: Array<Erc721Creator>;
  id: Scalars['ID']['output'];
  identifier: Scalars['BigInt']['output'];
  owner: Account;
  tokenId: Scalars['String']['output'];
  transfers: Array<Erc721Transfer>;
  txCreation: Scalars['String']['output'];
  uri?: Maybe<Scalars['String']['output']>;
};


export type Erc721TokenCreatorsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc721Creator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Erc721Creator_Filter>;
};


export type Erc721TokenTransfersArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc721Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Erc721Transfer_Filter>;
};

export type Erc721Token_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Erc721Token_Filter>>>;
  approval?: InputMaybe<Scalars['String']['input']>;
  approval_?: InputMaybe<Account_Filter>;
  approval_contains?: InputMaybe<Scalars['String']['input']>;
  approval_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  approval_ends_with?: InputMaybe<Scalars['String']['input']>;
  approval_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  approval_gt?: InputMaybe<Scalars['String']['input']>;
  approval_gte?: InputMaybe<Scalars['String']['input']>;
  approval_in?: InputMaybe<Array<Scalars['String']['input']>>;
  approval_lt?: InputMaybe<Scalars['String']['input']>;
  approval_lte?: InputMaybe<Scalars['String']['input']>;
  approval_not?: InputMaybe<Scalars['String']['input']>;
  approval_not_contains?: InputMaybe<Scalars['String']['input']>;
  approval_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  approval_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  approval_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  approval_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  approval_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  approval_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  approval_starts_with?: InputMaybe<Scalars['String']['input']>;
  approval_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contract?: InputMaybe<Scalars['String']['input']>;
  contract_?: InputMaybe<Erc721Contract_Filter>;
  contract_contains?: InputMaybe<Scalars['String']['input']>;
  contract_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_ends_with?: InputMaybe<Scalars['String']['input']>;
  contract_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_gt?: InputMaybe<Scalars['String']['input']>;
  contract_gte?: InputMaybe<Scalars['String']['input']>;
  contract_in?: InputMaybe<Array<Scalars['String']['input']>>;
  contract_lt?: InputMaybe<Scalars['String']['input']>;
  contract_lte?: InputMaybe<Scalars['String']['input']>;
  contract_not?: InputMaybe<Scalars['String']['input']>;
  contract_not_contains?: InputMaybe<Scalars['String']['input']>;
  contract_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  contract_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  contract_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  contract_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_starts_with?: InputMaybe<Scalars['String']['input']>;
  contract_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  createAt?: InputMaybe<Scalars['BigInt']['input']>;
  createAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  createAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  creators_?: InputMaybe<Erc721Creator_Filter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  identifier?: InputMaybe<Scalars['BigInt']['input']>;
  identifier_gt?: InputMaybe<Scalars['BigInt']['input']>;
  identifier_gte?: InputMaybe<Scalars['BigInt']['input']>;
  identifier_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  identifier_lt?: InputMaybe<Scalars['BigInt']['input']>;
  identifier_lte?: InputMaybe<Scalars['BigInt']['input']>;
  identifier_not?: InputMaybe<Scalars['BigInt']['input']>;
  identifier_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Erc721Token_Filter>>>;
  owner?: InputMaybe<Scalars['String']['input']>;
  owner_?: InputMaybe<Account_Filter>;
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
  tokenId?: InputMaybe<Scalars['String']['input']>;
  tokenId_contains?: InputMaybe<Scalars['String']['input']>;
  tokenId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenId_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenId_gt?: InputMaybe<Scalars['String']['input']>;
  tokenId_gte?: InputMaybe<Scalars['String']['input']>;
  tokenId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenId_lt?: InputMaybe<Scalars['String']['input']>;
  tokenId_lte?: InputMaybe<Scalars['String']['input']>;
  tokenId_not?: InputMaybe<Scalars['String']['input']>;
  tokenId_not_contains?: InputMaybe<Scalars['String']['input']>;
  tokenId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenId_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transfers_?: InputMaybe<Erc721Transfer_Filter>;
  txCreation?: InputMaybe<Scalars['String']['input']>;
  txCreation_contains?: InputMaybe<Scalars['String']['input']>;
  txCreation_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  txCreation_ends_with?: InputMaybe<Scalars['String']['input']>;
  txCreation_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  txCreation_gt?: InputMaybe<Scalars['String']['input']>;
  txCreation_gte?: InputMaybe<Scalars['String']['input']>;
  txCreation_in?: InputMaybe<Array<Scalars['String']['input']>>;
  txCreation_lt?: InputMaybe<Scalars['String']['input']>;
  txCreation_lte?: InputMaybe<Scalars['String']['input']>;
  txCreation_not?: InputMaybe<Scalars['String']['input']>;
  txCreation_not_contains?: InputMaybe<Scalars['String']['input']>;
  txCreation_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  txCreation_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  txCreation_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  txCreation_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  txCreation_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  txCreation_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  txCreation_starts_with?: InputMaybe<Scalars['String']['input']>;
  txCreation_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  uri?: InputMaybe<Scalars['String']['input']>;
  uri_contains?: InputMaybe<Scalars['String']['input']>;
  uri_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_ends_with?: InputMaybe<Scalars['String']['input']>;
  uri_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_gt?: InputMaybe<Scalars['String']['input']>;
  uri_gte?: InputMaybe<Scalars['String']['input']>;
  uri_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uri_lt?: InputMaybe<Scalars['String']['input']>;
  uri_lte?: InputMaybe<Scalars['String']['input']>;
  uri_not?: InputMaybe<Scalars['String']['input']>;
  uri_not_contains?: InputMaybe<Scalars['String']['input']>;
  uri_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  uri_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uri_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  uri_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_starts_with?: InputMaybe<Scalars['String']['input']>;
  uri_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum Erc721Token_OrderBy {
  Approval = 'approval',
  ApprovalHoldingCount = 'approval__holdingCount',
  ApprovalId = 'approval__id',
  ApprovalOnSaleCount = 'approval__onSaleCount',
  Contract = 'contract',
  ContractCount = 'contract__count',
  ContractCreateAt = 'contract__createAt',
  ContractHolderCount = 'contract__holderCount',
  ContractId = 'contract__id',
  ContractName = 'contract__name',
  ContractSupportsMetadata = 'contract__supportsMetadata',
  ContractSymbol = 'contract__symbol',
  ContractTransactionCount = 'contract__transactionCount',
  ContractTxCreation = 'contract__txCreation',
  ContractVolume = 'contract__volume',
  CreateAt = 'createAt',
  Creators = 'creators',
  Id = 'id',
  Identifier = 'identifier',
  Owner = 'owner',
  OwnerHoldingCount = 'owner__holdingCount',
  OwnerId = 'owner__id',
  OwnerOnSaleCount = 'owner__onSaleCount',
  TokenId = 'tokenId',
  Transfers = 'transfers',
  TxCreation = 'txCreation',
  Uri = 'uri'
}

export type Erc721Transfer = Event & {
  __typename?: 'ERC721Transfer';
  contract: Erc721Contract;
  emitter: Account;
  from: Account;
  id: Scalars['ID']['output'];
  timestamp: Scalars['BigInt']['output'];
  to: Account;
  token: Erc721Token;
  transaction: Transaction;
};

export type Erc721Transfer_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Erc721Transfer_Filter>>>;
  contract?: InputMaybe<Scalars['String']['input']>;
  contract_?: InputMaybe<Erc721Contract_Filter>;
  contract_contains?: InputMaybe<Scalars['String']['input']>;
  contract_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_ends_with?: InputMaybe<Scalars['String']['input']>;
  contract_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_gt?: InputMaybe<Scalars['String']['input']>;
  contract_gte?: InputMaybe<Scalars['String']['input']>;
  contract_in?: InputMaybe<Array<Scalars['String']['input']>>;
  contract_lt?: InputMaybe<Scalars['String']['input']>;
  contract_lte?: InputMaybe<Scalars['String']['input']>;
  contract_not?: InputMaybe<Scalars['String']['input']>;
  contract_not_contains?: InputMaybe<Scalars['String']['input']>;
  contract_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  contract_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  contract_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  contract_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_starts_with?: InputMaybe<Scalars['String']['input']>;
  contract_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter?: InputMaybe<Scalars['String']['input']>;
  emitter_?: InputMaybe<Account_Filter>;
  emitter_contains?: InputMaybe<Scalars['String']['input']>;
  emitter_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_ends_with?: InputMaybe<Scalars['String']['input']>;
  emitter_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_gt?: InputMaybe<Scalars['String']['input']>;
  emitter_gte?: InputMaybe<Scalars['String']['input']>;
  emitter_in?: InputMaybe<Array<Scalars['String']['input']>>;
  emitter_lt?: InputMaybe<Scalars['String']['input']>;
  emitter_lte?: InputMaybe<Scalars['String']['input']>;
  emitter_not?: InputMaybe<Scalars['String']['input']>;
  emitter_not_contains?: InputMaybe<Scalars['String']['input']>;
  emitter_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  emitter_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  emitter_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  emitter_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_starts_with?: InputMaybe<Scalars['String']['input']>;
  emitter_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  from_?: InputMaybe<Account_Filter>;
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
  or?: InputMaybe<Array<InputMaybe<Erc721Transfer_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  to?: InputMaybe<Scalars['String']['input']>;
  to_?: InputMaybe<Account_Filter>;
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
  token?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Erc721Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum Erc721Transfer_OrderBy {
  Contract = 'contract',
  ContractCount = 'contract__count',
  ContractCreateAt = 'contract__createAt',
  ContractHolderCount = 'contract__holderCount',
  ContractId = 'contract__id',
  ContractName = 'contract__name',
  ContractSupportsMetadata = 'contract__supportsMetadata',
  ContractSymbol = 'contract__symbol',
  ContractTransactionCount = 'contract__transactionCount',
  ContractTxCreation = 'contract__txCreation',
  ContractVolume = 'contract__volume',
  Emitter = 'emitter',
  EmitterHoldingCount = 'emitter__holdingCount',
  EmitterId = 'emitter__id',
  EmitterOnSaleCount = 'emitter__onSaleCount',
  From = 'from',
  FromHoldingCount = 'from__holdingCount',
  FromId = 'from__id',
  FromOnSaleCount = 'from__onSaleCount',
  Id = 'id',
  Timestamp = 'timestamp',
  To = 'to',
  ToHoldingCount = 'to__holdingCount',
  ToId = 'to__id',
  ToOnSaleCount = 'to__onSaleCount',
  Token = 'token',
  TokenCreateAt = 'token__createAt',
  TokenId = 'token__id',
  TokenIdentifier = 'token__identifier',
  TokenTokenId = 'token__tokenId',
  TokenTxCreation = 'token__txCreation',
  TokenUri = 'token__uri',
  Transaction = 'transaction',
  TransactionBlockNumber = 'transaction__blockNumber',
  TransactionId = 'transaction__id',
  TransactionTimestamp = 'transaction__timestamp'
}

export type Erc1155Balance = {
  __typename?: 'ERC1155Balance';
  account?: Maybe<Account>;
  contract?: Maybe<Erc1155Contract>;
  id: Scalars['ID']['output'];
  token: Erc1155Token;
  transferFromEvent: Array<Erc1155Transfer>;
  transferToEvent: Array<Erc1155Transfer>;
  value: Scalars['BigDecimal']['output'];
  valueExact: Scalars['BigInt']['output'];
};


export type Erc1155BalanceTransferFromEventArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc1155Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Erc1155Transfer_Filter>;
};


export type Erc1155BalanceTransferToEventArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc1155Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Erc1155Transfer_Filter>;
};

export type Erc1155Balance_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']['input']>;
  account_?: InputMaybe<Account_Filter>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_not?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  and?: InputMaybe<Array<InputMaybe<Erc1155Balance_Filter>>>;
  contract?: InputMaybe<Scalars['String']['input']>;
  contract_?: InputMaybe<Erc1155Contract_Filter>;
  contract_contains?: InputMaybe<Scalars['String']['input']>;
  contract_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_ends_with?: InputMaybe<Scalars['String']['input']>;
  contract_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_gt?: InputMaybe<Scalars['String']['input']>;
  contract_gte?: InputMaybe<Scalars['String']['input']>;
  contract_in?: InputMaybe<Array<Scalars['String']['input']>>;
  contract_lt?: InputMaybe<Scalars['String']['input']>;
  contract_lte?: InputMaybe<Scalars['String']['input']>;
  contract_not?: InputMaybe<Scalars['String']['input']>;
  contract_not_contains?: InputMaybe<Scalars['String']['input']>;
  contract_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  contract_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  contract_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  contract_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_starts_with?: InputMaybe<Scalars['String']['input']>;
  contract_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Erc1155Balance_Filter>>>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Erc1155Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transferFromEvent_?: InputMaybe<Erc1155Transfer_Filter>;
  transferToEvent_?: InputMaybe<Erc1155Transfer_Filter>;
  value?: InputMaybe<Scalars['BigDecimal']['input']>;
  valueExact?: InputMaybe<Scalars['BigInt']['input']>;
  valueExact_gt?: InputMaybe<Scalars['BigInt']['input']>;
  valueExact_gte?: InputMaybe<Scalars['BigInt']['input']>;
  valueExact_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  valueExact_lt?: InputMaybe<Scalars['BigInt']['input']>;
  valueExact_lte?: InputMaybe<Scalars['BigInt']['input']>;
  valueExact_not?: InputMaybe<Scalars['BigInt']['input']>;
  valueExact_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  value_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  value_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export enum Erc1155Balance_OrderBy {
  Account = 'account',
  AccountHoldingCount = 'account__holdingCount',
  AccountId = 'account__id',
  AccountOnSaleCount = 'account__onSaleCount',
  Contract = 'contract',
  ContractCount = 'contract__count',
  ContractCreateAt = 'contract__createAt',
  ContractHolderCount = 'contract__holderCount',
  ContractId = 'contract__id',
  ContractName = 'contract__name',
  ContractSymbol = 'contract__symbol',
  ContractTransactionCount = 'contract__transactionCount',
  ContractTxCreation = 'contract__txCreation',
  ContractVolume = 'contract__volume',
  Id = 'id',
  Token = 'token',
  TokenCreateAt = 'token__createAt',
  TokenId = 'token__id',
  TokenIdentifier = 'token__identifier',
  TokenTokenId = 'token__tokenId',
  TokenTxCreation = 'token__txCreation',
  TokenUri = 'token__uri',
  TransferFromEvent = 'transferFromEvent',
  TransferToEvent = 'transferToEvent',
  Value = 'value',
  ValueExact = 'valueExact'
}

export type Erc1155Contract = {
  __typename?: 'ERC1155Contract';
  asAccount: Account;
  balances: Array<Erc1155Balance>;
  count: Scalars['BigInt']['output'];
  createAt?: Maybe<Scalars['BigInt']['output']>;
  holderCount: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  symbol?: Maybe<Scalars['String']['output']>;
  tokens: Array<Erc1155Token>;
  transactionCount: Scalars['BigInt']['output'];
  transfers: Array<Erc1155Transfer>;
  txCreation: Scalars['String']['output'];
  volume: Scalars['BigInt']['output'];
};


export type Erc1155ContractBalancesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc1155Balance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Erc1155Balance_Filter>;
};


export type Erc1155ContractTokensArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc1155Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Erc1155Token_Filter>;
};


export type Erc1155ContractTransfersArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc1155Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Erc1155Transfer_Filter>;
};

export type Erc1155Contract_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Erc1155Contract_Filter>>>;
  asAccount?: InputMaybe<Scalars['String']['input']>;
  asAccount_?: InputMaybe<Account_Filter>;
  asAccount_contains?: InputMaybe<Scalars['String']['input']>;
  asAccount_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asAccount_ends_with?: InputMaybe<Scalars['String']['input']>;
  asAccount_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asAccount_gt?: InputMaybe<Scalars['String']['input']>;
  asAccount_gte?: InputMaybe<Scalars['String']['input']>;
  asAccount_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asAccount_lt?: InputMaybe<Scalars['String']['input']>;
  asAccount_lte?: InputMaybe<Scalars['String']['input']>;
  asAccount_not?: InputMaybe<Scalars['String']['input']>;
  asAccount_not_contains?: InputMaybe<Scalars['String']['input']>;
  asAccount_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  asAccount_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  asAccount_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asAccount_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  asAccount_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  asAccount_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  asAccount_starts_with?: InputMaybe<Scalars['String']['input']>;
  asAccount_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  balances_?: InputMaybe<Erc1155Balance_Filter>;
  count?: InputMaybe<Scalars['BigInt']['input']>;
  count_gt?: InputMaybe<Scalars['BigInt']['input']>;
  count_gte?: InputMaybe<Scalars['BigInt']['input']>;
  count_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  count_lt?: InputMaybe<Scalars['BigInt']['input']>;
  count_lte?: InputMaybe<Scalars['BigInt']['input']>;
  count_not?: InputMaybe<Scalars['BigInt']['input']>;
  count_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createAt?: InputMaybe<Scalars['BigInt']['input']>;
  createAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  createAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  holderCount?: InputMaybe<Scalars['BigInt']['input']>;
  holderCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  holderCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  holderCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  holderCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  holderCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  holderCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  holderCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<Erc1155Contract_Filter>>>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  symbol_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_gt?: InputMaybe<Scalars['String']['input']>;
  symbol_gte?: InputMaybe<Scalars['String']['input']>;
  symbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_lt?: InputMaybe<Scalars['String']['input']>;
  symbol_lte?: InputMaybe<Scalars['String']['input']>;
  symbol_not?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokens_?: InputMaybe<Erc1155Token_Filter>;
  transactionCount?: InputMaybe<Scalars['BigInt']['input']>;
  transactionCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  transactionCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  transactionCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  transactionCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  transactionCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  transactionCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transfers_?: InputMaybe<Erc1155Transfer_Filter>;
  txCreation?: InputMaybe<Scalars['String']['input']>;
  txCreation_contains?: InputMaybe<Scalars['String']['input']>;
  txCreation_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  txCreation_ends_with?: InputMaybe<Scalars['String']['input']>;
  txCreation_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  txCreation_gt?: InputMaybe<Scalars['String']['input']>;
  txCreation_gte?: InputMaybe<Scalars['String']['input']>;
  txCreation_in?: InputMaybe<Array<Scalars['String']['input']>>;
  txCreation_lt?: InputMaybe<Scalars['String']['input']>;
  txCreation_lte?: InputMaybe<Scalars['String']['input']>;
  txCreation_not?: InputMaybe<Scalars['String']['input']>;
  txCreation_not_contains?: InputMaybe<Scalars['String']['input']>;
  txCreation_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  txCreation_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  txCreation_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  txCreation_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  txCreation_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  txCreation_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  txCreation_starts_with?: InputMaybe<Scalars['String']['input']>;
  txCreation_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  volume?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  volume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not?: InputMaybe<Scalars['BigInt']['input']>;
  volume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Erc1155Contract_OrderBy {
  AsAccount = 'asAccount',
  AsAccountHoldingCount = 'asAccount__holdingCount',
  AsAccountId = 'asAccount__id',
  AsAccountOnSaleCount = 'asAccount__onSaleCount',
  Balances = 'balances',
  Count = 'count',
  CreateAt = 'createAt',
  HolderCount = 'holderCount',
  Id = 'id',
  Name = 'name',
  Symbol = 'symbol',
  Tokens = 'tokens',
  TransactionCount = 'transactionCount',
  Transfers = 'transfers',
  TxCreation = 'txCreation',
  Volume = 'volume'
}

export type Erc1155Creator = {
  __typename?: 'ERC1155Creator';
  collection: Erc1155Token;
  creator: Creator;
  id: Scalars['ID']['output'];
  share: Scalars['BigInt']['output'];
};

export type Erc1155Creator_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Erc1155Creator_Filter>>>;
  collection?: InputMaybe<Scalars['String']['input']>;
  collection_?: InputMaybe<Erc1155Token_Filter>;
  collection_contains?: InputMaybe<Scalars['String']['input']>;
  collection_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  collection_ends_with?: InputMaybe<Scalars['String']['input']>;
  collection_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collection_gt?: InputMaybe<Scalars['String']['input']>;
  collection_gte?: InputMaybe<Scalars['String']['input']>;
  collection_in?: InputMaybe<Array<Scalars['String']['input']>>;
  collection_lt?: InputMaybe<Scalars['String']['input']>;
  collection_lte?: InputMaybe<Scalars['String']['input']>;
  collection_not?: InputMaybe<Scalars['String']['input']>;
  collection_not_contains?: InputMaybe<Scalars['String']['input']>;
  collection_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  collection_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  collection_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collection_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  collection_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  collection_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collection_starts_with?: InputMaybe<Scalars['String']['input']>;
  collection_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  creator?: InputMaybe<Scalars['String']['input']>;
  creator_?: InputMaybe<Creator_Filter>;
  creator_contains?: InputMaybe<Scalars['String']['input']>;
  creator_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_ends_with?: InputMaybe<Scalars['String']['input']>;
  creator_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_gt?: InputMaybe<Scalars['String']['input']>;
  creator_gte?: InputMaybe<Scalars['String']['input']>;
  creator_in?: InputMaybe<Array<Scalars['String']['input']>>;
  creator_lt?: InputMaybe<Scalars['String']['input']>;
  creator_lte?: InputMaybe<Scalars['String']['input']>;
  creator_not?: InputMaybe<Scalars['String']['input']>;
  creator_not_contains?: InputMaybe<Scalars['String']['input']>;
  creator_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  creator_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  creator_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  creator_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  creator_starts_with?: InputMaybe<Scalars['String']['input']>;
  creator_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Erc1155Creator_Filter>>>;
  share?: InputMaybe<Scalars['BigInt']['input']>;
  share_gt?: InputMaybe<Scalars['BigInt']['input']>;
  share_gte?: InputMaybe<Scalars['BigInt']['input']>;
  share_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  share_lt?: InputMaybe<Scalars['BigInt']['input']>;
  share_lte?: InputMaybe<Scalars['BigInt']['input']>;
  share_not?: InputMaybe<Scalars['BigInt']['input']>;
  share_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Erc1155Creator_OrderBy {
  Collection = 'collection',
  CollectionCreateAt = 'collection__createAt',
  CollectionId = 'collection__id',
  CollectionIdentifier = 'collection__identifier',
  CollectionTokenId = 'collection__tokenId',
  CollectionTxCreation = 'collection__txCreation',
  CollectionUri = 'collection__uri',
  Creator = 'creator',
  CreatorId = 'creator__id',
  Id = 'id',
  Share = 'share'
}

export type Erc1155Token = {
  __typename?: 'ERC1155Token';
  balances: Array<Erc1155Balance>;
  contract: Erc1155Contract;
  createAt?: Maybe<Scalars['BigInt']['output']>;
  creators: Array<Erc1155Creator>;
  id: Scalars['ID']['output'];
  identifier: Scalars['BigInt']['output'];
  tokenId: Scalars['String']['output'];
  totalSupply: Erc1155Balance;
  transfers: Array<Erc1155Transfer>;
  txCreation: Scalars['String']['output'];
  uri?: Maybe<Scalars['String']['output']>;
};


export type Erc1155TokenBalancesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc1155Balance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Erc1155Balance_Filter>;
};


export type Erc1155TokenCreatorsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc1155Creator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Erc1155Creator_Filter>;
};


export type Erc1155TokenTransfersArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc1155Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Erc1155Transfer_Filter>;
};

export type Erc1155Token_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Erc1155Token_Filter>>>;
  balances_?: InputMaybe<Erc1155Balance_Filter>;
  contract?: InputMaybe<Scalars['String']['input']>;
  contract_?: InputMaybe<Erc1155Contract_Filter>;
  contract_contains?: InputMaybe<Scalars['String']['input']>;
  contract_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_ends_with?: InputMaybe<Scalars['String']['input']>;
  contract_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_gt?: InputMaybe<Scalars['String']['input']>;
  contract_gte?: InputMaybe<Scalars['String']['input']>;
  contract_in?: InputMaybe<Array<Scalars['String']['input']>>;
  contract_lt?: InputMaybe<Scalars['String']['input']>;
  contract_lte?: InputMaybe<Scalars['String']['input']>;
  contract_not?: InputMaybe<Scalars['String']['input']>;
  contract_not_contains?: InputMaybe<Scalars['String']['input']>;
  contract_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  contract_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  contract_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  contract_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_starts_with?: InputMaybe<Scalars['String']['input']>;
  contract_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  createAt?: InputMaybe<Scalars['BigInt']['input']>;
  createAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  createAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  creators_?: InputMaybe<Erc1155Creator_Filter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  identifier?: InputMaybe<Scalars['BigInt']['input']>;
  identifier_gt?: InputMaybe<Scalars['BigInt']['input']>;
  identifier_gte?: InputMaybe<Scalars['BigInt']['input']>;
  identifier_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  identifier_lt?: InputMaybe<Scalars['BigInt']['input']>;
  identifier_lte?: InputMaybe<Scalars['BigInt']['input']>;
  identifier_not?: InputMaybe<Scalars['BigInt']['input']>;
  identifier_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Erc1155Token_Filter>>>;
  tokenId?: InputMaybe<Scalars['String']['input']>;
  tokenId_contains?: InputMaybe<Scalars['String']['input']>;
  tokenId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenId_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenId_gt?: InputMaybe<Scalars['String']['input']>;
  tokenId_gte?: InputMaybe<Scalars['String']['input']>;
  tokenId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenId_lt?: InputMaybe<Scalars['String']['input']>;
  tokenId_lte?: InputMaybe<Scalars['String']['input']>;
  tokenId_not?: InputMaybe<Scalars['String']['input']>;
  tokenId_not_contains?: InputMaybe<Scalars['String']['input']>;
  tokenId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenId_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  totalSupply?: InputMaybe<Scalars['String']['input']>;
  totalSupply_?: InputMaybe<Erc1155Balance_Filter>;
  totalSupply_contains?: InputMaybe<Scalars['String']['input']>;
  totalSupply_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  totalSupply_ends_with?: InputMaybe<Scalars['String']['input']>;
  totalSupply_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  totalSupply_gt?: InputMaybe<Scalars['String']['input']>;
  totalSupply_gte?: InputMaybe<Scalars['String']['input']>;
  totalSupply_in?: InputMaybe<Array<Scalars['String']['input']>>;
  totalSupply_lt?: InputMaybe<Scalars['String']['input']>;
  totalSupply_lte?: InputMaybe<Scalars['String']['input']>;
  totalSupply_not?: InputMaybe<Scalars['String']['input']>;
  totalSupply_not_contains?: InputMaybe<Scalars['String']['input']>;
  totalSupply_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  totalSupply_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  totalSupply_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  totalSupply_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  totalSupply_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  totalSupply_starts_with?: InputMaybe<Scalars['String']['input']>;
  totalSupply_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transfers_?: InputMaybe<Erc1155Transfer_Filter>;
  txCreation?: InputMaybe<Scalars['String']['input']>;
  txCreation_contains?: InputMaybe<Scalars['String']['input']>;
  txCreation_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  txCreation_ends_with?: InputMaybe<Scalars['String']['input']>;
  txCreation_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  txCreation_gt?: InputMaybe<Scalars['String']['input']>;
  txCreation_gte?: InputMaybe<Scalars['String']['input']>;
  txCreation_in?: InputMaybe<Array<Scalars['String']['input']>>;
  txCreation_lt?: InputMaybe<Scalars['String']['input']>;
  txCreation_lte?: InputMaybe<Scalars['String']['input']>;
  txCreation_not?: InputMaybe<Scalars['String']['input']>;
  txCreation_not_contains?: InputMaybe<Scalars['String']['input']>;
  txCreation_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  txCreation_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  txCreation_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  txCreation_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  txCreation_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  txCreation_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  txCreation_starts_with?: InputMaybe<Scalars['String']['input']>;
  txCreation_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  uri?: InputMaybe<Scalars['String']['input']>;
  uri_contains?: InputMaybe<Scalars['String']['input']>;
  uri_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_ends_with?: InputMaybe<Scalars['String']['input']>;
  uri_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_gt?: InputMaybe<Scalars['String']['input']>;
  uri_gte?: InputMaybe<Scalars['String']['input']>;
  uri_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uri_lt?: InputMaybe<Scalars['String']['input']>;
  uri_lte?: InputMaybe<Scalars['String']['input']>;
  uri_not?: InputMaybe<Scalars['String']['input']>;
  uri_not_contains?: InputMaybe<Scalars['String']['input']>;
  uri_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  uri_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  uri_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  uri_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  uri_starts_with?: InputMaybe<Scalars['String']['input']>;
  uri_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum Erc1155Token_OrderBy {
  Balances = 'balances',
  Contract = 'contract',
  ContractCount = 'contract__count',
  ContractCreateAt = 'contract__createAt',
  ContractHolderCount = 'contract__holderCount',
  ContractId = 'contract__id',
  ContractName = 'contract__name',
  ContractSymbol = 'contract__symbol',
  ContractTransactionCount = 'contract__transactionCount',
  ContractTxCreation = 'contract__txCreation',
  ContractVolume = 'contract__volume',
  CreateAt = 'createAt',
  Creators = 'creators',
  Id = 'id',
  Identifier = 'identifier',
  TokenId = 'tokenId',
  TotalSupply = 'totalSupply',
  TotalSupplyId = 'totalSupply__id',
  TotalSupplyValue = 'totalSupply__value',
  TotalSupplyValueExact = 'totalSupply__valueExact',
  Transfers = 'transfers',
  TxCreation = 'txCreation',
  Uri = 'uri'
}

export type Erc1155Transfer = Event & {
  __typename?: 'ERC1155Transfer';
  contract: Erc1155Contract;
  emitter: Account;
  from?: Maybe<Account>;
  fromBalance?: Maybe<Erc1155Balance>;
  id: Scalars['ID']['output'];
  timestamp: Scalars['BigInt']['output'];
  to?: Maybe<Account>;
  toBalance?: Maybe<Erc1155Balance>;
  token: Erc1155Token;
  transaction: Transaction;
  value: Scalars['BigDecimal']['output'];
  valueExact: Scalars['BigInt']['output'];
};

export type Erc1155Transfer_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Erc1155Transfer_Filter>>>;
  contract?: InputMaybe<Scalars['String']['input']>;
  contract_?: InputMaybe<Erc1155Contract_Filter>;
  contract_contains?: InputMaybe<Scalars['String']['input']>;
  contract_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_ends_with?: InputMaybe<Scalars['String']['input']>;
  contract_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_gt?: InputMaybe<Scalars['String']['input']>;
  contract_gte?: InputMaybe<Scalars['String']['input']>;
  contract_in?: InputMaybe<Array<Scalars['String']['input']>>;
  contract_lt?: InputMaybe<Scalars['String']['input']>;
  contract_lte?: InputMaybe<Scalars['String']['input']>;
  contract_not?: InputMaybe<Scalars['String']['input']>;
  contract_not_contains?: InputMaybe<Scalars['String']['input']>;
  contract_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  contract_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  contract_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  contract_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_starts_with?: InputMaybe<Scalars['String']['input']>;
  contract_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter?: InputMaybe<Scalars['String']['input']>;
  emitter_?: InputMaybe<Account_Filter>;
  emitter_contains?: InputMaybe<Scalars['String']['input']>;
  emitter_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_ends_with?: InputMaybe<Scalars['String']['input']>;
  emitter_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_gt?: InputMaybe<Scalars['String']['input']>;
  emitter_gte?: InputMaybe<Scalars['String']['input']>;
  emitter_in?: InputMaybe<Array<Scalars['String']['input']>>;
  emitter_lt?: InputMaybe<Scalars['String']['input']>;
  emitter_lte?: InputMaybe<Scalars['String']['input']>;
  emitter_not?: InputMaybe<Scalars['String']['input']>;
  emitter_not_contains?: InputMaybe<Scalars['String']['input']>;
  emitter_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  emitter_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  emitter_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  emitter_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_starts_with?: InputMaybe<Scalars['String']['input']>;
  emitter_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  fromBalance?: InputMaybe<Scalars['String']['input']>;
  fromBalance_?: InputMaybe<Erc1155Balance_Filter>;
  fromBalance_contains?: InputMaybe<Scalars['String']['input']>;
  fromBalance_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  fromBalance_ends_with?: InputMaybe<Scalars['String']['input']>;
  fromBalance_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fromBalance_gt?: InputMaybe<Scalars['String']['input']>;
  fromBalance_gte?: InputMaybe<Scalars['String']['input']>;
  fromBalance_in?: InputMaybe<Array<Scalars['String']['input']>>;
  fromBalance_lt?: InputMaybe<Scalars['String']['input']>;
  fromBalance_lte?: InputMaybe<Scalars['String']['input']>;
  fromBalance_not?: InputMaybe<Scalars['String']['input']>;
  fromBalance_not_contains?: InputMaybe<Scalars['String']['input']>;
  fromBalance_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  fromBalance_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  fromBalance_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fromBalance_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  fromBalance_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  fromBalance_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  fromBalance_starts_with?: InputMaybe<Scalars['String']['input']>;
  fromBalance_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  from_?: InputMaybe<Account_Filter>;
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
  or?: InputMaybe<Array<InputMaybe<Erc1155Transfer_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  to?: InputMaybe<Scalars['String']['input']>;
  toBalance?: InputMaybe<Scalars['String']['input']>;
  toBalance_?: InputMaybe<Erc1155Balance_Filter>;
  toBalance_contains?: InputMaybe<Scalars['String']['input']>;
  toBalance_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  toBalance_ends_with?: InputMaybe<Scalars['String']['input']>;
  toBalance_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  toBalance_gt?: InputMaybe<Scalars['String']['input']>;
  toBalance_gte?: InputMaybe<Scalars['String']['input']>;
  toBalance_in?: InputMaybe<Array<Scalars['String']['input']>>;
  toBalance_lt?: InputMaybe<Scalars['String']['input']>;
  toBalance_lte?: InputMaybe<Scalars['String']['input']>;
  toBalance_not?: InputMaybe<Scalars['String']['input']>;
  toBalance_not_contains?: InputMaybe<Scalars['String']['input']>;
  toBalance_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  toBalance_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  toBalance_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  toBalance_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  toBalance_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  toBalance_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  toBalance_starts_with?: InputMaybe<Scalars['String']['input']>;
  toBalance_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  to_?: InputMaybe<Account_Filter>;
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
  token?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Erc1155Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['BigDecimal']['input']>;
  valueExact?: InputMaybe<Scalars['BigInt']['input']>;
  valueExact_gt?: InputMaybe<Scalars['BigInt']['input']>;
  valueExact_gte?: InputMaybe<Scalars['BigInt']['input']>;
  valueExact_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  valueExact_lt?: InputMaybe<Scalars['BigInt']['input']>;
  valueExact_lte?: InputMaybe<Scalars['BigInt']['input']>;
  valueExact_not?: InputMaybe<Scalars['BigInt']['input']>;
  valueExact_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  value_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  value_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  value_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export enum Erc1155Transfer_OrderBy {
  Contract = 'contract',
  ContractCount = 'contract__count',
  ContractCreateAt = 'contract__createAt',
  ContractHolderCount = 'contract__holderCount',
  ContractId = 'contract__id',
  ContractName = 'contract__name',
  ContractSymbol = 'contract__symbol',
  ContractTransactionCount = 'contract__transactionCount',
  ContractTxCreation = 'contract__txCreation',
  ContractVolume = 'contract__volume',
  Emitter = 'emitter',
  EmitterHoldingCount = 'emitter__holdingCount',
  EmitterId = 'emitter__id',
  EmitterOnSaleCount = 'emitter__onSaleCount',
  From = 'from',
  FromBalance = 'fromBalance',
  FromBalanceId = 'fromBalance__id',
  FromBalanceValue = 'fromBalance__value',
  FromBalanceValueExact = 'fromBalance__valueExact',
  FromHoldingCount = 'from__holdingCount',
  FromId = 'from__id',
  FromOnSaleCount = 'from__onSaleCount',
  Id = 'id',
  Timestamp = 'timestamp',
  To = 'to',
  ToBalance = 'toBalance',
  ToBalanceId = 'toBalance__id',
  ToBalanceValue = 'toBalance__value',
  ToBalanceValueExact = 'toBalance__valueExact',
  ToHoldingCount = 'to__holdingCount',
  ToId = 'to__id',
  ToOnSaleCount = 'to__onSaleCount',
  Token = 'token',
  TokenCreateAt = 'token__createAt',
  TokenId = 'token__id',
  TokenIdentifier = 'token__identifier',
  TokenTokenId = 'token__tokenId',
  TokenTxCreation = 'token__txCreation',
  TokenUri = 'token__uri',
  Transaction = 'transaction',
  TransactionBlockNumber = 'transaction__blockNumber',
  TransactionId = 'transaction__id',
  TransactionTimestamp = 'transaction__timestamp',
  Value = 'value',
  ValueExact = 'valueExact'
}

export type Epoch = {
  __typename?: 'Epoch';
  block: Scalars['BigInt']['output'];
  epoch: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
};

export type Epoch_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Epoch_Filter>>>;
  block?: InputMaybe<Scalars['BigInt']['input']>;
  block_gt?: InputMaybe<Scalars['BigInt']['input']>;
  block_gte?: InputMaybe<Scalars['BigInt']['input']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  block_lt?: InputMaybe<Scalars['BigInt']['input']>;
  block_lte?: InputMaybe<Scalars['BigInt']['input']>;
  block_not?: InputMaybe<Scalars['BigInt']['input']>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  epoch?: InputMaybe<Scalars['BigInt']['input']>;
  epoch_gt?: InputMaybe<Scalars['BigInt']['input']>;
  epoch_gte?: InputMaybe<Scalars['BigInt']['input']>;
  epoch_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  epoch_lt?: InputMaybe<Scalars['BigInt']['input']>;
  epoch_lte?: InputMaybe<Scalars['BigInt']['input']>;
  epoch_not?: InputMaybe<Scalars['BigInt']['input']>;
  epoch_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Epoch_Filter>>>;
};

export enum Epoch_OrderBy {
  Block = 'block',
  Epoch = 'epoch',
  Id = 'id'
}

export type Event = {
  emitter: Account;
  id: Scalars['ID']['output'];
  timestamp: Scalars['BigInt']['output'];
  transaction: Transaction;
};

export enum EventType {
  AcceptBid = 'AcceptBid',
  AskCancel = 'AskCancel',
  AskNew = 'AskNew',
  Bid = 'Bid',
  CancelBid = 'CancelBid',
  Mint = 'Mint',
  Trade = 'Trade',
  Transfer = 'Transfer'
}

export type Event_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Event_Filter>>>;
  emitter?: InputMaybe<Scalars['String']['input']>;
  emitter_?: InputMaybe<Account_Filter>;
  emitter_contains?: InputMaybe<Scalars['String']['input']>;
  emitter_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_ends_with?: InputMaybe<Scalars['String']['input']>;
  emitter_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_gt?: InputMaybe<Scalars['String']['input']>;
  emitter_gte?: InputMaybe<Scalars['String']['input']>;
  emitter_in?: InputMaybe<Array<Scalars['String']['input']>>;
  emitter_lt?: InputMaybe<Scalars['String']['input']>;
  emitter_lte?: InputMaybe<Scalars['String']['input']>;
  emitter_not?: InputMaybe<Scalars['String']['input']>;
  emitter_not_contains?: InputMaybe<Scalars['String']['input']>;
  emitter_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  emitter_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  emitter_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  emitter_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  emitter_starts_with?: InputMaybe<Scalars['String']['input']>;
  emitter_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Event_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum Event_OrderBy {
  Emitter = 'emitter',
  EmitterHoldingCount = 'emitter__holdingCount',
  EmitterId = 'emitter__id',
  EmitterOnSaleCount = 'emitter__onSaleCount',
  Id = 'id',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  TransactionBlockNumber = 'transaction__blockNumber',
  TransactionId = 'transaction__id',
  TransactionTimestamp = 'transaction__timestamp'
}

export type Factory = {
  __typename?: 'Factory';
  id: Scalars['ID']['output'];
  owner: Scalars['ID']['output'];
  poolCount: Scalars['BigInt']['output'];
  totalFeesETH: Scalars['BigDecimal']['output'];
  totalFeesUSD: Scalars['BigDecimal']['output'];
  totalProtocolFeesETH: Scalars['BigDecimal']['output'];
  totalProtocolFeesUSD: Scalars['BigDecimal']['output'];
  totalValueLockedETH: Scalars['BigDecimal']['output'];
  totalValueLockedETHUntracked: Scalars['BigDecimal']['output'];
  totalValueLockedUSD: Scalars['BigDecimal']['output'];
  totalValueLockedUSDUntracked: Scalars['BigDecimal']['output'];
  totalVolumeETH: Scalars['BigDecimal']['output'];
  totalVolumeUSD: Scalars['BigDecimal']['output'];
  txCount: Scalars['BigInt']['output'];
  untrackedVolumeUSD: Scalars['BigDecimal']['output'];
};

export type Factory_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Factory_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Factory_Filter>>>;
  owner?: InputMaybe<Scalars['ID']['input']>;
  owner_gt?: InputMaybe<Scalars['ID']['input']>;
  owner_gte?: InputMaybe<Scalars['ID']['input']>;
  owner_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  owner_lt?: InputMaybe<Scalars['ID']['input']>;
  owner_lte?: InputMaybe<Scalars['ID']['input']>;
  owner_not?: InputMaybe<Scalars['ID']['input']>;
  owner_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  poolCount?: InputMaybe<Scalars['BigInt']['input']>;
  poolCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  poolCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  poolCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  poolCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  poolCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  poolCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  poolCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalFeesETH?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalFeesETH_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalFeesETH_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalFeesETH_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalFeesETH_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalFeesETH_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalFeesETH_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalFeesETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalFeesUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalFeesUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalFeesUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalFeesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalFeesUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalFeesUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalFeesUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalFeesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalProtocolFeesETH?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFeesETH_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFeesETH_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFeesETH_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalProtocolFeesETH_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFeesETH_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFeesETH_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFeesETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalProtocolFeesUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFeesUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFeesUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFeesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalProtocolFeesUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFeesUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFeesUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalProtocolFeesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalValueLockedETH?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedETHUntracked?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedETHUntracked_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedETHUntracked_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedETHUntracked_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalValueLockedETHUntracked_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedETHUntracked_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedETHUntracked_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedETHUntracked_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalValueLockedETH_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedETH_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedETH_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalValueLockedETH_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedETH_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedETH_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedUSDUntracked?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedUSDUntracked_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedUSDUntracked_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedUSDUntracked_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalValueLockedUSDUntracked_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedUSDUntracked_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedUSDUntracked_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedUSDUntracked_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalVolumeETH?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeETH_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeETH_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeETH_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalVolumeETH_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeETH_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeETH_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalVolumeUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  txCount?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  txCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  untrackedVolumeUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export enum Factory_OrderBy {
  Id = 'id',
  Owner = 'owner',
  PoolCount = 'poolCount',
  TotalFeesEth = 'totalFeesETH',
  TotalFeesUsd = 'totalFeesUSD',
  TotalProtocolFeesEth = 'totalProtocolFeesETH',
  TotalProtocolFeesUsd = 'totalProtocolFeesUSD',
  TotalValueLockedEth = 'totalValueLockedETH',
  TotalValueLockedEthUntracked = 'totalValueLockedETHUntracked',
  TotalValueLockedUsd = 'totalValueLockedUSD',
  TotalValueLockedUsdUntracked = 'totalValueLockedUSDUntracked',
  TotalVolumeEth = 'totalVolumeETH',
  TotalVolumeUsd = 'totalVolumeUSD',
  TxCount = 'txCount',
  UntrackedVolumeUsd = 'untrackedVolumeUSD'
}

export type Flash = {
  __typename?: 'Flash';
  amount0: Scalars['BigDecimal']['output'];
  amount0Paid: Scalars['BigDecimal']['output'];
  amount1: Scalars['BigDecimal']['output'];
  amount1Paid: Scalars['BigDecimal']['output'];
  amountUSD: Scalars['BigDecimal']['output'];
  id: Scalars['ID']['output'];
  logIndex?: Maybe<Scalars['BigInt']['output']>;
  pool: Pool;
  recipient: Scalars['Bytes']['output'];
  sender: Scalars['Bytes']['output'];
  timestamp: Scalars['BigInt']['output'];
  transaction: Transaction;
};

export type Flash_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount0?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0Paid?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0Paid_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0Paid_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0Paid_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount0Paid_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0Paid_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0Paid_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0Paid_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount1?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1Paid?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1Paid_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1Paid_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1Paid_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount1Paid_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1Paid_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1Paid_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1Paid_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amountUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amountUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Flash_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Flash_Filter>>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  recipient?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_contains?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_gt?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_gte?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  recipient_lt?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_lte?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender?: InputMaybe<Scalars['Bytes']['input']>;
  sender_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender_lt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_lte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum Flash_OrderBy {
  Amount0 = 'amount0',
  Amount0Paid = 'amount0Paid',
  Amount1 = 'amount1',
  Amount1Paid = 'amount1Paid',
  AmountUsd = 'amountUSD',
  Id = 'id',
  LogIndex = 'logIndex',
  Pool = 'pool',
  PoolCollectedFeesToken0 = 'pool__collectedFeesToken0',
  PoolCollectedFeesToken1 = 'pool__collectedFeesToken1',
  PoolCollectedFeesUsd = 'pool__collectedFeesUSD',
  PoolCreatedAtBlockNumber = 'pool__createdAtBlockNumber',
  PoolCreatedAtTimestamp = 'pool__createdAtTimestamp',
  PoolFeeGrowthGlobal0X128 = 'pool__feeGrowthGlobal0X128',
  PoolFeeGrowthGlobal1X128 = 'pool__feeGrowthGlobal1X128',
  PoolFeeProtocol = 'pool__feeProtocol',
  PoolFeeTier = 'pool__feeTier',
  PoolFeesUsd = 'pool__feesUSD',
  PoolId = 'pool__id',
  PoolLiquidity = 'pool__liquidity',
  PoolLiquidityProviderCount = 'pool__liquidityProviderCount',
  PoolObservationIndex = 'pool__observationIndex',
  PoolProtocolFeesUsd = 'pool__protocolFeesUSD',
  PoolSqrtPrice = 'pool__sqrtPrice',
  PoolTick = 'pool__tick',
  PoolToken0Price = 'pool__token0Price',
  PoolToken1Price = 'pool__token1Price',
  PoolTotalValueLockedEth = 'pool__totalValueLockedETH',
  PoolTotalValueLockedEthUntracked = 'pool__totalValueLockedETHUntracked',
  PoolTotalValueLockedToken0 = 'pool__totalValueLockedToken0',
  PoolTotalValueLockedToken1 = 'pool__totalValueLockedToken1',
  PoolTotalValueLockedUsd = 'pool__totalValueLockedUSD',
  PoolTotalValueLockedUsdUntracked = 'pool__totalValueLockedUSDUntracked',
  PoolTxCount = 'pool__txCount',
  PoolUntrackedVolumeUsd = 'pool__untrackedVolumeUSD',
  PoolVolumeToken0 = 'pool__volumeToken0',
  PoolVolumeToken1 = 'pool__volumeToken1',
  PoolVolumeUsd = 'pool__volumeUSD',
  Recipient = 'recipient',
  Sender = 'sender',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  TransactionBlockNumber = 'transaction__blockNumber',
  TransactionGasPrice = 'transaction__gasPrice',
  TransactionGasUsed = 'transaction__gasUsed',
  TransactionId = 'transaction__id',
  TransactionTimestamp = 'transaction__timestamp'
}

export type LockedUp = {
  __typename?: 'LockedUp';
  delegator: Delegator;
  duration: Scalars['BigInt']['output'];
  endTime: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  lockedAmount: Scalars['BigInt']['output'];
  penalty: Scalars['BigInt']['output'];
  unlockedAmount: Scalars['BigInt']['output'];
  validator: Validator;
};

export type LockedUp_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<LockedUp_Filter>>>;
  delegator?: InputMaybe<Scalars['String']['input']>;
  delegator_?: InputMaybe<Delegator_Filter>;
  delegator_contains?: InputMaybe<Scalars['String']['input']>;
  delegator_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegator_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_gt?: InputMaybe<Scalars['String']['input']>;
  delegator_gte?: InputMaybe<Scalars['String']['input']>;
  delegator_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegator_lt?: InputMaybe<Scalars['String']['input']>;
  delegator_lte?: InputMaybe<Scalars['String']['input']>;
  delegator_not?: InputMaybe<Scalars['String']['input']>;
  delegator_not_contains?: InputMaybe<Scalars['String']['input']>;
  delegator_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  delegator_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  delegator_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegator_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  delegator_starts_with?: InputMaybe<Scalars['String']['input']>;
  delegator_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['BigInt']['input']>;
  duration_gt?: InputMaybe<Scalars['BigInt']['input']>;
  duration_gte?: InputMaybe<Scalars['BigInt']['input']>;
  duration_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  duration_lt?: InputMaybe<Scalars['BigInt']['input']>;
  duration_lte?: InputMaybe<Scalars['BigInt']['input']>;
  duration_not?: InputMaybe<Scalars['BigInt']['input']>;
  duration_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  endTime?: InputMaybe<Scalars['BigInt']['input']>;
  endTime_gt?: InputMaybe<Scalars['BigInt']['input']>;
  endTime_gte?: InputMaybe<Scalars['BigInt']['input']>;
  endTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  endTime_lt?: InputMaybe<Scalars['BigInt']['input']>;
  endTime_lte?: InputMaybe<Scalars['BigInt']['input']>;
  endTime_not?: InputMaybe<Scalars['BigInt']['input']>;
  endTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lockedAmount?: InputMaybe<Scalars['BigInt']['input']>;
  lockedAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lockedAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lockedAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lockedAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lockedAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lockedAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  lockedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<LockedUp_Filter>>>;
  penalty?: InputMaybe<Scalars['BigInt']['input']>;
  penalty_gt?: InputMaybe<Scalars['BigInt']['input']>;
  penalty_gte?: InputMaybe<Scalars['BigInt']['input']>;
  penalty_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  penalty_lt?: InputMaybe<Scalars['BigInt']['input']>;
  penalty_lte?: InputMaybe<Scalars['BigInt']['input']>;
  penalty_not?: InputMaybe<Scalars['BigInt']['input']>;
  penalty_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  unlockedAmount?: InputMaybe<Scalars['BigInt']['input']>;
  unlockedAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  unlockedAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  unlockedAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  unlockedAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  unlockedAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  unlockedAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  unlockedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  validator?: InputMaybe<Scalars['String']['input']>;
  validator_?: InputMaybe<Validator_Filter>;
  validator_contains?: InputMaybe<Scalars['String']['input']>;
  validator_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  validator_ends_with?: InputMaybe<Scalars['String']['input']>;
  validator_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  validator_gt?: InputMaybe<Scalars['String']['input']>;
  validator_gte?: InputMaybe<Scalars['String']['input']>;
  validator_in?: InputMaybe<Array<Scalars['String']['input']>>;
  validator_lt?: InputMaybe<Scalars['String']['input']>;
  validator_lte?: InputMaybe<Scalars['String']['input']>;
  validator_not?: InputMaybe<Scalars['String']['input']>;
  validator_not_contains?: InputMaybe<Scalars['String']['input']>;
  validator_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  validator_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  validator_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  validator_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  validator_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  validator_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  validator_starts_with?: InputMaybe<Scalars['String']['input']>;
  validator_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum LockedUp_OrderBy {
  Delegator = 'delegator',
  DelegatorAddress = 'delegator__address',
  DelegatorCreatedOn = 'delegator__createdOn',
  DelegatorId = 'delegator__id',
  DelegatorStakedAmount = 'delegator__stakedAmount',
  DelegatorTotalClaimedRewards = 'delegator__totalClaimedRewards',
  DelegatorTotalLockStake = 'delegator__totalLockStake',
  Duration = 'duration',
  EndTime = 'endTime',
  Id = 'id',
  LockedAmount = 'lockedAmount',
  Penalty = 'penalty',
  UnlockedAmount = 'unlockedAmount',
  Validator = 'validator',
  ValidatorActive = 'validator__active',
  ValidatorAuth = 'validator__auth',
  ValidatorCreatedEpoch = 'validator__createdEpoch',
  ValidatorCreatedTime = 'validator__createdTime',
  ValidatorDelegatedAmount = 'validator__delegatedAmount',
  ValidatorDownTime = 'validator__downTime',
  ValidatorHash = 'validator__hash',
  ValidatorId = 'validator__id',
  ValidatorLockDays = 'validator__lockDays',
  ValidatorLockedUntil = 'validator__lockedUntil',
  ValidatorOnline = 'validator__online',
  ValidatorSelfStaked = 'validator__selfStaked',
  ValidatorTotalClaimedRewards = 'validator__totalClaimedRewards',
  ValidatorTotalDelegator = 'validator__totalDelegator',
  ValidatorTotalLockStake = 'validator__totalLockStake',
  ValidatorTotalStakedAmount = 'validator__totalStakedAmount',
  ValidatorValidatorId = 'validator__validatorId'
}

export type MarketEvent721 = {
  __typename?: 'MarketEvent721';
  address: Scalars['String']['output'];
  addressExtend?: Maybe<Scalars['String']['output']>;
  event: SellStatus;
  flagExtend?: Maybe<Scalars['Boolean']['output']>;
  from?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  metadata?: Maybe<Scalars['String']['output']>;
  netPrice?: Maybe<Scalars['BigInt']['output']>;
  nftId?: Maybe<Erc721Token>;
  nftIdExtend?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['BigInt']['output']>;
  quoteToken?: Maybe<Scalars['String']['output']>;
  timestamp: Scalars['BigInt']['output'];
  to?: Maybe<Scalars['String']['output']>;
  tokenId?: Maybe<Scalars['String']['output']>;
  txHash: Scalars['String']['output'];
};

export type MarketEvent721_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['String']['input']>;
  addressExtend?: InputMaybe<Scalars['String']['input']>;
  addressExtend_contains?: InputMaybe<Scalars['String']['input']>;
  addressExtend_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  addressExtend_ends_with?: InputMaybe<Scalars['String']['input']>;
  addressExtend_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addressExtend_gt?: InputMaybe<Scalars['String']['input']>;
  addressExtend_gte?: InputMaybe<Scalars['String']['input']>;
  addressExtend_in?: InputMaybe<Array<Scalars['String']['input']>>;
  addressExtend_lt?: InputMaybe<Scalars['String']['input']>;
  addressExtend_lte?: InputMaybe<Scalars['String']['input']>;
  addressExtend_not?: InputMaybe<Scalars['String']['input']>;
  addressExtend_not_contains?: InputMaybe<Scalars['String']['input']>;
  addressExtend_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  addressExtend_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  addressExtend_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addressExtend_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  addressExtend_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  addressExtend_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addressExtend_starts_with?: InputMaybe<Scalars['String']['input']>;
  addressExtend_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_contains?: InputMaybe<Scalars['String']['input']>;
  address_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  address_ends_with?: InputMaybe<Scalars['String']['input']>;
  address_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_gt?: InputMaybe<Scalars['String']['input']>;
  address_gte?: InputMaybe<Scalars['String']['input']>;
  address_in?: InputMaybe<Array<Scalars['String']['input']>>;
  address_lt?: InputMaybe<Scalars['String']['input']>;
  address_lte?: InputMaybe<Scalars['String']['input']>;
  address_not?: InputMaybe<Scalars['String']['input']>;
  address_not_contains?: InputMaybe<Scalars['String']['input']>;
  address_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  address_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  address_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  address_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  address_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_starts_with?: InputMaybe<Scalars['String']['input']>;
  address_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  and?: InputMaybe<Array<InputMaybe<MarketEvent721_Filter>>>;
  event?: InputMaybe<SellStatus>;
  event_in?: InputMaybe<Array<SellStatus>>;
  event_not?: InputMaybe<SellStatus>;
  event_not_in?: InputMaybe<Array<SellStatus>>;
  flagExtend?: InputMaybe<Scalars['Boolean']['input']>;
  flagExtend_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  flagExtend_not?: InputMaybe<Scalars['Boolean']['input']>;
  flagExtend_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  from?: InputMaybe<Scalars['String']['input']>;
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
  metadata?: InputMaybe<Scalars['String']['input']>;
  metadata_contains?: InputMaybe<Scalars['String']['input']>;
  metadata_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_ends_with?: InputMaybe<Scalars['String']['input']>;
  metadata_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_gt?: InputMaybe<Scalars['String']['input']>;
  metadata_gte?: InputMaybe<Scalars['String']['input']>;
  metadata_in?: InputMaybe<Array<Scalars['String']['input']>>;
  metadata_lt?: InputMaybe<Scalars['String']['input']>;
  metadata_lte?: InputMaybe<Scalars['String']['input']>;
  metadata_not?: InputMaybe<Scalars['String']['input']>;
  metadata_not_contains?: InputMaybe<Scalars['String']['input']>;
  metadata_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  metadata_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  metadata_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  metadata_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  metadata_starts_with?: InputMaybe<Scalars['String']['input']>;
  metadata_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  netPrice?: InputMaybe<Scalars['BigInt']['input']>;
  netPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  netPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  netPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  netPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  netPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  netPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  netPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nftId?: InputMaybe<Scalars['String']['input']>;
  nftIdExtend?: InputMaybe<Scalars['String']['input']>;
  nftIdExtend_contains?: InputMaybe<Scalars['String']['input']>;
  nftIdExtend_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nftIdExtend_ends_with?: InputMaybe<Scalars['String']['input']>;
  nftIdExtend_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nftIdExtend_gt?: InputMaybe<Scalars['String']['input']>;
  nftIdExtend_gte?: InputMaybe<Scalars['String']['input']>;
  nftIdExtend_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nftIdExtend_lt?: InputMaybe<Scalars['String']['input']>;
  nftIdExtend_lte?: InputMaybe<Scalars['String']['input']>;
  nftIdExtend_not?: InputMaybe<Scalars['String']['input']>;
  nftIdExtend_not_contains?: InputMaybe<Scalars['String']['input']>;
  nftIdExtend_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nftIdExtend_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  nftIdExtend_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nftIdExtend_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nftIdExtend_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  nftIdExtend_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nftIdExtend_starts_with?: InputMaybe<Scalars['String']['input']>;
  nftIdExtend_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nftId_?: InputMaybe<Erc721Token_Filter>;
  nftId_contains?: InputMaybe<Scalars['String']['input']>;
  nftId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nftId_ends_with?: InputMaybe<Scalars['String']['input']>;
  nftId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nftId_gt?: InputMaybe<Scalars['String']['input']>;
  nftId_gte?: InputMaybe<Scalars['String']['input']>;
  nftId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nftId_lt?: InputMaybe<Scalars['String']['input']>;
  nftId_lte?: InputMaybe<Scalars['String']['input']>;
  nftId_not?: InputMaybe<Scalars['String']['input']>;
  nftId_not_contains?: InputMaybe<Scalars['String']['input']>;
  nftId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nftId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  nftId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nftId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nftId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  nftId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nftId_starts_with?: InputMaybe<Scalars['String']['input']>;
  nftId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<MarketEvent721_Filter>>>;
  price?: InputMaybe<Scalars['BigInt']['input']>;
  price_gt?: InputMaybe<Scalars['BigInt']['input']>;
  price_gte?: InputMaybe<Scalars['BigInt']['input']>;
  price_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  price_lt?: InputMaybe<Scalars['BigInt']['input']>;
  price_lte?: InputMaybe<Scalars['BigInt']['input']>;
  price_not?: InputMaybe<Scalars['BigInt']['input']>;
  price_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  quoteToken?: InputMaybe<Scalars['String']['input']>;
  quoteToken_contains?: InputMaybe<Scalars['String']['input']>;
  quoteToken_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  quoteToken_ends_with?: InputMaybe<Scalars['String']['input']>;
  quoteToken_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  quoteToken_gt?: InputMaybe<Scalars['String']['input']>;
  quoteToken_gte?: InputMaybe<Scalars['String']['input']>;
  quoteToken_in?: InputMaybe<Array<Scalars['String']['input']>>;
  quoteToken_lt?: InputMaybe<Scalars['String']['input']>;
  quoteToken_lte?: InputMaybe<Scalars['String']['input']>;
  quoteToken_not?: InputMaybe<Scalars['String']['input']>;
  quoteToken_not_contains?: InputMaybe<Scalars['String']['input']>;
  quoteToken_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  quoteToken_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  quoteToken_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  quoteToken_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  quoteToken_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  quoteToken_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  quoteToken_starts_with?: InputMaybe<Scalars['String']['input']>;
  quoteToken_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  to?: InputMaybe<Scalars['String']['input']>;
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
  tokenId?: InputMaybe<Scalars['String']['input']>;
  tokenId_contains?: InputMaybe<Scalars['String']['input']>;
  tokenId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenId_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenId_gt?: InputMaybe<Scalars['String']['input']>;
  tokenId_gte?: InputMaybe<Scalars['String']['input']>;
  tokenId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenId_lt?: InputMaybe<Scalars['String']['input']>;
  tokenId_lte?: InputMaybe<Scalars['String']['input']>;
  tokenId_not?: InputMaybe<Scalars['String']['input']>;
  tokenId_not_contains?: InputMaybe<Scalars['String']['input']>;
  tokenId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenId_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash?: InputMaybe<Scalars['String']['input']>;
  txHash_contains?: InputMaybe<Scalars['String']['input']>;
  txHash_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash_ends_with?: InputMaybe<Scalars['String']['input']>;
  txHash_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash_gt?: InputMaybe<Scalars['String']['input']>;
  txHash_gte?: InputMaybe<Scalars['String']['input']>;
  txHash_in?: InputMaybe<Array<Scalars['String']['input']>>;
  txHash_lt?: InputMaybe<Scalars['String']['input']>;
  txHash_lte?: InputMaybe<Scalars['String']['input']>;
  txHash_not?: InputMaybe<Scalars['String']['input']>;
  txHash_not_contains?: InputMaybe<Scalars['String']['input']>;
  txHash_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  txHash_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  txHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  txHash_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash_starts_with?: InputMaybe<Scalars['String']['input']>;
  txHash_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum MarketEvent721_OrderBy {
  Address = 'address',
  AddressExtend = 'addressExtend',
  Event = 'event',
  FlagExtend = 'flagExtend',
  From = 'from',
  Id = 'id',
  Metadata = 'metadata',
  NetPrice = 'netPrice',
  NftId = 'nftId',
  NftIdExtend = 'nftIdExtend',
  NftIdCreateAt = 'nftId__createAt',
  NftIdId = 'nftId__id',
  NftIdIdentifier = 'nftId__identifier',
  NftIdTokenId = 'nftId__tokenId',
  NftIdTxCreation = 'nftId__txCreation',
  NftIdUri = 'nftId__uri',
  Price = 'price',
  QuoteToken = 'quoteToken',
  Timestamp = 'timestamp',
  To = 'to',
  TokenId = 'tokenId',
  TxHash = 'txHash'
}

export type MarketEvent1155 = {
  __typename?: 'MarketEvent1155';
  address?: Maybe<Scalars['String']['output']>;
  addressExtend?: Maybe<Scalars['String']['output']>;
  event: SellStatus;
  flagExtend?: Maybe<Scalars['Boolean']['output']>;
  from?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  netPrice?: Maybe<Scalars['BigInt']['output']>;
  nftId?: Maybe<Erc1155Token>;
  nftIdExtend?: Maybe<Scalars['String']['output']>;
  operation: Operation;
  operationId?: Maybe<Scalars['BigInt']['output']>;
  price?: Maybe<Scalars['BigInt']['output']>;
  quantity: Scalars['BigInt']['output'];
  quoteToken?: Maybe<Scalars['String']['output']>;
  timestamp: Scalars['BigInt']['output'];
  to?: Maybe<Scalars['String']['output']>;
  tokenId?: Maybe<Scalars['String']['output']>;
  txHash?: Maybe<Scalars['String']['output']>;
};

export type MarketEvent1155_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars['String']['input']>;
  addressExtend?: InputMaybe<Scalars['String']['input']>;
  addressExtend_contains?: InputMaybe<Scalars['String']['input']>;
  addressExtend_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  addressExtend_ends_with?: InputMaybe<Scalars['String']['input']>;
  addressExtend_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addressExtend_gt?: InputMaybe<Scalars['String']['input']>;
  addressExtend_gte?: InputMaybe<Scalars['String']['input']>;
  addressExtend_in?: InputMaybe<Array<Scalars['String']['input']>>;
  addressExtend_lt?: InputMaybe<Scalars['String']['input']>;
  addressExtend_lte?: InputMaybe<Scalars['String']['input']>;
  addressExtend_not?: InputMaybe<Scalars['String']['input']>;
  addressExtend_not_contains?: InputMaybe<Scalars['String']['input']>;
  addressExtend_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  addressExtend_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  addressExtend_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addressExtend_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  addressExtend_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  addressExtend_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  addressExtend_starts_with?: InputMaybe<Scalars['String']['input']>;
  addressExtend_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_contains?: InputMaybe<Scalars['String']['input']>;
  address_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  address_ends_with?: InputMaybe<Scalars['String']['input']>;
  address_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_gt?: InputMaybe<Scalars['String']['input']>;
  address_gte?: InputMaybe<Scalars['String']['input']>;
  address_in?: InputMaybe<Array<Scalars['String']['input']>>;
  address_lt?: InputMaybe<Scalars['String']['input']>;
  address_lte?: InputMaybe<Scalars['String']['input']>;
  address_not?: InputMaybe<Scalars['String']['input']>;
  address_not_contains?: InputMaybe<Scalars['String']['input']>;
  address_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  address_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  address_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  address_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  address_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  address_starts_with?: InputMaybe<Scalars['String']['input']>;
  address_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  and?: InputMaybe<Array<InputMaybe<MarketEvent1155_Filter>>>;
  event?: InputMaybe<SellStatus>;
  event_in?: InputMaybe<Array<SellStatus>>;
  event_not?: InputMaybe<SellStatus>;
  event_not_in?: InputMaybe<Array<SellStatus>>;
  flagExtend?: InputMaybe<Scalars['Boolean']['input']>;
  flagExtend_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  flagExtend_not?: InputMaybe<Scalars['Boolean']['input']>;
  flagExtend_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  from?: InputMaybe<Scalars['String']['input']>;
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
  netPrice?: InputMaybe<Scalars['BigInt']['input']>;
  netPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  netPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  netPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  netPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  netPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  netPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  netPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nftId?: InputMaybe<Scalars['String']['input']>;
  nftIdExtend?: InputMaybe<Scalars['String']['input']>;
  nftIdExtend_contains?: InputMaybe<Scalars['String']['input']>;
  nftIdExtend_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nftIdExtend_ends_with?: InputMaybe<Scalars['String']['input']>;
  nftIdExtend_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nftIdExtend_gt?: InputMaybe<Scalars['String']['input']>;
  nftIdExtend_gte?: InputMaybe<Scalars['String']['input']>;
  nftIdExtend_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nftIdExtend_lt?: InputMaybe<Scalars['String']['input']>;
  nftIdExtend_lte?: InputMaybe<Scalars['String']['input']>;
  nftIdExtend_not?: InputMaybe<Scalars['String']['input']>;
  nftIdExtend_not_contains?: InputMaybe<Scalars['String']['input']>;
  nftIdExtend_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nftIdExtend_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  nftIdExtend_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nftIdExtend_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nftIdExtend_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  nftIdExtend_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nftIdExtend_starts_with?: InputMaybe<Scalars['String']['input']>;
  nftIdExtend_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nftId_?: InputMaybe<Erc1155Token_Filter>;
  nftId_contains?: InputMaybe<Scalars['String']['input']>;
  nftId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nftId_ends_with?: InputMaybe<Scalars['String']['input']>;
  nftId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nftId_gt?: InputMaybe<Scalars['String']['input']>;
  nftId_gte?: InputMaybe<Scalars['String']['input']>;
  nftId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nftId_lt?: InputMaybe<Scalars['String']['input']>;
  nftId_lte?: InputMaybe<Scalars['String']['input']>;
  nftId_not?: InputMaybe<Scalars['String']['input']>;
  nftId_not_contains?: InputMaybe<Scalars['String']['input']>;
  nftId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  nftId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  nftId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nftId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  nftId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  nftId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nftId_starts_with?: InputMaybe<Scalars['String']['input']>;
  nftId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  operation?: InputMaybe<Operation>;
  operationId?: InputMaybe<Scalars['BigInt']['input']>;
  operationId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  operationId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  operationId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  operationId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  operationId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  operationId_not?: InputMaybe<Scalars['BigInt']['input']>;
  operationId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  operation_in?: InputMaybe<Array<Operation>>;
  operation_not?: InputMaybe<Operation>;
  operation_not_in?: InputMaybe<Array<Operation>>;
  or?: InputMaybe<Array<InputMaybe<MarketEvent1155_Filter>>>;
  price?: InputMaybe<Scalars['BigInt']['input']>;
  price_gt?: InputMaybe<Scalars['BigInt']['input']>;
  price_gte?: InputMaybe<Scalars['BigInt']['input']>;
  price_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  price_lt?: InputMaybe<Scalars['BigInt']['input']>;
  price_lte?: InputMaybe<Scalars['BigInt']['input']>;
  price_not?: InputMaybe<Scalars['BigInt']['input']>;
  price_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  quantity?: InputMaybe<Scalars['BigInt']['input']>;
  quantity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  quantity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  quantity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  quantity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  quantity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  quantity_not?: InputMaybe<Scalars['BigInt']['input']>;
  quantity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  quoteToken?: InputMaybe<Scalars['String']['input']>;
  quoteToken_contains?: InputMaybe<Scalars['String']['input']>;
  quoteToken_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  quoteToken_ends_with?: InputMaybe<Scalars['String']['input']>;
  quoteToken_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  quoteToken_gt?: InputMaybe<Scalars['String']['input']>;
  quoteToken_gte?: InputMaybe<Scalars['String']['input']>;
  quoteToken_in?: InputMaybe<Array<Scalars['String']['input']>>;
  quoteToken_lt?: InputMaybe<Scalars['String']['input']>;
  quoteToken_lte?: InputMaybe<Scalars['String']['input']>;
  quoteToken_not?: InputMaybe<Scalars['String']['input']>;
  quoteToken_not_contains?: InputMaybe<Scalars['String']['input']>;
  quoteToken_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  quoteToken_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  quoteToken_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  quoteToken_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  quoteToken_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  quoteToken_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  quoteToken_starts_with?: InputMaybe<Scalars['String']['input']>;
  quoteToken_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  to?: InputMaybe<Scalars['String']['input']>;
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
  tokenId?: InputMaybe<Scalars['String']['input']>;
  tokenId_contains?: InputMaybe<Scalars['String']['input']>;
  tokenId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenId_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenId_gt?: InputMaybe<Scalars['String']['input']>;
  tokenId_gte?: InputMaybe<Scalars['String']['input']>;
  tokenId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenId_lt?: InputMaybe<Scalars['String']['input']>;
  tokenId_lte?: InputMaybe<Scalars['String']['input']>;
  tokenId_not?: InputMaybe<Scalars['String']['input']>;
  tokenId_not_contains?: InputMaybe<Scalars['String']['input']>;
  tokenId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenId_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash?: InputMaybe<Scalars['String']['input']>;
  txHash_contains?: InputMaybe<Scalars['String']['input']>;
  txHash_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash_ends_with?: InputMaybe<Scalars['String']['input']>;
  txHash_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash_gt?: InputMaybe<Scalars['String']['input']>;
  txHash_gte?: InputMaybe<Scalars['String']['input']>;
  txHash_in?: InputMaybe<Array<Scalars['String']['input']>>;
  txHash_lt?: InputMaybe<Scalars['String']['input']>;
  txHash_lte?: InputMaybe<Scalars['String']['input']>;
  txHash_not?: InputMaybe<Scalars['String']['input']>;
  txHash_not_contains?: InputMaybe<Scalars['String']['input']>;
  txHash_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  txHash_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  txHash_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  txHash_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  txHash_starts_with?: InputMaybe<Scalars['String']['input']>;
  txHash_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum MarketEvent1155_OrderBy {
  Address = 'address',
  AddressExtend = 'addressExtend',
  Event = 'event',
  FlagExtend = 'flagExtend',
  From = 'from',
  Id = 'id',
  NetPrice = 'netPrice',
  NftId = 'nftId',
  NftIdExtend = 'nftIdExtend',
  NftIdCreateAt = 'nftId__createAt',
  NftIdId = 'nftId__id',
  NftIdIdentifier = 'nftId__identifier',
  NftIdTokenId = 'nftId__tokenId',
  NftIdTxCreation = 'nftId__txCreation',
  NftIdUri = 'nftId__uri',
  Operation = 'operation',
  OperationId = 'operationId',
  Price = 'price',
  Quantity = 'quantity',
  QuoteToken = 'quoteToken',
  Timestamp = 'timestamp',
  To = 'to',
  TokenId = 'tokenId',
  TxHash = 'txHash'
}

export type MarketFee = {
  __typename?: 'MarketFee';
  id: Scalars['String']['output'];
  totalFee: Scalars['BigInt']['output'];
  type: Scalars['String']['output'];
};

export type MarketFee_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MarketFee_Filter>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<MarketFee_Filter>>>;
  totalFee?: InputMaybe<Scalars['BigInt']['input']>;
  totalFee_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalFee_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalFee_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalFee_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalFee_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalFee_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalFee_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  type_ends_with?: InputMaybe<Scalars['String']['input']>;
  type_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  type_gt?: InputMaybe<Scalars['String']['input']>;
  type_gte?: InputMaybe<Scalars['String']['input']>;
  type_in?: InputMaybe<Array<Scalars['String']['input']>>;
  type_lt?: InputMaybe<Scalars['String']['input']>;
  type_lte?: InputMaybe<Scalars['String']['input']>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  type_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  type_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  type_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  type_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  type_starts_with?: InputMaybe<Scalars['String']['input']>;
  type_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum MarketFee_OrderBy {
  Id = 'id',
  TotalFee = 'totalFee',
  Type = 'type'
}

export type MarketVolume = {
  __typename?: 'MarketVolume';
  id: Scalars['String']['output'];
  totalVolume: Scalars['BigInt']['output'];
  type: Scalars['String']['output'];
};

export type MarketVolume_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<MarketVolume_Filter>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  id_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id_starts_with?: InputMaybe<Scalars['String']['input']>;
  id_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<MarketVolume_Filter>>>;
  totalVolume?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolume_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolume_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolume_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalVolume_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolume_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolume_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalVolume_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  type_ends_with?: InputMaybe<Scalars['String']['input']>;
  type_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  type_gt?: InputMaybe<Scalars['String']['input']>;
  type_gte?: InputMaybe<Scalars['String']['input']>;
  type_in?: InputMaybe<Array<Scalars['String']['input']>>;
  type_lt?: InputMaybe<Scalars['String']['input']>;
  type_lte?: InputMaybe<Scalars['String']['input']>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  type_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  type_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  type_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  type_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  type_starts_with?: InputMaybe<Scalars['String']['input']>;
  type_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum MarketVolume_OrderBy {
  Id = 'id',
  TotalVolume = 'totalVolume',
  Type = 'type'
}

export type Mint = {
  __typename?: 'Mint';
  amount: Scalars['BigInt']['output'];
  amount0: Scalars['BigDecimal']['output'];
  amount1: Scalars['BigDecimal']['output'];
  amountUSD?: Maybe<Scalars['BigDecimal']['output']>;
  id: Scalars['ID']['output'];
  logIndex?: Maybe<Scalars['BigInt']['output']>;
  origin: Scalars['Bytes']['output'];
  owner: Scalars['Bytes']['output'];
  pool: Pool;
  sender?: Maybe<Scalars['Bytes']['output']>;
  tickLower: Scalars['BigInt']['output'];
  tickUpper: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  token0: Token;
  token1: Token;
  transaction: Transaction;
};

export type Mint_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount0?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount1?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amountUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amountUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Mint_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Mint_Filter>>>;
  origin?: InputMaybe<Scalars['Bytes']['input']>;
  origin_contains?: InputMaybe<Scalars['Bytes']['input']>;
  origin_gt?: InputMaybe<Scalars['Bytes']['input']>;
  origin_gte?: InputMaybe<Scalars['Bytes']['input']>;
  origin_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  origin_lt?: InputMaybe<Scalars['Bytes']['input']>;
  origin_lte?: InputMaybe<Scalars['Bytes']['input']>;
  origin_not?: InputMaybe<Scalars['Bytes']['input']>;
  origin_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  origin_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  owner?: InputMaybe<Scalars['Bytes']['input']>;
  owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sender?: InputMaybe<Scalars['Bytes']['input']>;
  sender_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender_lt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_lte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tickLower?: InputMaybe<Scalars['BigInt']['input']>;
  tickLower_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tickLower_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tickLower_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tickLower_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tickLower_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tickLower_not?: InputMaybe<Scalars['BigInt']['input']>;
  tickLower_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tickUpper?: InputMaybe<Scalars['BigInt']['input']>;
  tickUpper_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tickUpper_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tickUpper_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tickUpper_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tickUpper_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tickUpper_not?: InputMaybe<Scalars['BigInt']['input']>;
  tickUpper_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token0?: InputMaybe<Scalars['String']['input']>;
  token0_?: InputMaybe<Token_Filter>;
  token0_contains?: InputMaybe<Scalars['String']['input']>;
  token0_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token0_ends_with?: InputMaybe<Scalars['String']['input']>;
  token0_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token0_gt?: InputMaybe<Scalars['String']['input']>;
  token0_gte?: InputMaybe<Scalars['String']['input']>;
  token0_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token0_lt?: InputMaybe<Scalars['String']['input']>;
  token0_lte?: InputMaybe<Scalars['String']['input']>;
  token0_not?: InputMaybe<Scalars['String']['input']>;
  token0_not_contains?: InputMaybe<Scalars['String']['input']>;
  token0_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token0_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token0_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token0_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token0_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token0_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token0_starts_with?: InputMaybe<Scalars['String']['input']>;
  token0_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token1?: InputMaybe<Scalars['String']['input']>;
  token1_?: InputMaybe<Token_Filter>;
  token1_contains?: InputMaybe<Scalars['String']['input']>;
  token1_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token1_ends_with?: InputMaybe<Scalars['String']['input']>;
  token1_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token1_gt?: InputMaybe<Scalars['String']['input']>;
  token1_gte?: InputMaybe<Scalars['String']['input']>;
  token1_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token1_lt?: InputMaybe<Scalars['String']['input']>;
  token1_lte?: InputMaybe<Scalars['String']['input']>;
  token1_not?: InputMaybe<Scalars['String']['input']>;
  token1_not_contains?: InputMaybe<Scalars['String']['input']>;
  token1_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token1_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token1_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token1_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token1_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token1_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token1_starts_with?: InputMaybe<Scalars['String']['input']>;
  token1_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum Mint_OrderBy {
  Amount = 'amount',
  Amount0 = 'amount0',
  Amount1 = 'amount1',
  AmountUsd = 'amountUSD',
  Id = 'id',
  LogIndex = 'logIndex',
  Origin = 'origin',
  Owner = 'owner',
  Pool = 'pool',
  PoolCollectedFeesToken0 = 'pool__collectedFeesToken0',
  PoolCollectedFeesToken1 = 'pool__collectedFeesToken1',
  PoolCollectedFeesUsd = 'pool__collectedFeesUSD',
  PoolCreatedAtBlockNumber = 'pool__createdAtBlockNumber',
  PoolCreatedAtTimestamp = 'pool__createdAtTimestamp',
  PoolFeeGrowthGlobal0X128 = 'pool__feeGrowthGlobal0X128',
  PoolFeeGrowthGlobal1X128 = 'pool__feeGrowthGlobal1X128',
  PoolFeeProtocol = 'pool__feeProtocol',
  PoolFeeTier = 'pool__feeTier',
  PoolFeesUsd = 'pool__feesUSD',
  PoolId = 'pool__id',
  PoolLiquidity = 'pool__liquidity',
  PoolLiquidityProviderCount = 'pool__liquidityProviderCount',
  PoolObservationIndex = 'pool__observationIndex',
  PoolProtocolFeesUsd = 'pool__protocolFeesUSD',
  PoolSqrtPrice = 'pool__sqrtPrice',
  PoolTick = 'pool__tick',
  PoolToken0Price = 'pool__token0Price',
  PoolToken1Price = 'pool__token1Price',
  PoolTotalValueLockedEth = 'pool__totalValueLockedETH',
  PoolTotalValueLockedEthUntracked = 'pool__totalValueLockedETHUntracked',
  PoolTotalValueLockedToken0 = 'pool__totalValueLockedToken0',
  PoolTotalValueLockedToken1 = 'pool__totalValueLockedToken1',
  PoolTotalValueLockedUsd = 'pool__totalValueLockedUSD',
  PoolTotalValueLockedUsdUntracked = 'pool__totalValueLockedUSDUntracked',
  PoolTxCount = 'pool__txCount',
  PoolUntrackedVolumeUsd = 'pool__untrackedVolumeUSD',
  PoolVolumeToken0 = 'pool__volumeToken0',
  PoolVolumeToken1 = 'pool__volumeToken1',
  PoolVolumeUsd = 'pool__volumeUSD',
  Sender = 'sender',
  TickLower = 'tickLower',
  TickUpper = 'tickUpper',
  Timestamp = 'timestamp',
  Token0 = 'token0',
  Token0Decimals = 'token0__decimals',
  Token0DerivedEth = 'token0__derivedETH',
  Token0DerivedUsd = 'token0__derivedUSD',
  Token0FeesUsd = 'token0__feesUSD',
  Token0Id = 'token0__id',
  Token0Name = 'token0__name',
  Token0PoolCount = 'token0__poolCount',
  Token0ProtocolFeesUsd = 'token0__protocolFeesUSD',
  Token0Symbol = 'token0__symbol',
  Token0TotalSupply = 'token0__totalSupply',
  Token0TotalValueLocked = 'token0__totalValueLocked',
  Token0TotalValueLockedUsd = 'token0__totalValueLockedUSD',
  Token0TotalValueLockedUsdUntracked = 'token0__totalValueLockedUSDUntracked',
  Token0TxCount = 'token0__txCount',
  Token0UntrackedVolumeUsd = 'token0__untrackedVolumeUSD',
  Token0Volume = 'token0__volume',
  Token0VolumeUsd = 'token0__volumeUSD',
  Token1 = 'token1',
  Token1Decimals = 'token1__decimals',
  Token1DerivedEth = 'token1__derivedETH',
  Token1DerivedUsd = 'token1__derivedUSD',
  Token1FeesUsd = 'token1__feesUSD',
  Token1Id = 'token1__id',
  Token1Name = 'token1__name',
  Token1PoolCount = 'token1__poolCount',
  Token1ProtocolFeesUsd = 'token1__protocolFeesUSD',
  Token1Symbol = 'token1__symbol',
  Token1TotalSupply = 'token1__totalSupply',
  Token1TotalValueLocked = 'token1__totalValueLocked',
  Token1TotalValueLockedUsd = 'token1__totalValueLockedUSD',
  Token1TotalValueLockedUsdUntracked = 'token1__totalValueLockedUSDUntracked',
  Token1TxCount = 'token1__txCount',
  Token1UntrackedVolumeUsd = 'token1__untrackedVolumeUSD',
  Token1Volume = 'token1__volume',
  Token1VolumeUsd = 'token1__volumeUSD',
  Transaction = 'transaction',
  TransactionBlockNumber = 'transaction__blockNumber',
  TransactionGasPrice = 'transaction__gasPrice',
  TransactionGasUsed = 'transaction__gasUsed',
  TransactionId = 'transaction__id',
  TransactionTimestamp = 'transaction__timestamp'
}

export type OnSaleStatus1155 = {
  __typename?: 'OnSaleStatus1155';
  contract: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isOnSale: Scalars['Boolean']['output'];
  owner: Account;
  tokenId: Scalars['BigInt']['output'];
};

export type OnSaleStatus1155_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OnSaleStatus1155_Filter>>>;
  contract?: InputMaybe<Scalars['String']['input']>;
  contract_contains?: InputMaybe<Scalars['String']['input']>;
  contract_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_ends_with?: InputMaybe<Scalars['String']['input']>;
  contract_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_gt?: InputMaybe<Scalars['String']['input']>;
  contract_gte?: InputMaybe<Scalars['String']['input']>;
  contract_in?: InputMaybe<Array<Scalars['String']['input']>>;
  contract_lt?: InputMaybe<Scalars['String']['input']>;
  contract_lte?: InputMaybe<Scalars['String']['input']>;
  contract_not?: InputMaybe<Scalars['String']['input']>;
  contract_not_contains?: InputMaybe<Scalars['String']['input']>;
  contract_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  contract_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  contract_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  contract_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_starts_with?: InputMaybe<Scalars['String']['input']>;
  contract_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  isOnSale?: InputMaybe<Scalars['Boolean']['input']>;
  isOnSale_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  isOnSale_not?: InputMaybe<Scalars['Boolean']['input']>;
  isOnSale_not_in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  or?: InputMaybe<Array<InputMaybe<OnSaleStatus1155_Filter>>>;
  owner?: InputMaybe<Scalars['String']['input']>;
  owner_?: InputMaybe<Account_Filter>;
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
  tokenId?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']['input']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum OnSaleStatus1155_OrderBy {
  Contract = 'contract',
  Id = 'id',
  IsOnSale = 'isOnSale',
  Owner = 'owner',
  OwnerHoldingCount = 'owner__holdingCount',
  OwnerId = 'owner__id',
  OwnerOnSaleCount = 'owner__onSaleCount',
  TokenId = 'tokenId'
}

export enum Operation {
  Ask = 'Ask',
  Offer = 'Offer'
}

export type Order = {
  __typename?: 'Order';
  filledQty: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  index: Scalars['Int']['output'];
  maker: Account;
  nonce: Scalars['BigInt']['output'];
  remaining?: Maybe<Scalars['BigInt']['output']>;
  sig: Scalars['String']['output'];
  status: OrderStatus;
  takeQty: Scalars['BigInt']['output'];
  taker?: Maybe<Account>;
  timestamp: Scalars['BigInt']['output'];
};

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum OrderStatus {
  Canceled = 'CANCELED',
  Filled = 'FILLED',
  Transfer = 'TRANSFER',
  Transferfilled = 'TRANSFERFILLED'
}

export enum OrderStatusTransfer {
  Transfer = 'TRANSFER',
  Transferfilled = 'TRANSFERFILLED'
}

export type OrderTransfer = {
  __typename?: 'OrderTransfer';
  collection: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  maker: Account;
  remainQty?: Maybe<Scalars['BigInt']['output']>;
  status: OrderStatusTransfer;
  takeQty: Scalars['BigInt']['output'];
  taker?: Maybe<Account>;
  timestamp: Scalars['BigInt']['output'];
  tokenId: Scalars['String']['output'];
};

export type OrderTransfer_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OrderTransfer_Filter>>>;
  collection?: InputMaybe<Scalars['String']['input']>;
  collection_contains?: InputMaybe<Scalars['String']['input']>;
  collection_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  collection_ends_with?: InputMaybe<Scalars['String']['input']>;
  collection_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collection_gt?: InputMaybe<Scalars['String']['input']>;
  collection_gte?: InputMaybe<Scalars['String']['input']>;
  collection_in?: InputMaybe<Array<Scalars['String']['input']>>;
  collection_lt?: InputMaybe<Scalars['String']['input']>;
  collection_lte?: InputMaybe<Scalars['String']['input']>;
  collection_not?: InputMaybe<Scalars['String']['input']>;
  collection_not_contains?: InputMaybe<Scalars['String']['input']>;
  collection_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  collection_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  collection_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collection_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  collection_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  collection_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collection_starts_with?: InputMaybe<Scalars['String']['input']>;
  collection_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  maker?: InputMaybe<Scalars['String']['input']>;
  maker_?: InputMaybe<Account_Filter>;
  maker_contains?: InputMaybe<Scalars['String']['input']>;
  maker_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  maker_ends_with?: InputMaybe<Scalars['String']['input']>;
  maker_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  maker_gt?: InputMaybe<Scalars['String']['input']>;
  maker_gte?: InputMaybe<Scalars['String']['input']>;
  maker_in?: InputMaybe<Array<Scalars['String']['input']>>;
  maker_lt?: InputMaybe<Scalars['String']['input']>;
  maker_lte?: InputMaybe<Scalars['String']['input']>;
  maker_not?: InputMaybe<Scalars['String']['input']>;
  maker_not_contains?: InputMaybe<Scalars['String']['input']>;
  maker_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  maker_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  maker_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  maker_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  maker_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  maker_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  maker_starts_with?: InputMaybe<Scalars['String']['input']>;
  maker_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<OrderTransfer_Filter>>>;
  remainQty?: InputMaybe<Scalars['BigInt']['input']>;
  remainQty_gt?: InputMaybe<Scalars['BigInt']['input']>;
  remainQty_gte?: InputMaybe<Scalars['BigInt']['input']>;
  remainQty_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  remainQty_lt?: InputMaybe<Scalars['BigInt']['input']>;
  remainQty_lte?: InputMaybe<Scalars['BigInt']['input']>;
  remainQty_not?: InputMaybe<Scalars['BigInt']['input']>;
  remainQty_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  status?: InputMaybe<OrderStatusTransfer>;
  status_in?: InputMaybe<Array<OrderStatusTransfer>>;
  status_not?: InputMaybe<OrderStatusTransfer>;
  status_not_in?: InputMaybe<Array<OrderStatusTransfer>>;
  takeQty?: InputMaybe<Scalars['BigInt']['input']>;
  takeQty_gt?: InputMaybe<Scalars['BigInt']['input']>;
  takeQty_gte?: InputMaybe<Scalars['BigInt']['input']>;
  takeQty_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  takeQty_lt?: InputMaybe<Scalars['BigInt']['input']>;
  takeQty_lte?: InputMaybe<Scalars['BigInt']['input']>;
  takeQty_not?: InputMaybe<Scalars['BigInt']['input']>;
  takeQty_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  taker?: InputMaybe<Scalars['String']['input']>;
  taker_?: InputMaybe<Account_Filter>;
  taker_contains?: InputMaybe<Scalars['String']['input']>;
  taker_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  taker_ends_with?: InputMaybe<Scalars['String']['input']>;
  taker_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  taker_gt?: InputMaybe<Scalars['String']['input']>;
  taker_gte?: InputMaybe<Scalars['String']['input']>;
  taker_in?: InputMaybe<Array<Scalars['String']['input']>>;
  taker_lt?: InputMaybe<Scalars['String']['input']>;
  taker_lte?: InputMaybe<Scalars['String']['input']>;
  taker_not?: InputMaybe<Scalars['String']['input']>;
  taker_not_contains?: InputMaybe<Scalars['String']['input']>;
  taker_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  taker_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  taker_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  taker_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  taker_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  taker_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  taker_starts_with?: InputMaybe<Scalars['String']['input']>;
  taker_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenId?: InputMaybe<Scalars['String']['input']>;
  tokenId_contains?: InputMaybe<Scalars['String']['input']>;
  tokenId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenId_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenId_gt?: InputMaybe<Scalars['String']['input']>;
  tokenId_gte?: InputMaybe<Scalars['String']['input']>;
  tokenId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenId_lt?: InputMaybe<Scalars['String']['input']>;
  tokenId_lte?: InputMaybe<Scalars['String']['input']>;
  tokenId_not?: InputMaybe<Scalars['String']['input']>;
  tokenId_not_contains?: InputMaybe<Scalars['String']['input']>;
  tokenId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenId_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum OrderTransfer_OrderBy {
  Collection = 'collection',
  Id = 'id',
  Maker = 'maker',
  MakerHoldingCount = 'maker__holdingCount',
  MakerId = 'maker__id',
  MakerOnSaleCount = 'maker__onSaleCount',
  RemainQty = 'remainQty',
  Status = 'status',
  TakeQty = 'takeQty',
  Taker = 'taker',
  TakerHoldingCount = 'taker__holdingCount',
  TakerId = 'taker__id',
  TakerOnSaleCount = 'taker__onSaleCount',
  Timestamp = 'timestamp',
  TokenId = 'tokenId'
}

export type Order_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Order_Filter>>>;
  filledQty?: InputMaybe<Scalars['BigInt']['input']>;
  filledQty_gt?: InputMaybe<Scalars['BigInt']['input']>;
  filledQty_gte?: InputMaybe<Scalars['BigInt']['input']>;
  filledQty_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  filledQty_lt?: InputMaybe<Scalars['BigInt']['input']>;
  filledQty_lte?: InputMaybe<Scalars['BigInt']['input']>;
  filledQty_not?: InputMaybe<Scalars['BigInt']['input']>;
  filledQty_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  index?: InputMaybe<Scalars['Int']['input']>;
  index_gt?: InputMaybe<Scalars['Int']['input']>;
  index_gte?: InputMaybe<Scalars['Int']['input']>;
  index_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  index_lt?: InputMaybe<Scalars['Int']['input']>;
  index_lte?: InputMaybe<Scalars['Int']['input']>;
  index_not?: InputMaybe<Scalars['Int']['input']>;
  index_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  maker?: InputMaybe<Scalars['String']['input']>;
  maker_?: InputMaybe<Account_Filter>;
  maker_contains?: InputMaybe<Scalars['String']['input']>;
  maker_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  maker_ends_with?: InputMaybe<Scalars['String']['input']>;
  maker_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  maker_gt?: InputMaybe<Scalars['String']['input']>;
  maker_gte?: InputMaybe<Scalars['String']['input']>;
  maker_in?: InputMaybe<Array<Scalars['String']['input']>>;
  maker_lt?: InputMaybe<Scalars['String']['input']>;
  maker_lte?: InputMaybe<Scalars['String']['input']>;
  maker_not?: InputMaybe<Scalars['String']['input']>;
  maker_not_contains?: InputMaybe<Scalars['String']['input']>;
  maker_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  maker_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  maker_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  maker_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  maker_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  maker_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  maker_starts_with?: InputMaybe<Scalars['String']['input']>;
  maker_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  nonce?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_gt?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_gte?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  nonce_lt?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_lte?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_not?: InputMaybe<Scalars['BigInt']['input']>;
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Order_Filter>>>;
  remaining?: InputMaybe<Scalars['BigInt']['input']>;
  remaining_gt?: InputMaybe<Scalars['BigInt']['input']>;
  remaining_gte?: InputMaybe<Scalars['BigInt']['input']>;
  remaining_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  remaining_lt?: InputMaybe<Scalars['BigInt']['input']>;
  remaining_lte?: InputMaybe<Scalars['BigInt']['input']>;
  remaining_not?: InputMaybe<Scalars['BigInt']['input']>;
  remaining_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sig?: InputMaybe<Scalars['String']['input']>;
  sig_contains?: InputMaybe<Scalars['String']['input']>;
  sig_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sig_ends_with?: InputMaybe<Scalars['String']['input']>;
  sig_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sig_gt?: InputMaybe<Scalars['String']['input']>;
  sig_gte?: InputMaybe<Scalars['String']['input']>;
  sig_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sig_lt?: InputMaybe<Scalars['String']['input']>;
  sig_lte?: InputMaybe<Scalars['String']['input']>;
  sig_not?: InputMaybe<Scalars['String']['input']>;
  sig_not_contains?: InputMaybe<Scalars['String']['input']>;
  sig_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  sig_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  sig_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sig_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  sig_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  sig_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  sig_starts_with?: InputMaybe<Scalars['String']['input']>;
  sig_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<OrderStatus>;
  status_in?: InputMaybe<Array<OrderStatus>>;
  status_not?: InputMaybe<OrderStatus>;
  status_not_in?: InputMaybe<Array<OrderStatus>>;
  takeQty?: InputMaybe<Scalars['BigInt']['input']>;
  takeQty_gt?: InputMaybe<Scalars['BigInt']['input']>;
  takeQty_gte?: InputMaybe<Scalars['BigInt']['input']>;
  takeQty_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  takeQty_lt?: InputMaybe<Scalars['BigInt']['input']>;
  takeQty_lte?: InputMaybe<Scalars['BigInt']['input']>;
  takeQty_not?: InputMaybe<Scalars['BigInt']['input']>;
  takeQty_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  taker?: InputMaybe<Scalars['String']['input']>;
  taker_?: InputMaybe<Account_Filter>;
  taker_contains?: InputMaybe<Scalars['String']['input']>;
  taker_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  taker_ends_with?: InputMaybe<Scalars['String']['input']>;
  taker_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  taker_gt?: InputMaybe<Scalars['String']['input']>;
  taker_gte?: InputMaybe<Scalars['String']['input']>;
  taker_in?: InputMaybe<Array<Scalars['String']['input']>>;
  taker_lt?: InputMaybe<Scalars['String']['input']>;
  taker_lte?: InputMaybe<Scalars['String']['input']>;
  taker_not?: InputMaybe<Scalars['String']['input']>;
  taker_not_contains?: InputMaybe<Scalars['String']['input']>;
  taker_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  taker_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  taker_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  taker_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  taker_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  taker_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  taker_starts_with?: InputMaybe<Scalars['String']['input']>;
  taker_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Order_OrderBy {
  FilledQty = 'filledQty',
  Id = 'id',
  Index = 'index',
  Maker = 'maker',
  MakerHoldingCount = 'maker__holdingCount',
  MakerId = 'maker__id',
  MakerOnSaleCount = 'maker__onSaleCount',
  Nonce = 'nonce',
  Remaining = 'remaining',
  Sig = 'sig',
  Status = 'status',
  TakeQty = 'takeQty',
  Taker = 'taker',
  TakerHoldingCount = 'taker__holdingCount',
  TakerId = 'taker__id',
  TakerOnSaleCount = 'taker__onSaleCount',
  Timestamp = 'timestamp'
}

export type OwnedTokenCount = {
  __typename?: 'OwnedTokenCount';
  contract: Scalars['String']['output'];
  count: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  owner: Account;
  timestamp: Scalars['BigInt']['output'];
};

export type OwnedTokenCount_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OwnedTokenCount_Filter>>>;
  contract?: InputMaybe<Scalars['String']['input']>;
  contract_contains?: InputMaybe<Scalars['String']['input']>;
  contract_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_ends_with?: InputMaybe<Scalars['String']['input']>;
  contract_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_gt?: InputMaybe<Scalars['String']['input']>;
  contract_gte?: InputMaybe<Scalars['String']['input']>;
  contract_in?: InputMaybe<Array<Scalars['String']['input']>>;
  contract_lt?: InputMaybe<Scalars['String']['input']>;
  contract_lte?: InputMaybe<Scalars['String']['input']>;
  contract_not?: InputMaybe<Scalars['String']['input']>;
  contract_not_contains?: InputMaybe<Scalars['String']['input']>;
  contract_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  contract_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  contract_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  contract_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_starts_with?: InputMaybe<Scalars['String']['input']>;
  contract_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  count?: InputMaybe<Scalars['BigInt']['input']>;
  count_gt?: InputMaybe<Scalars['BigInt']['input']>;
  count_gte?: InputMaybe<Scalars['BigInt']['input']>;
  count_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  count_lt?: InputMaybe<Scalars['BigInt']['input']>;
  count_lte?: InputMaybe<Scalars['BigInt']['input']>;
  count_not?: InputMaybe<Scalars['BigInt']['input']>;
  count_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<OwnedTokenCount_Filter>>>;
  owner?: InputMaybe<Scalars['String']['input']>;
  owner_?: InputMaybe<Account_Filter>;
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
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum OwnedTokenCount_OrderBy {
  Contract = 'contract',
  Count = 'count',
  Id = 'id',
  Owner = 'owner',
  OwnerHoldingCount = 'owner__holdingCount',
  OwnerId = 'owner__id',
  OwnerOnSaleCount = 'owner__onSaleCount',
  Timestamp = 'timestamp'
}

export type OwnerContract = {
  __typename?: 'OwnerContract';
  contract: Scalars['String']['output'];
  count: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  timestamp: Scalars['BigInt']['output'];
  user: Scalars['String']['output'];
};

export type OwnerContract_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<OwnerContract_Filter>>>;
  contract?: InputMaybe<Scalars['String']['input']>;
  contract_contains?: InputMaybe<Scalars['String']['input']>;
  contract_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_ends_with?: InputMaybe<Scalars['String']['input']>;
  contract_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_gt?: InputMaybe<Scalars['String']['input']>;
  contract_gte?: InputMaybe<Scalars['String']['input']>;
  contract_in?: InputMaybe<Array<Scalars['String']['input']>>;
  contract_lt?: InputMaybe<Scalars['String']['input']>;
  contract_lte?: InputMaybe<Scalars['String']['input']>;
  contract_not?: InputMaybe<Scalars['String']['input']>;
  contract_not_contains?: InputMaybe<Scalars['String']['input']>;
  contract_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  contract_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  contract_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  contract_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  contract_starts_with?: InputMaybe<Scalars['String']['input']>;
  contract_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  count?: InputMaybe<Scalars['BigInt']['input']>;
  count_gt?: InputMaybe<Scalars['BigInt']['input']>;
  count_gte?: InputMaybe<Scalars['BigInt']['input']>;
  count_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  count_lt?: InputMaybe<Scalars['BigInt']['input']>;
  count_lte?: InputMaybe<Scalars['BigInt']['input']>;
  count_not?: InputMaybe<Scalars['BigInt']['input']>;
  count_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<OwnerContract_Filter>>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  user?: InputMaybe<Scalars['String']['input']>;
  user_contains?: InputMaybe<Scalars['String']['input']>;
  user_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_gt?: InputMaybe<Scalars['String']['input']>;
  user_gte?: InputMaybe<Scalars['String']['input']>;
  user_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_lt?: InputMaybe<Scalars['String']['input']>;
  user_lte?: InputMaybe<Scalars['String']['input']>;
  user_not?: InputMaybe<Scalars['String']['input']>;
  user_not_contains?: InputMaybe<Scalars['String']['input']>;
  user_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  user_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  user_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  user_starts_with?: InputMaybe<Scalars['String']['input']>;
  user_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum OwnerContract_OrderBy {
  Contract = 'contract',
  Count = 'count',
  Id = 'id',
  Timestamp = 'timestamp',
  User = 'user'
}

export type PancakeDayData = {
  __typename?: 'PancakeDayData';
  date: Scalars['Int']['output'];
  feesUSD: Scalars['BigDecimal']['output'];
  id: Scalars['ID']['output'];
  protocolFeesUSD: Scalars['BigDecimal']['output'];
  tvlUSD: Scalars['BigDecimal']['output'];
  txCount: Scalars['BigInt']['output'];
  volumeETH: Scalars['BigDecimal']['output'];
  volumeUSD: Scalars['BigDecimal']['output'];
  volumeUSDUntracked: Scalars['BigDecimal']['output'];
};

export type PancakeDayData_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PancakeDayData_Filter>>>;
  date?: InputMaybe<Scalars['Int']['input']>;
  date_gt?: InputMaybe<Scalars['Int']['input']>;
  date_gte?: InputMaybe<Scalars['Int']['input']>;
  date_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  date_lt?: InputMaybe<Scalars['Int']['input']>;
  date_lte?: InputMaybe<Scalars['Int']['input']>;
  date_not?: InputMaybe<Scalars['Int']['input']>;
  date_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  feesUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  feesUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<PancakeDayData_Filter>>>;
  protocolFeesUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  protocolFeesUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tvlUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tvlUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  txCount?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  txCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volumeETH?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeETH_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeETH_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeETH_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeETH_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeETH_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeETH_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSDUntracked?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSDUntracked_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSDUntracked_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSDUntracked_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeUSDUntracked_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSDUntracked_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSDUntracked_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSDUntracked_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export enum PancakeDayData_OrderBy {
  Date = 'date',
  FeesUsd = 'feesUSD',
  Id = 'id',
  ProtocolFeesUsd = 'protocolFeesUSD',
  TvlUsd = 'tvlUSD',
  TxCount = 'txCount',
  VolumeEth = 'volumeETH',
  VolumeUsd = 'volumeUSD',
  VolumeUsdUntracked = 'volumeUSDUntracked'
}

export type Pool = {
  __typename?: 'Pool';
  burns: Array<Burn>;
  collectedFeesToken0: Scalars['BigDecimal']['output'];
  collectedFeesToken1: Scalars['BigDecimal']['output'];
  collectedFeesUSD: Scalars['BigDecimal']['output'];
  collects: Array<Collect>;
  createdAtBlockNumber: Scalars['BigInt']['output'];
  createdAtTimestamp: Scalars['BigInt']['output'];
  feeGrowthGlobal0X128: Scalars['BigInt']['output'];
  feeGrowthGlobal1X128: Scalars['BigInt']['output'];
  feeProtocol: Scalars['BigInt']['output'];
  feeTier: Scalars['BigInt']['output'];
  feesUSD: Scalars['BigDecimal']['output'];
  id: Scalars['ID']['output'];
  liquidity: Scalars['BigInt']['output'];
  liquidityProviderCount: Scalars['BigInt']['output'];
  mints: Array<Mint>;
  observationIndex: Scalars['BigInt']['output'];
  pool5MinuteCandleData: Array<Pool5MinuteCandleData>;
  pool15MinuteCandleData: Array<Pool15MinuteCandleData>;
  pool30MinuteCandleData: Array<Pool30MinuteCandleData>;
  poolDayCandleData: Array<PoolDayCandleData>;
  poolDayData: Array<PoolDayData>;
  poolHourCandleData: Array<PoolHourCandleData>;
  poolHourData: Array<PoolHourData>;
  poolMinuteCandleData: Array<PoolMinuteCandleData>;
  poolMonthCandleData: Array<PoolMonthCandleData>;
  poolWeekCandleData: Array<PoolWeekCandleData>;
  protocolFeesUSD: Scalars['BigDecimal']['output'];
  sqrtPrice: Scalars['BigInt']['output'];
  swaps: Array<Swap>;
  tick?: Maybe<Scalars['BigInt']['output']>;
  ticks: Array<Tick>;
  token0: Token;
  token0Price: Scalars['BigDecimal']['output'];
  token1: Token;
  token1Price: Scalars['BigDecimal']['output'];
  totalValueLockedETH: Scalars['BigDecimal']['output'];
  totalValueLockedETHUntracked: Scalars['BigDecimal']['output'];
  totalValueLockedToken0: Scalars['BigDecimal']['output'];
  totalValueLockedToken1: Scalars['BigDecimal']['output'];
  totalValueLockedUSD: Scalars['BigDecimal']['output'];
  totalValueLockedUSDUntracked: Scalars['BigDecimal']['output'];
  txCount: Scalars['BigInt']['output'];
  untrackedVolumeUSD: Scalars['BigDecimal']['output'];
  volumeToken0: Scalars['BigDecimal']['output'];
  volumeToken1: Scalars['BigDecimal']['output'];
  volumeUSD: Scalars['BigDecimal']['output'];
};


export type PoolBurnsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Burn_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Burn_Filter>;
};


export type PoolCollectsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Collect_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Collect_Filter>;
};


export type PoolMintsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Mint_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Mint_Filter>;
};


export type PoolPool5MinuteCandleDataArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pool5MinuteCandleData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Pool5MinuteCandleData_Filter>;
};


export type PoolPool15MinuteCandleDataArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pool15MinuteCandleData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Pool15MinuteCandleData_Filter>;
};


export type PoolPool30MinuteCandleDataArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pool30MinuteCandleData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Pool30MinuteCandleData_Filter>;
};


export type PoolPoolDayCandleDataArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolDayCandleData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PoolDayCandleData_Filter>;
};


export type PoolPoolDayDataArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PoolDayData_Filter>;
};


export type PoolPoolHourCandleDataArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolHourCandleData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PoolHourCandleData_Filter>;
};


export type PoolPoolHourDataArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolHourData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PoolHourData_Filter>;
};


export type PoolPoolMinuteCandleDataArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolMinuteCandleData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PoolMinuteCandleData_Filter>;
};


export type PoolPoolMonthCandleDataArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolMonthCandleData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PoolMonthCandleData_Filter>;
};


export type PoolPoolWeekCandleDataArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolWeekCandleData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PoolWeekCandleData_Filter>;
};


export type PoolSwapsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Swap_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Swap_Filter>;
};


export type PoolTicksArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Tick_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Tick_Filter>;
};

export type Pool5MinuteCandleData = {
  __typename?: 'Pool5MinuteCandleData';
  close0: Scalars['BigDecimal']['output'];
  close1: Scalars['BigDecimal']['output'];
  feeGrowthGlobal0X128: Scalars['BigInt']['output'];
  feeGrowthGlobal1X128: Scalars['BigInt']['output'];
  feesUSD: Scalars['BigDecimal']['output'];
  high0: Scalars['BigDecimal']['output'];
  high1: Scalars['BigDecimal']['output'];
  id: Scalars['ID']['output'];
  liquidity: Scalars['BigInt']['output'];
  low0: Scalars['BigDecimal']['output'];
  low1: Scalars['BigDecimal']['output'];
  open0: Scalars['BigDecimal']['output'];
  open1: Scalars['BigDecimal']['output'];
  periodStartUnix: Scalars['Int']['output'];
  pool: Pool;
  protocolFeesUSD: Scalars['BigDecimal']['output'];
  sqrtPrice: Scalars['BigInt']['output'];
  tick?: Maybe<Scalars['BigInt']['output']>;
  token0Price: Scalars['BigDecimal']['output'];
  token1Price: Scalars['BigDecimal']['output'];
  tvlUSD: Scalars['BigDecimal']['output'];
  txCount: Scalars['BigInt']['output'];
  volumeToken0: Scalars['BigDecimal']['output'];
  volumeToken1: Scalars['BigDecimal']['output'];
  volumeUSD: Scalars['BigDecimal']['output'];
};

export type Pool5MinuteCandleData_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Pool5MinuteCandleData_Filter>>>;
  close0?: InputMaybe<Scalars['BigDecimal']['input']>;
  close0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  close0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  close0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  close0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  close0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  close0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  close0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  close1?: InputMaybe<Scalars['BigDecimal']['input']>;
  close1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  close1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  close1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  close1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  close1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  close1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  close1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  feeGrowthGlobal0X128?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_gt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_gte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeGrowthGlobal0X128_lt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_lte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_not?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeGrowthGlobal1X128?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_gt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_gte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeGrowthGlobal1X128_lt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_lte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_not?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feesUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  feesUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  high0?: InputMaybe<Scalars['BigDecimal']['input']>;
  high0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  high0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  high0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  high0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  high0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  high0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  high0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  high1?: InputMaybe<Scalars['BigDecimal']['input']>;
  high1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  high1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  high1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  high1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  high1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  high1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  high1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  liquidity?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  low0?: InputMaybe<Scalars['BigDecimal']['input']>;
  low0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  low0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  low0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  low0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  low0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  low0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  low0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  low1?: InputMaybe<Scalars['BigDecimal']['input']>;
  low1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  low1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  low1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  low1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  low1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  low1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  low1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  open0?: InputMaybe<Scalars['BigDecimal']['input']>;
  open0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  open0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  open0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  open0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  open0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  open0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  open0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  open1?: InputMaybe<Scalars['BigDecimal']['input']>;
  open1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  open1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  open1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  open1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  open1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  open1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  open1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Pool5MinuteCandleData_Filter>>>;
  periodStartUnix?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_gt?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_gte?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  periodStartUnix_lt?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_lte?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_not?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  protocolFeesUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  protocolFeesUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sqrtPrice?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sqrtPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tick?: InputMaybe<Scalars['BigInt']['input']>;
  tick_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tick_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tick_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tick_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tick_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tick_not?: InputMaybe<Scalars['BigInt']['input']>;
  tick_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token0Price?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token0Price_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token1Price?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token1Price_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tvlUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tvlUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  txCount?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  txCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volumeToken0?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeToken0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeToken1?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeToken1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export enum Pool5MinuteCandleData_OrderBy {
  Close0 = 'close0',
  Close1 = 'close1',
  FeeGrowthGlobal0X128 = 'feeGrowthGlobal0X128',
  FeeGrowthGlobal1X128 = 'feeGrowthGlobal1X128',
  FeesUsd = 'feesUSD',
  High0 = 'high0',
  High1 = 'high1',
  Id = 'id',
  Liquidity = 'liquidity',
  Low0 = 'low0',
  Low1 = 'low1',
  Open0 = 'open0',
  Open1 = 'open1',
  PeriodStartUnix = 'periodStartUnix',
  Pool = 'pool',
  PoolCollectedFeesToken0 = 'pool__collectedFeesToken0',
  PoolCollectedFeesToken1 = 'pool__collectedFeesToken1',
  PoolCollectedFeesUsd = 'pool__collectedFeesUSD',
  PoolCreatedAtBlockNumber = 'pool__createdAtBlockNumber',
  PoolCreatedAtTimestamp = 'pool__createdAtTimestamp',
  PoolFeeGrowthGlobal0X128 = 'pool__feeGrowthGlobal0X128',
  PoolFeeGrowthGlobal1X128 = 'pool__feeGrowthGlobal1X128',
  PoolFeeProtocol = 'pool__feeProtocol',
  PoolFeeTier = 'pool__feeTier',
  PoolFeesUsd = 'pool__feesUSD',
  PoolId = 'pool__id',
  PoolLiquidity = 'pool__liquidity',
  PoolLiquidityProviderCount = 'pool__liquidityProviderCount',
  PoolObservationIndex = 'pool__observationIndex',
  PoolProtocolFeesUsd = 'pool__protocolFeesUSD',
  PoolSqrtPrice = 'pool__sqrtPrice',
  PoolTick = 'pool__tick',
  PoolToken0Price = 'pool__token0Price',
  PoolToken1Price = 'pool__token1Price',
  PoolTotalValueLockedEth = 'pool__totalValueLockedETH',
  PoolTotalValueLockedEthUntracked = 'pool__totalValueLockedETHUntracked',
  PoolTotalValueLockedToken0 = 'pool__totalValueLockedToken0',
  PoolTotalValueLockedToken1 = 'pool__totalValueLockedToken1',
  PoolTotalValueLockedUsd = 'pool__totalValueLockedUSD',
  PoolTotalValueLockedUsdUntracked = 'pool__totalValueLockedUSDUntracked',
  PoolTxCount = 'pool__txCount',
  PoolUntrackedVolumeUsd = 'pool__untrackedVolumeUSD',
  PoolVolumeToken0 = 'pool__volumeToken0',
  PoolVolumeToken1 = 'pool__volumeToken1',
  PoolVolumeUsd = 'pool__volumeUSD',
  ProtocolFeesUsd = 'protocolFeesUSD',
  SqrtPrice = 'sqrtPrice',
  Tick = 'tick',
  Token0Price = 'token0Price',
  Token1Price = 'token1Price',
  TvlUsd = 'tvlUSD',
  TxCount = 'txCount',
  VolumeToken0 = 'volumeToken0',
  VolumeToken1 = 'volumeToken1',
  VolumeUsd = 'volumeUSD'
}

export type Pool15MinuteCandleData = {
  __typename?: 'Pool15MinuteCandleData';
  close0: Scalars['BigDecimal']['output'];
  close1: Scalars['BigDecimal']['output'];
  feeGrowthGlobal0X128: Scalars['BigInt']['output'];
  feeGrowthGlobal1X128: Scalars['BigInt']['output'];
  feesUSD: Scalars['BigDecimal']['output'];
  high0: Scalars['BigDecimal']['output'];
  high1: Scalars['BigDecimal']['output'];
  id: Scalars['ID']['output'];
  liquidity: Scalars['BigInt']['output'];
  low0: Scalars['BigDecimal']['output'];
  low1: Scalars['BigDecimal']['output'];
  open0: Scalars['BigDecimal']['output'];
  open1: Scalars['BigDecimal']['output'];
  periodStartUnix: Scalars['Int']['output'];
  pool: Pool;
  protocolFeesUSD: Scalars['BigDecimal']['output'];
  sqrtPrice: Scalars['BigInt']['output'];
  tick?: Maybe<Scalars['BigInt']['output']>;
  token0Price: Scalars['BigDecimal']['output'];
  token1Price: Scalars['BigDecimal']['output'];
  tvlUSD: Scalars['BigDecimal']['output'];
  txCount: Scalars['BigInt']['output'];
  volumeToken0: Scalars['BigDecimal']['output'];
  volumeToken1: Scalars['BigDecimal']['output'];
  volumeUSD: Scalars['BigDecimal']['output'];
};

export type Pool15MinuteCandleData_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Pool15MinuteCandleData_Filter>>>;
  close0?: InputMaybe<Scalars['BigDecimal']['input']>;
  close0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  close0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  close0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  close0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  close0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  close0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  close0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  close1?: InputMaybe<Scalars['BigDecimal']['input']>;
  close1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  close1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  close1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  close1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  close1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  close1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  close1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  feeGrowthGlobal0X128?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_gt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_gte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeGrowthGlobal0X128_lt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_lte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_not?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeGrowthGlobal1X128?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_gt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_gte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeGrowthGlobal1X128_lt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_lte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_not?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feesUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  feesUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  high0?: InputMaybe<Scalars['BigDecimal']['input']>;
  high0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  high0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  high0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  high0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  high0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  high0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  high0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  high1?: InputMaybe<Scalars['BigDecimal']['input']>;
  high1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  high1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  high1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  high1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  high1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  high1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  high1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  liquidity?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  low0?: InputMaybe<Scalars['BigDecimal']['input']>;
  low0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  low0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  low0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  low0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  low0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  low0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  low0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  low1?: InputMaybe<Scalars['BigDecimal']['input']>;
  low1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  low1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  low1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  low1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  low1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  low1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  low1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  open0?: InputMaybe<Scalars['BigDecimal']['input']>;
  open0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  open0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  open0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  open0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  open0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  open0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  open0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  open1?: InputMaybe<Scalars['BigDecimal']['input']>;
  open1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  open1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  open1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  open1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  open1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  open1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  open1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Pool15MinuteCandleData_Filter>>>;
  periodStartUnix?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_gt?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_gte?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  periodStartUnix_lt?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_lte?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_not?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  protocolFeesUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  protocolFeesUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sqrtPrice?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sqrtPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tick?: InputMaybe<Scalars['BigInt']['input']>;
  tick_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tick_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tick_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tick_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tick_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tick_not?: InputMaybe<Scalars['BigInt']['input']>;
  tick_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token0Price?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token0Price_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token1Price?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token1Price_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tvlUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tvlUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  txCount?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  txCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volumeToken0?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeToken0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeToken1?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeToken1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export enum Pool15MinuteCandleData_OrderBy {
  Close0 = 'close0',
  Close1 = 'close1',
  FeeGrowthGlobal0X128 = 'feeGrowthGlobal0X128',
  FeeGrowthGlobal1X128 = 'feeGrowthGlobal1X128',
  FeesUsd = 'feesUSD',
  High0 = 'high0',
  High1 = 'high1',
  Id = 'id',
  Liquidity = 'liquidity',
  Low0 = 'low0',
  Low1 = 'low1',
  Open0 = 'open0',
  Open1 = 'open1',
  PeriodStartUnix = 'periodStartUnix',
  Pool = 'pool',
  PoolCollectedFeesToken0 = 'pool__collectedFeesToken0',
  PoolCollectedFeesToken1 = 'pool__collectedFeesToken1',
  PoolCollectedFeesUsd = 'pool__collectedFeesUSD',
  PoolCreatedAtBlockNumber = 'pool__createdAtBlockNumber',
  PoolCreatedAtTimestamp = 'pool__createdAtTimestamp',
  PoolFeeGrowthGlobal0X128 = 'pool__feeGrowthGlobal0X128',
  PoolFeeGrowthGlobal1X128 = 'pool__feeGrowthGlobal1X128',
  PoolFeeProtocol = 'pool__feeProtocol',
  PoolFeeTier = 'pool__feeTier',
  PoolFeesUsd = 'pool__feesUSD',
  PoolId = 'pool__id',
  PoolLiquidity = 'pool__liquidity',
  PoolLiquidityProviderCount = 'pool__liquidityProviderCount',
  PoolObservationIndex = 'pool__observationIndex',
  PoolProtocolFeesUsd = 'pool__protocolFeesUSD',
  PoolSqrtPrice = 'pool__sqrtPrice',
  PoolTick = 'pool__tick',
  PoolToken0Price = 'pool__token0Price',
  PoolToken1Price = 'pool__token1Price',
  PoolTotalValueLockedEth = 'pool__totalValueLockedETH',
  PoolTotalValueLockedEthUntracked = 'pool__totalValueLockedETHUntracked',
  PoolTotalValueLockedToken0 = 'pool__totalValueLockedToken0',
  PoolTotalValueLockedToken1 = 'pool__totalValueLockedToken1',
  PoolTotalValueLockedUsd = 'pool__totalValueLockedUSD',
  PoolTotalValueLockedUsdUntracked = 'pool__totalValueLockedUSDUntracked',
  PoolTxCount = 'pool__txCount',
  PoolUntrackedVolumeUsd = 'pool__untrackedVolumeUSD',
  PoolVolumeToken0 = 'pool__volumeToken0',
  PoolVolumeToken1 = 'pool__volumeToken1',
  PoolVolumeUsd = 'pool__volumeUSD',
  ProtocolFeesUsd = 'protocolFeesUSD',
  SqrtPrice = 'sqrtPrice',
  Tick = 'tick',
  Token0Price = 'token0Price',
  Token1Price = 'token1Price',
  TvlUsd = 'tvlUSD',
  TxCount = 'txCount',
  VolumeToken0 = 'volumeToken0',
  VolumeToken1 = 'volumeToken1',
  VolumeUsd = 'volumeUSD'
}

export type Pool30MinuteCandleData = {
  __typename?: 'Pool30MinuteCandleData';
  close0: Scalars['BigDecimal']['output'];
  close1: Scalars['BigDecimal']['output'];
  feeGrowthGlobal0X128: Scalars['BigInt']['output'];
  feeGrowthGlobal1X128: Scalars['BigInt']['output'];
  feesUSD: Scalars['BigDecimal']['output'];
  high0: Scalars['BigDecimal']['output'];
  high1: Scalars['BigDecimal']['output'];
  id: Scalars['ID']['output'];
  liquidity: Scalars['BigInt']['output'];
  low0: Scalars['BigDecimal']['output'];
  low1: Scalars['BigDecimal']['output'];
  open0: Scalars['BigDecimal']['output'];
  open1: Scalars['BigDecimal']['output'];
  periodStartUnix: Scalars['Int']['output'];
  pool: Pool;
  protocolFeesUSD: Scalars['BigDecimal']['output'];
  sqrtPrice: Scalars['BigInt']['output'];
  tick?: Maybe<Scalars['BigInt']['output']>;
  token0Price: Scalars['BigDecimal']['output'];
  token1Price: Scalars['BigDecimal']['output'];
  tvlUSD: Scalars['BigDecimal']['output'];
  txCount: Scalars['BigInt']['output'];
  volumeToken0: Scalars['BigDecimal']['output'];
  volumeToken1: Scalars['BigDecimal']['output'];
  volumeUSD: Scalars['BigDecimal']['output'];
};

export type Pool30MinuteCandleData_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Pool30MinuteCandleData_Filter>>>;
  close0?: InputMaybe<Scalars['BigDecimal']['input']>;
  close0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  close0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  close0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  close0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  close0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  close0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  close0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  close1?: InputMaybe<Scalars['BigDecimal']['input']>;
  close1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  close1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  close1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  close1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  close1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  close1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  close1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  feeGrowthGlobal0X128?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_gt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_gte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeGrowthGlobal0X128_lt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_lte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_not?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeGrowthGlobal1X128?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_gt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_gte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeGrowthGlobal1X128_lt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_lte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_not?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feesUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  feesUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  high0?: InputMaybe<Scalars['BigDecimal']['input']>;
  high0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  high0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  high0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  high0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  high0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  high0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  high0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  high1?: InputMaybe<Scalars['BigDecimal']['input']>;
  high1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  high1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  high1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  high1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  high1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  high1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  high1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  liquidity?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  low0?: InputMaybe<Scalars['BigDecimal']['input']>;
  low0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  low0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  low0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  low0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  low0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  low0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  low0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  low1?: InputMaybe<Scalars['BigDecimal']['input']>;
  low1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  low1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  low1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  low1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  low1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  low1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  low1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  open0?: InputMaybe<Scalars['BigDecimal']['input']>;
  open0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  open0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  open0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  open0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  open0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  open0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  open0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  open1?: InputMaybe<Scalars['BigDecimal']['input']>;
  open1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  open1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  open1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  open1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  open1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  open1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  open1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Pool30MinuteCandleData_Filter>>>;
  periodStartUnix?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_gt?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_gte?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  periodStartUnix_lt?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_lte?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_not?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  protocolFeesUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  protocolFeesUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sqrtPrice?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sqrtPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tick?: InputMaybe<Scalars['BigInt']['input']>;
  tick_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tick_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tick_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tick_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tick_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tick_not?: InputMaybe<Scalars['BigInt']['input']>;
  tick_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token0Price?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token0Price_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token1Price?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token1Price_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tvlUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tvlUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  txCount?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  txCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volumeToken0?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeToken0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeToken1?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeToken1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export enum Pool30MinuteCandleData_OrderBy {
  Close0 = 'close0',
  Close1 = 'close1',
  FeeGrowthGlobal0X128 = 'feeGrowthGlobal0X128',
  FeeGrowthGlobal1X128 = 'feeGrowthGlobal1X128',
  FeesUsd = 'feesUSD',
  High0 = 'high0',
  High1 = 'high1',
  Id = 'id',
  Liquidity = 'liquidity',
  Low0 = 'low0',
  Low1 = 'low1',
  Open0 = 'open0',
  Open1 = 'open1',
  PeriodStartUnix = 'periodStartUnix',
  Pool = 'pool',
  PoolCollectedFeesToken0 = 'pool__collectedFeesToken0',
  PoolCollectedFeesToken1 = 'pool__collectedFeesToken1',
  PoolCollectedFeesUsd = 'pool__collectedFeesUSD',
  PoolCreatedAtBlockNumber = 'pool__createdAtBlockNumber',
  PoolCreatedAtTimestamp = 'pool__createdAtTimestamp',
  PoolFeeGrowthGlobal0X128 = 'pool__feeGrowthGlobal0X128',
  PoolFeeGrowthGlobal1X128 = 'pool__feeGrowthGlobal1X128',
  PoolFeeProtocol = 'pool__feeProtocol',
  PoolFeeTier = 'pool__feeTier',
  PoolFeesUsd = 'pool__feesUSD',
  PoolId = 'pool__id',
  PoolLiquidity = 'pool__liquidity',
  PoolLiquidityProviderCount = 'pool__liquidityProviderCount',
  PoolObservationIndex = 'pool__observationIndex',
  PoolProtocolFeesUsd = 'pool__protocolFeesUSD',
  PoolSqrtPrice = 'pool__sqrtPrice',
  PoolTick = 'pool__tick',
  PoolToken0Price = 'pool__token0Price',
  PoolToken1Price = 'pool__token1Price',
  PoolTotalValueLockedEth = 'pool__totalValueLockedETH',
  PoolTotalValueLockedEthUntracked = 'pool__totalValueLockedETHUntracked',
  PoolTotalValueLockedToken0 = 'pool__totalValueLockedToken0',
  PoolTotalValueLockedToken1 = 'pool__totalValueLockedToken1',
  PoolTotalValueLockedUsd = 'pool__totalValueLockedUSD',
  PoolTotalValueLockedUsdUntracked = 'pool__totalValueLockedUSDUntracked',
  PoolTxCount = 'pool__txCount',
  PoolUntrackedVolumeUsd = 'pool__untrackedVolumeUSD',
  PoolVolumeToken0 = 'pool__volumeToken0',
  PoolVolumeToken1 = 'pool__volumeToken1',
  PoolVolumeUsd = 'pool__volumeUSD',
  ProtocolFeesUsd = 'protocolFeesUSD',
  SqrtPrice = 'sqrtPrice',
  Tick = 'tick',
  Token0Price = 'token0Price',
  Token1Price = 'token1Price',
  TvlUsd = 'tvlUSD',
  TxCount = 'txCount',
  VolumeToken0 = 'volumeToken0',
  VolumeToken1 = 'volumeToken1',
  VolumeUsd = 'volumeUSD'
}

export type PoolDayCandleData = {
  __typename?: 'PoolDayCandleData';
  close0: Scalars['BigDecimal']['output'];
  close1: Scalars['BigDecimal']['output'];
  date: Scalars['Int']['output'];
  feeGrowthGlobal0X128: Scalars['BigInt']['output'];
  feeGrowthGlobal1X128: Scalars['BigInt']['output'];
  feesUSD: Scalars['BigDecimal']['output'];
  high0: Scalars['BigDecimal']['output'];
  high1: Scalars['BigDecimal']['output'];
  id: Scalars['ID']['output'];
  liquidity: Scalars['BigInt']['output'];
  low0: Scalars['BigDecimal']['output'];
  low1: Scalars['BigDecimal']['output'];
  open0: Scalars['BigDecimal']['output'];
  open1: Scalars['BigDecimal']['output'];
  pool: Pool;
  protocolFeesUSD: Scalars['BigDecimal']['output'];
  sqrtPrice: Scalars['BigInt']['output'];
  tick?: Maybe<Scalars['BigInt']['output']>;
  token0Price: Scalars['BigDecimal']['output'];
  token1Price: Scalars['BigDecimal']['output'];
  tvlUSD: Scalars['BigDecimal']['output'];
  txCount: Scalars['BigInt']['output'];
  volumeToken0: Scalars['BigDecimal']['output'];
  volumeToken1: Scalars['BigDecimal']['output'];
  volumeUSD: Scalars['BigDecimal']['output'];
};

export type PoolDayCandleData_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PoolDayCandleData_Filter>>>;
  close0?: InputMaybe<Scalars['BigDecimal']['input']>;
  close0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  close0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  close0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  close0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  close0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  close0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  close0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  close1?: InputMaybe<Scalars['BigDecimal']['input']>;
  close1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  close1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  close1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  close1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  close1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  close1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  close1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  date?: InputMaybe<Scalars['Int']['input']>;
  date_gt?: InputMaybe<Scalars['Int']['input']>;
  date_gte?: InputMaybe<Scalars['Int']['input']>;
  date_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  date_lt?: InputMaybe<Scalars['Int']['input']>;
  date_lte?: InputMaybe<Scalars['Int']['input']>;
  date_not?: InputMaybe<Scalars['Int']['input']>;
  date_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  feeGrowthGlobal0X128?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_gt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_gte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeGrowthGlobal0X128_lt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_lte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_not?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeGrowthGlobal1X128?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_gt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_gte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeGrowthGlobal1X128_lt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_lte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_not?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feesUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  feesUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  high0?: InputMaybe<Scalars['BigDecimal']['input']>;
  high0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  high0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  high0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  high0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  high0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  high0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  high0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  high1?: InputMaybe<Scalars['BigDecimal']['input']>;
  high1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  high1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  high1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  high1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  high1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  high1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  high1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  liquidity?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  low0?: InputMaybe<Scalars['BigDecimal']['input']>;
  low0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  low0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  low0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  low0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  low0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  low0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  low0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  low1?: InputMaybe<Scalars['BigDecimal']['input']>;
  low1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  low1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  low1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  low1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  low1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  low1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  low1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  open0?: InputMaybe<Scalars['BigDecimal']['input']>;
  open0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  open0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  open0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  open0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  open0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  open0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  open0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  open1?: InputMaybe<Scalars['BigDecimal']['input']>;
  open1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  open1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  open1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  open1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  open1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  open1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  open1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  or?: InputMaybe<Array<InputMaybe<PoolDayCandleData_Filter>>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  protocolFeesUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  protocolFeesUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sqrtPrice?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sqrtPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tick?: InputMaybe<Scalars['BigInt']['input']>;
  tick_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tick_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tick_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tick_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tick_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tick_not?: InputMaybe<Scalars['BigInt']['input']>;
  tick_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token0Price?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token0Price_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token1Price?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token1Price_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tvlUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tvlUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  txCount?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  txCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volumeToken0?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeToken0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeToken1?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeToken1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export enum PoolDayCandleData_OrderBy {
  Close0 = 'close0',
  Close1 = 'close1',
  Date = 'date',
  FeeGrowthGlobal0X128 = 'feeGrowthGlobal0X128',
  FeeGrowthGlobal1X128 = 'feeGrowthGlobal1X128',
  FeesUsd = 'feesUSD',
  High0 = 'high0',
  High1 = 'high1',
  Id = 'id',
  Liquidity = 'liquidity',
  Low0 = 'low0',
  Low1 = 'low1',
  Open0 = 'open0',
  Open1 = 'open1',
  Pool = 'pool',
  PoolCollectedFeesToken0 = 'pool__collectedFeesToken0',
  PoolCollectedFeesToken1 = 'pool__collectedFeesToken1',
  PoolCollectedFeesUsd = 'pool__collectedFeesUSD',
  PoolCreatedAtBlockNumber = 'pool__createdAtBlockNumber',
  PoolCreatedAtTimestamp = 'pool__createdAtTimestamp',
  PoolFeeGrowthGlobal0X128 = 'pool__feeGrowthGlobal0X128',
  PoolFeeGrowthGlobal1X128 = 'pool__feeGrowthGlobal1X128',
  PoolFeeProtocol = 'pool__feeProtocol',
  PoolFeeTier = 'pool__feeTier',
  PoolFeesUsd = 'pool__feesUSD',
  PoolId = 'pool__id',
  PoolLiquidity = 'pool__liquidity',
  PoolLiquidityProviderCount = 'pool__liquidityProviderCount',
  PoolObservationIndex = 'pool__observationIndex',
  PoolProtocolFeesUsd = 'pool__protocolFeesUSD',
  PoolSqrtPrice = 'pool__sqrtPrice',
  PoolTick = 'pool__tick',
  PoolToken0Price = 'pool__token0Price',
  PoolToken1Price = 'pool__token1Price',
  PoolTotalValueLockedEth = 'pool__totalValueLockedETH',
  PoolTotalValueLockedEthUntracked = 'pool__totalValueLockedETHUntracked',
  PoolTotalValueLockedToken0 = 'pool__totalValueLockedToken0',
  PoolTotalValueLockedToken1 = 'pool__totalValueLockedToken1',
  PoolTotalValueLockedUsd = 'pool__totalValueLockedUSD',
  PoolTotalValueLockedUsdUntracked = 'pool__totalValueLockedUSDUntracked',
  PoolTxCount = 'pool__txCount',
  PoolUntrackedVolumeUsd = 'pool__untrackedVolumeUSD',
  PoolVolumeToken0 = 'pool__volumeToken0',
  PoolVolumeToken1 = 'pool__volumeToken1',
  PoolVolumeUsd = 'pool__volumeUSD',
  ProtocolFeesUsd = 'protocolFeesUSD',
  SqrtPrice = 'sqrtPrice',
  Tick = 'tick',
  Token0Price = 'token0Price',
  Token1Price = 'token1Price',
  TvlUsd = 'tvlUSD',
  TxCount = 'txCount',
  VolumeToken0 = 'volumeToken0',
  VolumeToken1 = 'volumeToken1',
  VolumeUsd = 'volumeUSD'
}

export type PoolDayData = {
  __typename?: 'PoolDayData';
  close: Scalars['BigDecimal']['output'];
  date: Scalars['Int']['output'];
  feeGrowthGlobal0X128: Scalars['BigInt']['output'];
  feeGrowthGlobal1X128: Scalars['BigInt']['output'];
  feesUSD: Scalars['BigDecimal']['output'];
  high: Scalars['BigDecimal']['output'];
  id: Scalars['ID']['output'];
  liquidity: Scalars['BigInt']['output'];
  low: Scalars['BigDecimal']['output'];
  open: Scalars['BigDecimal']['output'];
  pool: Pool;
  protocolFeesUSD: Scalars['BigDecimal']['output'];
  sqrtPrice: Scalars['BigInt']['output'];
  tick?: Maybe<Scalars['BigInt']['output']>;
  token0Price: Scalars['BigDecimal']['output'];
  token1Price: Scalars['BigDecimal']['output'];
  tvlUSD: Scalars['BigDecimal']['output'];
  txCount: Scalars['BigInt']['output'];
  volumeToken0: Scalars['BigDecimal']['output'];
  volumeToken1: Scalars['BigDecimal']['output'];
  volumeUSD: Scalars['BigDecimal']['output'];
};

export type PoolDayData_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PoolDayData_Filter>>>;
  close?: InputMaybe<Scalars['BigDecimal']['input']>;
  close_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  close_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  close_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  close_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  close_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  close_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  close_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  date?: InputMaybe<Scalars['Int']['input']>;
  date_gt?: InputMaybe<Scalars['Int']['input']>;
  date_gte?: InputMaybe<Scalars['Int']['input']>;
  date_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  date_lt?: InputMaybe<Scalars['Int']['input']>;
  date_lte?: InputMaybe<Scalars['Int']['input']>;
  date_not?: InputMaybe<Scalars['Int']['input']>;
  date_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  feeGrowthGlobal0X128?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_gt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_gte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeGrowthGlobal0X128_lt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_lte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_not?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeGrowthGlobal1X128?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_gt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_gte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeGrowthGlobal1X128_lt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_lte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_not?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feesUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  feesUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  high?: InputMaybe<Scalars['BigDecimal']['input']>;
  high_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  high_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  high_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  high_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  high_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  high_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  high_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  liquidity?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  low?: InputMaybe<Scalars['BigDecimal']['input']>;
  low_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  low_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  low_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  low_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  low_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  low_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  low_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  open?: InputMaybe<Scalars['BigDecimal']['input']>;
  open_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  open_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  open_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  open_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  open_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  open_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  open_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  or?: InputMaybe<Array<InputMaybe<PoolDayData_Filter>>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  protocolFeesUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  protocolFeesUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sqrtPrice?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sqrtPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tick?: InputMaybe<Scalars['BigInt']['input']>;
  tick_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tick_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tick_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tick_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tick_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tick_not?: InputMaybe<Scalars['BigInt']['input']>;
  tick_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token0Price?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token0Price_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token1Price?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token1Price_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tvlUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tvlUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  txCount?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  txCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volumeToken0?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeToken0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeToken1?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeToken1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export enum PoolDayData_OrderBy {
  Close = 'close',
  Date = 'date',
  FeeGrowthGlobal0X128 = 'feeGrowthGlobal0X128',
  FeeGrowthGlobal1X128 = 'feeGrowthGlobal1X128',
  FeesUsd = 'feesUSD',
  High = 'high',
  Id = 'id',
  Liquidity = 'liquidity',
  Low = 'low',
  Open = 'open',
  Pool = 'pool',
  PoolCollectedFeesToken0 = 'pool__collectedFeesToken0',
  PoolCollectedFeesToken1 = 'pool__collectedFeesToken1',
  PoolCollectedFeesUsd = 'pool__collectedFeesUSD',
  PoolCreatedAtBlockNumber = 'pool__createdAtBlockNumber',
  PoolCreatedAtTimestamp = 'pool__createdAtTimestamp',
  PoolFeeGrowthGlobal0X128 = 'pool__feeGrowthGlobal0X128',
  PoolFeeGrowthGlobal1X128 = 'pool__feeGrowthGlobal1X128',
  PoolFeeProtocol = 'pool__feeProtocol',
  PoolFeeTier = 'pool__feeTier',
  PoolFeesUsd = 'pool__feesUSD',
  PoolId = 'pool__id',
  PoolLiquidity = 'pool__liquidity',
  PoolLiquidityProviderCount = 'pool__liquidityProviderCount',
  PoolObservationIndex = 'pool__observationIndex',
  PoolProtocolFeesUsd = 'pool__protocolFeesUSD',
  PoolSqrtPrice = 'pool__sqrtPrice',
  PoolTick = 'pool__tick',
  PoolToken0Price = 'pool__token0Price',
  PoolToken1Price = 'pool__token1Price',
  PoolTotalValueLockedEth = 'pool__totalValueLockedETH',
  PoolTotalValueLockedEthUntracked = 'pool__totalValueLockedETHUntracked',
  PoolTotalValueLockedToken0 = 'pool__totalValueLockedToken0',
  PoolTotalValueLockedToken1 = 'pool__totalValueLockedToken1',
  PoolTotalValueLockedUsd = 'pool__totalValueLockedUSD',
  PoolTotalValueLockedUsdUntracked = 'pool__totalValueLockedUSDUntracked',
  PoolTxCount = 'pool__txCount',
  PoolUntrackedVolumeUsd = 'pool__untrackedVolumeUSD',
  PoolVolumeToken0 = 'pool__volumeToken0',
  PoolVolumeToken1 = 'pool__volumeToken1',
  PoolVolumeUsd = 'pool__volumeUSD',
  ProtocolFeesUsd = 'protocolFeesUSD',
  SqrtPrice = 'sqrtPrice',
  Tick = 'tick',
  Token0Price = 'token0Price',
  Token1Price = 'token1Price',
  TvlUsd = 'tvlUSD',
  TxCount = 'txCount',
  VolumeToken0 = 'volumeToken0',
  VolumeToken1 = 'volumeToken1',
  VolumeUsd = 'volumeUSD'
}

export type PoolHourCandleData = {
  __typename?: 'PoolHourCandleData';
  close0: Scalars['BigDecimal']['output'];
  close1: Scalars['BigDecimal']['output'];
  feeGrowthGlobal0X128: Scalars['BigInt']['output'];
  feeGrowthGlobal1X128: Scalars['BigInt']['output'];
  feesUSD: Scalars['BigDecimal']['output'];
  high0: Scalars['BigDecimal']['output'];
  high1: Scalars['BigDecimal']['output'];
  id: Scalars['ID']['output'];
  liquidity: Scalars['BigInt']['output'];
  low0: Scalars['BigDecimal']['output'];
  low1: Scalars['BigDecimal']['output'];
  open0: Scalars['BigDecimal']['output'];
  open1: Scalars['BigDecimal']['output'];
  periodStartUnix: Scalars['Int']['output'];
  pool: Pool;
  protocolFeesUSD: Scalars['BigDecimal']['output'];
  sqrtPrice: Scalars['BigInt']['output'];
  tick?: Maybe<Scalars['BigInt']['output']>;
  token0Price: Scalars['BigDecimal']['output'];
  token1Price: Scalars['BigDecimal']['output'];
  tvlUSD: Scalars['BigDecimal']['output'];
  txCount: Scalars['BigInt']['output'];
  volumeToken0: Scalars['BigDecimal']['output'];
  volumeToken1: Scalars['BigDecimal']['output'];
  volumeUSD: Scalars['BigDecimal']['output'];
};

export type PoolHourCandleData_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PoolHourCandleData_Filter>>>;
  close0?: InputMaybe<Scalars['BigDecimal']['input']>;
  close0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  close0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  close0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  close0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  close0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  close0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  close0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  close1?: InputMaybe<Scalars['BigDecimal']['input']>;
  close1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  close1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  close1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  close1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  close1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  close1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  close1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  feeGrowthGlobal0X128?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_gt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_gte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeGrowthGlobal0X128_lt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_lte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_not?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeGrowthGlobal1X128?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_gt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_gte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeGrowthGlobal1X128_lt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_lte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_not?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feesUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  feesUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  high0?: InputMaybe<Scalars['BigDecimal']['input']>;
  high0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  high0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  high0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  high0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  high0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  high0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  high0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  high1?: InputMaybe<Scalars['BigDecimal']['input']>;
  high1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  high1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  high1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  high1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  high1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  high1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  high1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  liquidity?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  low0?: InputMaybe<Scalars['BigDecimal']['input']>;
  low0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  low0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  low0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  low0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  low0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  low0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  low0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  low1?: InputMaybe<Scalars['BigDecimal']['input']>;
  low1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  low1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  low1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  low1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  low1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  low1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  low1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  open0?: InputMaybe<Scalars['BigDecimal']['input']>;
  open0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  open0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  open0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  open0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  open0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  open0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  open0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  open1?: InputMaybe<Scalars['BigDecimal']['input']>;
  open1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  open1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  open1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  open1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  open1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  open1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  open1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  or?: InputMaybe<Array<InputMaybe<PoolHourCandleData_Filter>>>;
  periodStartUnix?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_gt?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_gte?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  periodStartUnix_lt?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_lte?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_not?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  protocolFeesUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  protocolFeesUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sqrtPrice?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sqrtPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tick?: InputMaybe<Scalars['BigInt']['input']>;
  tick_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tick_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tick_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tick_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tick_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tick_not?: InputMaybe<Scalars['BigInt']['input']>;
  tick_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token0Price?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token0Price_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token1Price?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token1Price_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tvlUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tvlUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  txCount?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  txCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volumeToken0?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeToken0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeToken1?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeToken1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export enum PoolHourCandleData_OrderBy {
  Close0 = 'close0',
  Close1 = 'close1',
  FeeGrowthGlobal0X128 = 'feeGrowthGlobal0X128',
  FeeGrowthGlobal1X128 = 'feeGrowthGlobal1X128',
  FeesUsd = 'feesUSD',
  High0 = 'high0',
  High1 = 'high1',
  Id = 'id',
  Liquidity = 'liquidity',
  Low0 = 'low0',
  Low1 = 'low1',
  Open0 = 'open0',
  Open1 = 'open1',
  PeriodStartUnix = 'periodStartUnix',
  Pool = 'pool',
  PoolCollectedFeesToken0 = 'pool__collectedFeesToken0',
  PoolCollectedFeesToken1 = 'pool__collectedFeesToken1',
  PoolCollectedFeesUsd = 'pool__collectedFeesUSD',
  PoolCreatedAtBlockNumber = 'pool__createdAtBlockNumber',
  PoolCreatedAtTimestamp = 'pool__createdAtTimestamp',
  PoolFeeGrowthGlobal0X128 = 'pool__feeGrowthGlobal0X128',
  PoolFeeGrowthGlobal1X128 = 'pool__feeGrowthGlobal1X128',
  PoolFeeProtocol = 'pool__feeProtocol',
  PoolFeeTier = 'pool__feeTier',
  PoolFeesUsd = 'pool__feesUSD',
  PoolId = 'pool__id',
  PoolLiquidity = 'pool__liquidity',
  PoolLiquidityProviderCount = 'pool__liquidityProviderCount',
  PoolObservationIndex = 'pool__observationIndex',
  PoolProtocolFeesUsd = 'pool__protocolFeesUSD',
  PoolSqrtPrice = 'pool__sqrtPrice',
  PoolTick = 'pool__tick',
  PoolToken0Price = 'pool__token0Price',
  PoolToken1Price = 'pool__token1Price',
  PoolTotalValueLockedEth = 'pool__totalValueLockedETH',
  PoolTotalValueLockedEthUntracked = 'pool__totalValueLockedETHUntracked',
  PoolTotalValueLockedToken0 = 'pool__totalValueLockedToken0',
  PoolTotalValueLockedToken1 = 'pool__totalValueLockedToken1',
  PoolTotalValueLockedUsd = 'pool__totalValueLockedUSD',
  PoolTotalValueLockedUsdUntracked = 'pool__totalValueLockedUSDUntracked',
  PoolTxCount = 'pool__txCount',
  PoolUntrackedVolumeUsd = 'pool__untrackedVolumeUSD',
  PoolVolumeToken0 = 'pool__volumeToken0',
  PoolVolumeToken1 = 'pool__volumeToken1',
  PoolVolumeUsd = 'pool__volumeUSD',
  ProtocolFeesUsd = 'protocolFeesUSD',
  SqrtPrice = 'sqrtPrice',
  Tick = 'tick',
  Token0Price = 'token0Price',
  Token1Price = 'token1Price',
  TvlUsd = 'tvlUSD',
  TxCount = 'txCount',
  VolumeToken0 = 'volumeToken0',
  VolumeToken1 = 'volumeToken1',
  VolumeUsd = 'volumeUSD'
}

export type PoolHourData = {
  __typename?: 'PoolHourData';
  close: Scalars['BigDecimal']['output'];
  feeGrowthGlobal0X128: Scalars['BigInt']['output'];
  feeGrowthGlobal1X128: Scalars['BigInt']['output'];
  feesUSD: Scalars['BigDecimal']['output'];
  high: Scalars['BigDecimal']['output'];
  id: Scalars['ID']['output'];
  liquidity: Scalars['BigInt']['output'];
  low: Scalars['BigDecimal']['output'];
  open: Scalars['BigDecimal']['output'];
  periodStartUnix: Scalars['Int']['output'];
  pool: Pool;
  protocolFeesUSD: Scalars['BigDecimal']['output'];
  sqrtPrice: Scalars['BigInt']['output'];
  tick?: Maybe<Scalars['BigInt']['output']>;
  token0Price: Scalars['BigDecimal']['output'];
  token1Price: Scalars['BigDecimal']['output'];
  tvlUSD: Scalars['BigDecimal']['output'];
  txCount: Scalars['BigInt']['output'];
  volumeToken0: Scalars['BigDecimal']['output'];
  volumeToken1: Scalars['BigDecimal']['output'];
  volumeUSD: Scalars['BigDecimal']['output'];
};

export type PoolHourData_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PoolHourData_Filter>>>;
  close?: InputMaybe<Scalars['BigDecimal']['input']>;
  close_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  close_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  close_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  close_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  close_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  close_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  close_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  feeGrowthGlobal0X128?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_gt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_gte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeGrowthGlobal0X128_lt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_lte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_not?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeGrowthGlobal1X128?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_gt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_gte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeGrowthGlobal1X128_lt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_lte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_not?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feesUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  feesUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  high?: InputMaybe<Scalars['BigDecimal']['input']>;
  high_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  high_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  high_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  high_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  high_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  high_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  high_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  liquidity?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  low?: InputMaybe<Scalars['BigDecimal']['input']>;
  low_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  low_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  low_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  low_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  low_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  low_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  low_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  open?: InputMaybe<Scalars['BigDecimal']['input']>;
  open_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  open_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  open_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  open_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  open_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  open_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  open_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  or?: InputMaybe<Array<InputMaybe<PoolHourData_Filter>>>;
  periodStartUnix?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_gt?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_gte?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  periodStartUnix_lt?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_lte?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_not?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  protocolFeesUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  protocolFeesUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sqrtPrice?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sqrtPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tick?: InputMaybe<Scalars['BigInt']['input']>;
  tick_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tick_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tick_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tick_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tick_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tick_not?: InputMaybe<Scalars['BigInt']['input']>;
  tick_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token0Price?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token0Price_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token1Price?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token1Price_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tvlUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tvlUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  txCount?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  txCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volumeToken0?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeToken0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeToken1?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeToken1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export enum PoolHourData_OrderBy {
  Close = 'close',
  FeeGrowthGlobal0X128 = 'feeGrowthGlobal0X128',
  FeeGrowthGlobal1X128 = 'feeGrowthGlobal1X128',
  FeesUsd = 'feesUSD',
  High = 'high',
  Id = 'id',
  Liquidity = 'liquidity',
  Low = 'low',
  Open = 'open',
  PeriodStartUnix = 'periodStartUnix',
  Pool = 'pool',
  PoolCollectedFeesToken0 = 'pool__collectedFeesToken0',
  PoolCollectedFeesToken1 = 'pool__collectedFeesToken1',
  PoolCollectedFeesUsd = 'pool__collectedFeesUSD',
  PoolCreatedAtBlockNumber = 'pool__createdAtBlockNumber',
  PoolCreatedAtTimestamp = 'pool__createdAtTimestamp',
  PoolFeeGrowthGlobal0X128 = 'pool__feeGrowthGlobal0X128',
  PoolFeeGrowthGlobal1X128 = 'pool__feeGrowthGlobal1X128',
  PoolFeeProtocol = 'pool__feeProtocol',
  PoolFeeTier = 'pool__feeTier',
  PoolFeesUsd = 'pool__feesUSD',
  PoolId = 'pool__id',
  PoolLiquidity = 'pool__liquidity',
  PoolLiquidityProviderCount = 'pool__liquidityProviderCount',
  PoolObservationIndex = 'pool__observationIndex',
  PoolProtocolFeesUsd = 'pool__protocolFeesUSD',
  PoolSqrtPrice = 'pool__sqrtPrice',
  PoolTick = 'pool__tick',
  PoolToken0Price = 'pool__token0Price',
  PoolToken1Price = 'pool__token1Price',
  PoolTotalValueLockedEth = 'pool__totalValueLockedETH',
  PoolTotalValueLockedEthUntracked = 'pool__totalValueLockedETHUntracked',
  PoolTotalValueLockedToken0 = 'pool__totalValueLockedToken0',
  PoolTotalValueLockedToken1 = 'pool__totalValueLockedToken1',
  PoolTotalValueLockedUsd = 'pool__totalValueLockedUSD',
  PoolTotalValueLockedUsdUntracked = 'pool__totalValueLockedUSDUntracked',
  PoolTxCount = 'pool__txCount',
  PoolUntrackedVolumeUsd = 'pool__untrackedVolumeUSD',
  PoolVolumeToken0 = 'pool__volumeToken0',
  PoolVolumeToken1 = 'pool__volumeToken1',
  PoolVolumeUsd = 'pool__volumeUSD',
  ProtocolFeesUsd = 'protocolFeesUSD',
  SqrtPrice = 'sqrtPrice',
  Tick = 'tick',
  Token0Price = 'token0Price',
  Token1Price = 'token1Price',
  TvlUsd = 'tvlUSD',
  TxCount = 'txCount',
  VolumeToken0 = 'volumeToken0',
  VolumeToken1 = 'volumeToken1',
  VolumeUsd = 'volumeUSD'
}

export type PoolMinuteCandleData = {
  __typename?: 'PoolMinuteCandleData';
  close0: Scalars['BigDecimal']['output'];
  close1: Scalars['BigDecimal']['output'];
  feeGrowthGlobal0X128: Scalars['BigInt']['output'];
  feeGrowthGlobal1X128: Scalars['BigInt']['output'];
  feesUSD: Scalars['BigDecimal']['output'];
  high0: Scalars['BigDecimal']['output'];
  high1: Scalars['BigDecimal']['output'];
  id: Scalars['ID']['output'];
  liquidity: Scalars['BigInt']['output'];
  low0: Scalars['BigDecimal']['output'];
  low1: Scalars['BigDecimal']['output'];
  open0: Scalars['BigDecimal']['output'];
  open1: Scalars['BigDecimal']['output'];
  periodStartUnix: Scalars['Int']['output'];
  pool: Pool;
  protocolFeesUSD: Scalars['BigDecimal']['output'];
  sqrtPrice: Scalars['BigInt']['output'];
  tick?: Maybe<Scalars['BigInt']['output']>;
  token0Price: Scalars['BigDecimal']['output'];
  token1Price: Scalars['BigDecimal']['output'];
  tvlUSD: Scalars['BigDecimal']['output'];
  txCount: Scalars['BigInt']['output'];
  volumeToken0: Scalars['BigDecimal']['output'];
  volumeToken1: Scalars['BigDecimal']['output'];
  volumeUSD: Scalars['BigDecimal']['output'];
};

export type PoolMinuteCandleData_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PoolMinuteCandleData_Filter>>>;
  close0?: InputMaybe<Scalars['BigDecimal']['input']>;
  close0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  close0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  close0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  close0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  close0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  close0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  close0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  close1?: InputMaybe<Scalars['BigDecimal']['input']>;
  close1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  close1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  close1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  close1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  close1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  close1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  close1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  feeGrowthGlobal0X128?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_gt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_gte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeGrowthGlobal0X128_lt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_lte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_not?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeGrowthGlobal1X128?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_gt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_gte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeGrowthGlobal1X128_lt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_lte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_not?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feesUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  feesUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  high0?: InputMaybe<Scalars['BigDecimal']['input']>;
  high0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  high0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  high0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  high0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  high0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  high0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  high0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  high1?: InputMaybe<Scalars['BigDecimal']['input']>;
  high1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  high1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  high1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  high1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  high1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  high1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  high1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  liquidity?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  low0?: InputMaybe<Scalars['BigDecimal']['input']>;
  low0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  low0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  low0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  low0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  low0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  low0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  low0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  low1?: InputMaybe<Scalars['BigDecimal']['input']>;
  low1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  low1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  low1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  low1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  low1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  low1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  low1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  open0?: InputMaybe<Scalars['BigDecimal']['input']>;
  open0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  open0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  open0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  open0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  open0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  open0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  open0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  open1?: InputMaybe<Scalars['BigDecimal']['input']>;
  open1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  open1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  open1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  open1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  open1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  open1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  open1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  or?: InputMaybe<Array<InputMaybe<PoolMinuteCandleData_Filter>>>;
  periodStartUnix?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_gt?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_gte?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  periodStartUnix_lt?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_lte?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_not?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  protocolFeesUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  protocolFeesUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sqrtPrice?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sqrtPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tick?: InputMaybe<Scalars['BigInt']['input']>;
  tick_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tick_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tick_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tick_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tick_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tick_not?: InputMaybe<Scalars['BigInt']['input']>;
  tick_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token0Price?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token0Price_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token1Price?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token1Price_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tvlUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tvlUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  txCount?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  txCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volumeToken0?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeToken0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeToken1?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeToken1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export enum PoolMinuteCandleData_OrderBy {
  Close0 = 'close0',
  Close1 = 'close1',
  FeeGrowthGlobal0X128 = 'feeGrowthGlobal0X128',
  FeeGrowthGlobal1X128 = 'feeGrowthGlobal1X128',
  FeesUsd = 'feesUSD',
  High0 = 'high0',
  High1 = 'high1',
  Id = 'id',
  Liquidity = 'liquidity',
  Low0 = 'low0',
  Low1 = 'low1',
  Open0 = 'open0',
  Open1 = 'open1',
  PeriodStartUnix = 'periodStartUnix',
  Pool = 'pool',
  PoolCollectedFeesToken0 = 'pool__collectedFeesToken0',
  PoolCollectedFeesToken1 = 'pool__collectedFeesToken1',
  PoolCollectedFeesUsd = 'pool__collectedFeesUSD',
  PoolCreatedAtBlockNumber = 'pool__createdAtBlockNumber',
  PoolCreatedAtTimestamp = 'pool__createdAtTimestamp',
  PoolFeeGrowthGlobal0X128 = 'pool__feeGrowthGlobal0X128',
  PoolFeeGrowthGlobal1X128 = 'pool__feeGrowthGlobal1X128',
  PoolFeeProtocol = 'pool__feeProtocol',
  PoolFeeTier = 'pool__feeTier',
  PoolFeesUsd = 'pool__feesUSD',
  PoolId = 'pool__id',
  PoolLiquidity = 'pool__liquidity',
  PoolLiquidityProviderCount = 'pool__liquidityProviderCount',
  PoolObservationIndex = 'pool__observationIndex',
  PoolProtocolFeesUsd = 'pool__protocolFeesUSD',
  PoolSqrtPrice = 'pool__sqrtPrice',
  PoolTick = 'pool__tick',
  PoolToken0Price = 'pool__token0Price',
  PoolToken1Price = 'pool__token1Price',
  PoolTotalValueLockedEth = 'pool__totalValueLockedETH',
  PoolTotalValueLockedEthUntracked = 'pool__totalValueLockedETHUntracked',
  PoolTotalValueLockedToken0 = 'pool__totalValueLockedToken0',
  PoolTotalValueLockedToken1 = 'pool__totalValueLockedToken1',
  PoolTotalValueLockedUsd = 'pool__totalValueLockedUSD',
  PoolTotalValueLockedUsdUntracked = 'pool__totalValueLockedUSDUntracked',
  PoolTxCount = 'pool__txCount',
  PoolUntrackedVolumeUsd = 'pool__untrackedVolumeUSD',
  PoolVolumeToken0 = 'pool__volumeToken0',
  PoolVolumeToken1 = 'pool__volumeToken1',
  PoolVolumeUsd = 'pool__volumeUSD',
  ProtocolFeesUsd = 'protocolFeesUSD',
  SqrtPrice = 'sqrtPrice',
  Tick = 'tick',
  Token0Price = 'token0Price',
  Token1Price = 'token1Price',
  TvlUsd = 'tvlUSD',
  TxCount = 'txCount',
  VolumeToken0 = 'volumeToken0',
  VolumeToken1 = 'volumeToken1',
  VolumeUsd = 'volumeUSD'
}

export type PoolMonthCandleData = {
  __typename?: 'PoolMonthCandleData';
  close0: Scalars['BigDecimal']['output'];
  close1: Scalars['BigDecimal']['output'];
  date: Scalars['Int']['output'];
  feeGrowthGlobal0X128: Scalars['BigInt']['output'];
  feeGrowthGlobal1X128: Scalars['BigInt']['output'];
  feesUSD: Scalars['BigDecimal']['output'];
  high0: Scalars['BigDecimal']['output'];
  high1: Scalars['BigDecimal']['output'];
  id: Scalars['ID']['output'];
  liquidity: Scalars['BigInt']['output'];
  low0: Scalars['BigDecimal']['output'];
  low1: Scalars['BigDecimal']['output'];
  open0: Scalars['BigDecimal']['output'];
  open1: Scalars['BigDecimal']['output'];
  pool: Pool;
  protocolFeesUSD: Scalars['BigDecimal']['output'];
  sqrtPrice: Scalars['BigInt']['output'];
  tick?: Maybe<Scalars['BigInt']['output']>;
  token0Price: Scalars['BigDecimal']['output'];
  token1Price: Scalars['BigDecimal']['output'];
  tvlUSD: Scalars['BigDecimal']['output'];
  txCount: Scalars['BigInt']['output'];
  volumeToken0: Scalars['BigDecimal']['output'];
  volumeToken1: Scalars['BigDecimal']['output'];
  volumeUSD: Scalars['BigDecimal']['output'];
};

export type PoolMonthCandleData_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PoolMonthCandleData_Filter>>>;
  close0?: InputMaybe<Scalars['BigDecimal']['input']>;
  close0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  close0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  close0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  close0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  close0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  close0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  close0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  close1?: InputMaybe<Scalars['BigDecimal']['input']>;
  close1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  close1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  close1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  close1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  close1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  close1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  close1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  date?: InputMaybe<Scalars['Int']['input']>;
  date_gt?: InputMaybe<Scalars['Int']['input']>;
  date_gte?: InputMaybe<Scalars['Int']['input']>;
  date_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  date_lt?: InputMaybe<Scalars['Int']['input']>;
  date_lte?: InputMaybe<Scalars['Int']['input']>;
  date_not?: InputMaybe<Scalars['Int']['input']>;
  date_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  feeGrowthGlobal0X128?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_gt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_gte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeGrowthGlobal0X128_lt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_lte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_not?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeGrowthGlobal1X128?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_gt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_gte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeGrowthGlobal1X128_lt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_lte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_not?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feesUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  feesUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  high0?: InputMaybe<Scalars['BigDecimal']['input']>;
  high0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  high0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  high0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  high0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  high0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  high0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  high0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  high1?: InputMaybe<Scalars['BigDecimal']['input']>;
  high1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  high1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  high1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  high1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  high1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  high1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  high1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  liquidity?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  low0?: InputMaybe<Scalars['BigDecimal']['input']>;
  low0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  low0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  low0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  low0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  low0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  low0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  low0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  low1?: InputMaybe<Scalars['BigDecimal']['input']>;
  low1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  low1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  low1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  low1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  low1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  low1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  low1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  open0?: InputMaybe<Scalars['BigDecimal']['input']>;
  open0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  open0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  open0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  open0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  open0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  open0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  open0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  open1?: InputMaybe<Scalars['BigDecimal']['input']>;
  open1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  open1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  open1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  open1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  open1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  open1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  open1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  or?: InputMaybe<Array<InputMaybe<PoolMonthCandleData_Filter>>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  protocolFeesUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  protocolFeesUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sqrtPrice?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sqrtPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tick?: InputMaybe<Scalars['BigInt']['input']>;
  tick_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tick_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tick_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tick_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tick_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tick_not?: InputMaybe<Scalars['BigInt']['input']>;
  tick_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token0Price?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token0Price_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token1Price?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token1Price_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tvlUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tvlUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  txCount?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  txCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volumeToken0?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeToken0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeToken1?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeToken1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export enum PoolMonthCandleData_OrderBy {
  Close0 = 'close0',
  Close1 = 'close1',
  Date = 'date',
  FeeGrowthGlobal0X128 = 'feeGrowthGlobal0X128',
  FeeGrowthGlobal1X128 = 'feeGrowthGlobal1X128',
  FeesUsd = 'feesUSD',
  High0 = 'high0',
  High1 = 'high1',
  Id = 'id',
  Liquidity = 'liquidity',
  Low0 = 'low0',
  Low1 = 'low1',
  Open0 = 'open0',
  Open1 = 'open1',
  Pool = 'pool',
  PoolCollectedFeesToken0 = 'pool__collectedFeesToken0',
  PoolCollectedFeesToken1 = 'pool__collectedFeesToken1',
  PoolCollectedFeesUsd = 'pool__collectedFeesUSD',
  PoolCreatedAtBlockNumber = 'pool__createdAtBlockNumber',
  PoolCreatedAtTimestamp = 'pool__createdAtTimestamp',
  PoolFeeGrowthGlobal0X128 = 'pool__feeGrowthGlobal0X128',
  PoolFeeGrowthGlobal1X128 = 'pool__feeGrowthGlobal1X128',
  PoolFeeProtocol = 'pool__feeProtocol',
  PoolFeeTier = 'pool__feeTier',
  PoolFeesUsd = 'pool__feesUSD',
  PoolId = 'pool__id',
  PoolLiquidity = 'pool__liquidity',
  PoolLiquidityProviderCount = 'pool__liquidityProviderCount',
  PoolObservationIndex = 'pool__observationIndex',
  PoolProtocolFeesUsd = 'pool__protocolFeesUSD',
  PoolSqrtPrice = 'pool__sqrtPrice',
  PoolTick = 'pool__tick',
  PoolToken0Price = 'pool__token0Price',
  PoolToken1Price = 'pool__token1Price',
  PoolTotalValueLockedEth = 'pool__totalValueLockedETH',
  PoolTotalValueLockedEthUntracked = 'pool__totalValueLockedETHUntracked',
  PoolTotalValueLockedToken0 = 'pool__totalValueLockedToken0',
  PoolTotalValueLockedToken1 = 'pool__totalValueLockedToken1',
  PoolTotalValueLockedUsd = 'pool__totalValueLockedUSD',
  PoolTotalValueLockedUsdUntracked = 'pool__totalValueLockedUSDUntracked',
  PoolTxCount = 'pool__txCount',
  PoolUntrackedVolumeUsd = 'pool__untrackedVolumeUSD',
  PoolVolumeToken0 = 'pool__volumeToken0',
  PoolVolumeToken1 = 'pool__volumeToken1',
  PoolVolumeUsd = 'pool__volumeUSD',
  ProtocolFeesUsd = 'protocolFeesUSD',
  SqrtPrice = 'sqrtPrice',
  Tick = 'tick',
  Token0Price = 'token0Price',
  Token1Price = 'token1Price',
  TvlUsd = 'tvlUSD',
  TxCount = 'txCount',
  VolumeToken0 = 'volumeToken0',
  VolumeToken1 = 'volumeToken1',
  VolumeUsd = 'volumeUSD'
}

export type PoolWeekCandleData = {
  __typename?: 'PoolWeekCandleData';
  close0: Scalars['BigDecimal']['output'];
  close1: Scalars['BigDecimal']['output'];
  date: Scalars['Int']['output'];
  feeGrowthGlobal0X128: Scalars['BigInt']['output'];
  feeGrowthGlobal1X128: Scalars['BigInt']['output'];
  feesUSD: Scalars['BigDecimal']['output'];
  high0: Scalars['BigDecimal']['output'];
  high1: Scalars['BigDecimal']['output'];
  id: Scalars['ID']['output'];
  liquidity: Scalars['BigInt']['output'];
  low0: Scalars['BigDecimal']['output'];
  low1: Scalars['BigDecimal']['output'];
  open0: Scalars['BigDecimal']['output'];
  open1: Scalars['BigDecimal']['output'];
  pool: Pool;
  protocolFeesUSD: Scalars['BigDecimal']['output'];
  sqrtPrice: Scalars['BigInt']['output'];
  tick?: Maybe<Scalars['BigInt']['output']>;
  token0Price: Scalars['BigDecimal']['output'];
  token1Price: Scalars['BigDecimal']['output'];
  tvlUSD: Scalars['BigDecimal']['output'];
  txCount: Scalars['BigInt']['output'];
  volumeToken0: Scalars['BigDecimal']['output'];
  volumeToken1: Scalars['BigDecimal']['output'];
  volumeUSD: Scalars['BigDecimal']['output'];
};

export type PoolWeekCandleData_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PoolWeekCandleData_Filter>>>;
  close0?: InputMaybe<Scalars['BigDecimal']['input']>;
  close0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  close0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  close0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  close0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  close0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  close0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  close0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  close1?: InputMaybe<Scalars['BigDecimal']['input']>;
  close1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  close1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  close1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  close1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  close1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  close1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  close1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  date?: InputMaybe<Scalars['Int']['input']>;
  date_gt?: InputMaybe<Scalars['Int']['input']>;
  date_gte?: InputMaybe<Scalars['Int']['input']>;
  date_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  date_lt?: InputMaybe<Scalars['Int']['input']>;
  date_lte?: InputMaybe<Scalars['Int']['input']>;
  date_not?: InputMaybe<Scalars['Int']['input']>;
  date_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  feeGrowthGlobal0X128?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_gt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_gte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeGrowthGlobal0X128_lt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_lte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_not?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeGrowthGlobal1X128?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_gt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_gte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeGrowthGlobal1X128_lt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_lte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_not?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feesUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  feesUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  high0?: InputMaybe<Scalars['BigDecimal']['input']>;
  high0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  high0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  high0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  high0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  high0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  high0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  high0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  high1?: InputMaybe<Scalars['BigDecimal']['input']>;
  high1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  high1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  high1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  high1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  high1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  high1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  high1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  liquidity?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  low0?: InputMaybe<Scalars['BigDecimal']['input']>;
  low0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  low0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  low0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  low0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  low0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  low0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  low0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  low1?: InputMaybe<Scalars['BigDecimal']['input']>;
  low1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  low1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  low1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  low1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  low1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  low1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  low1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  open0?: InputMaybe<Scalars['BigDecimal']['input']>;
  open0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  open0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  open0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  open0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  open0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  open0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  open0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  open1?: InputMaybe<Scalars['BigDecimal']['input']>;
  open1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  open1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  open1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  open1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  open1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  open1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  open1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  or?: InputMaybe<Array<InputMaybe<PoolWeekCandleData_Filter>>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  protocolFeesUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  protocolFeesUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sqrtPrice?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sqrtPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tick?: InputMaybe<Scalars['BigInt']['input']>;
  tick_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tick_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tick_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tick_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tick_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tick_not?: InputMaybe<Scalars['BigInt']['input']>;
  tick_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token0Price?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token0Price_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token1Price?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token1Price_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tvlUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tvlUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  tvlUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  txCount?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  txCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  volumeToken0?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeToken0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeToken1?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeToken1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export enum PoolWeekCandleData_OrderBy {
  Close0 = 'close0',
  Close1 = 'close1',
  Date = 'date',
  FeeGrowthGlobal0X128 = 'feeGrowthGlobal0X128',
  FeeGrowthGlobal1X128 = 'feeGrowthGlobal1X128',
  FeesUsd = 'feesUSD',
  High0 = 'high0',
  High1 = 'high1',
  Id = 'id',
  Liquidity = 'liquidity',
  Low0 = 'low0',
  Low1 = 'low1',
  Open0 = 'open0',
  Open1 = 'open1',
  Pool = 'pool',
  PoolCollectedFeesToken0 = 'pool__collectedFeesToken0',
  PoolCollectedFeesToken1 = 'pool__collectedFeesToken1',
  PoolCollectedFeesUsd = 'pool__collectedFeesUSD',
  PoolCreatedAtBlockNumber = 'pool__createdAtBlockNumber',
  PoolCreatedAtTimestamp = 'pool__createdAtTimestamp',
  PoolFeeGrowthGlobal0X128 = 'pool__feeGrowthGlobal0X128',
  PoolFeeGrowthGlobal1X128 = 'pool__feeGrowthGlobal1X128',
  PoolFeeProtocol = 'pool__feeProtocol',
  PoolFeeTier = 'pool__feeTier',
  PoolFeesUsd = 'pool__feesUSD',
  PoolId = 'pool__id',
  PoolLiquidity = 'pool__liquidity',
  PoolLiquidityProviderCount = 'pool__liquidityProviderCount',
  PoolObservationIndex = 'pool__observationIndex',
  PoolProtocolFeesUsd = 'pool__protocolFeesUSD',
  PoolSqrtPrice = 'pool__sqrtPrice',
  PoolTick = 'pool__tick',
  PoolToken0Price = 'pool__token0Price',
  PoolToken1Price = 'pool__token1Price',
  PoolTotalValueLockedEth = 'pool__totalValueLockedETH',
  PoolTotalValueLockedEthUntracked = 'pool__totalValueLockedETHUntracked',
  PoolTotalValueLockedToken0 = 'pool__totalValueLockedToken0',
  PoolTotalValueLockedToken1 = 'pool__totalValueLockedToken1',
  PoolTotalValueLockedUsd = 'pool__totalValueLockedUSD',
  PoolTotalValueLockedUsdUntracked = 'pool__totalValueLockedUSDUntracked',
  PoolTxCount = 'pool__txCount',
  PoolUntrackedVolumeUsd = 'pool__untrackedVolumeUSD',
  PoolVolumeToken0 = 'pool__volumeToken0',
  PoolVolumeToken1 = 'pool__volumeToken1',
  PoolVolumeUsd = 'pool__volumeUSD',
  ProtocolFeesUsd = 'protocolFeesUSD',
  SqrtPrice = 'sqrtPrice',
  Tick = 'tick',
  Token0Price = 'token0Price',
  Token1Price = 'token1Price',
  TvlUsd = 'tvlUSD',
  TxCount = 'txCount',
  VolumeToken0 = 'volumeToken0',
  VolumeToken1 = 'volumeToken1',
  VolumeUsd = 'volumeUSD'
}

export type Pool_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Pool_Filter>>>;
  burns_?: InputMaybe<Burn_Filter>;
  collectedFeesToken0?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesToken0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesToken0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesToken0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  collectedFeesToken0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesToken0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesToken0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  collectedFeesToken1?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesToken1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesToken1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesToken1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  collectedFeesToken1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesToken1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesToken1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  collectedFeesUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  collectedFeesUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  collects_?: InputMaybe<Collect_Filter>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeGrowthGlobal0X128?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_gt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_gte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeGrowthGlobal0X128_lt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_lte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_not?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal0X128_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeGrowthGlobal1X128?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_gt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_gte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeGrowthGlobal1X128_lt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_lte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_not?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthGlobal1X128_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeProtocol?: InputMaybe<Scalars['BigInt']['input']>;
  feeProtocol_gt?: InputMaybe<Scalars['BigInt']['input']>;
  feeProtocol_gte?: InputMaybe<Scalars['BigInt']['input']>;
  feeProtocol_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeProtocol_lt?: InputMaybe<Scalars['BigInt']['input']>;
  feeProtocol_lte?: InputMaybe<Scalars['BigInt']['input']>;
  feeProtocol_not?: InputMaybe<Scalars['BigInt']['input']>;
  feeProtocol_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeTier?: InputMaybe<Scalars['BigInt']['input']>;
  feeTier_gt?: InputMaybe<Scalars['BigInt']['input']>;
  feeTier_gte?: InputMaybe<Scalars['BigInt']['input']>;
  feeTier_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeTier_lt?: InputMaybe<Scalars['BigInt']['input']>;
  feeTier_lte?: InputMaybe<Scalars['BigInt']['input']>;
  feeTier_not?: InputMaybe<Scalars['BigInt']['input']>;
  feeTier_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feesUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  feesUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  liquidity?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityProviderCount?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityProviderCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityProviderCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityProviderCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidityProviderCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityProviderCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityProviderCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityProviderCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  mints_?: InputMaybe<Mint_Filter>;
  observationIndex?: InputMaybe<Scalars['BigInt']['input']>;
  observationIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  observationIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  observationIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  observationIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  observationIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  observationIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  observationIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Pool_Filter>>>;
  pool5MinuteCandleData_?: InputMaybe<Pool5MinuteCandleData_Filter>;
  pool15MinuteCandleData_?: InputMaybe<Pool15MinuteCandleData_Filter>;
  pool30MinuteCandleData_?: InputMaybe<Pool30MinuteCandleData_Filter>;
  poolDayCandleData_?: InputMaybe<PoolDayCandleData_Filter>;
  poolDayData_?: InputMaybe<PoolDayData_Filter>;
  poolHourCandleData_?: InputMaybe<PoolHourCandleData_Filter>;
  poolHourData_?: InputMaybe<PoolHourData_Filter>;
  poolMinuteCandleData_?: InputMaybe<PoolMinuteCandleData_Filter>;
  poolMonthCandleData_?: InputMaybe<PoolMonthCandleData_Filter>;
  poolWeekCandleData_?: InputMaybe<PoolWeekCandleData_Filter>;
  protocolFeesUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  protocolFeesUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  sqrtPrice?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sqrtPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  swaps_?: InputMaybe<Swap_Filter>;
  tick?: InputMaybe<Scalars['BigInt']['input']>;
  tick_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tick_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tick_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tick_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tick_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tick_not?: InputMaybe<Scalars['BigInt']['input']>;
  tick_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  ticks_?: InputMaybe<Tick_Filter>;
  token0?: InputMaybe<Scalars['String']['input']>;
  token0Price?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token0Price_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token0_?: InputMaybe<Token_Filter>;
  token0_contains?: InputMaybe<Scalars['String']['input']>;
  token0_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token0_ends_with?: InputMaybe<Scalars['String']['input']>;
  token0_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token0_gt?: InputMaybe<Scalars['String']['input']>;
  token0_gte?: InputMaybe<Scalars['String']['input']>;
  token0_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token0_lt?: InputMaybe<Scalars['String']['input']>;
  token0_lte?: InputMaybe<Scalars['String']['input']>;
  token0_not?: InputMaybe<Scalars['String']['input']>;
  token0_not_contains?: InputMaybe<Scalars['String']['input']>;
  token0_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token0_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token0_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token0_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token0_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token0_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token0_starts_with?: InputMaybe<Scalars['String']['input']>;
  token0_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token1?: InputMaybe<Scalars['String']['input']>;
  token1Price?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token1Price_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token1_?: InputMaybe<Token_Filter>;
  token1_contains?: InputMaybe<Scalars['String']['input']>;
  token1_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token1_ends_with?: InputMaybe<Scalars['String']['input']>;
  token1_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token1_gt?: InputMaybe<Scalars['String']['input']>;
  token1_gte?: InputMaybe<Scalars['String']['input']>;
  token1_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token1_lt?: InputMaybe<Scalars['String']['input']>;
  token1_lte?: InputMaybe<Scalars['String']['input']>;
  token1_not?: InputMaybe<Scalars['String']['input']>;
  token1_not_contains?: InputMaybe<Scalars['String']['input']>;
  token1_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token1_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token1_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token1_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token1_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token1_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token1_starts_with?: InputMaybe<Scalars['String']['input']>;
  token1_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  totalValueLockedETH?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedETHUntracked?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedETHUntracked_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedETHUntracked_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedETHUntracked_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalValueLockedETHUntracked_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedETHUntracked_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedETHUntracked_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedETHUntracked_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalValueLockedETH_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedETH_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedETH_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalValueLockedETH_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedETH_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedETH_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalValueLockedToken0?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedToken0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedToken0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedToken0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalValueLockedToken0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedToken0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedToken0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalValueLockedToken1?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedToken1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedToken1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedToken1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalValueLockedToken1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedToken1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedToken1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedUSDUntracked?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedUSDUntracked_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedUSDUntracked_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedUSDUntracked_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalValueLockedUSDUntracked_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedUSDUntracked_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedUSDUntracked_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedUSDUntracked_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  txCount?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  txCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  untrackedVolumeUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeToken0?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeToken0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeToken1?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeToken1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export enum Pool_OrderBy {
  Burns = 'burns',
  CollectedFeesToken0 = 'collectedFeesToken0',
  CollectedFeesToken1 = 'collectedFeesToken1',
  CollectedFeesUsd = 'collectedFeesUSD',
  Collects = 'collects',
  CreatedAtBlockNumber = 'createdAtBlockNumber',
  CreatedAtTimestamp = 'createdAtTimestamp',
  FeeGrowthGlobal0X128 = 'feeGrowthGlobal0X128',
  FeeGrowthGlobal1X128 = 'feeGrowthGlobal1X128',
  FeeProtocol = 'feeProtocol',
  FeeTier = 'feeTier',
  FeesUsd = 'feesUSD',
  Id = 'id',
  Liquidity = 'liquidity',
  LiquidityProviderCount = 'liquidityProviderCount',
  Mints = 'mints',
  ObservationIndex = 'observationIndex',
  Pool5MinuteCandleData = 'pool5MinuteCandleData',
  Pool15MinuteCandleData = 'pool15MinuteCandleData',
  Pool30MinuteCandleData = 'pool30MinuteCandleData',
  PoolDayCandleData = 'poolDayCandleData',
  PoolDayData = 'poolDayData',
  PoolHourCandleData = 'poolHourCandleData',
  PoolHourData = 'poolHourData',
  PoolMinuteCandleData = 'poolMinuteCandleData',
  PoolMonthCandleData = 'poolMonthCandleData',
  PoolWeekCandleData = 'poolWeekCandleData',
  ProtocolFeesUsd = 'protocolFeesUSD',
  SqrtPrice = 'sqrtPrice',
  Swaps = 'swaps',
  Tick = 'tick',
  Ticks = 'ticks',
  Token0 = 'token0',
  Token0Price = 'token0Price',
  Token0Decimals = 'token0__decimals',
  Token0DerivedEth = 'token0__derivedETH',
  Token0DerivedUsd = 'token0__derivedUSD',
  Token0FeesUsd = 'token0__feesUSD',
  Token0Id = 'token0__id',
  Token0Name = 'token0__name',
  Token0PoolCount = 'token0__poolCount',
  Token0ProtocolFeesUsd = 'token0__protocolFeesUSD',
  Token0Symbol = 'token0__symbol',
  Token0TotalSupply = 'token0__totalSupply',
  Token0TotalValueLocked = 'token0__totalValueLocked',
  Token0TotalValueLockedUsd = 'token0__totalValueLockedUSD',
  Token0TotalValueLockedUsdUntracked = 'token0__totalValueLockedUSDUntracked',
  Token0TxCount = 'token0__txCount',
  Token0UntrackedVolumeUsd = 'token0__untrackedVolumeUSD',
  Token0Volume = 'token0__volume',
  Token0VolumeUsd = 'token0__volumeUSD',
  Token1 = 'token1',
  Token1Price = 'token1Price',
  Token1Decimals = 'token1__decimals',
  Token1DerivedEth = 'token1__derivedETH',
  Token1DerivedUsd = 'token1__derivedUSD',
  Token1FeesUsd = 'token1__feesUSD',
  Token1Id = 'token1__id',
  Token1Name = 'token1__name',
  Token1PoolCount = 'token1__poolCount',
  Token1ProtocolFeesUsd = 'token1__protocolFeesUSD',
  Token1Symbol = 'token1__symbol',
  Token1TotalSupply = 'token1__totalSupply',
  Token1TotalValueLocked = 'token1__totalValueLocked',
  Token1TotalValueLockedUsd = 'token1__totalValueLockedUSD',
  Token1TotalValueLockedUsdUntracked = 'token1__totalValueLockedUSDUntracked',
  Token1TxCount = 'token1__txCount',
  Token1UntrackedVolumeUsd = 'token1__untrackedVolumeUSD',
  Token1Volume = 'token1__volume',
  Token1VolumeUsd = 'token1__volumeUSD',
  TotalValueLockedEth = 'totalValueLockedETH',
  TotalValueLockedEthUntracked = 'totalValueLockedETHUntracked',
  TotalValueLockedToken0 = 'totalValueLockedToken0',
  TotalValueLockedToken1 = 'totalValueLockedToken1',
  TotalValueLockedUsd = 'totalValueLockedUSD',
  TotalValueLockedUsdUntracked = 'totalValueLockedUSDUntracked',
  TxCount = 'txCount',
  UntrackedVolumeUsd = 'untrackedVolumeUSD',
  VolumeToken0 = 'volumeToken0',
  VolumeToken1 = 'volumeToken1',
  VolumeUsd = 'volumeUSD'
}

export type Position = {
  __typename?: 'Position';
  collectedFeesToken0: Scalars['BigDecimal']['output'];
  collectedFeesToken1: Scalars['BigDecimal']['output'];
  depositedToken0: Scalars['BigDecimal']['output'];
  depositedToken1: Scalars['BigDecimal']['output'];
  feeGrowthInside0LastX128: Scalars['BigInt']['output'];
  feeGrowthInside1LastX128: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  liquidity: Scalars['BigInt']['output'];
  owner: Scalars['Bytes']['output'];
  pool: Pool;
  tickLower: Tick;
  tickUpper: Tick;
  token0: Token;
  token1: Token;
  transaction: Transaction;
  withdrawnToken0: Scalars['BigDecimal']['output'];
  withdrawnToken1: Scalars['BigDecimal']['output'];
};

export type PositionSnapshot = {
  __typename?: 'PositionSnapshot';
  blockNumber: Scalars['BigInt']['output'];
  collectedFeesToken0: Scalars['BigDecimal']['output'];
  collectedFeesToken1: Scalars['BigDecimal']['output'];
  depositedToken0: Scalars['BigDecimal']['output'];
  depositedToken1: Scalars['BigDecimal']['output'];
  feeGrowthInside0LastX128: Scalars['BigInt']['output'];
  feeGrowthInside1LastX128: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  liquidity: Scalars['BigInt']['output'];
  owner: Scalars['Bytes']['output'];
  pool: Pool;
  position: Position;
  timestamp: Scalars['BigInt']['output'];
  transaction: Transaction;
  withdrawnToken0: Scalars['BigDecimal']['output'];
  withdrawnToken1: Scalars['BigDecimal']['output'];
};

export type PositionSnapshot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<PositionSnapshot_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  collectedFeesToken0?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesToken0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesToken0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesToken0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  collectedFeesToken0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesToken0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesToken0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  collectedFeesToken1?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesToken1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesToken1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesToken1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  collectedFeesToken1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesToken1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesToken1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  depositedToken0?: InputMaybe<Scalars['BigDecimal']['input']>;
  depositedToken0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  depositedToken0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  depositedToken0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  depositedToken0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  depositedToken0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  depositedToken0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  depositedToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  depositedToken1?: InputMaybe<Scalars['BigDecimal']['input']>;
  depositedToken1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  depositedToken1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  depositedToken1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  depositedToken1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  depositedToken1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  depositedToken1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  depositedToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  feeGrowthInside0LastX128?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthInside0LastX128_gt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthInside0LastX128_gte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthInside0LastX128_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeGrowthInside0LastX128_lt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthInside0LastX128_lte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthInside0LastX128_not?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthInside0LastX128_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeGrowthInside1LastX128?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthInside1LastX128_gt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthInside1LastX128_gte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthInside1LastX128_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeGrowthInside1LastX128_lt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthInside1LastX128_lte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthInside1LastX128_not?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthInside1LastX128_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  liquidity?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<PositionSnapshot_Filter>>>;
  owner?: InputMaybe<Scalars['Bytes']['input']>;
  owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  position_?: InputMaybe<Position_Filter>;
  position_contains?: InputMaybe<Scalars['String']['input']>;
  position_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  position_ends_with?: InputMaybe<Scalars['String']['input']>;
  position_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  position_gt?: InputMaybe<Scalars['String']['input']>;
  position_gte?: InputMaybe<Scalars['String']['input']>;
  position_in?: InputMaybe<Array<Scalars['String']['input']>>;
  position_lt?: InputMaybe<Scalars['String']['input']>;
  position_lte?: InputMaybe<Scalars['String']['input']>;
  position_not?: InputMaybe<Scalars['String']['input']>;
  position_not_contains?: InputMaybe<Scalars['String']['input']>;
  position_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  position_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  position_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  position_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  position_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  position_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  position_starts_with?: InputMaybe<Scalars['String']['input']>;
  position_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  withdrawnToken0?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawnToken0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawnToken0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawnToken0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  withdrawnToken0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawnToken0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawnToken0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawnToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  withdrawnToken1?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawnToken1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawnToken1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawnToken1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  withdrawnToken1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawnToken1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawnToken1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawnToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export enum PositionSnapshot_OrderBy {
  BlockNumber = 'blockNumber',
  CollectedFeesToken0 = 'collectedFeesToken0',
  CollectedFeesToken1 = 'collectedFeesToken1',
  DepositedToken0 = 'depositedToken0',
  DepositedToken1 = 'depositedToken1',
  FeeGrowthInside0LastX128 = 'feeGrowthInside0LastX128',
  FeeGrowthInside1LastX128 = 'feeGrowthInside1LastX128',
  Id = 'id',
  Liquidity = 'liquidity',
  Owner = 'owner',
  Pool = 'pool',
  PoolCollectedFeesToken0 = 'pool__collectedFeesToken0',
  PoolCollectedFeesToken1 = 'pool__collectedFeesToken1',
  PoolCollectedFeesUsd = 'pool__collectedFeesUSD',
  PoolCreatedAtBlockNumber = 'pool__createdAtBlockNumber',
  PoolCreatedAtTimestamp = 'pool__createdAtTimestamp',
  PoolFeeGrowthGlobal0X128 = 'pool__feeGrowthGlobal0X128',
  PoolFeeGrowthGlobal1X128 = 'pool__feeGrowthGlobal1X128',
  PoolFeeProtocol = 'pool__feeProtocol',
  PoolFeeTier = 'pool__feeTier',
  PoolFeesUsd = 'pool__feesUSD',
  PoolId = 'pool__id',
  PoolLiquidity = 'pool__liquidity',
  PoolLiquidityProviderCount = 'pool__liquidityProviderCount',
  PoolObservationIndex = 'pool__observationIndex',
  PoolProtocolFeesUsd = 'pool__protocolFeesUSD',
  PoolSqrtPrice = 'pool__sqrtPrice',
  PoolTick = 'pool__tick',
  PoolToken0Price = 'pool__token0Price',
  PoolToken1Price = 'pool__token1Price',
  PoolTotalValueLockedEth = 'pool__totalValueLockedETH',
  PoolTotalValueLockedEthUntracked = 'pool__totalValueLockedETHUntracked',
  PoolTotalValueLockedToken0 = 'pool__totalValueLockedToken0',
  PoolTotalValueLockedToken1 = 'pool__totalValueLockedToken1',
  PoolTotalValueLockedUsd = 'pool__totalValueLockedUSD',
  PoolTotalValueLockedUsdUntracked = 'pool__totalValueLockedUSDUntracked',
  PoolTxCount = 'pool__txCount',
  PoolUntrackedVolumeUsd = 'pool__untrackedVolumeUSD',
  PoolVolumeToken0 = 'pool__volumeToken0',
  PoolVolumeToken1 = 'pool__volumeToken1',
  PoolVolumeUsd = 'pool__volumeUSD',
  Position = 'position',
  PositionCollectedFeesToken0 = 'position__collectedFeesToken0',
  PositionCollectedFeesToken1 = 'position__collectedFeesToken1',
  PositionDepositedToken0 = 'position__depositedToken0',
  PositionDepositedToken1 = 'position__depositedToken1',
  PositionFeeGrowthInside0LastX128 = 'position__feeGrowthInside0LastX128',
  PositionFeeGrowthInside1LastX128 = 'position__feeGrowthInside1LastX128',
  PositionId = 'position__id',
  PositionLiquidity = 'position__liquidity',
  PositionOwner = 'position__owner',
  PositionWithdrawnToken0 = 'position__withdrawnToken0',
  PositionWithdrawnToken1 = 'position__withdrawnToken1',
  Timestamp = 'timestamp',
  Transaction = 'transaction',
  TransactionBlockNumber = 'transaction__blockNumber',
  TransactionGasPrice = 'transaction__gasPrice',
  TransactionGasUsed = 'transaction__gasUsed',
  TransactionId = 'transaction__id',
  TransactionTimestamp = 'transaction__timestamp',
  WithdrawnToken0 = 'withdrawnToken0',
  WithdrawnToken1 = 'withdrawnToken1'
}

export type Position_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Position_Filter>>>;
  collectedFeesToken0?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesToken0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesToken0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesToken0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  collectedFeesToken0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesToken0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesToken0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  collectedFeesToken1?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesToken1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesToken1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesToken1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  collectedFeesToken1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesToken1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesToken1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  depositedToken0?: InputMaybe<Scalars['BigDecimal']['input']>;
  depositedToken0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  depositedToken0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  depositedToken0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  depositedToken0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  depositedToken0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  depositedToken0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  depositedToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  depositedToken1?: InputMaybe<Scalars['BigDecimal']['input']>;
  depositedToken1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  depositedToken1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  depositedToken1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  depositedToken1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  depositedToken1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  depositedToken1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  depositedToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  feeGrowthInside0LastX128?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthInside0LastX128_gt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthInside0LastX128_gte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthInside0LastX128_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeGrowthInside0LastX128_lt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthInside0LastX128_lte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthInside0LastX128_not?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthInside0LastX128_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeGrowthInside1LastX128?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthInside1LastX128_gt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthInside1LastX128_gte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthInside1LastX128_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeGrowthInside1LastX128_lt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthInside1LastX128_lte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthInside1LastX128_not?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthInside1LastX128_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  liquidity?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidity_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Position_Filter>>>;
  owner?: InputMaybe<Scalars['Bytes']['input']>;
  owner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  owner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  owner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  owner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tickLower?: InputMaybe<Scalars['String']['input']>;
  tickLower_?: InputMaybe<Tick_Filter>;
  tickLower_contains?: InputMaybe<Scalars['String']['input']>;
  tickLower_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tickLower_ends_with?: InputMaybe<Scalars['String']['input']>;
  tickLower_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tickLower_gt?: InputMaybe<Scalars['String']['input']>;
  tickLower_gte?: InputMaybe<Scalars['String']['input']>;
  tickLower_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tickLower_lt?: InputMaybe<Scalars['String']['input']>;
  tickLower_lte?: InputMaybe<Scalars['String']['input']>;
  tickLower_not?: InputMaybe<Scalars['String']['input']>;
  tickLower_not_contains?: InputMaybe<Scalars['String']['input']>;
  tickLower_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tickLower_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tickLower_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tickLower_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tickLower_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tickLower_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tickLower_starts_with?: InputMaybe<Scalars['String']['input']>;
  tickLower_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tickUpper?: InputMaybe<Scalars['String']['input']>;
  tickUpper_?: InputMaybe<Tick_Filter>;
  tickUpper_contains?: InputMaybe<Scalars['String']['input']>;
  tickUpper_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tickUpper_ends_with?: InputMaybe<Scalars['String']['input']>;
  tickUpper_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tickUpper_gt?: InputMaybe<Scalars['String']['input']>;
  tickUpper_gte?: InputMaybe<Scalars['String']['input']>;
  tickUpper_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tickUpper_lt?: InputMaybe<Scalars['String']['input']>;
  tickUpper_lte?: InputMaybe<Scalars['String']['input']>;
  tickUpper_not?: InputMaybe<Scalars['String']['input']>;
  tickUpper_not_contains?: InputMaybe<Scalars['String']['input']>;
  tickUpper_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tickUpper_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tickUpper_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tickUpper_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tickUpper_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tickUpper_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tickUpper_starts_with?: InputMaybe<Scalars['String']['input']>;
  tickUpper_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token0?: InputMaybe<Scalars['String']['input']>;
  token0_?: InputMaybe<Token_Filter>;
  token0_contains?: InputMaybe<Scalars['String']['input']>;
  token0_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token0_ends_with?: InputMaybe<Scalars['String']['input']>;
  token0_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token0_gt?: InputMaybe<Scalars['String']['input']>;
  token0_gte?: InputMaybe<Scalars['String']['input']>;
  token0_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token0_lt?: InputMaybe<Scalars['String']['input']>;
  token0_lte?: InputMaybe<Scalars['String']['input']>;
  token0_not?: InputMaybe<Scalars['String']['input']>;
  token0_not_contains?: InputMaybe<Scalars['String']['input']>;
  token0_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token0_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token0_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token0_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token0_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token0_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token0_starts_with?: InputMaybe<Scalars['String']['input']>;
  token0_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token1?: InputMaybe<Scalars['String']['input']>;
  token1_?: InputMaybe<Token_Filter>;
  token1_contains?: InputMaybe<Scalars['String']['input']>;
  token1_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token1_ends_with?: InputMaybe<Scalars['String']['input']>;
  token1_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token1_gt?: InputMaybe<Scalars['String']['input']>;
  token1_gte?: InputMaybe<Scalars['String']['input']>;
  token1_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token1_lt?: InputMaybe<Scalars['String']['input']>;
  token1_lte?: InputMaybe<Scalars['String']['input']>;
  token1_not?: InputMaybe<Scalars['String']['input']>;
  token1_not_contains?: InputMaybe<Scalars['String']['input']>;
  token1_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token1_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token1_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token1_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token1_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token1_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token1_starts_with?: InputMaybe<Scalars['String']['input']>;
  token1_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  withdrawnToken0?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawnToken0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawnToken0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawnToken0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  withdrawnToken0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawnToken0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawnToken0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawnToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  withdrawnToken1?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawnToken1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawnToken1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawnToken1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  withdrawnToken1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawnToken1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawnToken1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  withdrawnToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export enum Position_OrderBy {
  CollectedFeesToken0 = 'collectedFeesToken0',
  CollectedFeesToken1 = 'collectedFeesToken1',
  DepositedToken0 = 'depositedToken0',
  DepositedToken1 = 'depositedToken1',
  FeeGrowthInside0LastX128 = 'feeGrowthInside0LastX128',
  FeeGrowthInside1LastX128 = 'feeGrowthInside1LastX128',
  Id = 'id',
  Liquidity = 'liquidity',
  Owner = 'owner',
  Pool = 'pool',
  PoolCollectedFeesToken0 = 'pool__collectedFeesToken0',
  PoolCollectedFeesToken1 = 'pool__collectedFeesToken1',
  PoolCollectedFeesUsd = 'pool__collectedFeesUSD',
  PoolCreatedAtBlockNumber = 'pool__createdAtBlockNumber',
  PoolCreatedAtTimestamp = 'pool__createdAtTimestamp',
  PoolFeeGrowthGlobal0X128 = 'pool__feeGrowthGlobal0X128',
  PoolFeeGrowthGlobal1X128 = 'pool__feeGrowthGlobal1X128',
  PoolFeeProtocol = 'pool__feeProtocol',
  PoolFeeTier = 'pool__feeTier',
  PoolFeesUsd = 'pool__feesUSD',
  PoolId = 'pool__id',
  PoolLiquidity = 'pool__liquidity',
  PoolLiquidityProviderCount = 'pool__liquidityProviderCount',
  PoolObservationIndex = 'pool__observationIndex',
  PoolProtocolFeesUsd = 'pool__protocolFeesUSD',
  PoolSqrtPrice = 'pool__sqrtPrice',
  PoolTick = 'pool__tick',
  PoolToken0Price = 'pool__token0Price',
  PoolToken1Price = 'pool__token1Price',
  PoolTotalValueLockedEth = 'pool__totalValueLockedETH',
  PoolTotalValueLockedEthUntracked = 'pool__totalValueLockedETHUntracked',
  PoolTotalValueLockedToken0 = 'pool__totalValueLockedToken0',
  PoolTotalValueLockedToken1 = 'pool__totalValueLockedToken1',
  PoolTotalValueLockedUsd = 'pool__totalValueLockedUSD',
  PoolTotalValueLockedUsdUntracked = 'pool__totalValueLockedUSDUntracked',
  PoolTxCount = 'pool__txCount',
  PoolUntrackedVolumeUsd = 'pool__untrackedVolumeUSD',
  PoolVolumeToken0 = 'pool__volumeToken0',
  PoolVolumeToken1 = 'pool__volumeToken1',
  PoolVolumeUsd = 'pool__volumeUSD',
  TickLower = 'tickLower',
  TickLowerCollectedFeesToken0 = 'tickLower__collectedFeesToken0',
  TickLowerCollectedFeesToken1 = 'tickLower__collectedFeesToken1',
  TickLowerCollectedFeesUsd = 'tickLower__collectedFeesUSD',
  TickLowerCreatedAtBlockNumber = 'tickLower__createdAtBlockNumber',
  TickLowerCreatedAtTimestamp = 'tickLower__createdAtTimestamp',
  TickLowerFeeGrowthOutside0X128 = 'tickLower__feeGrowthOutside0X128',
  TickLowerFeeGrowthOutside1X128 = 'tickLower__feeGrowthOutside1X128',
  TickLowerFeesUsd = 'tickLower__feesUSD',
  TickLowerId = 'tickLower__id',
  TickLowerLiquidityGross = 'tickLower__liquidityGross',
  TickLowerLiquidityNet = 'tickLower__liquidityNet',
  TickLowerLiquidityProviderCount = 'tickLower__liquidityProviderCount',
  TickLowerPoolAddress = 'tickLower__poolAddress',
  TickLowerPrice0 = 'tickLower__price0',
  TickLowerPrice1 = 'tickLower__price1',
  TickLowerTickIdx = 'tickLower__tickIdx',
  TickLowerUntrackedVolumeUsd = 'tickLower__untrackedVolumeUSD',
  TickLowerVolumeToken0 = 'tickLower__volumeToken0',
  TickLowerVolumeToken1 = 'tickLower__volumeToken1',
  TickLowerVolumeUsd = 'tickLower__volumeUSD',
  TickUpper = 'tickUpper',
  TickUpperCollectedFeesToken0 = 'tickUpper__collectedFeesToken0',
  TickUpperCollectedFeesToken1 = 'tickUpper__collectedFeesToken1',
  TickUpperCollectedFeesUsd = 'tickUpper__collectedFeesUSD',
  TickUpperCreatedAtBlockNumber = 'tickUpper__createdAtBlockNumber',
  TickUpperCreatedAtTimestamp = 'tickUpper__createdAtTimestamp',
  TickUpperFeeGrowthOutside0X128 = 'tickUpper__feeGrowthOutside0X128',
  TickUpperFeeGrowthOutside1X128 = 'tickUpper__feeGrowthOutside1X128',
  TickUpperFeesUsd = 'tickUpper__feesUSD',
  TickUpperId = 'tickUpper__id',
  TickUpperLiquidityGross = 'tickUpper__liquidityGross',
  TickUpperLiquidityNet = 'tickUpper__liquidityNet',
  TickUpperLiquidityProviderCount = 'tickUpper__liquidityProviderCount',
  TickUpperPoolAddress = 'tickUpper__poolAddress',
  TickUpperPrice0 = 'tickUpper__price0',
  TickUpperPrice1 = 'tickUpper__price1',
  TickUpperTickIdx = 'tickUpper__tickIdx',
  TickUpperUntrackedVolumeUsd = 'tickUpper__untrackedVolumeUSD',
  TickUpperVolumeToken0 = 'tickUpper__volumeToken0',
  TickUpperVolumeToken1 = 'tickUpper__volumeToken1',
  TickUpperVolumeUsd = 'tickUpper__volumeUSD',
  Token0 = 'token0',
  Token0Decimals = 'token0__decimals',
  Token0DerivedEth = 'token0__derivedETH',
  Token0DerivedUsd = 'token0__derivedUSD',
  Token0FeesUsd = 'token0__feesUSD',
  Token0Id = 'token0__id',
  Token0Name = 'token0__name',
  Token0PoolCount = 'token0__poolCount',
  Token0ProtocolFeesUsd = 'token0__protocolFeesUSD',
  Token0Symbol = 'token0__symbol',
  Token0TotalSupply = 'token0__totalSupply',
  Token0TotalValueLocked = 'token0__totalValueLocked',
  Token0TotalValueLockedUsd = 'token0__totalValueLockedUSD',
  Token0TotalValueLockedUsdUntracked = 'token0__totalValueLockedUSDUntracked',
  Token0TxCount = 'token0__txCount',
  Token0UntrackedVolumeUsd = 'token0__untrackedVolumeUSD',
  Token0Volume = 'token0__volume',
  Token0VolumeUsd = 'token0__volumeUSD',
  Token1 = 'token1',
  Token1Decimals = 'token1__decimals',
  Token1DerivedEth = 'token1__derivedETH',
  Token1DerivedUsd = 'token1__derivedUSD',
  Token1FeesUsd = 'token1__feesUSD',
  Token1Id = 'token1__id',
  Token1Name = 'token1__name',
  Token1PoolCount = 'token1__poolCount',
  Token1ProtocolFeesUsd = 'token1__protocolFeesUSD',
  Token1Symbol = 'token1__symbol',
  Token1TotalSupply = 'token1__totalSupply',
  Token1TotalValueLocked = 'token1__totalValueLocked',
  Token1TotalValueLockedUsd = 'token1__totalValueLockedUSD',
  Token1TotalValueLockedUsdUntracked = 'token1__totalValueLockedUSDUntracked',
  Token1TxCount = 'token1__txCount',
  Token1UntrackedVolumeUsd = 'token1__untrackedVolumeUSD',
  Token1Volume = 'token1__volume',
  Token1VolumeUsd = 'token1__volumeUSD',
  Transaction = 'transaction',
  TransactionBlockNumber = 'transaction__blockNumber',
  TransactionGasPrice = 'transaction__gasPrice',
  TransactionGasUsed = 'transaction__gasUsed',
  TransactionId = 'transaction__id',
  TransactionTimestamp = 'transaction__timestamp',
  WithdrawnToken0 = 'withdrawnToken0',
  WithdrawnToken1 = 'withdrawnToken1'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  account?: Maybe<Account>;
  accountCollectionOwnership?: Maybe<AccountCollectionOwnership>;
  accountCollectionOwnerships: Array<AccountCollectionOwnership>;
  accounts: Array<Account>;
  block?: Maybe<Block>;
  blocks: Array<Block>;
  bundle?: Maybe<Bundle>;
  bundles: Array<Bundle>;
  burn?: Maybe<Burn>;
  burns: Array<Burn>;
  collect?: Maybe<Collect>;
  collects: Array<Collect>;
  contract?: Maybe<Contract>;
  contracts: Array<Contract>;
  creator?: Maybe<Creator>;
  creators: Array<Creator>;
  delegation?: Maybe<Delegation>;
  delegations: Array<Delegation>;
  delegator?: Maybe<Delegator>;
  delegators: Array<Delegator>;
  epoch?: Maybe<Epoch>;
  epoches: Array<Epoch>;
  erc721Contract?: Maybe<Erc721Contract>;
  erc721Contracts: Array<Erc721Contract>;
  erc721Creator?: Maybe<Erc721Creator>;
  erc721Creators: Array<Erc721Creator>;
  erc721Token?: Maybe<Erc721Token>;
  erc721Tokens: Array<Erc721Token>;
  erc721Transfer?: Maybe<Erc721Transfer>;
  erc721Transfers: Array<Erc721Transfer>;
  erc1155Balance?: Maybe<Erc1155Balance>;
  erc1155Balances: Array<Erc1155Balance>;
  erc1155Contract?: Maybe<Erc1155Contract>;
  erc1155Contracts: Array<Erc1155Contract>;
  erc1155Creator?: Maybe<Erc1155Creator>;
  erc1155Creators: Array<Erc1155Creator>;
  erc1155Token?: Maybe<Erc1155Token>;
  erc1155Tokens: Array<Erc1155Token>;
  erc1155Transfer?: Maybe<Erc1155Transfer>;
  erc1155Transfers: Array<Erc1155Transfer>;
  event?: Maybe<Event>;
  events: Array<Event>;
  factories: Array<Factory>;
  factory?: Maybe<Factory>;
  flash?: Maybe<Flash>;
  flashes: Array<Flash>;
  lockedUp?: Maybe<LockedUp>;
  lockedUps: Array<LockedUp>;
  marketEvent721?: Maybe<MarketEvent721>;
  marketEvent721S: Array<MarketEvent721>;
  marketEvent1155?: Maybe<MarketEvent1155>;
  marketEvent1155S: Array<MarketEvent1155>;
  marketFee?: Maybe<MarketFee>;
  marketFees: Array<MarketFee>;
  marketVolume?: Maybe<MarketVolume>;
  marketVolumes: Array<MarketVolume>;
  mint?: Maybe<Mint>;
  mints: Array<Mint>;
  onSaleStatus1155?: Maybe<OnSaleStatus1155>;
  onSaleStatus1155S: Array<OnSaleStatus1155>;
  order?: Maybe<Order>;
  orderTransfer?: Maybe<OrderTransfer>;
  orderTransfers: Array<OrderTransfer>;
  orders: Array<Order>;
  ownedTokenCount?: Maybe<OwnedTokenCount>;
  ownedTokenCounts: Array<OwnedTokenCount>;
  ownerContract?: Maybe<OwnerContract>;
  ownerContracts: Array<OwnerContract>;
  pancakeDayData?: Maybe<PancakeDayData>;
  pancakeDayDatas: Array<PancakeDayData>;
  pool?: Maybe<Pool>;
  pool5MinuteCandleData?: Maybe<Pool5MinuteCandleData>;
  pool5MinuteCandleDatas: Array<Pool5MinuteCandleData>;
  pool15MinuteCandleData?: Maybe<Pool15MinuteCandleData>;
  pool15MinuteCandleDatas: Array<Pool15MinuteCandleData>;
  pool30MinuteCandleData?: Maybe<Pool30MinuteCandleData>;
  pool30MinuteCandleDatas: Array<Pool30MinuteCandleData>;
  poolDayCandleData?: Maybe<PoolDayCandleData>;
  poolDayCandleDatas: Array<PoolDayCandleData>;
  poolDayData?: Maybe<PoolDayData>;
  poolDayDatas: Array<PoolDayData>;
  poolHourCandleData?: Maybe<PoolHourCandleData>;
  poolHourCandleDatas: Array<PoolHourCandleData>;
  poolHourData?: Maybe<PoolHourData>;
  poolHourDatas: Array<PoolHourData>;
  poolMinuteCandleData?: Maybe<PoolMinuteCandleData>;
  poolMinuteCandleDatas: Array<PoolMinuteCandleData>;
  poolMonthCandleData?: Maybe<PoolMonthCandleData>;
  poolMonthCandleDatas: Array<PoolMonthCandleData>;
  poolWeekCandleData?: Maybe<PoolWeekCandleData>;
  poolWeekCandleDatas: Array<PoolWeekCandleData>;
  pools: Array<Pool>;
  position?: Maybe<Position>;
  positionSnapshot?: Maybe<PositionSnapshot>;
  positionSnapshots: Array<PositionSnapshot>;
  positions: Array<Position>;
  royaltiesRegistries: Array<RoyaltiesRegistry>;
  royaltiesRegistry?: Maybe<RoyaltiesRegistry>;
  staking?: Maybe<Staking>;
  stakings: Array<Staking>;
  swap?: Maybe<Swap>;
  swaps: Array<Swap>;
  tick?: Maybe<Tick>;
  tickDayData?: Maybe<TickDayData>;
  tickDayDatas: Array<TickDayData>;
  tickHourData?: Maybe<TickHourData>;
  tickHourDatas: Array<TickHourData>;
  ticks: Array<Tick>;
  token?: Maybe<Token>;
  tokenDayData?: Maybe<TokenDayData>;
  tokenDayDatas: Array<TokenDayData>;
  tokenHourData?: Maybe<TokenHourData>;
  tokenHourDatas: Array<TokenHourData>;
  tokens: Array<Token>;
  transaction?: Maybe<Transaction>;
  transactionCount?: Maybe<TransactionCount>;
  transactionCounts: Array<TransactionCount>;
  transactions: Array<Transaction>;
  transation?: Maybe<Transation>;
  transations: Array<Transation>;
  validation?: Maybe<Validation>;
  validations: Array<Validation>;
  validator?: Maybe<Validator>;
  validators: Array<Validator>;
  withdrawalRequest?: Maybe<WithdrawalRequest>;
  withdrawalRequests: Array<WithdrawalRequest>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAccountCollectionOwnershipArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryAccountCollectionOwnershipsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountCollectionOwnership_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AccountCollectionOwnership_Filter>;
};


export type QueryAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Account_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Account_Filter>;
};


export type QueryBlockArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBlocksArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Block_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Block_Filter>;
};


export type QueryBundleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBundlesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Bundle_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Bundle_Filter>;
};


export type QueryBurnArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBurnsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Burn_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Burn_Filter>;
};


export type QueryCollectArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCollectsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Collect_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Collect_Filter>;
};


export type QueryContractArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryContractsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Contract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Contract_Filter>;
};


export type QueryCreatorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCreatorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Creator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Creator_Filter>;
};


export type QueryDelegationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDelegationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Delegation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Delegation_Filter>;
};


export type QueryDelegatorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDelegatorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Delegator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Delegator_Filter>;
};


export type QueryEpochArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEpochesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Epoch_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Epoch_Filter>;
};


export type QueryErc721ContractArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryErc721ContractsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc721Contract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc721Contract_Filter>;
};


export type QueryErc721CreatorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryErc721CreatorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc721Creator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc721Creator_Filter>;
};


export type QueryErc721TokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryErc721TokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc721Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc721Token_Filter>;
};


export type QueryErc721TransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryErc721TransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc721Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc721Transfer_Filter>;
};


export type QueryErc1155BalanceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryErc1155BalancesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc1155Balance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc1155Balance_Filter>;
};


export type QueryErc1155ContractArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryErc1155ContractsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc1155Contract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc1155Contract_Filter>;
};


export type QueryErc1155CreatorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryErc1155CreatorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc1155Creator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc1155Creator_Filter>;
};


export type QueryErc1155TokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryErc1155TokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc1155Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc1155Token_Filter>;
};


export type QueryErc1155TransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryErc1155TransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc1155Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc1155Transfer_Filter>;
};


export type QueryEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Event_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Event_Filter>;
};


export type QueryFactoriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Factory_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Factory_Filter>;
};


export type QueryFactoryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryFlashArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryFlashesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Flash_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Flash_Filter>;
};


export type QueryLockedUpArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryLockedUpsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LockedUp_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LockedUp_Filter>;
};


export type QueryMarketEvent721Args = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMarketEvent721SArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MarketEvent721_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketEvent721_Filter>;
};


export type QueryMarketEvent1155Args = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMarketEvent1155SArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MarketEvent1155_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketEvent1155_Filter>;
};


export type QueryMarketFeeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMarketFeesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MarketFee_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketFee_Filter>;
};


export type QueryMarketVolumeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMarketVolumesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MarketVolume_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketVolume_Filter>;
};


export type QueryMintArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMintsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Mint_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Mint_Filter>;
};


export type QueryOnSaleStatus1155Args = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOnSaleStatus1155SArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OnSaleStatus1155_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OnSaleStatus1155_Filter>;
};


export type QueryOrderArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOrderTransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOrderTransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderTransfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OrderTransfer_Filter>;
};


export type QueryOrdersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Order_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Order_Filter>;
};


export type QueryOwnedTokenCountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOwnedTokenCountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OwnedTokenCount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OwnedTokenCount_Filter>;
};


export type QueryOwnerContractArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOwnerContractsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OwnerContract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OwnerContract_Filter>;
};


export type QueryPancakeDayDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPancakeDayDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PancakeDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PancakeDayData_Filter>;
};


export type QueryPoolArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPool5MinuteCandleDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPool5MinuteCandleDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pool5MinuteCandleData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Pool5MinuteCandleData_Filter>;
};


export type QueryPool15MinuteCandleDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPool15MinuteCandleDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pool15MinuteCandleData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Pool15MinuteCandleData_Filter>;
};


export type QueryPool30MinuteCandleDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPool30MinuteCandleDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pool30MinuteCandleData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Pool30MinuteCandleData_Filter>;
};


export type QueryPoolDayCandleDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPoolDayCandleDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolDayCandleData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolDayCandleData_Filter>;
};


export type QueryPoolDayDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPoolDayDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolDayData_Filter>;
};


export type QueryPoolHourCandleDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPoolHourCandleDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolHourCandleData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolHourCandleData_Filter>;
};


export type QueryPoolHourDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPoolHourDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolHourData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolHourData_Filter>;
};


export type QueryPoolMinuteCandleDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPoolMinuteCandleDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolMinuteCandleData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolMinuteCandleData_Filter>;
};


export type QueryPoolMonthCandleDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPoolMonthCandleDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolMonthCandleData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolMonthCandleData_Filter>;
};


export type QueryPoolWeekCandleDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPoolWeekCandleDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolWeekCandleData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolWeekCandleData_Filter>;
};


export type QueryPoolsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Pool_Filter>;
};


export type QueryPositionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPositionSnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPositionSnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PositionSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PositionSnapshot_Filter>;
};


export type QueryPositionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Position_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Position_Filter>;
};


export type QueryRoyaltiesRegistriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RoyaltiesRegistry_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RoyaltiesRegistry_Filter>;
};


export type QueryRoyaltiesRegistryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryStakingArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryStakingsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Staking_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Staking_Filter>;
};


export type QuerySwapArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QuerySwapsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Swap_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Swap_Filter>;
};


export type QueryTickArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTickDayDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTickDayDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TickDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TickDayData_Filter>;
};


export type QueryTickHourDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTickHourDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TickHourData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TickHourData_Filter>;
};


export type QueryTicksArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Tick_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Tick_Filter>;
};


export type QueryTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenDayDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenDayDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenDayData_Filter>;
};


export type QueryTokenHourDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTokenHourDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenHourData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenHourData_Filter>;
};


export type QueryTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
};


export type QueryTransactionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTransactionCountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTransactionCountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TransactionCount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TransactionCount_Filter>;
};


export type QueryTransactionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Transaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Transaction_Filter>;
};


export type QueryTransationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTransationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Transation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Transation_Filter>;
};


export type QueryValidationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryValidationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Validation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Validation_Filter>;
};


export type QueryValidatorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryValidatorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Validator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Validator_Filter>;
};


export type QueryWithdrawalRequestArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryWithdrawalRequestsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<WithdrawalRequest_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<WithdrawalRequest_Filter>;
};

export type RoyaltiesRegistry = {
  __typename?: 'RoyaltiesRegistry';
  account: Scalars['String']['output'];
  collectionId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  tokenId: Scalars['String']['output'];
  value: Scalars['Int']['output'];
};

export type RoyaltiesRegistry_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  account?: InputMaybe<Scalars['String']['input']>;
  account_contains?: InputMaybe<Scalars['String']['input']>;
  account_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_gt?: InputMaybe<Scalars['String']['input']>;
  account_gte?: InputMaybe<Scalars['String']['input']>;
  account_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_lt?: InputMaybe<Scalars['String']['input']>;
  account_lte?: InputMaybe<Scalars['String']['input']>;
  account_not?: InputMaybe<Scalars['String']['input']>;
  account_not_contains?: InputMaybe<Scalars['String']['input']>;
  account_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  account_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  account_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  account_starts_with?: InputMaybe<Scalars['String']['input']>;
  account_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  and?: InputMaybe<Array<InputMaybe<RoyaltiesRegistry_Filter>>>;
  collectionId?: InputMaybe<Scalars['String']['input']>;
  collectionId_contains?: InputMaybe<Scalars['String']['input']>;
  collectionId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  collectionId_ends_with?: InputMaybe<Scalars['String']['input']>;
  collectionId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collectionId_gt?: InputMaybe<Scalars['String']['input']>;
  collectionId_gte?: InputMaybe<Scalars['String']['input']>;
  collectionId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  collectionId_lt?: InputMaybe<Scalars['String']['input']>;
  collectionId_lte?: InputMaybe<Scalars['String']['input']>;
  collectionId_not?: InputMaybe<Scalars['String']['input']>;
  collectionId_not_contains?: InputMaybe<Scalars['String']['input']>;
  collectionId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  collectionId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  collectionId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collectionId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  collectionId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  collectionId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  collectionId_starts_with?: InputMaybe<Scalars['String']['input']>;
  collectionId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<RoyaltiesRegistry_Filter>>>;
  tokenId?: InputMaybe<Scalars['String']['input']>;
  tokenId_contains?: InputMaybe<Scalars['String']['input']>;
  tokenId_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenId_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenId_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenId_gt?: InputMaybe<Scalars['String']['input']>;
  tokenId_gte?: InputMaybe<Scalars['String']['input']>;
  tokenId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenId_lt?: InputMaybe<Scalars['String']['input']>;
  tokenId_lte?: InputMaybe<Scalars['String']['input']>;
  tokenId_not?: InputMaybe<Scalars['String']['input']>;
  tokenId_not_contains?: InputMaybe<Scalars['String']['input']>;
  tokenId_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenId_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tokenId_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenId_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenId_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenId_starts_with?: InputMaybe<Scalars['String']['input']>;
  tokenId_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['Int']['input']>;
  value_gt?: InputMaybe<Scalars['Int']['input']>;
  value_gte?: InputMaybe<Scalars['Int']['input']>;
  value_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  value_lt?: InputMaybe<Scalars['Int']['input']>;
  value_lte?: InputMaybe<Scalars['Int']['input']>;
  value_not?: InputMaybe<Scalars['Int']['input']>;
  value_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export enum RoyaltiesRegistry_OrderBy {
  Account = 'account',
  CollectionId = 'collectionId',
  Id = 'id',
  TokenId = 'tokenId',
  Value = 'value'
}

export enum SellStatus {
  AcceptBid = 'AcceptBid',
  AskCancel = 'AskCancel',
  AskNew = 'AskNew',
  Bid = 'Bid',
  CancelBid = 'CancelBid',
  Trade = 'Trade'
}

export type Staking = {
  __typename?: 'Staking';
  id: Scalars['ID']['output'];
  totalClaimedRewards: Scalars['BigInt']['output'];
  totalDelegated: Scalars['BigInt']['output'];
  totalDelegator: Scalars['BigInt']['output'];
  totalLockStake: Scalars['BigInt']['output'];
  totalSelfStaked: Scalars['BigInt']['output'];
  totalStaked: Scalars['BigInt']['output'];
  totalValidator: Scalars['BigInt']['output'];
};

export type Staking_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Staking_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Staking_Filter>>>;
  totalClaimedRewards?: InputMaybe<Scalars['BigInt']['input']>;
  totalClaimedRewards_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalClaimedRewards_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalClaimedRewards_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalClaimedRewards_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalClaimedRewards_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalClaimedRewards_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalClaimedRewards_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalDelegated?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegated_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegated_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegated_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalDelegated_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegated_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegated_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegated_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalDelegator?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegator_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegator_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegator_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalDelegator_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegator_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegator_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegator_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalLockStake?: InputMaybe<Scalars['BigInt']['input']>;
  totalLockStake_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalLockStake_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalLockStake_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalLockStake_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalLockStake_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalLockStake_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalLockStake_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSelfStaked?: InputMaybe<Scalars['BigInt']['input']>;
  totalSelfStaked_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSelfStaked_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSelfStaked_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSelfStaked_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSelfStaked_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSelfStaked_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalSelfStaked_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalStaked?: InputMaybe<Scalars['BigInt']['input']>;
  totalStaked_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalStaked_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalStaked_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalStaked_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalStaked_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalStaked_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalStaked_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalValidator?: InputMaybe<Scalars['BigInt']['input']>;
  totalValidator_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalValidator_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalValidator_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalValidator_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalValidator_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalValidator_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalValidator_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Staking_OrderBy {
  Id = 'id',
  TotalClaimedRewards = 'totalClaimedRewards',
  TotalDelegated = 'totalDelegated',
  TotalDelegator = 'totalDelegator',
  TotalLockStake = 'totalLockStake',
  TotalSelfStaked = 'totalSelfStaked',
  TotalStaked = 'totalStaked',
  TotalValidator = 'totalValidator'
}

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  account?: Maybe<Account>;
  accountCollectionOwnership?: Maybe<AccountCollectionOwnership>;
  accountCollectionOwnerships: Array<AccountCollectionOwnership>;
  accounts: Array<Account>;
  block?: Maybe<Block>;
  blocks: Array<Block>;
  bundle?: Maybe<Bundle>;
  bundles: Array<Bundle>;
  burn?: Maybe<Burn>;
  burns: Array<Burn>;
  collect?: Maybe<Collect>;
  collects: Array<Collect>;
  contract?: Maybe<Contract>;
  contracts: Array<Contract>;
  creator?: Maybe<Creator>;
  creators: Array<Creator>;
  delegation?: Maybe<Delegation>;
  delegations: Array<Delegation>;
  delegator?: Maybe<Delegator>;
  delegators: Array<Delegator>;
  epoch?: Maybe<Epoch>;
  epoches: Array<Epoch>;
  erc721Contract?: Maybe<Erc721Contract>;
  erc721Contracts: Array<Erc721Contract>;
  erc721Creator?: Maybe<Erc721Creator>;
  erc721Creators: Array<Erc721Creator>;
  erc721Token?: Maybe<Erc721Token>;
  erc721Tokens: Array<Erc721Token>;
  erc721Transfer?: Maybe<Erc721Transfer>;
  erc721Transfers: Array<Erc721Transfer>;
  erc1155Balance?: Maybe<Erc1155Balance>;
  erc1155Balances: Array<Erc1155Balance>;
  erc1155Contract?: Maybe<Erc1155Contract>;
  erc1155Contracts: Array<Erc1155Contract>;
  erc1155Creator?: Maybe<Erc1155Creator>;
  erc1155Creators: Array<Erc1155Creator>;
  erc1155Token?: Maybe<Erc1155Token>;
  erc1155Tokens: Array<Erc1155Token>;
  erc1155Transfer?: Maybe<Erc1155Transfer>;
  erc1155Transfers: Array<Erc1155Transfer>;
  event?: Maybe<Event>;
  events: Array<Event>;
  factories: Array<Factory>;
  factory?: Maybe<Factory>;
  flash?: Maybe<Flash>;
  flashes: Array<Flash>;
  lockedUp?: Maybe<LockedUp>;
  lockedUps: Array<LockedUp>;
  marketEvent721?: Maybe<MarketEvent721>;
  marketEvent721S: Array<MarketEvent721>;
  marketEvent1155?: Maybe<MarketEvent1155>;
  marketEvent1155S: Array<MarketEvent1155>;
  marketFee?: Maybe<MarketFee>;
  marketFees: Array<MarketFee>;
  marketVolume?: Maybe<MarketVolume>;
  marketVolumes: Array<MarketVolume>;
  mint?: Maybe<Mint>;
  mints: Array<Mint>;
  onSaleStatus1155?: Maybe<OnSaleStatus1155>;
  onSaleStatus1155S: Array<OnSaleStatus1155>;
  order?: Maybe<Order>;
  orderTransfer?: Maybe<OrderTransfer>;
  orderTransfers: Array<OrderTransfer>;
  orders: Array<Order>;
  ownedTokenCount?: Maybe<OwnedTokenCount>;
  ownedTokenCounts: Array<OwnedTokenCount>;
  ownerContract?: Maybe<OwnerContract>;
  ownerContracts: Array<OwnerContract>;
  pancakeDayData?: Maybe<PancakeDayData>;
  pancakeDayDatas: Array<PancakeDayData>;
  pool?: Maybe<Pool>;
  pool5MinuteCandleData?: Maybe<Pool5MinuteCandleData>;
  pool5MinuteCandleDatas: Array<Pool5MinuteCandleData>;
  pool15MinuteCandleData?: Maybe<Pool15MinuteCandleData>;
  pool15MinuteCandleDatas: Array<Pool15MinuteCandleData>;
  pool30MinuteCandleData?: Maybe<Pool30MinuteCandleData>;
  pool30MinuteCandleDatas: Array<Pool30MinuteCandleData>;
  poolDayCandleData?: Maybe<PoolDayCandleData>;
  poolDayCandleDatas: Array<PoolDayCandleData>;
  poolDayData?: Maybe<PoolDayData>;
  poolDayDatas: Array<PoolDayData>;
  poolHourCandleData?: Maybe<PoolHourCandleData>;
  poolHourCandleDatas: Array<PoolHourCandleData>;
  poolHourData?: Maybe<PoolHourData>;
  poolHourDatas: Array<PoolHourData>;
  poolMinuteCandleData?: Maybe<PoolMinuteCandleData>;
  poolMinuteCandleDatas: Array<PoolMinuteCandleData>;
  poolMonthCandleData?: Maybe<PoolMonthCandleData>;
  poolMonthCandleDatas: Array<PoolMonthCandleData>;
  poolWeekCandleData?: Maybe<PoolWeekCandleData>;
  poolWeekCandleDatas: Array<PoolWeekCandleData>;
  pools: Array<Pool>;
  position?: Maybe<Position>;
  positionSnapshot?: Maybe<PositionSnapshot>;
  positionSnapshots: Array<PositionSnapshot>;
  positions: Array<Position>;
  royaltiesRegistries: Array<RoyaltiesRegistry>;
  royaltiesRegistry?: Maybe<RoyaltiesRegistry>;
  staking?: Maybe<Staking>;
  stakings: Array<Staking>;
  swap?: Maybe<Swap>;
  swaps: Array<Swap>;
  tick?: Maybe<Tick>;
  tickDayData?: Maybe<TickDayData>;
  tickDayDatas: Array<TickDayData>;
  tickHourData?: Maybe<TickHourData>;
  tickHourDatas: Array<TickHourData>;
  ticks: Array<Tick>;
  token?: Maybe<Token>;
  tokenDayData?: Maybe<TokenDayData>;
  tokenDayDatas: Array<TokenDayData>;
  tokenHourData?: Maybe<TokenHourData>;
  tokenHourDatas: Array<TokenHourData>;
  tokens: Array<Token>;
  transaction?: Maybe<Transaction>;
  transactionCount?: Maybe<TransactionCount>;
  transactionCounts: Array<TransactionCount>;
  transactions: Array<Transaction>;
  transation?: Maybe<Transation>;
  transations: Array<Transation>;
  validation?: Maybe<Validation>;
  validations: Array<Validation>;
  validator?: Maybe<Validator>;
  validators: Array<Validator>;
  withdrawalRequest?: Maybe<WithdrawalRequest>;
  withdrawalRequests: Array<WithdrawalRequest>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionAccountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAccountCollectionOwnershipArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionAccountCollectionOwnershipsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<AccountCollectionOwnership_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AccountCollectionOwnership_Filter>;
};


export type SubscriptionAccountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Account_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Account_Filter>;
};


export type SubscriptionBlockArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBlocksArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Block_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Block_Filter>;
};


export type SubscriptionBundleArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBundlesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Bundle_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Bundle_Filter>;
};


export type SubscriptionBurnArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBurnsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Burn_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Burn_Filter>;
};


export type SubscriptionCollectArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCollectsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Collect_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Collect_Filter>;
};


export type SubscriptionContractArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionContractsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Contract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Contract_Filter>;
};


export type SubscriptionCreatorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCreatorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Creator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Creator_Filter>;
};


export type SubscriptionDelegationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDelegationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Delegation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Delegation_Filter>;
};


export type SubscriptionDelegatorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDelegatorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Delegator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Delegator_Filter>;
};


export type SubscriptionEpochArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEpochesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Epoch_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Epoch_Filter>;
};


export type SubscriptionErc721ContractArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionErc721ContractsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc721Contract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc721Contract_Filter>;
};


export type SubscriptionErc721CreatorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionErc721CreatorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc721Creator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc721Creator_Filter>;
};


export type SubscriptionErc721TokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionErc721TokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc721Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc721Token_Filter>;
};


export type SubscriptionErc721TransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionErc721TransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc721Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc721Transfer_Filter>;
};


export type SubscriptionErc1155BalanceArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionErc1155BalancesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc1155Balance_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc1155Balance_Filter>;
};


export type SubscriptionErc1155ContractArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionErc1155ContractsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc1155Contract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc1155Contract_Filter>;
};


export type SubscriptionErc1155CreatorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionErc1155CreatorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc1155Creator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc1155Creator_Filter>;
};


export type SubscriptionErc1155TokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionErc1155TokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc1155Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc1155Token_Filter>;
};


export type SubscriptionErc1155TransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionErc1155TransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Erc1155Transfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Erc1155Transfer_Filter>;
};


export type SubscriptionEventArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionEventsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Event_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Event_Filter>;
};


export type SubscriptionFactoriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Factory_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Factory_Filter>;
};


export type SubscriptionFactoryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionFlashArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionFlashesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Flash_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Flash_Filter>;
};


export type SubscriptionLockedUpArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionLockedUpsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LockedUp_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LockedUp_Filter>;
};


export type SubscriptionMarketEvent721Args = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMarketEvent721SArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MarketEvent721_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketEvent721_Filter>;
};


export type SubscriptionMarketEvent1155Args = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMarketEvent1155SArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MarketEvent1155_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketEvent1155_Filter>;
};


export type SubscriptionMarketFeeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMarketFeesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MarketFee_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketFee_Filter>;
};


export type SubscriptionMarketVolumeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMarketVolumesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<MarketVolume_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<MarketVolume_Filter>;
};


export type SubscriptionMintArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMintsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Mint_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Mint_Filter>;
};


export type SubscriptionOnSaleStatus1155Args = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOnSaleStatus1155SArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OnSaleStatus1155_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OnSaleStatus1155_Filter>;
};


export type SubscriptionOrderArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOrderTransferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOrderTransfersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderTransfer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OrderTransfer_Filter>;
};


export type SubscriptionOrdersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Order_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Order_Filter>;
};


export type SubscriptionOwnedTokenCountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOwnedTokenCountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OwnedTokenCount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OwnedTokenCount_Filter>;
};


export type SubscriptionOwnerContractArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOwnerContractsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OwnerContract_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OwnerContract_Filter>;
};


export type SubscriptionPancakeDayDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPancakeDayDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PancakeDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PancakeDayData_Filter>;
};


export type SubscriptionPoolArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPool5MinuteCandleDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPool5MinuteCandleDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pool5MinuteCandleData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Pool5MinuteCandleData_Filter>;
};


export type SubscriptionPool15MinuteCandleDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPool15MinuteCandleDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pool15MinuteCandleData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Pool15MinuteCandleData_Filter>;
};


export type SubscriptionPool30MinuteCandleDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPool30MinuteCandleDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pool30MinuteCandleData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Pool30MinuteCandleData_Filter>;
};


export type SubscriptionPoolDayCandleDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPoolDayCandleDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolDayCandleData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolDayCandleData_Filter>;
};


export type SubscriptionPoolDayDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPoolDayDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolDayData_Filter>;
};


export type SubscriptionPoolHourCandleDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPoolHourCandleDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolHourCandleData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolHourCandleData_Filter>;
};


export type SubscriptionPoolHourDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPoolHourDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolHourData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolHourData_Filter>;
};


export type SubscriptionPoolMinuteCandleDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPoolMinuteCandleDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolMinuteCandleData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolMinuteCandleData_Filter>;
};


export type SubscriptionPoolMonthCandleDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPoolMonthCandleDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolMonthCandleData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolMonthCandleData_Filter>;
};


export type SubscriptionPoolWeekCandleDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPoolWeekCandleDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PoolWeekCandleData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PoolWeekCandleData_Filter>;
};


export type SubscriptionPoolsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Pool_Filter>;
};


export type SubscriptionPositionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPositionSnapshotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPositionSnapshotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<PositionSnapshot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PositionSnapshot_Filter>;
};


export type SubscriptionPositionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Position_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Position_Filter>;
};


export type SubscriptionRoyaltiesRegistriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RoyaltiesRegistry_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<RoyaltiesRegistry_Filter>;
};


export type SubscriptionRoyaltiesRegistryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionStakingArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionStakingsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Staking_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Staking_Filter>;
};


export type SubscriptionSwapArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionSwapsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Swap_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Swap_Filter>;
};


export type SubscriptionTickArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTickDayDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTickDayDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TickDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TickDayData_Filter>;
};


export type SubscriptionTickHourDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTickHourDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TickHourData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TickHourData_Filter>;
};


export type SubscriptionTicksArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Tick_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Tick_Filter>;
};


export type SubscriptionTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenDayDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenDayDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenDayData_Filter>;
};


export type SubscriptionTokenHourDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTokenHourDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenHourData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenHourData_Filter>;
};


export type SubscriptionTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
};


export type SubscriptionTransactionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTransactionCountArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTransactionCountsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TransactionCount_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TransactionCount_Filter>;
};


export type SubscriptionTransactionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Transaction_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Transaction_Filter>;
};


export type SubscriptionTransationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTransationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Transation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Transation_Filter>;
};


export type SubscriptionValidationArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionValidationsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Validation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Validation_Filter>;
};


export type SubscriptionValidatorArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionValidatorsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Validator_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Validator_Filter>;
};


export type SubscriptionWithdrawalRequestArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionWithdrawalRequestsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<WithdrawalRequest_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<WithdrawalRequest_Filter>;
};

export type Swap = {
  __typename?: 'Swap';
  amount0: Scalars['BigDecimal']['output'];
  amount1: Scalars['BigDecimal']['output'];
  amountFeeUSD: Scalars['BigDecimal']['output'];
  amountUSD: Scalars['BigDecimal']['output'];
  id: Scalars['ID']['output'];
  logIndex?: Maybe<Scalars['BigInt']['output']>;
  origin: Scalars['Bytes']['output'];
  pool: Pool;
  recipient: Scalars['Bytes']['output'];
  sender: Scalars['Bytes']['output'];
  sqrtPriceX96: Scalars['BigInt']['output'];
  tick: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  token0: Token;
  token1: Token;
  transaction: Transaction;
};

export type Swap_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount0?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount1?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amount1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amount1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amountFeeUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountFeeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountFeeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountFeeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amountFeeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountFeeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountFeeUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountFeeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amountUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amountUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Swap_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  logIndex?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_gte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  logIndex_lt?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_lte?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not?: InputMaybe<Scalars['BigInt']['input']>;
  logIndex_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Swap_Filter>>>;
  origin?: InputMaybe<Scalars['Bytes']['input']>;
  origin_contains?: InputMaybe<Scalars['Bytes']['input']>;
  origin_gt?: InputMaybe<Scalars['Bytes']['input']>;
  origin_gte?: InputMaybe<Scalars['Bytes']['input']>;
  origin_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  origin_lt?: InputMaybe<Scalars['Bytes']['input']>;
  origin_lte?: InputMaybe<Scalars['Bytes']['input']>;
  origin_not?: InputMaybe<Scalars['Bytes']['input']>;
  origin_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  origin_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  recipient?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_contains?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_gt?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_gte?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  recipient_lt?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_lte?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  recipient_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender?: InputMaybe<Scalars['Bytes']['input']>;
  sender_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_gte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sender_lt?: InputMaybe<Scalars['Bytes']['input']>;
  sender_lte?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  sender_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  sqrtPriceX96?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPriceX96_gt?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPriceX96_gte?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPriceX96_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  sqrtPriceX96_lt?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPriceX96_lte?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPriceX96_not?: InputMaybe<Scalars['BigInt']['input']>;
  sqrtPriceX96_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tick?: InputMaybe<Scalars['BigInt']['input']>;
  tick_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tick_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tick_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tick_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tick_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tick_not?: InputMaybe<Scalars['BigInt']['input']>;
  tick_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  token0?: InputMaybe<Scalars['String']['input']>;
  token0_?: InputMaybe<Token_Filter>;
  token0_contains?: InputMaybe<Scalars['String']['input']>;
  token0_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token0_ends_with?: InputMaybe<Scalars['String']['input']>;
  token0_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token0_gt?: InputMaybe<Scalars['String']['input']>;
  token0_gte?: InputMaybe<Scalars['String']['input']>;
  token0_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token0_lt?: InputMaybe<Scalars['String']['input']>;
  token0_lte?: InputMaybe<Scalars['String']['input']>;
  token0_not?: InputMaybe<Scalars['String']['input']>;
  token0_not_contains?: InputMaybe<Scalars['String']['input']>;
  token0_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token0_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token0_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token0_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token0_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token0_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token0_starts_with?: InputMaybe<Scalars['String']['input']>;
  token0_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token1?: InputMaybe<Scalars['String']['input']>;
  token1_?: InputMaybe<Token_Filter>;
  token1_contains?: InputMaybe<Scalars['String']['input']>;
  token1_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token1_ends_with?: InputMaybe<Scalars['String']['input']>;
  token1_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token1_gt?: InputMaybe<Scalars['String']['input']>;
  token1_gte?: InputMaybe<Scalars['String']['input']>;
  token1_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token1_lt?: InputMaybe<Scalars['String']['input']>;
  token1_lte?: InputMaybe<Scalars['String']['input']>;
  token1_not?: InputMaybe<Scalars['String']['input']>;
  token1_not_contains?: InputMaybe<Scalars['String']['input']>;
  token1_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token1_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token1_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token1_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token1_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token1_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token1_starts_with?: InputMaybe<Scalars['String']['input']>;
  token1_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction?: InputMaybe<Scalars['String']['input']>;
  transaction_?: InputMaybe<Transaction_Filter>;
  transaction_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_gt?: InputMaybe<Scalars['String']['input']>;
  transaction_gte?: InputMaybe<Scalars['String']['input']>;
  transaction_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_lt?: InputMaybe<Scalars['String']['input']>;
  transaction_lte?: InputMaybe<Scalars['String']['input']>;
  transaction_not?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains?: InputMaybe<Scalars['String']['input']>;
  transaction_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  transaction_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with?: InputMaybe<Scalars['String']['input']>;
  transaction_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum Swap_OrderBy {
  Amount0 = 'amount0',
  Amount1 = 'amount1',
  AmountFeeUsd = 'amountFeeUSD',
  AmountUsd = 'amountUSD',
  Id = 'id',
  LogIndex = 'logIndex',
  Origin = 'origin',
  Pool = 'pool',
  PoolCollectedFeesToken0 = 'pool__collectedFeesToken0',
  PoolCollectedFeesToken1 = 'pool__collectedFeesToken1',
  PoolCollectedFeesUsd = 'pool__collectedFeesUSD',
  PoolCreatedAtBlockNumber = 'pool__createdAtBlockNumber',
  PoolCreatedAtTimestamp = 'pool__createdAtTimestamp',
  PoolFeeGrowthGlobal0X128 = 'pool__feeGrowthGlobal0X128',
  PoolFeeGrowthGlobal1X128 = 'pool__feeGrowthGlobal1X128',
  PoolFeeProtocol = 'pool__feeProtocol',
  PoolFeeTier = 'pool__feeTier',
  PoolFeesUsd = 'pool__feesUSD',
  PoolId = 'pool__id',
  PoolLiquidity = 'pool__liquidity',
  PoolLiquidityProviderCount = 'pool__liquidityProviderCount',
  PoolObservationIndex = 'pool__observationIndex',
  PoolProtocolFeesUsd = 'pool__protocolFeesUSD',
  PoolSqrtPrice = 'pool__sqrtPrice',
  PoolTick = 'pool__tick',
  PoolToken0Price = 'pool__token0Price',
  PoolToken1Price = 'pool__token1Price',
  PoolTotalValueLockedEth = 'pool__totalValueLockedETH',
  PoolTotalValueLockedEthUntracked = 'pool__totalValueLockedETHUntracked',
  PoolTotalValueLockedToken0 = 'pool__totalValueLockedToken0',
  PoolTotalValueLockedToken1 = 'pool__totalValueLockedToken1',
  PoolTotalValueLockedUsd = 'pool__totalValueLockedUSD',
  PoolTotalValueLockedUsdUntracked = 'pool__totalValueLockedUSDUntracked',
  PoolTxCount = 'pool__txCount',
  PoolUntrackedVolumeUsd = 'pool__untrackedVolumeUSD',
  PoolVolumeToken0 = 'pool__volumeToken0',
  PoolVolumeToken1 = 'pool__volumeToken1',
  PoolVolumeUsd = 'pool__volumeUSD',
  Recipient = 'recipient',
  Sender = 'sender',
  SqrtPriceX96 = 'sqrtPriceX96',
  Tick = 'tick',
  Timestamp = 'timestamp',
  Token0 = 'token0',
  Token0Decimals = 'token0__decimals',
  Token0DerivedEth = 'token0__derivedETH',
  Token0DerivedUsd = 'token0__derivedUSD',
  Token0FeesUsd = 'token0__feesUSD',
  Token0Id = 'token0__id',
  Token0Name = 'token0__name',
  Token0PoolCount = 'token0__poolCount',
  Token0ProtocolFeesUsd = 'token0__protocolFeesUSD',
  Token0Symbol = 'token0__symbol',
  Token0TotalSupply = 'token0__totalSupply',
  Token0TotalValueLocked = 'token0__totalValueLocked',
  Token0TotalValueLockedUsd = 'token0__totalValueLockedUSD',
  Token0TotalValueLockedUsdUntracked = 'token0__totalValueLockedUSDUntracked',
  Token0TxCount = 'token0__txCount',
  Token0UntrackedVolumeUsd = 'token0__untrackedVolumeUSD',
  Token0Volume = 'token0__volume',
  Token0VolumeUsd = 'token0__volumeUSD',
  Token1 = 'token1',
  Token1Decimals = 'token1__decimals',
  Token1DerivedEth = 'token1__derivedETH',
  Token1DerivedUsd = 'token1__derivedUSD',
  Token1FeesUsd = 'token1__feesUSD',
  Token1Id = 'token1__id',
  Token1Name = 'token1__name',
  Token1PoolCount = 'token1__poolCount',
  Token1ProtocolFeesUsd = 'token1__protocolFeesUSD',
  Token1Symbol = 'token1__symbol',
  Token1TotalSupply = 'token1__totalSupply',
  Token1TotalValueLocked = 'token1__totalValueLocked',
  Token1TotalValueLockedUsd = 'token1__totalValueLockedUSD',
  Token1TotalValueLockedUsdUntracked = 'token1__totalValueLockedUSDUntracked',
  Token1TxCount = 'token1__txCount',
  Token1UntrackedVolumeUsd = 'token1__untrackedVolumeUSD',
  Token1Volume = 'token1__volume',
  Token1VolumeUsd = 'token1__volumeUSD',
  Transaction = 'transaction',
  TransactionBlockNumber = 'transaction__blockNumber',
  TransactionGasPrice = 'transaction__gasPrice',
  TransactionGasUsed = 'transaction__gasUsed',
  TransactionId = 'transaction__id',
  TransactionTimestamp = 'transaction__timestamp'
}

export type Tick = {
  __typename?: 'Tick';
  collectedFeesToken0: Scalars['BigDecimal']['output'];
  collectedFeesToken1: Scalars['BigDecimal']['output'];
  collectedFeesUSD: Scalars['BigDecimal']['output'];
  createdAtBlockNumber: Scalars['BigInt']['output'];
  createdAtTimestamp: Scalars['BigInt']['output'];
  feeGrowthOutside0X128: Scalars['BigInt']['output'];
  feeGrowthOutside1X128: Scalars['BigInt']['output'];
  feesUSD: Scalars['BigDecimal']['output'];
  id: Scalars['ID']['output'];
  liquidityGross: Scalars['BigInt']['output'];
  liquidityNet: Scalars['BigInt']['output'];
  liquidityProviderCount: Scalars['BigInt']['output'];
  pool: Pool;
  poolAddress?: Maybe<Scalars['String']['output']>;
  price0: Scalars['BigDecimal']['output'];
  price1: Scalars['BigDecimal']['output'];
  tickIdx: Scalars['BigInt']['output'];
  untrackedVolumeUSD: Scalars['BigDecimal']['output'];
  volumeToken0: Scalars['BigDecimal']['output'];
  volumeToken1: Scalars['BigDecimal']['output'];
  volumeUSD: Scalars['BigDecimal']['output'];
};

export type TickDayData = {
  __typename?: 'TickDayData';
  date: Scalars['Int']['output'];
  feeGrowthOutside0X128: Scalars['BigInt']['output'];
  feeGrowthOutside1X128: Scalars['BigInt']['output'];
  feesUSD: Scalars['BigDecimal']['output'];
  id: Scalars['ID']['output'];
  liquidityGross: Scalars['BigInt']['output'];
  liquidityNet: Scalars['BigInt']['output'];
  pool: Pool;
  tick: Tick;
  volumeToken0: Scalars['BigDecimal']['output'];
  volumeToken1: Scalars['BigDecimal']['output'];
  volumeUSD: Scalars['BigDecimal']['output'];
};

export type TickDayData_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TickDayData_Filter>>>;
  date?: InputMaybe<Scalars['Int']['input']>;
  date_gt?: InputMaybe<Scalars['Int']['input']>;
  date_gte?: InputMaybe<Scalars['Int']['input']>;
  date_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  date_lt?: InputMaybe<Scalars['Int']['input']>;
  date_lte?: InputMaybe<Scalars['Int']['input']>;
  date_not?: InputMaybe<Scalars['Int']['input']>;
  date_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  feeGrowthOutside0X128?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthOutside0X128_gt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthOutside0X128_gte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthOutside0X128_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeGrowthOutside0X128_lt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthOutside0X128_lte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthOutside0X128_not?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthOutside0X128_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeGrowthOutside1X128?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthOutside1X128_gt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthOutside1X128_gte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthOutside1X128_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeGrowthOutside1X128_lt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthOutside1X128_lte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthOutside1X128_not?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthOutside1X128_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feesUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  feesUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  liquidityGross?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityGross_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityGross_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityGross_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidityGross_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityGross_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityGross_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityGross_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidityNet?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityNet_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityNet_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityNet_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidityNet_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityNet_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityNet_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityNet_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<TickDayData_Filter>>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tick?: InputMaybe<Scalars['String']['input']>;
  tick_?: InputMaybe<Tick_Filter>;
  tick_contains?: InputMaybe<Scalars['String']['input']>;
  tick_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_ends_with?: InputMaybe<Scalars['String']['input']>;
  tick_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_gt?: InputMaybe<Scalars['String']['input']>;
  tick_gte?: InputMaybe<Scalars['String']['input']>;
  tick_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tick_lt?: InputMaybe<Scalars['String']['input']>;
  tick_lte?: InputMaybe<Scalars['String']['input']>;
  tick_not?: InputMaybe<Scalars['String']['input']>;
  tick_not_contains?: InputMaybe<Scalars['String']['input']>;
  tick_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tick_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tick_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tick_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_starts_with?: InputMaybe<Scalars['String']['input']>;
  tick_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  volumeToken0?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeToken0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeToken1?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeToken1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export enum TickDayData_OrderBy {
  Date = 'date',
  FeeGrowthOutside0X128 = 'feeGrowthOutside0X128',
  FeeGrowthOutside1X128 = 'feeGrowthOutside1X128',
  FeesUsd = 'feesUSD',
  Id = 'id',
  LiquidityGross = 'liquidityGross',
  LiquidityNet = 'liquidityNet',
  Pool = 'pool',
  PoolCollectedFeesToken0 = 'pool__collectedFeesToken0',
  PoolCollectedFeesToken1 = 'pool__collectedFeesToken1',
  PoolCollectedFeesUsd = 'pool__collectedFeesUSD',
  PoolCreatedAtBlockNumber = 'pool__createdAtBlockNumber',
  PoolCreatedAtTimestamp = 'pool__createdAtTimestamp',
  PoolFeeGrowthGlobal0X128 = 'pool__feeGrowthGlobal0X128',
  PoolFeeGrowthGlobal1X128 = 'pool__feeGrowthGlobal1X128',
  PoolFeeProtocol = 'pool__feeProtocol',
  PoolFeeTier = 'pool__feeTier',
  PoolFeesUsd = 'pool__feesUSD',
  PoolId = 'pool__id',
  PoolLiquidity = 'pool__liquidity',
  PoolLiquidityProviderCount = 'pool__liquidityProviderCount',
  PoolObservationIndex = 'pool__observationIndex',
  PoolProtocolFeesUsd = 'pool__protocolFeesUSD',
  PoolSqrtPrice = 'pool__sqrtPrice',
  PoolTick = 'pool__tick',
  PoolToken0Price = 'pool__token0Price',
  PoolToken1Price = 'pool__token1Price',
  PoolTotalValueLockedEth = 'pool__totalValueLockedETH',
  PoolTotalValueLockedEthUntracked = 'pool__totalValueLockedETHUntracked',
  PoolTotalValueLockedToken0 = 'pool__totalValueLockedToken0',
  PoolTotalValueLockedToken1 = 'pool__totalValueLockedToken1',
  PoolTotalValueLockedUsd = 'pool__totalValueLockedUSD',
  PoolTotalValueLockedUsdUntracked = 'pool__totalValueLockedUSDUntracked',
  PoolTxCount = 'pool__txCount',
  PoolUntrackedVolumeUsd = 'pool__untrackedVolumeUSD',
  PoolVolumeToken0 = 'pool__volumeToken0',
  PoolVolumeToken1 = 'pool__volumeToken1',
  PoolVolumeUsd = 'pool__volumeUSD',
  Tick = 'tick',
  TickCollectedFeesToken0 = 'tick__collectedFeesToken0',
  TickCollectedFeesToken1 = 'tick__collectedFeesToken1',
  TickCollectedFeesUsd = 'tick__collectedFeesUSD',
  TickCreatedAtBlockNumber = 'tick__createdAtBlockNumber',
  TickCreatedAtTimestamp = 'tick__createdAtTimestamp',
  TickFeeGrowthOutside0X128 = 'tick__feeGrowthOutside0X128',
  TickFeeGrowthOutside1X128 = 'tick__feeGrowthOutside1X128',
  TickFeesUsd = 'tick__feesUSD',
  TickId = 'tick__id',
  TickLiquidityGross = 'tick__liquidityGross',
  TickLiquidityNet = 'tick__liquidityNet',
  TickLiquidityProviderCount = 'tick__liquidityProviderCount',
  TickPoolAddress = 'tick__poolAddress',
  TickPrice0 = 'tick__price0',
  TickPrice1 = 'tick__price1',
  TickTickIdx = 'tick__tickIdx',
  TickUntrackedVolumeUsd = 'tick__untrackedVolumeUSD',
  TickVolumeToken0 = 'tick__volumeToken0',
  TickVolumeToken1 = 'tick__volumeToken1',
  TickVolumeUsd = 'tick__volumeUSD',
  VolumeToken0 = 'volumeToken0',
  VolumeToken1 = 'volumeToken1',
  VolumeUsd = 'volumeUSD'
}

export type TickHourData = {
  __typename?: 'TickHourData';
  feesUSD: Scalars['BigDecimal']['output'];
  id: Scalars['ID']['output'];
  liquidityGross: Scalars['BigInt']['output'];
  liquidityNet: Scalars['BigInt']['output'];
  periodStartUnix: Scalars['Int']['output'];
  pool: Pool;
  tick: Tick;
  volumeToken0: Scalars['BigDecimal']['output'];
  volumeToken1: Scalars['BigDecimal']['output'];
  volumeUSD: Scalars['BigDecimal']['output'];
};

export type TickHourData_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TickHourData_Filter>>>;
  feesUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  feesUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  liquidityGross?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityGross_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityGross_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityGross_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidityGross_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityGross_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityGross_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityGross_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidityNet?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityNet_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityNet_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityNet_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidityNet_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityNet_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityNet_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityNet_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<TickHourData_Filter>>>;
  periodStartUnix?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_gt?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_gte?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  periodStartUnix_lt?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_lte?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_not?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tick?: InputMaybe<Scalars['String']['input']>;
  tick_?: InputMaybe<Tick_Filter>;
  tick_contains?: InputMaybe<Scalars['String']['input']>;
  tick_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_ends_with?: InputMaybe<Scalars['String']['input']>;
  tick_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_gt?: InputMaybe<Scalars['String']['input']>;
  tick_gte?: InputMaybe<Scalars['String']['input']>;
  tick_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tick_lt?: InputMaybe<Scalars['String']['input']>;
  tick_lte?: InputMaybe<Scalars['String']['input']>;
  tick_not?: InputMaybe<Scalars['String']['input']>;
  tick_not_contains?: InputMaybe<Scalars['String']['input']>;
  tick_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  tick_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tick_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  tick_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tick_starts_with?: InputMaybe<Scalars['String']['input']>;
  tick_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  volumeToken0?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeToken0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeToken1?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeToken1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export enum TickHourData_OrderBy {
  FeesUsd = 'feesUSD',
  Id = 'id',
  LiquidityGross = 'liquidityGross',
  LiquidityNet = 'liquidityNet',
  PeriodStartUnix = 'periodStartUnix',
  Pool = 'pool',
  PoolCollectedFeesToken0 = 'pool__collectedFeesToken0',
  PoolCollectedFeesToken1 = 'pool__collectedFeesToken1',
  PoolCollectedFeesUsd = 'pool__collectedFeesUSD',
  PoolCreatedAtBlockNumber = 'pool__createdAtBlockNumber',
  PoolCreatedAtTimestamp = 'pool__createdAtTimestamp',
  PoolFeeGrowthGlobal0X128 = 'pool__feeGrowthGlobal0X128',
  PoolFeeGrowthGlobal1X128 = 'pool__feeGrowthGlobal1X128',
  PoolFeeProtocol = 'pool__feeProtocol',
  PoolFeeTier = 'pool__feeTier',
  PoolFeesUsd = 'pool__feesUSD',
  PoolId = 'pool__id',
  PoolLiquidity = 'pool__liquidity',
  PoolLiquidityProviderCount = 'pool__liquidityProviderCount',
  PoolObservationIndex = 'pool__observationIndex',
  PoolProtocolFeesUsd = 'pool__protocolFeesUSD',
  PoolSqrtPrice = 'pool__sqrtPrice',
  PoolTick = 'pool__tick',
  PoolToken0Price = 'pool__token0Price',
  PoolToken1Price = 'pool__token1Price',
  PoolTotalValueLockedEth = 'pool__totalValueLockedETH',
  PoolTotalValueLockedEthUntracked = 'pool__totalValueLockedETHUntracked',
  PoolTotalValueLockedToken0 = 'pool__totalValueLockedToken0',
  PoolTotalValueLockedToken1 = 'pool__totalValueLockedToken1',
  PoolTotalValueLockedUsd = 'pool__totalValueLockedUSD',
  PoolTotalValueLockedUsdUntracked = 'pool__totalValueLockedUSDUntracked',
  PoolTxCount = 'pool__txCount',
  PoolUntrackedVolumeUsd = 'pool__untrackedVolumeUSD',
  PoolVolumeToken0 = 'pool__volumeToken0',
  PoolVolumeToken1 = 'pool__volumeToken1',
  PoolVolumeUsd = 'pool__volumeUSD',
  Tick = 'tick',
  TickCollectedFeesToken0 = 'tick__collectedFeesToken0',
  TickCollectedFeesToken1 = 'tick__collectedFeesToken1',
  TickCollectedFeesUsd = 'tick__collectedFeesUSD',
  TickCreatedAtBlockNumber = 'tick__createdAtBlockNumber',
  TickCreatedAtTimestamp = 'tick__createdAtTimestamp',
  TickFeeGrowthOutside0X128 = 'tick__feeGrowthOutside0X128',
  TickFeeGrowthOutside1X128 = 'tick__feeGrowthOutside1X128',
  TickFeesUsd = 'tick__feesUSD',
  TickId = 'tick__id',
  TickLiquidityGross = 'tick__liquidityGross',
  TickLiquidityNet = 'tick__liquidityNet',
  TickLiquidityProviderCount = 'tick__liquidityProviderCount',
  TickPoolAddress = 'tick__poolAddress',
  TickPrice0 = 'tick__price0',
  TickPrice1 = 'tick__price1',
  TickTickIdx = 'tick__tickIdx',
  TickUntrackedVolumeUsd = 'tick__untrackedVolumeUSD',
  TickVolumeToken0 = 'tick__volumeToken0',
  TickVolumeToken1 = 'tick__volumeToken1',
  TickVolumeUsd = 'tick__volumeUSD',
  VolumeToken0 = 'volumeToken0',
  VolumeToken1 = 'volumeToken1',
  VolumeUsd = 'volumeUSD'
}

export type Tick_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Tick_Filter>>>;
  collectedFeesToken0?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesToken0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesToken0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesToken0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  collectedFeesToken0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesToken0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesToken0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  collectedFeesToken1?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesToken1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesToken1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesToken1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  collectedFeesToken1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesToken1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesToken1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  collectedFeesUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  collectedFeesUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  collectedFeesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  createdAtBlockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeGrowthOutside0X128?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthOutside0X128_gt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthOutside0X128_gte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthOutside0X128_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeGrowthOutside0X128_lt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthOutside0X128_lte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthOutside0X128_not?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthOutside0X128_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeGrowthOutside1X128?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthOutside1X128_gt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthOutside1X128_gte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthOutside1X128_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feeGrowthOutside1X128_lt?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthOutside1X128_lte?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthOutside1X128_not?: InputMaybe<Scalars['BigInt']['input']>;
  feeGrowthOutside1X128_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  feesUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  feesUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  liquidityGross?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityGross_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityGross_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityGross_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidityGross_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityGross_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityGross_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityGross_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidityNet?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityNet_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityNet_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityNet_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidityNet_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityNet_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityNet_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityNet_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidityProviderCount?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityProviderCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityProviderCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityProviderCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidityProviderCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityProviderCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityProviderCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityProviderCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Tick_Filter>>>;
  pool?: InputMaybe<Scalars['String']['input']>;
  poolAddress?: InputMaybe<Scalars['String']['input']>;
  poolAddress_contains?: InputMaybe<Scalars['String']['input']>;
  poolAddress_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolAddress_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolAddress_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolAddress_gt?: InputMaybe<Scalars['String']['input']>;
  poolAddress_gte?: InputMaybe<Scalars['String']['input']>;
  poolAddress_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolAddress_lt?: InputMaybe<Scalars['String']['input']>;
  poolAddress_lte?: InputMaybe<Scalars['String']['input']>;
  poolAddress_not?: InputMaybe<Scalars['String']['input']>;
  poolAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
  poolAddress_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  poolAddress_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  poolAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolAddress_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  poolAddress_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  poolAddress_starts_with?: InputMaybe<Scalars['String']['input']>;
  poolAddress_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_?: InputMaybe<Pool_Filter>;
  pool_contains?: InputMaybe<Scalars['String']['input']>;
  pool_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_gt?: InputMaybe<Scalars['String']['input']>;
  pool_gte?: InputMaybe<Scalars['String']['input']>;
  pool_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_lt?: InputMaybe<Scalars['String']['input']>;
  pool_lte?: InputMaybe<Scalars['String']['input']>;
  pool_not?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains?: InputMaybe<Scalars['String']['input']>;
  pool_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pool_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with?: InputMaybe<Scalars['String']['input']>;
  pool_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  price0?: InputMaybe<Scalars['BigDecimal']['input']>;
  price0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  price0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  price0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  price0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  price0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  price0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  price0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  price1?: InputMaybe<Scalars['BigDecimal']['input']>;
  price1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  price1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  price1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  price1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  price1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  price1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  price1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tickIdx?: InputMaybe<Scalars['BigInt']['input']>;
  tickIdx_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tickIdx_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tickIdx_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tickIdx_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tickIdx_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tickIdx_not?: InputMaybe<Scalars['BigInt']['input']>;
  tickIdx_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  untrackedVolumeUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeToken0?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeToken0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeToken1?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeToken1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export enum Tick_OrderBy {
  CollectedFeesToken0 = 'collectedFeesToken0',
  CollectedFeesToken1 = 'collectedFeesToken1',
  CollectedFeesUsd = 'collectedFeesUSD',
  CreatedAtBlockNumber = 'createdAtBlockNumber',
  CreatedAtTimestamp = 'createdAtTimestamp',
  FeeGrowthOutside0X128 = 'feeGrowthOutside0X128',
  FeeGrowthOutside1X128 = 'feeGrowthOutside1X128',
  FeesUsd = 'feesUSD',
  Id = 'id',
  LiquidityGross = 'liquidityGross',
  LiquidityNet = 'liquidityNet',
  LiquidityProviderCount = 'liquidityProviderCount',
  Pool = 'pool',
  PoolAddress = 'poolAddress',
  PoolCollectedFeesToken0 = 'pool__collectedFeesToken0',
  PoolCollectedFeesToken1 = 'pool__collectedFeesToken1',
  PoolCollectedFeesUsd = 'pool__collectedFeesUSD',
  PoolCreatedAtBlockNumber = 'pool__createdAtBlockNumber',
  PoolCreatedAtTimestamp = 'pool__createdAtTimestamp',
  PoolFeeGrowthGlobal0X128 = 'pool__feeGrowthGlobal0X128',
  PoolFeeGrowthGlobal1X128 = 'pool__feeGrowthGlobal1X128',
  PoolFeeProtocol = 'pool__feeProtocol',
  PoolFeeTier = 'pool__feeTier',
  PoolFeesUsd = 'pool__feesUSD',
  PoolId = 'pool__id',
  PoolLiquidity = 'pool__liquidity',
  PoolLiquidityProviderCount = 'pool__liquidityProviderCount',
  PoolObservationIndex = 'pool__observationIndex',
  PoolProtocolFeesUsd = 'pool__protocolFeesUSD',
  PoolSqrtPrice = 'pool__sqrtPrice',
  PoolTick = 'pool__tick',
  PoolToken0Price = 'pool__token0Price',
  PoolToken1Price = 'pool__token1Price',
  PoolTotalValueLockedEth = 'pool__totalValueLockedETH',
  PoolTotalValueLockedEthUntracked = 'pool__totalValueLockedETHUntracked',
  PoolTotalValueLockedToken0 = 'pool__totalValueLockedToken0',
  PoolTotalValueLockedToken1 = 'pool__totalValueLockedToken1',
  PoolTotalValueLockedUsd = 'pool__totalValueLockedUSD',
  PoolTotalValueLockedUsdUntracked = 'pool__totalValueLockedUSDUntracked',
  PoolTxCount = 'pool__txCount',
  PoolUntrackedVolumeUsd = 'pool__untrackedVolumeUSD',
  PoolVolumeToken0 = 'pool__volumeToken0',
  PoolVolumeToken1 = 'pool__volumeToken1',
  PoolVolumeUsd = 'pool__volumeUSD',
  Price0 = 'price0',
  Price1 = 'price1',
  TickIdx = 'tickIdx',
  UntrackedVolumeUsd = 'untrackedVolumeUSD',
  VolumeToken0 = 'volumeToken0',
  VolumeToken1 = 'volumeToken1',
  VolumeUsd = 'volumeUSD'
}

export type Token = {
  __typename?: 'Token';
  decimals: Scalars['BigInt']['output'];
  derivedETH: Scalars['BigDecimal']['output'];
  derivedUSD: Scalars['BigDecimal']['output'];
  feesUSD: Scalars['BigDecimal']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  poolCount: Scalars['BigInt']['output'];
  protocolFeesUSD: Scalars['BigDecimal']['output'];
  symbol: Scalars['String']['output'];
  tokenDayData: Array<TokenDayData>;
  tokenHourData: Array<TokenHourData>;
  totalSupply: Scalars['BigInt']['output'];
  totalValueLocked: Scalars['BigDecimal']['output'];
  totalValueLockedUSD: Scalars['BigDecimal']['output'];
  totalValueLockedUSDUntracked: Scalars['BigDecimal']['output'];
  txCount: Scalars['BigInt']['output'];
  untrackedVolumeUSD: Scalars['BigDecimal']['output'];
  volume: Scalars['BigDecimal']['output'];
  volumeUSD: Scalars['BigDecimal']['output'];
  whitelistPools: Array<Pool>;
};


export type TokenTokenDayDataArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TokenDayData_Filter>;
};


export type TokenTokenHourDataArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenHourData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TokenHourData_Filter>;
};


export type TokenWhitelistPoolsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Pool_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Pool_Filter>;
};

export type TokenDayData = {
  __typename?: 'TokenDayData';
  close: Scalars['BigDecimal']['output'];
  date: Scalars['Int']['output'];
  feesUSD: Scalars['BigDecimal']['output'];
  high: Scalars['BigDecimal']['output'];
  id: Scalars['ID']['output'];
  low: Scalars['BigDecimal']['output'];
  open: Scalars['BigDecimal']['output'];
  priceUSD: Scalars['BigDecimal']['output'];
  protocolFeesUSD: Scalars['BigDecimal']['output'];
  token: Token;
  totalValueLocked: Scalars['BigDecimal']['output'];
  totalValueLockedUSD: Scalars['BigDecimal']['output'];
  untrackedVolumeUSD: Scalars['BigDecimal']['output'];
  volume: Scalars['BigDecimal']['output'];
  volumeUSD: Scalars['BigDecimal']['output'];
};

export type TokenDayData_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TokenDayData_Filter>>>;
  close?: InputMaybe<Scalars['BigDecimal']['input']>;
  close_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  close_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  close_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  close_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  close_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  close_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  close_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  date?: InputMaybe<Scalars['Int']['input']>;
  date_gt?: InputMaybe<Scalars['Int']['input']>;
  date_gte?: InputMaybe<Scalars['Int']['input']>;
  date_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  date_lt?: InputMaybe<Scalars['Int']['input']>;
  date_lte?: InputMaybe<Scalars['Int']['input']>;
  date_not?: InputMaybe<Scalars['Int']['input']>;
  date_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  feesUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  feesUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  high?: InputMaybe<Scalars['BigDecimal']['input']>;
  high_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  high_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  high_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  high_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  high_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  high_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  high_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  low?: InputMaybe<Scalars['BigDecimal']['input']>;
  low_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  low_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  low_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  low_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  low_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  low_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  low_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  open?: InputMaybe<Scalars['BigDecimal']['input']>;
  open_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  open_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  open_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  open_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  open_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  open_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  open_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  or?: InputMaybe<Array<InputMaybe<TokenDayData_Filter>>>;
  priceUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  priceUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  protocolFeesUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  protocolFeesUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  totalValueLocked?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalValueLocked_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLocked_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLocked_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalValueLocked_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLocked_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLocked_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLocked_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  untrackedVolumeUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volume?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volume_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volume_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export enum TokenDayData_OrderBy {
  Close = 'close',
  Date = 'date',
  FeesUsd = 'feesUSD',
  High = 'high',
  Id = 'id',
  Low = 'low',
  Open = 'open',
  PriceUsd = 'priceUSD',
  ProtocolFeesUsd = 'protocolFeesUSD',
  Token = 'token',
  TokenDecimals = 'token__decimals',
  TokenDerivedEth = 'token__derivedETH',
  TokenDerivedUsd = 'token__derivedUSD',
  TokenFeesUsd = 'token__feesUSD',
  TokenId = 'token__id',
  TokenName = 'token__name',
  TokenPoolCount = 'token__poolCount',
  TokenProtocolFeesUsd = 'token__protocolFeesUSD',
  TokenSymbol = 'token__symbol',
  TokenTotalSupply = 'token__totalSupply',
  TokenTotalValueLocked = 'token__totalValueLocked',
  TokenTotalValueLockedUsd = 'token__totalValueLockedUSD',
  TokenTotalValueLockedUsdUntracked = 'token__totalValueLockedUSDUntracked',
  TokenTxCount = 'token__txCount',
  TokenUntrackedVolumeUsd = 'token__untrackedVolumeUSD',
  TokenVolume = 'token__volume',
  TokenVolumeUsd = 'token__volumeUSD',
  TotalValueLocked = 'totalValueLocked',
  TotalValueLockedUsd = 'totalValueLockedUSD',
  UntrackedVolumeUsd = 'untrackedVolumeUSD',
  Volume = 'volume',
  VolumeUsd = 'volumeUSD'
}

export type TokenHourData = {
  __typename?: 'TokenHourData';
  close: Scalars['BigDecimal']['output'];
  feesUSD: Scalars['BigDecimal']['output'];
  high: Scalars['BigDecimal']['output'];
  id: Scalars['ID']['output'];
  low: Scalars['BigDecimal']['output'];
  open: Scalars['BigDecimal']['output'];
  periodStartUnix: Scalars['Int']['output'];
  priceUSD: Scalars['BigDecimal']['output'];
  protocolFeesUSD: Scalars['BigDecimal']['output'];
  token: Token;
  totalValueLocked: Scalars['BigDecimal']['output'];
  totalValueLockedUSD: Scalars['BigDecimal']['output'];
  untrackedVolumeUSD: Scalars['BigDecimal']['output'];
  volume: Scalars['BigDecimal']['output'];
  volumeUSD: Scalars['BigDecimal']['output'];
};

export type TokenHourData_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TokenHourData_Filter>>>;
  close?: InputMaybe<Scalars['BigDecimal']['input']>;
  close_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  close_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  close_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  close_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  close_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  close_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  close_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  feesUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  feesUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  high?: InputMaybe<Scalars['BigDecimal']['input']>;
  high_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  high_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  high_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  high_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  high_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  high_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  high_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  low?: InputMaybe<Scalars['BigDecimal']['input']>;
  low_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  low_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  low_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  low_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  low_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  low_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  low_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  open?: InputMaybe<Scalars['BigDecimal']['input']>;
  open_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  open_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  open_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  open_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  open_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  open_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  open_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  or?: InputMaybe<Array<InputMaybe<TokenHourData_Filter>>>;
  periodStartUnix?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_gt?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_gte?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  periodStartUnix_lt?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_lte?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_not?: InputMaybe<Scalars['Int']['input']>;
  periodStartUnix_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  priceUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  priceUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  protocolFeesUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  protocolFeesUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token?: InputMaybe<Scalars['String']['input']>;
  token_?: InputMaybe<Token_Filter>;
  token_contains?: InputMaybe<Scalars['String']['input']>;
  token_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_gt?: InputMaybe<Scalars['String']['input']>;
  token_gte?: InputMaybe<Scalars['String']['input']>;
  token_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_lt?: InputMaybe<Scalars['String']['input']>;
  token_lte?: InputMaybe<Scalars['String']['input']>;
  token_not?: InputMaybe<Scalars['String']['input']>;
  token_not_contains?: InputMaybe<Scalars['String']['input']>;
  token_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  token_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  token_starts_with?: InputMaybe<Scalars['String']['input']>;
  token_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  totalValueLocked?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalValueLocked_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLocked_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLocked_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalValueLocked_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLocked_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLocked_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLocked_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  untrackedVolumeUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volume?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volume_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volume_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export enum TokenHourData_OrderBy {
  Close = 'close',
  FeesUsd = 'feesUSD',
  High = 'high',
  Id = 'id',
  Low = 'low',
  Open = 'open',
  PeriodStartUnix = 'periodStartUnix',
  PriceUsd = 'priceUSD',
  ProtocolFeesUsd = 'protocolFeesUSD',
  Token = 'token',
  TokenDecimals = 'token__decimals',
  TokenDerivedEth = 'token__derivedETH',
  TokenDerivedUsd = 'token__derivedUSD',
  TokenFeesUsd = 'token__feesUSD',
  TokenId = 'token__id',
  TokenName = 'token__name',
  TokenPoolCount = 'token__poolCount',
  TokenProtocolFeesUsd = 'token__protocolFeesUSD',
  TokenSymbol = 'token__symbol',
  TokenTotalSupply = 'token__totalSupply',
  TokenTotalValueLocked = 'token__totalValueLocked',
  TokenTotalValueLockedUsd = 'token__totalValueLockedUSD',
  TokenTotalValueLockedUsdUntracked = 'token__totalValueLockedUSDUntracked',
  TokenTxCount = 'token__txCount',
  TokenUntrackedVolumeUsd = 'token__untrackedVolumeUSD',
  TokenVolume = 'token__volume',
  TokenVolumeUsd = 'token__volumeUSD',
  TotalValueLocked = 'totalValueLocked',
  TotalValueLockedUsd = 'totalValueLockedUSD',
  UntrackedVolumeUsd = 'untrackedVolumeUSD',
  Volume = 'volume',
  VolumeUsd = 'volumeUSD'
}

export type Token_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Token_Filter>>>;
  decimals?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_gt?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_gte?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  decimals_lt?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_lte?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_not?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  derivedETH?: InputMaybe<Scalars['BigDecimal']['input']>;
  derivedETH_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  derivedETH_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  derivedETH_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  derivedETH_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  derivedETH_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  derivedETH_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  derivedETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  derivedUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  derivedUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  derivedUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  derivedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  derivedUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  derivedUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  derivedUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  derivedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  feesUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  feesUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  or?: InputMaybe<Array<InputMaybe<Token_Filter>>>;
  poolCount?: InputMaybe<Scalars['BigInt']['input']>;
  poolCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  poolCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  poolCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  poolCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  poolCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  poolCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  poolCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  protocolFeesUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  protocolFeesUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  protocolFeesUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  symbol?: InputMaybe<Scalars['String']['input']>;
  symbol_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_gt?: InputMaybe<Scalars['String']['input']>;
  symbol_gte?: InputMaybe<Scalars['String']['input']>;
  symbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_lt?: InputMaybe<Scalars['String']['input']>;
  symbol_lte?: InputMaybe<Scalars['String']['input']>;
  symbol_not?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with?: InputMaybe<Scalars['String']['input']>;
  symbol_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  tokenDayData_?: InputMaybe<TokenDayData_Filter>;
  tokenHourData_?: InputMaybe<TokenHourData_Filter>;
  totalSupply?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalValueLocked?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedUSDUntracked?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedUSDUntracked_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedUSDUntracked_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedUSDUntracked_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalValueLockedUSDUntracked_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedUSDUntracked_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedUSDUntracked_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedUSDUntracked_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalValueLockedUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalValueLockedUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLockedUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalValueLocked_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLocked_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLocked_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalValueLocked_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLocked_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLocked_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalValueLocked_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  txCount?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  txCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_not?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  untrackedVolumeUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volume?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volume_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volume_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_not?: InputMaybe<Scalars['BigDecimal']['input']>;
  volume_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  whitelistPools?: InputMaybe<Array<Scalars['String']['input']>>;
  whitelistPools_?: InputMaybe<Pool_Filter>;
  whitelistPools_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  whitelistPools_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  whitelistPools_not?: InputMaybe<Array<Scalars['String']['input']>>;
  whitelistPools_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  whitelistPools_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
};

export enum Token_OrderBy {
  Decimals = 'decimals',
  DerivedEth = 'derivedETH',
  DerivedUsd = 'derivedUSD',
  FeesUsd = 'feesUSD',
  Id = 'id',
  Name = 'name',
  PoolCount = 'poolCount',
  ProtocolFeesUsd = 'protocolFeesUSD',
  Symbol = 'symbol',
  TokenDayData = 'tokenDayData',
  TokenHourData = 'tokenHourData',
  TotalSupply = 'totalSupply',
  TotalValueLocked = 'totalValueLocked',
  TotalValueLockedUsd = 'totalValueLockedUSD',
  TotalValueLockedUsdUntracked = 'totalValueLockedUSDUntracked',
  TxCount = 'txCount',
  UntrackedVolumeUsd = 'untrackedVolumeUSD',
  Volume = 'volume',
  VolumeUsd = 'volumeUSD',
  WhitelistPools = 'whitelistPools'
}

export type Transaction = {
  __typename?: 'Transaction';
  blockNumber: Scalars['BigInt']['output'];
  burns: Array<Maybe<Burn>>;
  collects: Array<Maybe<Collect>>;
  events: Array<Event>;
  flashed: Array<Maybe<Flash>>;
  gasPrice: Scalars['BigInt']['output'];
  gasUsed: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  mints: Array<Maybe<Mint>>;
  swaps: Array<Maybe<Swap>>;
  timestamp: Scalars['BigInt']['output'];
};


export type TransactionBurnsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Burn_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Burn_Filter>;
};


export type TransactionCollectsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Collect_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Collect_Filter>;
};


export type TransactionEventsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Event_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Event_Filter>;
};


export type TransactionFlashedArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Flash_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Flash_Filter>;
};


export type TransactionMintsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Mint_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Mint_Filter>;
};


export type TransactionSwapsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Swap_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Swap_Filter>;
};

export type TransactionCount = {
  __typename?: 'TransactionCount';
  count: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
};

export type TransactionCount_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TransactionCount_Filter>>>;
  count?: InputMaybe<Scalars['BigInt']['input']>;
  count_gt?: InputMaybe<Scalars['BigInt']['input']>;
  count_gte?: InputMaybe<Scalars['BigInt']['input']>;
  count_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  count_lt?: InputMaybe<Scalars['BigInt']['input']>;
  count_lte?: InputMaybe<Scalars['BigInt']['input']>;
  count_not?: InputMaybe<Scalars['BigInt']['input']>;
  count_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<TransactionCount_Filter>>>;
};

export enum TransactionCount_OrderBy {
  Count = 'count',
  Id = 'id'
}

export type Transaction_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Transaction_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  burns_?: InputMaybe<Burn_Filter>;
  collects_?: InputMaybe<Collect_Filter>;
  events_?: InputMaybe<Event_Filter>;
  flashed_?: InputMaybe<Flash_Filter>;
  gasPrice?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_gte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  gasUsed_lt?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_lte?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not?: InputMaybe<Scalars['BigInt']['input']>;
  gasUsed_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  mints_?: InputMaybe<Mint_Filter>;
  or?: InputMaybe<Array<InputMaybe<Transaction_Filter>>>;
  swaps_?: InputMaybe<Swap_Filter>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Transaction_OrderBy {
  BlockNumber = 'blockNumber',
  Burns = 'burns',
  Collects = 'collects',
  Events = 'events',
  Flashed = 'flashed',
  GasPrice = 'gasPrice',
  GasUsed = 'gasUsed',
  Id = 'id',
  Mints = 'mints',
  Swaps = 'swaps',
  Timestamp = 'timestamp'
}

export type Transation = {
  __typename?: 'Transation';
  block: Scalars['BigInt']['output'];
  claimedAmount: Scalars['BigInt']['output'];
  createdAt: Scalars['BigInt']['output'];
  delegator: Scalars['Bytes']['output'];
  from: Scalars['Bytes']['output'];
  id: Scalars['ID']['output'];
  lockDuration: Scalars['BigInt']['output'];
  lockedAmount: Scalars['BigInt']['output'];
  penaltyAmount: Scalars['BigInt']['output'];
  stakedAmount: Scalars['BigInt']['output'];
  to?: Maybe<Scalars['Bytes']['output']>;
  txHash: Scalars['Bytes']['output'];
  type: Scalars['BigInt']['output'];
  undelegatedAmount: Scalars['BigInt']['output'];
  unlockedAmount: Scalars['BigInt']['output'];
  validatorId: Scalars['BigInt']['output'];
  withdrawalAmount: Scalars['BigInt']['output'];
  wrID: Scalars['BigInt']['output'];
};

export type Transation_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Transation_Filter>>>;
  block?: InputMaybe<Scalars['BigInt']['input']>;
  block_gt?: InputMaybe<Scalars['BigInt']['input']>;
  block_gte?: InputMaybe<Scalars['BigInt']['input']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  block_lt?: InputMaybe<Scalars['BigInt']['input']>;
  block_lte?: InputMaybe<Scalars['BigInt']['input']>;
  block_not?: InputMaybe<Scalars['BigInt']['input']>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  claimedAmount?: InputMaybe<Scalars['BigInt']['input']>;
  claimedAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  claimedAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  claimedAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  claimedAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  claimedAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  claimedAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  claimedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  delegator?: InputMaybe<Scalars['Bytes']['input']>;
  delegator_contains?: InputMaybe<Scalars['Bytes']['input']>;
  delegator_gt?: InputMaybe<Scalars['Bytes']['input']>;
  delegator_gte?: InputMaybe<Scalars['Bytes']['input']>;
  delegator_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  delegator_lt?: InputMaybe<Scalars['Bytes']['input']>;
  delegator_lte?: InputMaybe<Scalars['Bytes']['input']>;
  delegator_not?: InputMaybe<Scalars['Bytes']['input']>;
  delegator_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  delegator_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from?: InputMaybe<Scalars['Bytes']['input']>;
  from_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_gt?: InputMaybe<Scalars['Bytes']['input']>;
  from_gte?: InputMaybe<Scalars['Bytes']['input']>;
  from_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  from_lt?: InputMaybe<Scalars['Bytes']['input']>;
  from_lte?: InputMaybe<Scalars['Bytes']['input']>;
  from_not?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  from_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lockDuration?: InputMaybe<Scalars['BigInt']['input']>;
  lockDuration_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lockDuration_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lockDuration_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lockDuration_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lockDuration_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lockDuration_not?: InputMaybe<Scalars['BigInt']['input']>;
  lockDuration_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lockedAmount?: InputMaybe<Scalars['BigInt']['input']>;
  lockedAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lockedAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lockedAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lockedAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lockedAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lockedAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  lockedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Transation_Filter>>>;
  penaltyAmount?: InputMaybe<Scalars['BigInt']['input']>;
  penaltyAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  penaltyAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  penaltyAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  penaltyAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  penaltyAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  penaltyAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  penaltyAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stakedAmount?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stakedAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  to?: InputMaybe<Scalars['Bytes']['input']>;
  to_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to_gt?: InputMaybe<Scalars['Bytes']['input']>;
  to_gte?: InputMaybe<Scalars['Bytes']['input']>;
  to_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  to_lt?: InputMaybe<Scalars['Bytes']['input']>;
  to_lte?: InputMaybe<Scalars['Bytes']['input']>;
  to_not?: InputMaybe<Scalars['Bytes']['input']>;
  to_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  to_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  txHash?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  txHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  type?: InputMaybe<Scalars['BigInt']['input']>;
  type_gt?: InputMaybe<Scalars['BigInt']['input']>;
  type_gte?: InputMaybe<Scalars['BigInt']['input']>;
  type_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  type_lt?: InputMaybe<Scalars['BigInt']['input']>;
  type_lte?: InputMaybe<Scalars['BigInt']['input']>;
  type_not?: InputMaybe<Scalars['BigInt']['input']>;
  type_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  undelegatedAmount?: InputMaybe<Scalars['BigInt']['input']>;
  undelegatedAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  undelegatedAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  undelegatedAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  undelegatedAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  undelegatedAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  undelegatedAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  undelegatedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  unlockedAmount?: InputMaybe<Scalars['BigInt']['input']>;
  unlockedAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  unlockedAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  unlockedAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  unlockedAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  unlockedAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  unlockedAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  unlockedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  validatorId?: InputMaybe<Scalars['BigInt']['input']>;
  validatorId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  validatorId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  validatorId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  validatorId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  validatorId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  validatorId_not?: InputMaybe<Scalars['BigInt']['input']>;
  validatorId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  withdrawalAmount?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawalAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawalAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawalAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  withdrawalAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawalAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawalAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawalAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  wrID?: InputMaybe<Scalars['BigInt']['input']>;
  wrID_gt?: InputMaybe<Scalars['BigInt']['input']>;
  wrID_gte?: InputMaybe<Scalars['BigInt']['input']>;
  wrID_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  wrID_lt?: InputMaybe<Scalars['BigInt']['input']>;
  wrID_lte?: InputMaybe<Scalars['BigInt']['input']>;
  wrID_not?: InputMaybe<Scalars['BigInt']['input']>;
  wrID_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Transation_OrderBy {
  Block = 'block',
  ClaimedAmount = 'claimedAmount',
  CreatedAt = 'createdAt',
  Delegator = 'delegator',
  From = 'from',
  Id = 'id',
  LockDuration = 'lockDuration',
  LockedAmount = 'lockedAmount',
  PenaltyAmount = 'penaltyAmount',
  StakedAmount = 'stakedAmount',
  To = 'to',
  TxHash = 'txHash',
  Type = 'type',
  UndelegatedAmount = 'undelegatedAmount',
  UnlockedAmount = 'unlockedAmount',
  ValidatorId = 'validatorId',
  WithdrawalAmount = 'withdrawalAmount',
  WrId = 'wrID'
}

export type Validation = {
  __typename?: 'Validation';
  id: Scalars['ID']['output'];
  lockedEndtime: Scalars['BigInt']['output'];
  stakedAmount: Scalars['BigInt']['output'];
  totalLockStake: Scalars['BigInt']['output'];
  validator: Validator;
};

export type Validation_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<Validation_Filter>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lockedEndtime?: InputMaybe<Scalars['BigInt']['input']>;
  lockedEndtime_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lockedEndtime_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lockedEndtime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lockedEndtime_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lockedEndtime_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lockedEndtime_not?: InputMaybe<Scalars['BigInt']['input']>;
  lockedEndtime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Validation_Filter>>>;
  stakedAmount?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  stakedAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  stakedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalLockStake?: InputMaybe<Scalars['BigInt']['input']>;
  totalLockStake_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalLockStake_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalLockStake_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalLockStake_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalLockStake_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalLockStake_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalLockStake_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  validator?: InputMaybe<Scalars['String']['input']>;
  validator_?: InputMaybe<Validator_Filter>;
  validator_contains?: InputMaybe<Scalars['String']['input']>;
  validator_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  validator_ends_with?: InputMaybe<Scalars['String']['input']>;
  validator_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  validator_gt?: InputMaybe<Scalars['String']['input']>;
  validator_gte?: InputMaybe<Scalars['String']['input']>;
  validator_in?: InputMaybe<Array<Scalars['String']['input']>>;
  validator_lt?: InputMaybe<Scalars['String']['input']>;
  validator_lte?: InputMaybe<Scalars['String']['input']>;
  validator_not?: InputMaybe<Scalars['String']['input']>;
  validator_not_contains?: InputMaybe<Scalars['String']['input']>;
  validator_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  validator_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  validator_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  validator_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  validator_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  validator_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  validator_starts_with?: InputMaybe<Scalars['String']['input']>;
  validator_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
};

export enum Validation_OrderBy {
  Id = 'id',
  LockedEndtime = 'lockedEndtime',
  StakedAmount = 'stakedAmount',
  TotalLockStake = 'totalLockStake',
  Validator = 'validator',
  ValidatorActive = 'validator__active',
  ValidatorAuth = 'validator__auth',
  ValidatorCreatedEpoch = 'validator__createdEpoch',
  ValidatorCreatedTime = 'validator__createdTime',
  ValidatorDelegatedAmount = 'validator__delegatedAmount',
  ValidatorDownTime = 'validator__downTime',
  ValidatorHash = 'validator__hash',
  ValidatorId = 'validator__id',
  ValidatorLockDays = 'validator__lockDays',
  ValidatorLockedUntil = 'validator__lockedUntil',
  ValidatorOnline = 'validator__online',
  ValidatorSelfStaked = 'validator__selfStaked',
  ValidatorTotalClaimedRewards = 'validator__totalClaimedRewards',
  ValidatorTotalDelegator = 'validator__totalDelegator',
  ValidatorTotalLockStake = 'validator__totalLockStake',
  ValidatorTotalStakedAmount = 'validator__totalStakedAmount',
  ValidatorValidatorId = 'validator__validatorId'
}

export type Validator = {
  __typename?: 'Validator';
  active: Scalars['BigInt']['output'];
  auth: Scalars['Bytes']['output'];
  createdEpoch: Scalars['BigInt']['output'];
  createdTime: Scalars['BigInt']['output'];
  delegatedAmount: Scalars['BigInt']['output'];
  delegations: Array<Delegation>;
  downTime: Scalars['BigInt']['output'];
  hash: Scalars['Bytes']['output'];
  id: Scalars['ID']['output'];
  lockDays: Scalars['BigInt']['output'];
  lockedUntil: Scalars['BigInt']['output'];
  online: Scalars['BigInt']['output'];
  selfStaked: Scalars['BigInt']['output'];
  totalClaimedRewards: Scalars['BigInt']['output'];
  totalDelegator: Scalars['BigInt']['output'];
  totalLockStake: Scalars['BigInt']['output'];
  totalStakedAmount: Scalars['BigInt']['output'];
  validatorId: Scalars['BigInt']['output'];
};


export type ValidatorDelegationsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Delegation_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Delegation_Filter>;
};

export type Validator_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  active?: InputMaybe<Scalars['BigInt']['input']>;
  active_gt?: InputMaybe<Scalars['BigInt']['input']>;
  active_gte?: InputMaybe<Scalars['BigInt']['input']>;
  active_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  active_lt?: InputMaybe<Scalars['BigInt']['input']>;
  active_lte?: InputMaybe<Scalars['BigInt']['input']>;
  active_not?: InputMaybe<Scalars['BigInt']['input']>;
  active_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<Validator_Filter>>>;
  auth?: InputMaybe<Scalars['Bytes']['input']>;
  auth_contains?: InputMaybe<Scalars['Bytes']['input']>;
  auth_gt?: InputMaybe<Scalars['Bytes']['input']>;
  auth_gte?: InputMaybe<Scalars['Bytes']['input']>;
  auth_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  auth_lt?: InputMaybe<Scalars['Bytes']['input']>;
  auth_lte?: InputMaybe<Scalars['Bytes']['input']>;
  auth_not?: InputMaybe<Scalars['Bytes']['input']>;
  auth_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  auth_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  createdEpoch?: InputMaybe<Scalars['BigInt']['input']>;
  createdEpoch_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdEpoch_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdEpoch_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdEpoch_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdEpoch_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdEpoch_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdEpoch_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdTime?: InputMaybe<Scalars['BigInt']['input']>;
  createdTime_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdTime_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdTime_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdTime_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdTime_not?: InputMaybe<Scalars['BigInt']['input']>;
  createdTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  delegatedAmount?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  delegatedAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  delegatedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  delegations?: InputMaybe<Array<Scalars['String']['input']>>;
  delegations_?: InputMaybe<Delegation_Filter>;
  delegations_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  delegations_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  delegations_not?: InputMaybe<Array<Scalars['String']['input']>>;
  delegations_not_contains?: InputMaybe<Array<Scalars['String']['input']>>;
  delegations_not_contains_nocase?: InputMaybe<Array<Scalars['String']['input']>>;
  downTime?: InputMaybe<Scalars['BigInt']['input']>;
  downTime_gt?: InputMaybe<Scalars['BigInt']['input']>;
  downTime_gte?: InputMaybe<Scalars['BigInt']['input']>;
  downTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  downTime_lt?: InputMaybe<Scalars['BigInt']['input']>;
  downTime_lte?: InputMaybe<Scalars['BigInt']['input']>;
  downTime_not?: InputMaybe<Scalars['BigInt']['input']>;
  downTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  hash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  hash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  hash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  hash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  hash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  hash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  hash_not?: InputMaybe<Scalars['Bytes']['input']>;
  hash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  hash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lockDays?: InputMaybe<Scalars['BigInt']['input']>;
  lockDays_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lockDays_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lockDays_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lockDays_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lockDays_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lockDays_not?: InputMaybe<Scalars['BigInt']['input']>;
  lockDays_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lockedUntil?: InputMaybe<Scalars['BigInt']['input']>;
  lockedUntil_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lockedUntil_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lockedUntil_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lockedUntil_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lockedUntil_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lockedUntil_not?: InputMaybe<Scalars['BigInt']['input']>;
  lockedUntil_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  online?: InputMaybe<Scalars['BigInt']['input']>;
  online_gt?: InputMaybe<Scalars['BigInt']['input']>;
  online_gte?: InputMaybe<Scalars['BigInt']['input']>;
  online_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  online_lt?: InputMaybe<Scalars['BigInt']['input']>;
  online_lte?: InputMaybe<Scalars['BigInt']['input']>;
  online_not?: InputMaybe<Scalars['BigInt']['input']>;
  online_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Validator_Filter>>>;
  selfStaked?: InputMaybe<Scalars['BigInt']['input']>;
  selfStaked_gt?: InputMaybe<Scalars['BigInt']['input']>;
  selfStaked_gte?: InputMaybe<Scalars['BigInt']['input']>;
  selfStaked_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  selfStaked_lt?: InputMaybe<Scalars['BigInt']['input']>;
  selfStaked_lte?: InputMaybe<Scalars['BigInt']['input']>;
  selfStaked_not?: InputMaybe<Scalars['BigInt']['input']>;
  selfStaked_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalClaimedRewards?: InputMaybe<Scalars['BigInt']['input']>;
  totalClaimedRewards_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalClaimedRewards_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalClaimedRewards_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalClaimedRewards_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalClaimedRewards_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalClaimedRewards_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalClaimedRewards_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalDelegator?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegator_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegator_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegator_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalDelegator_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegator_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegator_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalDelegator_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalLockStake?: InputMaybe<Scalars['BigInt']['input']>;
  totalLockStake_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalLockStake_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalLockStake_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalLockStake_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalLockStake_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalLockStake_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalLockStake_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalStakedAmount?: InputMaybe<Scalars['BigInt']['input']>;
  totalStakedAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalStakedAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalStakedAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalStakedAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalStakedAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalStakedAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  totalStakedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  validatorId?: InputMaybe<Scalars['BigInt']['input']>;
  validatorId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  validatorId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  validatorId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  validatorId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  validatorId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  validatorId_not?: InputMaybe<Scalars['BigInt']['input']>;
  validatorId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum Validator_OrderBy {
  Active = 'active',
  Auth = 'auth',
  CreatedEpoch = 'createdEpoch',
  CreatedTime = 'createdTime',
  DelegatedAmount = 'delegatedAmount',
  Delegations = 'delegations',
  DownTime = 'downTime',
  Hash = 'hash',
  Id = 'id',
  LockDays = 'lockDays',
  LockedUntil = 'lockedUntil',
  Online = 'online',
  SelfStaked = 'selfStaked',
  TotalClaimedRewards = 'totalClaimedRewards',
  TotalDelegator = 'totalDelegator',
  TotalLockStake = 'totalLockStake',
  TotalStakedAmount = 'totalStakedAmount',
  ValidatorId = 'validatorId'
}

export type WithdrawalRequest = {
  __typename?: 'WithdrawalRequest';
  delegatorAddress: Scalars['Bytes']['output'];
  hash: Scalars['Bytes']['output'];
  id: Scalars['ID']['output'];
  time: Scalars['BigInt']['output'];
  unbondingAmount: Scalars['BigInt']['output'];
  validatorId: Scalars['BigInt']['output'];
  withdrawHash: Scalars['Bytes']['output'];
  withdrawTime: Scalars['BigInt']['output'];
  withdrawalAmount: Scalars['BigInt']['output'];
  wrID: Scalars['BigInt']['output'];
};

export type WithdrawalRequest_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<WithdrawalRequest_Filter>>>;
  delegatorAddress?: InputMaybe<Scalars['Bytes']['input']>;
  delegatorAddress_contains?: InputMaybe<Scalars['Bytes']['input']>;
  delegatorAddress_gt?: InputMaybe<Scalars['Bytes']['input']>;
  delegatorAddress_gte?: InputMaybe<Scalars['Bytes']['input']>;
  delegatorAddress_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  delegatorAddress_lt?: InputMaybe<Scalars['Bytes']['input']>;
  delegatorAddress_lte?: InputMaybe<Scalars['Bytes']['input']>;
  delegatorAddress_not?: InputMaybe<Scalars['Bytes']['input']>;
  delegatorAddress_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  delegatorAddress_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  hash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  hash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  hash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  hash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  hash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  hash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  hash_not?: InputMaybe<Scalars['Bytes']['input']>;
  hash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  hash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<WithdrawalRequest_Filter>>>;
  time?: InputMaybe<Scalars['BigInt']['input']>;
  time_gt?: InputMaybe<Scalars['BigInt']['input']>;
  time_gte?: InputMaybe<Scalars['BigInt']['input']>;
  time_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  time_lt?: InputMaybe<Scalars['BigInt']['input']>;
  time_lte?: InputMaybe<Scalars['BigInt']['input']>;
  time_not?: InputMaybe<Scalars['BigInt']['input']>;
  time_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  unbondingAmount?: InputMaybe<Scalars['BigInt']['input']>;
  unbondingAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  unbondingAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  unbondingAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  unbondingAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  unbondingAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  unbondingAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  unbondingAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  validatorId?: InputMaybe<Scalars['BigInt']['input']>;
  validatorId_gt?: InputMaybe<Scalars['BigInt']['input']>;
  validatorId_gte?: InputMaybe<Scalars['BigInt']['input']>;
  validatorId_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  validatorId_lt?: InputMaybe<Scalars['BigInt']['input']>;
  validatorId_lte?: InputMaybe<Scalars['BigInt']['input']>;
  validatorId_not?: InputMaybe<Scalars['BigInt']['input']>;
  validatorId_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  withdrawHash?: InputMaybe<Scalars['Bytes']['input']>;
  withdrawHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  withdrawHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  withdrawHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  withdrawHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  withdrawHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  withdrawHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  withdrawHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  withdrawHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  withdrawHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  withdrawTime?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawTime_gt?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawTime_gte?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawTime_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  withdrawTime_lt?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawTime_lte?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawTime_not?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawTime_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  withdrawalAmount?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawalAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawalAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawalAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  withdrawalAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawalAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawalAmount_not?: InputMaybe<Scalars['BigInt']['input']>;
  withdrawalAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  wrID?: InputMaybe<Scalars['BigInt']['input']>;
  wrID_gt?: InputMaybe<Scalars['BigInt']['input']>;
  wrID_gte?: InputMaybe<Scalars['BigInt']['input']>;
  wrID_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  wrID_lt?: InputMaybe<Scalars['BigInt']['input']>;
  wrID_lte?: InputMaybe<Scalars['BigInt']['input']>;
  wrID_not?: InputMaybe<Scalars['BigInt']['input']>;
  wrID_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum WithdrawalRequest_OrderBy {
  DelegatorAddress = 'delegatorAddress',
  Hash = 'hash',
  Id = 'id',
  Time = 'time',
  UnbondingAmount = 'unbondingAmount',
  ValidatorId = 'validatorId',
  WithdrawHash = 'withdrawHash',
  WithdrawTime = 'withdrawTime',
  WithdrawalAmount = 'withdrawalAmount',
  WrId = 'wrID'
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
  Deny = 'deny'
}



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;


/** Mapping of interface types */
export type ResolversInterfaceTypes<_RefType extends Record<string, unknown>> = {
  Event: ( Omit<Erc721Transfer, 'contract' | 'emitter' | 'from' | 'to' | 'token' | 'transaction'> & { contract: _RefType['ERC721Contract'], emitter: _RefType['Account'], from: _RefType['Account'], to: _RefType['Account'], token: _RefType['ERC721Token'], transaction: _RefType['Transaction'] } ) | ( Omit<Erc1155Transfer, 'contract' | 'emitter' | 'from' | 'fromBalance' | 'to' | 'toBalance' | 'token' | 'transaction'> & { contract: _RefType['ERC1155Contract'], emitter: _RefType['Account'], from?: Maybe<_RefType['Account']>, fromBalance?: Maybe<_RefType['ERC1155Balance']>, to?: Maybe<_RefType['Account']>, toBalance?: Maybe<_RefType['ERC1155Balance']>, token: _RefType['ERC1155Token'], transaction: _RefType['Transaction'] } );
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Account: ResolverTypeWrapper<Omit<Account, 'ERC721tokens' | 'ERC721transferFromEvent' | 'ERC721transferToEvent' | 'ERC1155balances' | 'ERC1155transferFromEvent' | 'ERC1155transferToEvent' | 'OnSaleStatus1155' | 'OwnedTokens' | 'asERC721' | 'asERC1155' | 'events'> & { ERC721tokens: Array<ResolversTypes['ERC721Token']>, ERC721transferFromEvent: Array<ResolversTypes['ERC721Transfer']>, ERC721transferToEvent: Array<ResolversTypes['ERC721Transfer']>, ERC1155balances: Array<ResolversTypes['ERC1155Balance']>, ERC1155transferFromEvent: Array<ResolversTypes['ERC1155Transfer']>, ERC1155transferToEvent: Array<ResolversTypes['ERC1155Transfer']>, OnSaleStatus1155?: Maybe<Array<ResolversTypes['OnSaleStatus1155']>>, OwnedTokens?: Maybe<Array<ResolversTypes['OwnedTokenCount']>>, asERC721?: Maybe<ResolversTypes['ERC721Contract']>, asERC1155?: Maybe<ResolversTypes['ERC1155Contract']>, events: Array<ResolversTypes['Event']> }>;
  AccountCollectionOwnership: ResolverTypeWrapper<Omit<AccountCollectionOwnership, 'account'> & { account: ResolversTypes['Account'] }>;
  AccountCollectionOwnership_filter: AccountCollectionOwnership_Filter;
  AccountCollectionOwnership_orderBy: AccountCollectionOwnership_OrderBy;
  Account_filter: Account_Filter;
  Account_orderBy: Account_OrderBy;
  ActionState: ActionState;
  BigDecimal: ResolverTypeWrapper<Scalars['BigDecimal']['output']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']['output']>;
  Block: ResolverTypeWrapper<Block>;
  BlockChangedFilter: BlockChangedFilter;
  Block_filter: Block_Filter;
  Block_height: Block_Height;
  Block_orderBy: Block_OrderBy;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Bundle: ResolverTypeWrapper<Bundle>;
  Bundle_filter: Bundle_Filter;
  Bundle_orderBy: Bundle_OrderBy;
  Burn: ResolverTypeWrapper<Omit<Burn, 'transaction'> & { transaction: ResolversTypes['Transaction'] }>;
  Burn_filter: Burn_Filter;
  Burn_orderBy: Burn_OrderBy;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']['output']>;
  Collect: ResolverTypeWrapper<Omit<Collect, 'transaction'> & { transaction: ResolversTypes['Transaction'] }>;
  Collect_filter: Collect_Filter;
  Collect_orderBy: Collect_OrderBy;
  Contract: ResolverTypeWrapper<Contract>;
  ContractType: ContractType;
  Contract_filter: Contract_Filter;
  Contract_orderBy: Contract_OrderBy;
  Creator: ResolverTypeWrapper<Omit<Creator, 'token721' | 'token1155'> & { token721?: Maybe<Array<ResolversTypes['ERC721Creator']>>, token1155?: Maybe<Array<ResolversTypes['ERC1155Creator']>> }>;
  Creator_filter: Creator_Filter;
  Creator_orderBy: Creator_OrderBy;
  DealType: DealType;
  Delegation: ResolverTypeWrapper<Delegation>;
  Delegation_filter: Delegation_Filter;
  Delegation_orderBy: Delegation_OrderBy;
  Delegator: ResolverTypeWrapper<Delegator>;
  Delegator_filter: Delegator_Filter;
  Delegator_orderBy: Delegator_OrderBy;
  ERC721Contract: ResolverTypeWrapper<Omit<Erc721Contract, 'asAccount' | 'tokens' | 'transfers'> & { asAccount: ResolversTypes['Account'], tokens: Array<ResolversTypes['ERC721Token']>, transfers: Array<ResolversTypes['ERC721Transfer']> }>;
  ERC721Contract_filter: Erc721Contract_Filter;
  ERC721Contract_orderBy: Erc721Contract_OrderBy;
  ERC721Creator: ResolverTypeWrapper<Omit<Erc721Creator, 'collection' | 'creator'> & { collection: ResolversTypes['ERC721Token'], creator: ResolversTypes['Creator'] }>;
  ERC721Creator_filter: Erc721Creator_Filter;
  ERC721Creator_orderBy: Erc721Creator_OrderBy;
  ERC721Token: ResolverTypeWrapper<Omit<Erc721Token, 'approval' | 'contract' | 'creators' | 'owner' | 'transfers'> & { approval: ResolversTypes['Account'], contract: ResolversTypes['ERC721Contract'], creators: Array<ResolversTypes['ERC721Creator']>, owner: ResolversTypes['Account'], transfers: Array<ResolversTypes['ERC721Transfer']> }>;
  ERC721Token_filter: Erc721Token_Filter;
  ERC721Token_orderBy: Erc721Token_OrderBy;
  ERC721Transfer: ResolverTypeWrapper<Omit<Erc721Transfer, 'contract' | 'emitter' | 'from' | 'to' | 'token' | 'transaction'> & { contract: ResolversTypes['ERC721Contract'], emitter: ResolversTypes['Account'], from: ResolversTypes['Account'], to: ResolversTypes['Account'], token: ResolversTypes['ERC721Token'], transaction: ResolversTypes['Transaction'] }>;
  ERC721Transfer_filter: Erc721Transfer_Filter;
  ERC721Transfer_orderBy: Erc721Transfer_OrderBy;
  ERC1155Balance: ResolverTypeWrapper<Omit<Erc1155Balance, 'account' | 'contract' | 'token' | 'transferFromEvent' | 'transferToEvent'> & { account?: Maybe<ResolversTypes['Account']>, contract?: Maybe<ResolversTypes['ERC1155Contract']>, token: ResolversTypes['ERC1155Token'], transferFromEvent: Array<ResolversTypes['ERC1155Transfer']>, transferToEvent: Array<ResolversTypes['ERC1155Transfer']> }>;
  ERC1155Balance_filter: Erc1155Balance_Filter;
  ERC1155Balance_orderBy: Erc1155Balance_OrderBy;
  ERC1155Contract: ResolverTypeWrapper<Omit<Erc1155Contract, 'asAccount' | 'balances' | 'tokens' | 'transfers'> & { asAccount: ResolversTypes['Account'], balances: Array<ResolversTypes['ERC1155Balance']>, tokens: Array<ResolversTypes['ERC1155Token']>, transfers: Array<ResolversTypes['ERC1155Transfer']> }>;
  ERC1155Contract_filter: Erc1155Contract_Filter;
  ERC1155Contract_orderBy: Erc1155Contract_OrderBy;
  ERC1155Creator: ResolverTypeWrapper<Omit<Erc1155Creator, 'collection' | 'creator'> & { collection: ResolversTypes['ERC1155Token'], creator: ResolversTypes['Creator'] }>;
  ERC1155Creator_filter: Erc1155Creator_Filter;
  ERC1155Creator_orderBy: Erc1155Creator_OrderBy;
  ERC1155Token: ResolverTypeWrapper<Omit<Erc1155Token, 'balances' | 'contract' | 'creators' | 'totalSupply' | 'transfers'> & { balances: Array<ResolversTypes['ERC1155Balance']>, contract: ResolversTypes['ERC1155Contract'], creators: Array<ResolversTypes['ERC1155Creator']>, totalSupply: ResolversTypes['ERC1155Balance'], transfers: Array<ResolversTypes['ERC1155Transfer']> }>;
  ERC1155Token_filter: Erc1155Token_Filter;
  ERC1155Token_orderBy: Erc1155Token_OrderBy;
  ERC1155Transfer: ResolverTypeWrapper<Omit<Erc1155Transfer, 'contract' | 'emitter' | 'from' | 'fromBalance' | 'to' | 'toBalance' | 'token' | 'transaction'> & { contract: ResolversTypes['ERC1155Contract'], emitter: ResolversTypes['Account'], from?: Maybe<ResolversTypes['Account']>, fromBalance?: Maybe<ResolversTypes['ERC1155Balance']>, to?: Maybe<ResolversTypes['Account']>, toBalance?: Maybe<ResolversTypes['ERC1155Balance']>, token: ResolversTypes['ERC1155Token'], transaction: ResolversTypes['Transaction'] }>;
  ERC1155Transfer_filter: Erc1155Transfer_Filter;
  ERC1155Transfer_orderBy: Erc1155Transfer_OrderBy;
  Epoch: ResolverTypeWrapper<Epoch>;
  Epoch_filter: Epoch_Filter;
  Epoch_orderBy: Epoch_OrderBy;
  Event: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Event']>;
  EventType: EventType;
  Event_filter: Event_Filter;
  Event_orderBy: Event_OrderBy;
  Factory: ResolverTypeWrapper<Factory>;
  Factory_filter: Factory_Filter;
  Factory_orderBy: Factory_OrderBy;
  Flash: ResolverTypeWrapper<Omit<Flash, 'transaction'> & { transaction: ResolversTypes['Transaction'] }>;
  Flash_filter: Flash_Filter;
  Flash_orderBy: Flash_OrderBy;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Int8: ResolverTypeWrapper<Scalars['Int8']['output']>;
  LockedUp: ResolverTypeWrapper<LockedUp>;
  LockedUp_filter: LockedUp_Filter;
  LockedUp_orderBy: LockedUp_OrderBy;
  MarketEvent721: ResolverTypeWrapper<Omit<MarketEvent721, 'nftId'> & { nftId?: Maybe<ResolversTypes['ERC721Token']> }>;
  MarketEvent721_filter: MarketEvent721_Filter;
  MarketEvent721_orderBy: MarketEvent721_OrderBy;
  MarketEvent1155: ResolverTypeWrapper<Omit<MarketEvent1155, 'nftId'> & { nftId?: Maybe<ResolversTypes['ERC1155Token']> }>;
  MarketEvent1155_filter: MarketEvent1155_Filter;
  MarketEvent1155_orderBy: MarketEvent1155_OrderBy;
  MarketFee: ResolverTypeWrapper<MarketFee>;
  MarketFee_filter: MarketFee_Filter;
  MarketFee_orderBy: MarketFee_OrderBy;
  MarketVolume: ResolverTypeWrapper<MarketVolume>;
  MarketVolume_filter: MarketVolume_Filter;
  MarketVolume_orderBy: MarketVolume_OrderBy;
  Mint: ResolverTypeWrapper<Omit<Mint, 'transaction'> & { transaction: ResolversTypes['Transaction'] }>;
  Mint_filter: Mint_Filter;
  Mint_orderBy: Mint_OrderBy;
  OnSaleStatus1155: ResolverTypeWrapper<Omit<OnSaleStatus1155, 'owner'> & { owner: ResolversTypes['Account'] }>;
  OnSaleStatus1155_filter: OnSaleStatus1155_Filter;
  OnSaleStatus1155_orderBy: OnSaleStatus1155_OrderBy;
  Operation: Operation;
  Order: ResolverTypeWrapper<Omit<Order, 'maker' | 'taker'> & { maker: ResolversTypes['Account'], taker?: Maybe<ResolversTypes['Account']> }>;
  OrderDirection: OrderDirection;
  OrderStatus: OrderStatus;
  OrderStatusTransfer: OrderStatusTransfer;
  OrderTransfer: ResolverTypeWrapper<Omit<OrderTransfer, 'maker' | 'taker'> & { maker: ResolversTypes['Account'], taker?: Maybe<ResolversTypes['Account']> }>;
  OrderTransfer_filter: OrderTransfer_Filter;
  OrderTransfer_orderBy: OrderTransfer_OrderBy;
  Order_filter: Order_Filter;
  Order_orderBy: Order_OrderBy;
  OwnedTokenCount: ResolverTypeWrapper<Omit<OwnedTokenCount, 'owner'> & { owner: ResolversTypes['Account'] }>;
  OwnedTokenCount_filter: OwnedTokenCount_Filter;
  OwnedTokenCount_orderBy: OwnedTokenCount_OrderBy;
  OwnerContract: ResolverTypeWrapper<OwnerContract>;
  OwnerContract_filter: OwnerContract_Filter;
  OwnerContract_orderBy: OwnerContract_OrderBy;
  PancakeDayData: ResolverTypeWrapper<PancakeDayData>;
  PancakeDayData_filter: PancakeDayData_Filter;
  PancakeDayData_orderBy: PancakeDayData_OrderBy;
  Pool: ResolverTypeWrapper<Pool>;
  Pool5MinuteCandleData: ResolverTypeWrapper<Pool5MinuteCandleData>;
  Pool5MinuteCandleData_filter: Pool5MinuteCandleData_Filter;
  Pool5MinuteCandleData_orderBy: Pool5MinuteCandleData_OrderBy;
  Pool15MinuteCandleData: ResolverTypeWrapper<Pool15MinuteCandleData>;
  Pool15MinuteCandleData_filter: Pool15MinuteCandleData_Filter;
  Pool15MinuteCandleData_orderBy: Pool15MinuteCandleData_OrderBy;
  Pool30MinuteCandleData: ResolverTypeWrapper<Pool30MinuteCandleData>;
  Pool30MinuteCandleData_filter: Pool30MinuteCandleData_Filter;
  Pool30MinuteCandleData_orderBy: Pool30MinuteCandleData_OrderBy;
  PoolDayCandleData: ResolverTypeWrapper<PoolDayCandleData>;
  PoolDayCandleData_filter: PoolDayCandleData_Filter;
  PoolDayCandleData_orderBy: PoolDayCandleData_OrderBy;
  PoolDayData: ResolverTypeWrapper<PoolDayData>;
  PoolDayData_filter: PoolDayData_Filter;
  PoolDayData_orderBy: PoolDayData_OrderBy;
  PoolHourCandleData: ResolverTypeWrapper<PoolHourCandleData>;
  PoolHourCandleData_filter: PoolHourCandleData_Filter;
  PoolHourCandleData_orderBy: PoolHourCandleData_OrderBy;
  PoolHourData: ResolverTypeWrapper<PoolHourData>;
  PoolHourData_filter: PoolHourData_Filter;
  PoolHourData_orderBy: PoolHourData_OrderBy;
  PoolMinuteCandleData: ResolverTypeWrapper<PoolMinuteCandleData>;
  PoolMinuteCandleData_filter: PoolMinuteCandleData_Filter;
  PoolMinuteCandleData_orderBy: PoolMinuteCandleData_OrderBy;
  PoolMonthCandleData: ResolverTypeWrapper<PoolMonthCandleData>;
  PoolMonthCandleData_filter: PoolMonthCandleData_Filter;
  PoolMonthCandleData_orderBy: PoolMonthCandleData_OrderBy;
  PoolWeekCandleData: ResolverTypeWrapper<PoolWeekCandleData>;
  PoolWeekCandleData_filter: PoolWeekCandleData_Filter;
  PoolWeekCandleData_orderBy: PoolWeekCandleData_OrderBy;
  Pool_filter: Pool_Filter;
  Pool_orderBy: Pool_OrderBy;
  Position: ResolverTypeWrapper<Omit<Position, 'transaction'> & { transaction: ResolversTypes['Transaction'] }>;
  PositionSnapshot: ResolverTypeWrapper<Omit<PositionSnapshot, 'position' | 'transaction'> & { position: ResolversTypes['Position'], transaction: ResolversTypes['Transaction'] }>;
  PositionSnapshot_filter: PositionSnapshot_Filter;
  PositionSnapshot_orderBy: PositionSnapshot_OrderBy;
  Position_filter: Position_Filter;
  Position_orderBy: Position_OrderBy;
  Query: ResolverTypeWrapper<{}>;
  RoyaltiesRegistry: ResolverTypeWrapper<RoyaltiesRegistry>;
  RoyaltiesRegistry_filter: RoyaltiesRegistry_Filter;
  RoyaltiesRegistry_orderBy: RoyaltiesRegistry_OrderBy;
  SellStatus: SellStatus;
  Staking: ResolverTypeWrapper<Staking>;
  Staking_filter: Staking_Filter;
  Staking_orderBy: Staking_OrderBy;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Subscription: ResolverTypeWrapper<{}>;
  Swap: ResolverTypeWrapper<Omit<Swap, 'transaction'> & { transaction: ResolversTypes['Transaction'] }>;
  Swap_filter: Swap_Filter;
  Swap_orderBy: Swap_OrderBy;
  Tick: ResolverTypeWrapper<Tick>;
  TickDayData: ResolverTypeWrapper<TickDayData>;
  TickDayData_filter: TickDayData_Filter;
  TickDayData_orderBy: TickDayData_OrderBy;
  TickHourData: ResolverTypeWrapper<TickHourData>;
  TickHourData_filter: TickHourData_Filter;
  TickHourData_orderBy: TickHourData_OrderBy;
  Tick_filter: Tick_Filter;
  Tick_orderBy: Tick_OrderBy;
  Token: ResolverTypeWrapper<Token>;
  TokenDayData: ResolverTypeWrapper<TokenDayData>;
  TokenDayData_filter: TokenDayData_Filter;
  TokenDayData_orderBy: TokenDayData_OrderBy;
  TokenHourData: ResolverTypeWrapper<TokenHourData>;
  TokenHourData_filter: TokenHourData_Filter;
  TokenHourData_orderBy: TokenHourData_OrderBy;
  Token_filter: Token_Filter;
  Token_orderBy: Token_OrderBy;
  Transaction: ResolverTypeWrapper<Omit<Transaction, 'events' | 'flashed'> & { events: Array<ResolversTypes['Event']>, flashed: Array<Maybe<ResolversTypes['Flash']>> }>;
  TransactionCount: ResolverTypeWrapper<TransactionCount>;
  TransactionCount_filter: TransactionCount_Filter;
  TransactionCount_orderBy: TransactionCount_OrderBy;
  Transaction_filter: Transaction_Filter;
  Transaction_orderBy: Transaction_OrderBy;
  Transation: ResolverTypeWrapper<Transation>;
  Transation_filter: Transation_Filter;
  Transation_orderBy: Transation_OrderBy;
  Validation: ResolverTypeWrapper<Validation>;
  Validation_filter: Validation_Filter;
  Validation_orderBy: Validation_OrderBy;
  Validator: ResolverTypeWrapper<Validator>;
  Validator_filter: Validator_Filter;
  Validator_orderBy: Validator_OrderBy;
  WithdrawalRequest: ResolverTypeWrapper<WithdrawalRequest>;
  WithdrawalRequest_filter: WithdrawalRequest_Filter;
  WithdrawalRequest_orderBy: WithdrawalRequest_OrderBy;
  _Block_: ResolverTypeWrapper<_Block_>;
  _Meta_: ResolverTypeWrapper<_Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Account: Omit<Account, 'ERC721tokens' | 'ERC721transferFromEvent' | 'ERC721transferToEvent' | 'ERC1155balances' | 'ERC1155transferFromEvent' | 'ERC1155transferToEvent' | 'OnSaleStatus1155' | 'OwnedTokens' | 'asERC721' | 'asERC1155' | 'events'> & { ERC721tokens: Array<ResolversParentTypes['ERC721Token']>, ERC721transferFromEvent: Array<ResolversParentTypes['ERC721Transfer']>, ERC721transferToEvent: Array<ResolversParentTypes['ERC721Transfer']>, ERC1155balances: Array<ResolversParentTypes['ERC1155Balance']>, ERC1155transferFromEvent: Array<ResolversParentTypes['ERC1155Transfer']>, ERC1155transferToEvent: Array<ResolversParentTypes['ERC1155Transfer']>, OnSaleStatus1155?: Maybe<Array<ResolversParentTypes['OnSaleStatus1155']>>, OwnedTokens?: Maybe<Array<ResolversParentTypes['OwnedTokenCount']>>, asERC721?: Maybe<ResolversParentTypes['ERC721Contract']>, asERC1155?: Maybe<ResolversParentTypes['ERC1155Contract']>, events: Array<ResolversParentTypes['Event']> };
  AccountCollectionOwnership: Omit<AccountCollectionOwnership, 'account'> & { account: ResolversParentTypes['Account'] };
  AccountCollectionOwnership_filter: AccountCollectionOwnership_Filter;
  Account_filter: Account_Filter;
  BigDecimal: Scalars['BigDecimal']['output'];
  BigInt: Scalars['BigInt']['output'];
  Block: Block;
  BlockChangedFilter: BlockChangedFilter;
  Block_filter: Block_Filter;
  Block_height: Block_Height;
  Boolean: Scalars['Boolean']['output'];
  Bundle: Bundle;
  Bundle_filter: Bundle_Filter;
  Burn: Omit<Burn, 'transaction'> & { transaction: ResolversParentTypes['Transaction'] };
  Burn_filter: Burn_Filter;
  Bytes: Scalars['Bytes']['output'];
  Collect: Omit<Collect, 'transaction'> & { transaction: ResolversParentTypes['Transaction'] };
  Collect_filter: Collect_Filter;
  Contract: Contract;
  Contract_filter: Contract_Filter;
  Creator: Omit<Creator, 'token721' | 'token1155'> & { token721?: Maybe<Array<ResolversParentTypes['ERC721Creator']>>, token1155?: Maybe<Array<ResolversParentTypes['ERC1155Creator']>> };
  Creator_filter: Creator_Filter;
  Delegation: Delegation;
  Delegation_filter: Delegation_Filter;
  Delegator: Delegator;
  Delegator_filter: Delegator_Filter;
  ERC721Contract: Omit<Erc721Contract, 'asAccount' | 'tokens' | 'transfers'> & { asAccount: ResolversParentTypes['Account'], tokens: Array<ResolversParentTypes['ERC721Token']>, transfers: Array<ResolversParentTypes['ERC721Transfer']> };
  ERC721Contract_filter: Erc721Contract_Filter;
  ERC721Creator: Omit<Erc721Creator, 'collection' | 'creator'> & { collection: ResolversParentTypes['ERC721Token'], creator: ResolversParentTypes['Creator'] };
  ERC721Creator_filter: Erc721Creator_Filter;
  ERC721Token: Omit<Erc721Token, 'approval' | 'contract' | 'creators' | 'owner' | 'transfers'> & { approval: ResolversParentTypes['Account'], contract: ResolversParentTypes['ERC721Contract'], creators: Array<ResolversParentTypes['ERC721Creator']>, owner: ResolversParentTypes['Account'], transfers: Array<ResolversParentTypes['ERC721Transfer']> };
  ERC721Token_filter: Erc721Token_Filter;
  ERC721Transfer: Omit<Erc721Transfer, 'contract' | 'emitter' | 'from' | 'to' | 'token' | 'transaction'> & { contract: ResolversParentTypes['ERC721Contract'], emitter: ResolversParentTypes['Account'], from: ResolversParentTypes['Account'], to: ResolversParentTypes['Account'], token: ResolversParentTypes['ERC721Token'], transaction: ResolversParentTypes['Transaction'] };
  ERC721Transfer_filter: Erc721Transfer_Filter;
  ERC1155Balance: Omit<Erc1155Balance, 'account' | 'contract' | 'token' | 'transferFromEvent' | 'transferToEvent'> & { account?: Maybe<ResolversParentTypes['Account']>, contract?: Maybe<ResolversParentTypes['ERC1155Contract']>, token: ResolversParentTypes['ERC1155Token'], transferFromEvent: Array<ResolversParentTypes['ERC1155Transfer']>, transferToEvent: Array<ResolversParentTypes['ERC1155Transfer']> };
  ERC1155Balance_filter: Erc1155Balance_Filter;
  ERC1155Contract: Omit<Erc1155Contract, 'asAccount' | 'balances' | 'tokens' | 'transfers'> & { asAccount: ResolversParentTypes['Account'], balances: Array<ResolversParentTypes['ERC1155Balance']>, tokens: Array<ResolversParentTypes['ERC1155Token']>, transfers: Array<ResolversParentTypes['ERC1155Transfer']> };
  ERC1155Contract_filter: Erc1155Contract_Filter;
  ERC1155Creator: Omit<Erc1155Creator, 'collection' | 'creator'> & { collection: ResolversParentTypes['ERC1155Token'], creator: ResolversParentTypes['Creator'] };
  ERC1155Creator_filter: Erc1155Creator_Filter;
  ERC1155Token: Omit<Erc1155Token, 'balances' | 'contract' | 'creators' | 'totalSupply' | 'transfers'> & { balances: Array<ResolversParentTypes['ERC1155Balance']>, contract: ResolversParentTypes['ERC1155Contract'], creators: Array<ResolversParentTypes['ERC1155Creator']>, totalSupply: ResolversParentTypes['ERC1155Balance'], transfers: Array<ResolversParentTypes['ERC1155Transfer']> };
  ERC1155Token_filter: Erc1155Token_Filter;
  ERC1155Transfer: Omit<Erc1155Transfer, 'contract' | 'emitter' | 'from' | 'fromBalance' | 'to' | 'toBalance' | 'token' | 'transaction'> & { contract: ResolversParentTypes['ERC1155Contract'], emitter: ResolversParentTypes['Account'], from?: Maybe<ResolversParentTypes['Account']>, fromBalance?: Maybe<ResolversParentTypes['ERC1155Balance']>, to?: Maybe<ResolversParentTypes['Account']>, toBalance?: Maybe<ResolversParentTypes['ERC1155Balance']>, token: ResolversParentTypes['ERC1155Token'], transaction: ResolversParentTypes['Transaction'] };
  ERC1155Transfer_filter: Erc1155Transfer_Filter;
  Epoch: Epoch;
  Epoch_filter: Epoch_Filter;
  Event: ResolversInterfaceTypes<ResolversParentTypes>['Event'];
  Event_filter: Event_Filter;
  Factory: Factory;
  Factory_filter: Factory_Filter;
  Flash: Omit<Flash, 'transaction'> & { transaction: ResolversParentTypes['Transaction'] };
  Flash_filter: Flash_Filter;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Int8: Scalars['Int8']['output'];
  LockedUp: LockedUp;
  LockedUp_filter: LockedUp_Filter;
  MarketEvent721: Omit<MarketEvent721, 'nftId'> & { nftId?: Maybe<ResolversParentTypes['ERC721Token']> };
  MarketEvent721_filter: MarketEvent721_Filter;
  MarketEvent1155: Omit<MarketEvent1155, 'nftId'> & { nftId?: Maybe<ResolversParentTypes['ERC1155Token']> };
  MarketEvent1155_filter: MarketEvent1155_Filter;
  MarketFee: MarketFee;
  MarketFee_filter: MarketFee_Filter;
  MarketVolume: MarketVolume;
  MarketVolume_filter: MarketVolume_Filter;
  Mint: Omit<Mint, 'transaction'> & { transaction: ResolversParentTypes['Transaction'] };
  Mint_filter: Mint_Filter;
  OnSaleStatus1155: Omit<OnSaleStatus1155, 'owner'> & { owner: ResolversParentTypes['Account'] };
  OnSaleStatus1155_filter: OnSaleStatus1155_Filter;
  Order: Omit<Order, 'maker' | 'taker'> & { maker: ResolversParentTypes['Account'], taker?: Maybe<ResolversParentTypes['Account']> };
  OrderTransfer: Omit<OrderTransfer, 'maker' | 'taker'> & { maker: ResolversParentTypes['Account'], taker?: Maybe<ResolversParentTypes['Account']> };
  OrderTransfer_filter: OrderTransfer_Filter;
  Order_filter: Order_Filter;
  OwnedTokenCount: Omit<OwnedTokenCount, 'owner'> & { owner: ResolversParentTypes['Account'] };
  OwnedTokenCount_filter: OwnedTokenCount_Filter;
  OwnerContract: OwnerContract;
  OwnerContract_filter: OwnerContract_Filter;
  PancakeDayData: PancakeDayData;
  PancakeDayData_filter: PancakeDayData_Filter;
  Pool: Pool;
  Pool5MinuteCandleData: Pool5MinuteCandleData;
  Pool5MinuteCandleData_filter: Pool5MinuteCandleData_Filter;
  Pool15MinuteCandleData: Pool15MinuteCandleData;
  Pool15MinuteCandleData_filter: Pool15MinuteCandleData_Filter;
  Pool30MinuteCandleData: Pool30MinuteCandleData;
  Pool30MinuteCandleData_filter: Pool30MinuteCandleData_Filter;
  PoolDayCandleData: PoolDayCandleData;
  PoolDayCandleData_filter: PoolDayCandleData_Filter;
  PoolDayData: PoolDayData;
  PoolDayData_filter: PoolDayData_Filter;
  PoolHourCandleData: PoolHourCandleData;
  PoolHourCandleData_filter: PoolHourCandleData_Filter;
  PoolHourData: PoolHourData;
  PoolHourData_filter: PoolHourData_Filter;
  PoolMinuteCandleData: PoolMinuteCandleData;
  PoolMinuteCandleData_filter: PoolMinuteCandleData_Filter;
  PoolMonthCandleData: PoolMonthCandleData;
  PoolMonthCandleData_filter: PoolMonthCandleData_Filter;
  PoolWeekCandleData: PoolWeekCandleData;
  PoolWeekCandleData_filter: PoolWeekCandleData_Filter;
  Pool_filter: Pool_Filter;
  Position: Omit<Position, 'transaction'> & { transaction: ResolversParentTypes['Transaction'] };
  PositionSnapshot: Omit<PositionSnapshot, 'position' | 'transaction'> & { position: ResolversParentTypes['Position'], transaction: ResolversParentTypes['Transaction'] };
  PositionSnapshot_filter: PositionSnapshot_Filter;
  Position_filter: Position_Filter;
  Query: {};
  RoyaltiesRegistry: RoyaltiesRegistry;
  RoyaltiesRegistry_filter: RoyaltiesRegistry_Filter;
  Staking: Staking;
  Staking_filter: Staking_Filter;
  String: Scalars['String']['output'];
  Subscription: {};
  Swap: Omit<Swap, 'transaction'> & { transaction: ResolversParentTypes['Transaction'] };
  Swap_filter: Swap_Filter;
  Tick: Tick;
  TickDayData: TickDayData;
  TickDayData_filter: TickDayData_Filter;
  TickHourData: TickHourData;
  TickHourData_filter: TickHourData_Filter;
  Tick_filter: Tick_Filter;
  Token: Token;
  TokenDayData: TokenDayData;
  TokenDayData_filter: TokenDayData_Filter;
  TokenHourData: TokenHourData;
  TokenHourData_filter: TokenHourData_Filter;
  Token_filter: Token_Filter;
  Transaction: Omit<Transaction, 'events' | 'flashed'> & { events: Array<ResolversParentTypes['Event']>, flashed: Array<Maybe<ResolversParentTypes['Flash']>> };
  TransactionCount: TransactionCount;
  TransactionCount_filter: TransactionCount_Filter;
  Transaction_filter: Transaction_Filter;
  Transation: Transation;
  Transation_filter: Transation_Filter;
  Validation: Validation;
  Validation_filter: Validation_Filter;
  Validator: Validator;
  Validator_filter: Validator_Filter;
  WithdrawalRequest: WithdrawalRequest;
  WithdrawalRequest_filter: WithdrawalRequest_Filter;
  _Block_: _Block_;
  _Meta_: _Meta_;
};

export type DerivedFromDirectiveArgs = {
  field: Scalars['String']['input'];
};

export type DerivedFromDirectiveResolver<Result, Parent, ContextType = any, Args = DerivedFromDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type EntityDirectiveArgs = { };

export type EntityDirectiveResolver<Result, Parent, ContextType = any, Args = EntityDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type SubgraphIdDirectiveArgs = {
  id: Scalars['String']['input'];
};

export type SubgraphIdDirectiveResolver<Result, Parent, ContextType = any, Args = SubgraphIdDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AccountResolvers<ContextType = any, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = {
  ERC721tokens?: Resolver<Array<ResolversTypes['ERC721Token']>, ParentType, ContextType, RequireFields<AccountErc721tokensArgs, 'first' | 'skip'>>;
  ERC721transferFromEvent?: Resolver<Array<ResolversTypes['ERC721Transfer']>, ParentType, ContextType, RequireFields<AccountErc721transferFromEventArgs, 'first' | 'skip'>>;
  ERC721transferToEvent?: Resolver<Array<ResolversTypes['ERC721Transfer']>, ParentType, ContextType, RequireFields<AccountErc721transferToEventArgs, 'first' | 'skip'>>;
  ERC1155balances?: Resolver<Array<ResolversTypes['ERC1155Balance']>, ParentType, ContextType, RequireFields<AccountErc1155balancesArgs, 'first' | 'skip'>>;
  ERC1155transferFromEvent?: Resolver<Array<ResolversTypes['ERC1155Transfer']>, ParentType, ContextType, RequireFields<AccountErc1155transferFromEventArgs, 'first' | 'skip'>>;
  ERC1155transferToEvent?: Resolver<Array<ResolversTypes['ERC1155Transfer']>, ParentType, ContextType, RequireFields<AccountErc1155transferToEventArgs, 'first' | 'skip'>>;
  OnSaleStatus1155?: Resolver<Maybe<Array<ResolversTypes['OnSaleStatus1155']>>, ParentType, ContextType, RequireFields<AccountOnSaleStatus1155Args, 'first' | 'skip'>>;
  OwnedTokens?: Resolver<Maybe<Array<ResolversTypes['OwnedTokenCount']>>, ParentType, ContextType, RequireFields<AccountOwnedTokensArgs, 'first' | 'skip'>>;
  asERC721?: Resolver<Maybe<ResolversTypes['ERC721Contract']>, ParentType, ContextType>;
  asERC1155?: Resolver<Maybe<ResolversTypes['ERC1155Contract']>, ParentType, ContextType>;
  events?: Resolver<Array<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<AccountEventsArgs, 'first' | 'skip'>>;
  holdingCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  onSaleCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountCollectionOwnershipResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccountCollectionOwnership'] = ResolversParentTypes['AccountCollectionOwnership']> = {
  account?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  contract?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  ownsTokens?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigDecimal'], any> {
  name: 'BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export type BlockResolvers<ContextType = any, ParentType extends ResolversParentTypes['Block'] = ResolversParentTypes['Block']> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  event?: Resolver<ResolversTypes['EventType'], ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  quoteToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timestampt?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tokenId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BundleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Bundle'] = ResolversParentTypes['Bundle']> = {
  ethPriceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BurnResolvers<ContextType = any, ParentType extends ResolversParentTypes['Burn'] = ResolversParentTypes['Burn']> = {
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  amount0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  amount1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  amountUSD?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  logIndex?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  origin?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  tickLower?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tickUpper?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  token0?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  token1?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export type CollectResolvers<ContextType = any, ParentType extends ResolversParentTypes['Collect'] = ResolversParentTypes['Collect']> = {
  amount0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  amount1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  amountUSD?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  logIndex?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  tickLower?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tickUpper?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContractResolvers<ContextType = any, ParentType extends ResolversParentTypes['Contract'] = ResolversParentTypes['Contract']> = {
  contract?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Creator'] = ResolversParentTypes['Creator']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  token721?: Resolver<Maybe<Array<ResolversTypes['ERC721Creator']>>, ParentType, ContextType, RequireFields<CreatorToken721Args, 'first' | 'skip'>>;
  token1155?: Resolver<Maybe<Array<ResolversTypes['ERC1155Creator']>>, ParentType, ContextType, RequireFields<CreatorToken1155Args, 'first' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DelegationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Delegation'] = ResolversParentTypes['Delegation']> = {
  delegator?: Resolver<ResolversTypes['Delegator'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lockedUp?: Resolver<ResolversTypes['LockedUp'], ParentType, ContextType>;
  stakedAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalClaimedRewards?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  validatorId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  wr?: Resolver<ResolversTypes['WithdrawalRequest'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DelegatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Delegator'] = ResolversParentTypes['Delegator']> = {
  address?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  createdOn?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  stakedAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalClaimedRewards?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalLockStake?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  validations?: Resolver<Array<ResolversTypes['Validation']>, ParentType, ContextType, RequireFields<DelegatorValidationsArgs, 'first' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Erc721ContractResolvers<ContextType = any, ParentType extends ResolversParentTypes['ERC721Contract'] = ResolversParentTypes['ERC721Contract']> = {
  asAccount?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  createAt?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  holderCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  supportsMetadata?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tokens?: Resolver<Array<ResolversTypes['ERC721Token']>, ParentType, ContextType, RequireFields<Erc721ContractTokensArgs, 'first' | 'skip'>>;
  transactionCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transfers?: Resolver<Array<ResolversTypes['ERC721Transfer']>, ParentType, ContextType, RequireFields<Erc721ContractTransfersArgs, 'first' | 'skip'>>;
  txCreation?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  volume?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Erc721CreatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['ERC721Creator'] = ResolversParentTypes['ERC721Creator']> = {
  collection?: Resolver<ResolversTypes['ERC721Token'], ParentType, ContextType>;
  creator?: Resolver<ResolversTypes['Creator'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  share?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Erc721TokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['ERC721Token'] = ResolversParentTypes['ERC721Token']> = {
  approval?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  contract?: Resolver<ResolversTypes['ERC721Contract'], ParentType, ContextType>;
  createAt?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  creators?: Resolver<Array<ResolversTypes['ERC721Creator']>, ParentType, ContextType, RequireFields<Erc721TokenCreatorsArgs, 'first' | 'skip'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  identifier?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  tokenId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  transfers?: Resolver<Array<ResolversTypes['ERC721Transfer']>, ParentType, ContextType, RequireFields<Erc721TokenTransfersArgs, 'first' | 'skip'>>;
  txCreation?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Erc721TransferResolvers<ContextType = any, ParentType extends ResolversParentTypes['ERC721Transfer'] = ResolversParentTypes['ERC721Transfer']> = {
  contract?: Resolver<ResolversTypes['ERC721Contract'], ParentType, ContextType>;
  emitter?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  to?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['ERC721Token'], ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Erc1155BalanceResolvers<ContextType = any, ParentType extends ResolversParentTypes['ERC1155Balance'] = ResolversParentTypes['ERC1155Balance']> = {
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  contract?: Resolver<Maybe<ResolversTypes['ERC1155Contract']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['ERC1155Token'], ParentType, ContextType>;
  transferFromEvent?: Resolver<Array<ResolversTypes['ERC1155Transfer']>, ParentType, ContextType, RequireFields<Erc1155BalanceTransferFromEventArgs, 'first' | 'skip'>>;
  transferToEvent?: Resolver<Array<ResolversTypes['ERC1155Transfer']>, ParentType, ContextType, RequireFields<Erc1155BalanceTransferToEventArgs, 'first' | 'skip'>>;
  value?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  valueExact?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Erc1155ContractResolvers<ContextType = any, ParentType extends ResolversParentTypes['ERC1155Contract'] = ResolversParentTypes['ERC1155Contract']> = {
  asAccount?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  balances?: Resolver<Array<ResolversTypes['ERC1155Balance']>, ParentType, ContextType, RequireFields<Erc1155ContractBalancesArgs, 'first' | 'skip'>>;
  count?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  createAt?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  holderCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tokens?: Resolver<Array<ResolversTypes['ERC1155Token']>, ParentType, ContextType, RequireFields<Erc1155ContractTokensArgs, 'first' | 'skip'>>;
  transactionCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transfers?: Resolver<Array<ResolversTypes['ERC1155Transfer']>, ParentType, ContextType, RequireFields<Erc1155ContractTransfersArgs, 'first' | 'skip'>>;
  txCreation?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  volume?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Erc1155CreatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['ERC1155Creator'] = ResolversParentTypes['ERC1155Creator']> = {
  collection?: Resolver<ResolversTypes['ERC1155Token'], ParentType, ContextType>;
  creator?: Resolver<ResolversTypes['Creator'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  share?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Erc1155TokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['ERC1155Token'] = ResolversParentTypes['ERC1155Token']> = {
  balances?: Resolver<Array<ResolversTypes['ERC1155Balance']>, ParentType, ContextType, RequireFields<Erc1155TokenBalancesArgs, 'first' | 'skip'>>;
  contract?: Resolver<ResolversTypes['ERC1155Contract'], ParentType, ContextType>;
  createAt?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  creators?: Resolver<Array<ResolversTypes['ERC1155Creator']>, ParentType, ContextType, RequireFields<Erc1155TokenCreatorsArgs, 'first' | 'skip'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  identifier?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tokenId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  totalSupply?: Resolver<ResolversTypes['ERC1155Balance'], ParentType, ContextType>;
  transfers?: Resolver<Array<ResolversTypes['ERC1155Transfer']>, ParentType, ContextType, RequireFields<Erc1155TokenTransfersArgs, 'first' | 'skip'>>;
  txCreation?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Erc1155TransferResolvers<ContextType = any, ParentType extends ResolversParentTypes['ERC1155Transfer'] = ResolversParentTypes['ERC1155Transfer']> = {
  contract?: Resolver<ResolversTypes['ERC1155Contract'], ParentType, ContextType>;
  emitter?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  fromBalance?: Resolver<Maybe<ResolversTypes['ERC1155Balance']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  toBalance?: Resolver<Maybe<ResolversTypes['ERC1155Balance']>, ParentType, ContextType>;
  token?: Resolver<ResolversTypes['ERC1155Token'], ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  valueExact?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EpochResolvers<ContextType = any, ParentType extends ResolversParentTypes['Epoch'] = ResolversParentTypes['Epoch']> = {
  block?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  epoch?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventResolvers<ContextType = any, ParentType extends ResolversParentTypes['Event'] = ResolversParentTypes['Event']> = {
  __resolveType: TypeResolveFn<'ERC721Transfer' | 'ERC1155Transfer', ParentType, ContextType>;
  emitter?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>;
};

export type FactoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Factory'] = ResolversParentTypes['Factory']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  poolCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalFeesETH?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalFeesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalProtocolFeesETH?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalProtocolFeesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalValueLockedETH?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalValueLockedETHUntracked?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalValueLockedUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalValueLockedUSDUntracked?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalVolumeETH?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  txCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  untrackedVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FlashResolvers<ContextType = any, ParentType extends ResolversParentTypes['Flash'] = ResolversParentTypes['Flash']> = {
  amount0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  amount0Paid?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  amount1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  amount1Paid?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  amountUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  logIndex?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  recipient?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  sender?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface Int8ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Int8'], any> {
  name: 'Int8';
}

export type LockedUpResolvers<ContextType = any, ParentType extends ResolversParentTypes['LockedUp'] = ResolversParentTypes['LockedUp']> = {
  delegator?: Resolver<ResolversTypes['Delegator'], ParentType, ContextType>;
  duration?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  endTime?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lockedAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  penalty?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  unlockedAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  validator?: Resolver<ResolversTypes['Validator'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MarketEvent721Resolvers<ContextType = any, ParentType extends ResolversParentTypes['MarketEvent721'] = ResolversParentTypes['MarketEvent721']> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  addressExtend?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  event?: Resolver<ResolversTypes['SellStatus'], ParentType, ContextType>;
  flagExtend?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  netPrice?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  nftId?: Resolver<Maybe<ResolversTypes['ERC721Token']>, ParentType, ContextType>;
  nftIdExtend?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  quoteToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tokenId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MarketEvent1155Resolvers<ContextType = any, ParentType extends ResolversParentTypes['MarketEvent1155'] = ResolversParentTypes['MarketEvent1155']> = {
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  addressExtend?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  event?: Resolver<ResolversTypes['SellStatus'], ParentType, ContextType>;
  flagExtend?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  netPrice?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  nftId?: Resolver<Maybe<ResolversTypes['ERC1155Token']>, ParentType, ContextType>;
  nftIdExtend?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  operation?: Resolver<ResolversTypes['Operation'], ParentType, ContextType>;
  operationId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  quoteToken?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tokenId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  txHash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MarketFeeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MarketFee'] = ResolversParentTypes['MarketFee']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  totalFee?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MarketVolumeResolvers<ContextType = any, ParentType extends ResolversParentTypes['MarketVolume'] = ResolversParentTypes['MarketVolume']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  totalVolume?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MintResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mint'] = ResolversParentTypes['Mint']> = {
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  amount0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  amount1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  amountUSD?: Resolver<Maybe<ResolversTypes['BigDecimal']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  logIndex?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  origin?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  sender?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  tickLower?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tickUpper?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  token0?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  token1?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OnSaleStatus1155Resolvers<ContextType = any, ParentType extends ResolversParentTypes['OnSaleStatus1155'] = ResolversParentTypes['OnSaleStatus1155']> = {
  contract?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isOnSale?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  tokenId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderResolvers<ContextType = any, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = {
  filledQty?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  index?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  maker?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  nonce?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  remaining?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  sig?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['OrderStatus'], ParentType, ContextType>;
  takeQty?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  taker?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderTransferResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderTransfer'] = ResolversParentTypes['OrderTransfer']> = {
  collection?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  maker?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  remainQty?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['OrderStatusTransfer'], ParentType, ContextType>;
  takeQty?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  taker?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tokenId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OwnedTokenCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['OwnedTokenCount'] = ResolversParentTypes['OwnedTokenCount']> = {
  contract?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OwnerContractResolvers<ContextType = any, ParentType extends ResolversParentTypes['OwnerContract'] = ResolversParentTypes['OwnerContract']> = {
  contract?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  count?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PancakeDayDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['PancakeDayData'] = ResolversParentTypes['PancakeDayData']> = {
  date?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  protocolFeesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  tvlUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  txCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  volumeETH?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeUSDUntracked?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PoolResolvers<ContextType = any, ParentType extends ResolversParentTypes['Pool'] = ResolversParentTypes['Pool']> = {
  burns?: Resolver<Array<ResolversTypes['Burn']>, ParentType, ContextType, RequireFields<PoolBurnsArgs, 'first' | 'skip'>>;
  collectedFeesToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  collectedFeesToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  collectedFeesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  collects?: Resolver<Array<ResolversTypes['Collect']>, ParentType, ContextType, RequireFields<PoolCollectsArgs, 'first' | 'skip'>>;
  createdAtBlockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  createdAtTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feeGrowthGlobal0X128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feeGrowthGlobal1X128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feeProtocol?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feeTier?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  liquidity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  liquidityProviderCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  mints?: Resolver<Array<ResolversTypes['Mint']>, ParentType, ContextType, RequireFields<PoolMintsArgs, 'first' | 'skip'>>;
  observationIndex?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  pool5MinuteCandleData?: Resolver<Array<ResolversTypes['Pool5MinuteCandleData']>, ParentType, ContextType, RequireFields<PoolPool5MinuteCandleDataArgs, 'first' | 'skip'>>;
  pool15MinuteCandleData?: Resolver<Array<ResolversTypes['Pool15MinuteCandleData']>, ParentType, ContextType, RequireFields<PoolPool15MinuteCandleDataArgs, 'first' | 'skip'>>;
  pool30MinuteCandleData?: Resolver<Array<ResolversTypes['Pool30MinuteCandleData']>, ParentType, ContextType, RequireFields<PoolPool30MinuteCandleDataArgs, 'first' | 'skip'>>;
  poolDayCandleData?: Resolver<Array<ResolversTypes['PoolDayCandleData']>, ParentType, ContextType, RequireFields<PoolPoolDayCandleDataArgs, 'first' | 'skip'>>;
  poolDayData?: Resolver<Array<ResolversTypes['PoolDayData']>, ParentType, ContextType, RequireFields<PoolPoolDayDataArgs, 'first' | 'skip'>>;
  poolHourCandleData?: Resolver<Array<ResolversTypes['PoolHourCandleData']>, ParentType, ContextType, RequireFields<PoolPoolHourCandleDataArgs, 'first' | 'skip'>>;
  poolHourData?: Resolver<Array<ResolversTypes['PoolHourData']>, ParentType, ContextType, RequireFields<PoolPoolHourDataArgs, 'first' | 'skip'>>;
  poolMinuteCandleData?: Resolver<Array<ResolversTypes['PoolMinuteCandleData']>, ParentType, ContextType, RequireFields<PoolPoolMinuteCandleDataArgs, 'first' | 'skip'>>;
  poolMonthCandleData?: Resolver<Array<ResolversTypes['PoolMonthCandleData']>, ParentType, ContextType, RequireFields<PoolPoolMonthCandleDataArgs, 'first' | 'skip'>>;
  poolWeekCandleData?: Resolver<Array<ResolversTypes['PoolWeekCandleData']>, ParentType, ContextType, RequireFields<PoolPoolWeekCandleDataArgs, 'first' | 'skip'>>;
  protocolFeesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  sqrtPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  swaps?: Resolver<Array<ResolversTypes['Swap']>, ParentType, ContextType, RequireFields<PoolSwapsArgs, 'first' | 'skip'>>;
  tick?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  ticks?: Resolver<Array<ResolversTypes['Tick']>, ParentType, ContextType, RequireFields<PoolTicksArgs, 'first' | 'skip'>>;
  token0?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  token0Price?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  token1?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  token1Price?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalValueLockedETH?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalValueLockedETHUntracked?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalValueLockedToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalValueLockedToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalValueLockedUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalValueLockedUSDUntracked?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  txCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  untrackedVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Pool5MinuteCandleDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['Pool5MinuteCandleData'] = ResolversParentTypes['Pool5MinuteCandleData']> = {
  close0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  close1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  feeGrowthGlobal0X128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feeGrowthGlobal1X128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  high0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  high1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  liquidity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  low0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  low1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  open0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  open1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  periodStartUnix?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  protocolFeesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  sqrtPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tick?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  token0Price?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  token1Price?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  tvlUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  txCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  volumeToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Pool15MinuteCandleDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['Pool15MinuteCandleData'] = ResolversParentTypes['Pool15MinuteCandleData']> = {
  close0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  close1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  feeGrowthGlobal0X128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feeGrowthGlobal1X128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  high0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  high1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  liquidity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  low0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  low1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  open0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  open1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  periodStartUnix?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  protocolFeesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  sqrtPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tick?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  token0Price?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  token1Price?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  tvlUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  txCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  volumeToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Pool30MinuteCandleDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['Pool30MinuteCandleData'] = ResolversParentTypes['Pool30MinuteCandleData']> = {
  close0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  close1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  feeGrowthGlobal0X128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feeGrowthGlobal1X128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  high0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  high1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  liquidity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  low0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  low1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  open0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  open1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  periodStartUnix?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  protocolFeesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  sqrtPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tick?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  token0Price?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  token1Price?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  tvlUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  txCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  volumeToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PoolDayCandleDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['PoolDayCandleData'] = ResolversParentTypes['PoolDayCandleData']> = {
  close0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  close1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  feeGrowthGlobal0X128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feeGrowthGlobal1X128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  high0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  high1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  liquidity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  low0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  low1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  open0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  open1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  protocolFeesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  sqrtPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tick?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  token0Price?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  token1Price?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  tvlUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  txCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  volumeToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PoolDayDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['PoolDayData'] = ResolversParentTypes['PoolDayData']> = {
  close?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  feeGrowthGlobal0X128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feeGrowthGlobal1X128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  high?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  liquidity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  low?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  open?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  protocolFeesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  sqrtPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tick?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  token0Price?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  token1Price?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  tvlUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  txCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  volumeToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PoolHourCandleDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['PoolHourCandleData'] = ResolversParentTypes['PoolHourCandleData']> = {
  close0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  close1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  feeGrowthGlobal0X128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feeGrowthGlobal1X128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  high0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  high1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  liquidity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  low0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  low1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  open0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  open1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  periodStartUnix?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  protocolFeesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  sqrtPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tick?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  token0Price?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  token1Price?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  tvlUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  txCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  volumeToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PoolHourDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['PoolHourData'] = ResolversParentTypes['PoolHourData']> = {
  close?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  feeGrowthGlobal0X128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feeGrowthGlobal1X128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  high?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  liquidity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  low?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  open?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  periodStartUnix?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  protocolFeesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  sqrtPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tick?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  token0Price?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  token1Price?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  tvlUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  txCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  volumeToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PoolMinuteCandleDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['PoolMinuteCandleData'] = ResolversParentTypes['PoolMinuteCandleData']> = {
  close0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  close1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  feeGrowthGlobal0X128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feeGrowthGlobal1X128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  high0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  high1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  liquidity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  low0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  low1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  open0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  open1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  periodStartUnix?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  protocolFeesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  sqrtPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tick?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  token0Price?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  token1Price?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  tvlUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  txCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  volumeToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PoolMonthCandleDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['PoolMonthCandleData'] = ResolversParentTypes['PoolMonthCandleData']> = {
  close0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  close1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  feeGrowthGlobal0X128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feeGrowthGlobal1X128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  high0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  high1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  liquidity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  low0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  low1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  open0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  open1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  protocolFeesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  sqrtPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tick?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  token0Price?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  token1Price?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  tvlUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  txCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  volumeToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PoolWeekCandleDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['PoolWeekCandleData'] = ResolversParentTypes['PoolWeekCandleData']> = {
  close0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  close1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  feeGrowthGlobal0X128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feeGrowthGlobal1X128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  high0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  high1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  liquidity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  low0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  low1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  open0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  open1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  protocolFeesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  sqrtPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tick?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  token0Price?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  token1Price?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  tvlUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  txCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  volumeToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PositionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Position'] = ResolversParentTypes['Position']> = {
  collectedFeesToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  collectedFeesToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  depositedToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  depositedToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  feeGrowthInside0LastX128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feeGrowthInside1LastX128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  liquidity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  tickLower?: Resolver<ResolversTypes['Tick'], ParentType, ContextType>;
  tickUpper?: Resolver<ResolversTypes['Tick'], ParentType, ContextType>;
  token0?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  token1?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>;
  withdrawnToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  withdrawnToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PositionSnapshotResolvers<ContextType = any, ParentType extends ResolversParentTypes['PositionSnapshot'] = ResolversParentTypes['PositionSnapshot']> = {
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  collectedFeesToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  collectedFeesToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  depositedToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  depositedToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  feeGrowthInside0LastX128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feeGrowthInside1LastX128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  liquidity?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  position?: Resolver<ResolversTypes['Position'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>;
  withdrawnToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  withdrawnToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_MetaArgs>>;
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryAccountArgs, 'id' | 'subgraphError'>>;
  accountCollectionOwnership?: Resolver<Maybe<ResolversTypes['AccountCollectionOwnership']>, ParentType, ContextType, RequireFields<QueryAccountCollectionOwnershipArgs, 'id' | 'subgraphError'>>;
  accountCollectionOwnerships?: Resolver<Array<ResolversTypes['AccountCollectionOwnership']>, ParentType, ContextType, RequireFields<QueryAccountCollectionOwnershipsArgs, 'first' | 'skip' | 'subgraphError'>>;
  accounts?: Resolver<Array<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryAccountsArgs, 'first' | 'skip' | 'subgraphError'>>;
  block?: Resolver<Maybe<ResolversTypes['Block']>, ParentType, ContextType, RequireFields<QueryBlockArgs, 'id' | 'subgraphError'>>;
  blocks?: Resolver<Array<ResolversTypes['Block']>, ParentType, ContextType, RequireFields<QueryBlocksArgs, 'first' | 'skip' | 'subgraphError'>>;
  bundle?: Resolver<Maybe<ResolversTypes['Bundle']>, ParentType, ContextType, RequireFields<QueryBundleArgs, 'id' | 'subgraphError'>>;
  bundles?: Resolver<Array<ResolversTypes['Bundle']>, ParentType, ContextType, RequireFields<QueryBundlesArgs, 'first' | 'skip' | 'subgraphError'>>;
  burn?: Resolver<Maybe<ResolversTypes['Burn']>, ParentType, ContextType, RequireFields<QueryBurnArgs, 'id' | 'subgraphError'>>;
  burns?: Resolver<Array<ResolversTypes['Burn']>, ParentType, ContextType, RequireFields<QueryBurnsArgs, 'first' | 'skip' | 'subgraphError'>>;
  collect?: Resolver<Maybe<ResolversTypes['Collect']>, ParentType, ContextType, RequireFields<QueryCollectArgs, 'id' | 'subgraphError'>>;
  collects?: Resolver<Array<ResolversTypes['Collect']>, ParentType, ContextType, RequireFields<QueryCollectsArgs, 'first' | 'skip' | 'subgraphError'>>;
  contract?: Resolver<Maybe<ResolversTypes['Contract']>, ParentType, ContextType, RequireFields<QueryContractArgs, 'id' | 'subgraphError'>>;
  contracts?: Resolver<Array<ResolversTypes['Contract']>, ParentType, ContextType, RequireFields<QueryContractsArgs, 'first' | 'skip' | 'subgraphError'>>;
  creator?: Resolver<Maybe<ResolversTypes['Creator']>, ParentType, ContextType, RequireFields<QueryCreatorArgs, 'id' | 'subgraphError'>>;
  creators?: Resolver<Array<ResolversTypes['Creator']>, ParentType, ContextType, RequireFields<QueryCreatorsArgs, 'first' | 'skip' | 'subgraphError'>>;
  delegation?: Resolver<Maybe<ResolversTypes['Delegation']>, ParentType, ContextType, RequireFields<QueryDelegationArgs, 'id' | 'subgraphError'>>;
  delegations?: Resolver<Array<ResolversTypes['Delegation']>, ParentType, ContextType, RequireFields<QueryDelegationsArgs, 'first' | 'skip' | 'subgraphError'>>;
  delegator?: Resolver<Maybe<ResolversTypes['Delegator']>, ParentType, ContextType, RequireFields<QueryDelegatorArgs, 'id' | 'subgraphError'>>;
  delegators?: Resolver<Array<ResolversTypes['Delegator']>, ParentType, ContextType, RequireFields<QueryDelegatorsArgs, 'first' | 'skip' | 'subgraphError'>>;
  epoch?: Resolver<Maybe<ResolversTypes['Epoch']>, ParentType, ContextType, RequireFields<QueryEpochArgs, 'id' | 'subgraphError'>>;
  epoches?: Resolver<Array<ResolversTypes['Epoch']>, ParentType, ContextType, RequireFields<QueryEpochesArgs, 'first' | 'skip' | 'subgraphError'>>;
  erc721Contract?: Resolver<Maybe<ResolversTypes['ERC721Contract']>, ParentType, ContextType, RequireFields<QueryErc721ContractArgs, 'id' | 'subgraphError'>>;
  erc721Contracts?: Resolver<Array<ResolversTypes['ERC721Contract']>, ParentType, ContextType, RequireFields<QueryErc721ContractsArgs, 'first' | 'skip' | 'subgraphError'>>;
  erc721Creator?: Resolver<Maybe<ResolversTypes['ERC721Creator']>, ParentType, ContextType, RequireFields<QueryErc721CreatorArgs, 'id' | 'subgraphError'>>;
  erc721Creators?: Resolver<Array<ResolversTypes['ERC721Creator']>, ParentType, ContextType, RequireFields<QueryErc721CreatorsArgs, 'first' | 'skip' | 'subgraphError'>>;
  erc721Token?: Resolver<Maybe<ResolversTypes['ERC721Token']>, ParentType, ContextType, RequireFields<QueryErc721TokenArgs, 'id' | 'subgraphError'>>;
  erc721Tokens?: Resolver<Array<ResolversTypes['ERC721Token']>, ParentType, ContextType, RequireFields<QueryErc721TokensArgs, 'first' | 'skip' | 'subgraphError'>>;
  erc721Transfer?: Resolver<Maybe<ResolversTypes['ERC721Transfer']>, ParentType, ContextType, RequireFields<QueryErc721TransferArgs, 'id' | 'subgraphError'>>;
  erc721Transfers?: Resolver<Array<ResolversTypes['ERC721Transfer']>, ParentType, ContextType, RequireFields<QueryErc721TransfersArgs, 'first' | 'skip' | 'subgraphError'>>;
  erc1155Balance?: Resolver<Maybe<ResolversTypes['ERC1155Balance']>, ParentType, ContextType, RequireFields<QueryErc1155BalanceArgs, 'id' | 'subgraphError'>>;
  erc1155Balances?: Resolver<Array<ResolversTypes['ERC1155Balance']>, ParentType, ContextType, RequireFields<QueryErc1155BalancesArgs, 'first' | 'skip' | 'subgraphError'>>;
  erc1155Contract?: Resolver<Maybe<ResolversTypes['ERC1155Contract']>, ParentType, ContextType, RequireFields<QueryErc1155ContractArgs, 'id' | 'subgraphError'>>;
  erc1155Contracts?: Resolver<Array<ResolversTypes['ERC1155Contract']>, ParentType, ContextType, RequireFields<QueryErc1155ContractsArgs, 'first' | 'skip' | 'subgraphError'>>;
  erc1155Creator?: Resolver<Maybe<ResolversTypes['ERC1155Creator']>, ParentType, ContextType, RequireFields<QueryErc1155CreatorArgs, 'id' | 'subgraphError'>>;
  erc1155Creators?: Resolver<Array<ResolversTypes['ERC1155Creator']>, ParentType, ContextType, RequireFields<QueryErc1155CreatorsArgs, 'first' | 'skip' | 'subgraphError'>>;
  erc1155Token?: Resolver<Maybe<ResolversTypes['ERC1155Token']>, ParentType, ContextType, RequireFields<QueryErc1155TokenArgs, 'id' | 'subgraphError'>>;
  erc1155Tokens?: Resolver<Array<ResolversTypes['ERC1155Token']>, ParentType, ContextType, RequireFields<QueryErc1155TokensArgs, 'first' | 'skip' | 'subgraphError'>>;
  erc1155Transfer?: Resolver<Maybe<ResolversTypes['ERC1155Transfer']>, ParentType, ContextType, RequireFields<QueryErc1155TransferArgs, 'id' | 'subgraphError'>>;
  erc1155Transfers?: Resolver<Array<ResolversTypes['ERC1155Transfer']>, ParentType, ContextType, RequireFields<QueryErc1155TransfersArgs, 'first' | 'skip' | 'subgraphError'>>;
  event?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<QueryEventArgs, 'id' | 'subgraphError'>>;
  events?: Resolver<Array<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<QueryEventsArgs, 'first' | 'skip' | 'subgraphError'>>;
  factories?: Resolver<Array<ResolversTypes['Factory']>, ParentType, ContextType, RequireFields<QueryFactoriesArgs, 'first' | 'skip' | 'subgraphError'>>;
  factory?: Resolver<Maybe<ResolversTypes['Factory']>, ParentType, ContextType, RequireFields<QueryFactoryArgs, 'id' | 'subgraphError'>>;
  flash?: Resolver<Maybe<ResolversTypes['Flash']>, ParentType, ContextType, RequireFields<QueryFlashArgs, 'id' | 'subgraphError'>>;
  flashes?: Resolver<Array<ResolversTypes['Flash']>, ParentType, ContextType, RequireFields<QueryFlashesArgs, 'first' | 'skip' | 'subgraphError'>>;
  lockedUp?: Resolver<Maybe<ResolversTypes['LockedUp']>, ParentType, ContextType, RequireFields<QueryLockedUpArgs, 'id' | 'subgraphError'>>;
  lockedUps?: Resolver<Array<ResolversTypes['LockedUp']>, ParentType, ContextType, RequireFields<QueryLockedUpsArgs, 'first' | 'skip' | 'subgraphError'>>;
  marketEvent721?: Resolver<Maybe<ResolversTypes['MarketEvent721']>, ParentType, ContextType, RequireFields<QueryMarketEvent721Args, 'id' | 'subgraphError'>>;
  marketEvent721S?: Resolver<Array<ResolversTypes['MarketEvent721']>, ParentType, ContextType, RequireFields<QueryMarketEvent721SArgs, 'first' | 'skip' | 'subgraphError'>>;
  marketEvent1155?: Resolver<Maybe<ResolversTypes['MarketEvent1155']>, ParentType, ContextType, RequireFields<QueryMarketEvent1155Args, 'id' | 'subgraphError'>>;
  marketEvent1155S?: Resolver<Array<ResolversTypes['MarketEvent1155']>, ParentType, ContextType, RequireFields<QueryMarketEvent1155SArgs, 'first' | 'skip' | 'subgraphError'>>;
  marketFee?: Resolver<Maybe<ResolversTypes['MarketFee']>, ParentType, ContextType, RequireFields<QueryMarketFeeArgs, 'id' | 'subgraphError'>>;
  marketFees?: Resolver<Array<ResolversTypes['MarketFee']>, ParentType, ContextType, RequireFields<QueryMarketFeesArgs, 'first' | 'skip' | 'subgraphError'>>;
  marketVolume?: Resolver<Maybe<ResolversTypes['MarketVolume']>, ParentType, ContextType, RequireFields<QueryMarketVolumeArgs, 'id' | 'subgraphError'>>;
  marketVolumes?: Resolver<Array<ResolversTypes['MarketVolume']>, ParentType, ContextType, RequireFields<QueryMarketVolumesArgs, 'first' | 'skip' | 'subgraphError'>>;
  mint?: Resolver<Maybe<ResolversTypes['Mint']>, ParentType, ContextType, RequireFields<QueryMintArgs, 'id' | 'subgraphError'>>;
  mints?: Resolver<Array<ResolversTypes['Mint']>, ParentType, ContextType, RequireFields<QueryMintsArgs, 'first' | 'skip' | 'subgraphError'>>;
  onSaleStatus1155?: Resolver<Maybe<ResolversTypes['OnSaleStatus1155']>, ParentType, ContextType, RequireFields<QueryOnSaleStatus1155Args, 'id' | 'subgraphError'>>;
  onSaleStatus1155S?: Resolver<Array<ResolversTypes['OnSaleStatus1155']>, ParentType, ContextType, RequireFields<QueryOnSaleStatus1155SArgs, 'first' | 'skip' | 'subgraphError'>>;
  order?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<QueryOrderArgs, 'id' | 'subgraphError'>>;
  orderTransfer?: Resolver<Maybe<ResolversTypes['OrderTransfer']>, ParentType, ContextType, RequireFields<QueryOrderTransferArgs, 'id' | 'subgraphError'>>;
  orderTransfers?: Resolver<Array<ResolversTypes['OrderTransfer']>, ParentType, ContextType, RequireFields<QueryOrderTransfersArgs, 'first' | 'skip' | 'subgraphError'>>;
  orders?: Resolver<Array<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<QueryOrdersArgs, 'first' | 'skip' | 'subgraphError'>>;
  ownedTokenCount?: Resolver<Maybe<ResolversTypes['OwnedTokenCount']>, ParentType, ContextType, RequireFields<QueryOwnedTokenCountArgs, 'id' | 'subgraphError'>>;
  ownedTokenCounts?: Resolver<Array<ResolversTypes['OwnedTokenCount']>, ParentType, ContextType, RequireFields<QueryOwnedTokenCountsArgs, 'first' | 'skip' | 'subgraphError'>>;
  ownerContract?: Resolver<Maybe<ResolversTypes['OwnerContract']>, ParentType, ContextType, RequireFields<QueryOwnerContractArgs, 'id' | 'subgraphError'>>;
  ownerContracts?: Resolver<Array<ResolversTypes['OwnerContract']>, ParentType, ContextType, RequireFields<QueryOwnerContractsArgs, 'first' | 'skip' | 'subgraphError'>>;
  pancakeDayData?: Resolver<Maybe<ResolversTypes['PancakeDayData']>, ParentType, ContextType, RequireFields<QueryPancakeDayDataArgs, 'id' | 'subgraphError'>>;
  pancakeDayDatas?: Resolver<Array<ResolversTypes['PancakeDayData']>, ParentType, ContextType, RequireFields<QueryPancakeDayDatasArgs, 'first' | 'skip' | 'subgraphError'>>;
  pool?: Resolver<Maybe<ResolversTypes['Pool']>, ParentType, ContextType, RequireFields<QueryPoolArgs, 'id' | 'subgraphError'>>;
  pool5MinuteCandleData?: Resolver<Maybe<ResolversTypes['Pool5MinuteCandleData']>, ParentType, ContextType, RequireFields<QueryPool5MinuteCandleDataArgs, 'id' | 'subgraphError'>>;
  pool5MinuteCandleDatas?: Resolver<Array<ResolversTypes['Pool5MinuteCandleData']>, ParentType, ContextType, RequireFields<QueryPool5MinuteCandleDatasArgs, 'first' | 'skip' | 'subgraphError'>>;
  pool15MinuteCandleData?: Resolver<Maybe<ResolversTypes['Pool15MinuteCandleData']>, ParentType, ContextType, RequireFields<QueryPool15MinuteCandleDataArgs, 'id' | 'subgraphError'>>;
  pool15MinuteCandleDatas?: Resolver<Array<ResolversTypes['Pool15MinuteCandleData']>, ParentType, ContextType, RequireFields<QueryPool15MinuteCandleDatasArgs, 'first' | 'skip' | 'subgraphError'>>;
  pool30MinuteCandleData?: Resolver<Maybe<ResolversTypes['Pool30MinuteCandleData']>, ParentType, ContextType, RequireFields<QueryPool30MinuteCandleDataArgs, 'id' | 'subgraphError'>>;
  pool30MinuteCandleDatas?: Resolver<Array<ResolversTypes['Pool30MinuteCandleData']>, ParentType, ContextType, RequireFields<QueryPool30MinuteCandleDatasArgs, 'first' | 'skip' | 'subgraphError'>>;
  poolDayCandleData?: Resolver<Maybe<ResolversTypes['PoolDayCandleData']>, ParentType, ContextType, RequireFields<QueryPoolDayCandleDataArgs, 'id' | 'subgraphError'>>;
  poolDayCandleDatas?: Resolver<Array<ResolversTypes['PoolDayCandleData']>, ParentType, ContextType, RequireFields<QueryPoolDayCandleDatasArgs, 'first' | 'skip' | 'subgraphError'>>;
  poolDayData?: Resolver<Maybe<ResolversTypes['PoolDayData']>, ParentType, ContextType, RequireFields<QueryPoolDayDataArgs, 'id' | 'subgraphError'>>;
  poolDayDatas?: Resolver<Array<ResolversTypes['PoolDayData']>, ParentType, ContextType, RequireFields<QueryPoolDayDatasArgs, 'first' | 'skip' | 'subgraphError'>>;
  poolHourCandleData?: Resolver<Maybe<ResolversTypes['PoolHourCandleData']>, ParentType, ContextType, RequireFields<QueryPoolHourCandleDataArgs, 'id' | 'subgraphError'>>;
  poolHourCandleDatas?: Resolver<Array<ResolversTypes['PoolHourCandleData']>, ParentType, ContextType, RequireFields<QueryPoolHourCandleDatasArgs, 'first' | 'skip' | 'subgraphError'>>;
  poolHourData?: Resolver<Maybe<ResolversTypes['PoolHourData']>, ParentType, ContextType, RequireFields<QueryPoolHourDataArgs, 'id' | 'subgraphError'>>;
  poolHourDatas?: Resolver<Array<ResolversTypes['PoolHourData']>, ParentType, ContextType, RequireFields<QueryPoolHourDatasArgs, 'first' | 'skip' | 'subgraphError'>>;
  poolMinuteCandleData?: Resolver<Maybe<ResolversTypes['PoolMinuteCandleData']>, ParentType, ContextType, RequireFields<QueryPoolMinuteCandleDataArgs, 'id' | 'subgraphError'>>;
  poolMinuteCandleDatas?: Resolver<Array<ResolversTypes['PoolMinuteCandleData']>, ParentType, ContextType, RequireFields<QueryPoolMinuteCandleDatasArgs, 'first' | 'skip' | 'subgraphError'>>;
  poolMonthCandleData?: Resolver<Maybe<ResolversTypes['PoolMonthCandleData']>, ParentType, ContextType, RequireFields<QueryPoolMonthCandleDataArgs, 'id' | 'subgraphError'>>;
  poolMonthCandleDatas?: Resolver<Array<ResolversTypes['PoolMonthCandleData']>, ParentType, ContextType, RequireFields<QueryPoolMonthCandleDatasArgs, 'first' | 'skip' | 'subgraphError'>>;
  poolWeekCandleData?: Resolver<Maybe<ResolversTypes['PoolWeekCandleData']>, ParentType, ContextType, RequireFields<QueryPoolWeekCandleDataArgs, 'id' | 'subgraphError'>>;
  poolWeekCandleDatas?: Resolver<Array<ResolversTypes['PoolWeekCandleData']>, ParentType, ContextType, RequireFields<QueryPoolWeekCandleDatasArgs, 'first' | 'skip' | 'subgraphError'>>;
  pools?: Resolver<Array<ResolversTypes['Pool']>, ParentType, ContextType, RequireFields<QueryPoolsArgs, 'first' | 'skip' | 'subgraphError'>>;
  position?: Resolver<Maybe<ResolversTypes['Position']>, ParentType, ContextType, RequireFields<QueryPositionArgs, 'id' | 'subgraphError'>>;
  positionSnapshot?: Resolver<Maybe<ResolversTypes['PositionSnapshot']>, ParentType, ContextType, RequireFields<QueryPositionSnapshotArgs, 'id' | 'subgraphError'>>;
  positionSnapshots?: Resolver<Array<ResolversTypes['PositionSnapshot']>, ParentType, ContextType, RequireFields<QueryPositionSnapshotsArgs, 'first' | 'skip' | 'subgraphError'>>;
  positions?: Resolver<Array<ResolversTypes['Position']>, ParentType, ContextType, RequireFields<QueryPositionsArgs, 'first' | 'skip' | 'subgraphError'>>;
  royaltiesRegistries?: Resolver<Array<ResolversTypes['RoyaltiesRegistry']>, ParentType, ContextType, RequireFields<QueryRoyaltiesRegistriesArgs, 'first' | 'skip' | 'subgraphError'>>;
  royaltiesRegistry?: Resolver<Maybe<ResolversTypes['RoyaltiesRegistry']>, ParentType, ContextType, RequireFields<QueryRoyaltiesRegistryArgs, 'id' | 'subgraphError'>>;
  staking?: Resolver<Maybe<ResolversTypes['Staking']>, ParentType, ContextType, RequireFields<QueryStakingArgs, 'id' | 'subgraphError'>>;
  stakings?: Resolver<Array<ResolversTypes['Staking']>, ParentType, ContextType, RequireFields<QueryStakingsArgs, 'first' | 'skip' | 'subgraphError'>>;
  swap?: Resolver<Maybe<ResolversTypes['Swap']>, ParentType, ContextType, RequireFields<QuerySwapArgs, 'id' | 'subgraphError'>>;
  swaps?: Resolver<Array<ResolversTypes['Swap']>, ParentType, ContextType, RequireFields<QuerySwapsArgs, 'first' | 'skip' | 'subgraphError'>>;
  tick?: Resolver<Maybe<ResolversTypes['Tick']>, ParentType, ContextType, RequireFields<QueryTickArgs, 'id' | 'subgraphError'>>;
  tickDayData?: Resolver<Maybe<ResolversTypes['TickDayData']>, ParentType, ContextType, RequireFields<QueryTickDayDataArgs, 'id' | 'subgraphError'>>;
  tickDayDatas?: Resolver<Array<ResolversTypes['TickDayData']>, ParentType, ContextType, RequireFields<QueryTickDayDatasArgs, 'first' | 'skip' | 'subgraphError'>>;
  tickHourData?: Resolver<Maybe<ResolversTypes['TickHourData']>, ParentType, ContextType, RequireFields<QueryTickHourDataArgs, 'id' | 'subgraphError'>>;
  tickHourDatas?: Resolver<Array<ResolversTypes['TickHourData']>, ParentType, ContextType, RequireFields<QueryTickHourDatasArgs, 'first' | 'skip' | 'subgraphError'>>;
  ticks?: Resolver<Array<ResolversTypes['Tick']>, ParentType, ContextType, RequireFields<QueryTicksArgs, 'first' | 'skip' | 'subgraphError'>>;
  token?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<QueryTokenArgs, 'id' | 'subgraphError'>>;
  tokenDayData?: Resolver<Maybe<ResolversTypes['TokenDayData']>, ParentType, ContextType, RequireFields<QueryTokenDayDataArgs, 'id' | 'subgraphError'>>;
  tokenDayDatas?: Resolver<Array<ResolversTypes['TokenDayData']>, ParentType, ContextType, RequireFields<QueryTokenDayDatasArgs, 'first' | 'skip' | 'subgraphError'>>;
  tokenHourData?: Resolver<Maybe<ResolversTypes['TokenHourData']>, ParentType, ContextType, RequireFields<QueryTokenHourDataArgs, 'id' | 'subgraphError'>>;
  tokenHourDatas?: Resolver<Array<ResolversTypes['TokenHourData']>, ParentType, ContextType, RequireFields<QueryTokenHourDatasArgs, 'first' | 'skip' | 'subgraphError'>>;
  tokens?: Resolver<Array<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<QueryTokensArgs, 'first' | 'skip' | 'subgraphError'>>;
  transaction?: Resolver<Maybe<ResolversTypes['Transaction']>, ParentType, ContextType, RequireFields<QueryTransactionArgs, 'id' | 'subgraphError'>>;
  transactionCount?: Resolver<Maybe<ResolversTypes['TransactionCount']>, ParentType, ContextType, RequireFields<QueryTransactionCountArgs, 'id' | 'subgraphError'>>;
  transactionCounts?: Resolver<Array<ResolversTypes['TransactionCount']>, ParentType, ContextType, RequireFields<QueryTransactionCountsArgs, 'first' | 'skip' | 'subgraphError'>>;
  transactions?: Resolver<Array<ResolversTypes['Transaction']>, ParentType, ContextType, RequireFields<QueryTransactionsArgs, 'first' | 'skip' | 'subgraphError'>>;
  transation?: Resolver<Maybe<ResolversTypes['Transation']>, ParentType, ContextType, RequireFields<QueryTransationArgs, 'id' | 'subgraphError'>>;
  transations?: Resolver<Array<ResolversTypes['Transation']>, ParentType, ContextType, RequireFields<QueryTransationsArgs, 'first' | 'skip' | 'subgraphError'>>;
  validation?: Resolver<Maybe<ResolversTypes['Validation']>, ParentType, ContextType, RequireFields<QueryValidationArgs, 'id' | 'subgraphError'>>;
  validations?: Resolver<Array<ResolversTypes['Validation']>, ParentType, ContextType, RequireFields<QueryValidationsArgs, 'first' | 'skip' | 'subgraphError'>>;
  validator?: Resolver<Maybe<ResolversTypes['Validator']>, ParentType, ContextType, RequireFields<QueryValidatorArgs, 'id' | 'subgraphError'>>;
  validators?: Resolver<Array<ResolversTypes['Validator']>, ParentType, ContextType, RequireFields<QueryValidatorsArgs, 'first' | 'skip' | 'subgraphError'>>;
  withdrawalRequest?: Resolver<Maybe<ResolversTypes['WithdrawalRequest']>, ParentType, ContextType, RequireFields<QueryWithdrawalRequestArgs, 'id' | 'subgraphError'>>;
  withdrawalRequests?: Resolver<Array<ResolversTypes['WithdrawalRequest']>, ParentType, ContextType, RequireFields<QueryWithdrawalRequestsArgs, 'first' | 'skip' | 'subgraphError'>>;
};

export type RoyaltiesRegistryResolvers<ContextType = any, ParentType extends ResolversParentTypes['RoyaltiesRegistry'] = ResolversParentTypes['RoyaltiesRegistry']> = {
  account?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  collectionId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  tokenId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StakingResolvers<ContextType = any, ParentType extends ResolversParentTypes['Staking'] = ResolversParentTypes['Staking']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  totalClaimedRewards?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalDelegated?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalDelegator?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalLockStake?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalSelfStaked?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalStaked?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalValidator?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubscriptionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = {
  _meta?: SubscriptionResolver<Maybe<ResolversTypes['_Meta_']>, "_meta", ParentType, ContextType, Partial<Subscription_MetaArgs>>;
  account?: SubscriptionResolver<Maybe<ResolversTypes['Account']>, "account", ParentType, ContextType, RequireFields<SubscriptionAccountArgs, 'id' | 'subgraphError'>>;
  accountCollectionOwnership?: SubscriptionResolver<Maybe<ResolversTypes['AccountCollectionOwnership']>, "accountCollectionOwnership", ParentType, ContextType, RequireFields<SubscriptionAccountCollectionOwnershipArgs, 'id' | 'subgraphError'>>;
  accountCollectionOwnerships?: SubscriptionResolver<Array<ResolversTypes['AccountCollectionOwnership']>, "accountCollectionOwnerships", ParentType, ContextType, RequireFields<SubscriptionAccountCollectionOwnershipsArgs, 'first' | 'skip' | 'subgraphError'>>;
  accounts?: SubscriptionResolver<Array<ResolversTypes['Account']>, "accounts", ParentType, ContextType, RequireFields<SubscriptionAccountsArgs, 'first' | 'skip' | 'subgraphError'>>;
  block?: SubscriptionResolver<Maybe<ResolversTypes['Block']>, "block", ParentType, ContextType, RequireFields<SubscriptionBlockArgs, 'id' | 'subgraphError'>>;
  blocks?: SubscriptionResolver<Array<ResolversTypes['Block']>, "blocks", ParentType, ContextType, RequireFields<SubscriptionBlocksArgs, 'first' | 'skip' | 'subgraphError'>>;
  bundle?: SubscriptionResolver<Maybe<ResolversTypes['Bundle']>, "bundle", ParentType, ContextType, RequireFields<SubscriptionBundleArgs, 'id' | 'subgraphError'>>;
  bundles?: SubscriptionResolver<Array<ResolversTypes['Bundle']>, "bundles", ParentType, ContextType, RequireFields<SubscriptionBundlesArgs, 'first' | 'skip' | 'subgraphError'>>;
  burn?: SubscriptionResolver<Maybe<ResolversTypes['Burn']>, "burn", ParentType, ContextType, RequireFields<SubscriptionBurnArgs, 'id' | 'subgraphError'>>;
  burns?: SubscriptionResolver<Array<ResolversTypes['Burn']>, "burns", ParentType, ContextType, RequireFields<SubscriptionBurnsArgs, 'first' | 'skip' | 'subgraphError'>>;
  collect?: SubscriptionResolver<Maybe<ResolversTypes['Collect']>, "collect", ParentType, ContextType, RequireFields<SubscriptionCollectArgs, 'id' | 'subgraphError'>>;
  collects?: SubscriptionResolver<Array<ResolversTypes['Collect']>, "collects", ParentType, ContextType, RequireFields<SubscriptionCollectsArgs, 'first' | 'skip' | 'subgraphError'>>;
  contract?: SubscriptionResolver<Maybe<ResolversTypes['Contract']>, "contract", ParentType, ContextType, RequireFields<SubscriptionContractArgs, 'id' | 'subgraphError'>>;
  contracts?: SubscriptionResolver<Array<ResolversTypes['Contract']>, "contracts", ParentType, ContextType, RequireFields<SubscriptionContractsArgs, 'first' | 'skip' | 'subgraphError'>>;
  creator?: SubscriptionResolver<Maybe<ResolversTypes['Creator']>, "creator", ParentType, ContextType, RequireFields<SubscriptionCreatorArgs, 'id' | 'subgraphError'>>;
  creators?: SubscriptionResolver<Array<ResolversTypes['Creator']>, "creators", ParentType, ContextType, RequireFields<SubscriptionCreatorsArgs, 'first' | 'skip' | 'subgraphError'>>;
  delegation?: SubscriptionResolver<Maybe<ResolversTypes['Delegation']>, "delegation", ParentType, ContextType, RequireFields<SubscriptionDelegationArgs, 'id' | 'subgraphError'>>;
  delegations?: SubscriptionResolver<Array<ResolversTypes['Delegation']>, "delegations", ParentType, ContextType, RequireFields<SubscriptionDelegationsArgs, 'first' | 'skip' | 'subgraphError'>>;
  delegator?: SubscriptionResolver<Maybe<ResolversTypes['Delegator']>, "delegator", ParentType, ContextType, RequireFields<SubscriptionDelegatorArgs, 'id' | 'subgraphError'>>;
  delegators?: SubscriptionResolver<Array<ResolversTypes['Delegator']>, "delegators", ParentType, ContextType, RequireFields<SubscriptionDelegatorsArgs, 'first' | 'skip' | 'subgraphError'>>;
  epoch?: SubscriptionResolver<Maybe<ResolversTypes['Epoch']>, "epoch", ParentType, ContextType, RequireFields<SubscriptionEpochArgs, 'id' | 'subgraphError'>>;
  epoches?: SubscriptionResolver<Array<ResolversTypes['Epoch']>, "epoches", ParentType, ContextType, RequireFields<SubscriptionEpochesArgs, 'first' | 'skip' | 'subgraphError'>>;
  erc721Contract?: SubscriptionResolver<Maybe<ResolversTypes['ERC721Contract']>, "erc721Contract", ParentType, ContextType, RequireFields<SubscriptionErc721ContractArgs, 'id' | 'subgraphError'>>;
  erc721Contracts?: SubscriptionResolver<Array<ResolversTypes['ERC721Contract']>, "erc721Contracts", ParentType, ContextType, RequireFields<SubscriptionErc721ContractsArgs, 'first' | 'skip' | 'subgraphError'>>;
  erc721Creator?: SubscriptionResolver<Maybe<ResolversTypes['ERC721Creator']>, "erc721Creator", ParentType, ContextType, RequireFields<SubscriptionErc721CreatorArgs, 'id' | 'subgraphError'>>;
  erc721Creators?: SubscriptionResolver<Array<ResolversTypes['ERC721Creator']>, "erc721Creators", ParentType, ContextType, RequireFields<SubscriptionErc721CreatorsArgs, 'first' | 'skip' | 'subgraphError'>>;
  erc721Token?: SubscriptionResolver<Maybe<ResolversTypes['ERC721Token']>, "erc721Token", ParentType, ContextType, RequireFields<SubscriptionErc721TokenArgs, 'id' | 'subgraphError'>>;
  erc721Tokens?: SubscriptionResolver<Array<ResolversTypes['ERC721Token']>, "erc721Tokens", ParentType, ContextType, RequireFields<SubscriptionErc721TokensArgs, 'first' | 'skip' | 'subgraphError'>>;
  erc721Transfer?: SubscriptionResolver<Maybe<ResolversTypes['ERC721Transfer']>, "erc721Transfer", ParentType, ContextType, RequireFields<SubscriptionErc721TransferArgs, 'id' | 'subgraphError'>>;
  erc721Transfers?: SubscriptionResolver<Array<ResolversTypes['ERC721Transfer']>, "erc721Transfers", ParentType, ContextType, RequireFields<SubscriptionErc721TransfersArgs, 'first' | 'skip' | 'subgraphError'>>;
  erc1155Balance?: SubscriptionResolver<Maybe<ResolversTypes['ERC1155Balance']>, "erc1155Balance", ParentType, ContextType, RequireFields<SubscriptionErc1155BalanceArgs, 'id' | 'subgraphError'>>;
  erc1155Balances?: SubscriptionResolver<Array<ResolversTypes['ERC1155Balance']>, "erc1155Balances", ParentType, ContextType, RequireFields<SubscriptionErc1155BalancesArgs, 'first' | 'skip' | 'subgraphError'>>;
  erc1155Contract?: SubscriptionResolver<Maybe<ResolversTypes['ERC1155Contract']>, "erc1155Contract", ParentType, ContextType, RequireFields<SubscriptionErc1155ContractArgs, 'id' | 'subgraphError'>>;
  erc1155Contracts?: SubscriptionResolver<Array<ResolversTypes['ERC1155Contract']>, "erc1155Contracts", ParentType, ContextType, RequireFields<SubscriptionErc1155ContractsArgs, 'first' | 'skip' | 'subgraphError'>>;
  erc1155Creator?: SubscriptionResolver<Maybe<ResolversTypes['ERC1155Creator']>, "erc1155Creator", ParentType, ContextType, RequireFields<SubscriptionErc1155CreatorArgs, 'id' | 'subgraphError'>>;
  erc1155Creators?: SubscriptionResolver<Array<ResolversTypes['ERC1155Creator']>, "erc1155Creators", ParentType, ContextType, RequireFields<SubscriptionErc1155CreatorsArgs, 'first' | 'skip' | 'subgraphError'>>;
  erc1155Token?: SubscriptionResolver<Maybe<ResolversTypes['ERC1155Token']>, "erc1155Token", ParentType, ContextType, RequireFields<SubscriptionErc1155TokenArgs, 'id' | 'subgraphError'>>;
  erc1155Tokens?: SubscriptionResolver<Array<ResolversTypes['ERC1155Token']>, "erc1155Tokens", ParentType, ContextType, RequireFields<SubscriptionErc1155TokensArgs, 'first' | 'skip' | 'subgraphError'>>;
  erc1155Transfer?: SubscriptionResolver<Maybe<ResolversTypes['ERC1155Transfer']>, "erc1155Transfer", ParentType, ContextType, RequireFields<SubscriptionErc1155TransferArgs, 'id' | 'subgraphError'>>;
  erc1155Transfers?: SubscriptionResolver<Array<ResolversTypes['ERC1155Transfer']>, "erc1155Transfers", ParentType, ContextType, RequireFields<SubscriptionErc1155TransfersArgs, 'first' | 'skip' | 'subgraphError'>>;
  event?: SubscriptionResolver<Maybe<ResolversTypes['Event']>, "event", ParentType, ContextType, RequireFields<SubscriptionEventArgs, 'id' | 'subgraphError'>>;
  events?: SubscriptionResolver<Array<ResolversTypes['Event']>, "events", ParentType, ContextType, RequireFields<SubscriptionEventsArgs, 'first' | 'skip' | 'subgraphError'>>;
  factories?: SubscriptionResolver<Array<ResolversTypes['Factory']>, "factories", ParentType, ContextType, RequireFields<SubscriptionFactoriesArgs, 'first' | 'skip' | 'subgraphError'>>;
  factory?: SubscriptionResolver<Maybe<ResolversTypes['Factory']>, "factory", ParentType, ContextType, RequireFields<SubscriptionFactoryArgs, 'id' | 'subgraphError'>>;
  flash?: SubscriptionResolver<Maybe<ResolversTypes['Flash']>, "flash", ParentType, ContextType, RequireFields<SubscriptionFlashArgs, 'id' | 'subgraphError'>>;
  flashes?: SubscriptionResolver<Array<ResolversTypes['Flash']>, "flashes", ParentType, ContextType, RequireFields<SubscriptionFlashesArgs, 'first' | 'skip' | 'subgraphError'>>;
  lockedUp?: SubscriptionResolver<Maybe<ResolversTypes['LockedUp']>, "lockedUp", ParentType, ContextType, RequireFields<SubscriptionLockedUpArgs, 'id' | 'subgraphError'>>;
  lockedUps?: SubscriptionResolver<Array<ResolversTypes['LockedUp']>, "lockedUps", ParentType, ContextType, RequireFields<SubscriptionLockedUpsArgs, 'first' | 'skip' | 'subgraphError'>>;
  marketEvent721?: SubscriptionResolver<Maybe<ResolversTypes['MarketEvent721']>, "marketEvent721", ParentType, ContextType, RequireFields<SubscriptionMarketEvent721Args, 'id' | 'subgraphError'>>;
  marketEvent721S?: SubscriptionResolver<Array<ResolversTypes['MarketEvent721']>, "marketEvent721S", ParentType, ContextType, RequireFields<SubscriptionMarketEvent721SArgs, 'first' | 'skip' | 'subgraphError'>>;
  marketEvent1155?: SubscriptionResolver<Maybe<ResolversTypes['MarketEvent1155']>, "marketEvent1155", ParentType, ContextType, RequireFields<SubscriptionMarketEvent1155Args, 'id' | 'subgraphError'>>;
  marketEvent1155S?: SubscriptionResolver<Array<ResolversTypes['MarketEvent1155']>, "marketEvent1155S", ParentType, ContextType, RequireFields<SubscriptionMarketEvent1155SArgs, 'first' | 'skip' | 'subgraphError'>>;
  marketFee?: SubscriptionResolver<Maybe<ResolversTypes['MarketFee']>, "marketFee", ParentType, ContextType, RequireFields<SubscriptionMarketFeeArgs, 'id' | 'subgraphError'>>;
  marketFees?: SubscriptionResolver<Array<ResolversTypes['MarketFee']>, "marketFees", ParentType, ContextType, RequireFields<SubscriptionMarketFeesArgs, 'first' | 'skip' | 'subgraphError'>>;
  marketVolume?: SubscriptionResolver<Maybe<ResolversTypes['MarketVolume']>, "marketVolume", ParentType, ContextType, RequireFields<SubscriptionMarketVolumeArgs, 'id' | 'subgraphError'>>;
  marketVolumes?: SubscriptionResolver<Array<ResolversTypes['MarketVolume']>, "marketVolumes", ParentType, ContextType, RequireFields<SubscriptionMarketVolumesArgs, 'first' | 'skip' | 'subgraphError'>>;
  mint?: SubscriptionResolver<Maybe<ResolversTypes['Mint']>, "mint", ParentType, ContextType, RequireFields<SubscriptionMintArgs, 'id' | 'subgraphError'>>;
  mints?: SubscriptionResolver<Array<ResolversTypes['Mint']>, "mints", ParentType, ContextType, RequireFields<SubscriptionMintsArgs, 'first' | 'skip' | 'subgraphError'>>;
  onSaleStatus1155?: SubscriptionResolver<Maybe<ResolversTypes['OnSaleStatus1155']>, "onSaleStatus1155", ParentType, ContextType, RequireFields<SubscriptionOnSaleStatus1155Args, 'id' | 'subgraphError'>>;
  onSaleStatus1155S?: SubscriptionResolver<Array<ResolversTypes['OnSaleStatus1155']>, "onSaleStatus1155S", ParentType, ContextType, RequireFields<SubscriptionOnSaleStatus1155SArgs, 'first' | 'skip' | 'subgraphError'>>;
  order?: SubscriptionResolver<Maybe<ResolversTypes['Order']>, "order", ParentType, ContextType, RequireFields<SubscriptionOrderArgs, 'id' | 'subgraphError'>>;
  orderTransfer?: SubscriptionResolver<Maybe<ResolversTypes['OrderTransfer']>, "orderTransfer", ParentType, ContextType, RequireFields<SubscriptionOrderTransferArgs, 'id' | 'subgraphError'>>;
  orderTransfers?: SubscriptionResolver<Array<ResolversTypes['OrderTransfer']>, "orderTransfers", ParentType, ContextType, RequireFields<SubscriptionOrderTransfersArgs, 'first' | 'skip' | 'subgraphError'>>;
  orders?: SubscriptionResolver<Array<ResolversTypes['Order']>, "orders", ParentType, ContextType, RequireFields<SubscriptionOrdersArgs, 'first' | 'skip' | 'subgraphError'>>;
  ownedTokenCount?: SubscriptionResolver<Maybe<ResolversTypes['OwnedTokenCount']>, "ownedTokenCount", ParentType, ContextType, RequireFields<SubscriptionOwnedTokenCountArgs, 'id' | 'subgraphError'>>;
  ownedTokenCounts?: SubscriptionResolver<Array<ResolversTypes['OwnedTokenCount']>, "ownedTokenCounts", ParentType, ContextType, RequireFields<SubscriptionOwnedTokenCountsArgs, 'first' | 'skip' | 'subgraphError'>>;
  ownerContract?: SubscriptionResolver<Maybe<ResolversTypes['OwnerContract']>, "ownerContract", ParentType, ContextType, RequireFields<SubscriptionOwnerContractArgs, 'id' | 'subgraphError'>>;
  ownerContracts?: SubscriptionResolver<Array<ResolversTypes['OwnerContract']>, "ownerContracts", ParentType, ContextType, RequireFields<SubscriptionOwnerContractsArgs, 'first' | 'skip' | 'subgraphError'>>;
  pancakeDayData?: SubscriptionResolver<Maybe<ResolversTypes['PancakeDayData']>, "pancakeDayData", ParentType, ContextType, RequireFields<SubscriptionPancakeDayDataArgs, 'id' | 'subgraphError'>>;
  pancakeDayDatas?: SubscriptionResolver<Array<ResolversTypes['PancakeDayData']>, "pancakeDayDatas", ParentType, ContextType, RequireFields<SubscriptionPancakeDayDatasArgs, 'first' | 'skip' | 'subgraphError'>>;
  pool?: SubscriptionResolver<Maybe<ResolversTypes['Pool']>, "pool", ParentType, ContextType, RequireFields<SubscriptionPoolArgs, 'id' | 'subgraphError'>>;
  pool5MinuteCandleData?: SubscriptionResolver<Maybe<ResolversTypes['Pool5MinuteCandleData']>, "pool5MinuteCandleData", ParentType, ContextType, RequireFields<SubscriptionPool5MinuteCandleDataArgs, 'id' | 'subgraphError'>>;
  pool5MinuteCandleDatas?: SubscriptionResolver<Array<ResolversTypes['Pool5MinuteCandleData']>, "pool5MinuteCandleDatas", ParentType, ContextType, RequireFields<SubscriptionPool5MinuteCandleDatasArgs, 'first' | 'skip' | 'subgraphError'>>;
  pool15MinuteCandleData?: SubscriptionResolver<Maybe<ResolversTypes['Pool15MinuteCandleData']>, "pool15MinuteCandleData", ParentType, ContextType, RequireFields<SubscriptionPool15MinuteCandleDataArgs, 'id' | 'subgraphError'>>;
  pool15MinuteCandleDatas?: SubscriptionResolver<Array<ResolversTypes['Pool15MinuteCandleData']>, "pool15MinuteCandleDatas", ParentType, ContextType, RequireFields<SubscriptionPool15MinuteCandleDatasArgs, 'first' | 'skip' | 'subgraphError'>>;
  pool30MinuteCandleData?: SubscriptionResolver<Maybe<ResolversTypes['Pool30MinuteCandleData']>, "pool30MinuteCandleData", ParentType, ContextType, RequireFields<SubscriptionPool30MinuteCandleDataArgs, 'id' | 'subgraphError'>>;
  pool30MinuteCandleDatas?: SubscriptionResolver<Array<ResolversTypes['Pool30MinuteCandleData']>, "pool30MinuteCandleDatas", ParentType, ContextType, RequireFields<SubscriptionPool30MinuteCandleDatasArgs, 'first' | 'skip' | 'subgraphError'>>;
  poolDayCandleData?: SubscriptionResolver<Maybe<ResolversTypes['PoolDayCandleData']>, "poolDayCandleData", ParentType, ContextType, RequireFields<SubscriptionPoolDayCandleDataArgs, 'id' | 'subgraphError'>>;
  poolDayCandleDatas?: SubscriptionResolver<Array<ResolversTypes['PoolDayCandleData']>, "poolDayCandleDatas", ParentType, ContextType, RequireFields<SubscriptionPoolDayCandleDatasArgs, 'first' | 'skip' | 'subgraphError'>>;
  poolDayData?: SubscriptionResolver<Maybe<ResolversTypes['PoolDayData']>, "poolDayData", ParentType, ContextType, RequireFields<SubscriptionPoolDayDataArgs, 'id' | 'subgraphError'>>;
  poolDayDatas?: SubscriptionResolver<Array<ResolversTypes['PoolDayData']>, "poolDayDatas", ParentType, ContextType, RequireFields<SubscriptionPoolDayDatasArgs, 'first' | 'skip' | 'subgraphError'>>;
  poolHourCandleData?: SubscriptionResolver<Maybe<ResolversTypes['PoolHourCandleData']>, "poolHourCandleData", ParentType, ContextType, RequireFields<SubscriptionPoolHourCandleDataArgs, 'id' | 'subgraphError'>>;
  poolHourCandleDatas?: SubscriptionResolver<Array<ResolversTypes['PoolHourCandleData']>, "poolHourCandleDatas", ParentType, ContextType, RequireFields<SubscriptionPoolHourCandleDatasArgs, 'first' | 'skip' | 'subgraphError'>>;
  poolHourData?: SubscriptionResolver<Maybe<ResolversTypes['PoolHourData']>, "poolHourData", ParentType, ContextType, RequireFields<SubscriptionPoolHourDataArgs, 'id' | 'subgraphError'>>;
  poolHourDatas?: SubscriptionResolver<Array<ResolversTypes['PoolHourData']>, "poolHourDatas", ParentType, ContextType, RequireFields<SubscriptionPoolHourDatasArgs, 'first' | 'skip' | 'subgraphError'>>;
  poolMinuteCandleData?: SubscriptionResolver<Maybe<ResolversTypes['PoolMinuteCandleData']>, "poolMinuteCandleData", ParentType, ContextType, RequireFields<SubscriptionPoolMinuteCandleDataArgs, 'id' | 'subgraphError'>>;
  poolMinuteCandleDatas?: SubscriptionResolver<Array<ResolversTypes['PoolMinuteCandleData']>, "poolMinuteCandleDatas", ParentType, ContextType, RequireFields<SubscriptionPoolMinuteCandleDatasArgs, 'first' | 'skip' | 'subgraphError'>>;
  poolMonthCandleData?: SubscriptionResolver<Maybe<ResolversTypes['PoolMonthCandleData']>, "poolMonthCandleData", ParentType, ContextType, RequireFields<SubscriptionPoolMonthCandleDataArgs, 'id' | 'subgraphError'>>;
  poolMonthCandleDatas?: SubscriptionResolver<Array<ResolversTypes['PoolMonthCandleData']>, "poolMonthCandleDatas", ParentType, ContextType, RequireFields<SubscriptionPoolMonthCandleDatasArgs, 'first' | 'skip' | 'subgraphError'>>;
  poolWeekCandleData?: SubscriptionResolver<Maybe<ResolversTypes['PoolWeekCandleData']>, "poolWeekCandleData", ParentType, ContextType, RequireFields<SubscriptionPoolWeekCandleDataArgs, 'id' | 'subgraphError'>>;
  poolWeekCandleDatas?: SubscriptionResolver<Array<ResolversTypes['PoolWeekCandleData']>, "poolWeekCandleDatas", ParentType, ContextType, RequireFields<SubscriptionPoolWeekCandleDatasArgs, 'first' | 'skip' | 'subgraphError'>>;
  pools?: SubscriptionResolver<Array<ResolversTypes['Pool']>, "pools", ParentType, ContextType, RequireFields<SubscriptionPoolsArgs, 'first' | 'skip' | 'subgraphError'>>;
  position?: SubscriptionResolver<Maybe<ResolversTypes['Position']>, "position", ParentType, ContextType, RequireFields<SubscriptionPositionArgs, 'id' | 'subgraphError'>>;
  positionSnapshot?: SubscriptionResolver<Maybe<ResolversTypes['PositionSnapshot']>, "positionSnapshot", ParentType, ContextType, RequireFields<SubscriptionPositionSnapshotArgs, 'id' | 'subgraphError'>>;
  positionSnapshots?: SubscriptionResolver<Array<ResolversTypes['PositionSnapshot']>, "positionSnapshots", ParentType, ContextType, RequireFields<SubscriptionPositionSnapshotsArgs, 'first' | 'skip' | 'subgraphError'>>;
  positions?: SubscriptionResolver<Array<ResolversTypes['Position']>, "positions", ParentType, ContextType, RequireFields<SubscriptionPositionsArgs, 'first' | 'skip' | 'subgraphError'>>;
  royaltiesRegistries?: SubscriptionResolver<Array<ResolversTypes['RoyaltiesRegistry']>, "royaltiesRegistries", ParentType, ContextType, RequireFields<SubscriptionRoyaltiesRegistriesArgs, 'first' | 'skip' | 'subgraphError'>>;
  royaltiesRegistry?: SubscriptionResolver<Maybe<ResolversTypes['RoyaltiesRegistry']>, "royaltiesRegistry", ParentType, ContextType, RequireFields<SubscriptionRoyaltiesRegistryArgs, 'id' | 'subgraphError'>>;
  staking?: SubscriptionResolver<Maybe<ResolversTypes['Staking']>, "staking", ParentType, ContextType, RequireFields<SubscriptionStakingArgs, 'id' | 'subgraphError'>>;
  stakings?: SubscriptionResolver<Array<ResolversTypes['Staking']>, "stakings", ParentType, ContextType, RequireFields<SubscriptionStakingsArgs, 'first' | 'skip' | 'subgraphError'>>;
  swap?: SubscriptionResolver<Maybe<ResolversTypes['Swap']>, "swap", ParentType, ContextType, RequireFields<SubscriptionSwapArgs, 'id' | 'subgraphError'>>;
  swaps?: SubscriptionResolver<Array<ResolversTypes['Swap']>, "swaps", ParentType, ContextType, RequireFields<SubscriptionSwapsArgs, 'first' | 'skip' | 'subgraphError'>>;
  tick?: SubscriptionResolver<Maybe<ResolversTypes['Tick']>, "tick", ParentType, ContextType, RequireFields<SubscriptionTickArgs, 'id' | 'subgraphError'>>;
  tickDayData?: SubscriptionResolver<Maybe<ResolversTypes['TickDayData']>, "tickDayData", ParentType, ContextType, RequireFields<SubscriptionTickDayDataArgs, 'id' | 'subgraphError'>>;
  tickDayDatas?: SubscriptionResolver<Array<ResolversTypes['TickDayData']>, "tickDayDatas", ParentType, ContextType, RequireFields<SubscriptionTickDayDatasArgs, 'first' | 'skip' | 'subgraphError'>>;
  tickHourData?: SubscriptionResolver<Maybe<ResolversTypes['TickHourData']>, "tickHourData", ParentType, ContextType, RequireFields<SubscriptionTickHourDataArgs, 'id' | 'subgraphError'>>;
  tickHourDatas?: SubscriptionResolver<Array<ResolversTypes['TickHourData']>, "tickHourDatas", ParentType, ContextType, RequireFields<SubscriptionTickHourDatasArgs, 'first' | 'skip' | 'subgraphError'>>;
  ticks?: SubscriptionResolver<Array<ResolversTypes['Tick']>, "ticks", ParentType, ContextType, RequireFields<SubscriptionTicksArgs, 'first' | 'skip' | 'subgraphError'>>;
  token?: SubscriptionResolver<Maybe<ResolversTypes['Token']>, "token", ParentType, ContextType, RequireFields<SubscriptionTokenArgs, 'id' | 'subgraphError'>>;
  tokenDayData?: SubscriptionResolver<Maybe<ResolversTypes['TokenDayData']>, "tokenDayData", ParentType, ContextType, RequireFields<SubscriptionTokenDayDataArgs, 'id' | 'subgraphError'>>;
  tokenDayDatas?: SubscriptionResolver<Array<ResolversTypes['TokenDayData']>, "tokenDayDatas", ParentType, ContextType, RequireFields<SubscriptionTokenDayDatasArgs, 'first' | 'skip' | 'subgraphError'>>;
  tokenHourData?: SubscriptionResolver<Maybe<ResolversTypes['TokenHourData']>, "tokenHourData", ParentType, ContextType, RequireFields<SubscriptionTokenHourDataArgs, 'id' | 'subgraphError'>>;
  tokenHourDatas?: SubscriptionResolver<Array<ResolversTypes['TokenHourData']>, "tokenHourDatas", ParentType, ContextType, RequireFields<SubscriptionTokenHourDatasArgs, 'first' | 'skip' | 'subgraphError'>>;
  tokens?: SubscriptionResolver<Array<ResolversTypes['Token']>, "tokens", ParentType, ContextType, RequireFields<SubscriptionTokensArgs, 'first' | 'skip' | 'subgraphError'>>;
  transaction?: SubscriptionResolver<Maybe<ResolversTypes['Transaction']>, "transaction", ParentType, ContextType, RequireFields<SubscriptionTransactionArgs, 'id' | 'subgraphError'>>;
  transactionCount?: SubscriptionResolver<Maybe<ResolversTypes['TransactionCount']>, "transactionCount", ParentType, ContextType, RequireFields<SubscriptionTransactionCountArgs, 'id' | 'subgraphError'>>;
  transactionCounts?: SubscriptionResolver<Array<ResolversTypes['TransactionCount']>, "transactionCounts", ParentType, ContextType, RequireFields<SubscriptionTransactionCountsArgs, 'first' | 'skip' | 'subgraphError'>>;
  transactions?: SubscriptionResolver<Array<ResolversTypes['Transaction']>, "transactions", ParentType, ContextType, RequireFields<SubscriptionTransactionsArgs, 'first' | 'skip' | 'subgraphError'>>;
  transation?: SubscriptionResolver<Maybe<ResolversTypes['Transation']>, "transation", ParentType, ContextType, RequireFields<SubscriptionTransationArgs, 'id' | 'subgraphError'>>;
  transations?: SubscriptionResolver<Array<ResolversTypes['Transation']>, "transations", ParentType, ContextType, RequireFields<SubscriptionTransationsArgs, 'first' | 'skip' | 'subgraphError'>>;
  validation?: SubscriptionResolver<Maybe<ResolversTypes['Validation']>, "validation", ParentType, ContextType, RequireFields<SubscriptionValidationArgs, 'id' | 'subgraphError'>>;
  validations?: SubscriptionResolver<Array<ResolversTypes['Validation']>, "validations", ParentType, ContextType, RequireFields<SubscriptionValidationsArgs, 'first' | 'skip' | 'subgraphError'>>;
  validator?: SubscriptionResolver<Maybe<ResolversTypes['Validator']>, "validator", ParentType, ContextType, RequireFields<SubscriptionValidatorArgs, 'id' | 'subgraphError'>>;
  validators?: SubscriptionResolver<Array<ResolversTypes['Validator']>, "validators", ParentType, ContextType, RequireFields<SubscriptionValidatorsArgs, 'first' | 'skip' | 'subgraphError'>>;
  withdrawalRequest?: SubscriptionResolver<Maybe<ResolversTypes['WithdrawalRequest']>, "withdrawalRequest", ParentType, ContextType, RequireFields<SubscriptionWithdrawalRequestArgs, 'id' | 'subgraphError'>>;
  withdrawalRequests?: SubscriptionResolver<Array<ResolversTypes['WithdrawalRequest']>, "withdrawalRequests", ParentType, ContextType, RequireFields<SubscriptionWithdrawalRequestsArgs, 'first' | 'skip' | 'subgraphError'>>;
};

export type SwapResolvers<ContextType = any, ParentType extends ResolversParentTypes['Swap'] = ResolversParentTypes['Swap']> = {
  amount0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  amount1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  amountFeeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  amountUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  logIndex?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  origin?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  recipient?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  sender?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  sqrtPriceX96?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  tick?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  token0?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  token1?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TickResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tick'] = ResolversParentTypes['Tick']> = {
  collectedFeesToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  collectedFeesToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  collectedFeesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  createdAtBlockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  createdAtTimestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feeGrowthOutside0X128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feeGrowthOutside1X128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  liquidityGross?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  liquidityNet?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  liquidityProviderCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  poolAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  price1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  tickIdx?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  untrackedVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TickDayDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['TickDayData'] = ResolversParentTypes['TickDayData']> = {
  date?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  feeGrowthOutside0X128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feeGrowthOutside1X128?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  liquidityGross?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  liquidityNet?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  tick?: Resolver<ResolversTypes['Tick'], ParentType, ContextType>;
  volumeToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TickHourDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['TickHourData'] = ResolversParentTypes['TickHourData']> = {
  feesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  liquidityGross?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  liquidityNet?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  periodStartUnix?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pool?: Resolver<ResolversTypes['Pool'], ParentType, ContextType>;
  tick?: Resolver<ResolversTypes['Tick'], ParentType, ContextType>;
  volumeToken0?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeToken1?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['Token'] = ResolversParentTypes['Token']> = {
  decimals?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  derivedETH?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  derivedUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  poolCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  protocolFeesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tokenDayData?: Resolver<Array<ResolversTypes['TokenDayData']>, ParentType, ContextType, RequireFields<TokenTokenDayDataArgs, 'first' | 'skip'>>;
  tokenHourData?: Resolver<Array<ResolversTypes['TokenHourData']>, ParentType, ContextType, RequireFields<TokenTokenHourDataArgs, 'first' | 'skip'>>;
  totalSupply?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalValueLocked?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalValueLockedUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalValueLockedUSDUntracked?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  txCount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  untrackedVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volume?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  whitelistPools?: Resolver<Array<ResolversTypes['Pool']>, ParentType, ContextType, RequireFields<TokenWhitelistPoolsArgs, 'first' | 'skip'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TokenDayDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenDayData'] = ResolversParentTypes['TokenDayData']> = {
  close?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  high?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  low?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  open?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  priceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  protocolFeesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  totalValueLocked?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalValueLockedUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  untrackedVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volume?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TokenHourDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenHourData'] = ResolversParentTypes['TokenHourData']> = {
  close?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  feesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  high?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  low?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  open?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  periodStartUnix?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  priceUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  protocolFeesUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['Token'], ParentType, ContextType>;
  totalValueLocked?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  totalValueLockedUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  untrackedVolumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volume?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  volumeUSD?: Resolver<ResolversTypes['BigDecimal'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransactionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Transaction'] = ResolversParentTypes['Transaction']> = {
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  burns?: Resolver<Array<Maybe<ResolversTypes['Burn']>>, ParentType, ContextType, RequireFields<TransactionBurnsArgs, 'first' | 'skip'>>;
  collects?: Resolver<Array<Maybe<ResolversTypes['Collect']>>, ParentType, ContextType, RequireFields<TransactionCollectsArgs, 'first' | 'skip'>>;
  events?: Resolver<Array<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<TransactionEventsArgs, 'first' | 'skip'>>;
  flashed?: Resolver<Array<Maybe<ResolversTypes['Flash']>>, ParentType, ContextType, RequireFields<TransactionFlashedArgs, 'first' | 'skip'>>;
  gasPrice?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  gasUsed?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  mints?: Resolver<Array<Maybe<ResolversTypes['Mint']>>, ParentType, ContextType, RequireFields<TransactionMintsArgs, 'first' | 'skip'>>;
  swaps?: Resolver<Array<Maybe<ResolversTypes['Swap']>>, ParentType, ContextType, RequireFields<TransactionSwapsArgs, 'first' | 'skip'>>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransactionCountResolvers<ContextType = any, ParentType extends ResolversParentTypes['TransactionCount'] = ResolversParentTypes['TransactionCount']> = {
  count?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Transation'] = ResolversParentTypes['Transation']> = {
  block?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  claimedAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  delegator?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lockDuration?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lockedAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  penaltyAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  stakedAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  txHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  undelegatedAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  unlockedAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  validatorId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  withdrawalAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  wrID?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ValidationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Validation'] = ResolversParentTypes['Validation']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lockedEndtime?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  stakedAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalLockStake?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  validator?: Resolver<ResolversTypes['Validator'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ValidatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Validator'] = ResolversParentTypes['Validator']> = {
  active?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  auth?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  createdEpoch?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  createdTime?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  delegatedAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  delegations?: Resolver<Array<ResolversTypes['Delegation']>, ParentType, ContextType, RequireFields<ValidatorDelegationsArgs, 'first' | 'skip'>>;
  downTime?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  hash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lockDays?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  lockedUntil?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  online?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  selfStaked?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalClaimedRewards?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalDelegator?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalLockStake?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  totalStakedAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  validatorId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WithdrawalRequestResolvers<ContextType = any, ParentType extends ResolversParentTypes['WithdrawalRequest'] = ResolversParentTypes['WithdrawalRequest']> = {
  delegatorAddress?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  hash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  time?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  unbondingAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  validatorId?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  withdrawHash?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  withdrawTime?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  withdrawalAmount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  wrID?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _Block_Resolvers<ContextType = any, ParentType extends ResolversParentTypes['_Block_'] = ResolversParentTypes['_Block_']> = {
  hash?: Resolver<Maybe<ResolversTypes['Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type _Meta_Resolvers<ContextType = any, ParentType extends ResolversParentTypes['_Meta_'] = ResolversParentTypes['_Meta_']> = {
  block?: Resolver<ResolversTypes['_Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Account?: AccountResolvers<ContextType>;
  AccountCollectionOwnership?: AccountCollectionOwnershipResolvers<ContextType>;
  BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Block?: BlockResolvers<ContextType>;
  Bundle?: BundleResolvers<ContextType>;
  Burn?: BurnResolvers<ContextType>;
  Bytes?: GraphQLScalarType;
  Collect?: CollectResolvers<ContextType>;
  Contract?: ContractResolvers<ContextType>;
  Creator?: CreatorResolvers<ContextType>;
  Delegation?: DelegationResolvers<ContextType>;
  Delegator?: DelegatorResolvers<ContextType>;
  ERC721Contract?: Erc721ContractResolvers<ContextType>;
  ERC721Creator?: Erc721CreatorResolvers<ContextType>;
  ERC721Token?: Erc721TokenResolvers<ContextType>;
  ERC721Transfer?: Erc721TransferResolvers<ContextType>;
  ERC1155Balance?: Erc1155BalanceResolvers<ContextType>;
  ERC1155Contract?: Erc1155ContractResolvers<ContextType>;
  ERC1155Creator?: Erc1155CreatorResolvers<ContextType>;
  ERC1155Token?: Erc1155TokenResolvers<ContextType>;
  ERC1155Transfer?: Erc1155TransferResolvers<ContextType>;
  Epoch?: EpochResolvers<ContextType>;
  Event?: EventResolvers<ContextType>;
  Factory?: FactoryResolvers<ContextType>;
  Flash?: FlashResolvers<ContextType>;
  Int8?: GraphQLScalarType;
  LockedUp?: LockedUpResolvers<ContextType>;
  MarketEvent721?: MarketEvent721Resolvers<ContextType>;
  MarketEvent1155?: MarketEvent1155Resolvers<ContextType>;
  MarketFee?: MarketFeeResolvers<ContextType>;
  MarketVolume?: MarketVolumeResolvers<ContextType>;
  Mint?: MintResolvers<ContextType>;
  OnSaleStatus1155?: OnSaleStatus1155Resolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  OrderTransfer?: OrderTransferResolvers<ContextType>;
  OwnedTokenCount?: OwnedTokenCountResolvers<ContextType>;
  OwnerContract?: OwnerContractResolvers<ContextType>;
  PancakeDayData?: PancakeDayDataResolvers<ContextType>;
  Pool?: PoolResolvers<ContextType>;
  Pool5MinuteCandleData?: Pool5MinuteCandleDataResolvers<ContextType>;
  Pool15MinuteCandleData?: Pool15MinuteCandleDataResolvers<ContextType>;
  Pool30MinuteCandleData?: Pool30MinuteCandleDataResolvers<ContextType>;
  PoolDayCandleData?: PoolDayCandleDataResolvers<ContextType>;
  PoolDayData?: PoolDayDataResolvers<ContextType>;
  PoolHourCandleData?: PoolHourCandleDataResolvers<ContextType>;
  PoolHourData?: PoolHourDataResolvers<ContextType>;
  PoolMinuteCandleData?: PoolMinuteCandleDataResolvers<ContextType>;
  PoolMonthCandleData?: PoolMonthCandleDataResolvers<ContextType>;
  PoolWeekCandleData?: PoolWeekCandleDataResolvers<ContextType>;
  Position?: PositionResolvers<ContextType>;
  PositionSnapshot?: PositionSnapshotResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RoyaltiesRegistry?: RoyaltiesRegistryResolvers<ContextType>;
  Staking?: StakingResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Swap?: SwapResolvers<ContextType>;
  Tick?: TickResolvers<ContextType>;
  TickDayData?: TickDayDataResolvers<ContextType>;
  TickHourData?: TickHourDataResolvers<ContextType>;
  Token?: TokenResolvers<ContextType>;
  TokenDayData?: TokenDayDataResolvers<ContextType>;
  TokenHourData?: TokenHourDataResolvers<ContextType>;
  Transaction?: TransactionResolvers<ContextType>;
  TransactionCount?: TransactionCountResolvers<ContextType>;
  Transation?: TransationResolvers<ContextType>;
  Validation?: ValidationResolvers<ContextType>;
  Validator?: ValidatorResolvers<ContextType>;
  WithdrawalRequest?: WithdrawalRequestResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  derivedFrom?: DerivedFromDirectiveResolver<any, any, ContextType>;
  entity?: EntityDirectiveResolver<any, any, ContextType>;
  subgraphId?: SubgraphIdDirectiveResolver<any, any, ContextType>;
};


export const GetCollectionsDataDocument = gql`
    query GetCollectionsData($collectionAddress: String) {
  marketEvent1155S(where: {address: $collectionAddress}) {
    address
    netPrice
    price
    quoteToken
    to
    nftId {
      contract {
        id
      }
    }
    event
    quantity
  }
  marketEvent721S(where: {address: $collectionAddress}) {
    id
    nftId {
      contract {
        id
      }
    }
    address
    price
    quoteToken
    event
    to
  }
}
    `;
export const GetCollectionHoldersDocument = gql`
    query GetCollectionHolders($collectionAddress: String) {
  erc1155Balances(where: {contract_: {id: $collectionAddress}}) {
    id
    value
    contract {
      id
    }
    account {
      id
    }
  }
}
    `;
export const GetCountCollectionTokensDocument = gql`
    query GetCountCollectionTokens($collectionAddress: String) {
  erc1155Tokens(where: {contract_: {id: $collectionAddress}}) {
    id
    tokenId
    balances {
      value
      account {
        id
      }
      contract {
        id
      }
    }
  }
  erc721Tokens(where: {contract_: {id: $collectionAddress}}) {
    id
    tokenId
    owner {
      id
    }
  }
}
    `;
export const GetNftOwnersInfo1155Document = gql`
    query GetNFTOwnersInfo1155($nftId: String, $contractAddress: String) {
  erc1155Balances(where: {contract: $contractAddress, token_: {tokenId: $nftId}}) {
    value
    account {
      id
    }
    token {
      tokenId
    }
    contract {
      id
    }
  }
}
    `;
export const GetNftOwnersInfo721Document = gql`
    query GetNFTOwnersInfo721($nftId: String, $contractAddress: String) {
  erc721Tokens(where: {contract: $contractAddress, tokenId: $nftId}) {
    id
    txCreation
    contract {
      id
    }
    owner {
      id
    }
  }
}
    `;
export const ErcContractDocument = gql`
    query ErcContract($id: ID!) {
  erc1155Contract(id: $id) {
    id
    count
    holderCount
    volume
  }
  erc721Contract(id: $id) {
    id
    count
    holderCount
    volume
  }
}
    `;
export const GetCollections721Document = gql`
    query GetCollections721($txCreation: String!) {
  erc721Contracts(where: {txCreation: $txCreation}) {
    id
    txCreation
    name
    symbol
  }
}
    `;
export const GetCollections1155Document = gql`
    query GetCollections1155($txCreation: String!) {
  erc1155Contracts(where: {txCreation: $txCreation}) {
    id
    txCreation
    name
    symbol
  }
}
    `;
export const GetCollectionTokensDocument = gql`
    query GetCollectionTokens($collectionAddress: String, $first: Int, $skip: Int) {
  erc1155Tokens(
    where: {contract_: {id: $collectionAddress}}
    first: $first
    skip: $skip
  ) {
    id
    tokenId
    txCreation
    balances {
      value
      account {
        id
      }
      contract {
        id
      }
    }
  }
  erc721Tokens(
    where: {contract_: {id: $collectionAddress}}
    first: $first
    skip: $skip
  ) {
    id
    tokenId
    txCreation
    owner {
      id
    }
  }
}
    `;
export const GetMarketplaceStatus721Document = gql`
    query GetMarketplaceStatus721($first: Int!, $skip: Int!, $orderDirection: OrderDirection = desc, $timestamp: BigInt = 0) {
  marketEvent721S(
    first: $first
    skip: $skip
    orderBy: timestamp
    orderDirection: $orderDirection
    where: {timestamp_gt: $timestamp, event_in: [AskNew, AskCancel, Trade]}
  ) {
    id
    event
    price
    to
    from
    netPrice
    metadata
    txHash
    timestamp
    quoteToken
    address
    nftIdExtend
    tokenId
    flagExtend
    addressExtend
    nftId {
      id
      identifier
      tokenId
      txCreation
      uri
      createAt
    }
  }
}
    `;
export const GetMarketplaceStatus1155Document = gql`
    query GetMarketplaceStatus1155($first: Int!, $skip: Int!, $orderDirection: OrderDirection = desc, $timestamp: BigInt = 0) {
  marketEvent1155S(
    first: $first
    skip: $skip
    orderBy: timestamp
    orderDirection: $orderDirection
    where: {timestamp_gt: $timestamp, event_in: [AskNew, AskCancel, Trade]}
  ) {
    id
    event
    price
    to
    from
    txHash
    timestamp
    quoteToken
    quantity
    operationId
    operation
    netPrice
    address
    tokenId
    nftIdExtend
    flagExtend
    addressExtend
    nftId {
      id
      uri
      txCreation
      tokenId
      identifier
      createAt
    }
  }
}
    `;
export const GetOrdersDocument = gql`
    query GetOrders($first: Int!, $skip: Int!, $orderDirection: OrderDirection = desc, $timestamp: BigInt! = 0) {
  orders(
    first: $first
    skip: $skip
    orderBy: timestamp
    orderDirection: $orderDirection
    where: {timestamp_gt: $timestamp, status_in: [FILLED, CANCELED]}
  ) {
    timestamp
    takeQty
    status
    sig
    nonce
    index
    id
    filledQty
    maker {
      onSaleCount
      id
      holdingCount
    }
    taker {
      onSaleCount
      id
      holdingCount
    }
  }
}
    `;
export const GetOrdersTransferDocument = gql`
    query GetOrdersTransfer($first: Int!, $skip: Int!, $orderDirection: OrderDirection = desc, $timestamp: BigInt! = 0) {
  orderTransfers(
    first: $first
    skip: $skip
    orderBy: timestamp
    orderDirection: $orderDirection
    where: {timestamp_gt: $timestamp, status_in: [TRANSFER], maker: "0x51d34e009e5315263120347f038962b681a6e84b"}
  ) {
    tokenId
    timestamp
    takeQty
    status
    remainQty
    id
    collection
    maker {
      id
      onSaleCount
      holdingCount
    }
    taker {
      onSaleCount
      id
      holdingCount
    }
  }
}
    `;
export const UserBalance1155Document = gql`
    query userBalance1155($id: ID!) {
  erc1155Balance(id: $id) {
    valueExact
    value
    id
  }
}
    `;
export const GetNfTsHistory721Document = gql`
    query GetNFTsHistory721($first: Int!, $skip: Int!, $minPrice: BigInt, $maxPrice: BigInt) {
  marketEvent721S(
    where: {price_gte: $minPrice, price_lte: $maxPrice}
    first: $first
    skip: $skip
    orderBy: timestamp
    orderDirection: desc
  ) {
    id
    event
    nftId {
      id
    }
    price
    to
    from
  }
}
    `;
export const GetNfTsHistory1155Document = gql`
    query GetNFTsHistory1155($first: Int!, $skip: Int!, $minPrice: BigInt, $maxPrice: BigInt) {
  marketEvent1155S(
    where: {price_gte: $minPrice, price_lte: $maxPrice}
    first: $first
    skip: $skip
    orderBy: timestamp
    orderDirection: desc
  ) {
    id
    event
    nftId {
      id
    }
    price
    to
    from
  }
}
    `;
export const GetNfTsSelling721Document = gql`
    query GetNFTsSelling721($first: Int!, $skip: Int!, $collection: String!) {
  marketEvent721S(
    where: {event: AskNew, address: $collection}
    first: $first
    skip: $skip
    orderBy: timestamp
    orderDirection: desc
  ) {
    id
    event
    nftId {
      id
    }
    price
    to
    from
  }
}
    `;
export const GetNfTsSelling1155Document = gql`
    query GetNFTsSelling1155($first: Int!, $skip: Int!, $collection: String!) {
  marketEvent1155S(
    where: {event: AskNew, address: $collection}
    first: $first
    skip: $skip
    orderBy: timestamp
    orderDirection: desc
  ) {
    id
    event
    nftId {
      id
    }
    price
    to
    from
  }
}
    `;
export const Get721NfTsDocument = gql`
    query Get721NFTs($txCreation: String!) {
  erc721Tokens(where: {txCreation: $txCreation}) {
    id
    txCreation
    tokenId
    contract {
      id
    }
  }
}
    `;
export const Get1155NfTsDocument = gql`
    query Get1155NFTs($txCreation: String!) {
  erc1155Tokens(where: {txCreation: $txCreation}) {
    id
    txCreation
    tokenId
    contract {
      id
    }
  }
}
    `;
export const GetQuoteTokenAcceptDocument = gql`
    query GetQuoteTokenAccept($first: Int! = 1000, $skip: Int! = 0) {
  tokens(first: $first, skip: $skip) {
    id
    symbol
    name
    derivedETH
    derivedUSD
  }
}
    `;
export const GetStakingDocument = gql`
    query getStaking($id: ID!) {
  delegator(id: $id) {
    totalLockStake
    totalClaimedRewards
    stakedAmount
    id
    createdOn
    address
  }
}
    `;
export const GetStakingToAddWhiteListDocument = gql`
    query getStakingToAddWhiteList($id: ID!, $stakedAmount: BigInt = 0) {
  delegators(where: {id: $id, stakedAmount_gte: $stakedAmount}) {
    totalLockStake
    totalClaimedRewards
    stakedAmount
    id
    createdOn
    address
  }
}
    `;
export const CmsSummaryTransactionDocument = gql`
    query CMSSummaryTransaction($first: Int = 1000, $skip: Int = 0, $event: EventType) {
  blocks(first: $first, skip: $skip, where: {event: $event}) {
    timestampt
    id
    event
  }
}
    `;
export const CmsSummaryVolumeDocument = gql`
    query CMSSummaryVolume($address: ID!) {
  marketVolume(id: $address) {
    type
    totalVolume
    id
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetCollectionsData(variables?: GetCollectionsDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetCollectionsDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCollectionsDataQuery>(GetCollectionsDataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetCollectionsData', 'query', variables);
    },
    GetCollectionHolders(variables?: GetCollectionHoldersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetCollectionHoldersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCollectionHoldersQuery>(GetCollectionHoldersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetCollectionHolders', 'query', variables);
    },
    GetCountCollectionTokens(variables?: GetCountCollectionTokensQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetCountCollectionTokensQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCountCollectionTokensQuery>(GetCountCollectionTokensDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetCountCollectionTokens', 'query', variables);
    },
    GetNFTOwnersInfo1155(variables?: GetNftOwnersInfo1155QueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetNftOwnersInfo1155Query> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetNftOwnersInfo1155Query>(GetNftOwnersInfo1155Document, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetNFTOwnersInfo1155', 'query', variables);
    },
    GetNFTOwnersInfo721(variables?: GetNftOwnersInfo721QueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetNftOwnersInfo721Query> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetNftOwnersInfo721Query>(GetNftOwnersInfo721Document, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetNFTOwnersInfo721', 'query', variables);
    },
    ErcContract(variables: ErcContractQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ErcContractQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ErcContractQuery>(ErcContractDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ErcContract', 'query', variables);
    },
    GetCollections721(variables: GetCollections721QueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetCollections721Query> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCollections721Query>(GetCollections721Document, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetCollections721', 'query', variables);
    },
    GetCollections1155(variables: GetCollections1155QueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetCollections1155Query> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCollections1155Query>(GetCollections1155Document, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetCollections1155', 'query', variables);
    },
    GetCollectionTokens(variables?: GetCollectionTokensQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetCollectionTokensQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCollectionTokensQuery>(GetCollectionTokensDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetCollectionTokens', 'query', variables);
    },
    GetMarketplaceStatus721(variables: GetMarketplaceStatus721QueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetMarketplaceStatus721Query> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetMarketplaceStatus721Query>(GetMarketplaceStatus721Document, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetMarketplaceStatus721', 'query', variables);
    },
    GetMarketplaceStatus1155(variables: GetMarketplaceStatus1155QueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetMarketplaceStatus1155Query> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetMarketplaceStatus1155Query>(GetMarketplaceStatus1155Document, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetMarketplaceStatus1155', 'query', variables);
    },
    GetOrders(variables: GetOrdersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetOrdersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetOrdersQuery>(GetOrdersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetOrders', 'query', variables);
    },
    GetOrdersTransfer(variables: GetOrdersTransferQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetOrdersTransferQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetOrdersTransferQuery>(GetOrdersTransferDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetOrdersTransfer', 'query', variables);
    },
    userBalance1155(variables: UserBalance1155QueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UserBalance1155Query> {
      return withWrapper((wrappedRequestHeaders) => client.request<UserBalance1155Query>(UserBalance1155Document, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'userBalance1155', 'query', variables);
    },
    GetNFTsHistory721(variables: GetNfTsHistory721QueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetNfTsHistory721Query> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetNfTsHistory721Query>(GetNfTsHistory721Document, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetNFTsHistory721', 'query', variables);
    },
    GetNFTsHistory1155(variables: GetNfTsHistory1155QueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetNfTsHistory1155Query> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetNfTsHistory1155Query>(GetNfTsHistory1155Document, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetNFTsHistory1155', 'query', variables);
    },
    GetNFTsSelling721(variables: GetNfTsSelling721QueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetNfTsSelling721Query> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetNfTsSelling721Query>(GetNfTsSelling721Document, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetNFTsSelling721', 'query', variables);
    },
    GetNFTsSelling1155(variables: GetNfTsSelling1155QueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetNfTsSelling1155Query> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetNfTsSelling1155Query>(GetNfTsSelling1155Document, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetNFTsSelling1155', 'query', variables);
    },
    Get721NFTs(variables: Get721NfTsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Get721NfTsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Get721NfTsQuery>(Get721NfTsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Get721NFTs', 'query', variables);
    },
    Get1155NFTs(variables: Get1155NfTsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<Get1155NfTsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<Get1155NfTsQuery>(Get1155NfTsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Get1155NFTs', 'query', variables);
    },
    GetQuoteTokenAccept(variables?: GetQuoteTokenAcceptQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetQuoteTokenAcceptQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetQuoteTokenAcceptQuery>(GetQuoteTokenAcceptDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetQuoteTokenAccept', 'query', variables);
    },
    getStaking(variables: GetStakingQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetStakingQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetStakingQuery>(GetStakingDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getStaking', 'query', variables);
    },
    getStakingToAddWhiteList(variables: GetStakingToAddWhiteListQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetStakingToAddWhiteListQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetStakingToAddWhiteListQuery>(GetStakingToAddWhiteListDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getStakingToAddWhiteList', 'query', variables);
    },
    CMSSummaryTransaction(variables?: CmsSummaryTransactionQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CmsSummaryTransactionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CmsSummaryTransactionQuery>(CmsSummaryTransactionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CMSSummaryTransaction', 'query', variables);
    },
    CMSSummaryVolume(variables: CmsSummaryVolumeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CmsSummaryVolumeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CmsSummaryVolumeQuery>(CmsSummaryVolumeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CMSSummaryVolume', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
export type GetCollectionsDataQueryVariables = Exact<{
  collectionAddress?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetCollectionsDataQuery = { __typename?: 'Query', marketEvent1155S: Array<{ __typename?: 'MarketEvent1155', address?: string | null, netPrice?: any | null, price?: any | null, quoteToken?: string | null, to?: string | null, event: SellStatus, quantity: any, nftId?: { __typename?: 'ERC1155Token', contract: { __typename?: 'ERC1155Contract', id: string } } | null }>, marketEvent721S: Array<{ __typename?: 'MarketEvent721', id: string, address: string, price?: any | null, quoteToken?: string | null, event: SellStatus, to?: string | null, nftId?: { __typename?: 'ERC721Token', contract: { __typename?: 'ERC721Contract', id: string } } | null }> };

export type GetCollectionHoldersQueryVariables = Exact<{
  collectionAddress?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetCollectionHoldersQuery = { __typename?: 'Query', erc1155Balances: Array<{ __typename?: 'ERC1155Balance', id: string, value: any, contract?: { __typename?: 'ERC1155Contract', id: string } | null, account?: { __typename?: 'Account', id: string } | null }> };

export type GetCountCollectionTokensQueryVariables = Exact<{
  collectionAddress?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetCountCollectionTokensQuery = { __typename?: 'Query', erc1155Tokens: Array<{ __typename?: 'ERC1155Token', id: string, tokenId: string, balances: Array<{ __typename?: 'ERC1155Balance', value: any, account?: { __typename?: 'Account', id: string } | null, contract?: { __typename?: 'ERC1155Contract', id: string } | null }> }>, erc721Tokens: Array<{ __typename?: 'ERC721Token', id: string, tokenId: string, owner: { __typename?: 'Account', id: string } }> };

export type GetNftOwnersInfo1155QueryVariables = Exact<{
  nftId?: InputMaybe<Scalars['String']['input']>;
  contractAddress?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetNftOwnersInfo1155Query = { __typename?: 'Query', erc1155Balances: Array<{ __typename?: 'ERC1155Balance', value: any, account?: { __typename?: 'Account', id: string } | null, token: { __typename?: 'ERC1155Token', tokenId: string }, contract?: { __typename?: 'ERC1155Contract', id: string } | null }> };

export type GetNftOwnersInfo721QueryVariables = Exact<{
  nftId?: InputMaybe<Scalars['String']['input']>;
  contractAddress?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetNftOwnersInfo721Query = { __typename?: 'Query', erc721Tokens: Array<{ __typename?: 'ERC721Token', id: string, txCreation: string, contract: { __typename?: 'ERC721Contract', id: string }, owner: { __typename?: 'Account', id: string } }> };

export type ErcContractQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ErcContractQuery = { __typename?: 'Query', erc1155Contract?: { __typename?: 'ERC1155Contract', id: string, count: any, holderCount: any, volume: any } | null, erc721Contract?: { __typename?: 'ERC721Contract', id: string, count: any, holderCount: any, volume: any } | null };

export type GetCollections721QueryVariables = Exact<{
  txCreation: Scalars['String']['input'];
}>;


export type GetCollections721Query = { __typename?: 'Query', erc721Contracts: Array<{ __typename?: 'ERC721Contract', id: string, txCreation: string, name?: string | null, symbol?: string | null }> };

export type GetCollections1155QueryVariables = Exact<{
  txCreation: Scalars['String']['input'];
}>;


export type GetCollections1155Query = { __typename?: 'Query', erc1155Contracts: Array<{ __typename?: 'ERC1155Contract', id: string, txCreation: string, name?: string | null, symbol?: string | null }> };

export type GetCollectionTokensQueryVariables = Exact<{
  collectionAddress?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetCollectionTokensQuery = { __typename?: 'Query', erc1155Tokens: Array<{ __typename?: 'ERC1155Token', id: string, tokenId: string, txCreation: string, balances: Array<{ __typename?: 'ERC1155Balance', value: any, account?: { __typename?: 'Account', id: string } | null, contract?: { __typename?: 'ERC1155Contract', id: string } | null }> }>, erc721Tokens: Array<{ __typename?: 'ERC721Token', id: string, tokenId: string, txCreation: string, owner: { __typename?: 'Account', id: string } }> };

export type GetMarketplaceStatus721QueryVariables = Exact<{
  first: Scalars['Int']['input'];
  skip: Scalars['Int']['input'];
  orderDirection?: InputMaybe<OrderDirection>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
}>;


export type GetMarketplaceStatus721Query = { __typename?: 'Query', marketEvent721S: Array<{ __typename?: 'MarketEvent721', id: string, event: SellStatus, price?: any | null, to?: string | null, from?: string | null, netPrice?: any | null, metadata?: string | null, txHash: string, timestamp: any, quoteToken?: string | null, address: string, nftIdExtend?: string | null, tokenId?: string | null, flagExtend?: boolean | null, addressExtend?: string | null, nftId?: { __typename?: 'ERC721Token', id: string, identifier: any, tokenId: string, txCreation: string, uri?: string | null, createAt?: any | null } | null }> };

export type GetMarketplaceStatus1155QueryVariables = Exact<{
  first: Scalars['Int']['input'];
  skip: Scalars['Int']['input'];
  orderDirection?: InputMaybe<OrderDirection>;
  timestamp?: InputMaybe<Scalars['BigInt']['input']>;
}>;


export type GetMarketplaceStatus1155Query = { __typename?: 'Query', marketEvent1155S: Array<{ __typename?: 'MarketEvent1155', id: string, event: SellStatus, price?: any | null, to?: string | null, from?: string | null, txHash?: string | null, timestamp: any, quoteToken?: string | null, quantity: any, operationId?: any | null, operation: Operation, netPrice?: any | null, address?: string | null, tokenId?: string | null, nftIdExtend?: string | null, flagExtend?: boolean | null, addressExtend?: string | null, nftId?: { __typename?: 'ERC1155Token', id: string, uri?: string | null, txCreation: string, tokenId: string, identifier: any, createAt?: any | null } | null }> };

export type GetOrdersQueryVariables = Exact<{
  first: Scalars['Int']['input'];
  skip: Scalars['Int']['input'];
  orderDirection?: InputMaybe<OrderDirection>;
  timestamp?: Scalars['BigInt']['input'];
}>;


export type GetOrdersQuery = { __typename?: 'Query', orders: Array<{ __typename?: 'Order', timestamp: any, takeQty: any, status: OrderStatus, sig: string, nonce: any, index: number, id: string, filledQty: any, maker: { __typename?: 'Account', onSaleCount: any, id: string, holdingCount: any }, taker?: { __typename?: 'Account', onSaleCount: any, id: string, holdingCount: any } | null }> };

export type GetOrdersTransferQueryVariables = Exact<{
  first: Scalars['Int']['input'];
  skip: Scalars['Int']['input'];
  orderDirection?: InputMaybe<OrderDirection>;
  timestamp?: Scalars['BigInt']['input'];
}>;


export type GetOrdersTransferQuery = { __typename?: 'Query', orderTransfers: Array<{ __typename?: 'OrderTransfer', tokenId: string, timestamp: any, takeQty: any, status: OrderStatusTransfer, remainQty?: any | null, id: string, collection: string, maker: { __typename?: 'Account', id: string, onSaleCount: any, holdingCount: any }, taker?: { __typename?: 'Account', onSaleCount: any, id: string, holdingCount: any } | null }> };

export type UserBalance1155QueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type UserBalance1155Query = { __typename?: 'Query', erc1155Balance?: { __typename?: 'ERC1155Balance', valueExact: any, value: any, id: string } | null };

export type GetNfTsHistory721QueryVariables = Exact<{
  first: Scalars['Int']['input'];
  skip: Scalars['Int']['input'];
  minPrice?: InputMaybe<Scalars['BigInt']['input']>;
  maxPrice?: InputMaybe<Scalars['BigInt']['input']>;
}>;


export type GetNfTsHistory721Query = { __typename?: 'Query', marketEvent721S: Array<{ __typename?: 'MarketEvent721', id: string, event: SellStatus, price?: any | null, to?: string | null, from?: string | null, nftId?: { __typename?: 'ERC721Token', id: string } | null }> };

export type GetNfTsHistory1155QueryVariables = Exact<{
  first: Scalars['Int']['input'];
  skip: Scalars['Int']['input'];
  minPrice?: InputMaybe<Scalars['BigInt']['input']>;
  maxPrice?: InputMaybe<Scalars['BigInt']['input']>;
}>;


export type GetNfTsHistory1155Query = { __typename?: 'Query', marketEvent1155S: Array<{ __typename?: 'MarketEvent1155', id: string, event: SellStatus, price?: any | null, to?: string | null, from?: string | null, nftId?: { __typename?: 'ERC1155Token', id: string } | null }> };

export type GetNfTsSelling721QueryVariables = Exact<{
  first: Scalars['Int']['input'];
  skip: Scalars['Int']['input'];
  collection: Scalars['String']['input'];
}>;


export type GetNfTsSelling721Query = { __typename?: 'Query', marketEvent721S: Array<{ __typename?: 'MarketEvent721', id: string, event: SellStatus, price?: any | null, to?: string | null, from?: string | null, nftId?: { __typename?: 'ERC721Token', id: string } | null }> };

export type GetNfTsSelling1155QueryVariables = Exact<{
  first: Scalars['Int']['input'];
  skip: Scalars['Int']['input'];
  collection: Scalars['String']['input'];
}>;


export type GetNfTsSelling1155Query = { __typename?: 'Query', marketEvent1155S: Array<{ __typename?: 'MarketEvent1155', id: string, event: SellStatus, price?: any | null, to?: string | null, from?: string | null, nftId?: { __typename?: 'ERC1155Token', id: string } | null }> };

export type Get721NfTsQueryVariables = Exact<{
  txCreation: Scalars['String']['input'];
}>;


export type Get721NfTsQuery = { __typename?: 'Query', erc721Tokens: Array<{ __typename?: 'ERC721Token', id: string, txCreation: string, tokenId: string, contract: { __typename?: 'ERC721Contract', id: string } }> };

export type Get1155NfTsQueryVariables = Exact<{
  txCreation: Scalars['String']['input'];
}>;


export type Get1155NfTsQuery = { __typename?: 'Query', erc1155Tokens: Array<{ __typename?: 'ERC1155Token', id: string, txCreation: string, tokenId: string, contract: { __typename?: 'ERC1155Contract', id: string } }> };

export type GetQuoteTokenAcceptQueryVariables = Exact<{
  first?: Scalars['Int']['input'];
  skip?: Scalars['Int']['input'];
}>;


export type GetQuoteTokenAcceptQuery = { __typename?: 'Query', tokens: Array<{ __typename?: 'Token', id: string, symbol: string, name: string, derivedETH: any, derivedUSD: any }> };

export type GetStakingQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetStakingQuery = { __typename?: 'Query', delegator?: { __typename?: 'Delegator', totalLockStake: any, totalClaimedRewards: any, stakedAmount: any, id: string, createdOn: any, address: any } | null };

export type GetStakingToAddWhiteListQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  stakedAmount?: InputMaybe<Scalars['BigInt']['input']>;
}>;


export type GetStakingToAddWhiteListQuery = { __typename?: 'Query', delegators: Array<{ __typename?: 'Delegator', totalLockStake: any, totalClaimedRewards: any, stakedAmount: any, id: string, createdOn: any, address: any }> };

export type CmsSummaryTransactionQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  event?: InputMaybe<EventType>;
}>;


export type CmsSummaryTransactionQuery = { __typename?: 'Query', blocks: Array<{ __typename?: 'Block', timestampt: number, id: string, event: EventType }> };

export type CmsSummaryVolumeQueryVariables = Exact<{
  address: Scalars['ID']['input'];
}>;


export type CmsSummaryVolumeQuery = { __typename?: 'Query', marketVolume?: { __typename?: 'MarketVolume', type: string, totalVolume: any, id: string } | null };
