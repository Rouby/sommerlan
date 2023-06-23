import { atom } from "jotai";
import { jwtPayloadAtom } from ".";

export const userAtom = atom((get) => {
  const jwtPayload = get(jwtPayloadAtom);
  return jwtPayload?.user;
});
