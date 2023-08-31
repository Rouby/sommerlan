import cookie from "@fastify/cookie";
import cors from "@fastify/cors";
import multipart from "@fastify/multipart";
import staticfs from "@fastify/static";
import ws from "@fastify/websocket";
import { useJWT } from "@graphql-yoga/plugin-jwt";
import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
import { randomUUID } from "crypto";
import fastify from "fastify";
import { createWriteStream, existsSync } from "fs";
import { mkdir } from "fs/promises";
import { Plugin, createSchema, createYoga } from "graphql-yoga";
import { join } from "path";
import { pipeline } from "stream/promises";
import { cron } from "./cron";
import { syncCache } from "./data";
import { discord } from "./discord";
import { expectedOrigin } from "./env";
import { logger } from "./logger";
import { transporter } from "./mail";
import { appRouter } from "./router";
import { AppAbility, createAbility } from "./router/ability";
import { createContext } from "./router/context";
import { resolvers } from "./schema/resolvers.generated";
import { typeDefs } from "./schema/typeDefs.generated";
import { JWTPayload } from "./signToken";
import { validateToken } from "./validateToken";

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

  const yoga = createYoga({
    schema: createSchema({
      typeDefs,
      resolvers,
    }),
    logging: logger,
    plugins: [
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useJWT({
        issuer: expectedOrigin,
        signingKey: process.env.SESSION_SECRET!,
        algorithms: ["HS256"],
      }),
      {
        onContextBuilding: async ({ context, extendContext }) => {
          if (context.jwt) {
            extendContext({
              ability: await createAbility(context.jwt.user),
            });
          }
        },
      } as Plugin<{ ability: AppAbility; jwt: JWTPayload }>,
    ],
  });

  server.route({
    url: yoga.graphqlEndpoint,
    method: ["GET", "POST", "OPTIONS"],
    handler: async (req, reply) => {
      // Second parameter adds Fastify's `req` and `reply` to the GraphQL Context
      const response = await yoga.handleNodeRequest(req);
      response.headers.forEach((value, key) => {
        reply.header(key, value);
      });

      reply.status(response.status);

      reply.send(response.body);

      return reply;
    },
  });

  server.register(multipart);
  server.put("/uploads", async (req, reply) => {
    let token: string | undefined;
    if (req.headers.authorization) {
      [, token] = req.headers.authorization.split(" ");
    }

    if (!token) {
      reply.send({ error: "No token provided" });
      return;
    }

    validateToken(token);

    const data = await req.file({
      limits: {
        files: 1,
        fileSize: 10 * 1024 * 1024, // 10MB
      },
    });

    if (!data) {
      reply.send({ error: "No file uploaded" });
      return;
    }

    const uploadName = `${randomUUID()}.${data.filename.split(".").pop()}`;

    if (!existsSync(join(__dirname, "../client/uploads"))) {
      await mkdir(join(__dirname, "../client/uploads"), { recursive: true });
    }
    await pipeline(
      data.file,
      createWriteStream(join(__dirname, "../client/uploads", uploadName))
    );

    reply.send({ url: `${expectedOrigin}/uploads/${uploadName}` });
  });
  if (dev) {
    server.register(staticfs, {
      root: join(__dirname, "../client/uploads"),
      prefix: "/uploads",
    });
  }
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
    server.setNotFoundHandler((_, reply) => {
      reply.sendFile("index.html");
    });
  }

  const stop = async () => {
    transporter.close();
    await Promise.all([
      await discord.destroy(),
      await cron.stop(),
      await syncCache(),
      await server.close(),
    ]);
  };
  const start = async () => {
    try {
      await server.listen({ port, host: !dev ? "0.0.0.0" : undefined });

      await cron.start();

      await discord.connect();

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
