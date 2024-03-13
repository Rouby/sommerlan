import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { AttendingMapper, PartyMapper, PictureMapper, PictureTagMapper } from './party/schema.mappers';
import { AuthDeviceMapper, UserMapper } from './user/schema.mappers';
import { DonationMapper } from './donation/schema.mappers';
import { EventMapper } from './events/schema.mappers';
import { GameMapper } from './game/schema.mappers';
import { Context } from './context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string | number; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BoundingBox: { input: {x:number;y:number;width:number;height:number}; output: {x:number;y:number;width:number;height:number}; }
  Date: { input: Date | string; output: Date | string; }
  DateTime: { input: Date | string; output: Date | string; }
  File: { input: File; output: File; }
  JSON: { input: any; output: any; }
  JWT: { input: string; output: string; }
  Time: { input: Date | string; output: Date | string; }
};

export type AddGameResult = {
  __typename?: 'AddGameResult';
  attending: Attending;
  game: Game;
};

export type Attending = {
  __typename?: 'Attending';
  dates: Array<Scalars['Date']['output']>;
  gamesPlayed: Array<Game>;
  id: Scalars['ID']['output'];
  party: Party;
  room?: Maybe<RoomStatus>;
  user: User;
};

export type AuthDevice = {
  __typename?: 'AuthDevice';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  lastUsedAt?: Maybe<Scalars['DateTime']['output']>;
  name: Scalars['String']['output'];
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  refreshToken: Scalars['String']['output'];
  token: Scalars['JWT']['output'];
};

export type Donation = {
  __typename?: 'Donation';
  amount: Scalars['Float']['output'];
  dedication: DonationDedication;
  donator?: Maybe<User>;
  id: Scalars['ID']['output'];
  party: Party;
};

export type DonationDedication =
  | 'RENT'
  | 'WARCHEST';

export type Event = {
  __typename?: 'Event';
  date?: Maybe<Scalars['Date']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  endTime?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  organizer: User;
  participants: Array<User>;
  party: Party;
  startTime?: Maybe<Scalars['String']['output']>;
};

export type EventInput = {
  date?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endTime?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image: Scalars['File']['input'];
  name: Scalars['String']['input'];
  partyId: Scalars['ID']['input'];
  startTime?: InputMaybe<Scalars['String']['input']>;
};

export type Game = {
  __typename?: 'Game';
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  players: Array<User>;
};

export type GameOnParty = {
  __typename?: 'GameOnParty';
  game: Game;
  id: Scalars['ID']['output'];
  party: Party;
  players: Array<User>;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  credentialID: Array<Scalars['Int']['output']>;
  refreshToken: Scalars['String']['output'];
  token: Scalars['JWT']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addGameToParty: AddGameResult;
  addPicture: Picture;
  deleteAuthDevice: AuthDevice;
  denyRoom?: Maybe<Attending>;
  donate: Donation;
  generatePasskeyLoginOptions: Scalars['JSON']['output'];
  generatePasskeyRegisterOptions: Scalars['JSON']['output'];
  grantRoom?: Maybe<Attending>;
  leaveEvent: Event;
  loginMagicLink: AuthResponse;
  loginPasskey: LoginResponse;
  loginPassword: AuthResponse;
  participateInEvent: Event;
  planEvent: Event;
  recindRoom?: Maybe<Attending>;
  refreshLogin: AuthResponse;
  register: RegisterResponse;
  registerPasskey: RegisterDeviceResponse;
  removeAttendance: Party;
  requestRoom?: Maybe<Attending>;
  rescindDonation: Donation;
  sendMagicLink: Scalars['Boolean']['output'];
  setAttendance: Party;
  setGamesPlayed: Attending;
  syncCache?: Maybe<Scalars['Boolean']['output']>;
  updateAuthDevice: AuthDevice;
  updateParty: Party;
  updateProfile: User;
};


export type MutationAddGameToPartyArgs = {
  name: Scalars['String']['input'];
  partyId: Scalars['ID']['input'];
};


export type MutationAddPictureArgs = {
  input: PictureInput;
};


export type MutationDeleteAuthDeviceArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDenyRoomArgs = {
  attendingId: Scalars['ID']['input'];
};


export type MutationDonateArgs = {
  amount: Scalars['Float']['input'];
  dedication?: InputMaybe<DonationDedication>;
  incognito?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationGeneratePasskeyLoginOptionsArgs = {
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationGeneratePasskeyRegisterOptionsArgs = {
  userId: Scalars['String']['input'];
};


export type MutationGrantRoomArgs = {
  attendingId: Scalars['ID']['input'];
};


export type MutationLeaveEventArgs = {
  id: Scalars['ID']['input'];
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


export type MutationParticipateInEventArgs = {
  id: Scalars['ID']['input'];
};


export type MutationPlanEventArgs = {
  input: EventInput;
};


export type MutationRecindRoomArgs = {
  partyId: Scalars['ID']['input'];
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


export type MutationRemoveAttendanceArgs = {
  partyId: Scalars['ID']['input'];
  userId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRequestRoomArgs = {
  partyId: Scalars['ID']['input'];
};


export type MutationRescindDonationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSendMagicLinkArgs = {
  email: Scalars['String']['input'];
};


export type MutationSetAttendanceArgs = {
  dates: Array<Scalars['Date']['input']>;
  partyId: Scalars['ID']['input'];
  userId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationSetGamesPlayedArgs = {
  gameIds: Array<Scalars['ID']['input']>;
  partyId: Scalars['ID']['input'];
};


export type MutationSyncCacheArgs = {
  clear?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateAuthDeviceArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationUpdatePartyArgs = {
  input: PartyInput;
};


export type MutationUpdateProfileArgs = {
  input: ProfileInput;
};

export type Party = {
  __typename?: 'Party';
  attendings: Array<Attending>;
  donations: Array<Donation>;
  endDate: Scalars['Date']['output'];
  events: Array<Event>;
  gamesPlayed: Array<GameOnParty>;
  id: Scalars['ID']['output'];
  location: Scalars['String']['output'];
  locationWidgetSrc?: Maybe<Scalars['String']['output']>;
  pictures: Array<Picture>;
  rentalCosts: Scalars['Float']['output'];
  roomsAvailable: Scalars['Int']['output'];
  startDate: Scalars['Date']['output'];
};

export type PartyInput = {
  endDate: Scalars['Date']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  location: Scalars['String']['input'];
  locationWidgetSrc?: InputMaybe<Scalars['String']['input']>;
  roomsAvailable: Scalars['Int']['input'];
  startDate: Scalars['Date']['input'];
};

export type Picture = {
  __typename?: 'Picture';
  id: Scalars['ID']['output'];
  meta: PictureMeta;
  party: Party;
  tags: Array<PictureTag>;
  url: Scalars['String']['output'];
};

export type PictureInput = {
  file: Scalars['File']['input'];
  name: Scalars['String']['input'];
  partyId: Scalars['ID']['input'];
  tags?: InputMaybe<Array<PictureTagInput>>;
};

export type PictureMeta = {
  __typename?: 'PictureMeta';
  altitude?: Maybe<Scalars['Float']['output']>;
  height: Scalars['Int']['output'];
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  takeAt?: Maybe<Scalars['DateTime']['output']>;
  width: Scalars['Int']['output'];
};

export type PictureTag = {
  __typename?: 'PictureTag';
  boundingBox: Scalars['BoundingBox']['output'];
  id: Scalars['ID']['output'];
  picture: Picture;
  user: User;
};

export type PictureTagInput = {
  boundingBox: Scalars['BoundingBox']['input'];
  userId: Scalars['ID']['input'];
};

export type ProfileInput = {
  avatar?: InputMaybe<Scalars['File']['input']>;
  displayName: Scalars['String']['input'];
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  games: Array<Game>;
  me?: Maybe<User>;
  nextParty?: Maybe<Party>;
  parties: Array<Party>;
  party?: Maybe<Party>;
  users: Array<User>;
};


export type QueryPartyArgs = {
  id: Scalars['ID']['input'];
};

export type RegisterDeviceResponse = {
  __typename?: 'RegisterDeviceResponse';
  device: AuthDevice;
  token: Scalars['String']['output'];
};

export type RegisterResponse = {
  __typename?: 'RegisterResponse';
  refreshToken: Scalars['String']['output'];
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
  devices: Array<AuthDevice>;
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
  AddGameResult: ResolverTypeWrapper<Omit<AddGameResult, 'attending' | 'game'> & { attending: ResolversTypes['Attending'], game: ResolversTypes['Game'] }>;
  Attending: ResolverTypeWrapper<AttendingMapper>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  AuthDevice: ResolverTypeWrapper<AuthDeviceMapper>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  AuthResponse: ResolverTypeWrapper<AuthResponse>;
  BoundingBox: ResolverTypeWrapper<Scalars['BoundingBox']['output']>;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  Donation: ResolverTypeWrapper<DonationMapper>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  DonationDedication: DonationDedication;
  Event: ResolverTypeWrapper<EventMapper>;
  EventInput: EventInput;
  File: ResolverTypeWrapper<Scalars['File']['output']>;
  Game: ResolverTypeWrapper<GameMapper>;
  GameOnParty: ResolverTypeWrapper<Omit<GameOnParty, 'game' | 'party' | 'players'> & { game: ResolversTypes['Game'], party: ResolversTypes['Party'], players: Array<ResolversTypes['User']> }>;
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
  JWT: ResolverTypeWrapper<Scalars['JWT']['output']>;
  LoginResponse: ResolverTypeWrapper<LoginResponse>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Party: ResolverTypeWrapper<PartyMapper>;
  PartyInput: PartyInput;
  Picture: ResolverTypeWrapper<PictureMapper>;
  PictureInput: PictureInput;
  PictureMeta: ResolverTypeWrapper<PictureMeta>;
  PictureTag: ResolverTypeWrapper<PictureTagMapper>;
  PictureTagInput: PictureTagInput;
  ProfileInput: ProfileInput;
  Query: ResolverTypeWrapper<{}>;
  RegisterDeviceResponse: ResolverTypeWrapper<Omit<RegisterDeviceResponse, 'device'> & { device: ResolversTypes['AuthDevice'] }>;
  RegisterResponse: ResolverTypeWrapper<Omit<RegisterResponse, 'user'> & { user: ResolversTypes['User'] }>;
  RoomStatus: RoomStatus;
  Time: ResolverTypeWrapper<Scalars['Time']['output']>;
  User: ResolverTypeWrapper<UserMapper>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AddGameResult: Omit<AddGameResult, 'attending' | 'game'> & { attending: ResolversParentTypes['Attending'], game: ResolversParentTypes['Game'] };
  Attending: AttendingMapper;
  ID: Scalars['ID']['output'];
  AuthDevice: AuthDeviceMapper;
  String: Scalars['String']['output'];
  AuthResponse: AuthResponse;
  BoundingBox: Scalars['BoundingBox']['output'];
  Date: Scalars['Date']['output'];
  DateTime: Scalars['DateTime']['output'];
  Donation: DonationMapper;
  Float: Scalars['Float']['output'];
  Event: EventMapper;
  EventInput: EventInput;
  File: Scalars['File']['output'];
  Game: GameMapper;
  GameOnParty: Omit<GameOnParty, 'game' | 'party' | 'players'> & { game: ResolversParentTypes['Game'], party: ResolversParentTypes['Party'], players: Array<ResolversParentTypes['User']> };
  JSON: Scalars['JSON']['output'];
  JWT: Scalars['JWT']['output'];
  LoginResponse: LoginResponse;
  Int: Scalars['Int']['output'];
  Mutation: {};
  Boolean: Scalars['Boolean']['output'];
  Party: PartyMapper;
  PartyInput: PartyInput;
  Picture: PictureMapper;
  PictureInput: PictureInput;
  PictureMeta: PictureMeta;
  PictureTag: PictureTagMapper;
  PictureTagInput: PictureTagInput;
  ProfileInput: ProfileInput;
  Query: {};
  RegisterDeviceResponse: Omit<RegisterDeviceResponse, 'device'> & { device: ResolversParentTypes['AuthDevice'] };
  RegisterResponse: Omit<RegisterResponse, 'user'> & { user: ResolversParentTypes['User'] };
  Time: Scalars['Time']['output'];
  User: UserMapper;
};

export type AddGameResultResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AddGameResult'] = ResolversParentTypes['AddGameResult']> = {
  attending?: Resolver<ResolversTypes['Attending'], ParentType, ContextType>;
  game?: Resolver<ResolversTypes['Game'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AttendingResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Attending'] = ResolversParentTypes['Attending']> = {
  dates?: Resolver<Array<ResolversTypes['Date']>, ParentType, ContextType>;
  gamesPlayed?: Resolver<Array<ResolversTypes['Game']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  party?: Resolver<ResolversTypes['Party'], ParentType, ContextType>;
  room?: Resolver<Maybe<ResolversTypes['RoomStatus']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthDeviceResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AuthDevice'] = ResolversParentTypes['AuthDevice']> = {
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastUsedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AuthResponse'] = ResolversParentTypes['AuthResponse']> = {
  refreshToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['JWT'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface BoundingBoxScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BoundingBox'], any> {
  name: 'BoundingBox';
}

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DonationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Donation'] = ResolversParentTypes['Donation']> = {
  amount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  dedication?: Resolver<ResolversTypes['DonationDedication'], ParentType, ContextType>;
  donator?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  party?: Resolver<ResolversTypes['Party'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EventResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Event'] = ResolversParentTypes['Event']> = {
  date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  organizer?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  participants?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  party?: Resolver<ResolversTypes['Party'], ParentType, ContextType>;
  startTime?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface FileScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['File'], any> {
  name: 'File';
}

export type GameResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Game'] = ResolversParentTypes['Game']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  players?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GameOnPartyResolvers<ContextType = Context, ParentType extends ResolversParentTypes['GameOnParty'] = ResolversParentTypes['GameOnParty']> = {
  game?: Resolver<ResolversTypes['Game'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  party?: Resolver<ResolversTypes['Party'], ParentType, ContextType>;
  players?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export interface JwtScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JWT'], any> {
  name: 'JWT';
}

export type LoginResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['LoginResponse'] = ResolversParentTypes['LoginResponse']> = {
  credentialID?: Resolver<Array<ResolversTypes['Int']>, ParentType, ContextType>;
  refreshToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['JWT'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addGameToParty?: Resolver<ResolversTypes['AddGameResult'], ParentType, ContextType, RequireFields<MutationAddGameToPartyArgs, 'name' | 'partyId'>>;
  addPicture?: Resolver<ResolversTypes['Picture'], ParentType, ContextType, RequireFields<MutationAddPictureArgs, 'input'>>;
  deleteAuthDevice?: Resolver<ResolversTypes['AuthDevice'], ParentType, ContextType, RequireFields<MutationDeleteAuthDeviceArgs, 'id'>>;
  denyRoom?: Resolver<Maybe<ResolversTypes['Attending']>, ParentType, ContextType, RequireFields<MutationDenyRoomArgs, 'attendingId'>>;
  donate?: Resolver<ResolversTypes['Donation'], ParentType, ContextType, RequireFields<MutationDonateArgs, 'amount'>>;
  generatePasskeyLoginOptions?: Resolver<ResolversTypes['JSON'], ParentType, ContextType, Partial<MutationGeneratePasskeyLoginOptionsArgs>>;
  generatePasskeyRegisterOptions?: Resolver<ResolversTypes['JSON'], ParentType, ContextType, RequireFields<MutationGeneratePasskeyRegisterOptionsArgs, 'userId'>>;
  grantRoom?: Resolver<Maybe<ResolversTypes['Attending']>, ParentType, ContextType, RequireFields<MutationGrantRoomArgs, 'attendingId'>>;
  leaveEvent?: Resolver<ResolversTypes['Event'], ParentType, ContextType, RequireFields<MutationLeaveEventArgs, 'id'>>;
  loginMagicLink?: Resolver<ResolversTypes['AuthResponse'], ParentType, ContextType, RequireFields<MutationLoginMagicLinkArgs, 'magicLinkId'>>;
  loginPasskey?: Resolver<ResolversTypes['LoginResponse'], ParentType, ContextType, RequireFields<MutationLoginPasskeyArgs, 'response'>>;
  loginPassword?: Resolver<ResolversTypes['AuthResponse'], ParentType, ContextType, RequireFields<MutationLoginPasswordArgs, 'email' | 'password'>>;
  participateInEvent?: Resolver<ResolversTypes['Event'], ParentType, ContextType, RequireFields<MutationParticipateInEventArgs, 'id'>>;
  planEvent?: Resolver<ResolversTypes['Event'], ParentType, ContextType, RequireFields<MutationPlanEventArgs, 'input'>>;
  recindRoom?: Resolver<Maybe<ResolversTypes['Attending']>, ParentType, ContextType, RequireFields<MutationRecindRoomArgs, 'partyId'>>;
  refreshLogin?: Resolver<ResolversTypes['AuthResponse'], ParentType, ContextType, RequireFields<MutationRefreshLoginArgs, 'refreshToken'>>;
  register?: Resolver<ResolversTypes['RegisterResponse'], ParentType, ContextType, RequireFields<MutationRegisterArgs, 'email' | 'userName'>>;
  registerPasskey?: Resolver<ResolversTypes['RegisterDeviceResponse'], ParentType, ContextType, RequireFields<MutationRegisterPasskeyArgs, 'name' | 'response' | 'userId'>>;
  removeAttendance?: Resolver<ResolversTypes['Party'], ParentType, ContextType, RequireFields<MutationRemoveAttendanceArgs, 'partyId'>>;
  requestRoom?: Resolver<Maybe<ResolversTypes['Attending']>, ParentType, ContextType, RequireFields<MutationRequestRoomArgs, 'partyId'>>;
  rescindDonation?: Resolver<ResolversTypes['Donation'], ParentType, ContextType, RequireFields<MutationRescindDonationArgs, 'id'>>;
  sendMagicLink?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationSendMagicLinkArgs, 'email'>>;
  setAttendance?: Resolver<ResolversTypes['Party'], ParentType, ContextType, RequireFields<MutationSetAttendanceArgs, 'dates' | 'partyId'>>;
  setGamesPlayed?: Resolver<ResolversTypes['Attending'], ParentType, ContextType, RequireFields<MutationSetGamesPlayedArgs, 'gameIds' | 'partyId'>>;
  syncCache?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationSyncCacheArgs>>;
  updateAuthDevice?: Resolver<ResolversTypes['AuthDevice'], ParentType, ContextType, RequireFields<MutationUpdateAuthDeviceArgs, 'id' | 'name'>>;
  updateParty?: Resolver<ResolversTypes['Party'], ParentType, ContextType, RequireFields<MutationUpdatePartyArgs, 'input'>>;
  updateProfile?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUpdateProfileArgs, 'input'>>;
};

export type PartyResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Party'] = ResolversParentTypes['Party']> = {
  attendings?: Resolver<Array<ResolversTypes['Attending']>, ParentType, ContextType>;
  donations?: Resolver<Array<ResolversTypes['Donation']>, ParentType, ContextType>;
  endDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  events?: Resolver<Array<ResolversTypes['Event']>, ParentType, ContextType>;
  gamesPlayed?: Resolver<Array<ResolversTypes['GameOnParty']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  location?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  locationWidgetSrc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pictures?: Resolver<Array<ResolversTypes['Picture']>, ParentType, ContextType>;
  rentalCosts?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  roomsAvailable?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  startDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PictureResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Picture'] = ResolversParentTypes['Picture']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  meta?: Resolver<ResolversTypes['PictureMeta'], ParentType, ContextType>;
  party?: Resolver<ResolversTypes['Party'], ParentType, ContextType>;
  tags?: Resolver<Array<ResolversTypes['PictureTag']>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PictureMetaResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PictureMeta'] = ResolversParentTypes['PictureMeta']> = {
  altitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  height?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  takeAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  width?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PictureTagResolvers<ContextType = Context, ParentType extends ResolversParentTypes['PictureTag'] = ResolversParentTypes['PictureTag']> = {
  boundingBox?: Resolver<ResolversTypes['BoundingBox'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  picture?: Resolver<ResolversTypes['Picture'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  games?: Resolver<Array<ResolversTypes['Game']>, ParentType, ContextType>;
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  nextParty?: Resolver<Maybe<ResolversTypes['Party']>, ParentType, ContextType>;
  parties?: Resolver<Array<ResolversTypes['Party']>, ParentType, ContextType>;
  party?: Resolver<Maybe<ResolversTypes['Party']>, ParentType, ContextType, RequireFields<QueryPartyArgs, 'id'>>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
};

export type RegisterDeviceResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RegisterDeviceResponse'] = ResolversParentTypes['RegisterDeviceResponse']> = {
  device?: Resolver<ResolversTypes['AuthDevice'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RegisterResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RegisterResponse'] = ResolversParentTypes['RegisterResponse']> = {
  refreshToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Time'], any> {
  name: 'Time';
}

export type UserResolvers<ContextType = Context, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  avatar?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  avatarUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  devices?: Resolver<Array<ResolversTypes['AuthDevice']>, ParentType, ContextType>;
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = Context> = {
  AddGameResult?: AddGameResultResolvers<ContextType>;
  Attending?: AttendingResolvers<ContextType>;
  AuthDevice?: AuthDeviceResolvers<ContextType>;
  AuthResponse?: AuthResponseResolvers<ContextType>;
  BoundingBox?: GraphQLScalarType;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  Donation?: DonationResolvers<ContextType>;
  Event?: EventResolvers<ContextType>;
  File?: GraphQLScalarType;
  Game?: GameResolvers<ContextType>;
  GameOnParty?: GameOnPartyResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  JWT?: GraphQLScalarType;
  LoginResponse?: LoginResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Party?: PartyResolvers<ContextType>;
  Picture?: PictureResolvers<ContextType>;
  PictureMeta?: PictureMetaResolvers<ContextType>;
  PictureTag?: PictureTagResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RegisterDeviceResponse?: RegisterDeviceResponseResolvers<ContextType>;
  RegisterResponse?: RegisterResponseResolvers<ContextType>;
  Time?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
};

