import { type JWTPayload } from "@sommerlan-app/server/src/signToken";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import jwtDecode from "jwt-decode";

export const tokenAtom = atomWithStorage<string | null>("token", null);
export const refreshTokenAtom = atomWithStorage<string | null>(
  "refreshToken",
  null
);

export const jwtPayloadAtom = atom((get) => {
  const token = get(tokenAtom);
  if (!token) return null;
  return jwtDecode(token) as JWTPayload;
});
