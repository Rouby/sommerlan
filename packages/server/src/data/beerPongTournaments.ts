import { randomUUID } from "crypto";
import { Base, Values } from "./$base";

export type BeerPongTournamentTeam = {
  id: string;
  name: string;
  playerIds: string[];
  seed: number;
};

export class BeerPongTournament extends Base {
  get sheetName() {
    return "BeerPongTournaments" as const;
  }
  get kind() {
    return "BeerPongTournament" as const;
  }

  public id = randomUUID();

  public createdAt = new Date().toISOString();

  public name = "Beer Pong Tournament";

  public groupCount = 2;

  public knockoutSize = 4;

  public teams: BeerPongTournamentTeam[] = [];

  constructor(props?: Values<BeerPongTournament>) {
    super();
    if (props) Object.assign(this, props);
  }

  static async getCurrent() {
    return (await this.all()).sort((a, b) =>
      b.createdAt.localeCompare(a.createdAt),
    )[0] ?? null;
  }
}
