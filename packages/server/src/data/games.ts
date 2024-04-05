import { randomUUID } from "crypto";
import { Base, Values } from "./$base";

export class Game extends Base {
  get sheetName() {
    return "Games" as const;
  }
  get kind() {
    return "Game" as const;
  }

  public id = randomUUID();

  public partyPeople: { [partyId: string]: string[] | undefined } = {};

  public name = "";

  public imageUrl = "";

  constructor(props?: Values<Game>) {
    super();
    if (props) Object.assign(this, props);
  }

  static async filterByPartyId(partyId: string) {
    return this.filter((game) => partyId in game.partyPeople);
  }
}
