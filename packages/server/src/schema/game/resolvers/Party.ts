import type { PartyResolvers } from "./../../types.generated";
export const Party: Pick<PartyResolvers, "gamesPlayed" | "__isTypeOf"> = {
  /* Implement Party resolver logic here */
  gamesPlayed: async (parent, _, ctx) => {
    const games = await ctx.data.Game.filterByPartyId(parent.id);

    return Promise.all(
      games.map(async (game) => ({
        id: `${game.id}-${parent.id}`,
        game,
        party: parent,
        players: await ctx.data.User.filterByIds(
          game.partyPeople[parent.id] ?? [],
        ),
      })),
    );
  },
};
