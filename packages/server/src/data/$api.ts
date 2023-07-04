/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { GoogleSpreadsheet } from "google-spreadsheet";
import newrelic from "newrelic";
import { logger } from "../logger";

type ID = `"${string}"`;
type JSON = string;

const cache = new Map<string, Record<ID, Record<string, JSON>>>();

async function getSheet() {
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

async function loadCache(sheetTitle: string) {
  const doc = await getSheet();
  const rows = await doc.sheetsByTitle[sheetTitle].getRows();

  cache.set(
    sheetTitle,
    Object.fromEntries(rows.map((row) => [row.id as ID, row]))
  );

  return cache.get(sheetTitle)!;
}

export async function syncCache() {
  logger.info("Syncing data cache");

  const doc = await getSheet();

  for (const sheetTitle of cache.keys()) {
    const sheet = doc.sheetsByTitle[sheetTitle];
    const rows = await sheet.getRows();

    const cachedRows = cache.get(sheetTitle)!;

    for (const cachedRow of Object.values(cachedRows)) {
      const row = rows.find((row) => row.id === cachedRow.id);
      if (row) {
        Object.assign(row, cachedRow);
        await row.save();
      } else {
        await sheet.addRow(cachedRow);
      }
    }
  }

  // cache.clear();
}

export async function getRows(sheetTitle: string) {
  const rowsById = cache.get(sheetTitle) ?? (await loadCache(sheetTitle));

  return Object.values(rowsById);
}

export async function saveRow(sheetTitle: string, row: Record<string, JSON>) {
  const rowsById = cache.get(sheetTitle) ?? (await loadCache(sheetTitle));

  rowsById[row.id as ID] = row;
}

export async function deleteRow(sheetTitle: string, rowId: ID) {
  const rowsById = cache.get(sheetTitle) ?? (await loadCache(sheetTitle));

  delete rowsById[rowId];
}
