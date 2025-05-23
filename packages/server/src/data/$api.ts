import { GoogleSpreadsheet } from "google-spreadsheet";
import * as Models from ".";
// @ts-ignore
import newrelic = require("newrelic");

export async function getSheet() {
  if (process.env.FAKE_API) {
    return fakeGoogleSheetApi as unknown as GoogleSpreadsheet;
  }

  return newrelic.startSegment("getSheet", true, async () => {
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);

    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL!,
      private_key: process.env.GOOGLE_PRIVATE_KEY!,
    });

    await doc.loadInfo();

    return doc;
  });
}

export function createFakeApi() {
  return {
    data: {
      syncCache: async () => {},
      getCacheInfo: () => ({ lastSync: new Date(), entries: [] }),
      Attending: class Attending extends Models.Attending {
        static rows: Attending[] = [];
        static get cache() {
          return {
            allRows: async <T>() => this.rows as T[],
            deleteRow: async (_: new () => unknown, __: string, id: string) => {
              const index = this.rows.findIndex((row) => row.id === id);
              this.rows.splice(index, 1);
            },
            updateRow: async (
              _: new () => unknown,
              __: string,
              id: string,
              values: Record<string, unknown>,
            ) => {
              const row = this.rows.find((row) => row.id === id);
              if (row) {
                Object.assign(row, values);
              } else {
                this.rows.push(new Attending(values));
              }
            },
          };
        }
      },
      Donation: class Donation extends Models.Donation {
        static rows: Donation[] = [];
        static get cache() {
          return {
            allRows: async <T>() => this.rows as T[],
            deleteRow: async (_: new () => unknown, __: string, id: string) => {
              const index = this.rows.findIndex((row) => row.id === id);
              this.rows.splice(index, 1);
            },
            updateRow: async (
              _: new () => unknown,
              __: string,
              id: string,
              values: Record<string, unknown>,
            ) => {
              const row = this.rows.find((row) => row.id === id);
              if (row) {
                Object.assign(row, values);
              } else {
                this.rows.push(new Donation(values));
              }
            },
          };
        }
      },
      Event: class Event extends Models.Event {
        static rows: Event[] = [];
        static get cache() {
          return {
            allRows: async <T>() => this.rows as T[],
            deleteRow: async (_: new () => unknown, __: string, id: string) => {
              const index = this.rows.findIndex((row) => row.id === id);
              this.rows.splice(index, 1);
            },
            updateRow: async (
              _: new () => unknown,
              __: string,
              id: string,
              values: Record<string, unknown>,
            ) => {
              const row = this.rows.find((row) => row.id === id);
              if (row) {
                Object.assign(row, values);
              } else {
                this.rows.push(new Event(values));
              }
            },
          };
        }
      },
      Game: class Game extends Models.Game {
        static rows: Game[] = [];
        static get cache() {
          return {
            allRows: async <T>() => this.rows as T[],
            deleteRow: async (_: new () => unknown, __: string, id: string) => {
              const index = this.rows.findIndex((row) => row.id === id);
              this.rows.splice(index, 1);
            },
            updateRow: async (
              _: new () => unknown,
              __: string,
              id: string,
              values: Record<string, unknown>,
            ) => {
              const row = this.rows.find((row) => row.id === id);
              if (row) {
                Object.assign(row, values);
              } else {
                this.rows.push(new Game(values));
              }
            },
          };
        }
      },
      Party: class Party extends Models.Party {
        static rows: Party[] = [];
        static get cache() {
          return {
            allRows: async <T>() => this.rows as T[],
            deleteRow: async (_: new () => unknown, __: string, id: string) => {
              const index = this.rows.findIndex((row) => row.id === id);
              this.rows.splice(index, 1);
            },
            updateRow: async (
              _: new () => unknown,
              __: string,
              id: string,
              values: Record<string, unknown>,
            ) => {
              const row = this.rows.find((row) => row.id === id);
              if (row) {
                Object.assign(row, values);
              } else {
                this.rows.push(new Party(values));
              }
            },
          };
        }
      },
      Picture: class Picture extends Models.Picture {
        static rows: Picture[] = [];
        static get cache() {
          return {
            allRows: async <T>() => this.rows as T[],
            deleteRow: async (_: new () => unknown, __: string, id: string) => {
              const index = this.rows.findIndex((row) => row.id === id);
              this.rows.splice(index, 1);
            },
            updateRow: async (
              _: new () => unknown,
              __: string,
              id: string,
              values: Record<string, unknown>,
            ) => {
              const row = this.rows.find((row) => row.id === id);
              if (row) {
                Object.assign(row, values);
              } else {
                this.rows.push(new Picture(values));
              }
            },
          };
        }
      },
      User: class User extends Models.User {
        static rows: User[] = [];
        static get cache() {
          return {
            allRows: async <T>() => this.rows as T[],
            deleteRow: async (_: new () => unknown, __: string, id: string) => {
              const index = this.rows.findIndex((row) => row.id === id);
              this.rows.splice(index, 1);
            },
            updateRow: async (
              _: new () => unknown,
              __: string,
              id: string,
              values: Record<string, unknown>,
            ) => {
              const row = this.rows.find((row) => row.id === id);
              if (row) {
                Object.assign(row, values);
              } else {
                this.rows.push(new User(values));
              }
            },
          };
        }
      },
      MoneyTransfer: class MoneyTransfer extends Models.MoneyTransfer {
        static rows: MoneyTransfer[] = [];
        static get cache() {
          return {
            allRows: async <T>() => this.rows as T[],
            deleteRow: async (_: new () => unknown, __: string, id: string) => {
              const index = this.rows.findIndex((row) => row.id === id);
              this.rows.splice(index, 1);
            },
            updateRow: async (
              _: new () => unknown,
              __: string,
              id: string,
              values: Record<string, unknown>,
            ) => {
              const row = this.rows.find((row) => row.id === id);
              if (row) {
                Object.assign(row, values);
              } else {
                this.rows.push(new MoneyTransfer(values));
              }
            },
          };
        }
      },
    },
  };
}

export const fakeGoogleSheetApi = {
  sheetsByTitle: {
    Attendings: fakeSheet("Attending"),
    Donations: fakeSheet("Donation"),
    Events: fakeSheet("Event"),
    Games: fakeSheet("Game"),
    Parties: fakeSheet("Party"),
    Pictures: fakeSheet("Picture"),
    Users: fakeSheet("User"),
  },

  seedRow(clsName: string, data: any) {
    return Object.values(this.sheetsByTitle)
      .find((sheet) => clsName === sheet.clsName)
      ?.seedRow(data);
  },
  findRow(clsName: string, query: any) {
    return Object.values(this.sheetsByTitle)
      .find((sheet) => clsName === sheet.clsName)
      ?.findRow(query);
  },
  seedData: async (clsName: string, data: any) => {
    const Model = Models[clsName as "User"];
    const dbo = new Model(data);
    await dbo.save();
    return dbo;
  },
  findData: async (clsName: string, query: any) => {
    const Model = Models[clsName as "User"];
    return Model.find((m) =>
      Object.entries(query).every(
        ([key, value]) => m[key as keyof typeof m] === value,
      ),
    );
  },
  clear() {
    Object.values(this.sheetsByTitle).forEach((sheet) => sheet.clearRows());
  },
};

function fakeSheet(clsName: string) {
  const rows: {
    [key: string]: any;
    save: () => Promise<void>;
    delete: () => Promise<void>;
  }[] = [];

  return {
    getRows: async () => {
      return rows;
    },
    addRow: async (values: any) => {
      rows.push({
        ...values,
        save: async () => {},
        delete: async () => {
          const index = rows.findIndex((row) => row.id === values.id);
          rows.splice(index, 1);
        },
      });
    },

    clsName,
    seedRow: async (data: any) => {
      rows.push(data);
      return data;
    },
    findRow: async (query: any) => {
      return rows.find((m) =>
        Object.entries(query).every(
          ([key, value]) => m[key as keyof typeof m] === value,
        ),
      );
    },
    clearRows: () => {
      rows.splice(0, rows.length);
    },
  };
}
