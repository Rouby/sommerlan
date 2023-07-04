import cookie from "@fastify/cookie";
import cors from "@fastify/cors";
import staticfs from "@fastify/static";
import ws from "@fastify/websocket";
import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
import fastify from "fastify";
import { join } from "path";
import { cron } from "./cron";
import { syncCache } from "./data/$api";
import { logger } from "./logger";
import { transporter } from "./mail";
import { appRouter } from "./router";
import { createContext } from "./router/context";

export interface ServerOptions {
  dev?: boolean;
  port?: number;
  prefix?: string;
}

export function createServer(opts: ServerOptions) {
  const dev = opts.dev ?? true;
  const port = opts.port ?? 3000;
  const prefix = opts.prefix ?? "/trpc";
  const server = fastify({
    logger,
    disableRequestLogging: true,
  });

  server.register(cookie, { secret: process.env.SESSION_SECRET });
  server.register(cors, {});
  server.register(ws);
  server.register(fastifyTRPCPlugin, {
    prefix,
    useWSS: true,
    trpcOptions: {
      router: appRouter,
      createContext,
      onError: ({ error }: { error: Error }): void => {
        logger.error(error);
      },
    },
  });
  if (!dev) {
    server.register(staticfs, {
      root: join(__dirname, "../client"),
    });
    logger.info("serving", join(__dirname, "../client"));
  }
  server.setNotFoundHandler((_, reply) => {
    reply.sendFile("index.html");
  });

  const stop = async () => {
    transporter.close();
    await Promise.all([
      await cron.stop(),
      await syncCache(),
      await server.close(),
    ]);
  };
  const start = async () => {
    try {
      await server.listen({ port, host: "0.0.0.0" });

      await cron.start();

      if (!dev) {
        await new Promise<void>((resolve, reject) =>
          transporter.verify((error) => {
            if (error) {
              logger.error(error);
              reject(error);
            } else {
              resolve();
            }
          })
        );
      }

      logger.info("Startup complete", port);
    } catch (err) {
      server.log.error(err);
      process.exit(1);
    }
  };

  return { server, start, stop };
}
