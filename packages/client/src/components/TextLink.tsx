import { Text } from "@mantine/core";
import { Link, MakeLinkOptions, RegisteredRoutesInfo } from "@tanstack/router";
import { RefAttributes } from "react";

export function TextLink<
  TDefaultFrom extends RegisteredRoutesInfo["routePaths"] = "/",
  TDefaultTo extends string = "",
  TFrom extends RegisteredRoutesInfo["routePaths"] = TDefaultFrom,
  TTo extends string = TDefaultTo
>(props: MakeLinkOptions<TFrom, TTo> & RefAttributes<HTMLAnchorElement>) {
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Text component={Link} variant="text" color="indigo" {...(props as any)} />
  );
}
