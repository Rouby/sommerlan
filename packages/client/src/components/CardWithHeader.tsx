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
        position="apart"
        p="xs"
        sx={(theme) => ({
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[2],
        })}
      >
        <Text>{header}</Text>

        {actions}
      </Group>
      {children}
    </Paper>
  );
}
