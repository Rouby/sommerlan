import type { UserResolvers } from "./../../types.generated";
export const User: UserResolvers = {
  /* Implement User resolver logic here */
  displayName: (parent, __, ctx) => {
    if (!ctx.ability.can("read", parent, "displayName")) {
      return "Unbekannt";
    }
    return parent.displayName;
  },
  avatar: (parent, __, ctx) => {
    if (!ctx.ability.can("read", parent, "avatar")) {
      return "";
    }
    return parent.avatar;
  },
  avatarUrl: (parent, __, ctx) => {
    if (!ctx.ability.can("read", parent, "avatarUrl")) {
      return null;
    }
    return parent.avatarUrl;
  },
  email: (parent, __, ctx) => {
    if (!ctx.ability.can("read", parent, "email")) {
      return "";
    }
    return parent.displayName;
  },
};
