import { NavLink as MantineNavLink, NavLinkProps } from "@mantine/core";
import {
  Link,
  MakeLinkOptions,
  RegisteredRoutesInfo,
  useMatchRoute,
} from "@tanstack/router";
import { RefAttributes } from "react";

export function NavLink<
  TDefaultFrom extends RegisteredRoutesInfo["routePaths"] = "/",
  TDefaultTo extends string = "",
  TFrom extends RegisteredRoutesInfo["routePaths"] = TDefaultFrom,
  TTo extends string = TDefaultTo,
>(
  props: MakeLinkOptions<TFrom, TTo> &
    RefAttributes<HTMLAnchorElement> &
    Omit<NavLinkProps, "component">,
) {
  const matchRoute = useMatchRoute();

  return (
    <MantineNavLink
      component={Link}
      active={matchRoute(props as any)}
      {...(props as any)}
    />
  );
}
