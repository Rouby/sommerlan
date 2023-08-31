import type { IGraphQLConfig } from "graphql-config";

const config: IGraphQLConfig = {
  schema: "packages/server/src/**/schema.graphql",
  documents: "packages/client/src/**/*.tsx",
};

export default config;
