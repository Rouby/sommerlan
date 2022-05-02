import { Alert, Code, Space, Text } from "@mantine/core";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { AlertCircle } from "tabler-icons-react";
import { Footer } from "~/components";
import { getNews } from "~/models/news.server";
import { Introduction, PartyInfo } from "~/sections";
import { getUserId } from "~/session.server";

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await getUserId(request);

  return json({
    news: await getNews(userId),
  });
};

export default function Index() {
  const { news } = useLoaderData();
  return (
    <>
      <Introduction news={news} />
      <Space h="lg" />
      <PartyInfo nextDate="1" />
      <Space h="lg" />
      <Footer />
    </>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <Alert icon={<AlertCircle size={16} />} title="Uff!" color="red">
      <Text>{error.message}</Text>
      <Code> {error.stack}</Code>
    </Alert>
  );
}
