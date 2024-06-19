import { Text } from "@mantine/core";
import { Link, LinkProps } from "@tanstack/react-router";
import { RefAttributes } from "react";

export function TextLink(props: LinkProps & RefAttributes<HTMLAnchorElement>) {
  return <Text component={Link} variant="text" color="indigo" {...props} />;
}
