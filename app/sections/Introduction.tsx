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
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { Edit } from "tabler-icons-react";
import { Can } from "~/Ability";
import type { getNews } from "~/models/news.server";

export function Introduction({
  news,
}: {
  news: Awaited<ReturnType<typeof getNews>>;
}) {
  return (
    <Container>
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
