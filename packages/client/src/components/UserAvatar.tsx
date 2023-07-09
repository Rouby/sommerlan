import { Avatar, AvatarProps, Tooltip, useMantineTheme } from "@mantine/core";
import type { User } from "@sommerlan-app/server/src/data/users";

export function UserAvatar({
  user,
  size,
  innerRef,
}: {
  user: User;
  size?: AvatarProps["size"];
  innerRef?: React.ForwardedRef<HTMLDivElement>;
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
    <Tooltip key={user.id} label={user.displayName} withArrow>
      <Avatar
        src={user.avatar}
        alt={user.displayName}
        radius="xl"
        color={color}
        size={size}
        ref={innerRef}
      >
        {user.displayName.split(" ").map((name) => name[0])}
      </Avatar>
    </Tooltip>
  );
}
