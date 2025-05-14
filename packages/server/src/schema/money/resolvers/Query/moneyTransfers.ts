import { ForbiddenError } from "@casl/ability";
import type { QueryResolvers } from "./../../../types.generated";
export const moneyTransfers: NonNullable<
  QueryResolvers["moneyTransfers"]
> = async (_parent, _arg, ctx) => {
  ForbiddenError.from(ctx.ability).throwUnlessCan("read", "Game");

  return ctx.data.MoneyTransfer.all();
};
