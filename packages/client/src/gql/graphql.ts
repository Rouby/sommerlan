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
  JSON: { input: any; output: any; }
  JWT: { input: any; output: any; }
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

export type AuthResponse = {
  __typename?: 'AuthResponse';
  refreshToken: Scalars['String']['output'];
  token: Scalars['JWT']['output'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  credentialID: Array<Scalars['Int']['output']>;
  refreshToken: Scalars['String']['output'];
  token: Scalars['JWT']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  generatePasskeyLoginOptions: Scalars['JSON']['output'];
  generatePasskeyRegisterOptions: Scalars['JSON']['output'];
  loginMagicLink: AuthResponse;
  loginPasskey: LoginResponse;
  loginPassword: AuthResponse;
  refreshLogin: AuthResponse;
  register: RegisterResponse;
  registerPasskey: Scalars['JSON']['output'];
  sendMagicLink: Scalars['Boolean']['output'];
};


export type MutationGeneratePasskeyLoginOptionsArgs = {
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationGeneratePasskeyRegisterOptionsArgs = {
  userId: Scalars['String']['input'];
};


export type MutationLoginMagicLinkArgs = {
  magicLinkId: Scalars['String']['input'];
};


export type MutationLoginPasskeyArgs = {
  response: Scalars['JSON']['input'];
};


export type MutationLoginPasswordArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationRefreshLoginArgs = {
  refreshToken: Scalars['String']['input'];
};


export type MutationRegisterArgs = {
  email: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
  userName: Scalars['String']['input'];
};


export type MutationRegisterPasskeyArgs = {
  name: Scalars['String']['input'];
  response: Scalars['JSON']['input'];
  userId: Scalars['String']['input'];
};


export type MutationSendMagicLinkArgs = {
  email: Scalars['String']['input'];
};

export type Party = {
  __typename?: 'Party';
  attendings: Array<Attending>;
  endDate: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  location: Scalars['String']['output'];
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

export type RegisterResponse = {
  __typename?: 'RegisterResponse';
  refreshToken: Scalars['String']['output'];
  token: Scalars['String']['output'];
  user: User;
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

export type RefreshLoginMutationVariables = Exact<{
  refreshToken: Scalars['String']['input'];
}>;


export type RefreshLoginMutation = { __typename?: 'Mutation', refreshLogin: { __typename?: 'AuthResponse', token: any, refreshToken: string } };

export type LoginMagicLinkMutationVariables = Exact<{
  magicLinkId: Scalars['String']['input'];
}>;


export type LoginMagicLinkMutation = { __typename?: 'Mutation', loginMagicLink: { __typename?: 'AuthResponse', token: any, refreshToken: string } };

export type PartyQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type PartyQuery = { __typename?: 'Query', party?: { __typename?: 'Party', id: string, startDate: any, endDate: any, attendings: Array<{ __typename?: 'Attending', id: string, dates: Array<any>, user: { __typename?: 'User', id: string, displayName: string, avatar: string } }> } | null };

export type PartiesQueryVariables = Exact<{ [key: string]: never; }>;


export type PartiesQuery = { __typename?: 'Query', parties: Array<{ __typename: 'Party', id: string, startDate: any, endDate: any, location: string, roomsAvailable: number, attendings: Array<{ __typename?: 'Attending', id: string, dates: Array<any>, user: { __typename?: 'User', id: string, displayName: string, avatar: string } }> }> };

export type PartyRowQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type PartyRowQuery = { __typename?: 'Query', party?: { __typename?: 'Party', id: string, startDate: any, endDate: any, location: string, attendings: Array<{ __typename?: 'Attending', id: string, dates: Array<any>, user: { __typename?: 'User', id: string, displayName: string, avatar: string } }> } | null };

export type RegisterMutationVariables = Exact<{
  userName: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'RegisterResponse', token: string, refreshToken: string } };

export type LoginPasswordMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginPasswordMutation = { __typename?: 'Mutation', loginPassword: { __typename?: 'AuthResponse', token: any, refreshToken: string } };

export type GenerateLoginOptionsMutationVariables = Exact<{
  userId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GenerateLoginOptionsMutation = { __typename?: 'Mutation', generatePasskeyLoginOptions: any };

export type LoginPasskeyMutationVariables = Exact<{
  response: Scalars['JSON']['input'];
}>;


export type LoginPasskeyMutation = { __typename?: 'Mutation', loginPasskey: { __typename?: 'LoginResponse', token: any, refreshToken: string, credentialID: Array<number> } };


export const RefreshLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"refreshLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"refreshToken"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"refreshLogin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"refreshToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"refreshToken"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]}}]} as unknown as DocumentNode<RefreshLoginMutation, RefreshLoginMutationVariables>;
export const LoginMagicLinkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"loginMagicLink"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"magicLinkId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginMagicLink"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"magicLinkId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"magicLinkId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]}}]} as unknown as DocumentNode<LoginMagicLinkMutation, LoginMagicLinkMutationVariables>;
export const PartyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"party"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"party"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"attendings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dates"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}}]}}]} as unknown as DocumentNode<PartyQuery, PartyQueryVariables>;
export const PartiesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"parties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"roomsAvailable"}},{"kind":"Field","name":{"kind":"Name","value":"attendings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dates"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}}]}}]} as unknown as DocumentNode<PartiesQuery, PartiesQueryVariables>;
export const PartyRowDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"partyRow"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"party"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"attendings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dates"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}}]}}]} as unknown as DocumentNode<PartyRowQuery, PartyRowQueryVariables>;
export const RegisterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"register"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"register"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userName"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]}}]} as unknown as DocumentNode<RegisterMutation, RegisterMutationVariables>;
export const LoginPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"loginPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]}}]} as unknown as DocumentNode<LoginPasswordMutation, LoginPasswordMutationVariables>;
export const GenerateLoginOptionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"generateLoginOptions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"generatePasskeyLoginOptions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}]}}]} as unknown as DocumentNode<GenerateLoginOptionsMutation, GenerateLoginOptionsMutationVariables>;
export const LoginPasskeyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"loginPasskey"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"response"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JSON"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginPasskey"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"response"},"value":{"kind":"Variable","name":{"kind":"Name","value":"response"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}},{"kind":"Field","name":{"kind":"Name","value":"credentialID"}}]}}]}}]} as unknown as DocumentNode<LoginPasskeyMutation, LoginPasskeyMutationVariables>;