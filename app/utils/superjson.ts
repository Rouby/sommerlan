import { json as remixJson } from "@remix-run/node";
import {
  useLoaderData as useRemixLoaderData,
  useMatches as useRemixMatches,
} from "@remix-run/react";
import type { RouteData } from "@remix-run/react/dist/routeData";
import { useMemo } from "react";
import { deserialize, serialize } from "superjson";
import type { SuperJSONResult } from "superjson/dist/types";

export function json<Data>(obj: Data, init?: number | ResponseInit) {
  const superJsonResult = serialize(obj);
  return remixJson(superJsonResult, init);
}

export function useLoaderData<Data>() {
  const loaderData = useRemixLoaderData<SuperJSONResult>();
  return deserialize<Data>(loaderData);
}

export function useMatches() {
  const matches = useRemixMatches();

  return useMemo(
    () =>
      matches.map((match) => ({
        ...match,
        data:
          match.data && deserialize<RouteData>(match.data as SuperJSONResult),
      })),
    [matches]
  );
}
