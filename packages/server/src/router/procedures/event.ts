import { TRPCError } from "@trpc/server";
import z from "zod";
import { Event, User } from "../../data";
import { protectedProcedure, router } from "../trpc";

export const eventRouter = router({
  participate: protectedProcedure
    .input(z.object({ eventId: z.string(), participating: z.boolean() }))
    .mutation(async (req) => {
      const event = await Event.findById(req.input.eventId);
      if (!event) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Event not found",
        });
      }

      if (req.input.participating) {
        if (!event.participantIds.includes(req.ctx.user.id)) {
          event.participantIds.push(req.ctx.user.id);
          await event.save();
        }
      } else {
        event.participantIds = event.participantIds.filter(
          (participantId) => participantId !== req.ctx.user.id
        );
        await event.save();
      }

      return {
        ...event,
        organizer: await User.findById(event.organizerId),
        participants: await Promise.all(
          event.participantIds.map(
            async (userId) => (await User.findById(userId))!
          )
        ),
      };
    }),

  plan: protectedProcedure
    .input(
      z.object({
        eventId: z.string().optional(),
        partyId: z.string(),
        name: z.string(),
        date: z.string(),
        startTime: z.string(),
        endTime: z.string(),
        description: z.string(),
        imageUrl: z.string(),
      })
    )
    .mutation(async (req) => {
      const event = req.input.eventId
        ? await Event.findById(req.input.eventId)
        : new Event({
            organizerId: req.ctx.user.id,
            participantIds: [req.ctx.user.id],
          });

      if (!event) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Event not found",
        });
      }

      event.partyId = req.input.partyId;
      event.name = req.input.name;
      event.date = req.input.date;
      event.startTime = req.input.startTime;
      event.endTime = req.input.endTime;
      event.description = req.input.description;
      event.imageUrl = req.input.imageUrl;

      req.ctx.forbidden.throwUnlessCan("update", event);

      await event.save();

      return {
        ...event,
        organizer: await User.findById(event.organizerId),
        participants: await Promise.all(
          event.participantIds.map(
            async (userId) => (await User.findById(userId))!
          )
        ),
      };
    }),
});
