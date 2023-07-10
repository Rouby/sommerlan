import { type JWTPayload } from "@sommerlan-app/server/src/signToken";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import jwtDecode from "jwt-decode";
import { authenticatedAtom } from "./authenticated";

export const tokenAtom = atomWithStorage<string | null>("token", null);

export const jwtPayloadAtom = atom((get) => {
  const token = get(tokenAtom);
  const authenticated = get(authenticatedAtom);
  if (!token || !authenticated) return null;
  return jwtDecode(token) as JWTPayload;
});
