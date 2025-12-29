import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from "graphql";
import {
  AttendingMapper,
  PartyMapper,
  PictureMapper,
  PictureTagMapper,
} from "./party/schema.mappers";
import { AuthDeviceMapper, UserMapper } from "./user/schema.mappers";
import { DonationMapper } from "./donation/schema.mappers";
import { EventMapper } from "./events/schema.mappers";
import { GameMapper } from "./game/schema.mappers";
import { MoneyTransferMapper } from "./money/schema.mappers";
import { Context } from "./context";
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
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
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type EnumResolverSignature<T, AllowedValues = any> = {
  [key in keyof T]?: AllowedValues;
};
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string | number };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  BoundingBox: {
    input: { x: number; y: number; width: number; height: number };
    output: { x: number; y: number; width: number; height: number };
  };
  Date: { input: Date | string; output: Date | string };
  DateTime: { input: Date | string; output: Date | string };
  File: { input: File; output: File };
  JSON: { input: any; output: any };
  JWT: { input: string; output: string };
  Time: { input: Date | string; output: Date | string };
};

export type AddGameResult = {
  __typename?: "AddGameResult";
  attending: Attending;
  game: Game;
};

export type Attending = {
  __typename?: "Attending";
  applicationDate: Scalars["Date"]["output"];
  checkIn?: Maybe<Scalars["DateTime"]["output"]>;
  checkOut?: Maybe<Scalars["DateTime"]["output"]>;
  dates: Array<Scalars["Date"]["output"]>;
  gamesPlayed: Array<Game>;
  id: Scalars["ID"]["output"];
  notificationSent?: Maybe<Scalars["DateTime"]["output"]>;
  paidDues: Scalars["Float"]["output"];
  party: Party;
  rentDues?: Maybe<Scalars["Float"]["output"]>;
  room?: Maybe<RoomStatus>;
  user: User;
};

export type AuthDevice = {
  __typename?: "AuthDevice";
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  id: Scalars["ID"]["output"];
  lastUsedAt?: Maybe<Scalars["DateTime"]["output"]>;
  name: Scalars["String"]["output"];
};

export type AuthResponse = {
  __typename?: "AuthResponse";
  refreshToken: Scalars["String"]["output"];
  token: Scalars["JWT"]["output"];
};

export type CacheEntry = {
  __typename?: "CacheEntry";
  patches: Array<CachePatch>;
  sheet: Scalars["String"]["output"];
};

export type CacheInfo = {
  __typename?: "CacheInfo";
  entries: Array<CacheEntry>;
  lastSync?: Maybe<Scalars["DateTime"]["output"]>;
};

export type CachePatch = {
  __typename?: "CachePatch";
  id: Scalars["ID"]["output"];
  operations: Scalars["JSON"]["output"];
};

export type Donation = {
  __typename?: "Donation";
  amount: Scalars["Float"]["output"];
  dedication: DonationDedication;
  donator?: Maybe<User>;
  id: Scalars["ID"]["output"];
  party: Party;
  received: Scalars["Boolean"]["output"];
};

export type DonationDedication = "RENT" | "WARCHEST";

export type Event = {
  __typename?: "Event";
  date?: Maybe<Scalars["Date"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  endTime?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  image: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  organizer: User;
  participants: Array<User>;
  party: Party;
  startTime?: Maybe<Scalars["String"]["output"]>;
};

export type EventInput = {
  date?: InputMaybe<Scalars["Date"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  endTime?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  image?: InputMaybe<Scalars["File"]["input"]>;
  name: Scalars["String"]["input"];
  partyId: Scalars["ID"]["input"];
  startTime?: InputMaybe<Scalars["String"]["input"]>;
};

export type Game = {
  __typename?: "Game";
  id: Scalars["ID"]["output"];
  image: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  players: Array<User>;
};

export type GameInput = {
  id: Scalars["ID"]["input"];
  image: Scalars["File"]["input"];
};

export type GameOnParty = {
  __typename?: "GameOnParty";
  game: Game;
  id: Scalars["ID"]["output"];
  party: Party;
  players: Array<User>;
};

export type Location = {
  __typename?: "Location";
  latitude: Scalars["Float"]["output"];
  longitude: Scalars["Float"]["output"];
  timestamp: Scalars["DateTime"]["output"];
};

export type LoginResponse = {
  __typename?: "LoginResponse";
  credentialID: Array<Scalars["Int"]["output"]>;
  refreshToken: Scalars["String"]["output"];
  token: Scalars["JWT"]["output"];
};

export type MoneyTransfer = {
  __typename?: "MoneyTransfer";
  amount: Scalars["Float"]["output"];
  correlationId?: Maybe<Scalars["ID"]["output"]>;
  id: Scalars["ID"]["output"];
  note?: Maybe<Scalars["String"]["output"]>;
  valuationDate: Scalars["Date"]["output"];
};

export type Mutation = {
  __typename?: "Mutation";
  addGameToParty: AddGameResult;
  addPicture: Picture;
  capturePayPalOrder?: Maybe<Attending>;
  checkIn?: Maybe<Attending>;
  checkOut?: Maybe<Attending>;
  createPayPalOrder: Scalars["ID"]["output"];
  createPurchase: Purchase;
  deleteAuthDevice: AuthDevice;
  denyRoom?: Maybe<Attending>;
  donate: Donation;
  generatePasskeyLoginOptions: Scalars["JSON"]["output"];
  generatePasskeyRegisterOptions: Scalars["JSON"]["output"];
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
  removeProfilePicture: User;
  requestRoom?: Maybe<Attending>;
  rescindDonation: Donation;
  sendMagicLink: Scalars["Boolean"]["output"];
  sendPaymentNotification: Attending;
  sendPaymentNotificationToAll: Array<Attending>;
  setAttendance: Party;
  setGamesPlayed: Attending;
  syncCache?: Maybe<Scalars["Boolean"]["output"]>;
  updateAuthDevice: AuthDevice;
  updateGame: Game;
  updateLocation: User;
  updatePaidDues?: Maybe<Attending>;
  updateParty: Party;
  updateProfile: User;
  updatePurchaseStatus: Purchase;
  updateRoles: User;
  voteOnPurchase: Purchase;
};

export type MutationaddGameToPartyArgs = {
  name: Scalars["String"]["input"];
  partyId: Scalars["ID"]["input"];
};

export type MutationaddPictureArgs = {
  input: PictureInput;
};

export type MutationcapturePayPalOrderArgs = {
  orderId: Scalars["ID"]["input"];
};

export type MutationcheckInArgs = {
  userId: Scalars["ID"]["input"];
};

export type MutationcheckOutArgs = {
  userId: Scalars["ID"]["input"];
};

export type MutationcreatePurchaseArgs = {
  description: Scalars["String"]["input"];
  estimatedCost: Scalars["Float"]["input"];
  title: Scalars["String"]["input"];
};

export type MutationdeleteAuthDeviceArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationdenyRoomArgs = {
  attendingId: Scalars["ID"]["input"];
};

export type MutationdonateArgs = {
  amount: Scalars["Float"]["input"];
  dedication?: InputMaybe<DonationDedication>;
  incognito?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationgeneratePasskeyLoginOptionsArgs = {
  userId?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationgeneratePasskeyRegisterOptionsArgs = {
  userId: Scalars["String"]["input"];
};

export type MutationgrantRoomArgs = {
  attendingId: Scalars["ID"]["input"];
};

export type MutationleaveEventArgs = {
  id: Scalars["ID"]["input"];
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type MutationloginMagicLinkArgs = {
  magicLinkId: Scalars["String"]["input"];
};

export type MutationloginPasskeyArgs = {
  response: Scalars["JSON"]["input"];
};

export type MutationloginPasswordArgs = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type MutationparticipateInEventArgs = {
  id: Scalars["ID"]["input"];
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type MutationplanEventArgs = {
  input: EventInput;
};

export type MutationrecindRoomArgs = {
  partyId: Scalars["ID"]["input"];
};

export type MutationrefreshLoginArgs = {
  refreshToken: Scalars["String"]["input"];
};

export type MutationregisterArgs = {
  email: Scalars["String"]["input"];
  password?: InputMaybe<Scalars["String"]["input"]>;
  userName: Scalars["String"]["input"];
};

export type MutationregisterPasskeyArgs = {
  name: Scalars["String"]["input"];
  response: Scalars["JSON"]["input"];
  userId: Scalars["String"]["input"];
};

export type MutationremoveAttendanceArgs = {
  partyId: Scalars["ID"]["input"];
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type MutationrequestRoomArgs = {
  partyId: Scalars["ID"]["input"];
};

export type MutationrescindDonationArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationsendMagicLinkArgs = {
  email: Scalars["String"]["input"];
};

export type MutationsendPaymentNotificationArgs = {
  userId: Scalars["ID"]["input"];
};

export type MutationsetAttendanceArgs = {
  dates: Array<Scalars["Date"]["input"]>;
  partyId: Scalars["ID"]["input"];
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type MutationsetGamesPlayedArgs = {
  gameIds: Array<Scalars["ID"]["input"]>;
  partyId: Scalars["ID"]["input"];
};

export type MutationsyncCacheArgs = {
  clear?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationupdateAuthDeviceArgs = {
  id: Scalars["ID"]["input"];
  name: Scalars["String"]["input"];
};

export type MutationupdateGameArgs = {
  input: GameInput;
};

export type MutationupdateLocationArgs = {
  latitude: Scalars["Float"]["input"];
  longitude: Scalars["Float"]["input"];
};

export type MutationupdatePaidDuesArgs = {
  attendingId: Scalars["ID"]["input"];
  paidDues: Scalars["Float"]["input"];
};

export type MutationupdatePartyArgs = {
  input: PartyInput;
};

export type MutationupdateProfileArgs = {
  input: ProfileInput;
};

export type MutationupdatePurchaseStatusArgs = {
  purchaseId: Scalars["ID"]["input"];
  status: PurchaseStatus;
};

export type MutationupdateRolesArgs = {
  id: Scalars["ID"]["input"];
  roles: Array<Role>;
};

export type MutationvoteOnPurchaseArgs = {
  purchaseId: Scalars["ID"]["input"];
  vote: VoteValue;
};

export type Party = {
  __typename?: "Party";
  attending?: Maybe<Attending>;
  attendings: Array<Attending>;
  costPerDay: Scalars["Float"]["output"];
  donations: Array<Donation>;
  endDate: Scalars["Date"]["output"];
  events: Array<Event>;
  feedingCosts: Scalars["Float"]["output"];
  gamesPlayed: Array<GameOnParty>;
  id: Scalars["ID"]["output"];
  latitude: Scalars["Float"]["output"];
  location: Scalars["String"]["output"];
  locationWidgetSrc?: Maybe<Scalars["String"]["output"]>;
  longitude: Scalars["Float"]["output"];
  paidDues?: Maybe<Scalars["Float"]["output"]>;
  payday?: Maybe<Scalars["Date"]["output"]>;
  pictures: Array<Picture>;
  registrationDeadline?: Maybe<Scalars["Date"]["output"]>;
  rentalCosts: Scalars["Float"]["output"];
  roomsAvailable: Scalars["Int"]["output"];
  seatsAvailable: Scalars["Int"]["output"];
  startDate: Scalars["Date"]["output"];
  tentative: Scalars["Boolean"]["output"];
};

export type PartyattendingArgs = {
  userId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type PartyInput = {
  endDate: Scalars["Date"]["input"];
  id?: InputMaybe<Scalars["ID"]["input"]>;
  location: Scalars["String"]["input"];
  locationWidgetSrc?: InputMaybe<Scalars["String"]["input"]>;
  roomsAvailable: Scalars["Int"]["input"];
  startDate: Scalars["Date"]["input"];
};

export type Picture = {
  __typename?: "Picture";
  id: Scalars["ID"]["output"];
  meta: PictureMeta;
  party: Party;
  tags: Array<PictureTag>;
  url: Scalars["String"]["output"];
};

export type PictureInput = {
  file: Scalars["File"]["input"];
  name: Scalars["String"]["input"];
  partyId: Scalars["ID"]["input"];
  tags?: InputMaybe<Array<PictureTagInput>>;
};

export type PictureMeta = {
  __typename?: "PictureMeta";
  altitude?: Maybe<Scalars["Float"]["output"]>;
  height: Scalars["Int"]["output"];
  latitude?: Maybe<Scalars["Float"]["output"]>;
  longitude?: Maybe<Scalars["Float"]["output"]>;
  takeAt?: Maybe<Scalars["DateTime"]["output"]>;
  width: Scalars["Int"]["output"];
};

export type PictureTag = {
  __typename?: "PictureTag";
  boundingBox: Scalars["BoundingBox"]["output"];
  id: Scalars["ID"]["output"];
  picture: Picture;
  user: User;
};

export type PictureTagInput = {
  boundingBox: Scalars["BoundingBox"]["input"];
  userId: Scalars["ID"]["input"];
};

export type ProfileInput = {
  avatar?: InputMaybe<Scalars["File"]["input"]>;
  displayName: Scalars["String"]["input"];
  email: Scalars["String"]["input"];
  id?: InputMaybe<Scalars["ID"]["input"]>;
  name: Scalars["String"]["input"];
  password?: InputMaybe<Scalars["String"]["input"]>;
};

export type Purchase = {
  __typename?: "Purchase";
  createdAt: Scalars["String"]["output"];
  description: Scalars["String"]["output"];
  estimatedCost: Scalars["Float"]["output"];
  id: Scalars["ID"]["output"];
  proposer: User;
  status: PurchaseStatus;
  title: Scalars["String"]["output"];
  userVote?: Maybe<PurchaseVote>;
  voteCount: VoteCount;
  votes: Array<PurchaseVote>;
};

export type PurchaseStatus = "APPROVED" | "COMPLETED" | "PROPOSED" | "REJECTED";

export type PurchaseVote = {
  __typename?: "PurchaseVote";
  createdAt: Scalars["String"]["output"];
  user: User;
  vote: VoteValue;
};

export type Query = {
  __typename?: "Query";
  games: Array<Game>;
  getCacheInfo?: Maybe<CacheInfo>;
  me?: Maybe<User>;
  moneyTransfers: Array<MoneyTransfer>;
  nextParty?: Maybe<Party>;
  parties: Array<Party>;
  party?: Maybe<Party>;
  purchase?: Maybe<Purchase>;
  purchases: Array<Purchase>;
  users: Array<User>;
};

export type QuerypartyArgs = {
  id: Scalars["ID"]["input"];
};

export type QuerypurchaseArgs = {
  id: Scalars["ID"]["input"];
};

export type RegisterDeviceResponse = {
  __typename?: "RegisterDeviceResponse";
  device: AuthDevice;
  token: Scalars["String"]["output"];
};

export type RegisterResponse = {
  __typename?: "RegisterResponse";
  refreshToken: Scalars["String"]["output"];
  token: Scalars["String"]["output"];
  user: User;
};

export type Role = "Admin" | "Bookkeeper" | "Doorkeeper" | "Trusted";

export type RoomStatus = "GRANTED" | "REQUESTED";

export type User = {
  __typename?: "User";
  avatar: Scalars["String"]["output"];
  avatarUrl?: Maybe<Scalars["String"]["output"]>;
  devices: Array<AuthDevice>;
  displayName: Scalars["String"]["output"];
  email: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  lastKnownLocation?: Maybe<Location>;
  locations: Array<Location>;
  name: Scalars["String"]["output"];
  roles: Array<Role>;
};

export type VoteCount = {
  __typename?: "VoteCount";
  abstain: Scalars["Int"]["output"];
  no: Scalars["Int"]["output"];
  yes: Scalars["Int"]["output"];
};

export type VoteValue = "ABSTAIN" | "NO" | "YES";

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
  AddGameResult: ResolverTypeWrapper<
    Omit<AddGameResult, "attending" | "game"> & {
      attending: ResolversTypes["Attending"];
      game: ResolversTypes["Game"];
    }
  >;
  Attending: ResolverTypeWrapper<AttendingMapper>;
  ID: ResolverTypeWrapper<Scalars["ID"]["output"]>;
  Float: ResolverTypeWrapper<Scalars["Float"]["output"]>;
  AuthDevice: ResolverTypeWrapper<AuthDeviceMapper>;
  String: ResolverTypeWrapper<Scalars["String"]["output"]>;
  AuthResponse: ResolverTypeWrapper<AuthResponse>;
  BoundingBox: ResolverTypeWrapper<Scalars["BoundingBox"]["output"]>;
  CacheEntry: ResolverTypeWrapper<CacheEntry>;
  CacheInfo: ResolverTypeWrapper<CacheInfo>;
  CachePatch: ResolverTypeWrapper<CachePatch>;
  Date: ResolverTypeWrapper<Scalars["Date"]["output"]>;
  DateTime: ResolverTypeWrapper<Scalars["DateTime"]["output"]>;
  Donation: ResolverTypeWrapper<DonationMapper>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]["output"]>;
  DonationDedication: ResolverTypeWrapper<"RENT" | "WARCHEST">;
  Event: ResolverTypeWrapper<EventMapper>;
  EventInput: EventInput;
  File: ResolverTypeWrapper<Scalars["File"]["output"]>;
  Game: ResolverTypeWrapper<GameMapper>;
  GameInput: GameInput;
  GameOnParty: ResolverTypeWrapper<
    Omit<GameOnParty, "game" | "party" | "players"> & {
      game: ResolversTypes["Game"];
      party: ResolversTypes["Party"];
      players: Array<ResolversTypes["User"]>;
    }
  >;
  JSON: ResolverTypeWrapper<Scalars["JSON"]["output"]>;
  JWT: ResolverTypeWrapper<Scalars["JWT"]["output"]>;
  Location: ResolverTypeWrapper<Location>;
  LoginResponse: ResolverTypeWrapper<LoginResponse>;
  Int: ResolverTypeWrapper<Scalars["Int"]["output"]>;
  MoneyTransfer: ResolverTypeWrapper<MoneyTransferMapper>;
  Mutation: ResolverTypeWrapper<{}>;
  Party: ResolverTypeWrapper<PartyMapper>;
  PartyInput: PartyInput;
  Picture: ResolverTypeWrapper<PictureMapper>;
  PictureInput: PictureInput;
  PictureMeta: ResolverTypeWrapper<PictureMeta>;
  PictureTag: ResolverTypeWrapper<PictureTagMapper>;
  PictureTagInput: PictureTagInput;
  ProfileInput: ProfileInput;
  Purchase: ResolverTypeWrapper<
    Omit<Purchase, "proposer" | "status" | "userVote" | "votes"> & {
      proposer: ResolversTypes["User"];
      status: ResolversTypes["PurchaseStatus"];
      userVote?: Maybe<ResolversTypes["PurchaseVote"]>;
      votes: Array<ResolversTypes["PurchaseVote"]>;
    }
  >;
  PurchaseStatus: ResolverTypeWrapper<
    "PROPOSED" | "APPROVED" | "REJECTED" | "COMPLETED"
  >;
  PurchaseVote: ResolverTypeWrapper<
    Omit<PurchaseVote, "user" | "vote"> & {
      user: ResolversTypes["User"];
      vote: ResolversTypes["VoteValue"];
    }
  >;
  Query: ResolverTypeWrapper<{}>;
  RegisterDeviceResponse: ResolverTypeWrapper<
    Omit<RegisterDeviceResponse, "device"> & {
      device: ResolversTypes["AuthDevice"];
    }
  >;
  RegisterResponse: ResolverTypeWrapper<
    Omit<RegisterResponse, "user"> & { user: ResolversTypes["User"] }
  >;
  Role: ResolverTypeWrapper<"Trusted" | "Admin" | "Doorkeeper" | "Bookkeeper">;
  RoomStatus: ResolverTypeWrapper<"REQUESTED" | "GRANTED">;
  Time: ResolverTypeWrapper<Scalars["Time"]["output"]>;
  User: ResolverTypeWrapper<UserMapper>;
  VoteCount: ResolverTypeWrapper<VoteCount>;
  VoteValue: ResolverTypeWrapper<"YES" | "NO" | "ABSTAIN">;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AddGameResult: Omit<AddGameResult, "attending" | "game"> & {
    attending: ResolversParentTypes["Attending"];
    game: ResolversParentTypes["Game"];
  };
  Attending: AttendingMapper;
  ID: Scalars["ID"]["output"];
  Float: Scalars["Float"]["output"];
  AuthDevice: AuthDeviceMapper;
  String: Scalars["String"]["output"];
  AuthResponse: AuthResponse;
  BoundingBox: Scalars["BoundingBox"]["output"];
  CacheEntry: CacheEntry;
  CacheInfo: CacheInfo;
  CachePatch: CachePatch;
  Date: Scalars["Date"]["output"];
  DateTime: Scalars["DateTime"]["output"];
  Donation: DonationMapper;
  Boolean: Scalars["Boolean"]["output"];
  Event: EventMapper;
  EventInput: EventInput;
  File: Scalars["File"]["output"];
  Game: GameMapper;
  GameInput: GameInput;
  GameOnParty: Omit<GameOnParty, "game" | "party" | "players"> & {
    game: ResolversParentTypes["Game"];
    party: ResolversParentTypes["Party"];
    players: Array<ResolversParentTypes["User"]>;
  };
  JSON: Scalars["JSON"]["output"];
  JWT: Scalars["JWT"]["output"];
  Location: Location;
  LoginResponse: LoginResponse;
  Int: Scalars["Int"]["output"];
  MoneyTransfer: MoneyTransferMapper;
  Mutation: {};
  Party: PartyMapper;
  PartyInput: PartyInput;
  Picture: PictureMapper;
  PictureInput: PictureInput;
  PictureMeta: PictureMeta;
  PictureTag: PictureTagMapper;
  PictureTagInput: PictureTagInput;
  ProfileInput: ProfileInput;
  Purchase: Omit<Purchase, "proposer" | "userVote" | "votes"> & {
    proposer: ResolversParentTypes["User"];
    userVote?: Maybe<ResolversParentTypes["PurchaseVote"]>;
    votes: Array<ResolversParentTypes["PurchaseVote"]>;
  };
  PurchaseVote: Omit<PurchaseVote, "user"> & {
    user: ResolversParentTypes["User"];
  };
  Query: {};
  RegisterDeviceResponse: Omit<RegisterDeviceResponse, "device"> & {
    device: ResolversParentTypes["AuthDevice"];
  };
  RegisterResponse: Omit<RegisterResponse, "user"> & {
    user: ResolversParentTypes["User"];
  };
  Time: Scalars["Time"]["output"];
  User: UserMapper;
  VoteCount: VoteCount;
};

export type rbacDirectiveArgs = {};

export type rbacDirectiveResolver<
  Result,
  Parent,
  ContextType = Context,
  Args = rbacDirectiveArgs,
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AddGameResultResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["AddGameResult"] = ResolversParentTypes["AddGameResult"],
> = {
  attending?: Resolver<ResolversTypes["Attending"], ParentType, ContextType>;
  game?: Resolver<ResolversTypes["Game"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AttendingResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["Attending"] = ResolversParentTypes["Attending"],
> = {
  applicationDate?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  checkIn?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  checkOut?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  dates?: Resolver<Array<ResolversTypes["Date"]>, ParentType, ContextType>;
  gamesPlayed?: Resolver<
    Array<ResolversTypes["Game"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  notificationSent?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  paidDues?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  party?: Resolver<ResolversTypes["Party"], ParentType, ContextType>;
  rentDues?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  room?: Resolver<Maybe<ResolversTypes["RoomStatus"]>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthDeviceResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["AuthDevice"] = ResolversParentTypes["AuthDevice"],
> = {
  createdAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  lastUsedAt?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthResponseResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["AuthResponse"] = ResolversParentTypes["AuthResponse"],
> = {
  refreshToken?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  token?: Resolver<ResolversTypes["JWT"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface BoundingBoxScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["BoundingBox"], any> {
  name: "BoundingBox";
}

export type CacheEntryResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["CacheEntry"] = ResolversParentTypes["CacheEntry"],
> = {
  patches?: Resolver<
    Array<ResolversTypes["CachePatch"]>,
    ParentType,
    ContextType
  >;
  sheet?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CacheInfoResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["CacheInfo"] = ResolversParentTypes["CacheInfo"],
> = {
  entries?: Resolver<
    Array<ResolversTypes["CacheEntry"]>,
    ParentType,
    ContextType
  >;
  lastSync?: Resolver<
    Maybe<ResolversTypes["DateTime"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CachePatchResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["CachePatch"] = ResolversParentTypes["CachePatch"],
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  operations?: Resolver<ResolversTypes["JSON"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Date"], any> {
  name: "Date";
}

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["DateTime"], any> {
  name: "DateTime";
}

export type DonationResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["Donation"] = ResolversParentTypes["Donation"],
> = {
  amount?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  dedication?: Resolver<
    ResolversTypes["DonationDedication"],
    ParentType,
    ContextType
  >;
  donator?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  party?: Resolver<ResolversTypes["Party"], ParentType, ContextType>;
  received?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DonationDedicationResolvers = EnumResolverSignature<
  { RENT?: any; WARCHEST?: any },
  ResolversTypes["DonationDedication"]
>;

export type EventResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["Event"] = ResolversParentTypes["Event"],
> = {
  date?: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  endTime?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  image?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  organizer?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  participants?: Resolver<
    Array<ResolversTypes["User"]>,
    ParentType,
    ContextType
  >;
  party?: Resolver<ResolversTypes["Party"], ParentType, ContextType>;
  startTime?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface FileScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["File"], any> {
  name: "File";
}

export type GameResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["Game"] = ResolversParentTypes["Game"],
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  image?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  players?: Resolver<Array<ResolversTypes["User"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GameOnPartyResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["GameOnParty"] = ResolversParentTypes["GameOnParty"],
> = {
  game?: Resolver<ResolversTypes["Game"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  party?: Resolver<ResolversTypes["Party"], ParentType, ContextType>;
  players?: Resolver<Array<ResolversTypes["User"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JSONScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["JSON"], any> {
  name: "JSON";
}

export interface JWTScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["JWT"], any> {
  name: "JWT";
}

export type LocationResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["Location"] = ResolversParentTypes["Location"],
> = {
  latitude?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  longitude?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LoginResponseResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["LoginResponse"] = ResolversParentTypes["LoginResponse"],
> = {
  credentialID?: Resolver<
    Array<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  refreshToken?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  token?: Resolver<ResolversTypes["JWT"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MoneyTransferResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["MoneyTransfer"] = ResolversParentTypes["MoneyTransfer"],
> = {
  amount?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  correlationId?: Resolver<
    Maybe<ResolversTypes["ID"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  note?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  valuationDate?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"],
> = {
  addGameToParty?: Resolver<
    ResolversTypes["AddGameResult"],
    ParentType,
    ContextType,
    RequireFields<MutationaddGameToPartyArgs, "name" | "partyId">
  >;
  addPicture?: Resolver<
    ResolversTypes["Picture"],
    ParentType,
    ContextType,
    RequireFields<MutationaddPictureArgs, "input">
  >;
  capturePayPalOrder?: Resolver<
    Maybe<ResolversTypes["Attending"]>,
    ParentType,
    ContextType,
    RequireFields<MutationcapturePayPalOrderArgs, "orderId">
  >;
  checkIn?: Resolver<
    Maybe<ResolversTypes["Attending"]>,
    ParentType,
    ContextType,
    RequireFields<MutationcheckInArgs, "userId">
  >;
  checkOut?: Resolver<
    Maybe<ResolversTypes["Attending"]>,
    ParentType,
    ContextType,
    RequireFields<MutationcheckOutArgs, "userId">
  >;
  createPayPalOrder?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  createPurchase?: Resolver<
    ResolversTypes["Purchase"],
    ParentType,
    ContextType,
    RequireFields<
      MutationcreatePurchaseArgs,
      "description" | "estimatedCost" | "title"
    >
  >;
  deleteAuthDevice?: Resolver<
    ResolversTypes["AuthDevice"],
    ParentType,
    ContextType,
    RequireFields<MutationdeleteAuthDeviceArgs, "id">
  >;
  denyRoom?: Resolver<
    Maybe<ResolversTypes["Attending"]>,
    ParentType,
    ContextType,
    RequireFields<MutationdenyRoomArgs, "attendingId">
  >;
  donate?: Resolver<
    ResolversTypes["Donation"],
    ParentType,
    ContextType,
    RequireFields<MutationdonateArgs, "amount">
  >;
  generatePasskeyLoginOptions?: Resolver<
    ResolversTypes["JSON"],
    ParentType,
    ContextType,
    Partial<MutationgeneratePasskeyLoginOptionsArgs>
  >;
  generatePasskeyRegisterOptions?: Resolver<
    ResolversTypes["JSON"],
    ParentType,
    ContextType,
    RequireFields<MutationgeneratePasskeyRegisterOptionsArgs, "userId">
  >;
  grantRoom?: Resolver<
    Maybe<ResolversTypes["Attending"]>,
    ParentType,
    ContextType,
    RequireFields<MutationgrantRoomArgs, "attendingId">
  >;
  leaveEvent?: Resolver<
    ResolversTypes["Event"],
    ParentType,
    ContextType,
    RequireFields<MutationleaveEventArgs, "id">
  >;
  loginMagicLink?: Resolver<
    ResolversTypes["AuthResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationloginMagicLinkArgs, "magicLinkId">
  >;
  loginPasskey?: Resolver<
    ResolversTypes["LoginResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationloginPasskeyArgs, "response">
  >;
  loginPassword?: Resolver<
    ResolversTypes["AuthResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationloginPasswordArgs, "email" | "password">
  >;
  participateInEvent?: Resolver<
    ResolversTypes["Event"],
    ParentType,
    ContextType,
    RequireFields<MutationparticipateInEventArgs, "id">
  >;
  planEvent?: Resolver<
    ResolversTypes["Event"],
    ParentType,
    ContextType,
    RequireFields<MutationplanEventArgs, "input">
  >;
  recindRoom?: Resolver<
    Maybe<ResolversTypes["Attending"]>,
    ParentType,
    ContextType,
    RequireFields<MutationrecindRoomArgs, "partyId">
  >;
  refreshLogin?: Resolver<
    ResolversTypes["AuthResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationrefreshLoginArgs, "refreshToken">
  >;
  register?: Resolver<
    ResolversTypes["RegisterResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationregisterArgs, "email" | "userName">
  >;
  registerPasskey?: Resolver<
    ResolversTypes["RegisterDeviceResponse"],
    ParentType,
    ContextType,
    RequireFields<MutationregisterPasskeyArgs, "name" | "response" | "userId">
  >;
  removeAttendance?: Resolver<
    ResolversTypes["Party"],
    ParentType,
    ContextType,
    RequireFields<MutationremoveAttendanceArgs, "partyId">
  >;
  removeProfilePicture?: Resolver<
    ResolversTypes["User"],
    ParentType,
    ContextType
  >;
  requestRoom?: Resolver<
    Maybe<ResolversTypes["Attending"]>,
    ParentType,
    ContextType,
    RequireFields<MutationrequestRoomArgs, "partyId">
  >;
  rescindDonation?: Resolver<
    ResolversTypes["Donation"],
    ParentType,
    ContextType,
    RequireFields<MutationrescindDonationArgs, "id">
  >;
  sendMagicLink?: Resolver<
    ResolversTypes["Boolean"],
    ParentType,
    ContextType,
    RequireFields<MutationsendMagicLinkArgs, "email">
  >;
  sendPaymentNotification?: Resolver<
    ResolversTypes["Attending"],
    ParentType,
    ContextType,
    RequireFields<MutationsendPaymentNotificationArgs, "userId">
  >;
  sendPaymentNotificationToAll?: Resolver<
    Array<ResolversTypes["Attending"]>,
    ParentType,
    ContextType
  >;
  setAttendance?: Resolver<
    ResolversTypes["Party"],
    ParentType,
    ContextType,
    RequireFields<MutationsetAttendanceArgs, "dates" | "partyId">
  >;
  setGamesPlayed?: Resolver<
    ResolversTypes["Attending"],
    ParentType,
    ContextType,
    RequireFields<MutationsetGamesPlayedArgs, "gameIds" | "partyId">
  >;
  syncCache?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType,
    Partial<MutationsyncCacheArgs>
  >;
  updateAuthDevice?: Resolver<
    ResolversTypes["AuthDevice"],
    ParentType,
    ContextType,
    RequireFields<MutationupdateAuthDeviceArgs, "id" | "name">
  >;
  updateGame?: Resolver<
    ResolversTypes["Game"],
    ParentType,
    ContextType,
    RequireFields<MutationupdateGameArgs, "input">
  >;
  updateLocation?: Resolver<
    ResolversTypes["User"],
    ParentType,
    ContextType,
    RequireFields<MutationupdateLocationArgs, "latitude" | "longitude">
  >;
  updatePaidDues?: Resolver<
    Maybe<ResolversTypes["Attending"]>,
    ParentType,
    ContextType,
    RequireFields<MutationupdatePaidDuesArgs, "attendingId" | "paidDues">
  >;
  updateParty?: Resolver<
    ResolversTypes["Party"],
    ParentType,
    ContextType,
    RequireFields<MutationupdatePartyArgs, "input">
  >;
  updateProfile?: Resolver<
    ResolversTypes["User"],
    ParentType,
    ContextType,
    RequireFields<MutationupdateProfileArgs, "input">
  >;
  updatePurchaseStatus?: Resolver<
    ResolversTypes["Purchase"],
    ParentType,
    ContextType,
    RequireFields<MutationupdatePurchaseStatusArgs, "purchaseId" | "status">
  >;
  updateRoles?: Resolver<
    ResolversTypes["User"],
    ParentType,
    ContextType,
    RequireFields<MutationupdateRolesArgs, "id" | "roles">
  >;
  voteOnPurchase?: Resolver<
    ResolversTypes["Purchase"],
    ParentType,
    ContextType,
    RequireFields<MutationvoteOnPurchaseArgs, "purchaseId" | "vote">
  >;
};

export type PartyResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["Party"] = ResolversParentTypes["Party"],
> = {
  attending?: Resolver<
    Maybe<ResolversTypes["Attending"]>,
    ParentType,
    ContextType,
    Partial<PartyattendingArgs>
  >;
  attendings?: Resolver<
    Array<ResolversTypes["Attending"]>,
    ParentType,
    ContextType
  >;
  costPerDay?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  donations?: Resolver<
    Array<ResolversTypes["Donation"]>,
    ParentType,
    ContextType
  >;
  endDate?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  events?: Resolver<Array<ResolversTypes["Event"]>, ParentType, ContextType>;
  feedingCosts?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  gamesPlayed?: Resolver<
    Array<ResolversTypes["GameOnParty"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  latitude?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  location?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  locationWidgetSrc?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  longitude?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  paidDues?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  payday?: Resolver<Maybe<ResolversTypes["Date"]>, ParentType, ContextType>;
  pictures?: Resolver<
    Array<ResolversTypes["Picture"]>,
    ParentType,
    ContextType
  >;
  registrationDeadline?: Resolver<
    Maybe<ResolversTypes["Date"]>,
    ParentType,
    ContextType
  >;
  rentalCosts?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  roomsAvailable?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  seatsAvailable?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  startDate?: Resolver<ResolversTypes["Date"], ParentType, ContextType>;
  tentative?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PictureResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["Picture"] = ResolversParentTypes["Picture"],
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  meta?: Resolver<ResolversTypes["PictureMeta"], ParentType, ContextType>;
  party?: Resolver<ResolversTypes["Party"], ParentType, ContextType>;
  tags?: Resolver<Array<ResolversTypes["PictureTag"]>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PictureMetaResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["PictureMeta"] = ResolversParentTypes["PictureMeta"],
> = {
  altitude?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  height?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  takeAt?: Resolver<Maybe<ResolversTypes["DateTime"]>, ParentType, ContextType>;
  width?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PictureTagResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["PictureTag"] = ResolversParentTypes["PictureTag"],
> = {
  boundingBox?: Resolver<
    ResolversTypes["BoundingBox"],
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  picture?: Resolver<ResolversTypes["Picture"], ParentType, ContextType>;
  user?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PurchaseResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["Purchase"] = ResolversParentTypes["Purchase"],
> = {
  createdAt?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  estimatedCost?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  proposer?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  status?: Resolver<ResolversTypes["PurchaseStatus"], ParentType, ContextType>;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  userVote?: Resolver<
    Maybe<ResolversTypes["PurchaseVote"]>,
    ParentType,
    ContextType
  >;
  voteCount?: Resolver<ResolversTypes["VoteCount"], ParentType, ContextType>;
  votes?: Resolver<
    Array<ResolversTypes["PurchaseVote"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PurchaseStatusResolvers = EnumResolverSignature<
  { APPROVED?: any; COMPLETED?: any; PROPOSED?: any; REJECTED?: any },
  ResolversTypes["PurchaseStatus"]
>;

export type PurchaseVoteResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["PurchaseVote"] = ResolversParentTypes["PurchaseVote"],
> = {
  createdAt?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  user?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  vote?: Resolver<ResolversTypes["VoteValue"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["Query"] = ResolversParentTypes["Query"],
> = {
  games?: Resolver<Array<ResolversTypes["Game"]>, ParentType, ContextType>;
  getCacheInfo?: Resolver<
    Maybe<ResolversTypes["CacheInfo"]>,
    ParentType,
    ContextType
  >;
  me?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
  moneyTransfers?: Resolver<
    Array<ResolversTypes["MoneyTransfer"]>,
    ParentType,
    ContextType
  >;
  nextParty?: Resolver<Maybe<ResolversTypes["Party"]>, ParentType, ContextType>;
  parties?: Resolver<Array<ResolversTypes["Party"]>, ParentType, ContextType>;
  party?: Resolver<
    Maybe<ResolversTypes["Party"]>,
    ParentType,
    ContextType,
    RequireFields<QuerypartyArgs, "id">
  >;
  purchase?: Resolver<
    Maybe<ResolversTypes["Purchase"]>,
    ParentType,
    ContextType,
    RequireFields<QuerypurchaseArgs, "id">
  >;
  purchases?: Resolver<
    Array<ResolversTypes["Purchase"]>,
    ParentType,
    ContextType
  >;
  users?: Resolver<Array<ResolversTypes["User"]>, ParentType, ContextType>;
};

export type RegisterDeviceResponseResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["RegisterDeviceResponse"] = ResolversParentTypes["RegisterDeviceResponse"],
> = {
  device?: Resolver<ResolversTypes["AuthDevice"], ParentType, ContextType>;
  token?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RegisterResponseResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["RegisterResponse"] = ResolversParentTypes["RegisterResponse"],
> = {
  refreshToken?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  token?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  user?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoleResolvers = EnumResolverSignature<
  { Admin?: any; Bookkeeper?: any; Doorkeeper?: any; Trusted?: any },
  ResolversTypes["Role"]
>;

export type RoomStatusResolvers = EnumResolverSignature<
  { GRANTED?: any; REQUESTED?: any },
  ResolversTypes["RoomStatus"]
>;

export interface TimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Time"], any> {
  name: "Time";
}

export type UserResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["User"] = ResolversParentTypes["User"],
> = {
  avatar?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  avatarUrl?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  devices?: Resolver<
    Array<ResolversTypes["AuthDevice"]>,
    ParentType,
    ContextType
  >;
  displayName?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  lastKnownLocation?: Resolver<
    Maybe<ResolversTypes["Location"]>,
    ParentType,
    ContextType
  >;
  locations?: Resolver<
    Array<ResolversTypes["Location"]>,
    ParentType,
    ContextType
  >;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  roles?: Resolver<Array<ResolversTypes["Role"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VoteCountResolvers<
  ContextType = Context,
  ParentType extends
    ResolversParentTypes["VoteCount"] = ResolversParentTypes["VoteCount"],
> = {
  abstain?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  no?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  yes?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VoteValueResolvers = EnumResolverSignature<
  { ABSTAIN?: any; NO?: any; YES?: any },
  ResolversTypes["VoteValue"]
>;

export type Resolvers<ContextType = Context> = {
  AddGameResult?: AddGameResultResolvers<ContextType>;
  Attending?: AttendingResolvers<ContextType>;
  AuthDevice?: AuthDeviceResolvers<ContextType>;
  AuthResponse?: AuthResponseResolvers<ContextType>;
  BoundingBox?: GraphQLScalarType;
  CacheEntry?: CacheEntryResolvers<ContextType>;
  CacheInfo?: CacheInfoResolvers<ContextType>;
  CachePatch?: CachePatchResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  Donation?: DonationResolvers<ContextType>;
  DonationDedication?: DonationDedicationResolvers;
  Event?: EventResolvers<ContextType>;
  File?: GraphQLScalarType;
  Game?: GameResolvers<ContextType>;
  GameOnParty?: GameOnPartyResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  JWT?: GraphQLScalarType;
  Location?: LocationResolvers<ContextType>;
  LoginResponse?: LoginResponseResolvers<ContextType>;
  MoneyTransfer?: MoneyTransferResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Party?: PartyResolvers<ContextType>;
  Picture?: PictureResolvers<ContextType>;
  PictureMeta?: PictureMetaResolvers<ContextType>;
  PictureTag?: PictureTagResolvers<ContextType>;
  Purchase?: PurchaseResolvers<ContextType>;
  PurchaseStatus?: PurchaseStatusResolvers;
  PurchaseVote?: PurchaseVoteResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RegisterDeviceResponse?: RegisterDeviceResponseResolvers<ContextType>;
  RegisterResponse?: RegisterResponseResolvers<ContextType>;
  Role?: RoleResolvers;
  RoomStatus?: RoomStatusResolvers;
  Time?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
  VoteCount?: VoteCountResolvers<ContextType>;
  VoteValue?: VoteValueResolvers;
};

export type DirectiveResolvers<ContextType = Context> = {
  rbac?: rbacDirectiveResolver<any, any, ContextType>;
};
