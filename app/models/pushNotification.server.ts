import { ForbiddenError } from "@casl/ability";
import * as webpush from "web-push";
import { prisma } from "~/db.server";
import { defineAbilityForUser } from "~/utils/ability.server";
import { json } from "~/utils/superjson";

export type { User } from "@prisma/client";

export async function sendNotificationsToUsers(
  userId: string,
  userIds: string[],
  payload: {
    title: string;
  } & NotificationOptions
) {
  const user = await prisma.user.findFirst({
    where: { id: userId },
  });

  if (!user) {
    return null;
  }

  ForbiddenError.from(await defineAbilityForUser(userId)).throwUnlessCan(
    "create",
    "PushNotification"
  );

  const subscriptions = await prisma.pushNotification.findMany({
    ...(userIds.length ? { where: { userId: { in: userIds } } } : {}),
  });

  console.log("Sending notifications to", subscriptions.length, userIds);

  let success = 0;
  for (const subscription of subscriptions) {
    try {
      await webpush.sendNotification(
        {
          endpoint: subscription.endpoint,
          keys: subscription.keys as any,
        },
        JSON.stringify(payload),
        {
          gcmAPIKey: process.env.GCM_KEY,
          vapidDetails: {
            publicKey: process.env.APPLICATION_SERVER_KEY!,
            privateKey: process.env.APPLICATION_SERVER_PRIVATE_KEY!,
            subject: "https://sommerlan.rocks",
          },
        }
      );
      ++success;
    } catch (err) {
      if (err instanceof webpush.WebPushError) {
        if (err.statusCode === 410) {
          console.log(
            "Push notification expired or unsubscribed",
            subscription.endpoint
          );
          await prisma.pushNotification.delete({
            where: { id: subscription.id },
          });
        }
      }
    }
  }

  console.log("Sent notification");

  return json({ success }, { status: 200 });
}
