import type { ServerOptions } from "./server";

export const serverConfig: ServerOptions = {
  dev: process.env.NODE_ENV !== "production",
  port: +(process.env.PORT || 2022),
};
