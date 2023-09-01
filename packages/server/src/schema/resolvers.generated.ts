/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { Attending } from './user/resolvers/Attending';
import    { LoginResponse } from './user/resolvers/LoginResponse';
import    { generatePasskeyLoginOptions as Mutation_generatePasskeyLoginOptions } from './user/resolvers/Mutation/generatePasskeyLoginOptions';
import    { generatePasskeyRegisterOptions as Mutation_generatePasskeyRegisterOptions } from './user/resolvers/Mutation/generatePasskeyRegisterOptions';
import    { loginPasskey as Mutation_loginPasskey } from './user/resolvers/Mutation/loginPasskey';
import    { loginPassword as Mutation_loginPassword } from './user/resolvers/Mutation/loginPassword';
import    { loginWithMagicLink as Mutation_loginWithMagicLink } from './user/resolvers/Mutation/loginWithMagicLink';
import    { register as Mutation_register } from './user/resolvers/Mutation/register';
import    { registerPasskey as Mutation_registerPasskey } from './user/resolvers/Mutation/registerPasskey';
import    { sendMagicLink as Mutation_sendMagicLink } from './user/resolvers/Mutation/sendMagicLink';
import    { Party } from './party/resolvers/Party';
import    { me as Query_me } from './user/resolvers/Query/me';
import    { nextParty as Query_nextParty } from './party/resolvers/Query/nextParty';
import    { parties as Query_parties } from './party/resolvers/Query/parties';
import    { party as Query_party } from './party/resolvers/Query/party';
import    { RegisterResponse } from './user/resolvers/RegisterResponse';
import    { User } from './user/resolvers/User';
import    { DateResolver,DateTimeResolver,JSONResolver,JWTResolver,TimeResolver } from 'graphql-scalars';
    export const resolvers: Resolvers = {
      Query: { me: Query_me,nextParty: Query_nextParty,parties: Query_parties,party: Query_party },
      Mutation: { generatePasskeyLoginOptions: Mutation_generatePasskeyLoginOptions,generatePasskeyRegisterOptions: Mutation_generatePasskeyRegisterOptions,loginPasskey: Mutation_loginPasskey,loginPassword: Mutation_loginPassword,loginWithMagicLink: Mutation_loginWithMagicLink,register: Mutation_register,registerPasskey: Mutation_registerPasskey,sendMagicLink: Mutation_sendMagicLink },
      
      Attending: Attending,
LoginResponse: LoginResponse,
Party: Party,
RegisterResponse: RegisterResponse,
User: User,
Date: DateResolver,
DateTime: DateTimeResolver,
JSON: JSONResolver,
JWT: JWTResolver,
Time: TimeResolver
    }