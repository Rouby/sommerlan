import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { updatePushNotification } from "~/models/user.server";
import { requireUserId } from "~/session.server";

export const action: ActionFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  const requestText = await request.text();
  const form = new URLSearchParams(requestText);
  const previousEndpoint = form.get("previousEndpoint");
  const endpoint = form.get("endpoint");
  const keysJSON = form.get("keys");

  if (!endpoint || !previousEndpoint) {
    return json({
      success: false,
      message: "Invalid endpoint provided",
    });
  }

  if (!keysJSON) {
    return json({
      success: false,
      message: "Invalid keys provided",
    });
  }

  let keys = {};
  try {
    keys = JSON.parse(keysJSON);
  } catch {
    return json({
      success: false,
      message: "Invalid keys provided",
    });
  }

  await updatePushNotification(userId, previousEndpoint, endpoint, keys);

  return json({ success: true });
};