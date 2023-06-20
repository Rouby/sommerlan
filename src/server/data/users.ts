import { randomUUID } from "crypto";
import { getSheet } from "./api";

type Values<T> = Partial<
  Pick<T, { [K in keyof T]: T[K] extends Function ? never : K }[keyof T]>
>;

export class User {
  public id = randomUUID();

  public devices: {
    credentialPublicKey: number[];
    credentialID: number[];
    counter: number;
    transports?: any[];
  }[] = [];

  constructor(props: Values<User> = {}) {
    Object.assign(this, props);
  }

  async save() {
    const row = await findRow(this.id);
    const values = Object.fromEntries(
      Object.entries(this).map(([key, value]) => [key, JSON.stringify(value)])
    );
    if (row) {
      Object.assign(row, values);
      await row.save();
    } else {
      const sheet = await getSheet();
      await sheet.sheetsByTitle["Users"].addRow(values);
    }
  }

  static async findById(id: string) {
    const row = await findRow(id);
    if (row) {
      const user = new User();
      Object.assign(
        user,
        Object.fromEntries(
          Object.keys(user).map((key) => [key, JSON.parse(row[key])])
        )
      );
      return user;
    }
    return null;
  }
}

async function findRow(id: string) {
  const sheet = await getSheet();
  const rows = await sheet.sheetsByTitle["Users"].getRows();
  return rows.find((row) => {
    try {
      return JSON.parse(row.id) === id;
    } catch {
      return row.id === id;
    }
  });
}
