import {
  Avatar,
  Group,
  Text,
  UnstyledButton,
  useMantineTheme,
} from '@mantine/core';
import { ChevronRightIcon } from '@modulz/radix-icons';

export function UserInfo() {
  const theme = useMantineTheme();
  // const user = useUser();
  // console.log(user);

  return (
    <UnstyledButton
      sx={{
        display: 'block',
        width: '100%',
        padding: theme.spacing.sm,
        color:
          theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
    >
      <Group>
        <Avatar radius="xl">BH</Avatar>
        <div style={{ flex: 1 }}>
          <Text size="sm">Bob Handsome</Text>
          <Text size="xs" color="dimmed">
            bob@handsome.inc
          </Text>
        </div>
        <ChevronRightIcon />
      </Group>
    </UnstyledButton>
  );
}
