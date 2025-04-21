import { subject } from "@casl/ability";
import {
  ActionIcon,
  Alert,
  Avatar,
  Box,
  Button,
  Card,
  Center,
  Checkbox,
  Group,
  Image,
  Input,
  Modal,
  Skeleton,
  Stack,
  Text,
  Tooltip,
  TypographyStylesProvider,
} from "@mantine/core";
import { DatePickerInput, TimeInput } from "@mantine/dates";
import { Dropzone, FileWithPath, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { RichTextEditor } from "@mantine/tiptap";
import { IconCheck, IconPencil } from "@tabler/icons-react";
import Highlight from "@tiptap/extension-highlight";
import Placeholder from "@tiptap/extension-placeholder";
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
    organizer: { id: string; displayName: string; avatar: string };
    participants: { id: string; displayName: string; avatar: string }[];
  };
}) {
  const user = useAtomValue(userAtom);

  const [{ fetching, error }, participate] = useMutation(
    graphql(`
      mutation toggleEventParticipation(
        $id: ID!
        $userId: ID
        $participate: Boolean!
      ) {
        participateInEvent(id: $id, userId: $userId)
          @include(if: $participate) {
          id
          participants {
            id
            displayName
            avatar
          }
        }
        leaveEvent(id: $id, userId: $userId) @skip(if: $participate) {
          id
          participants {
            id
            displayName
            avatar
          }
        }
      }
    `),
  );

  const [showEdit, setShowEdit] = useState(false);

  const isParticipating = event.participants.some(
    (participant) => participant.id === user?.id,
  );

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
      <Card.Section>
        <Image src={event.image} height={300} />
      </Card.Section>

      <Group mt="md" justify="apart" wrap="nowrap">
        <Text w={500}>{event.name}</Text>
        <Can
          I="update"
          this={subject("Event", event as any) as any}
          otherwise={<div />}
        >
          <ActionIcon
            size="xs"
            onClick={() => setShowEdit(true)}
            aria-label="Event bearbeiten"
          >
            <IconPencil />
          </ActionIcon>
        </Can>
      </Group>
      <Text size="sm" color="dimmed">
        {event.date
          ? dayjs(event.date, "YYYY-MM-DD").format("LL")
          : "Datum noch unbekannt"}
      </Text>
      <Text size="sm" color="dimmed">
        {event.startTime
          ? `${event.startTime}${event.endTime ? ` - ${event.endTime}` : ""}`
          : ""}
      </Text>

      <Box style={{ flex: 1 }}>
        {event.description && (
          <TypographyStylesProvider mt="sm">
            <div dangerouslySetInnerHTML={{ __html: event.description }} />
          </TypographyStylesProvider>
        )}
      </Box>

      <Can I="participate" this={event}>
        <Stack gap="xs" mt="md">
          <Button
            loading={fetching}
            variant={isParticipating ? "gradient" : "light"}
            color="blue"
            fullWidth
            radius="md"
            leftSection={isParticipating ? <IconCheck /> : undefined}
            onClick={() =>
              participate({ id: event.id, participate: !isParticipating })
            }
          >
            Ich will mitmachen
          </Button>
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
            {event.participants.map((user) => (
              <UserAvatar key={user.id} user={user} />
            ))}
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
  };
  onSubmit: () => void;
  partyStartDate: string;
  partyEndDate: string;
}) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Highlight,
      Placeholder.configure({ placeholder: "Beschreibungstext" }),
    ],
    content: defaultValues?.description ?? "",
  });

  const [dateUncertain, setDateUncertain] = useState(
    defaultValues ? !defaultValues.date : true,
  );
  const [timeUncertain, setTimeUncertain] = useState(
    defaultValues ? !defaultValues.startTime : true,
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

        const name = form["eventName"].value;

        const description = editor?.getHTML() ?? "";

        const date = dayjs(form["date"].value).format("YYYY-MM-DD");
        const dateUncertain = form["dateUncertain"].checked || !date;

        const startTime = form["startTime"].value;
        const endTime = form["endTime"].value;
        const timeUncertain = form["timeUncertain"].checked || !startTime;

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
            },
          },
          { fetch },
        );

        onSubmit();
      }}
    >
      <Stack>
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
          />
          <TimeInput
            name="endTime"
            placeholder="Endzeit"
            disabled={timeUncertain}
            required={!timeUncertain}
            defaultValue={defaultValues?.endTime ?? undefined}
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
