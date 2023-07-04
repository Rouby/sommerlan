import { GoogleSpreadsheetRow } from "google-spreadsheet";
import newrelic from "newrelic";
import { getSheet } from "./api";

export type Values<T> = Partial<
  // eslint-disable-next-line @typescript-eslint/ban-types
  Pick<T, { [K in keyof T]: T[K] extends Function ? never : K }[keyof T]>
>;

export async function findRow(sheetId: string, id: string) {
  return newrelic.startSegment(`${sheetId}.findRow`, true, async () => {
    newrelic.addCustomSpanAttribute("db.id", id);
    const sheet = await getSheet();
    const rows = await sheet.sheetsByTitle[sheetId].getRows();
    return rows.find((row) => {
      try {
        return JSON.parse(row.id) === id;
      } catch {
        return row.id === id;
      }
    });
  });
}

export async function allRows(sheetId: string) {
  return newrelic.startSegment(`${sheetId}.allRows`, true, async () => {
    newrelic.addCustomSpanAttribute("db.id", "all");
    const sheet = await getSheet();
    const rows = await sheet.sheetsByTitle[sheetId].getRows();
    return rows;
  });
}

export abstract class Base {
  abstract get sheetName(): string;

  public id = "";

  async save() {
    await newrelic.startSegment(`${this.sheetName}.save`, true, async () => {
      newrelic.addCustomSpanAttribute("db.id", this.id);
      const row = await findRow(this.sheetName, this.id);
      const values = Object.fromEntries(
        Object.entries(this).map(([key, value]) => [key, JSON.stringify(value)])
      );
      if (row) {
        Object.assign(row, values);
        await row.save();
      } else {
        const sheet = await getSheet();
        await sheet.sheetsByTitle[this.sheetName].addRow(values);
      }
    });
  }

  protected static fromRow<T extends Base>(
    cls: new () => T,
    row: GoogleSpreadsheetRow
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
