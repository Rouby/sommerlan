import { Button, Group } from "@mantine/core";
import { Link } from "@remix-run/react";
import { useOptionalUser } from "~/utils";

export default function Index() {
  const user = useOptionalUser();
  return (
    <div>
      Hier kommen bald news!
      {!user && (
        <Group>
          <Button component={Link} to="/join" variant="subtle">
            Anmelden
          </Button>
        </Group>
      )}
    </div>
  );
}
