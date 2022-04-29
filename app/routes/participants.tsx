import { Box, Button, Checkbox, Indicator } from "@mantine/core";
import { RangeCalendar } from "@mantine/dates";
import { MinusIcon } from "@modulz/radix-icons";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Form,
  useActionData,
  useLoaderData,
  useSubmit,
  useTransition,
} from "@remix-run/react";
import dayjs from "dayjs";
import { Fragment, useEffect, useRef, useState } from "react";
import invariant from "tiny-invariant";
import { Can } from "~/Ability";
import {
  getCurrentParty,
  joinParty,
  leaveParty,
  updatePartyAttendance,
} from "~/models/party.server";
import { getUserId, requireUserId } from "~/session.server";
import { useUser } from "~/utils";

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

  if (typeof arrivingAt === "string" && typeof departingAt === "string") {
    await updatePartyAttendance(party.id, userId, arrivingAt, departingAt);
    return json<ActionData>({}, { status: 200 });
  }

  try {
    if (party.participants.some((p) => p.userId === userId)) {
      await leaveParty(party.id, userId);
    } else {
      await joinParty(party.id, userId);
    }
  } catch {
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
  const user = useUser();
  const action = useActionData() as ActionData;
  const participation = data.party?.participants.find(
    (p) => p.userId === user.id
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

  if (!data.party) {
    return (
      <div>Die nächste Party ist noch in Planung und erscheint bald hier!</div>
    );
  }

  const days = Array.from(
    {
      length:
        dayjs(data.party.endDate).diff(dayjs(data.party.startDate), "day") + 1,
    },
    (_, idx) => dayjs(data.party!.startDate).add(idx, "day")
  );

  return (
    <div>
      <p>Teilnehmer: {data.party.participants.length}</p>
      {participation ? (
        <>
          <p>Du bist Teilnehmer</p>
          <Form method="post">
            <Button type="submit" loading={transition.state === "submitting"}>
              Nicht mehr teilnehmen
            </Button>
          </Form>
          {action?.errors?.participation}
        </>
      ) : (
        <>
          <p>Du bist nicht Teilnehmer</p>
          <Form method="post">
            <Button type="submit" loading={transition.state === "submitting"}>
              Teilnehmen
            </Button>
          </Form>
          {action?.errors?.participation}
        </>
      )}
      {participation && "Wann bist du da?"}
      {transition.state === "submitting" ? " Speichere..." : null}
      <RangeCalendar
        value={participation ? value : [null, null]}
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
            >
              <div>{day}</div>
            </Indicator>
          );
        }}
      />
      <Form ref={formRef} method="post">
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
      </Form>
      <Can I="read" this={data.party}>
        Participants details
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: `max-content repeat(${days.length}, max-content) max-content`,
            alignItems: "center",
            justifyItems: "center",
            gap: 16,
          }}
        >
          <div />
          {days.map((day) => (
            <div key={day.toISOString()}>{day.format("ddd DD.MM.")}</div>
          ))}
          <div>EUR</div>
          {data.party.participants.map(
            ({ user, arrivingAt, departingAt, paidMoney }) => (
              <Fragment key={user.id}>
                <Box sx={{ whiteSpace: "nowrap" }}>{user.name}</Box>
                {days.map((day) => (
                  <div key={day.toISOString()}>
                    <Checkbox
                      checked={isThere(day, arrivingAt, departingAt)}
                      onChange={() => {}}
                      size="lg"
                    />
                  </div>
                ))}
                <div>{paidMoney ? paidMoney : <MinusIcon />}</div>
              </Fragment>
            )
          )}
        </Box>
      </Can>
    </div>
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
