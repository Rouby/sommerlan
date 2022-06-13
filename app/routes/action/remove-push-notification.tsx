import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { removePushNotification } from "~/models/user.server";
import { requireUserId } from "~/session.server";

export const action: ActionFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  const requestText = await request.text();
  const form = new URLSearchParams(requestText);
  const endpoint = form.get("endpoint");

  if (!endpoint) {
    return json({
      success: false,
      message: "Invalid endpoint provided",
    });
  }

  await removePushNotification(userId, endpoint);

  return json({ success: true });
};
