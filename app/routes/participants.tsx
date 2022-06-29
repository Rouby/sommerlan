import { subject } from "@casl/ability";
import {
  Box,
  Button,
  Container,
  Group,
  Indicator,
  NumberInput,
  Space,
  Text,
  Title,
} from "@mantine/core";
import { RangeCalendar } from "@mantine/dates";
import { MinusIcon } from "@modulz/radix-icons";
import { PayPalButtons } from "@paypal/react-paypal-js";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import {
  Form,
  useActionData,
  useFetcher,
  useSubmit,
  useTransition,
} from "@remix-run/react";
import dayjs from "dayjs";
import { Fragment, useEffect, useRef, useState } from "react";
import invariant from "tiny-invariant";
import { Can, Footer, PopoverButton, useAbility } from "~/components";
import {
  getCurrentParty,
  joinParty,
  leaveParty,
  updatePartyAttendance,
} from "~/models/party.server";
import { getUserId, requireUserId } from "~/session.server";
import { useOptionalUser } from "~/utils";
import { dateTimeFormat, moneyFormat } from "~/utils/formatter";
import { json, useLoaderData } from "~/utils/superjson";

type LoaderData = {
  party: Awaited<ReturnType<typeof getCurrentParty>>;
};

type ActionData = {
  errors?: {
    participation?: string;
  };
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const userId = await getUserId(request);
  const party = await getCurrentParty(userId);

  return json<LoaderData>({ party });
};

export const action: ActionFunction = async ({ request, params }) => {
  const userId = await requireUserId(request);
  const party = await getCurrentParty(userId);
  const formData = await request.formData();
  const arrivingAt = formData.get("arrivingAt");
  const departingAt = formData.get("departingAt");
  const action = formData.get("action");

  invariant(party, "there is no party");

  invariant(
    typeof arrivingAt === "string" || !arrivingAt,
    "invalid arriving at"
  );
  invariant(
    typeof departingAt === "string" || !departingAt,
    "invalid departing at"
  );

  try {
    switch (action) {
      case "join":
        await joinParty(party.id, userId, arrivingAt, departingAt);
        break;
      case "leave":
        await leaveParty(party.id, userId);
        break;
      default:
        if (arrivingAt && departingAt) {
          await updatePartyAttendance(
            party.id,
            userId,
            arrivingAt,
            departingAt
          );
        }
        break;
    }
  } catch (err) {
    console.log(err);
    return json<ActionData>(
      { errors: { participation: "failed" } },
      { status: 400 }
    );
  }

  return json<ActionData>({}, { status: 200 });
};

export default function ParticipantsPage() {
  const transition = useTransition();
  const submit = useSubmit();
  const data = useLoaderData<LoaderData>();
  const user = useOptionalUser();
  const action = useActionData() as ActionData;
  const participation = data.party?.participants.find(
    (p) => p.userId === user?.id
  );
  const fetcher = useFetcher();

  const [value, setValue] = useState<[Date | null, Date | null]>([
    new Date(participation?.arrivingAt ?? data.party?.startDate ?? ""),
    new Date(participation?.departingAt ?? data.party?.endDate ?? ""),
  ]);

  const formRef = useRef<HTMLFormElement>(null);

  const initial = useRef(true);
  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    if (value[0] && value[1] && participation) {
      submit(formRef.current);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submit, value]);

  const ability = useAbility();

  if (!data.party) {
    return (
      <Container>
        <p>Die nächste Party ist noch in Planung und erscheint bald hier!</p>
      </Container>
    );
  }

  const hasPaidParticipation =
    (participation?.paidMoney ?? 0) + (participation?.donatedMoney ?? 0) > 0;

  return (
    <>
      <Container>
        <p>
          Bisher haben sich {data.party.participants.length} Teilnehmer für die
          Sommerlan angemeldet.
        </p>
        <Group position="center" direction="column">
          <RangeCalendar
            value={value}
            onChange={setValue}
            minDate={new Date(data.party.startDate)}
            maxDate={new Date(data.party.endDate)}
            initialMonth={new Date(data.party.startDate)}
            allowLevelChange={false}
            renderDay={(date) => {
              const day = date.getDate();

              const participants = data.party?.participants.filter((p) =>
                isThere(date, p.arrivingAt, p.departingAt)
              ).length;
              return (
                <Indicator
                  color="red"
                  offset={8}
                  label={participants}
                  size={16}
                  disabled={
                    dayjs(date).endOf("day").isBefore(data.party?.startDate) ||
                    dayjs(date).isAfter(data.party?.endDate)
                  }
                  sx={{ zIndex: 0 }}
                >
                  <div>{day}</div>
                </Indicator>
              );
            }}
          />
          <Form method="post" ref={formRef}>
            <input
              type="hidden"
              name="arrivingAt"
              value={value[0]?.toISOString() ?? ""}
            />
            <input
              type="hidden"
              name="departingAt"
              value={value[1]?.toISOString() ?? ""}
            />
            <Button
              type="submit"
              loading={transition.state === "submitting"}
              name="action"
              value={participation ? "leave" : "join"}
            >
              {participation ? "Nicht mehr teilnehmen" : "Teilnehmen"}
            </Button>
          </Form>
          {action?.errors?.participation}
          {participation ? (
            <Text size="sm">
              Du kannst deine Anwesenheit im Kalender ändern
            </Text>
          ) : null}
          {transition.state === "submitting" ? " Speichere..." : null}
        </Group>
        {participation && (
          <Can I="update" this={subject("ParticipantOfParty", participation)}>
            <Title order={3} mt="lg" mb="md">
              Beitrag
            </Title>
            {hasPaidParticipation ? (
              <Box>Du hast deinen Beitrag geleistet!</Box>
            ) : participation.pendingPayment ? (
              <Box>Warte auf Bestätigung der Zahlung...</Box>
            ) : (
              <Box
                sx={{
                  display: "grid",
                  gap: 8,
                  gridTemplateColumns: "max-content max-content",
                }}
              >
                {moneyFormat.format(
                  (data.party.entryFee +
                    data.party.entryDeposit +
                    data.party.workDeposit) /
                    100
                )}{" "}
                Teilnahmebeitrag bezahlen
                <PayPalButtons
                  style={{
                    color: "blue",
                    tagline: false,
                    height: 30,
                    layout: "horizontal",
                  }}
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          reference_id: user?.id,
                          payee: {
                            email_address: "jonathan.burke.1311@googlemail.com",
                            // merchant_id: "8T5ZB66ASHV3W",
                          },
                          amount: {
                            value: "70",
                            currency_code: "EUR",
                            breakdown: {
                              item_total: {
                                value: "70",
                                currency_code: "EUR",
                              },
                            },
                          },
                          items: [
                            {
                              name: "Kostenbeitrag",
                              quantity: "1",
                              unit_amount: {
                                value: "20",
                                currency_code: "EUR",
                              },
                            },
                            {
                              name: "Eintrittspfand",
                              quantity: "1",
                              unit_amount: {
                                value: "25",
                                currency_code: "EUR",
                              },
                            },
                            {
                              name: "Arbeitspfand",
                              quantity: "1",
                              unit_amount: {
                                value: "25",
                                currency_code: "EUR",
                              },
                            },
                          ],
                        },
                      ],
                    });
                  }}
                  onApprove={({ orderID }, actions) => {
                    fetcher.submit(
                      {
                        orderId: orderID,
                        partyId: data.party?.id ?? "",
                      },
                      { action: "/action/add-payment", method: "post" }
                    );
                    return Promise.resolve();
                  }}
                />
              </Box>
            )}
            <Text size="xs">
              Der Teilnahmebeitrag setzt sich zusammen aus{" "}
              {moneyFormat.format(data.party.entryFee / 100)} (Kostenbeitrag) +{" "}
              {moneyFormat.format(data.party.entryDeposit / 100)}{" "}
              (Eintrittspfand) +{" "}
              {moneyFormat.format(data.party.workDeposit / 100)} (Arbeitspfand)
            </Text>
          </Can>
        )}
        {ability.can("read", subject("Party", data.party)) &&
        ability.can("read", "User") ? (
          <>
            <Title order={3} mt="lg" mb="md">
              Teilnehmer Details
            </Title>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "max-content auto max-content",
                gap: "4px 16px",
                alignItems: "center",
              }}
            >
              {data.party.participants.map(
                ({
                  user,
                  arrivingAt,
                  departingAt,
                  paidMoney,
                  donatedMoney,
                }) => {
                  const stay = dayjs(departingAt).diff(arrivingAt, "days");
                  return (
                    <Fragment key={user.id}>
                      <Box>{user.name}</Box>
                      <Box>
                        {stay} Tage
                        <br />
                        {dateTimeFormat.formatRange(
                          new Date(arrivingAt),
                          new Date(departingAt)
                        )}
                      </Box>
                      <Box>
                        <Can I="manage" a="Party">
                          {paidMoney || donatedMoney ? (
                            moneyFormat.format(
                              ((paidMoney ?? 0) + (donatedMoney ?? 0)) / 100
                            )
                          ) : (
                            <MinusIcon />
                          )}
                          /
                          {moneyFormat.format(
                            (data.party!.entryFee +
                              data.party!.entryDeposit +
                              data.party!.workDeposit) /
                              100
                          )}
                          <PopoverButton
                            variant="subtle"
                            label="Zahlungsdetails"
                            title="Zahlung hinzufügen"
                            withCloseButton
                            withArrow
                            width={260}
                          >
                            {({ setIsOpen }) => (
                              <PaymentForm
                                partyId={data.party!.id}
                                participantId={user.id}
                                paidMoney={paidMoney ? paidMoney / 100 : null}
                                donatedMoney={
                                  donatedMoney ? donatedMoney / 100 : null
                                }
                                onSubmit={() => setIsOpen(false)}
                              />
                            )}
                          </PopoverButton>
                        </Can>
                      </Box>
                    </Fragment>
                  );
                }
              )}
            </Box>
          </>
        ) : null}
      </Container>
      <Space h="lg" />
      <Footer />
    </>
  );
}

function isThere(
  date: string | Date | dayjs.Dayjs,
  arrivingAt: string | Date,
  departingAt: string | Date
) {
  return (
    (!arrivingAt ||
      dayjs(arrivingAt).startOf("day").isBefore(dayjs(date).endOf("day"))) &&
    (!departingAt ||
      dayjs(departingAt).endOf("day").isAfter(dayjs(date).startOf("day")))
  );
}

function PaymentForm({
  partyId,
  participantId,
  paidMoney,
  donatedMoney,
  onSubmit,
}: {
  partyId: string;
  participantId: string;
  paidMoney: number | null;
  donatedMoney: number | null;
  onSubmit: () => void;
}) {
  const fetcher = useFetcher();

  return (
    <Form
      method="post"
      onSubmit={(evt) => {
        evt.preventDefault();
        fetcher.submit(evt.currentTarget, {
          action: "action/set-payments",
          method: "post",
        });
      }}
    >
      <input type="hidden" name="partyId" value={partyId} />
      <input type="hidden" name="participantId" value={participantId} />
      <NumberInput
        label="Zahlung"
        name="payment"
        defaultValue={paidMoney ?? 0}
      />
      <NumberInput
        label="Spende"
        name="donation"
        defaultValue={donatedMoney ?? 0}
      />
      <Group position="right" mt="md">
        <Button type="submit" size="xs">
          Speichern
        </Button>
      </Group>
    </Form>
  );
}
