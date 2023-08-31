import { Party } from "../../../../data";
import type { QueryResolvers } from "./../../../types.generated";
export const parties: NonNullable<QueryResolvers["parties"]> = async (
  _parent,
  _arg,
  _ctx
) => {
  return Party.all();
};
