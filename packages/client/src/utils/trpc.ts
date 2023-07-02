import type { AppRouter } from "@sommerlan-app/server/src/router";
import { createTRPCReact } from "@trpc/react-query";

export const trpc = createTRPCReact<AppRouter>();
