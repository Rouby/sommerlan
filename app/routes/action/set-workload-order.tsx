import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { updateWorkloadOrder } from "~/models/workload.server";
import { requireUserId } from "~/session.server";

export const action: ActionFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  const requestText = await request.text();
  const form = new URLSearchParams(requestText);
  const workloadIds = form.getAll("workloadId");
  const workloadOrders = form.getAll("workloadOrder");

  if (
    !workloadIds?.length ||
    !workloadOrders?.length ||
    workloadIds.length !== workloadOrders.length
  ) {
    return json({
      success: false,
      message: "Invalid workloads provided",
    });
  }

  await updateWorkloadOrder(userId, workloadIds, workloadOrders.map(Number));

  return json({ success: true });
};
