import { Operation, applyPatch, compare } from "fast-json-patch";
import newrelic from "newrelic";
import { logger } from "../logger";
import { getSheet } from "./$api";

type Base = object;

const deleteMarker = Symbol.for("delete");

const cache = new Map<string, Record<string, unknown>[]>();
const patches = new Map<
  new () => Base,
  Map<string, Operation[] | typeof deleteMarker>
>();

export async function deleteRow<T extends Base>(
  cls: new () => T,
  sheetName: string,
  id: string
) {
  // ensure cache is populated
  await allRows(cls, sheetName);

  if (!patches.has(cls)) {
    patches.set(cls, new Map());
  }
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  if (!patches.get(cls)!.has(id)) {
    patches.set(cls, new Map());
  }
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  patches.get(cls)!.set(id, deleteMarker);

  cache.set(sheetName, cache.get(sheetName)?.filter((d) => d.id !== id) ?? []);
}

export async function updateRow<T extends Base>(
  cls: new () => T,
  sheetName: string,
  id: string,
  values: Record<string, unknown>
) {
  // ensure cache is populated
  await allRows(cls, sheetName);

  const cachedValues = cache.get(sheetName)?.find((values) => values.id === id);

  const diff = compare(cachedValues ?? {}, values, true);

  logger.debug({ diff, cachedValues, values, sheetName }, "Storing diff");

  if (!patches.has(cls)) {
    patches.set(cls, new Map());
  }
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  if (!patches.get(cls)!.has(id)) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    patches.get(cls)!.set(id, []);
  }
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const storedOperations = patches.get(cls)!.get(id)!;

  if (Array.isArray(storedOperations)) {
    storedOperations.push(...diff);

    const nextCache =
      cache
        .get(sheetName)
        ?.map((cachedValues) =>
          cachedValues.id === id ? { ...cachedValues, ...values } : cachedValues
        ) ?? [];

    if (!cachedValues) {
      nextCache.push(values);
    }

    cache.set(sheetName, nextCache);
  } else {
    logger.warn({ id, sheetName }, "Tried to save a deleted entity");
  }
}

export async function allRows<T extends Base>(
  cls: new () => T,
  sheetName: string
) {
  return await newrelic.startSegment(`allRows.${sheetName}`, true, async () => {
    newrelic.addCustomSpanAttribute("db.sheetName", sheetName);
    if (!cache.has(sheetName)) {
      await fillCache(cls, sheetName);
    }

    return (cache.get(sheetName) ?? []).map((values) => {
      const obj = new cls();
      Object.assign(obj, JSON.parse(JSON.stringify(values)));
      return obj;
    });
  });
}

export async function syncCache() {
  logger.trace("Syncing cache");
  await newrelic.startSegment(`syncCache`, true, async () => {
    for (const [cls, entities] of patches.entries()) {
      const sheetName = cls.prototype.sheetName;
      await newrelic.startSegment(`syncCache.${sheetName}`, true, async () => {
        const objectKeys = Object.keys(new cls());
        const doc = await getSheet();
        const rows = await doc.sheetsByTitle[sheetName].getRows();
        for (const [id, operations] of entities.entries()) {
          const row = rows.find((row) => row.id === JSON.stringify(id));
          await newrelic.startSegment(
            `syncCache.${sheetName}.entity`,
            true,
            async () => {
              newrelic.addCustomAttribute("entity.id", id);
              newrelic.addCustomAttribute("entity.sheetName", sheetName);
              if (operations === deleteMarker) {
                logger.trace({ sheetName, id }, "Deleting entity");
                row?.delete();
              } else {
                const original = row
                  ? Object.fromEntries(
                      objectKeys.map((key) => [
                        key,
                        row[key]
                          ? JSON.parse(row[key])
                          : new cls()[key as keyof typeof cls],
                      ])
                    )
                  : {};
                try {
                  const { newDocument } = applyPatch(
                    original,
                    operations,
                    true,
                    false
                  );
                  const values = Object.fromEntries(
                    Object.entries(newDocument).map(([key, value]) => [
                      key,
                      JSON.stringify(value),
                    ])
                  );
                  logger.trace(
                    { sheetName, id, operations, values },
                    "Syncing entity"
                  );
                  if (row) {
                    Object.assign(row, values);
                    await row.save();
                  } else {
                    await doc.sheetsByTitle[sheetName].addRow(values);
                  }
                } catch (err) {
                  logger.error(
                    { err, sheetName, id, operations, original },
                    "Failed to apply patch"
                  );
                }
              }
            }
          );
        }
      });
    }
  });
  logger.trace("Synced cache");
  patches.clear();
  cache.clear();
}

const fillingCache = new Map<string, Promise<void>>();
async function fillCache<T extends Base>(cls: new () => T, sheetName: string) {
  if (fillingCache.has(sheetName)) {
    await fillingCache.get(sheetName);
    return;
  }
  const promise = newrelic.startSegment(
    `${sheetName}.fillCache`,
    true,
    async () => {
      newrelic.addCustomSpanAttribute("db.sheetName", sheetName);
      const doc = await getSheet();
      const rows = await doc.sheetsByTitle[sheetName].getRows();
      const objectKeys = Object.keys(new cls());
      cache.set(
        sheetName,
        rows.map((row) => {
          return Object.fromEntries(
            objectKeys.map((key) => [
              key,
              row[key]
                ? JSON.parse(row[key])
                : new cls()[key as keyof typeof cls],
            ])
          );
        })
      );
      fillingCache.delete(sheetName);
    }
  );
  fillingCache.set(sheetName, promise);
  logger.trace({ sheetName }, "Filling cache");
  await promise;
}
