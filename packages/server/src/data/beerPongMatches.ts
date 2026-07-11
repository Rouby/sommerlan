import { randomUUID } from "crypto";
import { Base, Values } from "./$base";

export const BeerPongMatchPhase = {
  Exhibition: "EXHIBITION",
  Group: "GROUP",
  Knockout: "KNOCKOUT",
} as const;

export type BeerPongMatchPhase =
  (typeof BeerPongMatchPhase)[keyof typeof BeerPongMatchPhase];

export type BeerPongPlayerStatLine = {
  hits: number;
  edges: number;
  blocks: number;
  throws: number;
  bounceHits: number;
};

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

  public tournamentId: string | null = null;

  public phase: BeerPongMatchPhase = BeerPongMatchPhase.Exhibition;

  public groupName: string | null = null;

  public round = 1;

  public matchNumber = 1;

  public teamIds: string[] = [];

  public slotLabels: string[] = [];

  public remainingBeers: { [teamId: string]: number } = {};

  public winnerTeamId: string | null = null;

  public nextMatchId: string | null = null;

  public nextMatchSlot: number | null = null;

  public thirdPlaceMatchId: string | null = null;

  public thirdPlaceMatchSlot: number | null = null;

  public isThirdPlaceMatch = false;

  public playerStats: { [userId: string]: BeerPongPlayerStatLine } = {};

  constructor(props?: Values<BeerPongMatch>) {
    super();
    if (props) Object.assign(this, props);
  }
}
