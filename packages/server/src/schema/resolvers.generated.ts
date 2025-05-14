/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated";
import { games as Query_games } from "./game/resolvers/Query/games";
import { me as Query_me } from "./user/resolvers/Query/me";
import { moneyTransfers as Query_moneyTransfers } from "./money/resolvers/Query/moneyTransfers";
import { nextParty as Query_nextParty } from "./party/resolvers/Query/nextParty";
import { parties as Query_parties } from "./party/resolvers/Query/parties";
import { party as Query_party } from "./party/resolvers/Query/party";
import { users as Query_users } from "./user/resolvers/Query/users";
import { addGameToParty as Mutation_addGameToParty } from "./game/resolvers/Mutation/addGameToParty";
import { addPicture as Mutation_addPicture } from "./party/resolvers/Mutation/addPicture";
import { capturePayPalOrder as Mutation_capturePayPalOrder } from "./party/resolvers/Mutation/capturePayPalOrder";
import { checkIn as Mutation_checkIn } from "./party/resolvers/Mutation/checkIn";
import { checkOut as Mutation_checkOut } from "./party/resolvers/Mutation/checkOut";
import { createPayPalOrder as Mutation_createPayPalOrder } from "./party/resolvers/Mutation/createPayPalOrder";
import { deleteAuthDevice as Mutation_deleteAuthDevice } from "./user/resolvers/Mutation/deleteAuthDevice";
import { denyRoom as Mutation_denyRoom } from "./party/resolvers/Mutation/denyRoom";
import { donate as Mutation_donate } from "./donation/resolvers/Mutation/donate";
import { generatePasskeyLoginOptions as Mutation_generatePasskeyLoginOptions } from "./user/resolvers/Mutation/generatePasskeyLoginOptions";
import { generatePasskeyRegisterOptions as Mutation_generatePasskeyRegisterOptions } from "./user/resolvers/Mutation/generatePasskeyRegisterOptions";
import { grantRoom as Mutation_grantRoom } from "./party/resolvers/Mutation/grantRoom";
import { leaveEvent as Mutation_leaveEvent } from "./events/resolvers/Mutation/leaveEvent";
import { loginMagicLink as Mutation_loginMagicLink } from "./user/resolvers/Mutation/loginMagicLink";
import { loginPasskey as Mutation_loginPasskey } from "./user/resolvers/Mutation/loginPasskey";
import { loginPassword as Mutation_loginPassword } from "./user/resolvers/Mutation/loginPassword";
import { participateInEvent as Mutation_participateInEvent } from "./events/resolvers/Mutation/participateInEvent";
import { planEvent as Mutation_planEvent } from "./events/resolvers/Mutation/planEvent";
import { recindRoom as Mutation_recindRoom } from "./party/resolvers/Mutation/recindRoom";
import { refreshLogin as Mutation_refreshLogin } from "./user/resolvers/Mutation/refreshLogin";
import { register as Mutation_register } from "./user/resolvers/Mutation/register";
import { registerPasskey as Mutation_registerPasskey } from "./user/resolvers/Mutation/registerPasskey";
import { removeAttendance as Mutation_removeAttendance } from "./party/resolvers/Mutation/removeAttendance";
import { removeProfilePicture as Mutation_removeProfilePicture } from "./user/resolvers/Mutation/removeProfilePicture";
import { requestRoom as Mutation_requestRoom } from "./party/resolvers/Mutation/requestRoom";
import { rescindDonation as Mutation_rescindDonation } from "./donation/resolvers/Mutation/rescindDonation";
import { sendMagicLink as Mutation_sendMagicLink } from "./user/resolvers/Mutation/sendMagicLink";
import { sendPaymentNotification as Mutation_sendPaymentNotification } from "./party/resolvers/Mutation/sendPaymentNotification";
import { sendPaymentNotificationToAll as Mutation_sendPaymentNotificationToAll } from "./party/resolvers/Mutation/sendPaymentNotificationToAll";
import { setAttendance as Mutation_setAttendance } from "./party/resolvers/Mutation/setAttendance";
import { setGamesPlayed as Mutation_setGamesPlayed } from "./game/resolvers/Mutation/setGamesPlayed";
import { syncCache as Mutation_syncCache } from "./admin/resolvers/Mutation/syncCache";
import { updateAuthDevice as Mutation_updateAuthDevice } from "./user/resolvers/Mutation/updateAuthDevice";
import { updateGame as Mutation_updateGame } from "./game/resolvers/Mutation/updateGame";
import { updatePaidDues as Mutation_updatePaidDues } from "./party/resolvers/Mutation/updatePaidDues";
import { updateParty as Mutation_updateParty } from "./party/resolvers/Mutation/updateParty";
import { updateProfile as Mutation_updateProfile } from "./user/resolvers/Mutation/updateProfile";
import { updateRoles as Mutation_updateRoles } from "./user/resolvers/Mutation/updateRoles";
import { AddGameResult } from "./game/resolvers/AddGameResult";
import { Attending as party_Attending } from "./party/resolvers/Attending";
import { Attending as game_Attending } from "./game/resolvers/Attending";
import { Attending as user_Attending } from "./user/resolvers/Attending";
import { AuthDevice } from "./user/resolvers/AuthDevice";
import { AuthResponse } from "./user/resolvers/AuthResponse";
import { Donation } from "./donation/resolvers/Donation";
import { Event } from "./events/resolvers/Event";
import { Game } from "./game/resolvers/Game";
import { GameOnParty } from "./game/resolvers/GameOnParty";
import { LoginResponse } from "./user/resolvers/LoginResponse";
import { MoneyTransfer } from "./money/resolvers/MoneyTransfer";
import { Party as party_Party } from "./party/resolvers/Party";
import { Party as donation_Party } from "./donation/resolvers/Party";
import { Party as events_Party } from "./events/resolvers/Party";
import { Party as game_Party } from "./game/resolvers/Party";
import { Picture } from "./party/resolvers/Picture";
import { PictureMeta } from "./party/resolvers/PictureMeta";
import { PictureTag } from "./party/resolvers/PictureTag";
import { RegisterDeviceResponse } from "./user/resolvers/RegisterDeviceResponse";
import { RegisterResponse } from "./user/resolvers/RegisterResponse";
import { User } from "./user/resolvers/User";
import { BoundingBox } from "./party/resolvers/BoundingBox";
import { File } from "./base/resolvers/File";
import {
  DateResolver,
  DateTimeResolver,
  JSONResolver,
  JWTResolver,
  TimeResolver,
} from "graphql-scalars";
export const resolvers: Resolvers = {
  Query: {
    games: Query_games,
    me: Query_me,
    moneyTransfers: Query_moneyTransfers,
    nextParty: Query_nextParty,
    parties: Query_parties,
    party: Query_party,
    users: Query_users,
  },
  Mutation: {
    addGameToParty: Mutation_addGameToParty,
    addPicture: Mutation_addPicture,
    capturePayPalOrder: Mutation_capturePayPalOrder,
    checkIn: Mutation_checkIn,
    checkOut: Mutation_checkOut,
    createPayPalOrder: Mutation_createPayPalOrder,
    deleteAuthDevice: Mutation_deleteAuthDevice,
    denyRoom: Mutation_denyRoom,
    donate: Mutation_donate,
    generatePasskeyLoginOptions: Mutation_generatePasskeyLoginOptions,
    generatePasskeyRegisterOptions: Mutation_generatePasskeyRegisterOptions,
    grantRoom: Mutation_grantRoom,
    leaveEvent: Mutation_leaveEvent,
    loginMagicLink: Mutation_loginMagicLink,
    loginPasskey: Mutation_loginPasskey,
    loginPassword: Mutation_loginPassword,
    participateInEvent: Mutation_participateInEvent,
    planEvent: Mutation_planEvent,
    recindRoom: Mutation_recindRoom,
    refreshLogin: Mutation_refreshLogin,
    register: Mutation_register,
    registerPasskey: Mutation_registerPasskey,
    removeAttendance: Mutation_removeAttendance,
    removeProfilePicture: Mutation_removeProfilePicture,
    requestRoom: Mutation_requestRoom,
    rescindDonation: Mutation_rescindDonation,
    sendMagicLink: Mutation_sendMagicLink,
    sendPaymentNotification: Mutation_sendPaymentNotification,
    sendPaymentNotificationToAll: Mutation_sendPaymentNotificationToAll,
    setAttendance: Mutation_setAttendance,
    setGamesPlayed: Mutation_setGamesPlayed,
    syncCache: Mutation_syncCache,
    updateAuthDevice: Mutation_updateAuthDevice,
    updateGame: Mutation_updateGame,
    updatePaidDues: Mutation_updatePaidDues,
    updateParty: Mutation_updateParty,
    updateProfile: Mutation_updateProfile,
    updateRoles: Mutation_updateRoles,
  },

  AddGameResult: AddGameResult,
  Attending: { ...party_Attending, ...game_Attending, ...user_Attending },
  AuthDevice: AuthDevice,
  AuthResponse: AuthResponse,
  Donation: Donation,
  Event: Event,
  Game: Game,
  GameOnParty: GameOnParty,
  LoginResponse: LoginResponse,
  MoneyTransfer: MoneyTransfer,
  Party: { ...party_Party, ...donation_Party, ...events_Party, ...game_Party },
  Picture: Picture,
  PictureMeta: PictureMeta,
  PictureTag: PictureTag,
  RegisterDeviceResponse: RegisterDeviceResponse,
  RegisterResponse: RegisterResponse,
  User: User,
  BoundingBox: BoundingBox,
  File: File,
  Date: DateResolver,
  DateTime: DateTimeResolver,
  JSON: JSONResolver,
  JWT: JWTResolver,
  Time: TimeResolver,
};
