import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { updatePayments } from "~/models/party.server";
import { requireUserId } from "~/session.server";

export const action: ActionFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  const requestText = await request.text();
  const form = new URLSearchParams(requestText);
  const participantId = form.get("participantId");
  const partyId = form.get("partyId");
  const payment = form.get("payment");
  const donation = form.get("donation");

  if (!partyId) {
    return json({
      success: false,
      message: "Invalid partyId provided",
    });
  }

  if (!participantId) {
    return json({
      success: false,
      message: "Invalid participantId provided",
    });
  }

  if (!payment || isNaN(+payment)) {
    return json({
      success: false,
      message: "Invalid payment provided",
    });
  }

  if (!donation || isNaN(+donation)) {
    return json({
      success: false,
      message: "Invalid donation provided",
    });
  }

  await updatePayments(
    partyId,
    userId,
    participantId,
    +payment * 100,
    +donation * 100
  );

  return json({ success: true });
};
