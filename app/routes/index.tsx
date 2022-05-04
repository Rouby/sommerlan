import { Alert, Code, Space, Text } from "@mantine/core";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { AlertCircle } from "tabler-icons-react";
import { Footer } from "~/components";
import { getNews } from "~/models/news.server";
import { getCurrentParty } from "~/models/party.server";
import { Introduction, PartyInfo } from "~/sections";
import { getUserId } from "~/session.server";

interface LoaderData {
  news: Awaited<ReturnType<typeof getNews>>;
  party: Awaited<ReturnType<typeof getCurrentParty>>;
}

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await getUserId(request);

  return json({
    news: await getNews(userId),
    party: await getCurrentParty(userId),
  });
};

export default function Index() {
  const { news, party } = useLoaderData<LoaderData>();
  return (
    <>
      <Introduction news={news} />
      <Space h="lg" />
      {party ? (
        <>
          <PartyInfo nextDate={party.startDate} />
          <Space h="lg" />
        </>
      ) : null}
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
