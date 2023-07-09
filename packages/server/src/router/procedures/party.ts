import { TRPCError } from "@trpc/server";
import z from "zod";
import { Attending, Game, Party, User } from "../../data";
import { protectedProcedure, router } from "../trpc";

export const partyRouter = router({
  nextParty: protectedProcedure.query(async () => {
    const parties = await Party.all();
    const party = parties
      .sort((a, b) => (a.startDate < b.startDate ? -1 : 1))
      .at(0);

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
        userId: z.string().optional(),
      })
    )
    .mutation(async (req) => {
      const userId = req.input.userId || req.ctx.user.id;

      const attending =
        (await Attending.findByPartyIdAndUserId(req.input.partyId, userId)) ??
        new Attending({ userId: userId, partyId: req.input.partyId });

      req.ctx.forbidden.throwUnlessCan("update", attending);

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

  gamesPlayed: protectedProcedure
    .input(
      z.object({
        partyId: z.string().optional(),
      })
    )
    .query(async (req) => {
      const party = req.input.partyId
        ? await Party.findById(req.input.partyId)
        : (await Party.all())
            .sort((a, b) => (a.startDate < b.startDate ? -1 : 1))
            .at(0);

      if (!party) return null;

      const games = await Game.filterByPartyId(party.id);

      return {
        party: {
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
        },
        games: await Promise.all(
          games.map(async (game) => ({
            ...game,
            players: await Promise.all(
              game.playerIds.map(
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                async (playerId) => (await User.findById(playerId))!
              )
            ),
          }))
        ),
      };
    }),

  addGameToParty: protectedProcedure
    .input(z.object({ partyId: z.string(), name: z.string() }))
    .mutation(async (req) => {
      const game = new Game({
        partyId: req.input.partyId,
        name: req.input.name,
        playerIds: [req.ctx.user.id],
      });

      await game.save();

      return {
        ...game,
        players: await Promise.all(
          game.playerIds.map(
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            async (playerId) => (await User.findById(playerId))!
          )
        ),
      };
    }),

  setGamePlayed: protectedProcedure
    .input(
      z.object({ partyId: z.string(), gameId: z.string(), played: z.boolean() })
    )
    .mutation(async (req) => {
      const game = await Game.findById(req.input.gameId);

      if (!game) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Game not found",
        });
      }

      if (req.input.played) {
        game.playerIds.push(req.ctx.user.id);
      } else {
        game.playerIds = game.playerIds.filter(
          (playerId) => playerId !== req.ctx.user.id
        );
      }

      await game.save();

      return {
        ...game,
        players: await Promise.all(
          game.playerIds.map(
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            async (playerId) => (await User.findById(playerId))!
          )
        ),
      };
    }),
});
