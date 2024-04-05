import { ForbiddenError } from "@casl/ability";
import { useNewRelic } from "@envelop/newrelic";
import cookie from "@fastify/cookie";
import cors from "@fastify/cors";
import multipart from "@fastify/multipart";
import staticfs from "@fastify/static";
import { useJWT } from "@graphql-yoga/plugin-jwt";
import { randomUUID } from "crypto";
import fastify from "fastify";
import { readFile, writeFile } from "fs/promises";
import { GraphQLError } from "graphql";
import {
  Plugin,
  createGraphQLError,
  createSchema,
  createYoga,
  maskError,
} from "graphql-yoga";
import { join } from "path";
import { createAbility } from "./ability";
import * as dataApi from "./data";
import { syncCache } from "./data";
import { createFakeApi } from "./data/$api";
import { expectedOrigin } from "./env";
import { logger } from "./logger";
import { Context } from "./schema/context";
import { resolvers } from "./schema/resolvers.generated";
import { typeDefs } from "./schema/typeDefs.generated";
import { devMailsSent, discord, mail, scheduler } from "./services";
import { signRefreshToken, signToken } from "./signToken";

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

  const fakeApis = new Map<string, ReturnType<typeof createFakeApi>>();

  server.register(cookie, { secret: process.env.SESSION_SECRET });
  server.register(cors, {});
  server.register(multipart);

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
      useNewRelic({
        rootFieldsNaming: true,
      }),
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
      } as Plugin<Context>,
      {
        onContextBuilding: async ({ context, extendContext }) => {
          logger.debug(
            {
              fakeApi: context.req.headers["x-fake-api"],
              api: fakeApis.get(context.req.headers["x-fake-api"] as string),
              dev,
            },
            "Received request",
          );

          const data: Context["data"] = dev
            ? fakeApis.get(context.req.headers["x-fake-api"] as string)?.data ??
              dataApi
            : dataApi;

          extendContext({
            data,
          });
        },
      } as Plugin<Context>,
    ],
    maskedErrors: {
      maskError: (error, message, isDev) => {
        if (error instanceof GraphQLError) {
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

  if (!dev) {
    // rewrite index.html and replace newrelic placeholder
    readFile(join(__dirname, "../client/index.html"), "utf-8").then((html) =>
      writeFile(
        join(__dirname, "../client/index.html"),
        html
          .replace(
            "window.$__new_relic_loader_config",
            process.env.NEW_RELIC_LOADER_CONFIG ?? "false",
          )
          .replace(
            "window.$__new_relic_info",
            process.env.NEW_RELIC_INFO ?? "false",
          ),
      ),
    );

    server.register(staticfs, {
      root: join(__dirname, "../client"),
    });
    logger.info("serving", join(__dirname, "../client"));
    server.setNotFoundHandler((_, reply) => {
      reply.sendFile("index.html");
    });
  } else {
    server.register(staticfs, {
      root: join(__dirname, "../client/uploads"),
      prefix: "/uploads",
    });
  }

  if (dev) {
    server.route({
      url: "/transaction",
      method: "POST",
      handler: async (_req, reply) => {
        const key = randomUUID();

        fakeApis.set(key, createFakeApi());

        reply.send({ transactionKey: key });

        return reply;
      },
    });

    server.route({
      url: "/seed",
      method: "POST",
      handler: async (req, reply) => {
        const { model, data } = req.body as {
          model: string;
          data: any;
        };

        logger.debug(
          {
            fakeApi: req.headers["x-fake-api"],
          },
          "Seeding object",
        );

        const api =
          fakeApis.get(req.headers["x-fake-api"] as string)?.data ?? dataApi;

        const Model = api[model as "User"];
        if (Model) {
          const dbo = await new Model(data).save();
          reply.send(dbo);
        } else {
          reply.status(404);
          reply.send({ error: "Model not found" });
        }

        return reply;
      },
    });

    server.route({
      url: "/clear",
      method: "POST",
      handler: async (req, reply) => {
        devMailsSent.splice(0, devMailsSent.length);

        if (req.headers["x-fake-api"]) {
          fakeApis.delete(req.headers["x-fake-api"] as string);
        }

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

        const api =
          fakeApis.get(req.headers["x-fake-api"] as string)?.data ?? dataApi;

        const user = await api.User.findByEmail(email);

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
        host: !dev ? "0.0.0.0" : process.env.CI ? "localhost" : "0.0.0.0",
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
