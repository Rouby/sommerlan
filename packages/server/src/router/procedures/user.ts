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

  devices: protectedProcedure.query(async (req) => {
    return req.ctx.user.devices;
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

      return device;
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
    }),

  updateProfile: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        displayName: z.string(),
        email: z.string(),
        avatarUrl: z.string().optional(),
      })
    )
    .mutation(async (req) => {
      req.ctx.forbidden.throwUnlessCan("update", "User");

      const user = req.ctx.user;

      user.name = req.input.name;
      user.email = req.input.email;
      user.displayName = req.input.displayName;
      user.avatarUrl = req.input.avatarUrl || "";

      await user.save();

      return signToken(user);
    }),
});
