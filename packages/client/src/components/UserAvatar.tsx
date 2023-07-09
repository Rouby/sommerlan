import { Avatar, AvatarProps, useMantineTheme } from "@mantine/core";
import type { User } from "@sommerlan-app/server/src/data/users";

export function UserAvatar({
  user,
  size,
}: {
  user: User;
  size?: AvatarProps["size"];
}) {
  const theme = useMantineTheme();
  const availableColors = Object.keys(
    theme.colors
  ) as (keyof typeof theme.colors)[];
  const initials = user.displayName.split(" ").map((name) => name[0]);
  const color =
    availableColors[
      initials.map((char) => char.charCodeAt(0)).reduce((a, b) => a + b, 0) %
        availableColors.length
    ];
  return (
    <Avatar
      src={user.avatar}
      alt={user.displayName}
      radius="xl"
      color={color}
      size={size}
    >
      {user.displayName.split(" ").map((name) => name[0])}
    </Avatar>
  );
}
