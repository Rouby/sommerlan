import * as dayjs from "dayjs";
import { GraphQLError } from "graphql";
import { expectedOrigin } from "../../../../env";
import { sendDiscordMessage } from "../../../../services";
import type { MutationResolvers } from "./../../../types.generated";
export const sendPaymentNotificationToAll: NonNullable<
  MutationResolvers["sendPaymentNotificationToAll"]
> = async (_parent, _arg, ctx) => {
  const party = await ctx.data.Party.findLatestParty();

  if (!party?.finalCostPerDay) {
    throw new GraphQLError("No party found");
  }

  const attendings = await ctx.data.Attending.filterByPartyId(party?.id);

  for (const attending of attendings) {
    if (attending.paidDues) {
      continue;
    }

    const user = await ctx.data.User.findById(attending.userId);

    if (!user) {
      continue;
    }

    if (user.discordUserId) {
      await sendDiscordMessage(user.discordUserId, {
        content: `Ich melde mich heute bei dir, um dich an die Zahlung deiner Partygebühr zu erinnern. Ich hoffe, du bist bereit für die Party!`,
        embeds: [
          {
            title: "Zahlungserinnerung",
            url: `${expectedOrigin}/party`,
            color: 0x00ff00,
            fields: [
              {
                name: "Party Datum",
                value: `${dayjs(party.startDate).format("DD.MM.YYYY")} - ${dayjs(party.endDate).format("DD.MM.YYYY")}`,
              },
              {
                name: "Deine Teilnahme",
                value: `${attending.dates.length} Tage`,
              },
              {
                name: "Paypal",
                value: `https://www.paypal.me/OnlyRouby`,
              },
              {
                name: "Dein Beitrag",
                value: `${attending.rentDues(party.finalCostPerDay)} €`,
              },
              {
                name: "Zahlbar bis",
                value: `${dayjs(party.payday).format("DD.MM.YYYY")}`,
              },
              {
                name: "Verwendungszweck",
                value: `Sommer LAN 2025 ${attending.id}`,
              },
              {
                name: "Hinweis",
                value: `Bitte achte darauf, dass du die Zahlung als "Freunde und Familie" sendest, damit keine Gebühren anfallen.`,
              },
            ],
            footer: {
              text: `Wenn du Fragen hast, melde dich im Discord Main Channel oder in der WhatsApp Gruppe. Ich bin nur eine Bot-Nachricht und kann (noch) nicht antworten :)`,
            },
          },
        ],
      });

      attending.notificationSent = new Date().toISOString();

      await attending.save();
    }
  }

  return attendings;
};
