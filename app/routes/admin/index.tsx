import { Button, Container } from "@mantine/core";
import { Link } from "@remix-run/react";

export default function AdminPage() {
  return (
    <Container>
      <Button component={Link} to="user" variant="subtle">
        Nutzer administrieren
      </Button>
      <Button component={Link} to="push" variant="subtle">
        Benachrichtigungen senden
      </Button>
    </Container>
  );
}