import { ActionIcon } from "@mantine/core";
import { Link, MakeLinkOptions, RegisteredRoutesInfo } from "@tanstack/router";
import { ElementType, RefAttributes, forwardRef } from "react";

export const ActionIconLink = forwardRef(function ActionIconLink(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: any,
  ref
) {
  return <ActionIcon ref={ref} component={Link} {...props} />;
}) as unknown as ElementType<
  MakeLinkOptions<
    RegisteredRoutesInfo["routePaths"],
    RegisteredRoutesInfo["routePaths"]
  > &
    RefAttributes<HTMLAnchorElement>
>;
