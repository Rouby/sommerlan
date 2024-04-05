import { createGraphQLError } from "graphql-yoga";
import { allRows, deleteRow, updateRow } from "./$cache";

export type Values<T> = Partial<
  Pick<T, { [K in keyof T]: T[K] extends Function ? never : K }[keyof T]>
>;

type StaticThis<T extends Base> = {
  new (): T;
  cache: typeof Base.cache;
  allRows: typeof Base.allRows;
};

export abstract class Base {
  static sheetName: string;
  abstract get sheetName(): string;

  static get cache() {
    return {
      allRows,
      deleteRow,
      updateRow,
    };
  }

  public id = "";

  async save() {
    const thisClass = this.constructor as StaticThis<Base>;

    await thisClass.cache.updateRow(
      thisClass,
      this.sheetName,
      this.id,
      Object.fromEntries(Object.entries(this))
    );

    return this;
  }

  async delete() {
    const thisClass = this.constructor as StaticThis<Base>;
    await thisClass.cache.deleteRow(thisClass, this.sheetName, this.id);
  }

  static async all<T extends Base>(this: StaticThis<T>): Promise<T[]> {
    return this.allRows(this);
  }

  static async filter<T extends Base>(
    this: StaticThis<T>,
    predicate: (v: T) => boolean
  ): Promise<T[]> {
    return (await this.allRows(this)).filter(predicate);
  }

  static async filterByIds<T extends Base>(
    this: StaticThis<T>,
    ids: string[]
  ): Promise<T[]> {
    return (await this.allRows(this)).filter((row) => ids.includes(row.id));
  }

  static async find<T extends Base>(
    this: StaticThis<T>,
    predicate: (v: T) => boolean
  ): Promise<T | null> {
    return (await this.allRows(this)).find(predicate) ?? null;
  }

  static async findById<T extends Base>(
    this: StaticThis<T>,
    id: string
  ): Promise<T | null> {
    return (await this.allRows(this)).find((d) => d.id === id) ?? null;
  }

  static async findByIdOrThrow<T extends Base>(
    this: StaticThis<T>,
    id: string
  ): Promise<T> {
    const val = (await this.allRows(this)).find((d) => d.id === id);
    if (!val) throw createGraphQLError(`No ${this.name} found with id ${id}`);
    return val;
  }

  static async allRows<T extends Base>(cls: new () => T) {
    const sheetName = cls.prototype.sheetName;

    return this.cache.allRows(cls, sheetName);
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
