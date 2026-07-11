import { randomUUID } from "crypto";
import { Base, Values } from "./$base";

export class BeerPongMatch extends Base {
  get sheetName() {
    return "BeerPongMatches" as const;
  }
  get kind() {
    return "BeerPongMatch" as const;
  }

  public id = randomUUID();

  public startedAt = new Date().toISOString();

  public endedAt: string | null = null;

  public playerStats: {
    [userId: string]: {
      hits: number;
      edges: number;
      blocks: number;
    };
  } = {};

  constructor(props?: Values<BeerPongMatch>) {
    super();
    if (props) Object.assign(this, props);
  }
}
