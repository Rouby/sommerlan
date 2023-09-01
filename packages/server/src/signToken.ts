import { sign } from "jsonwebtoken";
import { User } from "./data";
import { expectedOrigin } from "./env";
import { createAbility } from "./router/ability";

async function tokenPayload(user: User) {
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
    abilityRules: (await createAbility(user)).rules,
  };
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
