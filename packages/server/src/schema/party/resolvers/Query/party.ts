import { Party } from "../../../../data";
import type { QueryResolvers } from "./../../../types.generated";
export const party: NonNullable<QueryResolvers["party"]> = async (
  _parent,
  { id },
  _ctx
) => {
  return Party.findById(id);
};
