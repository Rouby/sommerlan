import {
  Alert,
  Button,
  Checkbox,
  LoadingOverlay,
  NumberInput,
  SegmentedControl,
  Stack,
  Text,
} from "@mantine/core";
import { IconCurrencyEuro } from "@tabler/icons-react";
import { useMutation } from "urql";
import { graphql } from "../../gql";

export function AddDonationForm({ onDonate }: { onDonate: () => void }) {
  const [{ fetching, error }, donate] = useMutation(
    graphql(`
      mutation donateToParty(
        $amount: Float!
        $dedication: DonationDedication!
        $incognito: Boolean!
      ) {
        donate(
          amount: $amount
          dedication: $dedication
          incognito: $incognito
        ) {
          id
          amount
          dedication
          donator {
            id
            displayName
            avatar
          }
          party {
            id
          }
        }
      }
    `),
  );

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;

        const amount = +form["amount"].value;
        const dedication = form["dedication"].value;
        const incognito = form["incognito"].checked;

        await donate({ amount, dedication, incognito });

        (event.target as HTMLFormElement).reset();

        onDonate();
      }}
    >
      <LoadingOverlay visible={fetching} />

      <Alert mb="md" hidden={!error} color="red">
        {error?.message}
      </Alert>

      <Stack>
        <NumberInput
          required
          name="amount"
          min={10}
          ta="right"
          rightSection={<IconCurrencyEuro />}
        />

        <SegmentedControl
          name="dedication"
          data={[
            { value: "RENT", label: "Miete" },
            { value: "WARCHEST", label: "Kriegskasse" },
          ]}
        />

        <Checkbox name="incognito" label="Anonym spenden" />

        <Button type="submit">Spenden</Button>
      </Stack>

      <Text size="xs" maw={300}>
        <p>
          Spenden werden auf vertrauensbasis getätigt und fließen entweder in
          die Gemeinschaftskasse ("Kriegskasse") oder werden auf die Miete
          angerechnet.
        </p>
        <p>
          Hier angegebene Spenden werden zum Stichtag der nächsten Party
          berücksichtigt und sind <strong>zusätzlich</strong> zu den normalen
          Kosten zu leisten, bitte beachte das bei deiner Planung.
        </p>
      </Text>
    </form>
  );
}
