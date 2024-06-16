import { Avatar, Group, Menu, UnstyledButton, rem } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import { useAtomValue } from "jotai";
import { userAtom } from "../../state";
import { UserMenu } from "./UserMenu";

export function UserButton() {
  const user = useAtomValue(userAtom);

  if (!user) return null;

  return (
    <>
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <UnstyledButton data-testid="user button">
            <Group wrap="nowrap">
              <Avatar src={user.avatar} radius="xl" />

              {user.displayName}

              <IconChevronRight
                style={{ width: rem(14), height: rem(14) }}
                stroke={1.5}
              />
            </Group>
          </UnstyledButton>
        </Menu.Target>

        <Menu.Dropdown>
          <UserMenu />
        </Menu.Dropdown>
      </Menu>
    </>
  );
}
