import { json as remixJson } from "@remix-run/node";
import { useLoaderData as useRemixLoaderData } from "@remix-run/react";
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
