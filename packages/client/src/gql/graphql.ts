/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  Time: { input: any; output: any; }
};

export type Attending = {
  __typename?: 'Attending';
  dates: Array<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  party: Party;
  room?: Maybe<RoomStatus>;
  user: User;
};

export type Party = {
  __typename?: 'Party';
  attendings: Array<Attending>;
  endDate: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  roomsAvailable: Scalars['Int']['output'];
  startDate: Scalars['Date']['output'];
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  nextParty?: Maybe<Party>;
  parties: Array<Party>;
  party?: Maybe<Party>;
};


export type QueryPartyArgs = {
  id: Scalars['ID']['input'];
};

export enum RoomStatus {
  Granted = 'GRANTED',
  Requested = 'REQUESTED'
}

export type User = {
  __typename?: 'User';
  avatar: Scalars['String']['output'];
  avatarUrl?: Maybe<Scalars['String']['output']>;
  displayName: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type PartyQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type PartyQuery = { __typename?: 'Query', party?: { __typename?: 'Party', id: string, startDate: any, endDate: any, attendings: Array<{ __typename?: 'Attending', id: string, dates: Array<any>, user: { __typename?: 'User', id: string, displayName: string, avatar: string } }> } | null };


export const PartyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"party"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"party"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"attendings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dates"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}}]}}]} as unknown as DocumentNode<PartyQuery, PartyQueryVariables>;