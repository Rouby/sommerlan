import { subject } from "@casl/ability";
import {
  Box,
  Button,
  Container,
  Group,
  Indicator,
  Space,
  Text,
  Title,
} from "@mantine/core";
import { RangeCalendar } from "@mantine/dates";
import { MinusIcon } from "@modulz/radix-icons";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import {
  Form,
  useActionData,
  useSubmit,
  useTransition,
} from "@remix-run/react";
import dayjs from "dayjs";
import { Fragment, useEffect, useRef, useState } from "react";
import invariant from "tiny-invariant";
import { Footer, useAbility } from "~/components";
import {
  getCurrentParty,
  joinParty,
  leaveParty,
  updatePartyAttendance,
} from "~/models/party.server";
import { getUserId, requireUserId } from "~/session.server";
import { useOptionalUser } from "~/utils";
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

  invariant(party, "there is no party");

  const arrivingAt = formData.get("arrivingAt");
  const departingAt = formData.get("departingAt");
  const action = formData.get("action");

  invariant(
    typeof arrivingAt === "string" || !arrivingAt,
    "invalid arriving at"
  );
  invariant(
    typeof departingAt === "string" || !departingAt,
    "invalid departing at"
  );

  console.log(action);

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
  const data = useLoaderData() as LoaderData;
  const user = useOptionalUser();
  const action = useActionData() as ActionData;
  const participation = data.party?.participants.find(
    (p) => p.userId === user?.id
  );

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

  const dateTimeFormat = new Intl.DateTimeFormat("de", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

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

        {ability.can("read", subject("Party", data.party)) &&
        ability.can("read", "User") ? (
          <>
            <Space h="lg" />
            <Title order={3}>Teilnehmer Details</Title>
            <Space h="md" />
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "max-content auto max-content",
                gap: "4px 16px",
                alignItems: "center",
              }}
            >
              {data.party.participants.map(
                ({ user, arrivingAt, departingAt, paidMoney }) => {
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
                        {paidMoney ? `${paidMoney} EUR` : <MinusIcon />}
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
