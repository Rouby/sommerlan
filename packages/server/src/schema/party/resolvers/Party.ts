import type { PartyResolvers } from "./../../types.generated";
export const Party: PartyResolvers = {
  attendings: async (parent, _arg, ctx) => {
    return ctx.data.Attending.filterByPartyId(parent.id);
  },
  gamesPlayed: async (parent, _, ctx) => {
    const games = await ctx.data.Game.filterByPartyId(parent.id);

    return Promise.all(
      games.map(async (game) => ({
        id: `${game.id}-${parent.id}`,
        game,
        party: parent,
        players: await ctx.data.User.filterByIds(
          game.partyPeople[parent.id] ?? []
        ),
      }))
    );
  },
  locationWidgetSrc: (parent) => {
    return parent.iframeSrc;
  },
  events: (parent, _, ctx) => {
    return ctx.data.Event.filterByPartyId(parent.id);
  },
  pictures: (parent, _, ctx) => {
    return ctx.data.Picture.filterByPartyId(parent.id);
  },
  donations: (parent, _, ctx) => {
    return ctx.data.Donation.filterByPartyId(parent.id);
  },
};
