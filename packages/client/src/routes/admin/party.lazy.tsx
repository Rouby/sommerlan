import { Box, Button, Group, NumberInput, Stack, Switch, TextInput } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { notifications } from "@mantine/notifications";
import { createLazyFileRoute } from "@tanstack/react-router";
import dayjs from "dayjs";
import { useEffect, useMemo, useState } from "react";
import { useMutation, useQuery } from "urql";
import { CardWithHeader } from "../../components";
import { graphql } from "../../gql";

export const Route = createLazyFileRoute("/admin/party")({
  component: AdminPartyPage,
});

function AdminPartyPage() {
  const [{ data, fetching }] = useQuery({
    query: graphql(`
      query adminParty {
        nextParty {
          id
          startDate
          endDate
          location
          locationWidgetSrc
          roomsAvailable
          tentative
          rentalCosts
          feedingCosts
          finalCostPerDay
          finalFeedingCostPerDay
          registrationDeadline
          payday
        }
        parties {
          id
          startDate
          endDate
          location
          locationWidgetSrc
          roomsAvailable
          tentative
          rentalCosts
          feedingCosts
          finalCostPerDay
          finalFeedingCostPerDay
          registrationDeadline
          payday
        }
      }
    `),
  });

  const [{ fetching: mutationFetching }, updateParty] = useMutation(
    graphql(`
      mutation adminUpdateParty($input: PartyInput!) {
        updateParty(input: $input) {
          id
          startDate
          endDate
          location
          locationWidgetSrc
          roomsAvailable
          tentative
          rentalCosts
          feedingCosts
          finalCostPerDay
          finalFeedingCostPerDay
          registrationDeadline
          payday
        }
      }
    `),
  );

  const [initialized, setInitialized] = useState(false);
  const [dates, setDates] = useState<[Date | null, Date | null]>([null, null]);
  const [location, setLocation] = useState("");
  const [locationWidgetSrc, setLocationWidgetSrc] = useState("");
  const [roomsAvailable, setRoomsAvailable] = useState<number>(0);
  const [tentative, setTentative] = useState(false);
  const [rentalCosts, setRentalCosts] = useState<number>(0);
  const [feedingCosts, setFeedingCosts] = useState<number>(0);
  const [finalCostPerDay, setFinalCostPerDay] = useState<number | null>(null);
  const [finalFeedingCostPerDay, setFinalFeedingCostPerDay] = useState<number | null>(null);
  const [registrationDeadline, setRegistrationDeadline] = useState<Date | null>(null);
  const [payday, setPayday] = useState<Date | null>(null);

  useEffect(() => {
    if (!fetching && data && !initialized) {
      if (data.nextParty) {
        const p = data.nextParty;
        setDates([
          p.startDate ? dayjs(p.startDate).toDate() : null,
          p.endDate ? dayjs(p.endDate).toDate() : null,
        ]);
        setLocation(p.location || "");
        setLocationWidgetSrc(p.locationWidgetSrc || "");
        setRoomsAvailable(p.roomsAvailable ?? 0);
        setTentative(p.tentative ?? false);
        setRentalCosts(p.rentalCosts ?? 0);
        setFeedingCosts(p.feedingCosts ?? 0);
        setFinalCostPerDay(p.finalCostPerDay ?? null);
        setFinalFeedingCostPerDay(p.finalFeedingCostPerDay ?? null);
        setRegistrationDeadline(
          p.registrationDeadline ? dayjs(p.registrationDeadline).toDate() : null,
        );
        setPayday(p.payday ? dayjs(p.payday).toDate() : null);
      }
      setInitialized(true);
    }
  }, [data, fetching, initialized]);

  const lastParty = useMemo(() => {
    if (!data?.parties) return null;
    const nextPartyId = data.nextParty?.id;
    const candidates = data.parties.filter((p) => p.id !== nextPartyId);
    if (candidates.length === 0) return null;
    return candidates.sort((a, b) => b.startDate.localeCompare(a.startDate))[0];
  }, [data]);

  const handleCopyFromLast = () => {
    if (!lastParty) return;
    setLocation(lastParty.location || "");
    setLocationWidgetSrc(lastParty.locationWidgetSrc || "");
    setRoomsAvailable(lastParty.roomsAvailable ?? 0);
    setTentative(lastParty.tentative ?? false);
    setRentalCosts(lastParty.rentalCosts ?? 0);
    setFeedingCosts(lastParty.feedingCosts ?? 0);

    notifications.show({
      title: "Werte kopiert",
      message: "Ort, Widget, Schlafplätze und Kosten wurden aus der letzten Party übernommen.",
      color: "green",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!dates[0] || !dates[1]) {
      notifications.show({
        title: "Fehler",
        message: "Bitte wähle einen Zeitraum aus.",
        color: "red",
      });
      return;
    }

    const input = {
      id: data?.nextParty?.id || null,
      startDate: dayjs(dates[0]).format("YYYY-MM-DD"),
      endDate: dayjs(dates[1]).format("YYYY-MM-DD"),
      location,
      locationWidgetSrc: locationWidgetSrc || null,
      roomsAvailable,
      tentative,
      rentalCosts,
      feedingCosts,
      finalCostPerDay: finalCostPerDay !== null && finalCostPerDay !== undefined && !isNaN(finalCostPerDay) ? finalCostPerDay : null,
      finalFeedingCostPerDay: finalFeedingCostPerDay !== null && finalFeedingCostPerDay !== undefined && !isNaN(finalFeedingCostPerDay) ? finalFeedingCostPerDay : null,
      registrationDeadline: registrationDeadline
        ? dayjs(registrationDeadline).format("YYYY-MM-DD")
        : null,
      payday: payday ? dayjs(payday).format("YYYY-MM-DD") : null,
    };

    const { error } = await updateParty({ input });
    if (error) {
      notifications.show({
        title: "Fehler beim Speichern",
        message: error.message,
        color: "red",
      });
    } else {
      notifications.show({
        title: "Erfolgreich",
        message: "Die Party-Informationen wurden gespeichert.",
        color: "green",
      });
    }
  };

  if (fetching && !initialized) {
    return (
      <CardWithHeader header="Party verwalten">
        <Box p="sm">Lade Daten...</Box>
      </CardWithHeader>
    );
  }

  return (
    <CardWithHeader header={data?.nextParty ? "Nächste Party bearbeiten" : "Nächste Party erstellen"}>
      <Box p="sm">
        <form onSubmit={handleSubmit}>
          <Stack gap="md">
            {lastParty && (
              <Group justify="flex-end">
                <Button variant="light" onClick={handleCopyFromLast}>
                  Aus letzter Party kopieren
                </Button>
              </Group>
            )}

            <DatePickerInput
              label="Zeitraum"
              type="range"
              value={dates}
              onChange={(val: any) =>
                setDates(
                  val
                    ? [
                        val[0] ? new Date(val[0]) : null,
                        val[1] ? new Date(val[1]) : null,
                      ]
                    : [null, null],
                )
              }
              required
              clearable
              disabled={mutationFetching}
            />

            <TextInput
              label="Ort"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
              disabled={mutationFetching}
            />

            <TextInput
              label="Location Widget Source (Iframe URL)"
              value={locationWidgetSrc}
              onChange={(e) => setLocationWidgetSrc(e.target.value)}
              disabled={mutationFetching}
            />

            <Group grow>
              <NumberInput
                label="Reservierbare Schlafplätze"
                value={roomsAvailable}
                onChange={(val) => setRoomsAvailable(Number(val))}
                min={0}
                disabled={mutationFetching}
              />

              <Switch
                label="Geplant (Tentativ)"
                checked={tentative}
                onChange={(e) => setTentative(e.currentTarget.checked)}
                disabled={mutationFetching}
                mt="xl"
              />
            </Group>

            <Group grow>
              <NumberInput
                label="Mietkosten (€)"
                value={rentalCosts}
                onChange={(val) => setRentalCosts(Number(val))}
                min={0}
                decimalScale={2}
                disabled={mutationFetching}
              />

              <NumberInput
                label="Verpflegungskosten (€)"
                value={feedingCosts}
                onChange={(val) => setFeedingCosts(Number(val))}
                min={0}
                decimalScale={2}
                disabled={mutationFetching}
              />
            </Group>

            <Group grow>
              <NumberInput
                label="Finaler Mietpreis pro Tag & Person (€)"
                description="Sperrt den Mietpreis pro Tag ein"
                value={finalCostPerDay ?? ""}
                onChange={(val) =>
                  setFinalCostPerDay(
                    val === "" || val === undefined ? null : Number(val),
                  )
                }
                min={0}
                decimalScale={2}
                disabled={mutationFetching}
              />

              <NumberInput
                label="Finaler Verpflegungspreis pro Tag & Person (€)"
                description="Sperrt den Verpflegungspreis pro Tag ein"
                value={finalFeedingCostPerDay ?? ""}
                onChange={(val) =>
                  setFinalFeedingCostPerDay(
                    val === "" || val === undefined ? null : Number(val),
                  )
                }
                min={0}
                decimalScale={2}
                disabled={mutationFetching}
              />
            </Group>

            <Group grow>
              <DatePickerInput
                label="Anmeldefrist"
                value={registrationDeadline}
                onChange={(val: any) =>
                  setRegistrationDeadline(val ? new Date(val) : null)
                }
                clearable
                disabled={mutationFetching}
              />

              <DatePickerInput
                label="Zahltag"
                value={payday}
                onChange={(val: any) => setPayday(val ? new Date(val) : null)}
                clearable
                disabled={mutationFetching}
              />
            </Group>

            <Button type="submit" loading={mutationFetching} mt="md">
              Speichern
            </Button>
          </Stack>
        </form>
      </Box>
    </CardWithHeader>
  );
}
