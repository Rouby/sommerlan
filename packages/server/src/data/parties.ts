import { randomUUID } from "crypto";
import { Base, Values, allRows, findRow } from "./utils";

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
    const rows = await allRows("Parties");
    console.log(rows);
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
