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
    "\n                      mutation refreshLogin($refreshToken: String!) {\n                        refreshLogin(refreshToken: $refreshToken) {\n                          __typename\n                          token\n                          refreshToken\n                        }\n                      }\n                    ": types.RefreshLoginDocument,
    "\n      query party($id: ID!) {\n        party(id: $id) {\n          id\n          startDate\n          endDate\n          attendings {\n            id\n            dates\n            user {\n              id\n              displayName\n              avatar\n            }\n          }\n          pictures {\n            id\n            url\n            meta {\n              takeAt\n            }\n          }\n        }\n      }\n    ": types.PartyDocument,
    "\n      mutation setAttendance($partyId: ID!, $dates: [Date!]!) {\n        setAttendance(partyId: $partyId, dates: $dates) {\n          id\n          attendings {\n            id\n            dates\n          }\n        }\n      }\n    ": types.SetAttendanceDocument,
    "\n      mutation addPicture($input: PictureInput!) {\n        addPicture(input: $input) {\n          id\n          url\n          party {\n            id\n          }\n          tags {\n            id\n            user {\n              id\n              displayName\n              avatar\n            }\n            boundingBox\n          }\n          meta {\n            width\n            height\n            takeAt\n          }\n        }\n      }\n    ": types.AddPictureDocument,
    "\n      query parties {\n        parties {\n          __typename\n          id\n          startDate\n          endDate\n          location\n          roomsAvailable\n          attendings {\n            id\n            dates\n            user {\n              id\n              displayName\n              avatar\n            }\n          }\n        }\n      }\n    ": types.PartiesDocument,
    "\n      query partyRow($id: ID!) {\n        party(id: $id) {\n          id\n          startDate\n          endDate\n          location\n          attendings {\n            id\n            dates\n            user {\n              id\n              displayName\n              avatar\n            }\n          }\n        }\n      }\n    ": types.PartyRowDocument,
    "\n      mutation updateParty($input: PartyInput!) {\n        updateParty(input: $input) {\n          id\n          startDate\n          endDate\n          location\n          roomsAvailable\n        }\n      }\n    ": types.UpdatePartyDocument,
    "\n      mutation registerExternal(\n        $userName: String!\n        $email: String!\n        $password: String\n      ) {\n        register(userName: $userName, email: $email, password: $password) {\n          token\n          refreshToken\n          user {\n            id\n            displayName\n            avatar\n          }\n        }\n      }\n    ": types.RegisterExternalDocument,
    "\n      query userList {\n        users {\n          id\n          displayName\n          avatar\n        }\n      }\n    ": types.UserListDocument,
    "\n      query adminGames {\n        games {\n          id\n          name\n          image\n        }\n      }\n    ": types.AdminGamesDocument,
    "\n      mutation updateGame($id: ID!, $image: File!) {\n        updateGame(input: { id: $id, image: $image }) {\n          id\n          image\n        }\n      }\n    ": types.UpdateGameDocument,
    "\n      query NextPartyBudget {\n        nextParty {\n          id\n          finalCostPerDay\n          donations {\n            id\n            donator {\n              id\n              displayName\n              avatar\n            }\n            amount\n            dedication\n          }\n          attendings {\n            id\n            dates\n            rentDues\n            paidDues\n            notificationSent\n            user {\n              id\n              displayName\n              avatar\n            }\n          }\n        }\n      }\n    ": types.NextPartyBudgetDocument,
    "\n      mutation sendPaymentNotification($userId: ID!) {\n        sendPaymentNotification(userId: $userId) {\n          id\n          notificationSent\n        }\n      }\n    ": types.SendPaymentNotificationDocument,
    "\n        mutation sendPaymentNotificationToAll {\n          sendPaymentNotificationToAll {\n            id\n            notificationSent\n          }\n        }\n      ": types.SendPaymentNotificationToAllDocument,
    "\n      mutation updatePaidDues($id: ID!, $paidDues: Float!) {\n        updatePaidDues(attendingId: $id, paidDues: $paidDues) {\n          id\n          paidDues\n        }\n      }\n    ": types.UpdatePaidDuesDocument,
    "\n      query adminUsers {\n        users {\n          id\n          displayName\n          avatar\n          email\n          roles\n        }\n      }\n    ": types.AdminUsersDocument,
    "\n      mutation updateUserRoles($id: ID!, $roles: [Role!]!) {\n        updateRoles(id: $id, roles: $roles) {\n          id\n          roles\n        }\n      }\n    ": types.UpdateUserRolesDocument,
    "\n      query gameCarousel {\n        nextParty {\n          gamesPlayed {\n            id\n            game {\n              id\n              name\n              image\n            }\n          }\n        }\n      }\n    ": types.GameCarouselDocument,
    "\n      query partyAttending {\n        nextParty {\n          id\n          tentative\n          startDate\n          endDate\n          roomsAvailable\n          seatsAvailable\n          registrationDeadline\n          attendings {\n            id\n            dates\n            room\n            applicationDate\n            user {\n              id\n              displayName\n              avatar\n            }\n          }\n        }\n      }\n    ": types.PartyAttendingDocument,
    "\n      mutation setMyOrOtherAttendance(\n        $partyId: ID!\n        $dates: [Date!]!\n        $userId: ID\n      ) {\n        setAttendance(partyId: $partyId, dates: $dates, userId: $userId) {\n          id\n          attendings {\n            id\n            dates\n          }\n        }\n      }\n    ": types.SetMyOrOtherAttendanceDocument,
    "\n      mutation removeAttendance($partyId: ID!) {\n        removeAttendance(partyId: $partyId) {\n          id\n          attendings {\n            id\n            dates\n          }\n        }\n      }\n    ": types.RemoveAttendanceDocument,
    "\n      query checkInDate {\n        nextParty {\n          id\n          attending {\n            id\n            dates\n            checkIn\n            checkOut\n            room\n          }\n        }\n      }\n    ": types.CheckInDateDocument,
    "\n      mutation checkIn($userId: ID!) {\n        checkIn(userId: $userId) {\n          id\n          checkIn\n          checkOut\n        }\n      }\n    ": types.CheckInDocument,
    "\n      mutation checkOut($userId: ID!) {\n        checkOut(userId: $userId) {\n          id\n          checkIn\n          checkOut\n        }\n      }\n    ": types.CheckOutDocument,
    "\n      query checkInDateOfUser($userId: ID!) {\n        nextParty {\n          id\n          attending(userId: $userId) {\n            id\n            dates\n            checkIn\n            checkOut\n            room\n          }\n        }\n      }\n    ": types.CheckInDateOfUserDocument,
    "\n      query nextPartyCosts {\n        nextParty {\n          id\n          tentative\n          rentalCosts\n          paidDues\n          finalCostPerDay\n          payday\n          donations {\n            id\n            amount\n            donator {\n              id\n              displayName\n              avatar\n            }\n            dedication\n          }\n          attendings {\n            id\n            dates\n            paidDues\n            user {\n              id\n            }\n          }\n        }\n      }\n    ": types.NextPartyCostsDocument,
    "\n      query partyCountdown {\n        nextParty {\n          id\n          startDate\n          endDate\n          tentative\n          registrationDeadline\n        }\n      }\n    ": types.PartyCountdownDocument,
    "\n      mutation donateToParty(\n        $amount: Float!\n        $dedication: DonationDedication!\n        $incognito: Boolean!\n      ) {\n        donate(\n          amount: $amount\n          dedication: $dedication\n          incognito: $incognito\n        ) {\n          id\n          amount\n          dedication\n          donator {\n            id\n            displayName\n            avatar\n          }\n          party {\n            id\n          }\n        }\n      }\n    ": types.DonateToPartyDocument,
    "\n      query nextPartyDonations {\n        nextParty {\n          id\n          tentative\n          registrationDeadline\n          donations {\n            __typename\n            id\n            amount\n            donator {\n              id\n              displayName\n              avatar\n            }\n            dedication\n            received\n          }\n        }\n      }\n    ": types.NextPartyDonationsDocument,
    "\n      mutation rescindDonation($id: ID!) {\n        rescindDonation(id: $id) {\n          id\n          party {\n            id\n          }\n        }\n      }\n    ": types.RescindDonationDocument,
    "\n    fragment PartyEventsInfo on Party {\n      id\n      events {\n        __typename\n        id\n        image\n        date\n        startTime\n        endTime\n        name\n        description\n        organizer {\n          id\n          displayName\n          avatar\n        }\n        participants {\n          id\n          displayName\n          avatar\n        }\n      }\n    }\n  ": types.PartyEventsInfoFragmentDoc,
    "\n      query partyEvents($nextParty: Boolean!, $partyId: ID!) {\n        nextParty @include(if: $nextParty) {\n          ...PartyEventsInfo\n        }\n\n        party(id: $partyId) @skip(if: $nextParty) {\n          ...PartyEventsInfo\n        }\n      }\n    ": types.PartyEventsDocument,
    "\n      mutation toggleEventParticipation(\n        $id: ID!\n        $userId: ID\n        $participate: Boolean!\n      ) {\n        participateInEvent(id: $id, userId: $userId)\n          @include(if: $participate) {\n          id\n          participants {\n            id\n            displayName\n            avatar\n          }\n        }\n        leaveEvent(id: $id, userId: $userId) @skip(if: $participate) {\n          id\n          participants {\n            id\n            displayName\n            avatar\n          }\n        }\n      }\n    ": types.ToggleEventParticipationDocument,
    "\n      mutation planEvent($input: EventInput!) {\n        planEvent(input: $input) {\n          id\n          image\n          date\n          startTime\n          endTime\n          name\n          description\n          organizer {\n            id\n            displayName\n            avatar\n          }\n          participants {\n            id\n            displayName\n            avatar\n          }\n        }\n      }\n    ": types.PlanEventDocument,
    "\n      query partyGames {\n        nextParty {\n          id\n          startDate\n          endDate\n          attendings {\n            id\n            dates\n            user {\n              id\n              displayName\n              avatar\n            }\n            gamesPlayed {\n              id\n              name\n              image\n            }\n          }\n        }\n\n        games {\n          id\n          name\n          image\n        }\n      }\n    ": types.PartyGamesDocument,
    "\n      mutation addGameToParty($name: String!, $partyId: ID!) {\n        addGameToParty(name: $name, partyId: $partyId) {\n          game {\n            id\n            name\n            image\n          }\n          attending {\n            id\n            gamesPlayed {\n              id\n              name\n              image\n            }\n          }\n        }\n      }\n    ": types.AddGameToPartyDocument,
    "\n      mutation setGamesPlayed($partyId: ID!, $gameIds: [ID!]!) {\n        setGamesPlayed(partyId: $partyId, gameIds: $gameIds) {\n          id\n          gamesPlayed {\n            id\n            name\n            image\n          }\n        }\n      }\n    ": types.SetGamesPlayedDocument,
    "\n      query nextPartyLocation {\n        nextParty {\n          id\n          locationWidgetSrc\n        }\n      }\n    ": types.NextPartyLocationDocument,
    "\n      query PartyPaymentInfo {\n        nextParty {\n          id\n          finalCostPerDay\n          payday\n          attendings {\n            id\n            dates\n            paidDues\n            user {\n              id\n              displayName\n            }\n          }\n          donations {\n            id\n            amount\n            dedication\n            donator {\n              id\n            }\n          }\n        }\n      }\n    ": types.PartyPaymentInfoDocument,
    "\n      mutation CreatePayPalOrder {\n        createPayPalOrder\n      }\n    ": types.CreatePayPalOrderDocument,
    "\n      mutation CapturePayPalOrder($orderId: ID!) {\n        capturePayPalOrder(orderId: $orderId) {\n          id\n          paidDues\n        }\n      }\n    ": types.CapturePayPalOrderDocument,
    "\n      query nextPartyRooms {\n        nextParty {\n          id\n          tentative\n          roomsAvailable\n          attendings {\n            id\n            room\n            user {\n              id\n              displayName\n              avatar\n            }\n          }\n        }\n      }\n    ": types.NextPartyRoomsDocument,
    "\n      mutation requestRoom($partyId: ID!) {\n        requestRoom(partyId: $partyId) {\n          id\n          dates\n          room\n          user {\n            id\n            displayName\n            avatar\n          }\n        }\n      }\n    ": types.RequestRoomDocument,
    "\n      mutation recindRoom($partyId: ID!) {\n        recindRoom(partyId: $partyId) {\n          id\n          dates\n          room\n          user {\n            id\n            displayName\n            avatar\n          }\n        }\n      }\n    ": types.RecindRoomDocument,
    "\n      mutation grantRoom($attendingId: ID!) {\n        grantRoom(attendingId: $attendingId) {\n          id\n          room\n        }\n      }\n    ": types.GrantRoomDocument,
    "\n      mutation denyRoom($attendingId: ID!) {\n        denyRoom(attendingId: $attendingId) {\n          id\n          room\n        }\n      }\n    ": types.DenyRoomDocument,
    "\n      mutation register(\n        $userName: String!\n        $email: String!\n        $password: String\n      ) {\n        register(userName: $userName, email: $email, password: $password) {\n          token\n          refreshToken\n        }\n      }\n    ": types.RegisterDocument,
    "\n      mutation sendEmailLink($email: String!) {\n        sendMagicLink(email: $email)\n      }\n    ": types.SendEmailLinkDocument,
    "\n      mutation loginPassword($email: String!, $password: String!) {\n        loginPassword(email: $email, password: $password) {\n          token\n          refreshToken\n        }\n      }\n    ": types.LoginPasswordDocument,
    "\n      query nextPartyDates {\n        nextParty {\n          __typename\n          id\n          startDate\n          endDate\n        }\n      }\n    ": types.NextPartyDatesDocument,
    "\n      query myDevices {\n        me {\n          id\n          devices {\n            id\n            name\n            createdAt\n            lastUsedAt\n          }\n        }\n      }\n    ": types.MyDevicesDocument,
    "\n      mutation updateAuthDevice($id: ID!, $name: String!) {\n        updateAuthDevice(id: $id, name: $name) {\n          id\n          name\n        }\n      }\n    ": types.UpdateAuthDeviceDocument,
    "\n      mutation deleteAuthDevice($id: ID!) {\n        deleteAuthDevice(id: $id) {\n          id\n          name\n        }\n      }\n    ": types.DeleteAuthDeviceDocument,
    "\n      mutation updateProfile($input: ProfileInput!) {\n        updateProfile(input: $input) {\n          id\n          name\n          displayName\n          email\n          avatar\n          avatarUrl\n        }\n      }\n    ": types.UpdateProfileDocument,
    "\n      mutation removeProfilePicture {\n        removeProfilePicture {\n          id\n          avatar\n          avatarUrl\n        }\n      }\n    ": types.RemoveProfilePictureDocument,
    "\n      mutation generateLoginOptions($userId: String) {\n        generatePasskeyLoginOptions(userId: $userId)\n      }\n    ": types.GenerateLoginOptionsDocument,
    "\n      mutation loginPasskey($response: JSON!) {\n        loginPasskey(response: $response) {\n          token\n          refreshToken\n          credentialID\n        }\n      }\n    ": types.LoginPasskeyDocument,
    "\n      mutation generateRegistrationOptions($userId: String!) {\n        generatePasskeyRegisterOptions(userId: $userId)\n      }\n    ": types.GenerateRegistrationOptionsDocument,
    "\n      mutation registerPasskey(\n        $userId: String!\n        $name: String!\n        $response: JSON!\n      ) {\n        registerPasskey(userId: $userId, name: $name, response: $response) {\n          token\n          device {\n            id\n            name\n          }\n        }\n      }\n    ": types.RegisterPasskeyDocument,
    "\n        mutation loginMagicLink($magicLinkId: String!) {\n          loginMagicLink(magicLinkId: $magicLinkId) {\n            token\n            refreshToken\n          }\n        }\n      ": types.LoginMagicLinkDocument,
    "\n        mutation syncCache {\n          syncCache(clear: true)\n        }\n      ": types.SyncCacheDocument,
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
export function graphql(source: "\n                      mutation refreshLogin($refreshToken: String!) {\n                        refreshLogin(refreshToken: $refreshToken) {\n                          __typename\n                          token\n                          refreshToken\n                        }\n                      }\n                    "): (typeof documents)["\n                      mutation refreshLogin($refreshToken: String!) {\n                        refreshLogin(refreshToken: $refreshToken) {\n                          __typename\n                          token\n                          refreshToken\n                        }\n                      }\n                    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query party($id: ID!) {\n        party(id: $id) {\n          id\n          startDate\n          endDate\n          attendings {\n            id\n            dates\n            user {\n              id\n              displayName\n              avatar\n            }\n          }\n          pictures {\n            id\n            url\n            meta {\n              takeAt\n            }\n          }\n        }\n      }\n    "): (typeof documents)["\n      query party($id: ID!) {\n        party(id: $id) {\n          id\n          startDate\n          endDate\n          attendings {\n            id\n            dates\n            user {\n              id\n              displayName\n              avatar\n            }\n          }\n          pictures {\n            id\n            url\n            meta {\n              takeAt\n            }\n          }\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation setAttendance($partyId: ID!, $dates: [Date!]!) {\n        setAttendance(partyId: $partyId, dates: $dates) {\n          id\n          attendings {\n            id\n            dates\n          }\n        }\n      }\n    "): (typeof documents)["\n      mutation setAttendance($partyId: ID!, $dates: [Date!]!) {\n        setAttendance(partyId: $partyId, dates: $dates) {\n          id\n          attendings {\n            id\n            dates\n          }\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation addPicture($input: PictureInput!) {\n        addPicture(input: $input) {\n          id\n          url\n          party {\n            id\n          }\n          tags {\n            id\n            user {\n              id\n              displayName\n              avatar\n            }\n            boundingBox\n          }\n          meta {\n            width\n            height\n            takeAt\n          }\n        }\n      }\n    "): (typeof documents)["\n      mutation addPicture($input: PictureInput!) {\n        addPicture(input: $input) {\n          id\n          url\n          party {\n            id\n          }\n          tags {\n            id\n            user {\n              id\n              displayName\n              avatar\n            }\n            boundingBox\n          }\n          meta {\n            width\n            height\n            takeAt\n          }\n        }\n      }\n    "];
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
export function graphql(source: "\n      mutation updateParty($input: PartyInput!) {\n        updateParty(input: $input) {\n          id\n          startDate\n          endDate\n          location\n          roomsAvailable\n        }\n      }\n    "): (typeof documents)["\n      mutation updateParty($input: PartyInput!) {\n        updateParty(input: $input) {\n          id\n          startDate\n          endDate\n          location\n          roomsAvailable\n        }\n      }\n    "];
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
export function graphql(source: "\n      query adminGames {\n        games {\n          id\n          name\n          image\n        }\n      }\n    "): (typeof documents)["\n      query adminGames {\n        games {\n          id\n          name\n          image\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation updateGame($id: ID!, $image: File!) {\n        updateGame(input: { id: $id, image: $image }) {\n          id\n          image\n        }\n      }\n    "): (typeof documents)["\n      mutation updateGame($id: ID!, $image: File!) {\n        updateGame(input: { id: $id, image: $image }) {\n          id\n          image\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query NextPartyBudget {\n        nextParty {\n          id\n          finalCostPerDay\n          donations {\n            id\n            donator {\n              id\n              displayName\n              avatar\n            }\n            amount\n            dedication\n          }\n          attendings {\n            id\n            dates\n            rentDues\n            paidDues\n            notificationSent\n            user {\n              id\n              displayName\n              avatar\n            }\n          }\n        }\n      }\n    "): (typeof documents)["\n      query NextPartyBudget {\n        nextParty {\n          id\n          finalCostPerDay\n          donations {\n            id\n            donator {\n              id\n              displayName\n              avatar\n            }\n            amount\n            dedication\n          }\n          attendings {\n            id\n            dates\n            rentDues\n            paidDues\n            notificationSent\n            user {\n              id\n              displayName\n              avatar\n            }\n          }\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation sendPaymentNotification($userId: ID!) {\n        sendPaymentNotification(userId: $userId) {\n          id\n          notificationSent\n        }\n      }\n    "): (typeof documents)["\n      mutation sendPaymentNotification($userId: ID!) {\n        sendPaymentNotification(userId: $userId) {\n          id\n          notificationSent\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n        mutation sendPaymentNotificationToAll {\n          sendPaymentNotificationToAll {\n            id\n            notificationSent\n          }\n        }\n      "): (typeof documents)["\n        mutation sendPaymentNotificationToAll {\n          sendPaymentNotificationToAll {\n            id\n            notificationSent\n          }\n        }\n      "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation updatePaidDues($id: ID!, $paidDues: Float!) {\n        updatePaidDues(attendingId: $id, paidDues: $paidDues) {\n          id\n          paidDues\n        }\n      }\n    "): (typeof documents)["\n      mutation updatePaidDues($id: ID!, $paidDues: Float!) {\n        updatePaidDues(attendingId: $id, paidDues: $paidDues) {\n          id\n          paidDues\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query adminUsers {\n        users {\n          id\n          displayName\n          avatar\n          email\n          roles\n        }\n      }\n    "): (typeof documents)["\n      query adminUsers {\n        users {\n          id\n          displayName\n          avatar\n          email\n          roles\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation updateUserRoles($id: ID!, $roles: [Role!]!) {\n        updateRoles(id: $id, roles: $roles) {\n          id\n          roles\n        }\n      }\n    "): (typeof documents)["\n      mutation updateUserRoles($id: ID!, $roles: [Role!]!) {\n        updateRoles(id: $id, roles: $roles) {\n          id\n          roles\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query gameCarousel {\n        nextParty {\n          gamesPlayed {\n            id\n            game {\n              id\n              name\n              image\n            }\n          }\n        }\n      }\n    "): (typeof documents)["\n      query gameCarousel {\n        nextParty {\n          gamesPlayed {\n            id\n            game {\n              id\n              name\n              image\n            }\n          }\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query partyAttending {\n        nextParty {\n          id\n          tentative\n          startDate\n          endDate\n          roomsAvailable\n          seatsAvailable\n          registrationDeadline\n          attendings {\n            id\n            dates\n            room\n            applicationDate\n            user {\n              id\n              displayName\n              avatar\n            }\n          }\n        }\n      }\n    "): (typeof documents)["\n      query partyAttending {\n        nextParty {\n          id\n          tentative\n          startDate\n          endDate\n          roomsAvailable\n          seatsAvailable\n          registrationDeadline\n          attendings {\n            id\n            dates\n            room\n            applicationDate\n            user {\n              id\n              displayName\n              avatar\n            }\n          }\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation setMyOrOtherAttendance(\n        $partyId: ID!\n        $dates: [Date!]!\n        $userId: ID\n      ) {\n        setAttendance(partyId: $partyId, dates: $dates, userId: $userId) {\n          id\n          attendings {\n            id\n            dates\n          }\n        }\n      }\n    "): (typeof documents)["\n      mutation setMyOrOtherAttendance(\n        $partyId: ID!\n        $dates: [Date!]!\n        $userId: ID\n      ) {\n        setAttendance(partyId: $partyId, dates: $dates, userId: $userId) {\n          id\n          attendings {\n            id\n            dates\n          }\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation removeAttendance($partyId: ID!) {\n        removeAttendance(partyId: $partyId) {\n          id\n          attendings {\n            id\n            dates\n          }\n        }\n      }\n    "): (typeof documents)["\n      mutation removeAttendance($partyId: ID!) {\n        removeAttendance(partyId: $partyId) {\n          id\n          attendings {\n            id\n            dates\n          }\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query checkInDate {\n        nextParty {\n          id\n          attending {\n            id\n            dates\n            checkIn\n            checkOut\n            room\n          }\n        }\n      }\n    "): (typeof documents)["\n      query checkInDate {\n        nextParty {\n          id\n          attending {\n            id\n            dates\n            checkIn\n            checkOut\n            room\n          }\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation checkIn($userId: ID!) {\n        checkIn(userId: $userId) {\n          id\n          checkIn\n          checkOut\n        }\n      }\n    "): (typeof documents)["\n      mutation checkIn($userId: ID!) {\n        checkIn(userId: $userId) {\n          id\n          checkIn\n          checkOut\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation checkOut($userId: ID!) {\n        checkOut(userId: $userId) {\n          id\n          checkIn\n          checkOut\n        }\n      }\n    "): (typeof documents)["\n      mutation checkOut($userId: ID!) {\n        checkOut(userId: $userId) {\n          id\n          checkIn\n          checkOut\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query checkInDateOfUser($userId: ID!) {\n        nextParty {\n          id\n          attending(userId: $userId) {\n            id\n            dates\n            checkIn\n            checkOut\n            room\n          }\n        }\n      }\n    "): (typeof documents)["\n      query checkInDateOfUser($userId: ID!) {\n        nextParty {\n          id\n          attending(userId: $userId) {\n            id\n            dates\n            checkIn\n            checkOut\n            room\n          }\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query nextPartyCosts {\n        nextParty {\n          id\n          tentative\n          rentalCosts\n          paidDues\n          finalCostPerDay\n          payday\n          donations {\n            id\n            amount\n            donator {\n              id\n              displayName\n              avatar\n            }\n            dedication\n          }\n          attendings {\n            id\n            dates\n            paidDues\n            user {\n              id\n            }\n          }\n        }\n      }\n    "): (typeof documents)["\n      query nextPartyCosts {\n        nextParty {\n          id\n          tentative\n          rentalCosts\n          paidDues\n          finalCostPerDay\n          payday\n          donations {\n            id\n            amount\n            donator {\n              id\n              displayName\n              avatar\n            }\n            dedication\n          }\n          attendings {\n            id\n            dates\n            paidDues\n            user {\n              id\n            }\n          }\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query partyCountdown {\n        nextParty {\n          id\n          startDate\n          endDate\n          tentative\n          registrationDeadline\n        }\n      }\n    "): (typeof documents)["\n      query partyCountdown {\n        nextParty {\n          id\n          startDate\n          endDate\n          tentative\n          registrationDeadline\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation donateToParty(\n        $amount: Float!\n        $dedication: DonationDedication!\n        $incognito: Boolean!\n      ) {\n        donate(\n          amount: $amount\n          dedication: $dedication\n          incognito: $incognito\n        ) {\n          id\n          amount\n          dedication\n          donator {\n            id\n            displayName\n            avatar\n          }\n          party {\n            id\n          }\n        }\n      }\n    "): (typeof documents)["\n      mutation donateToParty(\n        $amount: Float!\n        $dedication: DonationDedication!\n        $incognito: Boolean!\n      ) {\n        donate(\n          amount: $amount\n          dedication: $dedication\n          incognito: $incognito\n        ) {\n          id\n          amount\n          dedication\n          donator {\n            id\n            displayName\n            avatar\n          }\n          party {\n            id\n          }\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query nextPartyDonations {\n        nextParty {\n          id\n          tentative\n          registrationDeadline\n          donations {\n            __typename\n            id\n            amount\n            donator {\n              id\n              displayName\n              avatar\n            }\n            dedication\n            received\n          }\n        }\n      }\n    "): (typeof documents)["\n      query nextPartyDonations {\n        nextParty {\n          id\n          tentative\n          registrationDeadline\n          donations {\n            __typename\n            id\n            amount\n            donator {\n              id\n              displayName\n              avatar\n            }\n            dedication\n            received\n          }\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation rescindDonation($id: ID!) {\n        rescindDonation(id: $id) {\n          id\n          party {\n            id\n          }\n        }\n      }\n    "): (typeof documents)["\n      mutation rescindDonation($id: ID!) {\n        rescindDonation(id: $id) {\n          id\n          party {\n            id\n          }\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment PartyEventsInfo on Party {\n      id\n      events {\n        __typename\n        id\n        image\n        date\n        startTime\n        endTime\n        name\n        description\n        organizer {\n          id\n          displayName\n          avatar\n        }\n        participants {\n          id\n          displayName\n          avatar\n        }\n      }\n    }\n  "): (typeof documents)["\n    fragment PartyEventsInfo on Party {\n      id\n      events {\n        __typename\n        id\n        image\n        date\n        startTime\n        endTime\n        name\n        description\n        organizer {\n          id\n          displayName\n          avatar\n        }\n        participants {\n          id\n          displayName\n          avatar\n        }\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query partyEvents($nextParty: Boolean!, $partyId: ID!) {\n        nextParty @include(if: $nextParty) {\n          ...PartyEventsInfo\n        }\n\n        party(id: $partyId) @skip(if: $nextParty) {\n          ...PartyEventsInfo\n        }\n      }\n    "): (typeof documents)["\n      query partyEvents($nextParty: Boolean!, $partyId: ID!) {\n        nextParty @include(if: $nextParty) {\n          ...PartyEventsInfo\n        }\n\n        party(id: $partyId) @skip(if: $nextParty) {\n          ...PartyEventsInfo\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation toggleEventParticipation(\n        $id: ID!\n        $userId: ID\n        $participate: Boolean!\n      ) {\n        participateInEvent(id: $id, userId: $userId)\n          @include(if: $participate) {\n          id\n          participants {\n            id\n            displayName\n            avatar\n          }\n        }\n        leaveEvent(id: $id, userId: $userId) @skip(if: $participate) {\n          id\n          participants {\n            id\n            displayName\n            avatar\n          }\n        }\n      }\n    "): (typeof documents)["\n      mutation toggleEventParticipation(\n        $id: ID!\n        $userId: ID\n        $participate: Boolean!\n      ) {\n        participateInEvent(id: $id, userId: $userId)\n          @include(if: $participate) {\n          id\n          participants {\n            id\n            displayName\n            avatar\n          }\n        }\n        leaveEvent(id: $id, userId: $userId) @skip(if: $participate) {\n          id\n          participants {\n            id\n            displayName\n            avatar\n          }\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation planEvent($input: EventInput!) {\n        planEvent(input: $input) {\n          id\n          image\n          date\n          startTime\n          endTime\n          name\n          description\n          organizer {\n            id\n            displayName\n            avatar\n          }\n          participants {\n            id\n            displayName\n            avatar\n          }\n        }\n      }\n    "): (typeof documents)["\n      mutation planEvent($input: EventInput!) {\n        planEvent(input: $input) {\n          id\n          image\n          date\n          startTime\n          endTime\n          name\n          description\n          organizer {\n            id\n            displayName\n            avatar\n          }\n          participants {\n            id\n            displayName\n            avatar\n          }\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query partyGames {\n        nextParty {\n          id\n          startDate\n          endDate\n          attendings {\n            id\n            dates\n            user {\n              id\n              displayName\n              avatar\n            }\n            gamesPlayed {\n              id\n              name\n              image\n            }\n          }\n        }\n\n        games {\n          id\n          name\n          image\n        }\n      }\n    "): (typeof documents)["\n      query partyGames {\n        nextParty {\n          id\n          startDate\n          endDate\n          attendings {\n            id\n            dates\n            user {\n              id\n              displayName\n              avatar\n            }\n            gamesPlayed {\n              id\n              name\n              image\n            }\n          }\n        }\n\n        games {\n          id\n          name\n          image\n        }\n      }\n    "];
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
export function graphql(source: "\n      query PartyPaymentInfo {\n        nextParty {\n          id\n          finalCostPerDay\n          payday\n          attendings {\n            id\n            dates\n            paidDues\n            user {\n              id\n              displayName\n            }\n          }\n          donations {\n            id\n            amount\n            dedication\n            donator {\n              id\n            }\n          }\n        }\n      }\n    "): (typeof documents)["\n      query PartyPaymentInfo {\n        nextParty {\n          id\n          finalCostPerDay\n          payday\n          attendings {\n            id\n            dates\n            paidDues\n            user {\n              id\n              displayName\n            }\n          }\n          donations {\n            id\n            amount\n            dedication\n            donator {\n              id\n            }\n          }\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation CreatePayPalOrder {\n        createPayPalOrder\n      }\n    "): (typeof documents)["\n      mutation CreatePayPalOrder {\n        createPayPalOrder\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation CapturePayPalOrder($orderId: ID!) {\n        capturePayPalOrder(orderId: $orderId) {\n          id\n          paidDues\n        }\n      }\n    "): (typeof documents)["\n      mutation CapturePayPalOrder($orderId: ID!) {\n        capturePayPalOrder(orderId: $orderId) {\n          id\n          paidDues\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query nextPartyRooms {\n        nextParty {\n          id\n          tentative\n          roomsAvailable\n          attendings {\n            id\n            room\n            user {\n              id\n              displayName\n              avatar\n            }\n          }\n        }\n      }\n    "): (typeof documents)["\n      query nextPartyRooms {\n        nextParty {\n          id\n          tentative\n          roomsAvailable\n          attendings {\n            id\n            room\n            user {\n              id\n              displayName\n              avatar\n            }\n          }\n        }\n      }\n    "];
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
export function graphql(source: "\n      mutation register(\n        $userName: String!\n        $email: String!\n        $password: String\n      ) {\n        register(userName: $userName, email: $email, password: $password) {\n          token\n          refreshToken\n        }\n      }\n    "): (typeof documents)["\n      mutation register(\n        $userName: String!\n        $email: String!\n        $password: String\n      ) {\n        register(userName: $userName, email: $email, password: $password) {\n          token\n          refreshToken\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation sendEmailLink($email: String!) {\n        sendMagicLink(email: $email)\n      }\n    "): (typeof documents)["\n      mutation sendEmailLink($email: String!) {\n        sendMagicLink(email: $email)\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation loginPassword($email: String!, $password: String!) {\n        loginPassword(email: $email, password: $password) {\n          token\n          refreshToken\n        }\n      }\n    "): (typeof documents)["\n      mutation loginPassword($email: String!, $password: String!) {\n        loginPassword(email: $email, password: $password) {\n          token\n          refreshToken\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      query nextPartyDates {\n        nextParty {\n          __typename\n          id\n          startDate\n          endDate\n        }\n      }\n    "): (typeof documents)["\n      query nextPartyDates {\n        nextParty {\n          __typename\n          id\n          startDate\n          endDate\n        }\n      }\n    "];
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
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation updateProfile($input: ProfileInput!) {\n        updateProfile(input: $input) {\n          id\n          name\n          displayName\n          email\n          avatar\n          avatarUrl\n        }\n      }\n    "): (typeof documents)["\n      mutation updateProfile($input: ProfileInput!) {\n        updateProfile(input: $input) {\n          id\n          name\n          displayName\n          email\n          avatar\n          avatarUrl\n        }\n      }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n      mutation removeProfilePicture {\n        removeProfilePicture {\n          id\n          avatar\n          avatarUrl\n        }\n      }\n    "): (typeof documents)["\n      mutation removeProfilePicture {\n        removeProfilePicture {\n          id\n          avatar\n          avatarUrl\n        }\n      }\n    "];
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
export function graphql(source: "\n        mutation loginMagicLink($magicLinkId: String!) {\n          loginMagicLink(magicLinkId: $magicLinkId) {\n            token\n            refreshToken\n          }\n        }\n      "): (typeof documents)["\n        mutation loginMagicLink($magicLinkId: String!) {\n          loginMagicLink(magicLinkId: $magicLinkId) {\n            token\n            refreshToken\n          }\n        }\n      "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n        mutation syncCache {\n          syncCache(clear: true)\n        }\n      "): (typeof documents)["\n        mutation syncCache {\n          syncCache(clear: true)\n        }\n      "];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;