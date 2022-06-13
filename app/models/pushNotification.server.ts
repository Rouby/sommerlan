import { ForbiddenError } from "@casl/ability";
import * as webpush from "web-push";
import { prisma } from "~/db.server";
import { defineAbilityForUser } from "~/utils/ability.server";

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

  console.log("sending to", subscriptions.length, userIds);

  for (const subscription of subscriptions) {
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
    console.log("Sent notification");
  }
}
