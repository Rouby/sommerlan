import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { updateParty } from "~/models/party.server";
import { requireUserId } from "~/session.server";

export const action: ActionFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  const requestText = await request.text();
  const form = new URLSearchParams(requestText);
  const id = form.get("id");
  const attributes = form.get("attributes");

  if (!id || !attributes) {
    return json({
      success: false,
      message: "Invalid params provided",
    });
  }

  await updateParty(id, userId, JSON.parse(attributes));

  return json({ success: true });
};
