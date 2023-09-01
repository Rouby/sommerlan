import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { AttendingMapper, PartyMapper } from './party/schema.mappers';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string | number; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: Date | string; output: Date | string; }
  DateTime: { input: Date | string; output: Date | string; }
  JSON: { input: any; output: any; }
  JWT: { input: string; output: string; }
  Time: { input: Date | string; output: Date | string; }
};

export type Attending = {
  __typename?: 'Attending';
  dates: Array<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  party: Party;
  room?: Maybe<RoomStatus>;
  user: User;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  credentialID: Array<Scalars['Int']['output']>;
  token: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  generatePasskeyLoginOptions: Scalars['JSON']['output'];
  generatePasskeyRegisterOptions: Scalars['JSON']['output'];
  loginPasskey: LoginResponse;
  loginPassword: Scalars['JWT']['output'];
  loginWithMagicLink: Scalars['JWT']['output'];
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


export type MutationLoginPasskeyArgs = {
  response: Scalars['JSON']['input'];
};


export type MutationLoginPasswordArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationLoginWithMagicLinkArgs = {
  magicLinkId: Scalars['String']['input'];
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
  token: Scalars['String']['output'];
  user: User;
};

export type RoomStatus =
  | 'GRANTED'
  | 'REQUESTED';

export type User = {
  __typename?: 'User';
  avatar: Scalars['String']['output'];
  avatarUrl?: Maybe<Scalars['String']['output']>;
  displayName: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};



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



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Attending: ResolverTypeWrapper<AttendingMapper>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
  JWT: ResolverTypeWrapper<Scalars['JWT']['output']>;
  LoginResponse: ResolverTypeWrapper<LoginResponse>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Party: ResolverTypeWrapper<PartyMapper>;
  Query: ResolverTypeWrapper<{}>;
  RegisterResponse: ResolverTypeWrapper<RegisterResponse>;
  RoomStatus: RoomStatus;
  Time: ResolverTypeWrapper<Scalars['Time']['output']>;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Attending: AttendingMapper;
  ID: Scalars['ID']['output'];
  Date: Scalars['Date']['output'];
  DateTime: Scalars['DateTime']['output'];
  JSON: Scalars['JSON']['output'];
  JWT: Scalars['JWT']['output'];
  LoginResponse: LoginResponse;
  Int: Scalars['Int']['output'];
  String: Scalars['String']['output'];
  Mutation: {};
  Boolean: Scalars['Boolean']['output'];
  Party: PartyMapper;
  Query: {};
  RegisterResponse: RegisterResponse;
  Time: Scalars['Time']['output'];
  User: User;
};

export type AttendingResolvers<ContextType = any, ParentType extends ResolversParentTypes['Attending'] = ResolversParentTypes['Attending']> = {
  dates?: Resolver<Array<ResolversTypes['Date']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  party?: Resolver<ResolversTypes['Party'], ParentType, ContextType>;
  room?: Resolver<Maybe<ResolversTypes['RoomStatus']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export interface JwtScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JWT'], any> {
  name: 'JWT';
}

export type LoginResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoginResponse'] = ResolversParentTypes['LoginResponse']> = {
  credentialID?: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  generatePasskeyLoginOptions?: Resolver<ResolversTypes['JSON'], ParentType, ContextType, Partial<MutationGeneratePasskeyLoginOptionsArgs>>;
  generatePasskeyRegisterOptions?: Resolver<ResolversTypes['JSON'], ParentType, ContextType, RequireFields<MutationGeneratePasskeyRegisterOptionsArgs, 'userId'>>;
  loginPasskey?: Resolver<ResolversTypes['LoginResponse'], ParentType, ContextType, RequireFields<MutationLoginPasskeyArgs, 'response'>>;
  loginPassword?: Resolver<ResolversTypes['JWT'], ParentType, ContextType, RequireFields<MutationLoginPasswordArgs, 'email' | 'password'>>;
  loginWithMagicLink?: Resolver<ResolversTypes['JWT'], ParentType, ContextType, RequireFields<MutationLoginWithMagicLinkArgs, 'magicLinkId'>>;
  register?: Resolver<ResolversTypes['RegisterResponse'], ParentType, ContextType, RequireFields<MutationRegisterArgs, 'email' | 'userName'>>;
  registerPasskey?: Resolver<ResolversTypes['JSON'], ParentType, ContextType, RequireFields<MutationRegisterPasskeyArgs, 'name' | 'response' | 'userId'>>;
  sendMagicLink?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationSendMagicLinkArgs, 'email'>>;
};

export type PartyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Party'] = ResolversParentTypes['Party']> = {
  attendings?: Resolver<Array<ResolversTypes['Attending']>, ParentType, ContextType>;
  endDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  location?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  roomsAvailable?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  startDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  nextParty?: Resolver<Maybe<ResolversTypes['Party']>, ParentType, ContextType>;
  parties?: Resolver<Array<ResolversTypes['Party']>, ParentType, ContextType>;
  party?: Resolver<Maybe<ResolversTypes['Party']>, ParentType, ContextType, RequireFields<QueryPartyArgs, 'id'>>;
};

export type RegisterResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['RegisterResponse'] = ResolversParentTypes['RegisterResponse']> = {
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Time'], any> {
  name: 'Time';
}

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  avatar?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  avatarUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Attending?: AttendingResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  JSON?: GraphQLScalarType;
  JWT?: GraphQLScalarType;
  LoginResponse?: LoginResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Party?: PartyResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RegisterResponse?: RegisterResponseResolvers<ContextType>;
  Time?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
};

