import { Container, Switch } from "@mantine/core";
import { usePushNotifications } from "~/components";

export default function UserPage() {
  const { isSubscribed, subscribe, unsubscribe, canSubscribe } =
    usePushNotifications();

  return (
    <Container>
      <Switch
        label="Benachrichtungen erhalten"
        checked={isSubscribed}
        onChange={(event) => {
          if (event.currentTarget.checked) {
            subscribe();
          } else {
            unsubscribe();
          }
        }}
        disabled={!canSubscribe}
      />
    </Container>
  );
}
