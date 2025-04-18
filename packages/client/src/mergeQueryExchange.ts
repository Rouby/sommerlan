import DataLoader from "dataloader";
import { FieldNode, Kind, OperationTypeNode } from "graphql";
import { AnyVariables, Exchange, Operation, stringifyDocument } from "urql";
import { filter, map, merge, pipe } from "wonka";

export const mergeQueryExchange =
  (options?: { url?: string }): Exchange =>
  ({ forward }) => {
    const loader = new DataLoader(
      async (ops: readonly Operation<any, AnyVariables>[]) => {
        const fields = ops.reduce(
          (acc, op) => {
            const querySelectionSet =
              op.query.definitions[0].kind === Kind.OPERATION_DEFINITION &&
              op.query.definitions[0].operation === OperationTypeNode.QUERY
                ? op.query.definitions[0].selectionSet
                : null;

            return {
              ...acc,
              ...Object.fromEntries(
                querySelectionSet?.selections
                  ?.filter((selection) => selection.kind === Kind.FIELD)
                  .map((selection) => [
                    selection.name.value,
                    mergeFieldNodes(
                      acc[selection.name.value] ?? [],
                      selection.selectionSet?.selections.filter(
                        (node) => node.kind === Kind.FIELD,
                      ) ?? [],
                    ),
                  ]) ?? [],
              ),
            };
          },
          {} as Record<string, FieldNode[]>,
        );

        const response = (async () => {
          const body = {
            query: stringifyDocument({
              kind: Kind.DOCUMENT,
              definitions: [
                {
                  kind: Kind.OPERATION_DEFINITION,
                  name: { kind: Kind.NAME, value: "mergeQuery" },
                  operation: OperationTypeNode.QUERY,
                  selectionSet: {
                    kind: Kind.SELECTION_SET,
                    selections: Object.entries(fields).map(
                      ([field, nodes]) => ({
                        kind: Kind.FIELD,
                        name: { kind: Kind.NAME, value: field },
                        selectionSet: {
                          kind: Kind.SELECTION_SET,
                          selections: nodes,
                        },
                      }),
                    ),
                  },
                },
                ...ops.flatMap((op) =>
                  op.query.definitions.filter(
                    (def) => def.kind !== Kind.OPERATION_DEFINITION,
                  ),
                ),
              ],
            }),
            operationName: "mergeQuery",
            variables: {
              // TODO: merge / rename variables
              ...Object.fromEntries(
                ops.flatMap((op) => Object.entries(op.variables ?? {})),
              ),
            },
          };

          const headers =
            typeof ops[0].context.fetchOptions === "function"
              ? ops[0].context.fetchOptions().headers
              : ops[0].context.fetchOptions?.headers;

          return fetch(options?.url ?? ops[0].context.url, {
            method: "POST",
            headers: {
              "content-type": "application/json",
              accept:
                "application/graphql-response+json, application/graphql+json, application/json, text/event-stream, multipart/mixed",
              ...headers,
            },
            body: JSON.stringify(body),
          });
        })();

        return ops.map(
          () =>
            async (..._args: RequestInit[]): Promise<Response> => {
              const r = await response;

              return r.clone();
            },
        );

        function mergeFieldNodes(
          setA: FieldNode[],
          setB: FieldNode[],
        ): FieldNode[] {
          const keys = new Set([
            ...[...setA, ...setB].map((node) => node.name.value),
          ]);

          return Array.from(keys).map((key) => {
            const a = setA.find((node) => node.name.value === key);
            const b = setB.find((node) => node.name.value === key);

            if (a?.selectionSet && b?.selectionSet) {
              return {
                ...a,
                selectionSet: {
                  kind: Kind.SELECTION_SET,
                  selections: mergeFieldNodes(
                    a.selectionSet.selections.filter(
                      (node) => node.kind === Kind.FIELD,
                    ),
                    b.selectionSet.selections.filter(
                      (node) => node.kind === Kind.FIELD,
                    ),
                  ),
                },
              };
            }

            return (a ?? b)!;
          });
        }
      },
    );
    return (ops$) => {
      const queries = pipe(
        ops$,
        filter((op) => op.kind === "query"),
        map((op) => ({
          ...op,
          context: {
            ...op.context,
            fetch: (...args: any[]) => loader.load(op).then((f) => f(...args)),
          },
        })),
      );
      const rest = pipe(
        ops$,
        filter((op) => op.kind !== "query"),
      );
      return forward(merge([queries, rest]));
    };
  };
