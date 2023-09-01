import type { AuthDeviceResolvers } from "./../../types.generated";

export const AuthDevice: AuthDeviceResolvers = {
  id: (parent) => {
    return parent.credentialID.join(",");
  },
  name: (parent) => {
    return parent.name ?? "unnamed device";
  },
  createdAt: (parent) => {
    return parent.createdAt ?? null;
  },
  lastUsedAt: (parent) => {
    return parent.lastUsedAt ?? null;
  },
};
