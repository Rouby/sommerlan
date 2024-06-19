import { NavLink as MantineNavLink, NavLinkProps } from "@mantine/core";
import { Link, LinkProps, useMatchRoute } from "@tanstack/react-router";
import { RefAttributes } from "react";

export function NavLink(
  props: LinkProps &
    RefAttributes<HTMLAnchorElement> &
    Omit<NavLinkProps, "component">,
) {
  const matchRoute = useMatchRoute();

  return (
    <MantineNavLink
      component={Link}
      active={matchRoute(props)}
      {...(props as any)}
    />
  );
}
