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
  contract?: Maybe<Contract>;
  contracts: Array<Contract>;
  creator?: Maybe<Creator>;
  creators: Array<Creator>;
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
  marketEvent721?: Maybe<MarketEvent721>;
  marketEvent721S: Array<MarketEvent721>;
  marketEvent1155?: Maybe<MarketEvent1155>;
  marketEvent1155S: Array<MarketEvent1155>;
  marketFee?: Maybe<MarketFee>;
  marketFees: Array<MarketFee>;
  marketVolume?: Maybe<MarketVolume>;
  marketVolumes: Array<MarketVolume>;
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
  royaltiesRegistries: Array<RoyaltiesRegistry>;
  royaltiesRegistry?: Maybe<RoyaltiesRegistry>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
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


export type QueryTransactionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
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
  contract?: Maybe<Contract>;
  contracts: Array<Contract>;
  creator?: Maybe<Creator>;
  creators: Array<Creator>;
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
  marketEvent721?: Maybe<MarketEvent721>;
  marketEvent721S: Array<MarketEvent721>;
  marketEvent1155?: Maybe<MarketEvent1155>;
  marketEvent1155S: Array<MarketEvent1155>;
  marketFee?: Maybe<MarketFee>;
  marketFees: Array<MarketFee>;
  marketVolume?: Maybe<MarketVolume>;
  marketVolumes: Array<MarketVolume>;
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
  royaltiesRegistries: Array<RoyaltiesRegistry>;
  royaltiesRegistry?: Maybe<RoyaltiesRegistry>;
  transaction?: Maybe<Transaction>;
  transactions: Array<Transaction>;
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


export type SubscriptionTransactionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
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

export type Transaction = {
  __typename?: 'Transaction';
  blockNumber: Scalars['BigInt']['output'];
  events: Array<Event>;
  id: Scalars['ID']['output'];
  timestamp: Scalars['BigInt']['output'];
};


export type TransactionEventsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Event_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Event_Filter>;
};

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
  events_?: InputMaybe<Event_Filter>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<Transaction_Filter>>>;
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
  Events = 'events',
  Id = 'id',
  Timestamp = 'timestamp'
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
  Bytes: ResolverTypeWrapper<Scalars['Bytes']['output']>;
  Contract: ResolverTypeWrapper<Contract>;
  ContractType: ContractType;
  Contract_filter: Contract_Filter;
  Contract_orderBy: Contract_OrderBy;
  Creator: ResolverTypeWrapper<Omit<Creator, 'token721' | 'token1155'> & { token721?: Maybe<Array<ResolversTypes['ERC721Creator']>>, token1155?: Maybe<Array<ResolversTypes['ERC1155Creator']>> }>;
  Creator_filter: Creator_Filter;
  Creator_orderBy: Creator_OrderBy;
  DealType: DealType;
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
  Event: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['Event']>;
  EventType: EventType;
  Event_filter: Event_Filter;
  Event_orderBy: Event_OrderBy;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Int8: ResolverTypeWrapper<Scalars['Int8']['output']>;
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
  Query: ResolverTypeWrapper<{}>;
  RoyaltiesRegistry: ResolverTypeWrapper<RoyaltiesRegistry>;
  RoyaltiesRegistry_filter: RoyaltiesRegistry_Filter;
  RoyaltiesRegistry_orderBy: RoyaltiesRegistry_OrderBy;
  SellStatus: SellStatus;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Subscription: ResolverTypeWrapper<{}>;
  Transaction: ResolverTypeWrapper<Omit<Transaction, 'events'> & { events: Array<ResolversTypes['Event']> }>;
  Transaction_filter: Transaction_Filter;
  Transaction_orderBy: Transaction_OrderBy;
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
  Bytes: Scalars['Bytes']['output'];
  Contract: Contract;
  Contract_filter: Contract_Filter;
  Creator: Omit<Creator, 'token721' | 'token1155'> & { token721?: Maybe<Array<ResolversParentTypes['ERC721Creator']>>, token1155?: Maybe<Array<ResolversParentTypes['ERC1155Creator']>> };
  Creator_filter: Creator_Filter;
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
  Event: ResolversInterfaceTypes<ResolversParentTypes>['Event'];
  Event_filter: Event_Filter;
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Int8: Scalars['Int8']['output'];
  MarketEvent721: Omit<MarketEvent721, 'nftId'> & { nftId?: Maybe<ResolversParentTypes['ERC721Token']> };
  MarketEvent721_filter: MarketEvent721_Filter;
  MarketEvent1155: Omit<MarketEvent1155, 'nftId'> & { nftId?: Maybe<ResolversParentTypes['ERC1155Token']> };
  MarketEvent1155_filter: MarketEvent1155_Filter;
  MarketFee: MarketFee;
  MarketFee_filter: MarketFee_Filter;
  MarketVolume: MarketVolume;
  MarketVolume_filter: MarketVolume_Filter;
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
  Query: {};
  RoyaltiesRegistry: RoyaltiesRegistry;
  RoyaltiesRegistry_filter: RoyaltiesRegistry_Filter;
  String: Scalars['String']['output'];
  Subscription: {};
  Transaction: Omit<Transaction, 'events'> & { events: Array<ResolversParentTypes['Event']> };
  Transaction_filter: Transaction_Filter;
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

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

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

export type EventResolvers<ContextType = any, ParentType extends ResolversParentTypes['Event'] = ResolversParentTypes['Event']> = {
  __resolveType: TypeResolveFn<'ERC721Transfer' | 'ERC1155Transfer', ParentType, ContextType>;
  emitter?: Resolver<ResolversTypes['Account'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  transaction?: Resolver<ResolversTypes['Transaction'], ParentType, ContextType>;
};

export interface Int8ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Int8'], any> {
  name: 'Int8';
}

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

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  _meta?: Resolver<Maybe<ResolversTypes['_Meta_']>, ParentType, ContextType, Partial<Query_MetaArgs>>;
  account?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryAccountArgs, 'id' | 'subgraphError'>>;
  accountCollectionOwnership?: Resolver<Maybe<ResolversTypes['AccountCollectionOwnership']>, ParentType, ContextType, RequireFields<QueryAccountCollectionOwnershipArgs, 'id' | 'subgraphError'>>;
  accountCollectionOwnerships?: Resolver<Array<ResolversTypes['AccountCollectionOwnership']>, ParentType, ContextType, RequireFields<QueryAccountCollectionOwnershipsArgs, 'first' | 'skip' | 'subgraphError'>>;
  accounts?: Resolver<Array<ResolversTypes['Account']>, ParentType, ContextType, RequireFields<QueryAccountsArgs, 'first' | 'skip' | 'subgraphError'>>;
  block?: Resolver<Maybe<ResolversTypes['Block']>, ParentType, ContextType, RequireFields<QueryBlockArgs, 'id' | 'subgraphError'>>;
  blocks?: Resolver<Array<ResolversTypes['Block']>, ParentType, ContextType, RequireFields<QueryBlocksArgs, 'first' | 'skip' | 'subgraphError'>>;
  contract?: Resolver<Maybe<ResolversTypes['Contract']>, ParentType, ContextType, RequireFields<QueryContractArgs, 'id' | 'subgraphError'>>;
  contracts?: Resolver<Array<ResolversTypes['Contract']>, ParentType, ContextType, RequireFields<QueryContractsArgs, 'first' | 'skip' | 'subgraphError'>>;
  creator?: Resolver<Maybe<ResolversTypes['Creator']>, ParentType, ContextType, RequireFields<QueryCreatorArgs, 'id' | 'subgraphError'>>;
  creators?: Resolver<Array<ResolversTypes['Creator']>, ParentType, ContextType, RequireFields<QueryCreatorsArgs, 'first' | 'skip' | 'subgraphError'>>;
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
  marketEvent721?: Resolver<Maybe<ResolversTypes['MarketEvent721']>, ParentType, ContextType, RequireFields<QueryMarketEvent721Args, 'id' | 'subgraphError'>>;
  marketEvent721S?: Resolver<Array<ResolversTypes['MarketEvent721']>, ParentType, ContextType, RequireFields<QueryMarketEvent721SArgs, 'first' | 'skip' | 'subgraphError'>>;
  marketEvent1155?: Resolver<Maybe<ResolversTypes['MarketEvent1155']>, ParentType, ContextType, RequireFields<QueryMarketEvent1155Args, 'id' | 'subgraphError'>>;
  marketEvent1155S?: Resolver<Array<ResolversTypes['MarketEvent1155']>, ParentType, ContextType, RequireFields<QueryMarketEvent1155SArgs, 'first' | 'skip' | 'subgraphError'>>;
  marketFee?: Resolver<Maybe<ResolversTypes['MarketFee']>, ParentType, ContextType, RequireFields<QueryMarketFeeArgs, 'id' | 'subgraphError'>>;
  marketFees?: Resolver<Array<ResolversTypes['MarketFee']>, ParentType, ContextType, RequireFields<QueryMarketFeesArgs, 'first' | 'skip' | 'subgraphError'>>;
  marketVolume?: Resolver<Maybe<ResolversTypes['MarketVolume']>, ParentType, ContextType, RequireFields<QueryMarketVolumeArgs, 'id' | 'subgraphError'>>;
  marketVolumes?: Resolver<Array<ResolversTypes['MarketVolume']>, ParentType, ContextType, RequireFields<QueryMarketVolumesArgs, 'first' | 'skip' | 'subgraphError'>>;
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
  royaltiesRegistries?: Resolver<Array<ResolversTypes['RoyaltiesRegistry']>, ParentType, ContextType, RequireFields<QueryRoyaltiesRegistriesArgs, 'first' | 'skip' | 'subgraphError'>>;
  royaltiesRegistry?: Resolver<Maybe<ResolversTypes['RoyaltiesRegistry']>, ParentType, ContextType, RequireFields<QueryRoyaltiesRegistryArgs, 'id' | 'subgraphError'>>;
  transaction?: Resolver<Maybe<ResolversTypes['Transaction']>, ParentType, ContextType, RequireFields<QueryTransactionArgs, 'id' | 'subgraphError'>>;
  transactions?: Resolver<Array<ResolversTypes['Transaction']>, ParentType, ContextType, RequireFields<QueryTransactionsArgs, 'first' | 'skip' | 'subgraphError'>>;
};

export type RoyaltiesRegistryResolvers<ContextType = any, ParentType extends ResolversParentTypes['RoyaltiesRegistry'] = ResolversParentTypes['RoyaltiesRegistry']> = {
  account?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  collectionId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  tokenId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
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
  contract?: SubscriptionResolver<Maybe<ResolversTypes['Contract']>, "contract", ParentType, ContextType, RequireFields<SubscriptionContractArgs, 'id' | 'subgraphError'>>;
  contracts?: SubscriptionResolver<Array<ResolversTypes['Contract']>, "contracts", ParentType, ContextType, RequireFields<SubscriptionContractsArgs, 'first' | 'skip' | 'subgraphError'>>;
  creator?: SubscriptionResolver<Maybe<ResolversTypes['Creator']>, "creator", ParentType, ContextType, RequireFields<SubscriptionCreatorArgs, 'id' | 'subgraphError'>>;
  creators?: SubscriptionResolver<Array<ResolversTypes['Creator']>, "creators", ParentType, ContextType, RequireFields<SubscriptionCreatorsArgs, 'first' | 'skip' | 'subgraphError'>>;
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
  marketEvent721?: SubscriptionResolver<Maybe<ResolversTypes['MarketEvent721']>, "marketEvent721", ParentType, ContextType, RequireFields<SubscriptionMarketEvent721Args, 'id' | 'subgraphError'>>;
  marketEvent721S?: SubscriptionResolver<Array<ResolversTypes['MarketEvent721']>, "marketEvent721S", ParentType, ContextType, RequireFields<SubscriptionMarketEvent721SArgs, 'first' | 'skip' | 'subgraphError'>>;
  marketEvent1155?: SubscriptionResolver<Maybe<ResolversTypes['MarketEvent1155']>, "marketEvent1155", ParentType, ContextType, RequireFields<SubscriptionMarketEvent1155Args, 'id' | 'subgraphError'>>;
  marketEvent1155S?: SubscriptionResolver<Array<ResolversTypes['MarketEvent1155']>, "marketEvent1155S", ParentType, ContextType, RequireFields<SubscriptionMarketEvent1155SArgs, 'first' | 'skip' | 'subgraphError'>>;
  marketFee?: SubscriptionResolver<Maybe<ResolversTypes['MarketFee']>, "marketFee", ParentType, ContextType, RequireFields<SubscriptionMarketFeeArgs, 'id' | 'subgraphError'>>;
  marketFees?: SubscriptionResolver<Array<ResolversTypes['MarketFee']>, "marketFees", ParentType, ContextType, RequireFields<SubscriptionMarketFeesArgs, 'first' | 'skip' | 'subgraphError'>>;
  marketVolume?: SubscriptionResolver<Maybe<ResolversTypes['MarketVolume']>, "marketVolume", ParentType, ContextType, RequireFields<SubscriptionMarketVolumeArgs, 'id' | 'subgraphError'>>;
  marketVolumes?: SubscriptionResolver<Array<ResolversTypes['MarketVolume']>, "marketVolumes", ParentType, ContextType, RequireFields<SubscriptionMarketVolumesArgs, 'first' | 'skip' | 'subgraphError'>>;
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
  royaltiesRegistries?: SubscriptionResolver<Array<ResolversTypes['RoyaltiesRegistry']>, "royaltiesRegistries", ParentType, ContextType, RequireFields<SubscriptionRoyaltiesRegistriesArgs, 'first' | 'skip' | 'subgraphError'>>;
  royaltiesRegistry?: SubscriptionResolver<Maybe<ResolversTypes['RoyaltiesRegistry']>, "royaltiesRegistry", ParentType, ContextType, RequireFields<SubscriptionRoyaltiesRegistryArgs, 'id' | 'subgraphError'>>;
  transaction?: SubscriptionResolver<Maybe<ResolversTypes['Transaction']>, "transaction", ParentType, ContextType, RequireFields<SubscriptionTransactionArgs, 'id' | 'subgraphError'>>;
  transactions?: SubscriptionResolver<Array<ResolversTypes['Transaction']>, "transactions", ParentType, ContextType, RequireFields<SubscriptionTransactionsArgs, 'first' | 'skip' | 'subgraphError'>>;
};

export type TransactionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Transaction'] = ResolversParentTypes['Transaction']> = {
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  events?: Resolver<Array<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<TransactionEventsArgs, 'first' | 'skip'>>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
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
  Bytes?: GraphQLScalarType;
  Contract?: ContractResolvers<ContextType>;
  Creator?: CreatorResolvers<ContextType>;
  ERC721Contract?: Erc721ContractResolvers<ContextType>;
  ERC721Creator?: Erc721CreatorResolvers<ContextType>;
  ERC721Token?: Erc721TokenResolvers<ContextType>;
  ERC721Transfer?: Erc721TransferResolvers<ContextType>;
  ERC1155Balance?: Erc1155BalanceResolvers<ContextType>;
  ERC1155Contract?: Erc1155ContractResolvers<ContextType>;
  ERC1155Creator?: Erc1155CreatorResolvers<ContextType>;
  ERC1155Token?: Erc1155TokenResolvers<ContextType>;
  ERC1155Transfer?: Erc1155TransferResolvers<ContextType>;
  Event?: EventResolvers<ContextType>;
  Int8?: GraphQLScalarType;
  MarketEvent721?: MarketEvent721Resolvers<ContextType>;
  MarketEvent1155?: MarketEvent1155Resolvers<ContextType>;
  MarketFee?: MarketFeeResolvers<ContextType>;
  MarketVolume?: MarketVolumeResolvers<ContextType>;
  OnSaleStatus1155?: OnSaleStatus1155Resolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  OrderTransfer?: OrderTransferResolvers<ContextType>;
  OwnedTokenCount?: OwnedTokenCountResolvers<ContextType>;
  OwnerContract?: OwnerContractResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RoyaltiesRegistry?: RoyaltiesRegistryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Transaction?: TransactionResolvers<ContextType>;
  _Block_?: _Block_Resolvers<ContextType>;
  _Meta_?: _Meta_Resolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = any> = {
  derivedFrom?: DerivedFromDirectiveResolver<any, any, ContextType>;
  entity?: EntityDirectiveResolver<any, any, ContextType>;
  subgraphId?: SubgraphIdDirectiveResolver<any, any, ContextType>;
};


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
export const GetUniqueOwnersCountDocument = gql`
    query GetUniqueOwnersCount($contractAddress: String!, $skip: Int = 0, $first: Int = 1000) {
  ownedTokenCounts(
    where: {contract: $contractAddress, count_gt: 0}
    orderBy: timestamp
    orderDirection: desc
    skip: $skip
    first: $first
  ) {
    id
    count
    contract
    timestamp
  }
}
    `;
export const GetContractDocument = gql`
    query getContract($address: ID!) {
  contract(id: $address) {
    id
    count
    contract
  }
}
    `;
export const GetActivityDocument = gql`
    query getActivity($page: Int, $limit: Int, $address: String) {
  blocks(
    where: {address: $address}
    skip: $page
    first: $limit
    orderBy: timestampt
    orderDirection: desc
  ) {
    tokenId
    from
    to
    timestampt
    quantity
    price
    id
    event
    blockNumber
    address
    quoteToken
  }
}
    `;
export const GetActivityWithEventDocument = gql`
    query getActivityWithEvent($first: Int = 1000, $skip: Int = 0, $address: String, $event: EventType) {
  blocks(
    first: $first
    skip: $skip
    where: {and: [{or: [{to: $address}, {from: $address}]}, {event: $event}]}
  ) {
    tokenId
    to
    quoteToken
    timestampt
    price
    quantity
    id
    from
    event
    blockNumber
    address
  }
}
    `;
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
export const GetCollectionTokensDocument = gql`
    query GetCollectionTokens($collectionAddress: String) {
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
export const GetNftOwners1155Document = gql`
    query GetNFTOwners1155($tokenId: String, $contract: String, $owner: String) {
  erc1155Balances(
    where: {contract: $contract, token_: {tokenId: $tokenId}, value_gt: 0, account: $owner}
  ) {
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
export const GetNftOwners721Document = gql`
    query GetNFTOwners721($tokenId: String, $contract: String, $owner: String) {
  erc721Tokens(where: {contract: $contract, tokenId: $tokenId, owner: $owner}) {
    id
    txCreation
    contract {
      id
    }
    owner {
      id
    }
    tokenId
  }
}
    `;
export const GetErc1155ContractsDocument = gql`
    query getERC1155Contracts {
  erc1155Contracts {
    txCreation
    symbol
    name
    id
  }
}
    `;
export const GetErc721ContractsDocument = gql`
    query getERC721Contracts {
  erc721Contracts {
    txCreation
    symbol
    name
    id
    supportsMetadata
  }
}
    `;
export const GetNfTsHistory721Document = gql`
    query GetNFTsHistory721($minPrice: BigInt, $maxPrice: BigInt, $event: SellStatus, $quoteToken: String) {
  marketEvent721S(
    where: {price_gte: $minPrice, price_lte: $maxPrice, event: $event, quoteToken: $quoteToken}
    orderBy: timestamp
    orderDirection: desc
  ) {
    id
    event
    nftId {
      id
      contract {
        id
      }
    }
    price
    to
    from
    quoteToken
  }
}
    `;
export const GetNfTsHistory1155Document = gql`
    query GetNFTsHistory1155($minPrice: BigInt, $maxPrice: BigInt, $event: SellStatus, $quoteToken: String) {
  marketEvent1155S(
    where: {price_gte: $minPrice, price_lte: $maxPrice, event: $event, quoteToken: $quoteToken}
    orderBy: timestamp
    orderDirection: desc
  ) {
    id
    event
    quantity
    nftId {
      id
      contract {
        id
      }
    }
    price
    to
    from
    quoteToken
  }
}
    `;
export const GetOneNftSellInfoDocument = gql`
    query GetOneNFTSellInfo($nftId: String!, $event: SellStatus, $quoteToken: String, $buyer: String, $seller: String, $page: Int, $limit: Int) {
  marketEvent1155S(
    where: {nftId_contains: $nftId, from: $seller, to: $buyer, event: $event, quoteToken: $quoteToken}
    orderBy: timestamp
    orderDirection: desc
    skip: $page
    first: $limit
  ) {
    id
    event
    nftId {
      id
      tokenId
      contract {
        id
      }
    }
    price
    to
    from
    quantity
    quoteToken
    operationId
  }
  marketEvent721S(
    where: {nftId_contains: $nftId, from: $seller, to: $buyer, event: $event, quoteToken: $quoteToken}
    orderBy: timestamp
    orderDirection: desc
  ) {
    id
    event
    nftId {
      id
      tokenId
      contract {
        id
      }
    }
    price
    to
    from
    quoteToken
  }
}
    `;
export const GetNftOnSalesAndOwnerDocument = gql`
    query getNFTOnSalesAndOwner($id: ID!) {
  account(id: $id) {
    id
    onSaleCount
    holdingCount
  }
}
    `;
export const CheckOnSalesDocument = gql`
    query CheckOnSales($address: String) {
  marketEvent1155S(where: {from: $address, event: AskNew}) {
    id
    address
    nftId {
      id
      tokenId
      contract {
        id
      }
    }
  }
  marketEvent721S(where: {from: $address, event: AskNew}) {
    id
    address
    nftId {
      id
      tokenId
      contract {
        id
      }
    }
  }
}
    `;
export const GetNfTwithAccountIdDocument = gql`
    query getNFTwithAccountID($id: ID!, $limit: Int = 1000, $page: Int = 0, $orderDirection: OrderDirection) {
  account(id: $id) {
    id
    ERC721tokens(first: $limit, skip: $page) {
      uri
      txCreation
      id
      tokenId
      contract {
        id
      }
    }
    ERC1155balances(first: $limit, skip: $page, where: {value_gt: 0}) {
      valueExact
      value
      id
      token {
        id
        tokenId
        txCreation
        contract {
          id
          holderCount
        }
      }
    }
  }
}
    `;
export const GetRoyaltiesDocument = gql`
    query getRoyalties($address: String) {
  royaltiesRegistries(where: {collectionId: $address}) {
    value
    id
    collectionId
    tokenId
    account
  }
}
    `;
export const GetStatusErc1155SDocument = gql`
    query getStatusERC1155S {
  marketEvent1155S {
    txHash
    to
    timestamp
    quoteToken
    price
    netPrice
    id
    from
    event
    quantity
    address
    nftId {
      id
      txCreation
      uri
    }
  }
}
    `;
export const GetStatusErc721SDocument = gql`
    query getStatusERC721S {
  marketEvent721S {
    txHash
    to
    timestamp
    quoteToken
    price
    id
    from
    event
    address
    netPrice
    nftId {
      uri
      txCreation
      id
    }
  }
}
    `;
export const CmsSummaryTransactionDocument = gql`
    query CMSSummaryTransaction($first: Int = 1000, $skip: Int = 0, $event: EventType, $start: Int, $end: Int) {
  blocks(
    first: $first
    skip: $skip
    where: {event: $event, timestampt_lte: $end, timestampt_gte: $start}
  ) {
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
export const GetTransferNftDocument = gql`
    query getTransferNFT($id: String!) {
  erc721Transfers(where: {to: $id}) {
    timestamp
    id
    to {
      id
    }
  }
  erc1155Transfers(where: {to: $id}) {
    valueExact
    value
    timestamp
    id
    to {
      id
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    ErcContract(variables: ErcContractQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ErcContractQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ErcContractQuery>(ErcContractDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ErcContract', 'query', variables);
    },
    GetUniqueOwnersCount(variables: GetUniqueOwnersCountQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetUniqueOwnersCountQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUniqueOwnersCountQuery>(GetUniqueOwnersCountDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetUniqueOwnersCount', 'query', variables);
    },
    getContract(variables: GetContractQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetContractQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetContractQuery>(GetContractDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getContract', 'query', variables);
    },
    getActivity(variables?: GetActivityQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetActivityQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetActivityQuery>(GetActivityDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getActivity', 'query', variables);
    },
    getActivityWithEvent(variables?: GetActivityWithEventQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetActivityWithEventQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetActivityWithEventQuery>(GetActivityWithEventDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getActivityWithEvent', 'query', variables);
    },
    GetCollectionsData(variables?: GetCollectionsDataQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetCollectionsDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCollectionsDataQuery>(GetCollectionsDataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetCollectionsData', 'query', variables);
    },
    GetCollectionHolders(variables?: GetCollectionHoldersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetCollectionHoldersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCollectionHoldersQuery>(GetCollectionHoldersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetCollectionHolders', 'query', variables);
    },
    GetCollectionTokens(variables?: GetCollectionTokensQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetCollectionTokensQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetCollectionTokensQuery>(GetCollectionTokensDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetCollectionTokens', 'query', variables);
    },
    GetNFTOwnersInfo1155(variables?: GetNftOwnersInfo1155QueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetNftOwnersInfo1155Query> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetNftOwnersInfo1155Query>(GetNftOwnersInfo1155Document, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetNFTOwnersInfo1155', 'query', variables);
    },
    GetNFTOwnersInfo721(variables?: GetNftOwnersInfo721QueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetNftOwnersInfo721Query> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetNftOwnersInfo721Query>(GetNftOwnersInfo721Document, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetNFTOwnersInfo721', 'query', variables);
    },
    GetNFTOwners1155(variables?: GetNftOwners1155QueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetNftOwners1155Query> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetNftOwners1155Query>(GetNftOwners1155Document, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetNFTOwners1155', 'query', variables);
    },
    GetNFTOwners721(variables?: GetNftOwners721QueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetNftOwners721Query> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetNftOwners721Query>(GetNftOwners721Document, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetNFTOwners721', 'query', variables);
    },
    getERC1155Contracts(variables?: GetErc1155ContractsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetErc1155ContractsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetErc1155ContractsQuery>(GetErc1155ContractsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getERC1155Contracts', 'query', variables);
    },
    getERC721Contracts(variables?: GetErc721ContractsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetErc721ContractsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetErc721ContractsQuery>(GetErc721ContractsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getERC721Contracts', 'query', variables);
    },
    GetNFTsHistory721(variables?: GetNfTsHistory721QueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetNfTsHistory721Query> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetNfTsHistory721Query>(GetNfTsHistory721Document, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetNFTsHistory721', 'query', variables);
    },
    GetNFTsHistory1155(variables?: GetNfTsHistory1155QueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetNfTsHistory1155Query> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetNfTsHistory1155Query>(GetNfTsHistory1155Document, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetNFTsHistory1155', 'query', variables);
    },
    GetOneNFTSellInfo(variables: GetOneNftSellInfoQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetOneNftSellInfoQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetOneNftSellInfoQuery>(GetOneNftSellInfoDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetOneNFTSellInfo', 'query', variables);
    },
    getNFTOnSalesAndOwner(variables: GetNftOnSalesAndOwnerQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetNftOnSalesAndOwnerQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetNftOnSalesAndOwnerQuery>(GetNftOnSalesAndOwnerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getNFTOnSalesAndOwner', 'query', variables);
    },
    CheckOnSales(variables?: CheckOnSalesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CheckOnSalesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CheckOnSalesQuery>(CheckOnSalesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CheckOnSales', 'query', variables);
    },
    getNFTwithAccountID(variables: GetNfTwithAccountIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetNfTwithAccountIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetNfTwithAccountIdQuery>(GetNfTwithAccountIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getNFTwithAccountID', 'query', variables);
    },
    getRoyalties(variables?: GetRoyaltiesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetRoyaltiesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetRoyaltiesQuery>(GetRoyaltiesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getRoyalties', 'query', variables);
    },
    getStatusERC1155S(variables?: GetStatusErc1155SQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetStatusErc1155SQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetStatusErc1155SQuery>(GetStatusErc1155SDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getStatusERC1155S', 'query', variables);
    },
    getStatusERC721S(variables?: GetStatusErc721SQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetStatusErc721SQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetStatusErc721SQuery>(GetStatusErc721SDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getStatusERC721S', 'query', variables);
    },
    CMSSummaryTransaction(variables?: CmsSummaryTransactionQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CmsSummaryTransactionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CmsSummaryTransactionQuery>(CmsSummaryTransactionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CMSSummaryTransaction', 'query', variables);
    },
    CMSSummaryVolume(variables: CmsSummaryVolumeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CmsSummaryVolumeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CmsSummaryVolumeQuery>(CmsSummaryVolumeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CMSSummaryVolume', 'query', variables);
    },
    getTransferNFT(variables: GetTransferNftQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetTransferNftQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetTransferNftQuery>(GetTransferNftDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getTransferNFT', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
export type ErcContractQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ErcContractQuery = { __typename?: 'Query', erc1155Contract?: { __typename?: 'ERC1155Contract', id: string, count: any, holderCount: any, volume: any } | null, erc721Contract?: { __typename?: 'ERC721Contract', id: string, count: any, holderCount: any, volume: any } | null };

export type GetUniqueOwnersCountQueryVariables = Exact<{
  contractAddress: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetUniqueOwnersCountQuery = { __typename?: 'Query', ownedTokenCounts: Array<{ __typename?: 'OwnedTokenCount', id: string, count: any, contract: string, timestamp: any }> };

export type GetContractQueryVariables = Exact<{
  address: Scalars['ID']['input'];
}>;


export type GetContractQuery = { __typename?: 'Query', contract?: { __typename?: 'Contract', id: string, count: any, contract: string } | null };

export type GetActivityQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetActivityQuery = { __typename?: 'Query', blocks: Array<{ __typename?: 'Block', tokenId: any, from?: string | null, to?: string | null, timestampt: number, quantity?: any | null, price?: any | null, id: string, event: EventType, blockNumber: number, address: string, quoteToken?: string | null }> };

export type GetActivityWithEventQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  event?: InputMaybe<EventType>;
}>;


export type GetActivityWithEventQuery = { __typename?: 'Query', blocks: Array<{ __typename?: 'Block', tokenId: any, to?: string | null, quoteToken?: string | null, timestampt: number, price?: any | null, quantity?: any | null, id: string, from?: string | null, event: EventType, blockNumber: number, address: string }> };

export type GetCollectionsDataQueryVariables = Exact<{
  collectionAddress?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetCollectionsDataQuery = { __typename?: 'Query', marketEvent1155S: Array<{ __typename?: 'MarketEvent1155', address?: string | null, netPrice?: any | null, price?: any | null, quoteToken?: string | null, to?: string | null, event: SellStatus, quantity: any, nftId?: { __typename?: 'ERC1155Token', contract: { __typename?: 'ERC1155Contract', id: string } } | null }>, marketEvent721S: Array<{ __typename?: 'MarketEvent721', id: string, address: string, price?: any | null, quoteToken?: string | null, event: SellStatus, to?: string | null, nftId?: { __typename?: 'ERC721Token', contract: { __typename?: 'ERC721Contract', id: string } } | null }> };

export type GetCollectionHoldersQueryVariables = Exact<{
  collectionAddress?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetCollectionHoldersQuery = { __typename?: 'Query', erc1155Balances: Array<{ __typename?: 'ERC1155Balance', id: string, value: any, contract?: { __typename?: 'ERC1155Contract', id: string } | null, account?: { __typename?: 'Account', id: string } | null }> };

export type GetCollectionTokensQueryVariables = Exact<{
  collectionAddress?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetCollectionTokensQuery = { __typename?: 'Query', erc1155Tokens: Array<{ __typename?: 'ERC1155Token', id: string, tokenId: string, balances: Array<{ __typename?: 'ERC1155Balance', value: any, account?: { __typename?: 'Account', id: string } | null, contract?: { __typename?: 'ERC1155Contract', id: string } | null }> }>, erc721Tokens: Array<{ __typename?: 'ERC721Token', id: string, tokenId: string, owner: { __typename?: 'Account', id: string } }> };

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

export type GetNftOwners1155QueryVariables = Exact<{
  tokenId?: InputMaybe<Scalars['String']['input']>;
  contract?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetNftOwners1155Query = { __typename?: 'Query', erc1155Balances: Array<{ __typename?: 'ERC1155Balance', value: any, account?: { __typename?: 'Account', id: string } | null, token: { __typename?: 'ERC1155Token', tokenId: string }, contract?: { __typename?: 'ERC1155Contract', id: string } | null }> };

export type GetNftOwners721QueryVariables = Exact<{
  tokenId?: InputMaybe<Scalars['String']['input']>;
  contract?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetNftOwners721Query = { __typename?: 'Query', erc721Tokens: Array<{ __typename?: 'ERC721Token', id: string, txCreation: string, tokenId: string, contract: { __typename?: 'ERC721Contract', id: string }, owner: { __typename?: 'Account', id: string } }> };

export type GetErc1155ContractsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetErc1155ContractsQuery = { __typename?: 'Query', erc1155Contracts: Array<{ __typename?: 'ERC1155Contract', txCreation: string, symbol?: string | null, name?: string | null, id: string }> };

export type GetErc721ContractsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetErc721ContractsQuery = { __typename?: 'Query', erc721Contracts: Array<{ __typename?: 'ERC721Contract', txCreation: string, symbol?: string | null, name?: string | null, id: string, supportsMetadata?: boolean | null }> };

export type GetNfTsHistory721QueryVariables = Exact<{
  minPrice?: InputMaybe<Scalars['BigInt']['input']>;
  maxPrice?: InputMaybe<Scalars['BigInt']['input']>;
  event?: InputMaybe<SellStatus>;
  quoteToken?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetNfTsHistory721Query = { __typename?: 'Query', marketEvent721S: Array<{ __typename?: 'MarketEvent721', id: string, event: SellStatus, price?: any | null, to?: string | null, from?: string | null, quoteToken?: string | null, nftId?: { __typename?: 'ERC721Token', id: string, contract: { __typename?: 'ERC721Contract', id: string } } | null }> };

export type GetNfTsHistory1155QueryVariables = Exact<{
  minPrice?: InputMaybe<Scalars['BigInt']['input']>;
  maxPrice?: InputMaybe<Scalars['BigInt']['input']>;
  event?: InputMaybe<SellStatus>;
  quoteToken?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetNfTsHistory1155Query = { __typename?: 'Query', marketEvent1155S: Array<{ __typename?: 'MarketEvent1155', id: string, event: SellStatus, quantity: any, price?: any | null, to?: string | null, from?: string | null, quoteToken?: string | null, nftId?: { __typename?: 'ERC1155Token', id: string, contract: { __typename?: 'ERC1155Contract', id: string } } | null }> };

export type GetOneNftSellInfoQueryVariables = Exact<{
  nftId: Scalars['String']['input'];
  event?: InputMaybe<SellStatus>;
  quoteToken?: InputMaybe<Scalars['String']['input']>;
  buyer?: InputMaybe<Scalars['String']['input']>;
  seller?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetOneNftSellInfoQuery = { __typename?: 'Query', marketEvent1155S: Array<{ __typename?: 'MarketEvent1155', id: string, event: SellStatus, price?: any | null, to?: string | null, from?: string | null, quantity: any, quoteToken?: string | null, operationId?: any | null, nftId?: { __typename?: 'ERC1155Token', id: string, tokenId: string, contract: { __typename?: 'ERC1155Contract', id: string } } | null }>, marketEvent721S: Array<{ __typename?: 'MarketEvent721', id: string, event: SellStatus, price?: any | null, to?: string | null, from?: string | null, quoteToken?: string | null, nftId?: { __typename?: 'ERC721Token', id: string, tokenId: string, contract: { __typename?: 'ERC721Contract', id: string } } | null }> };

export type GetNftOnSalesAndOwnerQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetNftOnSalesAndOwnerQuery = { __typename?: 'Query', account?: { __typename?: 'Account', id: string, onSaleCount: any, holdingCount: any } | null };

export type CheckOnSalesQueryVariables = Exact<{
  address?: InputMaybe<Scalars['String']['input']>;
}>;


export type CheckOnSalesQuery = { __typename?: 'Query', marketEvent1155S: Array<{ __typename?: 'MarketEvent1155', id: string, address?: string | null, nftId?: { __typename?: 'ERC1155Token', id: string, tokenId: string, contract: { __typename?: 'ERC1155Contract', id: string } } | null }>, marketEvent721S: Array<{ __typename?: 'MarketEvent721', id: string, address: string, nftId?: { __typename?: 'ERC721Token', id: string, tokenId: string, contract: { __typename?: 'ERC721Contract', id: string } } | null }> };

export type GetNfTwithAccountIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  orderDirection?: InputMaybe<OrderDirection>;
}>;


export type GetNfTwithAccountIdQuery = { __typename?: 'Query', account?: { __typename?: 'Account', id: string, ERC721tokens: Array<{ __typename?: 'ERC721Token', uri?: string | null, txCreation: string, id: string, tokenId: string, contract: { __typename?: 'ERC721Contract', id: string } }>, ERC1155balances: Array<{ __typename?: 'ERC1155Balance', valueExact: any, value: any, id: string, token: { __typename?: 'ERC1155Token', id: string, tokenId: string, txCreation: string, contract: { __typename?: 'ERC1155Contract', id: string, holderCount: any } } }> } | null };

export type GetRoyaltiesQueryVariables = Exact<{
  address?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetRoyaltiesQuery = { __typename?: 'Query', royaltiesRegistries: Array<{ __typename?: 'RoyaltiesRegistry', value: number, id: string, collectionId: string, tokenId: string, account: string }> };

export type GetStatusErc1155SQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStatusErc1155SQuery = { __typename?: 'Query', marketEvent1155S: Array<{ __typename?: 'MarketEvent1155', txHash?: string | null, to?: string | null, timestamp: any, quoteToken?: string | null, price?: any | null, netPrice?: any | null, id: string, from?: string | null, event: SellStatus, quantity: any, address?: string | null, nftId?: { __typename?: 'ERC1155Token', id: string, txCreation: string, uri?: string | null } | null }> };

export type GetStatusErc721SQueryVariables = Exact<{ [key: string]: never; }>;


export type GetStatusErc721SQuery = { __typename?: 'Query', marketEvent721S: Array<{ __typename?: 'MarketEvent721', txHash: string, to?: string | null, timestamp: any, quoteToken?: string | null, price?: any | null, id: string, from?: string | null, event: SellStatus, address: string, netPrice?: any | null, nftId?: { __typename?: 'ERC721Token', uri?: string | null, txCreation: string, id: string } | null }> };

export type CmsSummaryTransactionQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  event?: InputMaybe<EventType>;
  start?: InputMaybe<Scalars['Int']['input']>;
  end?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CmsSummaryTransactionQuery = { __typename?: 'Query', blocks: Array<{ __typename?: 'Block', timestampt: number, id: string, event: EventType }> };

export type CmsSummaryVolumeQueryVariables = Exact<{
  address: Scalars['ID']['input'];
}>;


export type CmsSummaryVolumeQuery = { __typename?: 'Query', marketVolume?: { __typename?: 'MarketVolume', type: string, totalVolume: any, id: string } | null };

export type GetTransferNftQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetTransferNftQuery = { __typename?: 'Query', erc721Transfers: Array<{ __typename?: 'ERC721Transfer', timestamp: any, id: string, to: { __typename?: 'Account', id: string } }>, erc1155Transfers: Array<{ __typename?: 'ERC1155Transfer', valueExact: any, value: any, timestamp: any, id: string, to?: { __typename?: 'Account', id: string } | null }> };
