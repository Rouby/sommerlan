import { subject } from "@casl/ability";
import {
  ActionIcon,
  Avatar,
  Box,
  Button,
  Card,
  Center,
  Checkbox,
  Group,
  Image,
  Input,
  Loader,
  Modal,
  Stack,
  Text,
  Tooltip,
  TypographyStylesProvider,
} from "@mantine/core";
import { DatePickerInput, TimeInput } from "@mantine/dates";
import { Dropzone, FileWithPath, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { RichTextEditor } from "@mantine/tiptap";
import type { Event, User } from "@sommerlan-app/server/src/data";
import { IconCheck, IconPencil } from "@tabler/icons-react";
import { useMutation } from "@tanstack/react-query";
import Highlight from "@tiptap/extension-highlight";
import Placeholder from "@tiptap/extension-placeholder";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import dayjs from "dayjs";
import { useAtomValue } from "jotai";
import { useRef, useState } from "react";
import { Can, UserAvatar } from ".";
import { tokenAtom, userAtom } from "../state";
import { trpc } from "../utils";

export function NextPartyEventsList() {
  const { data, isLoading } = trpc.party.eventsPlanned.useQuery({});

  const [showCreate, setShowCreate] = useState(false);

  if (isLoading) {
    return (
      <Center>
        <Loader />
      </Center>
    );
  }

  if (!data) {
    return <Center>No Party planned</Center>;
  }

  const { party, events } = data;

  return (
    <>
      <Button onClick={() => setShowCreate(true)}>Ein Event planen</Button>
      <Modal
        size="lg"
        opened={showCreate}
        onClose={() => setShowCreate(false)}
        withCloseButton={false}
      >
        <CreateEventForm
          partyId={party.id}
          onSubmit={() => setShowCreate(false)}
        />
      </Modal>
      <Box
        sx={(theme) => ({
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, 280px)",
          gap: theme.spacing.md,
          justifyContent: "center",
        })}
      >
        {events?.map((event) => (
          <EventCard key={event.id} partyId={party.id} event={event} />
        ))}
      </Box>
    </>
  );
}

function EventCard({
  partyId,
  event,
}: {
  partyId: string;
  event: {
    id: string;
    imageUrl: string;
    date: string;
    startTime: string;
    endTime: string;
    name: string;
    description: string;
    organizerId: string;
    participants: User[];
  };
}) {
  const user = useAtomValue(userAtom);
  const context = trpc.useContext();
  const { mutate: participate, isLoading } = trpc.event.participate.useMutation(
    {
      onSuccess: (event) => {
        context.party.eventsPlanned.setData(
          {},
          (prev) =>
            prev && {
              ...prev,
              events: prev.events.map((e) =>
                e.id !== event.id ? e : { ...e, ...event }
              ),
            }
        );
      },
    }
  );

  const [showEdit, setShowEdit] = useState(false);

  const isParticipating = event.participants.some(
    (participant) => participant.id === user?.id
  );

  return (
    <Card
      key={event.id}
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      sx={{ display: "flex", flexDirection: "column" }}
    >
      <Card.Section>
        <Image src={event.imageUrl} height={300} />
      </Card.Section>

      <Group mt="md" position="apart" noWrap>
        <Text weight={500}>{event.name}</Text>
        <Can
          I="update"
          this={subject("Event", event as unknown as Event)}
          otherwise={<div />}
        >
          <ActionIcon size="xs" onClick={() => setShowEdit(true)}>
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

      <Box sx={{ flex: 1 }}>
        {event.description && (
          <TypographyStylesProvider mt="sm">
            <div dangerouslySetInnerHTML={{ __html: event.description }} />
          </TypographyStylesProvider>
        )}
      </Box>

      <Button
        loading={isLoading}
        variant={isParticipating ? "gradient" : "light"}
        color="blue"
        fullWidth
        mt="md"
        radius="md"
        leftIcon={isParticipating ? <IconCheck /> : undefined}
        onClick={() =>
          participate({ eventId: event.id, participating: !isParticipating })
        }
      >
        Ich will mitmachen
      </Button>

      <Tooltip.Group openDelay={300} closeDelay={100}>
        <Avatar.Group spacing="sm" sx={{ flexWrap: "wrap" }} mt="sm">
          {event.participants.map((user) => (
            <UserAvatar key={user.id} user={user} />
          ))}
        </Avatar.Group>
      </Tooltip.Group>

      <Modal
        size="lg"
        opened={showEdit}
        onClose={() => setShowEdit(false)}
        withCloseButton={false}
      >
        <CreateEventForm
          partyId={partyId}
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
}: {
  partyId: string;
  defaultValues?: {
    id: string;
    imageUrl: string;
    date: string;
    startTime: string;
    endTime: string;
    name: string;
    description: string;
  };
  onSubmit: () => void;
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
    defaultValues ? !defaultValues.date : false
  );
  const [timeUncertain, setTimeUncertain] = useState(
    defaultValues ? !defaultValues.startTime : true
  );

  const context = trpc.useContext();
  const { mutateAsync: plan, isLoading } = trpc.event.plan.useMutation({
    onSuccess: (event) => {
      context.party.eventsPlanned.setData(
        {},
        (prev) =>
          prev && {
            ...prev,
            events: defaultValues
              ? prev.events.map((e) =>
                  e.id !== event.id ? e : { ...e, ...event }
                )
              : [...prev.events, event],
          }
      );
    },
  });

  const openRef = useRef<() => void>(null);

  const token = useAtomValue(tokenAtom);

  const { mutateAsync: uploadFile, isLoading: isUploading } = useMutation(
    async (file: FileWithPath) => {
      const formData = new FormData();
      formData.append(file.name, file);

      const response = await fetch("/uploads", {
        method: "PUT",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      return data.url as string;
    }
  );

  return (
    <form
      onSubmit={async (evt) => {
        evt.preventDefault();
        const form = evt.target as HTMLFormElement;

        const name = form["eventName"].value;

        const description = editor?.getHTML() ?? "";

        const date = form["date"].value;
        const dateUncertain = form["dateUncertain"].checked || !date;

        const startTime = form["startTime"].value;
        const endTime = form["endTime"].value;
        const timeUncertain = form["timeUncertain"].checked || !startTime;

        const imageUrl = form["imageUrl"].value;

        await plan({
          eventId: defaultValues?.id,
          partyId,
          date: dateUncertain ? "" : date,
          startTime: timeUncertain ? "" : startTime,
          endTime: timeUncertain ? "" : endTime,
          name,
          description,
          imageUrl,
        });

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
          sx={(theme) => ({
            display: "grid",
            gridTemplateColumns: "auto 1fr 1fr",
            alignItems: "center",
            gap: theme.spacing.md,

            "& > *:nth-child(2)": {
              gridColumn: "span 2",
            },
          })}
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
            defaultValue={defaultValues?.startTime}
          />
          <TimeInput
            name="endTime"
            placeholder="Endzeit"
            disabled={timeUncertain}
            required={!timeUncertain}
            defaultValue={defaultValues?.endTime}
          />
        </Box>

        <RichTextEditor editor={editor}>
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
          id="imageUrl"
          withAsterisk
          label="Bild"
          description="Gib die Adresse zu einem Bild an, das auf der Event-Seite erscheint."
        >
          <Input
            id="imageUrl"
            required
            name="imageUrl"
            placeholder="https://example.com/image.jpg"
            pattern="https?://.*"
            defaultValue={defaultValues?.imageUrl}
          />
        </Input.Wrapper>

        <Dropzone
          accept={IMAGE_MIME_TYPE}
          onDrop={(files) => {
            uploadFile(files[0]).then((url) => {
              const imageElem = document.getElementById(
                "imageUrl"
              ) as HTMLInputElement;
              if (imageElem) {
                imageElem.value = url;
              }
            });
          }}
          maxFiles={1}
          openRef={openRef}
          sx={{ height: 100, display: "grid", alignItems: "center" }}
          loading={isUploading}
        >
          <Center>Alternativ kannst du ein Bild hochladen</Center>
        </Dropzone>
        <Button onClick={() => openRef.current?.()}>Bild hochladen</Button>

        <Group position="right">
          <Button type="submit" disabled={isLoading}>
            {defaultValues ? "Speichern" : "Event erstellen"}
          </Button>
        </Group>
      </Stack>
    </form>
  );
}
