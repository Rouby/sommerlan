import { ForbiddenError } from "@casl/ability";
import { inferAsyncReturnType } from "@trpc/server";
import { CreateFastifyContextOptions } from "@trpc/server/adapters/fastify";
import { createAbility } from "../ability";
import { User } from "../data";
import { validateToken } from "../validateToken";

export async function createContext({ req, res }: CreateFastifyContextOptions) {
  let token: string | undefined;
  if (req.headers.authorization) {
    [, token] = req.headers.authorization.split(" ");
  }

  let user: User | null = null;
  try {
    if (token) {
      const decodedToken = validateToken(token);

      user = await User.findById(decodedToken?.payload.user.id);
    }
  } catch {
    //
  }

  const ability = await createAbility(user);

  return { req, res, user, ability, forbidden: ForbiddenError.from(ability) };
}

export type Context = inferAsyncReturnType<typeof createContext>;
