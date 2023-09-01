import { User } from "../../../../data";
import type { QueryResolvers } from "./../../../types.generated";

export const users: NonNullable<QueryResolvers["users"]> = async (
  _parent,
  _arg,
  _ctx
) => {
  return User.all();
};
