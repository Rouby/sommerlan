import { MongoQuery } from "@casl/ability";
import { sign } from "jsonwebtoken";
import { createAbility } from "./ability";
import type { User } from "./data";
import { expectedOrigin } from "./env";

async function tokenPayload(user: User) {
  const ability = await createAbility(user);
  return {
    user: {
      id: user.id,
      roles: user.roles,
      email: user.email,
      displayName: user.displayName,
      discordUserId: user.discordUserId,
      name: user.name,
      avatar: user.avatar,
      avatarUrl: user.avatarUrl,
    },
    abilityRules: ability.rules
      // exclude read rules, as they are always checked server-side
      .filter((rule) => rule.action !== "read")
      // map relation-ids to match with objects on frontend (e.g. userId => user.id)
      .map((rule) => ({
        ...rule,
        conditions: replaceIdKeys(rule.conditions),
      })),
  };
}

function replaceIdKeys(conditions?: MongoQuery) {
  if (!conditions) return conditions;

  return Object.fromEntries(
    Object.entries(conditions).map(([key, value]) => {
      const match = key.match(/^(\w+)Id$/);
      if (match) {
        return [`${match[1]}.id`, value];
      }
      return [key, value];
    })
  );
}

export async function signToken(user: User) {
  return sign(await tokenPayload(user), process.env.SESSION_SECRET!, {
    issuer: expectedOrigin,
    algorithm: "HS256",
    subject: user.id,
    expiresIn: process.env.NODE_ENV === "production" ? "1h" : "5m",
  });
}

export async function signRefreshToken(user: User) {
  const token = sign({ refresh: true }, process.env.SESSION_SECRET!, {
    issuer: expectedOrigin,
    algorithm: "HS256",
    subject: user.id,
    expiresIn: process.env.NODE_ENV === "production" ? "30d" : "30m",
  });

  // user.refreshTokens.push(token);

  await user.save();

  return token;
}

export type JWTPayload = Awaited<ReturnType<typeof tokenPayload>>;
