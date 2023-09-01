import { signRefreshToken, signToken } from "../../../../signToken";
import { validateRefreshToken } from "../../../../validateToken";
import type { MutationResolvers } from "./../../../types.generated";

export const refreshLogin: NonNullable<
  MutationResolvers["refreshLogin"]
> = async (_parent, { refreshToken }, _ctx) => {
  const { user } = await validateRefreshToken(refreshToken);

  return {
    token: await signToken(user),
    refreshToken: await signRefreshToken(user),
  };
};
