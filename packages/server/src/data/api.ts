/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { GoogleSpreadsheet } from "google-spreadsheet";

export async function getSheet() {
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);

  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL!,
    private_key: process.env.GOOGLE_PRIVATE_KEY!,
  });

  await doc.loadInfo();

  return doc;
}
