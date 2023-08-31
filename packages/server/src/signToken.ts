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
    expiresIn: "1y",
  });
}

export type JWTPayload = Awaited<ReturnType<typeof tokenPayload>>;
