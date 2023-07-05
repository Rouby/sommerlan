import { User } from "../../data";
import { protectedProcedure, router } from "../trpc";

export const userRouter = router({
  list: protectedProcedure.query(async (req) => {
    req.ctx.forbidden.throwUnlessCan("read", "User");

    return (await User.all()).filter((user) =>
      req.ctx.ability.can("read", user)
    );
  }),
});
