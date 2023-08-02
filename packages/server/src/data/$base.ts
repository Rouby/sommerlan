import { allRows, deleteRow, updateRow } from "./$cache";

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
    const thisClass = this.constructor as StaticThis<Base>;

    await updateRow(
      thisClass,
      this.sheetName,
      this.id,
      Object.fromEntries(Object.entries(this))
    );

    return this;
  }

  async delete() {
    const thisClass = this.constructor as StaticThis<Base>;
    await deleteRow(thisClass, this.sheetName, this.id);
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

    return allRows(cls, sheetName);
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
