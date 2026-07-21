import { subject } from "@casl/ability";
import {
  ActionIcon,
  Alert,
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Center,
  Checkbox,
  Group,
  Image,
  Input,
  Modal,
  NumberInput,
  Radio,
  SegmentedControl,
  Skeleton,
  Stack,
  Text,
  TextInput,
  Tooltip,
} from "@mantine/core";
import { DatePickerInput, TimeInput } from "@mantine/dates";
import { Dropzone, FileWithPath, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { RichTextEditor } from "@mantine/tiptap";
import {
  IconCheck,
  IconCoin,
  IconGift,
  IconMinus,
  IconPencil,
  IconPizza,
  IconPlus,
} from "@tabler/icons-react";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import dayjs from "dayjs";
import { useAtomValue } from "jotai";
import { useRef, useState } from "react";
import { useMutation, useQuery } from "urql";
import { UserMenu } from "../../components";
import { Can } from "../../components/Can";
import { UserAvatar } from "../../components/UserAvatar";
import { graphql, useFragment } from "../../gql";
import { EventPricingMode, EventType } from "../../gql/graphql";
import { useFetchWithProgress } from "../../hooks";
import { userAtom } from "../../state";

export function PartyEvents({ partyId }: { partyId?: string }) {
  const PartyEventsInfo = graphql(`
    fragment PartyEventsInfo on Party {
      id
      startDate
      endDate
      events {
        __typename
        id
        image
        date
        startTime
        endTime
        name
        description
        eventType
        pricingMode
        price
        servingsUnit
        totalServings
        organizer {
          id
          displayName
          avatar
        }
        participants {
          id
          displayName
          avatar
        }
        participantServings {
          user {
            id
            displayName
            avatar
          }
          servings
        }
      }
    }
  `);

  const [{ data, fetching }] = useQuery({
    query: graphql(`
      query partyEvents($nextParty: Boolean!, $partyId: ID!) {
        nextParty @include(if: $nextParty) {
          ...PartyEventsInfo
        }

        party(id: $partyId) @skip(if: $nextParty) {
          ...PartyEventsInfo
        }
      }
    `),
    variables: {
      nextParty: !partyId,
      partyId: partyId ?? "",
    },
  });

  const { nextParty, party: specificParty } = data ?? {};
  const party = useFragment(PartyEventsInfo, nextParty ?? specificParty);

  const [showCreate, setShowCreate] = useState(false);

  return (
    <>
      <Center mb="md">
        <Button onClick={() => setShowCreate(true)} loading={fetching}>
          Ein Event eintragen
        </Button>
      </Center>
      <Modal
        size="lg"
        opened={showCreate}
        onClose={() => setShowCreate(false)}
        withCloseButton={false}
      >
        <CreateEventForm
          partyId={party?.id ?? ""}
          partyStartDate={party?.startDate ?? ""}
          partyEndDate={party?.endDate ?? ""}
          onSubmit={() => setShowCreate(false)}
        />
      </Modal>
      <Box
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, 280px)",
          gap: "var(--mantine-spacing-md)",
          justifyContent: "center",
        }}
      >
        {fetching && (
          <>
            <Skeleton mih={400} />
            <Skeleton mih={400} />
          </>
        )}
        {party?.events.map((event) => (
          <EventCard key={event.id} party={party} event={event} />
        ))}
      </Box>
    </>
  );
}

function EventCard({
  party,
  event,
}: {
  party: {
    id: string;
    startDate: string;
    endDate: string;
  };
  event: {
    __typename: "Event";
    id: string;
    image: string;
    date?: string | null;
    startTime?: string | null;
    endTime?: string | null;
    name: string;
    description?: string | null;
    eventType: EventType;
    pricingMode?: EventPricingMode | null;
    price?: number | null;
    servingsUnit?: string | null;
    totalServings: number;
    organizer: { id: string; displayName: string; avatar: string };
    participants: { id: string; displayName: string; avatar: string }[];
    participantServings: {
      user: { id: string; displayName: string; avatar: string };
      servings: number;
    }[];
  };
}) {
  const user = useAtomValue(userAtom);

  const [{ fetching, error }, participate] = useMutation(
    graphql(`
      mutation toggleEventParticipation(
        $id: ID!
        $userId: ID
        $participate: Boolean!
        $servings: Int
      ) {
        participateInEvent(id: $id, userId: $userId, servings: $servings)
          @include(if: $participate) {
          id
          totalServings
          participants {
            id
            displayName
            avatar
          }
          participantServings {
            user {
              id
              displayName
              avatar
            }
            servings
          }
        }
        leaveEvent(id: $id, userId: $userId) @skip(if: $participate) {
          id
          totalServings
          participants {
            id
            displayName
            avatar
          }
          participantServings {
            user {
              id
              displayName
              avatar
            }
            servings
          }
        }
      }
    `),
  );

  const [{ fetching: updatingServings }, updateServingsMutation] = useMutation(
    graphql(`
      mutation updateEventServings($id: ID!, $servings: Int!, $userId: ID) {
        updateEventServings(id: $id, servings: $servings, userId: $userId) {
          id
          totalServings
          participants {
            id
            displayName
            avatar
          }
          participantServings {
            user {
              id
              displayName
              avatar
            }
            servings
          }
        }
      }
    `),
  );

  const [showEdit, setShowEdit] = useState(false);

  const isParticipating = event.participants.some(
    (participant) => participant.id === user?.id,
  );

  const myServingInfo = event.participantServings?.find(
    (ps) => ps.user.id === user?.id,
  );
  const myServings = myServingInfo?.servings ?? 1;

  const unitName = event.servingsUnit || "Portionen";

  const renderPricingBadge = () => {
    if (event.eventType !== EventType.Food) return null;

    if (event.pricingMode === EventPricingMode.PerServing) {
      return (
        <Badge
          color="teal"
          variant="light"
          leftSection={<IconCoin size={12} />}
        >
          {event.price != null ? `${event.price.toFixed(2)} € / ${unitName}` : "Portionspreis"}
        </Badge>
      );
    }

    if (event.pricingMode === EventPricingMode.Flat) {
      return (
        <Badge
          color="blue"
          variant="light"
          leftSection={<IconCoin size={12} />}
        >
          {event.price != null ? `${event.price.toFixed(2)} € Pauschal` : "Festpreis"}
        </Badge>
      );
    }

    if (event.pricingMode === EventPricingMode.PartyDonation) {
      return (
        <Badge
          color="pink"
          variant="light"
          leftSection={<IconGift size={12} />}
        >
          Party-Spende 🎁
        </Badge>
      );
    }

    return null;
  };

  const calculateUserCost = () => {
    if (event.eventType !== EventType.Food || !isParticipating) return null;
    if (event.pricingMode === EventPricingMode.PartyDonation) {
      return "Kostenlos (Party-Spende)";
    }
    if (event.pricingMode === EventPricingMode.PerServing && event.price != null) {
      return `Kosten: ${(myServings * event.price).toFixed(2)} € (${myServings} ${unitName})`;
    }
    if (event.pricingMode === EventPricingMode.Flat && event.price != null) {
      return `Kosten: ${event.price.toFixed(2)} € Pauschal`;
    }
    return null;
  };

  const userCostText = calculateUserCost();

  return (
    <Card
      key={event.id}
      data-testid="event"
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Card.Section style={{ position: "relative" }}>
        <Image src={event.image} height={300} />
        {event.eventType === EventType.Food && (
          <Badge
            size="lg"
            color={
              event.pricingMode === EventPricingMode.PartyDonation
                ? "pink"
                : event.pricingMode === EventPricingMode.Flat
                ? "blue"
                : "teal"
            }
            variant="filled"
            style={{
              position: "absolute",
              top: 12,
              right: 12,
              boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
              fontWeight: 700,
            }}
          >
            {event.pricingMode === EventPricingMode.PartyDonation
              ? "Party-Spende 🎁"
              : event.pricingMode === EventPricingMode.Flat
              ? `${event.price?.toFixed(2) ?? "0.00"} € Pauschal`
              : `${event.price?.toFixed(2) ?? "0.00"} € / ${unitName}`}
          </Badge>
        )}
      </Card.Section>

      <Group mt="md" justify="apart" wrap="nowrap">
        <Text w={500}>{event.name}</Text>
        <Can I="update" this={subject("Event", event)} otherwise={<div />}>
          <ActionIcon
            size="xs"
            onClick={() => setShowEdit(true)}
            aria-label="Event bearbeiten"
          >
            <IconPencil />
          </ActionIcon>
        </Can>
      </Group>

      {event.eventType === EventType.Food && (
        <Group gap="xs" mt="xs" wrap="wrap">
          <Badge
            color="orange"
            variant="filled"
            leftSection={<IconPizza size={12} />}
          >
            Food-Event
          </Badge>
          {renderPricingBadge()}
        </Group>
      )}

      <Text size="sm" c="dimmed" mt="xs">
        {event.date
          ? dayjs(event.date, "YYYY-MM-DD").format("LL")
          : "Datum noch unbekannt"}
      </Text>
      <Text size="sm" c="dimmed">
        {event.startTime
          ? `${event.startTime}${event.endTime ? ` - ${event.endTime}` : ""}`
          : ""}
      </Text>

      {event.eventType === EventType.Food && (
        <Text size="xs" c="dimmed" fw={500} mt="xs">
          Gesamt bestellt: {event.totalServings} {unitName}
        </Text>
      )}

      <Box style={{ flex: 1 }}>
        {event.description && (
          <Box mt="sm">
            <div dangerouslySetInnerHTML={{ __html: event.description }} />
          </Box>
        )}
      </Box>

      <Can I="participate" this={event}>
        <Stack gap="xs" mt="md">
          {event.eventType === EventType.Food && isParticipating ? (
            <Card padding="xs" radius="sm" withBorder bg="var(--mantine-color-gray-0)">
              <Stack gap="xs">
                <Group justify="space-between" wrap="nowrap">
                  <Text size="xs" fw={500}>
                    Deine Portionen:
                  </Text>
                  <Group gap={6}>
                    <ActionIcon
                      size="xs"
                      variant="outline"
                      color="red"
                      disabled={updatingServings}
                      onClick={() => {
                        if (myServings > 1) {
                          updateServingsMutation({
                            id: event.id,
                            servings: myServings - 1,
                          });
                        } else {
                          participate({ id: event.id, participate: false });
                        }
                      }}
                    >
                      <IconMinus size={12} />
                    </ActionIcon>
                    <Text size="xs" fw={700} w={20} ta="center">
                      {myServings}
                    </Text>
                    <ActionIcon
                      size="xs"
                      variant="outline"
                      color="green"
                      disabled={updatingServings}
                      onClick={() => {
                        updateServingsMutation({
                          id: event.id,
                          servings: myServings + 1,
                        });
                      }}
                    >
                      <IconPlus size={12} />
                    </ActionIcon>
                  </Group>
                </Group>
                {userCostText && (
                  <Text size="xs" c="dimmed" ta="center">
                    {userCostText}
                  </Text>
                )}
                <Button
                  size="xs"
                  variant="subtle"
                  color="red"
                  loading={fetching}
                  onClick={() => participate({ id: event.id, participate: false })}
                >
                  Abmelden
                </Button>
              </Stack>
            </Card>
          ) : (
            <Button
              loading={fetching}
              variant={isParticipating ? "gradient" : "light"}
              color="blue"
              fullWidth
              radius="md"
              leftSection={isParticipating ? <IconCheck /> : undefined}
              onClick={() =>
                participate({ id: event.id, participate: !isParticipating, servings: 1 })
              }
            >
              {event.eventType === EventType.Food ? "Ich bin dabei / Mitessen" : "Ich will mitmachen"}
            </Button>
          )}

          {error && (
            <Alert color="red" onClose={() => {}}>
              {error.graphQLErrors.at(0)?.message ?? error.message}
            </Alert>
          )}
        </Stack>
      </Can>

      <Group gap="xs" mt="sm">
        <Tooltip.Group openDelay={300} closeDelay={100}>
          <Avatar.Group spacing="sm" style={{ flexWrap: "wrap" }}>
            {event.participants.map((participant) => {
              const servingData = event.participantServings?.find(
                (ps) => ps.user.id === participant.id,
              );
              const servings = servingData?.servings ?? 1;
              const tooltipLabel =
                event.eventType === EventType.Food
                  ? `${participant.displayName} (${servings} ${unitName})`
                  : participant.displayName;

              return (
                <Tooltip key={participant.id} label={tooltipLabel} withArrow>
                  <div>
                    <UserAvatar user={participant} />
                  </div>
                </Tooltip>
              );
            })}
            <div />
          </Avatar.Group>
        </Tooltip.Group>

        <Can I="participateOthers" this={event} otherwise={<div />}>
          <UserMenu
            selectedUsers={event.participants}
            onSelect={(user) => {
              const participant = event.participants.find(
                (participant) => participant.id === user.id,
              );
              participate({
                id: event.id,
                userId: user.id,
                participate: !participant,
                servings: 1,
              });
            }}
          />
        </Can>
      </Group>

      <Modal
        size="lg"
        opened={showEdit}
        onClose={() => setShowEdit(false)}
        withCloseButton={false}
      >
        <CreateEventForm
          partyId={party.id}
          partyStartDate={party.startDate}
          partyEndDate={party.endDate}
          defaultValues={event}
          onSubmit={() => setShowEdit(false)}
        />
      </Modal>
    </Card>
  );
}

function CreateEventForm({
  partyId,
  defaultValues,
  onSubmit,
  partyStartDate,
  partyEndDate,
}: {
  partyId: string;
  defaultValues?: {
    id: string;
    image: string;
    date?: string | null;
    startTime?: string | null;
    endTime?: string | null;
    name: string;
    description?: string | null;
    eventType?: EventType | null;
    pricingMode?: EventPricingMode | null;
    price?: number | null;
    servingsUnit?: string | null;
  };
  onSubmit: () => void;
  partyStartDate: string;
  partyEndDate: string;
}) {
  const editor = useEditor({
    extensions: [StarterKit.configure({})],
    content: defaultValues?.description ?? "",
  });

  const [dateUncertain, setDateUncertain] = useState(
    defaultValues ? !defaultValues.date : true,
  );
  const [timeUncertain, setTimeUncertain] = useState(
    defaultValues ? !defaultValues.startTime : true,
  );

  const [eventType, setEventType] = useState<EventType>(
    defaultValues?.eventType ?? EventType.Standard,
  );
  const [pricingMode, setPricingMode] = useState<EventPricingMode>(
    defaultValues?.pricingMode ?? EventPricingMode.PerServing,
  );

  const [, fetch] = useFetchWithProgress();
  const [{ fetching }, planEvent] = useMutation(
    graphql(`
      mutation planEvent($input: EventInput!) {
        planEvent(input: $input) {
          id
          image
          date
          startTime
          endTime
          name
          description
          eventType
          pricingMode
          price
          servingsUnit
          totalServings
          organizer {
            id
            displayName
            avatar
          }
          participants {
            id
            displayName
            avatar
          }
          participantServings {
            user {
              id
              displayName
              avatar
            }
            servings
          }
        }
      }
    `),
  );

  const openRef = useRef<() => void>(null);

  const [image, setImage] = useState<FileWithPath | null>(null);
  const [imageError, setImageError] = useState<string | null>(null);

  return (
    <form
      onSubmit={async (evt) => {
        evt.preventDefault();
        setImageError(null);

        if (!defaultValues && !image) {
          setImageError("Ein Bild ist erforderlich.");
          return;
        }

        const form = evt.target as HTMLFormElement;

        const name = form["eventName"]?.value ?? "";

        const description = editor?.getHTML() ?? "";

        const dateVal = form["date"]?.value;
        const date = dateVal ? dayjs(dateVal).format("YYYY-MM-DD") : "";
        const dateUncertain = (form["dateUncertain"] as HTMLInputElement)?.checked || !date;

        const startTime = form["startTime"]?.value ?? "";
        const endTime = form["endTime"]?.value ?? "";
        const timeUncertain = (form["timeUncertain"] as HTMLInputElement)?.checked || !startTime;

        const submitEventType = (form["eventType"]?.value || eventType) as EventType;
        const submitPricingMode = (form["pricingMode"]?.value || pricingMode) as EventPricingMode;
        const rawPrice = form["price"]?.value;
        const submitServingsUnit = form["servingsUnit"]?.value || null;

        let finalPrice: number | null = null;
        if (
          submitEventType === EventType.Food &&
          submitPricingMode !== EventPricingMode.PartyDonation
        ) {
          if (rawPrice != null && rawPrice !== "") {
            const parsed = parseFloat(String(rawPrice).replace(",", "."));
            if (!isNaN(parsed)) {
              finalPrice = parsed;
            }
          }
        }

        await planEvent(
          {
            input: {
              id: defaultValues?.id,
              partyId,
              date: dateUncertain ? null : date,
              startTime: timeUncertain ? null : startTime,
              endTime: timeUncertain ? null : endTime,
              name,
              description,
              image: image ?? undefined,
              eventType: submitEventType,
              pricingMode: submitEventType === EventType.Food ? submitPricingMode : null,
              price: finalPrice,
              servingsUnit: submitEventType === EventType.Food ? submitServingsUnit : null,
            },
          },
          { fetch },
        );

        onSubmit();
      }}
    >
      <Stack gap="md">
        <input type="hidden" name="eventType" value={eventType} />
        <Input.Wrapper id="eventType" label="Event-Typ">
          <SegmentedControl
            name="eventType"
            fullWidth
            defaultValue={eventType}
            onChange={(val) => setEventType(val as EventType)}
            data={[
              { label: "Standard Event", value: EventType.Standard },
              { label: "Food-Event 🍕", value: EventType.Food },
            ]}
          />
        </Input.Wrapper>

        {eventType === EventType.Food && (
          <Card withBorder padding="sm" radius="md">
            <Stack gap="xs">
              <input type="hidden" name="pricingMode" value={pricingMode} />
              <Text size="sm" fw={600}>
                Abrechnungsmodell für Food-Event
              </Text>
              <Radio.Group
                name="pricingMode"
                defaultValue={pricingMode}
                onChange={(val) => setPricingMode(val as EventPricingMode)}
              >
                <Group gap="md">
                  <Radio
                    value={EventPricingMode.PerServing}
                    label="Preis pro Portion"
                  />
                  <Radio value={EventPricingMode.Flat} label="Festpreis" />
                  <Radio
                    value={EventPricingMode.PartyDonation}
                    label="Party-Spende 🎁"
                  />
                </Group>
              </Radio.Group>

              {pricingMode !== EventPricingMode.PartyDonation && (
                <Group grow gap="md" mt="xs">
                  <NumberInput
                    name="price"
                    label={
                      pricingMode === EventPricingMode.PerServing
                        ? "Preis pro Portion (€)"
                        : "Pauschalpreis (€)"
                    }
                    placeholder="0.00"
                    decimalScale={2}
                    fixedDecimalScale
                    min={0}
                    step={0.5}
                    defaultValue={defaultValues?.price != null ? defaultValues.price : undefined}
                  />
                  <TextInput
                    name="servingsUnit"
                    label="Einheit (z.B. Portionen, Teller)"
                    placeholder="Portionen"
                    defaultValue={defaultValues?.servingsUnit ?? "Portionen"}
                  />
                </Group>
              )}
            </Stack>
          </Card>
        )}

        <Input.Wrapper id="eventName" withAsterisk label="Event">
          <Input
            id="eventName"
            required
            name="eventName"
            placeholder="Event"
            defaultValue={defaultValues?.name}
          />
        </Input.Wrapper>

        <Box
          style={{
            display: "grid",
            gridTemplateColumns: "auto 1fr 1fr",
            alignItems: "center",
            gap: "var(--mantine-spacing-md)",
          }}
        >
          <Checkbox
            name="dateUncertain"
            label="Datum noch unklar"
            defaultChecked={dateUncertain}
            onChange={(evt) => setDateUncertain(evt.target.checked)}
          />
          <DatePickerInput
            name="date"
            popoverProps={{ withinPortal: true }}
            disabled={dateUncertain}
            required={!dateUncertain}
            placeholder="Datum"
            defaultValue={
              defaultValues?.date
                ? dayjs(defaultValues.date, "YYYY-MM-DD").toDate()
                : null
            }
            style={{ gridColumn: "span 2" }}
            minDate={new Date(partyStartDate)}
            maxDate={new Date(partyEndDate)}
            hideOutsideDates
          />

          <Checkbox
            name="timeUncertain"
            label="Zeit noch unklar"
            defaultChecked={timeUncertain}
            onChange={(evt) => setTimeUncertain(evt.target.checked)}
          />
          <TimeInput
            name="startTime"
            placeholder="Startzeit"
            disabled={timeUncertain}
            required={!timeUncertain}
            defaultValue={defaultValues?.startTime ?? undefined}
            role="textbox"
            aria-label="Startzeit"
          />
          <TimeInput
            name="endTime"
            placeholder="Endzeit"
            disabled={timeUncertain}
            required={!timeUncertain}
            defaultValue={defaultValues?.endTime ?? undefined}
            role="textbox"
            aria-label="Endzeit"
          />
        </Box>

        <RichTextEditor editor={editor} mih={240}>
          <RichTextEditor.Toolbar sticky stickyOffset={60}>
            <RichTextEditor.ControlsGroup>
              <RichTextEditor.Bold />
              <RichTextEditor.Italic />
              <RichTextEditor.Underline />
              <RichTextEditor.Strikethrough />
              <RichTextEditor.Highlight />
              <RichTextEditor.ClearFormatting />
            </RichTextEditor.ControlsGroup>
          </RichTextEditor.Toolbar>

          <RichTextEditor.Content />
        </RichTextEditor>

        <Input.Wrapper
          label="Bild"
          withAsterisk={!defaultValues}
          error={imageError}
        >
          <Dropzone
            name="image"
            data-testid="dropzone"
            accept={IMAGE_MIME_TYPE}
            onDrop={(files) => {
              setImage(files[0]);
              setImageError(null);
            }}
            onReject={() => setImageError("Ungültiger Dateityp.")}
            maxFiles={1}
            openRef={openRef}
            style={{ height: 100, display: "grid", alignItems: "center" }}
            loading={fetching}
          >
            <Center>Bild hochladen</Center>
          </Dropzone>
        </Input.Wrapper>
        {(image || defaultValues?.image) && (
          <Image
            src={image ? URL.createObjectURL(image) : defaultValues?.image}
            height={100}
            width="auto"
            fit="contain"
            mt="xs"
          />
        )}
        <Button onClick={() => openRef.current?.()}>Bild auswählen</Button>

        <Group justify="right">
          <Button type="submit" disabled={fetching}>
            {defaultValues ? "Speichern" : "Event erstellen"}
          </Button>
        </Group>
      </Stack>
    </form>
  );
}
