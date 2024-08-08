import { createSchema } from "graphql-yoga";
import { rbacDirective } from "./directives";
import { resolvers } from "./resolvers.generated";
import { typeDefs } from "./typeDefs.generated";

export const schema = rbacDirective(
  createSchema({
    typeDefs,
    resolvers,
  }),
);
