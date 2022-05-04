import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { assignWorkload } from "~/models/workload.server";
import { requireUserId } from "~/session.server";

export const action: ActionFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  const requestText = await request.text();
  const form = new URLSearchParams(requestText);
  const workloadId = form.get("workloadId");

  if (!workloadId) {
    return json({
      success: false,
      message: "Invalid workload provided",
    });
  }

  await assignWorkload(userId, workloadId);

  return json({ success: true });
};
