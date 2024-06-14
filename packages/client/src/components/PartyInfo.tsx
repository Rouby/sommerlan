import { Carousel } from "@mantine/carousel";
import {
  ActionIcon,
  Avatar,
  Box,
  Button,
  Center,
  Checkbox,
  Group,
  Image,
  Loader,
  Popover,
  RingProgress,
  Stack,
  Text,
  ThemeIcon,
  rem,
} from "@mantine/core";
import { Dropzone, FileWithPath, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { IconCalendar, IconCheck, IconTrash, IconX } from "@tabler/icons-react";
import { useMutation as useNormalMutation } from "@tanstack/react-query";
import dayjs from "dayjs";
import { useAtomValue } from "jotai";
import {
  createRef,
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import { useMutation, useQuery } from "urql";
import { UserAvatar } from ".";
import { graphql } from "../gql";
import { useFetchWithProgress } from "../hooks";
import { userAtom } from "../state";

export function PartyInfo({ id }: { id: string }) {
  const user = useAtomValue(userAtom)!;

  const [{ data, fetching }] = useQuery({
    query: graphql(`
      query party($id: ID!) {
        party(id: $id) {
          id
          startDate
          endDate
          attendings {
            id
            dates
            user {
              id
              displayName
              avatar
            }
          }
          pictures {
            id
            url
            meta {
              takeAt
            }
          }
        }
      }
    `),
    variables: {
      id,
    },
  });

  const [{ fetching: savingAttendance }, attendDates] = useMutation(
    graphql(`
      mutation setAttendance($partyId: ID!, $dates: [Date!]!) {
        setAttendance(partyId: $partyId, dates: $dates) {
          id
          attendings {
            id
            dates
          }
        }
      }
    `),
  );

  if (fetching) {
    return (
      <Center>
        <Loader />
      </Center>
    );
  }

  if (!data?.party) {
    return null;
  }

  const { party } = data;

  const startDate = dayjs(party.startDate, "YYYY-MM-DD").add(12, "hours");
  const endDate = dayjs(party.endDate, "YYYY-MM-DD").add(20, "hours");

  const dates = Array.from(
    { length: endDate.diff(startDate, "days") + 1 },
    (_, i) => startDate.add(i, "day"),
  );

  return (
    <>
      <Popover position="right-start">
        <Popover.Target>
          <Button
            mb="md"
            loading={savingAttendance}
            leftSection={<IconCalendar size={18} />}
          >
            Wann war ich da?
          </Button>
        </Popover.Target>
        <Popover.Dropdown>
          <Checkbox.Group
            defaultValue={
              party.attendings.find(
                (attending) => attending.user.id === user.id,
              )?.dates
            }
            onChange={(dates) => {
              attendDates({
                partyId: party.id,
                dates,
              });
            }}
          >
            <Stack>
              {dates.map((date) => (
                <Checkbox
                  key={date.format("YYYY-MM-DD")}
                  value={date.format("YYYY-MM-DD")}
                  label={date.format("ddd, L")}
                />
              ))}
            </Stack>
          </Checkbox.Group>
        </Popover.Dropdown>
      </Popover>

      <Avatar.Group spacing="sm" style={{ flexWrap: "wrap" }}>
        {party.attendings
          .filter((attending) => attending.dates.length > 0)
          .map((attending) => (
            <UserAvatar key={attending.id} user={attending.user} size="xl" />
          ))}
      </Avatar.Group>

      <Carousel>
        {party.pictures.map((picture) => (
          <Carousel.Slide key={picture.id}>
            <Image src={picture.url} height={rem(500)} fit="contain" />
          </Carousel.Slide>
        ))}
      </Carousel>

      <ImageUpload partyId={id} />
    </>
  );
}

function ImageUpload({ partyId }: { partyId: string }) {
  const [files, setFiles] = useState<FileWithPath[]>([]);
  const fileRefs = useRef(
    {} as Record<
      string,
      React.RefObject<{
        file: FileWithPath;
        upload: (partyId: string) => Promise<void>;
      }>
    >,
  );

  const { mutate: uploadAll, isLoading } = useNormalMutation(async () => {
    await Promise.all(
      Object.values(fileRefs.current).map(async (ref) => {
        const { upload } = ref.current ?? {};
        await upload?.(partyId).then(() => {});
      }),
    );
    // fileRefs.current = {};
    // setFiles([]);
  });

  return (
    <>
      <Dropzone
        accept={IMAGE_MIME_TYPE}
        onDrop={(files) =>
          setFiles((previous) =>
            [...previous, ...files].filter(
              (file, index, self) =>
                self.findIndex((f) => f.path === file.path) === index,
            ),
          )
        }
        style={{ height: 100, display: "grid", alignItems: "center" }}
        disabled={isLoading}
      >
        <Center>Ziehe Bilder zum hochladen hierher, oder klicke hier.</Center>
      </Dropzone>
      <Group justify="right" mt="md">
        <Button loading={isLoading} onClick={() => uploadAll()}>
          Hochladen starten
        </Button>
      </Group>
      <Box
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, 220px)",
          gap: "var(--mantine-spacing-md)",
          marginBlock: "var(--mantine-spacing-md)",
        }}
      >
        {files.map((file) => (
          <ImageUploadProgress
            key={file.path}
            ref={(fileRefs.current[file.path ?? ""] ??= createRef())}
            file={file}
            onDelete={() => {
              delete fileRefs.current[file.path ?? ""];
              setFiles((files) => files.filter((f) => f !== file));
            }}
          />
        ))}
      </Box>
    </>
  );
}

const ImageUploadProgress = forwardRef(function ImageUploadProgress(
  {
    file,
    onDelete,
  }: {
    file: FileWithPath;
    onDelete: () => void;
  },
  ref,
) {
  const [{ fetching, data, error }, addPicture] = useMutation(
    graphql(`
      mutation addPicture($input: PictureInput!) {
        addPicture(input: $input) {
          id
          url
          party {
            id
          }
          tags {
            id
            user {
              id
              displayName
              avatar
            }
            boundingBox
          }
          meta {
            width
            height
            takeAt
          }
        }
      }
    `),
  );
  const [progress, fetch] = useFetchWithProgress();

  useImperativeHandle(ref, () => ({
    file,
    upload: (partyId: string) =>
      addPicture(
        { input: { name: file.path ?? "", partyId, file } },
        { fetch },
      ),
  }));

  const url = useMemo(() => URL.createObjectURL(file), [file]);

  const uploading = fetching || data?.addPicture.id;

  return (
    <Box pos="relative">
      <Image
        height={220}
        src={url}
        radius={uploading ? 220 : 0}
        styles={{ root: { transition: "border-radius 0.3s ease-in-out" } }}
      />
      <RingProgress
        pos="absolute"
        top={-25}
        left={-25}
        opacity={uploading ? 100 : 0}
        size={270}
        thickness={20}
        sections={
          progress === 1
            ? [{ value: 100, color: "teal" }]
            : error
              ? [{ value: progress * 100, color: "red" }]
              : [{ value: progress * 100, color: "blue" }]
        }
        label={
          progress === 1 ? (
            <Center>
              <ThemeIcon color="teal" variant="light" radius={120} size={120}>
                <IconCheck size={120} />
              </ThemeIcon>
            </Center>
          ) : error ? (
            <Center>
              <ThemeIcon color="red" variant="light" radius={120} size={120}>
                <IconX size={120} />
              </ThemeIcon>
            </Center>
          ) : (
            <Text ta="center" color="blue" w={700} size="xl">
              {Math.floor(progress * 100)}%
            </Text>
          )
        }
      />
      {!uploading && (
        <Group justify="right" pos="absolute" bottom={0} left={0} right={0}>
          <ActionIcon onClick={onDelete} variant="light">
            <IconTrash size={16} />
          </ActionIcon>
        </Group>
      )}
    </Box>
  );
});
