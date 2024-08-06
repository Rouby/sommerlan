import { createLazyFileRoute } from "@tanstack/react-router";
import { CardWithHeader } from "../../components";
import { AdminPartyPayments } from "../../features";

export const Route = createLazyFileRoute("/admin/budget")({
  component: () => {
    return (
      <CardWithHeader header="Budget">
        <AdminPartyPayments />
      </CardWithHeader>
    );
  },
});
