import { GoogleSpreadsheet } from "google-spreadsheet";
import newrelic from "newrelic";

export async function getSheet() {
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
