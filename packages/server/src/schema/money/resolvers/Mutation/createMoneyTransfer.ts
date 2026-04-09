import { ForbiddenError } from "@casl/ability";
import * as dayjs from "dayjs";
import type { MutationResolvers } from "./../../../types.generated";

export const createMoneyTransfer: NonNullable<
  MutationResolvers["createMoneyTransfer"]
> = async (_parent, { input }, ctx) => {
  ForbiddenError.from(ctx.ability).throwUnlessCan("create", "MoneyTransfer");

  const transfer = new ctx.data.MoneyTransfer({
    amount: input.amount,
    valuationDate: dayjs(input.valuationDate).format("YYYY-MM-DD"),
    note: input.note,
  });

  await transfer.save();

  return transfer as any;
};
