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
  BoundingBox: { input: any; output: any; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  File: { input: any; output: any; }
  JSON: { input: any; output: any; }
  JWT: { input: any; output: any; }
  Time: { input: any; output: any; }
};

export type AddGameResult = {
  __typename?: 'AddGameResult';
  attending: Attending;
  game: Game;
};

export type Attending = {
  __typename?: 'Attending';
  applicationDate: Scalars['Date']['output'];
  checkIn?: Maybe<Scalars['DateTime']['output']>;
  checkOut?: Maybe<Scalars['DateTime']['output']>;
  dates: Array<Scalars['Date']['output']>;
  gamesPlayed: Array<Game>;
  id: Scalars['ID']['output'];
  paidDues: Scalars['Float']['output'];
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

export enum DonationDedication {
  Rent = 'RENT',
  Warchest = 'WARCHEST'
}

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
  checkIn?: Maybe<Attending>;
  checkOut?: Maybe<Attending>;
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
  removeProfilePicture: User;
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


export type MutationCheckInArgs = {
  userId: Scalars['ID']['input'];
};


export type MutationCheckOutArgs = {
  userId: Scalars['ID']['input'];
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
  attending?: Maybe<Attending>;
  attendings: Array<Attending>;
  donations: Array<Donation>;
  endDate: Scalars['Date']['output'];
  events: Array<Event>;
  finalCostPerDay?: Maybe<Scalars['Float']['output']>;
  gamesPlayed: Array<GameOnParty>;
  id: Scalars['ID']['output'];
  location: Scalars['String']['output'];
  locationWidgetSrc?: Maybe<Scalars['String']['output']>;
  paidDues?: Maybe<Scalars['Float']['output']>;
  payday?: Maybe<Scalars['Date']['output']>;
  pictures: Array<Picture>;
  registrationDeadline?: Maybe<Scalars['Date']['output']>;
  rentalCosts: Scalars['Float']['output'];
  roomsAvailable: Scalars['Int']['output'];
  seatsAvailable: Scalars['Int']['output'];
  startDate: Scalars['Date']['output'];
};


export type PartyAttendingArgs = {
  userId?: InputMaybe<Scalars['ID']['input']>;
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
  password?: InputMaybe<Scalars['String']['input']>;
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

export enum RoomStatus {
  Granted = 'GRANTED',
  Requested = 'REQUESTED'
}

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

export type RefreshLoginMutationVariables = Exact<{
  refreshToken: Scalars['String']['input'];
}>;


export type RefreshLoginMutation = { __typename?: 'Mutation', refreshLogin: { __typename: 'AuthResponse', token: any, refreshToken: string } };

export type PartyEventsInfoFragment = { __typename?: 'Party', id: string, events: Array<{ __typename: 'Event', id: string, image: string, date?: any | null, startTime?: string | null, endTime?: string | null, name: string, description?: string | null, organizer: { __typename?: 'User', id: string, displayName: string, avatar: string }, participants: Array<{ __typename?: 'User', id: string, displayName: string, avatar: string }> }> } & { ' $fragmentName'?: 'PartyEventsInfoFragment' };

export type PartyEventsQueryVariables = Exact<{
  nextParty: Scalars['Boolean']['input'];
  partyId: Scalars['ID']['input'];
}>;


export type PartyEventsQuery = { __typename?: 'Query', nextParty?: (
    { __typename?: 'Party' }
    & { ' $fragmentRefs'?: { 'PartyEventsInfoFragment': PartyEventsInfoFragment } }
  ) | null, party?: (
    { __typename?: 'Party' }
    & { ' $fragmentRefs'?: { 'PartyEventsInfoFragment': PartyEventsInfoFragment } }
  ) | null };

export type ToggleEventParticipationMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  participate: Scalars['Boolean']['input'];
}>;


export type ToggleEventParticipationMutation = { __typename?: 'Mutation', participateInEvent?: { __typename?: 'Event', id: string, participants: Array<{ __typename?: 'User', id: string, displayName: string, avatar: string }> }, leaveEvent?: { __typename?: 'Event', id: string, participants: Array<{ __typename?: 'User', id: string, displayName: string, avatar: string }> } };

export type PlanEventMutationVariables = Exact<{
  input: EventInput;
}>;


export type PlanEventMutation = { __typename?: 'Mutation', planEvent: { __typename?: 'Event', id: string, image: string, date?: any | null, startTime?: string | null, endTime?: string | null, name: string, description?: string | null, organizer: { __typename?: 'User', id: string, displayName: string, avatar: string }, participants: Array<{ __typename?: 'User', id: string, displayName: string, avatar: string }> } };

export type PartyQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type PartyQuery = { __typename?: 'Query', party?: { __typename?: 'Party', id: string, startDate: any, endDate: any, attendings: Array<{ __typename?: 'Attending', id: string, dates: Array<any>, user: { __typename?: 'User', id: string, displayName: string, avatar: string } }>, pictures: Array<{ __typename?: 'Picture', id: string, url: string, meta: { __typename?: 'PictureMeta', takeAt?: any | null } }> } | null };

export type SetAttendanceMutationVariables = Exact<{
  partyId: Scalars['ID']['input'];
  dates: Array<Scalars['Date']['input']> | Scalars['Date']['input'];
}>;


export type SetAttendanceMutation = { __typename?: 'Mutation', setAttendance: { __typename?: 'Party', id: string, attendings: Array<{ __typename?: 'Attending', id: string, dates: Array<any> }> } };

export type AddPictureMutationVariables = Exact<{
  input: PictureInput;
}>;


export type AddPictureMutation = { __typename?: 'Mutation', addPicture: { __typename?: 'Picture', id: string, url: string, party: { __typename?: 'Party', id: string }, tags: Array<{ __typename?: 'PictureTag', id: string, boundingBox: any, user: { __typename?: 'User', id: string, displayName: string, avatar: string } }>, meta: { __typename?: 'PictureMeta', width: number, height: number, takeAt?: any | null } } };

export type PartiesQueryVariables = Exact<{ [key: string]: never; }>;


export type PartiesQuery = { __typename?: 'Query', parties: Array<{ __typename: 'Party', id: string, startDate: any, endDate: any, location: string, roomsAvailable: number, attendings: Array<{ __typename?: 'Attending', id: string, dates: Array<any>, user: { __typename?: 'User', id: string, displayName: string, avatar: string } }> }> };

export type PartyRowQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type PartyRowQuery = { __typename?: 'Query', party?: { __typename?: 'Party', id: string, startDate: any, endDate: any, location: string, attendings: Array<{ __typename?: 'Attending', id: string, dates: Array<any>, user: { __typename?: 'User', id: string, displayName: string, avatar: string } }> } | null };

export type UpdatePartyMutationVariables = Exact<{
  input: PartyInput;
}>;


export type UpdatePartyMutation = { __typename?: 'Mutation', updateParty: { __typename?: 'Party', id: string, startDate: any, endDate: any, location: string, roomsAvailable: number } };

export type PartyAttendingInfoFragment = { __typename?: 'Party', id: string, startDate: any, endDate: any, roomsAvailable: number, seatsAvailable: number, registrationDeadline?: any | null, attendings: Array<{ __typename?: 'Attending', id: string, dates: Array<any>, room?: RoomStatus | null, applicationDate: any, user: { __typename?: 'User', id: string, displayName: string, avatar: string } }> } & { ' $fragmentName'?: 'PartyAttendingInfoFragment' };

export type PartyAttendingQueryVariables = Exact<{
  nextParty: Scalars['Boolean']['input'];
  partyId: Scalars['ID']['input'];
}>;


export type PartyAttendingQuery = { __typename?: 'Query', nextParty?: (
    { __typename?: 'Party' }
    & { ' $fragmentRefs'?: { 'PartyAttendingInfoFragment': PartyAttendingInfoFragment } }
  ) | null, party?: (
    { __typename?: 'Party' }
    & { ' $fragmentRefs'?: { 'PartyAttendingInfoFragment': PartyAttendingInfoFragment } }
  ) | null };

export type RemoveAttendanceMutationVariables = Exact<{
  partyId: Scalars['ID']['input'];
}>;


export type RemoveAttendanceMutation = { __typename?: 'Mutation', removeAttendance: { __typename?: 'Party', id: string, attendings: Array<{ __typename?: 'Attending', id: string, dates: Array<any> }> } };

export type RegisterExternalMutationVariables = Exact<{
  userName: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
}>;


export type RegisterExternalMutation = { __typename?: 'Mutation', register: { __typename?: 'RegisterResponse', token: string, refreshToken: string, user: { __typename?: 'User', id: string, displayName: string, avatar: string } } };

export type UserListQueryVariables = Exact<{ [key: string]: never; }>;


export type UserListQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, displayName: string, avatar: string }> };

export type SetOthersAttendanceMutationVariables = Exact<{
  partyId: Scalars['ID']['input'];
  userId?: InputMaybe<Scalars['ID']['input']>;
  dates: Array<Scalars['Date']['input']> | Scalars['Date']['input'];
}>;


export type SetOthersAttendanceMutation = { __typename?: 'Mutation', setAttendance: { __typename?: 'Party', id: string, attendings: Array<{ __typename?: 'Attending', id: string, dates: Array<any> }> } };

export type CheckInDateQueryVariables = Exact<{ [key: string]: never; }>;


export type CheckInDateQuery = { __typename?: 'Query', nextParty?: { __typename?: 'Party', id: string, attending?: { __typename?: 'Attending', id: string, dates: Array<any>, checkIn?: any | null, checkOut?: any | null, room?: RoomStatus | null } | null } | null };

export type CheckInMutationVariables = Exact<{
  userId: Scalars['ID']['input'];
}>;


export type CheckInMutation = { __typename?: 'Mutation', checkIn?: { __typename?: 'Attending', id: string, checkIn?: any | null, checkOut?: any | null } | null };

export type CheckInDateOfUserQueryVariables = Exact<{
  userId: Scalars['ID']['input'];
}>;


export type CheckInDateOfUserQuery = { __typename?: 'Query', nextParty?: { __typename?: 'Party', id: string, attending?: { __typename?: 'Attending', id: string, dates: Array<any>, checkIn?: any | null, checkOut?: any | null, room?: RoomStatus | null } | null } | null };

export type NextPartyCostsQueryVariables = Exact<{ [key: string]: never; }>;


export type NextPartyCostsQuery = { __typename?: 'Query', nextParty?: { __typename?: 'Party', id: string, rentalCosts: number, paidDues?: number | null, finalCostPerDay?: number | null, payday?: any | null, donations: Array<{ __typename?: 'Donation', id: string, amount: number, dedication: DonationDedication, donator?: { __typename?: 'User', id: string, displayName: string, avatar: string } | null }>, attendings: Array<{ __typename?: 'Attending', id: string, dates: Array<any>, paidDues: number, user: { __typename?: 'User', id: string } }> } | null };

export type PartyCountdownQueryVariables = Exact<{
  nextParty: Scalars['Boolean']['input'];
  partyId: Scalars['ID']['input'];
}>;


export type PartyCountdownQuery = { __typename?: 'Query', nextParty?: { __typename?: 'Party', id: string, startDate: any, endDate: any, registrationDeadline?: any | null } | null, party?: { __typename?: 'Party', id: string, startDate: any, endDate: any } | null };

export type NextPartyDonationsQueryVariables = Exact<{ [key: string]: never; }>;


export type NextPartyDonationsQuery = { __typename?: 'Query', nextParty?: { __typename?: 'Party', id: string, registrationDeadline?: any | null, donations: Array<{ __typename: 'Donation', id: string, amount: number, dedication: DonationDedication, donator?: { __typename?: 'User', id: string, displayName: string, avatar: string } | null }> } | null };

export type DonateToPartyMutationVariables = Exact<{
  amount: Scalars['Float']['input'];
  dedication: DonationDedication;
  incognito: Scalars['Boolean']['input'];
}>;


export type DonateToPartyMutation = { __typename?: 'Mutation', donate: { __typename?: 'Donation', id: string, amount: number, dedication: DonationDedication, donator?: { __typename?: 'User', id: string, displayName: string, avatar: string } | null, party: { __typename?: 'Party', id: string } } };

export type RescindDonationMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type RescindDonationMutation = { __typename?: 'Mutation', rescindDonation: { __typename?: 'Donation', id: string, party: { __typename?: 'Party', id: string } } };

export type PartyGamesQueryVariables = Exact<{
  partyId: Scalars['ID']['input'];
  nextParty: Scalars['Boolean']['input'];
}>;


export type PartyGamesQuery = { __typename?: 'Query', nextParty?: { __typename?: 'Party', id: string, startDate: any, endDate: any, attendings: Array<{ __typename?: 'Attending', id: string, dates: Array<any>, user: { __typename?: 'User', id: string, displayName: string, avatar: string }, gamesPlayed: Array<{ __typename?: 'Game', id: string, name: string, image: string }> }> } | null, party?: { __typename?: 'Party', id: string, startDate: any, endDate: any, attendings: Array<{ __typename?: 'Attending', id: string, dates: Array<any>, user: { __typename?: 'User', id: string, displayName: string, avatar: string }, gamesPlayed: Array<{ __typename?: 'Game', id: string, name: string, image: string }> }> } | null, games: Array<{ __typename?: 'Game', id: string, name: string, image: string }> };

export type AddGameToPartyMutationVariables = Exact<{
  name: Scalars['String']['input'];
  partyId: Scalars['ID']['input'];
}>;


export type AddGameToPartyMutation = { __typename?: 'Mutation', addGameToParty: { __typename?: 'AddGameResult', game: { __typename?: 'Game', id: string, name: string, image: string }, attending: { __typename?: 'Attending', id: string, gamesPlayed: Array<{ __typename?: 'Game', id: string, name: string, image: string }> } } };

export type SetGamesPlayedMutationVariables = Exact<{
  partyId: Scalars['ID']['input'];
  gameIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;


export type SetGamesPlayedMutation = { __typename?: 'Mutation', setGamesPlayed: { __typename?: 'Attending', id: string, gamesPlayed: Array<{ __typename?: 'Game', id: string, name: string, image: string }> } };

export type NextPartyLocationQueryVariables = Exact<{ [key: string]: never; }>;


export type NextPartyLocationQuery = { __typename?: 'Query', nextParty?: { __typename?: 'Party', id: string, locationWidgetSrc?: string | null } | null };

export type NextPartyRoomsQueryVariables = Exact<{ [key: string]: never; }>;


export type NextPartyRoomsQuery = { __typename?: 'Query', nextParty?: { __typename?: 'Party', id: string, roomsAvailable: number, attendings: Array<{ __typename?: 'Attending', id: string, room?: RoomStatus | null, user: { __typename?: 'User', id: string, displayName: string, avatar: string } }> } | null };

export type RequestRoomMutationVariables = Exact<{
  partyId: Scalars['ID']['input'];
}>;


export type RequestRoomMutation = { __typename?: 'Mutation', requestRoom?: { __typename?: 'Attending', id: string, dates: Array<any>, room?: RoomStatus | null, user: { __typename?: 'User', id: string, displayName: string, avatar: string } } | null };

export type RecindRoomMutationVariables = Exact<{
  partyId: Scalars['ID']['input'];
}>;


export type RecindRoomMutation = { __typename?: 'Mutation', recindRoom?: { __typename?: 'Attending', id: string, dates: Array<any>, room?: RoomStatus | null, user: { __typename?: 'User', id: string, displayName: string, avatar: string } } | null };

export type GrantRoomMutationVariables = Exact<{
  attendingId: Scalars['ID']['input'];
}>;


export type GrantRoomMutation = { __typename?: 'Mutation', grantRoom?: { __typename?: 'Attending', id: string, room?: RoomStatus | null } | null };

export type DenyRoomMutationVariables = Exact<{
  attendingId: Scalars['ID']['input'];
}>;


export type DenyRoomMutation = { __typename?: 'Mutation', denyRoom?: { __typename?: 'Attending', id: string, room?: RoomStatus | null } | null };

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

export type SendEmailLinkMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type SendEmailLinkMutation = { __typename?: 'Mutation', sendMagicLink: boolean };

export type NextPartyDatesQueryVariables = Exact<{ [key: string]: never; }>;


export type NextPartyDatesQuery = { __typename?: 'Query', nextParty?: { __typename: 'Party', id: string, startDate: any, endDate: any } | null };

export type MyDevicesQueryVariables = Exact<{ [key: string]: never; }>;


export type MyDevicesQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, devices: Array<{ __typename?: 'AuthDevice', id: string, name: string, createdAt?: any | null, lastUsedAt?: any | null }> } | null };

export type UpdateAuthDeviceMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
}>;


export type UpdateAuthDeviceMutation = { __typename?: 'Mutation', updateAuthDevice: { __typename?: 'AuthDevice', id: string, name: string } };

export type DeleteAuthDeviceMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteAuthDeviceMutation = { __typename?: 'Mutation', deleteAuthDevice: { __typename?: 'AuthDevice', id: string, name: string } };

export type UpdateProfileMutationVariables = Exact<{
  input: ProfileInput;
}>;


export type UpdateProfileMutation = { __typename?: 'Mutation', updateProfile: { __typename?: 'User', id: string, name: string, displayName: string, email: string, avatar: string, avatarUrl?: string | null } };

export type RemoveProfilePictureMutationVariables = Exact<{ [key: string]: never; }>;


export type RemoveProfilePictureMutation = { __typename?: 'Mutation', removeProfilePicture: { __typename?: 'User', id: string, avatar: string, avatarUrl?: string | null } };

export type GenerateLoginOptionsMutationVariables = Exact<{
  userId?: InputMaybe<Scalars['String']['input']>;
}>;


export type GenerateLoginOptionsMutation = { __typename?: 'Mutation', generatePasskeyLoginOptions: any };

export type LoginPasskeyMutationVariables = Exact<{
  response: Scalars['JSON']['input'];
}>;


export type LoginPasskeyMutation = { __typename?: 'Mutation', loginPasskey: { __typename?: 'LoginResponse', token: any, refreshToken: string, credentialID: Array<number> } };

export type GenerateRegistrationOptionsMutationVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type GenerateRegistrationOptionsMutation = { __typename?: 'Mutation', generatePasskeyRegisterOptions: any };

export type RegisterPasskeyMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  response: Scalars['JSON']['input'];
}>;


export type RegisterPasskeyMutation = { __typename?: 'Mutation', registerPasskey: { __typename?: 'RegisterDeviceResponse', token: string, device: { __typename?: 'AuthDevice', id: string, name: string } } };

export type LoginMagicLinkMutationVariables = Exact<{
  magicLinkId: Scalars['String']['input'];
}>;


export type LoginMagicLinkMutation = { __typename?: 'Mutation', loginMagicLink: { __typename?: 'AuthResponse', token: any, refreshToken: string } };

export type NextPartyBudgetQueryVariables = Exact<{ [key: string]: never; }>;


export type NextPartyBudgetQuery = { __typename?: 'Query', nextParty?: { __typename?: 'Party', id: string, finalCostPerDay?: number | null, donations: Array<{ __typename?: 'Donation', id: string, amount: number, dedication: DonationDedication, donator?: { __typename?: 'User', id: string, displayName: string, avatar: string } | null }>, attendings: Array<{ __typename?: 'Attending', id: string, dates: Array<any>, paidDues: number, user: { __typename?: 'User', id: string, displayName: string, avatar: string } }> } | null };

export type SyncCacheMutationVariables = Exact<{ [key: string]: never; }>;


export type SyncCacheMutation = { __typename?: 'Mutation', syncCache?: boolean | null };

export const PartyEventsInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PartyEventsInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Party"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"events"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"organizer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"participants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}}]} as unknown as DocumentNode<PartyEventsInfoFragment, unknown>;
export const PartyAttendingInfoFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PartyAttendingInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Party"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"roomsAvailable"}},{"kind":"Field","name":{"kind":"Name","value":"seatsAvailable"}},{"kind":"Field","name":{"kind":"Name","value":"registrationDeadline"}},{"kind":"Field","name":{"kind":"Name","value":"attendings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dates"}},{"kind":"Field","name":{"kind":"Name","value":"room"}},{"kind":"Field","name":{"kind":"Name","value":"applicationDate"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}}]} as unknown as DocumentNode<PartyAttendingInfoFragment, unknown>;
export const RefreshLoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"refreshLogin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"refreshToken"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"refreshLogin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"refreshToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"refreshToken"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]}}]} as unknown as DocumentNode<RefreshLoginMutation, RefreshLoginMutationVariables>;
export const PartyEventsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"partyEvents"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nextParty"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"partyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nextParty"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nextParty"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PartyEventsInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"party"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"partyId"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"skip"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nextParty"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PartyEventsInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PartyEventsInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Party"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"events"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"organizer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"participants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}}]} as unknown as DocumentNode<PartyEventsQuery, PartyEventsQueryVariables>;
export const ToggleEventParticipationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"toggleEventParticipation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"participate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"participateInEvent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"participate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"participants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"leaveEvent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"skip"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"participate"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"participants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}}]} as unknown as DocumentNode<ToggleEventParticipationMutation, ToggleEventParticipationMutationVariables>;
export const PlanEventDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"planEvent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EventInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"planEvent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"organizer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"participants"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}}]} as unknown as DocumentNode<PlanEventMutation, PlanEventMutationVariables>;
export const PartyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"party"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"party"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"attendings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dates"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pictures"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"takeAt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<PartyQuery, PartyQueryVariables>;
export const SetAttendanceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"setAttendance"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"partyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dates"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setAttendance"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"partyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"partyId"}}},{"kind":"Argument","name":{"kind":"Name","value":"dates"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dates"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attendings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dates"}}]}}]}}]}}]} as unknown as DocumentNode<SetAttendanceMutation, SetAttendanceMutationVariables>;
export const AddPictureDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addPicture"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PictureInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addPicture"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"party"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"boundingBox"}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"takeAt"}}]}}]}}]}}]} as unknown as DocumentNode<AddPictureMutation, AddPictureMutationVariables>;
export const PartiesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"parties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"parties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"roomsAvailable"}},{"kind":"Field","name":{"kind":"Name","value":"attendings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dates"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}}]}}]} as unknown as DocumentNode<PartiesQuery, PartiesQueryVariables>;
export const PartyRowDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"partyRow"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"party"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"attendings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dates"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}}]}}]} as unknown as DocumentNode<PartyRowQuery, PartyRowQueryVariables>;
export const UpdatePartyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateParty"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PartyInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateParty"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"roomsAvailable"}}]}}]}}]} as unknown as DocumentNode<UpdatePartyMutation, UpdatePartyMutationVariables>;
export const PartyAttendingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"partyAttending"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nextParty"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"partyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nextParty"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nextParty"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PartyAttendingInfo"}}]}},{"kind":"Field","name":{"kind":"Name","value":"party"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"partyId"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"skip"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nextParty"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PartyAttendingInfo"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PartyAttendingInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Party"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"roomsAvailable"}},{"kind":"Field","name":{"kind":"Name","value":"seatsAvailable"}},{"kind":"Field","name":{"kind":"Name","value":"registrationDeadline"}},{"kind":"Field","name":{"kind":"Name","value":"attendings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dates"}},{"kind":"Field","name":{"kind":"Name","value":"room"}},{"kind":"Field","name":{"kind":"Name","value":"applicationDate"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}}]} as unknown as DocumentNode<PartyAttendingQuery, PartyAttendingQueryVariables>;
export const RemoveAttendanceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeAttendance"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"partyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeAttendance"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"partyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"partyId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attendings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dates"}}]}}]}}]}}]} as unknown as DocumentNode<RemoveAttendanceMutation, RemoveAttendanceMutationVariables>;
export const RegisterExternalDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"registerExternal"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"register"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userName"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}}]} as unknown as DocumentNode<RegisterExternalMutation, RegisterExternalMutationVariables>;
export const UserListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"userList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]} as unknown as DocumentNode<UserListQuery, UserListQueryVariables>;
export const SetOthersAttendanceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"setOthersAttendance"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"partyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dates"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setAttendance"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"partyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"partyId"}}},{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"dates"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dates"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attendings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dates"}}]}}]}}]}}]} as unknown as DocumentNode<SetOthersAttendanceMutation, SetOthersAttendanceMutationVariables>;
export const CheckInDateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"checkInDate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nextParty"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attending"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dates"}},{"kind":"Field","name":{"kind":"Name","value":"checkIn"}},{"kind":"Field","name":{"kind":"Name","value":"checkOut"}},{"kind":"Field","name":{"kind":"Name","value":"room"}}]}}]}}]}}]} as unknown as DocumentNode<CheckInDateQuery, CheckInDateQueryVariables>;
export const CheckInDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"checkIn"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"checkIn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"checkIn"}},{"kind":"Field","name":{"kind":"Name","value":"checkOut"}}]}}]}}]} as unknown as DocumentNode<CheckInMutation, CheckInMutationVariables>;
export const CheckInDateOfUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"checkInDateOfUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nextParty"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attending"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dates"}},{"kind":"Field","name":{"kind":"Name","value":"checkIn"}},{"kind":"Field","name":{"kind":"Name","value":"checkOut"}},{"kind":"Field","name":{"kind":"Name","value":"room"}}]}}]}}]}}]} as unknown as DocumentNode<CheckInDateOfUserQuery, CheckInDateOfUserQueryVariables>;
export const NextPartyCostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"nextPartyCosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nextParty"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"rentalCosts"}},{"kind":"Field","name":{"kind":"Name","value":"paidDues"}},{"kind":"Field","name":{"kind":"Name","value":"finalCostPerDay"}},{"kind":"Field","name":{"kind":"Name","value":"payday"}},{"kind":"Field","name":{"kind":"Name","value":"donations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"donator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dedication"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attendings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dates"}},{"kind":"Field","name":{"kind":"Name","value":"paidDues"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<NextPartyCostsQuery, NextPartyCostsQueryVariables>;
export const PartyCountdownDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"partyCountdown"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nextParty"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"partyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nextParty"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nextParty"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"registrationDeadline"}}]}},{"kind":"Field","name":{"kind":"Name","value":"party"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"partyId"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"skip"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nextParty"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}}]}}]}}]} as unknown as DocumentNode<PartyCountdownQuery, PartyCountdownQueryVariables>;
export const NextPartyDonationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"nextPartyDonations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nextParty"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"registrationDeadline"}},{"kind":"Field","name":{"kind":"Name","value":"donations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"donator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dedication"}}]}}]}}]}}]} as unknown as DocumentNode<NextPartyDonationsQuery, NextPartyDonationsQueryVariables>;
export const DonateToPartyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"donateToParty"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"amount"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dedication"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DonationDedication"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"incognito"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"donate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"amount"},"value":{"kind":"Variable","name":{"kind":"Name","value":"amount"}}},{"kind":"Argument","name":{"kind":"Name","value":"dedication"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dedication"}}},{"kind":"Argument","name":{"kind":"Name","value":"incognito"},"value":{"kind":"Variable","name":{"kind":"Name","value":"incognito"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"dedication"}},{"kind":"Field","name":{"kind":"Name","value":"donator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"party"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<DonateToPartyMutation, DonateToPartyMutationVariables>;
export const RescindDonationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"rescindDonation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rescindDonation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"party"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<RescindDonationMutation, RescindDonationMutationVariables>;
export const PartyGamesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"partyGames"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"partyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nextParty"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nextParty"},"directives":[{"kind":"Directive","name":{"kind":"Name","value":"include"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nextParty"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"attendings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dates"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"gamesPlayed"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"party"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"partyId"}}}],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"skip"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"if"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nextParty"}}}]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"attendings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dates"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"gamesPlayed"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"games"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]} as unknown as DocumentNode<PartyGamesQuery, PartyGamesQueryVariables>;
export const AddGameToPartyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addGameToParty"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"partyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addGameToParty"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"partyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"partyId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"game"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attending"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"gamesPlayed"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AddGameToPartyMutation, AddGameToPartyMutationVariables>;
export const SetGamesPlayedDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"setGamesPlayed"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"partyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"gameIds"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setGamesPlayed"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"partyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"partyId"}}},{"kind":"Argument","name":{"kind":"Name","value":"gameIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"gameIds"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"gamesPlayed"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]}}]} as unknown as DocumentNode<SetGamesPlayedMutation, SetGamesPlayedMutationVariables>;
export const NextPartyLocationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"nextPartyLocation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nextParty"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"locationWidgetSrc"}}]}}]}}]} as unknown as DocumentNode<NextPartyLocationQuery, NextPartyLocationQueryVariables>;
export const NextPartyRoomsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"nextPartyRooms"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nextParty"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"roomsAvailable"}},{"kind":"Field","name":{"kind":"Name","value":"attendings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"room"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}}]}}]} as unknown as DocumentNode<NextPartyRoomsQuery, NextPartyRoomsQueryVariables>;
export const RequestRoomDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"requestRoom"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"partyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"requestRoom"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"partyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"partyId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dates"}},{"kind":"Field","name":{"kind":"Name","value":"room"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}}]} as unknown as DocumentNode<RequestRoomMutation, RequestRoomMutationVariables>;
export const RecindRoomDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"recindRoom"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"partyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"recindRoom"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"partyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"partyId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dates"}},{"kind":"Field","name":{"kind":"Name","value":"room"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}}]} as unknown as DocumentNode<RecindRoomMutation, RecindRoomMutationVariables>;
export const GrantRoomDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"grantRoom"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"attendingId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"grantRoom"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"attendingId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"attendingId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"room"}}]}}]}}]} as unknown as DocumentNode<GrantRoomMutation, GrantRoomMutationVariables>;
export const DenyRoomDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"denyRoom"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"attendingId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"denyRoom"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"attendingId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"attendingId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"room"}}]}}]}}]} as unknown as DocumentNode<DenyRoomMutation, DenyRoomMutationVariables>;
export const RegisterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"register"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"register"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userName"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]}}]} as unknown as DocumentNode<RegisterMutation, RegisterMutationVariables>;
export const LoginPasswordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"loginPassword"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]}}]} as unknown as DocumentNode<LoginPasswordMutation, LoginPasswordMutationVariables>;
export const SendEmailLinkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"sendEmailLink"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sendMagicLink"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}]}}]} as unknown as DocumentNode<SendEmailLinkMutation, SendEmailLinkMutationVariables>;
export const NextPartyDatesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"nextPartyDates"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nextParty"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}}]}}]}}]} as unknown as DocumentNode<NextPartyDatesQuery, NextPartyDatesQueryVariables>;
export const MyDevicesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"myDevices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"devices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"lastUsedAt"}}]}}]}}]}}]} as unknown as DocumentNode<MyDevicesQuery, MyDevicesQueryVariables>;
export const UpdateAuthDeviceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateAuthDevice"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateAuthDevice"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<UpdateAuthDeviceMutation, UpdateAuthDeviceMutationVariables>;
export const DeleteAuthDeviceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteAuthDevice"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteAuthDevice"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<DeleteAuthDeviceMutation, DeleteAuthDeviceMutationVariables>;
export const UpdateProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProfileInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}}]}}]}}]} as unknown as DocumentNode<UpdateProfileMutation, UpdateProfileMutationVariables>;
export const RemoveProfilePictureDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeProfilePicture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeProfilePicture"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}}]}}]}}]} as unknown as DocumentNode<RemoveProfilePictureMutation, RemoveProfilePictureMutationVariables>;
export const GenerateLoginOptionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"generateLoginOptions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"generatePasskeyLoginOptions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}]}}]} as unknown as DocumentNode<GenerateLoginOptionsMutation, GenerateLoginOptionsMutationVariables>;
export const LoginPasskeyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"loginPasskey"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"response"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JSON"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginPasskey"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"response"},"value":{"kind":"Variable","name":{"kind":"Name","value":"response"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}},{"kind":"Field","name":{"kind":"Name","value":"credentialID"}}]}}]}}]} as unknown as DocumentNode<LoginPasskeyMutation, LoginPasskeyMutationVariables>;
export const GenerateRegistrationOptionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"generateRegistrationOptions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"generatePasskeyRegisterOptions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}]}}]} as unknown as DocumentNode<GenerateRegistrationOptionsMutation, GenerateRegistrationOptionsMutationVariables>;
export const RegisterPasskeyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"registerPasskey"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"response"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JSON"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"registerPasskey"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"response"},"value":{"kind":"Variable","name":{"kind":"Name","value":"response"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"device"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<RegisterPasskeyMutation, RegisterPasskeyMutationVariables>;
export const LoginMagicLinkDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"loginMagicLink"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"magicLinkId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginMagicLink"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"magicLinkId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"magicLinkId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}}]}}]}}]} as unknown as DocumentNode<LoginMagicLinkMutation, LoginMagicLinkMutationVariables>;
export const NextPartyBudgetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"NextPartyBudget"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nextParty"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"finalCostPerDay"}},{"kind":"Field","name":{"kind":"Name","value":"donations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"donator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"dedication"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attendings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"dates"}},{"kind":"Field","name":{"kind":"Name","value":"paidDues"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}}]}}]}}]}}]}}]} as unknown as DocumentNode<NextPartyBudgetQuery, NextPartyBudgetQueryVariables>;
export const SyncCacheDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"syncCache"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"syncCache"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"clear"},"value":{"kind":"BooleanValue","value":true}}]}]}}]} as unknown as DocumentNode<SyncCacheMutation, SyncCacheMutationVariables>;