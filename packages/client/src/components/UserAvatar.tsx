import {
  Avatar,
  AvatarProps,
  Group,
  Tooltip,
  useMantineTheme,
} from "@mantine/core";

export function UserAvatar({
  user,
  size,
  innerRef,
  showName,
}: {
  user: { id: string; avatar: string; displayName: string };
  size?: AvatarProps["size"];
  innerRef?: React.ForwardedRef<HTMLDivElement>;
  showName?: boolean;
}) {
  const theme = useMantineTheme();
  const availableColors = Object.keys(
    theme.colors,
  ) as (keyof typeof theme.colors)[];
  const initials = user.displayName.split(" ").map((name) => name[0]);
  const color =
    availableColors[
      initials.map((char) => char.charCodeAt(0)).reduce((a, b) => a + b, 0) %
        availableColors.length
    ];

  if (showName) {
    return (
      <Group gap="xs">
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
        <div>{user.displayName}</div>
      </Group>
    );
  }

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
