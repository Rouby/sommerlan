import type { ActionFunction } from "@remix-run/node";
import invariant from "tiny-invariant";
import { getCurrentParty, updatePayments } from "~/models/party.server";
import { verifyWebhook } from "~/utils/paypal.server";

export const action: ActionFunction = async ({ request }) => {
  const body = await request.json();

  await verifyWebhook(
    request.headers,
    body,
    process.env.PAYPAL_WEBHOOK_ID ?? ""
  );

  switch (body.event_type) {
    case "CHECKOUT.ORDER.APPROVED": {
      const {
        reference_id: participantId,
        amount: { value: paidMoney },
      } = body.resource.purchase_units[0];

      console.log("Received payment info", { participantId, paidMoney });

      const party = await getCurrentParty(participantId);
      invariant(party);
      await updatePayments(party.id, null, participantId, +paidMoney * 100);

      break;
    }
  }

  return null;
};
