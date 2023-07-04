import { TRPCError, initTRPC } from "@trpc/server";
import { startSegment } from "newrelic";
import { Context } from "./context";

const t = initTRPC.context<Context>().create();

export const middleware = t.middleware;

export const isAuthed = middleware(({ next, ctx }) => {
  if (!ctx.user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return next({
    ctx: {
      user: ctx.user,
    },
  });
});

export const withSegment = middleware(({ next, path }) => {
  return startSegment(path, true, next);
});

export const router = t.router;
export const publicProcedure = t.procedure.use(withSegment);
export const protectedProcedure = t.procedure.use(withSegment).use(isAuthed);
