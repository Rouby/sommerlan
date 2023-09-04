import { join } from "path";

export const expectedOrigin = process.env.APP_ORIGIN ?? "http://localhost:5173";

export const rpID =
  expectedOrigin.match(/^https?:\/\/(.*?)\/?(:\d+)?$/)?.[1] ?? "localhost";

const originToEnv = {
  "https://sommerlan.rocks": "production",
  "https://staging.sommerlan.rocks": "staging",
} as const;

export function getEnv() {
  return (
    (expectedOrigin in originToEnv
      ? originToEnv[expectedOrigin as keyof typeof originToEnv]
      : null) ?? "development"
  );
}

export const uploadDir = join(__dirname, "../client/uploads");
