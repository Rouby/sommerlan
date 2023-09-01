/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { Attending } from './user/resolvers/Attending';
import    { AuthDevice } from './user/resolvers/AuthDevice';
import    { AuthResponse } from './user/resolvers/AuthResponse';
import    { LoginResponse } from './user/resolvers/LoginResponse';
import    { deleteAuthDevice as Mutation_deleteAuthDevice } from './user/resolvers/Mutation/deleteAuthDevice';
import    { denyRoom as Mutation_denyRoom } from './party/resolvers/Mutation/denyRoom';
import    { generatePasskeyLoginOptions as Mutation_generatePasskeyLoginOptions } from './user/resolvers/Mutation/generatePasskeyLoginOptions';
import    { generatePasskeyRegisterOptions as Mutation_generatePasskeyRegisterOptions } from './user/resolvers/Mutation/generatePasskeyRegisterOptions';
import    { grantRoom as Mutation_grantRoom } from './party/resolvers/Mutation/grantRoom';
import    { loginMagicLink as Mutation_loginMagicLink } from './user/resolvers/Mutation/loginMagicLink';
import    { loginPasskey as Mutation_loginPasskey } from './user/resolvers/Mutation/loginPasskey';
import    { loginPassword as Mutation_loginPassword } from './user/resolvers/Mutation/loginPassword';
import    { recindRoom as Mutation_recindRoom } from './party/resolvers/Mutation/recindRoom';
import    { refreshLogin as Mutation_refreshLogin } from './user/resolvers/Mutation/refreshLogin';
import    { register as Mutation_register } from './user/resolvers/Mutation/register';
import    { registerPasskey as Mutation_registerPasskey } from './user/resolvers/Mutation/registerPasskey';
import    { requestRoom as Mutation_requestRoom } from './party/resolvers/Mutation/requestRoom';
import    { sendMagicLink as Mutation_sendMagicLink } from './user/resolvers/Mutation/sendMagicLink';
import    { setAttendance as Mutation_setAttendance } from './party/resolvers/Mutation/setAttendance';
import    { updateAuthDevice as Mutation_updateAuthDevice } from './user/resolvers/Mutation/updateAuthDevice';
import    { Party } from './party/resolvers/Party';
import    { me as Query_me } from './user/resolvers/Query/me';
import    { nextParty as Query_nextParty } from './party/resolvers/Query/nextParty';
import    { parties as Query_parties } from './party/resolvers/Query/parties';
import    { party as Query_party } from './party/resolvers/Query/party';
import    { users as Query_users } from './user/resolvers/Query/users';
import    { RegisterDeviceResponse } from './user/resolvers/RegisterDeviceResponse';
import    { RegisterResponse } from './user/resolvers/RegisterResponse';
import    { User } from './user/resolvers/User';
import    { DateResolver,DateTimeResolver,JSONResolver,JWTResolver,TimeResolver } from 'graphql-scalars';
    export const resolvers: Resolvers = {
      Query: { me: Query_me,nextParty: Query_nextParty,parties: Query_parties,party: Query_party,users: Query_users },
      Mutation: { deleteAuthDevice: Mutation_deleteAuthDevice,denyRoom: Mutation_denyRoom,generatePasskeyLoginOptions: Mutation_generatePasskeyLoginOptions,generatePasskeyRegisterOptions: Mutation_generatePasskeyRegisterOptions,grantRoom: Mutation_grantRoom,loginMagicLink: Mutation_loginMagicLink,loginPasskey: Mutation_loginPasskey,loginPassword: Mutation_loginPassword,recindRoom: Mutation_recindRoom,refreshLogin: Mutation_refreshLogin,register: Mutation_register,registerPasskey: Mutation_registerPasskey,requestRoom: Mutation_requestRoom,sendMagicLink: Mutation_sendMagicLink,setAttendance: Mutation_setAttendance,updateAuthDevice: Mutation_updateAuthDevice },
      
      Attending: Attending,
AuthDevice: AuthDevice,
AuthResponse: AuthResponse,
LoginResponse: LoginResponse,
Party: Party,
RegisterDeviceResponse: RegisterDeviceResponse,
RegisterResponse: RegisterResponse,
User: User,
Date: DateResolver,
DateTime: DateTimeResolver,
JSON: JSONResolver,
JWT: JWTResolver,
Time: TimeResolver
    }