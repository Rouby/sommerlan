import { TRPCError } from "@trpc/server";
import dayjs from "dayjs";
import z from "zod";
import { Attending, Event, Game, Party, User } from "../../data";
import { protectedProcedure, router } from "../trpc";

export const partyRouter = router({
  all: protectedProcedure.query(async () => {
    return Promise.all(
      (await Party.all())
        .sort((a, b) => {
          if (a.startDate < b.startDate) return 1;
          if (a.startDate > b.startDate) return -1;
          return 0;
        })
        .map(async (party) => ({
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
        }))
    );
  }),

  get: protectedProcedure.input(z.string()).query(async (req) => {
    const party = await Party.findById(req.input);

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

  update: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        startDate: z.string(),
        endDate: z.string(),
        location: z.string(),
        roomsAvailable: z.number(),
      })
    )
    .mutation(async (req) => {
      const party = await Party.findById(req.input.id);

      if (!party) throw new TRPCError({ code: "NOT_FOUND" });

      req.ctx.forbidden.throwUnlessCan("update", party);

      party.startDate = req.input.startDate;
      party.endDate = req.input.endDate;
      party.location = req.input.location;
      party.roomsAvailable = req.input.roomsAvailable;

      await party.save();

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

  nextParty: protectedProcedure.query(async () => {
    const party = await Party.findNext();

    if (!party) return null;

    if (dayjs().isAfter(party.endDate, "day")) return null;

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

  requestRoom: protectedProcedure
    .input(
      z.object({
        partyId: z.string(),
        requested: z.boolean(),
        userId: z.string().optional(),
      })
    )
    .mutation(async (req) => {
      const userId = req.input.userId || req.ctx.user.id;

      const attending =
        (await Attending.findByPartyIdAndUserId(req.input.partyId, userId)) ??
        new Attending({ userId: userId, partyId: req.input.partyId });

      req.ctx.forbidden.throwUnlessCan("update", attending);

      attending.room =
        req.input.requested && attending.room === "" ? "requested" : "";
      await attending.save();

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

  grantRoom: protectedProcedure
    .input(
      z.object({
        partyId: z.string(),
        userId: z.string(),
      })
    )
    .mutation(async (req) => {
      const attending = await Attending.findByPartyIdAndUserId(
        req.input.partyId,
        req.input.userId
      );

      if (!attending) throw new TRPCError({ code: "NOT_FOUND" });

      req.ctx.forbidden.throwUnlessCan("grantRoom", attending);

      attending.room = "granted";
      await attending.save();

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

  denyRoom: protectedProcedure
    .input(
      z.object({
        partyId: z.string(),
        userId: z.string(),
      })
    )
    .mutation(async (req) => {
      const attending = await Attending.findByPartyIdAndUserId(
        req.input.partyId,
        req.input.userId
      );

      if (!attending) throw new TRPCError({ code: "NOT_FOUND" });

      req.ctx.forbidden.throwUnlessCan("grantRoom", attending);

      attending.room = "";
      await attending.save();

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
        : await Party.findNext();

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

  eventsPlanned: protectedProcedure
    .input(
      z.object({
        partyId: z.string().optional(),
      })
    )
    .query(async (req) => {
      const party = req.input.partyId
        ? await Party.findById(req.input.partyId)
        : await Party.findNext();

      if (!party) return null;

      const events = await Event.filterByPartyId(party.id);

      return {
        party,
        events: await Promise.all(
          events.map(async (event) => ({
            ...event,
            organizer: await User.findById(event.organizerId),
            participants: await Promise.all(
              event.participantIds.map(
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                async (userId) => (await User.findById(userId))!
              )
            ),
          }))
        ),
      };
    }),
});
