import type { UserResolvers } from "./../../types.generated";
export const User: UserResolvers = {
  /* Implement User resolver logic here */
  devices: ({ devices }) => {
    /* User.devices resolver is required because User.devices and UserMapper.devices are not compatible */
    return devices;
  }
};
