import { Accordion, Button, Group, NumberInput } from "@mantine/core";
import { DateRangePicker } from "@mantine/dates";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { Form, useFetcher } from "@remix-run/react";
import { useState } from "react";
import { CurrencyEuro } from "tabler-icons-react";
import { useAbility } from "~/components";
import { createParty, getParties } from "~/models/party.server";
import { getUserId, requireUserId } from "~/session.server";
import { dateTimeFormat } from "~/utils/formatter";
import { json, useLoaderData } from "~/utils/superjson";

type LoaderData = {
  parties: Awaited<ReturnType<typeof getParties>>;
};

type ActionData = {
  errors?: {
    dates?: string;
  };
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const userId = await getUserId(request);
  const parties = await getParties(userId);

  return json<LoaderData>({ parties });
};

export const action: ActionFunction = async ({ request, params }) => {
  const userId = await requireUserId(request);
  const formData = await request.formData();

  const startDate = formData.get("startDate");
  const endDate = formData.get("endDate");

  if (typeof startDate !== "string") {
    return json<ActionData>(
      { errors: { dates: "Start-Datum wird benötigt" } },
      { status: 400 }
    );
  }

  if (typeof endDate !== "string") {
    return json<ActionData>(
      { errors: { dates: "End-Datum wird benötigt" } },
      { status: 400 }
    );
  }

  await createParty(userId, startDate, endDate, {});

  return json<ActionData>({}, { status: 200 });
};

export default function AdminPartyPage() {
  const ability = useAbility();
  const data = useLoaderData<LoaderData>();

  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);

  const fetcher = useFetcher();

  if (ability.cannot("manage", "Party")) {
    return <div>Du hast keine Zugriffsberechtigung</div>;
  }

  return (
    <div>
      <h1>Parties</h1>
      <Group>
        <Form method="post">
          Nächste Party planen:
          <DateRangePicker
            required
            label="Start und Ende"
            placeholder="Wähle Start und Ende"
            value={value}
            onChange={setValue}
          />
          <input
            type="hidden"
            name="startDate"
            value={value[0]?.toISOString()}
          />
          <input type="hidden" name="endDate" value={value[1]?.toISOString()} />
          <Group position="right" mt="md">
            <Button type="submit">Party erstellen</Button>
          </Group>
        </Form>
      </Group>
      <Accordion>
        {data.parties.map((party) => (
          <Accordion.Item
            key={party.id}
            label={
              <>
                {dateTimeFormat.formatRange(
                  new Date(party.startDate),
                  new Date(party.endDate)
                )}
                {party.name ? `— ${party.name}` : null}
              </>
            }
          >
            <Group>
              <NumberInput
                label="Eintrittspreis"
                defaultValue={party.entryFee / 100}
                min={0}
                step={1}
                icon={<CurrencyEuro />}
                onChange={(value) => {
                  fetcher.submit(
                    {
                      id: party.id,
                      attributes: JSON.stringify({
                        entryFee: value && value * 100,
                      }),
                    },
                    { action: "/action/update-party", method: "post" }
                  );
                }}
              />
              <NumberInput
                label="Eintrittspfand"
                defaultValue={party.entryDeposit / 100}
                min={0}
                step={1}
                icon={<CurrencyEuro />}
                onChange={(value) => {
                  fetcher.submit(
                    {
                      id: party.id,
                      attributes: JSON.stringify({
                        entryDeposit: value && value * 100,
                      }),
                    },
                    { action: "/action/update-party", method: "post" }
                  );
                }}
              />
              <NumberInput
                label="Arbeitspfand"
                defaultValue={party.workDeposit / 100}
                min={0}
                step={1}
                icon={<CurrencyEuro />}
                onChange={(value) => {
                  fetcher.submit(
                    {
                      id: party.id,
                      attributes: JSON.stringify({
                        workDeposit: value && value * 100,
                      }),
                    },
                    { action: "/action/update-party", method: "post" }
                  );
                }}
              />
            </Group>
            Teilnehmer:
            {party.participants.map((participant) => (
              <div key={participant.userId}>{participant.user.name}</div>
            ))}
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}
