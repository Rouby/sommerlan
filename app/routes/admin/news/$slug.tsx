import { Button, Container, Group, TextInput, Title } from "@mantine/core";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { useState } from "react";
import { RichTextEditor } from "~/components";
import { getANews, updateNews } from "~/models/news.server";
import { requireUserId } from "~/session.server";
import { json, useLoaderData } from "~/utils/superjson";

type ActionData = {
  errors?: {
    title?: string;
    text?: string;
  };
};

export const action: ActionFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  const formData = await request.formData();
  const id = formData.get("id");
  const title = formData.get("title");
  const text = formData.get("text");

  if (typeof id !== "string") {
    return json<ActionData>(
      { errors: { title: "ID ist ungültig" } },
      { status: 400 }
    );
  }

  if (typeof title !== "string" || title.length < 3) {
    return json<ActionData>(
      { errors: { title: "Titel ist ungültig" } },
      { status: 400 }
    );
  }

  if (typeof text !== "string" || text.length < 3) {
    return json<ActionData>(
      { errors: { text: "Text ist ungültig" } },
      { status: 400 }
    );
  }

  await updateNews(userId, id, title, text);

  return redirect("/");
};

type LoaderData = {
  news: Awaited<ReturnType<typeof getANews>>;
};

export const loader: LoaderFunction = async ({ request, params }) => {
  return json({
    news: await getANews(await requireUserId(request), params.slug!),
  });
};

export default function AdminEditNewsPage() {
  const { news } = useLoaderData<LoaderData>();
  const [text, setText] = useState(news?.text ?? "");

  if (!news) {
    return <Container size="md">Diese News existiert nicht</Container>;
  }

  return (
    <>
      <Form method="post">
        <Container size="md">
          <Title>Neuigkeit bearbeiten</Title>
          <TextInput
            id="title"
            name="title"
            label="Titel"
            defaultValue={news.title}
          />
          <RichTextEditor
            value={text}
            onChange={setText}
            sx={{ minHeight: 300 }}
          />
          <input type="hidden" value={news.id} name="id" />
          <input type="hidden" value={text} name="text" />
          <Group position="right" mt="md">
            <Button type="submit">Speichern</Button>
          </Group>
        </Container>
      </Form>
    </>
  );
}
