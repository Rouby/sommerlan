import { ForbiddenError } from "@casl/ability";
import { inferAsyncReturnType } from "@trpc/server";
import { CreateFastifyContextOptions } from "@trpc/server/adapters/fastify";
import { User } from "../data";
import { validateToken } from "../validateToken";
import { createAbility } from "./ability";

export async function createContext({ req, res }: CreateFastifyContextOptions) {
  let token: string | undefined;
  if (req.headers.authorization) {
    [, token] = req.headers.authorization.split(" ");
  }

  let user: User | undefined = undefined;
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
