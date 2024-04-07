import type { AttendingResolvers } from "./../../types.generated";
export const Attending: Pick<AttendingResolvers, "user"> = {
  user: async (parent, _arg, ctx) => {
    const user = await ctx.data.User.findById(parent.userId);
    return user!;
  },
};
