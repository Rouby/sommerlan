import { Alert, Button, Code, Space, Text } from "@mantine/core";
import { showNotification, updateNotification } from "@mantine/notifications";
import { CircleBackslashIcon, CrossCircledIcon } from "@modulz/radix-icons";
import type { LoaderFunction } from "@remix-run/node";
import { useEffect } from "react";
import { AlertCircle, Check } from "tabler-icons-react";
import { Footer, usePushNotifications } from "~/components";
import { getNews } from "~/models/news.server";
import { getCurrentParty } from "~/models/party.server";
import { Introduction, PartyInfo } from "~/sections";
import { getUserId } from "~/session.server";
import { useOptionalUser } from "~/utils";
import { json, useLoaderData } from "~/utils/superjson";

type LoaderData = {
  news: Awaited<ReturnType<typeof getNews>>;
  party: Awaited<ReturnType<typeof getCurrentParty>>;
};

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await getUserId(request);

  return json({
    news: await getNews(userId),
    party: await getCurrentParty(userId),
  });
};

export default function Index() {
  const { news, party } = useLoaderData<LoaderData>();
  const user = useOptionalUser();
  const { isSubscribed, subscribe, canSubscribe } = usePushNotifications();

  useEffect(() => {
    if (
      user &&
      !isSubscribed &&
      canSubscribe &&
      !localStorage.getItem("dont-want-notifications")
    ) {
      showNotification({
        id: "push-notification-subscription",
        autoClose: false,
        message: (
          <>
            Möchtest du Benachrichtigungen erhalten?
            <Space h="lg" />
            <Button
              onClick={() => {
                updateNotification({
                  id: "push-notification-subscription",
                  autoClose: false,
                  disallowClose: true,
                  message: (
                    <>
                      Möchtest du Benachrichtigungen erhalten?
                      <Space h="lg" />
                      <Button disabled loading>
                        Aktivieren
                      </Button>
                    </>
                  ),
                });
                subscribe()?.then((result) => {
                  switch (result) {
                    case "subscribed":
                      updateNotification({
                        id: "push-notification-subscription",
                        message: "Du erhälst ab jetzt Push-Nachrichten!",
                        icon: <Check />,
                      });
                      break;
                    case "denied":
                      updateNotification({
                        id: "push-notification-subscription",
                        message: "Push-Nachrichten wurden abgelehnt!",
                        icon: <CrossCircledIcon />,
                      });
                      break;
                    case "failed":
                      updateNotification({
                        id: "push-notification-subscription",
                        message:
                          "Push-Nachrichten konnten nicht eingerichtet werden!",
                        icon: <CircleBackslashIcon />,
                      });
                      break;
                  }
                });
              }}
            >
              Aktivieren
            </Button>
          </>
        ),
        onClose: () => {
          localStorage.setItem("dont-want-notifications", "true");
        },
      });
    }
  }, [user, isSubscribed, canSubscribe, subscribe]);

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
