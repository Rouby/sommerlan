import { randomUUID } from "crypto";
import { Base, Values } from "./$base";

export class Game extends Base {
  get sheetName() {
    return "Games";
  }

  public id = randomUUID();

  public partyId = "";

  public playerIds: string[] = [];

  public name = "";

  public imageUrl = "";

  constructor(props?: Values<Game>) {
    super();
    if (props) Object.assign(this, props);
  }

  static async filterByPartyId(partyId: string) {
    return Game.filter((game) => game.partyId === partyId);
  }
}
