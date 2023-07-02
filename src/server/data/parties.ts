import { randomUUID } from "crypto";
import { getSheet } from "./api";
import { Base, Values, findRow } from "./utils";

export class Party extends Base {
  get sheetName() {
    return "Parties";
  }

  public id = randomUUID();

  public startDate = "";

  public endDate = "";

  constructor(props?: Values<Party>) {
    super();
    if (props) Object.assign(this, props);
  }

  static async all() {
    const sheet = await getSheet();
    const rows = await sheet.sheetsByTitle["Parties"].getRows();
    return rows.map((row) => Base.fromRow(Party, row));
  }

  static async findById(id: string) {
    const row = await findRow("Parties", id);
    if (row) {
      return Base.fromRow(Party, row);
    }
    return null;
  }
}
