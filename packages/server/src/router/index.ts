import { procedures } from "./procedures";
import { router } from "./trpc";

export const appRouter = router(procedures);

export type AppRouter = typeof appRouter;
