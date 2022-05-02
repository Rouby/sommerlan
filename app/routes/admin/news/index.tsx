import { Button, Container, Group, TextInput, Title } from "@mantine/core";
import type { ActionFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { useState } from "react";
import { RichTextEditor } from "~/components";
import { createNews } from "~/models/news.server";
import { requireUserId } from "~/session.server";

interface ActionData {
  errors?: {
    title?: string;
    text?: string;
  };
}

export const action: ActionFunction = async ({ request }) => {
  const userId = await requireUserId(request);
  const formData = await request.formData();
  const title = formData.get("title");
  const text = formData.get("text");

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

  await createNews(userId, title, text);

  return redirect("/");
};

export default function AdminNewsPage() {
  const [text, setText] = useState("");

  return (
    <>
      <Form method="post">
        <Container size="md">
          <Title>Neuigkeit schreiben</Title>
          <TextInput id="title" name="title" label="Titel" />
          <RichTextEditor
            value={text}
            onChange={setText}
            sx={{ minHeight: 300 }}
          />
          <input type="hidden" value={text} name="text" />
          <Group position="right" mt="md">
            <Button type="submit">Speichern</Button>
          </Group>
        </Container>
      </Form>
    </>
  );
}
