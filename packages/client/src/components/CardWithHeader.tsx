import { Group, Paper, Text } from "@mantine/core";

export function CardWithHeader({
  header,
  actions,
  children,
}: {
  header: React.ReactNode;
  actions?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Paper withBorder>
      <Group
        justify="space-between"
        p="xs"
        bg="var(--mantine-color-gray-filled)"
        color="var(--mantine-color-gray-text)"
      >
        <Text>{header}</Text>

        {actions}
      </Group>
      {children}
    </Paper>
  );
}
