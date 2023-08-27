import z from "zod";
import { syncCache } from "../../data";
import { protectedProcedure, router } from "../trpc";

export const cacheRouter = router({
  sync: protectedProcedure
    .input(z.object({ clear: z.boolean().optional() }))
    .mutation(async (req) => {
      await syncCache(req.input.clear);
    }),
});
