import { subject } from "@casl/ability";
import {
  ActionIcon,
  Box,
  Button,
  Container,
  Divider,
  Group,
  Text,
  Title,
} from "@mantine/core";
import { Link } from "@remix-run/react";
import dayjs from "dayjs";
import { Edit } from "tabler-icons-react";
import { Can } from "~/components";
import { Computer } from "~/components/Computer";
import type { getNews } from "~/models/news.server";

export function Introduction({
  news,
}: {
  news: Awaited<ReturnType<typeof getNews>>;
}) {
  const width = 17;
  const active = [
    // L
    ...[
      1 + 1 * width,
      1 + 2 * width,
      1 + 3 * width,
      1 + 4 * width,
      2 + 4 * width,
      3 + 4 * width,
      4 + 4 * width,
    ],
    // A
    ...[
      6 + 4 * width,
      6 + 3 * width,
      7 + 2 * width,
      8 + 1 * width,
      9 + 2 * width,
      10 + 3 * width,
      10 + 4 * width,
      7 + 3 * width,
      8 + 3 * width,
      9 + 3 * width,
    ],
    // N
    ...[
      12 + 4 * width,
      12 + 3 * width,
      12 + 2 * width,
      12 + 1 * width,
      13 + 2 * width,
      14 + 3 * width,
      15 + 4 * width,
      15 + 3 * width,
      15 + 2 * width,
      15 + 1 * width,
    ],
  ];

  return (
    <Container>
      <Box
        sx={{ display: "grid", gridTemplateColumns: `repeat(${width}, auto)` }}
      >
        {Array.from({ length: 6 * width }, (_, idx) => (
          <Computer key={idx} active={active.includes(idx)} />
        ))}
      </Box>
      <Can I="create" a="News">
        <Button component={Link} to="/admin/news" variant="subtle">
          Eine News schreiben
        </Button>
      </Can>
      {news
        .flatMap((news, idx) => [
          <Divider key={idx} size="xs" my="sm" />,
          <Box key={news.id}>
            <Group position="apart">
              <Title order={1}>{news.title}</Title>
              <Can I="update" this={subject("News", news)}>
                <ActionIcon component={Link} to={`/admin/news/${news.id}`}>
                  <Edit />
                </ActionIcon>
              </Can>
            </Group>
            <div dangerouslySetInnerHTML={{ __html: news.text }} />
            <Group position="right">
              <Text size="xs">
                geschrieben am {dayjs(news.createdAt).format("LLL")} von{" "}
                {news.author.name}
                {dayjs(news.updatedAt).diff(news.createdAt, "hour") > 0
                  ? `, geändert am ${dayjs(news.updatedAt).format("LLL")}`
                  : ""}
              </Text>
            </Group>
          </Box>,
        ])
        .slice(1)}
    </Container>
  );
}
