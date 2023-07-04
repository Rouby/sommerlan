import z from "zod";
import { Attending, Party, User } from "../../data";
import { protectedProcedure, router } from "../trpc";

export const partyRouter = router({
  nextParty: protectedProcedure.query(async () => {
    const parties = await Party.all();
    const party = parties.sort((a, b) =>
      a.startDate < b.startDate ? -1 : 1
    )[0];

    if (!party) return null;

    return {
      ...party,
      attendings: await Promise.all(
        (
          await Attending.filterByPartyId(party.id)
        ).map(async (attending) => ({
          ...attending,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          user: (await User.findById(attending.userId))!,
        }))
      ),
    };
  }),

  attend: protectedProcedure
    .input(
      z.object({
        partyId: z.string(),
        attending: z.boolean(),
        date: z.string(),
      })
    )
    .mutation(async (req) => {
      const attending = await Attending.findByPartyIdAndUserId(
        req.input.partyId,
        req.ctx.user.id
      );

      if (!attending) {
        if (req.input.attending) {
          const attending = new Attending({
            userId: req.ctx.user.id,
            partyId: req.input.partyId,
            dates: [req.input.date],
          });

          await attending.save();
        }
      } else {
        if (!req.input.attending) {
          attending.dates = attending.dates.filter(
            (date) => date !== req.input.date
          );
          await attending.save();
        } else {
          if (!attending.dates.includes(req.input.date)) {
            attending.dates.push(req.input.date);
            await attending.save();
          }
        }
      }

      return await Promise.all(
        (
          await Attending.filterByPartyId(req.input.partyId)
        ).map(async (attending) => ({
          ...attending,
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          user: (await User.findById(attending.userId))!,
        }))
      );
    }),
});
