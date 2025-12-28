import {
  Alert,
  Button,
  Card,
  LoadingOverlay,
  NumberInput,
  Stack,
  Textarea,
  TextInput,
} from "@mantine/core";
import { IconCurrencyEuro, IconPlus } from "@tabler/icons-react";
import { useState } from "react";
import { useMutation } from "urql";
import { graphql } from "../../gql";

export function CreatePurchaseForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [{ fetching, error }, createPurchase] = useMutation(
    graphql(`
      mutation createPurchase(
        $title: String!
        $description: String!
        $estimatedCost: Float!
      ) {
        createPurchase(
          title: $title
          description: $description
          estimatedCost: $estimatedCost
        ) {
          id
          title
          description
          estimatedCost
          status
          proposer {
            id
            displayName
            avatar
          }
          voteCount {
            yes
            no
            abstain
          }
        }
      }
    `),
  );

  if (!isOpen) {
    return (
      <Button
        leftSection={<IconPlus size={16} />}
        onClick={() => setIsOpen(true)}
        mb="md"
      >
        Neue Anschaffung vorschlagen
      </Button>
    );
  }

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder mb="md">
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          const form = event.target as HTMLFormElement;

          const title = form["title"].value;
          const description = form["description"].value;
          const estimatedCost = +form["estimatedCost"].value;

          const result = await createPurchase({
            title,
            description,
            estimatedCost,
          });

          if (result.data) {
            form.reset();
            setIsOpen(false);
          }
        }}
      >
        <LoadingOverlay visible={fetching} />

        <Alert mb="md" hidden={!error} color="red">
          {error?.message}
        </Alert>

        <Stack>
          <TextInput
            required
            name="title"
            label="Titel"
            placeholder="z.B. Neue Gaming-Maus"
          />

          <Textarea
            required
            name="description"
            label="Beschreibung"
            placeholder="Detaillierte Beschreibung der geplanten Anschaffung..."
            rows={4}
          />

          <NumberInput
            required
            name="estimatedCost"
            label="Geschätzte Kosten"
            min={0}
            step={0.01}
            rightSection={<IconCurrencyEuro />}
          />

          <Button.Group>
            <Button type="submit" leftSection={<IconPlus size={16} />}>
              Vorschlagen
            </Button>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Abbrechen
            </Button>
          </Button.Group>
        </Stack>
      </form>
    </Card>
  );
}
