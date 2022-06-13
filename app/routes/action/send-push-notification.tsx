import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { sendNotificationsToUsers } from "~/models/pushNotification.server";
import { requireUserId } from "~/session.server";

export const action: ActionFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  const requestText = await request.text();
  const form = new URLSearchParams(requestText);
  const userIds = form.get("userId")?.split(",") ?? [];
  const title = form.get("title");
  const body = form.get("body");

  if (!title) {
    return json({
      success: false,
      message: "Invalid title provided",
    });
  }

  if (!body) {
    return json({
      success: false,
      message: "Invalid body provided",
    });
  }

  await sendNotificationsToUsers(userId, userIds, { title, body });

  return json({ success: true });
};
