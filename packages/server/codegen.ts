import { defineConfig } from "@eddeee888/gcg-typescript-resolver-files";
import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "**/schema.graphql",
  generates: {
    "src/schema": defineConfig({
      typesPluginsConfig: {
        contextType: "./context#Context",
      },
      scalarsOverrides: {
        BoundingBox: { type: "{x:number;y:number;width:number;height:number}" },
        File: { type: "File" },
      },
    }) as any,
  },
  hooks: { afterAllFileWrite: ["prettier --write"] },
};

export default config;
