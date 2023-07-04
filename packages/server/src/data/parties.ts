import { randomUUID } from "crypto";
import { Base, Values } from "./$base";

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
}
