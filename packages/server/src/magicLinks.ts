import { randomUUID } from "crypto";
import { cron } from "./cron";
import { User } from "./data";
import { expectedOrigin } from "./env";
import { signRefreshToken, signToken } from "./signToken";

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

  cron.schedule(
    `@every 15m`,
    async () => {
      issuedMagicLinks.delete(magicLinkId);
    },
    { oneshot: true }
  );

  return `${expectedOrigin}?auth=${magicLinkId}`;
}

export function getTokenFromMagicLink(linkId: string) {
  const token = issuedMagicLinks.get(linkId);
  issuedMagicLinks.delete(linkId);
  return token;
}
