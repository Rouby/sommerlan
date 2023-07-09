import { Operation, applyPatch, compare } from "fast-json-patch";
import newrelic from "newrelic";
import { logger } from "../logger";
import { getSheet } from "./$api";

export type Values<T> = Partial<
  // eslint-disable-next-line @typescript-eslint/ban-types
  Pick<T, { [K in keyof T]: T[K] extends Function ? never : K }[keyof T]>
>;

type StaticThis<T extends Base> = { new (): T };

const deleteMarker = Symbol.for("delete");

export abstract class Base {
  static sheetName: string;
  abstract get sheetName(): string;

  public id = "";

  async save() {
    const cachedValues = cache
      .get(this.sheetName)
      ?.find((values) => values.id === this.id);

    const thisValues = Object.fromEntries(Object.entries(this));

    const diff = compare(cachedValues ?? {}, thisValues, true);

    const thisClass = this.constructor as StaticThis<Base>;

    if (!patches.has(thisClass)) {
      patches.set(thisClass, new Map());
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    if (!patches.get(thisClass)!.has(this.id)) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      patches.get(thisClass)!.set(this.id, []);
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const storedOperations = patches.get(thisClass)!.get(this.id)!;

    if (Array.isArray(storedOperations)) {
      storedOperations.push(...diff);

      const nextCache =
        cache
          .get(this.sheetName)
          ?.map((values) =>
            values.id === this.id ? { ...values, ...thisValues } : values
          ) ?? [];

      if (!cachedValues) {
        nextCache.push(thisValues);
      }

      cache.set(this.sheetName, nextCache);
    } else {
      logger.warn(
        { id: this.id, sheetName: this.sheetName },
        "Tried to save a deleted entity"
      );
    }

    return this;
  }

  async delete() {
    const thisClass = this.constructor as StaticThis<Base>;

    if (!patches.has(thisClass)) {
      patches.set(thisClass, new Map());
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    if (!patches.get(thisClass)!.has(this.id)) {
      patches.set(thisClass, new Map());
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    patches.get(thisClass)!.set(this.id, deleteMarker);

    cache.set(
      this.sheetName,
      cache.get(this.sheetName)?.filter((d) => d.id !== this.id) ?? []
    );
  }

  static async all<T extends Base>(this: StaticThis<T>): Promise<T[]> {
    return Base.allRows(this);
  }

  static async filter<T extends Base>(
    this: StaticThis<T>,
    predicate: (v: T) => boolean
  ): Promise<T[]> {
    return (await Base.allRows(this)).filter(predicate);
  }

  static async find<T extends Base>(
    this: StaticThis<T>,
    predicate: (v: T) => boolean
  ): Promise<T | undefined> {
    return (await Base.allRows(this)).find(predicate);
  }

  static async findById<T extends Base>(
    this: StaticThis<T>,
    id: string
  ): Promise<T | undefined> {
    return (await Base.allRows(this)).find((d) => d.id === id);
  }

  private static async allRows<T extends Base>(cls: new () => T) {
    const sheetName = cls.prototype.sheetName;
    if (!cache.has(sheetName)) {
      await newrelic.startSegment(`${sheetName}.fillCache`, true, async () => {
        newrelic.addCustomSpanAttribute("db.sheetName", sheetName);
        const doc = await getSheet();
        const rows = await doc.sheetsByTitle[sheetName].getRows();
        const objectKeys = Object.keys(new cls());
        cache.set(
          sheetName,
          rows.map((row) => {
            return Object.fromEntries(
              objectKeys.map((key) => [key, JSON.parse(row[key])])
            );
          })
        );
      });
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return cache.get(sheetName)!.map((values) => {
      const obj = new cls();
      Object.assign(obj, values);
      return obj;
    });
  }

  toJSON() {
    return {
      ...Object.fromEntries(
        Object.entries(
          Object.getOwnPropertyDescriptors(Object.getPrototypeOf(this))
        )
          .filter(([key, value]) => !(key in { ...this }) && !value.writable)
          .map(([key, value]) => [key, value.get?.call(this)])
      ),
      ...this,
    };
  }
}

const cache = new Map<string, Record<string, unknown>[]>();
const patches = new Map<
  new () => Base,
  Map<string, Operation[] | typeof deleteMarker>
>();

export async function syncCache() {
  logger.trace("Syncing cache");
  await newrelic.startSegment(`syncCache`, true, async () => {
    for (const [cls, entities] of patches.entries()) {
      const sheetName = cls.prototype.sheetName;
      await newrelic.startSegment(`syncCahce.${sheetName}`, true, async () => {
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
                      objectKeys.map((key) => [key, JSON.parse(row[key])])
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
