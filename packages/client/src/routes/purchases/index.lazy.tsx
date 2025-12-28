import { createLazyFileRoute } from "@tanstack/react-router";
import { Container, Title } from "@mantine/core";
import { PurchasesList } from "../../features/Purchases/PurchasesList";
import { CreatePurchaseForm } from "../../features/Purchases/CreatePurchaseForm";
import { Can } from "../../components";

export const Route = createLazyFileRoute("/purchases/")({
  component: () => (
    <Container>
      <Title order={1} mb="md">
        Geplante Anschaffungen
      </Title>

      <Can I="create" a="Purchase">
        <CreatePurchaseForm />
      </Can>

      <PurchasesList />
    </Container>
  ),
});
