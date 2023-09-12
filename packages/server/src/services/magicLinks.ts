import { randomUUID } from "crypto";
import { User } from "../data";
import { expectedOrigin } from "../env";
import { signRefreshToken, signToken } from "../signToken";
import { scheduleTimeout } from "./scheduler";

const issuedMagicLinks = new Map<
  string,
  { token: string; refreshToken: string }
>();

export async function issueMagicLink(user: User) {
  const magicLinkId = randomUUID();

  issuedMagicLinks.set(magicLinkId, {
    token: await signToken(user),
    refreshToken: await signRefreshToken(user),
  });

  scheduleTimeout("15m", async () => {
    issuedMagicLinks.delete(magicLinkId);
  });

  return `${expectedOrigin}?auth=${magicLinkId}`;
}

export function getTokenFromMagicLink(linkId: string) {
  const token = issuedMagicLinks.get(linkId);
  issuedMagicLinks.delete(linkId);
  return token;
}
