import { TRPCError, inferAsyncReturnType } from "@trpc/server";
import { CreateFastifyContextOptions } from "@trpc/server/adapters/fastify";
import { JwtPayload, decode, verify } from "jsonwebtoken";
import { User } from "../data";
import { createAbility } from "./ability";

export async function createContext({ req, res }: CreateFastifyContextOptions) {
  let token: string | undefined;
  if (req.headers.authorization) {
    [, token] = req.headers.authorization.split(" ");
  }

  let user: User | null = null;
  if (token) {
    let decodedToken: JwtPayload | null = null;

    try {
      decodedToken = decode(token, { complete: true });
    } catch {
      throw new TRPCError({ code: "UNAUTHORIZED", message: "Invalid token" });
    }

    try {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      verify(token, process.env.SESSION_SECRET!);
    } catch {
      throw new TRPCError({ code: "UNAUTHORIZED", message: "Invalid token" });
    }

    // TODO check if token was revoked

    user = await User.findById(decodedToken?.payload.user.id);
  }

  const ability = await createAbility(user);

  return { req, res, user, ability };
}

export type Context = inferAsyncReturnType<typeof createContext>;
