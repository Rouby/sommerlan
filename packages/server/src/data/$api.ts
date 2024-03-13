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

export const fakeGoogleSheetApi = {
  sheetsByTitle: {
    Users: fakeSheet("User"),
    Parties: fakeSheet("Party"),
    Pictures: fakeSheet("Picture"),
    Attendings: fakeSheet("Attending"),
    Games: fakeSheet("Game"),
    Events: fakeSheet("Event"),
    Donations: fakeSheet("Donation"),
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
        ([key, value]) => m[key as keyof typeof m] === value
      )
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
          ([key, value]) => m[key as keyof typeof m] === value
        )
      );
    },
    clearRows: () => {
      rows.splice(0, rows.length);
    },
  };
}
