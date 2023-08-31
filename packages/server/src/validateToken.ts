import { TRPCError } from "@trpc/server";
import { JwtPayload, decode, verify } from "jsonwebtoken";

export function validateToken(token: string) {
  let decodedToken: JwtPayload | null = null;

  try {
    decodedToken = decode(token, { complete: true });
  } catch {
    throw new TRPCError({ code: "UNAUTHORIZED", message: "Invalid token" });
  }

  try {
    verify(token, process.env.SESSION_SECRET!);
  } catch {
    throw new TRPCError({ code: "UNAUTHORIZED", message: "Invalid token" });
  }

  // TODO check if token was revoked

  return decodedToken;
}
