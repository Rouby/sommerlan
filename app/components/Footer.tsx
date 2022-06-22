import { Container, Footer as MantineFooter, Group, Text } from "@mantine/core";
import { Link } from "@remix-run/react";

export function Footer() {
  return (
    <MantineFooter height={250} p="md">
      <Container>
        <Group>
          <Text variant="link" component={Link} to="/imprint">
            Impressum
          </Text>
        </Group>
      </Container>
    </MantineFooter>
  );
}
