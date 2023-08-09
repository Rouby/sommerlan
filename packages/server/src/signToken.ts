import { sign } from "jsonwebtoken";
import { User } from "./data";
import { createAbility } from "./router/ability";

async function tokenPayload(user: User) {
  return {
    user: {
      id: user.id,
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
  return sign(
    await tokenPayload(user),
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    process.env.SESSION_SECRET!,
    {
      algorithm: "HS256",
      subject: user.id,
      expiresIn: "1y",
    }
  );
}

export type JWTPayload = Awaited<ReturnType<typeof tokenPayload>>;
