/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { Attending } from './user/resolvers/Attending';
import    { Party } from './party/resolvers/Party';
import    { me as Query_me } from './user/resolvers/Query/me';
import    { nextParty as Query_nextParty } from './party/resolvers/Query/nextParty';
import    { parties as Query_parties } from './party/resolvers/Query/parties';
import    { party as Query_party } from './party/resolvers/Query/party';
import    { User } from './user/resolvers/User';
import    { DateResolver,DateTimeResolver,TimeResolver } from 'graphql-scalars';
    export const resolvers: Resolvers = {
      Query: { me: Query_me,nextParty: Query_nextParty,parties: Query_parties,party: Query_party },
      
      
      Attending: Attending,
Party: Party,
User: User,
Date: DateResolver,
DateTime: DateTimeResolver,
Time: TimeResolver
    }