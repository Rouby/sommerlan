import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { updatePayments } from "~/models/party.server";
import { requireUserId } from "~/session.server";
import { capturePayment } from "~/utils/paypal.server";

export const action: ActionFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  const requestText = await request.text();
  const form = new URLSearchParams(requestText);
  const orderId = form.get("orderId");
  const partyId = form.get("partyId");

  if (!orderId || typeof orderId !== "string") {
    return json({
      success: false,
      message: "Invalid orderId provided",
    });
  }

  if (!partyId || typeof partyId !== "string") {
    return json({
      success: false,
      message: "Invalid partyId provided",
    });
  }

  const payment = await capturePayment(orderId);

  if (payment.status === "COMPLETED") {
    await updatePayments(partyId, userId, userId, +payment.value * 100, 0);
  }

  return json({
    success: true,
  });
};
