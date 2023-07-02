import { Party } from "../../data";
import { publicProcedure, router } from "../trpc";

export const partyRouter = router({
  nextParty: publicProcedure.query(async () => {
    const parties = await Party.all();

    return parties.sort((a, b) => (a.startDate < b.startDate ? -1 : 1))[0];
  }),
});
