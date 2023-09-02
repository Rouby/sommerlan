/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n                      mutation refreshLogin($refreshToken: String!) {\n                        refreshLogin(refreshToken: $refreshToken) {\n                          token\n                          refreshToken\n                        }\n                      }\n                    ": types.RefreshLoginDocument,
    "\n      mutation loginMagicLink($magicLinkId: String!) {\n        loginMagicLink(magicLinkId: $magicLinkId) {\n          token\n          refreshToken\n        }\n      }\n    ": types.LoginMagicLinkDocument,
    "\n      query partyGames($partyId: ID!, $nextParty: Boolean!) {\n        nextParty @include(if: $nextParty) {\n          id\n          startDate\n          endDate\n          attendings {\n            id\n            dates\n            user {\n              id\n              displayName\n              avatar\n            }\n            gamesPlayed {\n              id\n              name\n              image\n            }\n          }\n        }\n\n        party(id: $partyId) @skip(if: $nextParty) {\n          id\n          startDate\n          endDate\n          attendings {\n            id\n            dates\n            user {\n              id\n              displayName\n              avatar\n            }\n            gamesPlayed {\n              id\n              name\n              image\n            }\n          }\n        }\n\n        games {\n          id\n          name\n          image\n        }\n      }\n    ": types.PartyGamesDocument,
    "\n      mutation addGameToParty($name: String!, $partyId: ID!) {\n        addGameToParty(name: $name, partyId: $partyId) {\n          game {\n            id\n            name\n            image\n          }\n          attending {\n            id\n            gamesPlayed {\n              id\n              name\n              image\n            }\n          }\n        }\n      }\n    ": types.AddGameToPartyDocument,
    "\n      mutation setGamesPlayed($partyId: ID!, $gameIds: [ID!]!) {\n        setGamesPlayed(partyId: $partyId, gameIds: $gameIds) {\n          id\n          gamesPlayed {\n            id\n            name\n            image\n          }\n        }\n      }\n    ": types.SetGamesPlayedDocument,
    "\n      query nextPartyLocation {\n        nextParty {\n          id\n          locationWidgetSrc\n        }\n      }\n    ": types.NextPartyLocationDocument,
    "\n      query nextPartyRooms {\n        nextParty {\n          id\n          roomsAvailable\n          attendings {\n            id\n            room\n            user {\n              id\n              displayName\n              avatar\n            }\n          }\n        }\n      }\n    ": types.NextPartyRoomsDocument,
    "\n      mutation requestRoom($partyId: ID!) {\n        requestRoom(partyId: $partyId) {\n          id\n          dates\n          room\n          user {\n            id\n            displayName\n            avatar\n          }\n        }\n      }\n    ": types.RequestRoomDocument,
    "\n      mutation recindRoom($partyId: ID!) {\n        recindRoom(partyId: $partyId) {\n          id\n          dates\n          room\n          user {\n            id\n            displayName\n            avatar\n          }\n        }\n      }\n    ": types.RecindRoomDocument,
    "\n      mutation grantRoom($attendingId: ID!) {\n        grantRoom(attendingId: $attendingId) {\n          id\n          room\n        }\n      }\n    ": types.GrantRoomDocument,
    "\n      mutation denyRoom($attendingId: ID!) {\n        denyRoom(attendingId: $attendingId) {\n          id\n          room\n        }\n      }\n    ": types.DenyRoomDocument,
    "\n    fragment PartyAttendingInfo on Party {\n      id\n      startDate\n      endDate\n      roomsAvailable\n      attendings {\n        id\n        dates\n        room\n        user {\n          id\n          displayName\n          avatar\n        }\n      }\n    }\n  ": types.PartyAttendingInfoFragmentDoc,
    "\n      query partyAttending($nextParty: Boolean!, $partyId: ID!) {\n        nextParty @include(if: $nextParty) {\n          ...PartyAttendingInfo\n        }\n\n        party(id: $partyId) @skip(if: $nextParty) {\n          ...PartyAttendingInfo\n        }\n      }\n\n      fragment PartyAttendingInfo on Party {\n        id\n        startDate\n        endDate\n        roomsAvailable\n        attendings {\n          id\n          dates\n          room\n          user {\n            id\n            displayName\n            avatar\n          }\n        }\n      }\n    ": types.PartyAttendingDocument,
    "\n      mutation setAttendance($partyId: ID!, $dates: [Date!]!) {\n        setAttendance(partyId: $partyId, dates: $dates) {\n          id\n          attendings {\n            id\n            dates\n          }\n        }\n      }\n    ": types.SetAttendanceDocument,
    "\n      mutation registerExternal(\n        $userName: String!\n        $email: String!\n        $password: String\n      ) {\n        register(userName: $userName, email: $email, password: $password) {\n          token\n          refreshToken\n          user {\n            id\n            displayName\n            avatar\n          }\n        }\n      }\n    ": types.RegisterExternalDocument,
    "\n      query userList {\n        users {\n          id\n          displayName\n          avatar\n        }\n      }\n    ": types.UserListDocument,
    "\n      mutation setOthersAttendance(\n        $partyId: ID!\n        $userId: ID\n        $dates: [Date!]!\n      ) {\n        setAttendance(partyId: $partyId, userId: $userId, dates: $dates) {\n          id\n          attendings {\n            id\n            dates\n          }\n        }\n      }\n    ": types.SetOthersAttendanceDocument,
    "\n      query partyCountdown($nextParty: Boolean!, $partyId: ID!) {\n        nextParty @include(if: $nextParty) {\n          id\n          startDate\n          endDate\n        }\n\n        party(id: $partyId) @skip(if: $nextParty) {\n          id\n          startDate\n          endDate\n        }\n      }\n    ": types.PartyCountdownDocument,
    "\n      query party($id: ID!) {\n        party(id: $id) {\n          id\n          startDate\n          endDate\n          attendings {\n            id\n            dates\n            user {\n              id\n              displayName\n              avatar\n            }\n          }\n        }\n      }\n    ": types.PartyDocument,
    "\n      query parties {\n        parties {\n          __typename\n          id\n          startDate\n          endDate\n          location\n          roomsAvailable\n          attendings {\n            id\n            dates\n            user {\n              id\n              displayName\n              avatar\n            }\n          }\n        }\n      }\n    ": types.PartiesDocument,
    "\n      query partyRow($id: ID!) {\n        party(id: $id) {\n          id\n          startDate\n          endDate\n          location\n          attendings {\n            id\n            dates\n            user {\n              id\n              displayName\n              avatar\n            }\n          }\n        }\n      }\n    ": types.PartyRowDocument,
    "\n      mutation register(\n        $userName: String!\n        $email: String!\n        $password: String\n      ) {\n        register(userName: $userName, email: $email, password: $password) {\n          token\n          refreshToken\n        }\n      }\n    ": types.RegisterDocument,
    "\n      mutation loginPassword($email: String!, $password: String!) {\n        loginPassword(email: $email, password: $password) {\n          token\n          refreshToken\n        }\n      }\n    ": types.LoginPasswordDocument,
    "\n      mutation sendEmailLink($email: String!) {\n        sendMagicLink(email: $email)\n      }\n    ": types.SendEmailLinkDocument,
    "\n      mutation generateLoginOptions($userId: String) {\n        generatePasskeyLoginOptions(userId: $userId)\n      }\n    ": types.GenerateLoginOptionsDocument,
    "\n      mutation loginPasskey($response: JSON!) {\n        loginPasskey(response: $response) {\n          token\n          refreshToken\n          credentialID\n        }\n      }\n    ": types.LoginPasskeyDocument,
    "\n      mutation generateRegistrationOptions($userId: String!) {\n        generatePasskeyRegisterOptions(userId: $userId)\n      }\n    ": types.GenerateRegistrationOptionsDocument,
    "\n      mutation registerPasskey(\n        $userId: String!\n        $name: String!\n        $response: JSON!\n      ) {\n        registerPasskey(userId: $userId, name: $name, response: $response) {\n          token\n          device {\n            id\n            name\n          }\n        }\n      }\n    ": types.RegisterPasskeyDocument,
    "\n      query myDevices {\n        me {\n          id\n          devices {\n            id\n            name\n            createdAt\n            lastUsedAt\n          }\n        }\n      }\n    ": types.MyDevicesDocument,
    "\n      mutation updateAuthDevice($id: ID!, $name: String!) {\n        updateAuthDevice(id: $id, name: $name) {\n          id\n          name\n        }\n      }\n    ": types.UpdateAuthDeviceDocument,
    "\n      mutation deleteAuthDevice($id: ID!) {\n        deleteAuthDevice(id: $id) {\n          id\n          name\n        }\n      }\n    ": types.DeleteAuthDeviceDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n                      mutation refreshLogin($refreshToken: String!) {\n                        refreshLogin(refreshToken: $refreshToken) {\n                          token\n                          refreshToken\n                        }\n                      }\n                    "): (typeof documents)["\n                      mutation refreshLogin($refreshToken: String!) {\n                        refreshLogin(refreshToken: $refreshToken) {\n                          token\n                          refreshToken\n                        }\n                      }\n                    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation loginMagicLink($magicLinkId: String!) {\n        loginMagicLink(magicLinkId: $magicLinkId) {\n          token\n          refreshToken\n        }\n      }\n    "): (typeof documents)["\n      mutation loginMagicLink($magicLinkId: String!) {\n        loginMagicLink(magicLinkId: $magicLinkId) {\n          token\n          refreshToken\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query partyGames($partyId: ID!, $nextParty: Boolean!) {\n        nextParty @include(if: $nextParty) {\n          id\n          startDate\n          endDate\n          attendings {\n            id\n            dates\n            user {\n              id\n              displayName\n              avatar\n            }\n            gamesPlayed {\n              id\n              name\n              image\n            }\n          }\n        }\n\n        party(id: $partyId) @skip(if: $nextParty) {\n          id\n          startDate\n          endDate\n          attendings {\n            id\n            dates\n            user {\n              id\n              displayName\n              avatar\n            }\n            gamesPlayed {\n              id\n              name\n              image\n            }\n          }\n        }\n\n        games {\n          id\n          name\n          image\n        }\n      }\n    "): (typeof documents)["\n      query partyGames($partyId: ID!, $nextParty: Boolean!) {\n        nextParty @include(if: $nextParty) {\n          id\n          startDate\n          endDate\n          attendings {\n            id\n            dates\n            user {\n              id\n              displayName\n              avatar\n            }\n            gamesPlayed {\n              id\n              name\n              image\n            }\n          }\n        }\n\n        party(id: $partyId) @skip(if: $nextParty) {\n          id\n          startDate\n          endDate\n          attendings {\n            id\n            dates\n            user {\n              id\n              displayName\n              avatar\n            }\n            gamesPlayed {\n              id\n              name\n              image\n            }\n          }\n        }\n\n        games {\n          id\n          name\n          image\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation addGameToParty($name: String!, $partyId: ID!) {\n        addGameToParty(name: $name, partyId: $partyId) {\n          game {\n            id\n            name\n            image\n          }\n          attending {\n            id\n            gamesPlayed {\n              id\n              name\n              image\n            }\n          }\n        }\n      }\n    "): (typeof documents)["\n      mutation addGameToParty($name: String!, $partyId: ID!) {\n        addGameToParty(name: $name, partyId: $partyId) {\n          game {\n            id\n            name\n            image\n          }\n          attending {\n            id\n            gamesPlayed {\n              id\n              name\n              image\n            }\n          }\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation setGamesPlayed($partyId: ID!, $gameIds: [ID!]!) {\n        setGamesPlayed(partyId: $partyId, gameIds: $gameIds) {\n          id\n          gamesPlayed {\n            id\n            name\n            image\n          }\n        }\n      }\n    "): (typeof documents)["\n      mutation setGamesPlayed($partyId: ID!, $gameIds: [ID!]!) {\n        setGamesPlayed(partyId: $partyId, gameIds: $gameIds) {\n          id\n          gamesPlayed {\n            id\n            name\n            image\n          }\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query nextPartyLocation {\n        nextParty {\n          id\n          locationWidgetSrc\n        }\n      }\n    "): (typeof documents)["\n      query nextPartyLocation {\n        nextParty {\n          id\n          locationWidgetSrc\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query nextPartyRooms {\n        nextParty {\n          id\n          roomsAvailable\n          attendings {\n            id\n            room\n            user {\n              id\n              displayName\n              avatar\n            }\n          }\n        }\n      }\n    "): (typeof documents)["\n      query nextPartyRooms {\n        nextParty {\n          id\n          roomsAvailable\n          attendings {\n            id\n            room\n            user {\n              id\n              displayName\n              avatar\n            }\n          }\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation requestRoom($partyId: ID!) {\n        requestRoom(partyId: $partyId) {\n          id\n          dates\n          room\n          user {\n            id\n            displayName\n            avatar\n          }\n        }\n      }\n    "): (typeof documents)["\n      mutation requestRoom($partyId: ID!) {\n        requestRoom(partyId: $partyId) {\n          id\n          dates\n          room\n          user {\n            id\n            displayName\n            avatar\n          }\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation recindRoom($partyId: ID!) {\n        recindRoom(partyId: $partyId) {\n          id\n          dates\n          room\n          user {\n            id\n            displayName\n            avatar\n          }\n        }\n      }\n    "): (typeof documents)["\n      mutation recindRoom($partyId: ID!) {\n        recindRoom(partyId: $partyId) {\n          id\n          dates\n          room\n          user {\n            id\n            displayName\n            avatar\n          }\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation grantRoom($attendingId: ID!) {\n        grantRoom(attendingId: $attendingId) {\n          id\n          room\n        }\n      }\n    "): (typeof documents)["\n      mutation grantRoom($attendingId: ID!) {\n        grantRoom(attendingId: $attendingId) {\n          id\n          room\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation denyRoom($attendingId: ID!) {\n        denyRoom(attendingId: $attendingId) {\n          id\n          room\n        }\n      }\n    "): (typeof documents)["\n      mutation denyRoom($attendingId: ID!) {\n        denyRoom(attendingId: $attendingId) {\n          id\n          room\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment PartyAttendingInfo on Party {\n      id\n      startDate\n      endDate\n      roomsAvailable\n      attendings {\n        id\n        dates\n        room\n        user {\n          id\n          displayName\n          avatar\n        }\n      }\n    }\n  "): (typeof documents)["\n    fragment PartyAttendingInfo on Party {\n      id\n      startDate\n      endDate\n      roomsAvailable\n      attendings {\n        id\n        dates\n        room\n        user {\n          id\n          displayName\n          avatar\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query partyAttending($nextParty: Boolean!, $partyId: ID!) {\n        nextParty @include(if: $nextParty) {\n          ...PartyAttendingInfo\n        }\n\n        party(id: $partyId) @skip(if: $nextParty) {\n          ...PartyAttendingInfo\n        }\n      }\n\n      fragment PartyAttendingInfo on Party {\n        id\n        startDate\n        endDate\n        roomsAvailable\n        attendings {\n          id\n          dates\n          room\n          user {\n            id\n            displayName\n            avatar\n          }\n        }\n      }\n    "): (typeof documents)["\n      query partyAttending($nextParty: Boolean!, $partyId: ID!) {\n        nextParty @include(if: $nextParty) {\n          ...PartyAttendingInfo\n        }\n\n        party(id: $partyId) @skip(if: $nextParty) {\n          ...PartyAttendingInfo\n        }\n      }\n\n      fragment PartyAttendingInfo on Party {\n        id\n        startDate\n        endDate\n        roomsAvailable\n        attendings {\n          id\n          dates\n          room\n          user {\n            id\n            displayName\n            avatar\n          }\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation setAttendance($partyId: ID!, $dates: [Date!]!) {\n        setAttendance(partyId: $partyId, dates: $dates) {\n          id\n          attendings {\n            id\n            dates\n          }\n        }\n      }\n    "): (typeof documents)["\n      mutation setAttendance($partyId: ID!, $dates: [Date!]!) {\n        setAttendance(partyId: $partyId, dates: $dates) {\n          id\n          attendings {\n            id\n            dates\n          }\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation registerExternal(\n        $userName: String!\n        $email: String!\n        $password: String\n      ) {\n        register(userName: $userName, email: $email, password: $password) {\n          token\n          refreshToken\n          user {\n            id\n            displayName\n            avatar\n          }\n        }\n      }\n    "): (typeof documents)["\n      mutation registerExternal(\n        $userName: String!\n        $email: String!\n        $password: String\n      ) {\n        register(userName: $userName, email: $email, password: $password) {\n          token\n          refreshToken\n          user {\n            id\n            displayName\n            avatar\n          }\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query userList {\n        users {\n          id\n          displayName\n          avatar\n        }\n      }\n    "): (typeof documents)["\n      query userList {\n        users {\n          id\n          displayName\n          avatar\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation setOthersAttendance(\n        $partyId: ID!\n        $userId: ID\n        $dates: [Date!]!\n      ) {\n        setAttendance(partyId: $partyId, userId: $userId, dates: $dates) {\n          id\n          attendings {\n            id\n            dates\n          }\n        }\n      }\n    "): (typeof documents)["\n      mutation setOthersAttendance(\n        $partyId: ID!\n        $userId: ID\n        $dates: [Date!]!\n      ) {\n        setAttendance(partyId: $partyId, userId: $userId, dates: $dates) {\n          id\n          attendings {\n            id\n            dates\n          }\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query partyCountdown($nextParty: Boolean!, $partyId: ID!) {\n        nextParty @include(if: $nextParty) {\n          id\n          startDate\n          endDate\n        }\n\n        party(id: $partyId) @skip(if: $nextParty) {\n          id\n          startDate\n          endDate\n        }\n      }\n    "): (typeof documents)["\n      query partyCountdown($nextParty: Boolean!, $partyId: ID!) {\n        nextParty @include(if: $nextParty) {\n          id\n          startDate\n          endDate\n        }\n\n        party(id: $partyId) @skip(if: $nextParty) {\n          id\n          startDate\n          endDate\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query party($id: ID!) {\n        party(id: $id) {\n          id\n          startDate\n          endDate\n          attendings {\n            id\n            dates\n            user {\n              id\n              displayName\n              avatar\n            }\n          }\n        }\n      }\n    "): (typeof documents)["\n      query party($id: ID!) {\n        party(id: $id) {\n          id\n          startDate\n          endDate\n          attendings {\n            id\n            dates\n            user {\n              id\n              displayName\n              avatar\n            }\n          }\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query parties {\n        parties {\n          __typename\n          id\n          startDate\n          endDate\n          location\n          roomsAvailable\n          attendings {\n            id\n            dates\n            user {\n              id\n              displayName\n              avatar\n            }\n          }\n        }\n      }\n    "): (typeof documents)["\n      query parties {\n        parties {\n          __typename\n          id\n          startDate\n          endDate\n          location\n          roomsAvailable\n          attendings {\n            id\n            dates\n            user {\n              id\n              displayName\n              avatar\n            }\n          }\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query partyRow($id: ID!) {\n        party(id: $id) {\n          id\n          startDate\n          endDate\n          location\n          attendings {\n            id\n            dates\n            user {\n              id\n              displayName\n              avatar\n            }\n          }\n        }\n      }\n    "): (typeof documents)["\n      query partyRow($id: ID!) {\n        party(id: $id) {\n          id\n          startDate\n          endDate\n          location\n          attendings {\n            id\n            dates\n            user {\n              id\n              displayName\n              avatar\n            }\n          }\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation register(\n        $userName: String!\n        $email: String!\n        $password: String\n      ) {\n        register(userName: $userName, email: $email, password: $password) {\n          token\n          refreshToken\n        }\n      }\n    "): (typeof documents)["\n      mutation register(\n        $userName: String!\n        $email: String!\n        $password: String\n      ) {\n        register(userName: $userName, email: $email, password: $password) {\n          token\n          refreshToken\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation loginPassword($email: String!, $password: String!) {\n        loginPassword(email: $email, password: $password) {\n          token\n          refreshToken\n        }\n      }\n    "): (typeof documents)["\n      mutation loginPassword($email: String!, $password: String!) {\n        loginPassword(email: $email, password: $password) {\n          token\n          refreshToken\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation sendEmailLink($email: String!) {\n        sendMagicLink(email: $email)\n      }\n    "): (typeof documents)["\n      mutation sendEmailLink($email: String!) {\n        sendMagicLink(email: $email)\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation generateLoginOptions($userId: String) {\n        generatePasskeyLoginOptions(userId: $userId)\n      }\n    "): (typeof documents)["\n      mutation generateLoginOptions($userId: String) {\n        generatePasskeyLoginOptions(userId: $userId)\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation loginPasskey($response: JSON!) {\n        loginPasskey(response: $response) {\n          token\n          refreshToken\n          credentialID\n        }\n      }\n    "): (typeof documents)["\n      mutation loginPasskey($response: JSON!) {\n        loginPasskey(response: $response) {\n          token\n          refreshToken\n          credentialID\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation generateRegistrationOptions($userId: String!) {\n        generatePasskeyRegisterOptions(userId: $userId)\n      }\n    "): (typeof documents)["\n      mutation generateRegistrationOptions($userId: String!) {\n        generatePasskeyRegisterOptions(userId: $userId)\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation registerPasskey(\n        $userId: String!\n        $name: String!\n        $response: JSON!\n      ) {\n        registerPasskey(userId: $userId, name: $name, response: $response) {\n          token\n          device {\n            id\n            name\n          }\n        }\n      }\n    "): (typeof documents)["\n      mutation registerPasskey(\n        $userId: String!\n        $name: String!\n        $response: JSON!\n      ) {\n        registerPasskey(userId: $userId, name: $name, response: $response) {\n          token\n          device {\n            id\n            name\n          }\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query myDevices {\n        me {\n          id\n          devices {\n            id\n            name\n            createdAt\n            lastUsedAt\n          }\n        }\n      }\n    "): (typeof documents)["\n      query myDevices {\n        me {\n          id\n          devices {\n            id\n            name\n            createdAt\n            lastUsedAt\n          }\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation updateAuthDevice($id: ID!, $name: String!) {\n        updateAuthDevice(id: $id, name: $name) {\n          id\n          name\n        }\n      }\n    "): (typeof documents)["\n      mutation updateAuthDevice($id: ID!, $name: String!) {\n        updateAuthDevice(id: $id, name: $name) {\n          id\n          name\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation deleteAuthDevice($id: ID!) {\n        deleteAuthDevice(id: $id) {\n          id\n          name\n        }\n      }\n    "): (typeof documents)["\n      mutation deleteAuthDevice($id: ID!) {\n        deleteAuthDevice(id: $id) {\n          id\n          name\n        }\n      }\n    "];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;