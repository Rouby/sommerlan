import { createLazyFileRoute } from "@tanstack/react-router";
import { Center, Container } from "@mantine/core";
import { PurchasesList } from "../../features/Purchases/PurchasesList";
import { CreatePurchaseForm } from "../../features/Purchases/CreatePurchaseForm";
import { Can } from "../../components";

export const Route = createLazyFileRoute("/purchases/")({
  component: () => (
    <Container>
      <Can
        I="update"
        a="User"
        otherwise={
          <Center>
            Logge dich ein um Informationen zur Party zu bekommen!
          </Center>
        }
      >
        <Can I="create" a="Purchase">
          <CreatePurchaseForm />
        </Can>

        <PurchasesList />
      </Can>
    </Container>
  ),
});
