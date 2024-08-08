import { ForbiddenError } from "@casl/ability";
import { getDirective, MapperKind, mapSchema } from "@graphql-tools/utils";
import { defaultFieldResolver, GraphQLSchema, Kind } from "graphql";

export function rbacDirective(schema: GraphQLSchema) {
  return mapSchema(schema, {
    [MapperKind.OBJECT_TYPE](objectType) {
      const rbacDirective = getDirective(schema, objectType, "rbac")?.[0];

      if (rbacDirective) {
        for (const field of Object.values(objectType.getFields())) {
          const isNullable =
            !!field.astNode && field.astNode.type.kind !== Kind.NON_NULL_TYPE;

          const originalResolve = field.resolve ?? defaultFieldResolver;
          field.resolve = async (source, args, ctx, info) => {
            const action = rbacDirective.action || "read";
            const fieldName = info.fieldName;

            try {
              ForbiddenError.from(ctx.ability).throwUnlessCan(
                action,
                source,
                fieldName,
              );
            } catch (err) {
              if (isNullable) {
                return null;
              }

              throw err;
            }

            return originalResolve(source, args, ctx, info);
          };
        }
      }

      return objectType;
    },
  });
}
