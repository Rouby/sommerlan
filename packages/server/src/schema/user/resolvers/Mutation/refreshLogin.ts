import { JwtPayload, decode, verify } from "jsonwebtoken";
import { User } from "../../../../data";
import { logger } from "../../../../logger";
import { signRefreshToken, signToken } from "../../../../signToken";
import type { MutationResolvers } from "./../../../types.generated";

export const refreshLogin: NonNullable<MutationResolvers['refreshLogin']> = async (_parent, { refreshToken }, ctx) => {
  const { user } = await validateRefreshToken(refreshToken, ctx.data.User);

  return {
    token: await signToken(user),
    refreshToken: await signRefreshToken(user),
  };
};

async function validateRefreshToken(token: string, UserModel: typeof User) {
  let decodedToken: JwtPayload | null = null;

  try {
    decodedToken = decode(token, { complete: true });
  } catch {
    throw new Error("Invalid token");
  }

  try {
    verify(token, process.env.SESSION_SECRET!);
  } catch {
    throw new Error("Invalid token");
  }

  const user =
    decodedToken?.payload?.sub &&
    (await UserModel.findById(decodedToken?.payload.sub));

  if (!user) {
    // || !user.refreshTokens.includes(token)
    logger.trace({ decodedToken }, "Token was revoked");
    throw new Error("Token was revoked");
  }

  return { decodedToken, user };
}
