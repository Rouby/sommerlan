import z from "zod";
import { User } from "../../data";
import { signToken } from "../../signToken";
import { protectedProcedure, router } from "../trpc";

export const userRouter = router({
  list: protectedProcedure.query(async (req) => {
    req.ctx.forbidden.throwUnlessCan("read", "User");

    return (await User.all()).filter((user) =>
      req.ctx.ability.can("read", user)
    );
  }),

  updateDevice: protectedProcedure
    .input(z.object({ credentialID: z.array(z.number()), name: z.string() }))
    .mutation(async (req) => {
      req.ctx.forbidden.throwUnlessCan("update", "User");

      const user = req.ctx.user;

      const device = user.devices.find(
        (device) =>
          device.credentialID.join(",") === req.input.credentialID.join(",")
      );

      if (!device) {
        throw new Error("Device not found");
      }

      device.name = req.input.name;

      await user.save();

      return signToken(user);
    }),

  deleteDevice: protectedProcedure
    .input(z.object({ credentialID: z.array(z.number()) }))
    .mutation(async (req) => {
      req.ctx.forbidden.throwUnlessCan("update", "User");

      const user = req.ctx.user;

      user.devices = user.devices.filter(
        (device) =>
          device.credentialID.join(",") !== req.input.credentialID.join(",")
      );

      await user.save();

      return signToken(user);
    }),
});
