import { createLazyFileRoute } from "@tanstack/react-router";
import { CardWithHeader } from "../../components";
import { AdminUsers } from "../../features";

export const Route = createLazyFileRoute("/admin/users")({
  component: () => (
    <CardWithHeader header="Users">
      <AdminUsers />
    </CardWithHeader>
  ),
});
