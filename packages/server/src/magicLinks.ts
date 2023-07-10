import { randomUUID } from "crypto";
import { cron } from "./cron";
import { User } from "./data";
import { expectedOrigin } from "./env";
import { signToken } from "./signToken";

const issuedMagicLinks = new Map<string, string>();

export async function issueMagicLink(user: User) {
  const magicLinkId = randomUUID();

  issuedMagicLinks.set(magicLinkId, await signToken(user));

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
