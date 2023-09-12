import { ForbiddenError } from "@casl/ability";
import cookie from "@fastify/cookie";
import cors from "@fastify/cors";
import multipart from "@fastify/multipart";
import staticfs from "@fastify/static";
import { useJWT } from "@graphql-yoga/plugin-jwt";
import { randomUUID } from "crypto";
import fastify, { FastifyInstance } from "fastify";
import { createWriteStream, existsSync } from "fs";
import { mkdir } from "fs/promises";
import { GraphQLError } from "graphql";
import {
  Plugin,
  createGraphQLError,
  createSchema,
  createYoga,
  maskError,
} from "graphql-yoga";
import { join } from "path";
import { pipeline } from "stream/promises";
import { AppAbility, createAbility } from "./ability";
import { User, syncCache } from "./data";
import { fakeGoogleSheetApi } from "./data/$api";
import { expectedOrigin } from "./env";
import { logger } from "./logger";
import { resolvers } from "./schema/resolvers.generated";
import { typeDefs } from "./schema/typeDefs.generated";
import { devMailsSent, discord, mail, scheduler } from "./services";
import { JWTPayload, signRefreshToken, signToken } from "./signToken";
import { validateToken } from "./validateToken";

export interface ServerOptions {
  dev?: boolean;
  port?: number;
  prefix?: string;
}

export function createServer(opts: ServerOptions) {
  const dev = opts.dev ?? true;
  const port = opts.port ?? 3000;
  const server = fastify({
    logger,
    disableRequestLogging: true,
  });

  server.register(cookie, { secret: process.env.SESSION_SECRET });
  server.register(cors, {});

  const yoga = createYoga({
    schema: createSchema({
      typeDefs,
      resolvers,
    }),
    logging: {
      debug: (...args) => args.forEach((arg) => server.log.debug(arg)),
      info: (...args) => args.forEach((arg) => server.log.info(arg)),
      warn: (...args) => args.forEach((arg) => server.log.warn(arg)),
      error: (...args) => args.forEach((arg) => server.log.error(arg)),
    },
    plugins: [
      useJWT({
        issuer: expectedOrigin,
        signingKey: process.env.SESSION_SECRET!,
        algorithms: ["HS256"],
      }),
      {
        onContextBuilding: async ({ context, extendContext }) => {
          extendContext({
            ability: await createAbility(context.jwt?.user),
          });
        },
      } as Plugin<{ ability: AppAbility; jwt: JWTPayload }>,
    ],
    maskedErrors: {
      maskError: (error, message, isDev) => {
        console.log("ERROR", error);

        if (error instanceof GraphQLError) {
          console.log("is graphqlerror");
          if (error.originalError instanceof ForbiddenError) {
            return createGraphQLError(error.message, {
              originalError: error.originalError,
              extensions: { code: "FORBIDDEN" },
            });
          }
          return error;
        }

        return maskError(error, message, isDev);
      },
    },
  });

  server.route({
    url: "/health",
    method: "GET",
    handler: async (_req, reply) => {
      reply.send({ status: "ok" });
    },
  });

  server.route({
    url: yoga.graphqlEndpoint,
    method: ["GET", "POST", "OPTIONS"],
    handler: async (req, reply) => {
      try {
        const response = await yoga.handleNodeRequest(req, { req, reply });
        response.headers.forEach((value, key) => {
          reply.header(key, value);
        });

        reply.status(response.status);

        reply.send(response.body);

        return reply;
      } catch (err) {
        if (err instanceof GraphQLError) {
          reply.status(err.extensions.http?.status ?? 500);

          reply.send({ data: null, errors: [err] });

          return reply;
        }
        throw err;
      }
    },
  });

  setupUploads(server, dev);

  if (!dev) {
    server.register(staticfs, {
      root: join(__dirname, "../client"),
    });
    logger.info("serving", join(__dirname, "../client"));
    server.setNotFoundHandler((_, reply) => {
      reply.sendFile("index.html");
    });
  }

  if (dev) {
    server.route({
      url: "/seed",
      method: "POST",
      handler: async (req, reply) => {
        const { model, data, asRow } = req.body as {
          model: string;
          data: any;
          asRow: boolean;
        };

        const dbo = asRow
          ? await fakeGoogleSheetApi.seedRow(model, data)
          : await fakeGoogleSheetApi.seedData(model, data);

        reply.send(dbo);

        return reply;
      },
    });

    server.route({
      url: "/find",
      method: "POST",
      handler: async (req, reply) => {
        const { model, query, asRow } = req.body as {
          model: string;
          query: any;
          asRow: boolean;
        };

        const dbo = asRow
          ? await fakeGoogleSheetApi.findRow(model, query)
          : await fakeGoogleSheetApi.findData(model, query);

        reply.send(dbo);

        return reply;
      },
    });

    server.route({
      url: "/clear",
      method: "POST",
      handler: async (_req, reply) => {
        await syncCache(true);
        fakeGoogleSheetApi.clear();
        devMailsSent.splice(0, devMailsSent.length);

        reply.send({ ok: true });

        return reply;
      },
    });

    server.route({
      url: "/mails",
      method: "POST",
      handler: async (_req, reply) => {
        reply.send(devMailsSent);

        return reply;
      },
    });

    server.route({
      url: "/login",
      method: "POST",
      handler: async (req, reply) => {
        const { email } = req.body as {
          email: string;
        };

        const user = await User.findByEmail(email);

        if (!user) {
          reply.status(404);
          reply.send({ error: "User not found" });

          return reply;
        }

        reply.send({
          token: await signToken(user),
          refreshToken: await signRefreshToken(user),
        });

        return reply;
      },
    });
  }

  const stop = async () => {
    await Promise.allSettled([
      await scheduler.stop(),
      await discord.destroy(),
      await mail.destroy(),
      await syncCache(),
      await server.close(),
    ]);
  };
  const start = async () => {
    try {
      await server.listen({
        port,
        host: !dev ? "0.0.0.0" : process.env.CI ? "localhost" : undefined,
      });

      await scheduler.start();

      await discord.connect();

      await mail.connect();

      logger.info("Startup complete", port);
    } catch (err) {
      server.log.error(err);
      process.exit(1);
    }
  };

  return { server, start, stop };
}

function setupUploads(server: FastifyInstance, dev: boolean) {
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
}
