import { randomUUID } from "crypto";
import { Base, Values } from "./$base";

export class MoneyTransfer extends Base {
  get sheetName() {
    return "MoneyTransfers" as const;
  }
  get kind() {
    return "MoneyTransfer" as const;
  }

  public id = randomUUID();

  public amount = 0;

  public valuationDate = "";

  public note = "";

  constructor(props?: Values<MoneyTransfer>) {
    super();
    if (props) Object.assign(this, props);
  }
}
