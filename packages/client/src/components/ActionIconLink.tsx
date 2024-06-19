import { ActionIcon } from "@mantine/core";
import { Link, LinkProps } from "@tanstack/react-router";
import { ElementType, RefAttributes, forwardRef } from "react";

export const ActionIconLink = forwardRef(function ActionIconLink(
  props: any,
  ref,
) {
  return <ActionIcon ref={ref} component={Link} {...props} />;
}) as unknown as ElementType<LinkProps & RefAttributes<HTMLAnchorElement>>;
