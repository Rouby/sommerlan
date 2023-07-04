import newrelic from "newrelic";
import { deleteRow, getRows, saveRow } from "./$api";

export type Values<T> = Partial<
  // eslint-disable-next-line @typescript-eslint/ban-types
  Pick<T, { [K in keyof T]: T[K] extends Function ? never : K }[keyof T]>
>;

type StaticThis<T extends Base> = { new (): T };

export abstract class Base {
  static sheetName: string;
  abstract get sheetName(): string;

  public id = "";

  async save() {
    await newrelic.startSegment(`${this.sheetName}.save`, true, async () => {
      newrelic.addCustomSpanAttribute("db.id", this.id);

      const values = Object.fromEntries(
        Object.entries(this).map(([key, value]) => [key, JSON.stringify(value)])
      );
      await saveRow(this.sheetName, values);
    });

    return this;
  }

  async delete() {
    await newrelic.startSegment(`${this.sheetName}.delete`, true, async () => {
      newrelic.addCustomSpanAttribute("db.id", this.id);

      await deleteRow(this.sheetName, `"${this.id}"`);
    });

    return this;
  }

  static async all<T extends Base>(this: StaticThis<T>): Promise<T[]> {
    return await newrelic.startSegment(
      `${this.prototype.sheetName}.all`,
      true,
      async () => {
        newrelic.addCustomSpanAttribute("db.id", "all");

        const rows = await getRows(this.prototype.sheetName);

        return rows.map((row) => Base.fromRow(this, row));
      }
    );
  }

  static async filter<T extends Base>(
    this: StaticThis<T>,
    predicate: (v: T) => boolean
  ): Promise<T[]> {
    return await newrelic.startSegment(
      `${this.prototype.sheetName}.find`,
      true,
      async () => {
        newrelic.addCustomSpanAttribute("db.id", "all");

        const rows = await getRows(this.prototype.sheetName);

        return rows.map((row) => Base.fromRow(this, row)).filter(predicate);
      }
    );
  }

  static async find<T extends Base>(
    this: StaticThis<T>,
    predicate: (v: T) => boolean
  ): Promise<T | undefined> {
    return await newrelic.startSegment(
      `${this.prototype.sheetName}.find`,
      true,
      async () => {
        newrelic.addCustomSpanAttribute("db.id", "all");

        const rows = await getRows(this.prototype.sheetName);

        return rows.map((row) => Base.fromRow(this, row)).find(predicate);
      }
    );
  }

  static async findById<T extends Base>(
    this: StaticThis<T>,
    id: string
  ): Promise<T | undefined> {
    return await newrelic.startSegment(
      `${this.prototype.sheetName}.find`,
      true,
      async () => {
        newrelic.addCustomSpanAttribute("db.id", "all");

        const rows = await getRows(this.prototype.sheetName);

        return rows
          .map((row) => Base.fromRow(this, row))
          .find((d) => d.id === id);
      }
    );
  }

  private static fromRow<T extends Base>(
    cls: new () => T,
    row: Record<string, string>
  ) {
    const obj = new cls();
    Object.assign(
      obj,
      Object.fromEntries(
        Object.keys(obj).map((key) => [key, JSON.parse(row[key])])
      )
    );
    return obj;
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
