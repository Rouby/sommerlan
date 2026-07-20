import type { PartyResolvers, SeatPlanElementType } from "./../../types.generated";

/**
 * Visual layout template string using fitting emojis.
 *  - '🕳️' represents empty cells.
 *  - '💺' = Bookable seat (type TABLE, auto-numbered as A, B, C, D, or I based on coordinates).
 *  - '🚨' = Emergency Exit (type EXIT)
 *  - '🚪' = Door (type ENTRANCE if bottom row, type DOOR otherwise)
 *  - '❄️' = Fridge (type FRIDGE)
 *  - '🛋️' = Couch/sofa (type COUCH)
 *  - '🏛️' = Structural column/pillar (type COLUMN)
 */
const LAYOUT_TEMPLATE = `
  🕳️🕳️🚪🚪🕳️🕳️
  🛋️🛋️🕳️🕳️❄️🕳️
  💺🕳️🕳️🕳️🕳️🕳️
  🕳️🕳️🕳️🕳️🕳️🕳️
  💺🕳️🕳️🕳️🕳️💺
  💺🕳️💺💺🕳️💺
  💺🕳️💺💺🕳️💺
  🏛️🕳️🏛️🏛️🕳️🏛️
  💺🕳️💺💺🕳️💺
  💺🕳️💺💺🕳️💺
  💺🕳️💺💺🕳️💺
`;

function parseVisualLayout(template: string) {
  // Strip variation selectors to ensure emoji comparisons work consistently
  const cleanTemplate = template.replace(/\ufe0f/g, "");

  const lines = cleanTemplate
    .trim()
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  // Parse each line character by character (supports surrogate pair emojis), filtering out whitespace
  const grid = lines.map((line) => Array.from(line).filter((char) => !/\s/.test(char)));
  const height = grid.length;
  const width = Math.max(...grid.map((row) => row.length));

  const elements: any[] = [];
  const seatCounters: Record<string, number> = {};
  const visited = new Set<string>();
  const getGroupKey = (r: number, c: number) => `${r},${c}`;

  // Find all unique columns containing seat elements to dynamically assign letter prefixes A, B, C...
  const seatCols = new Set<number>();
  for (let r = 0; r < height; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c] === "💺") {
        seatCols.add(c);
      }
    }
  }
  const sortedSeatCols = Array.from(seatCols).sort((a, b) => a - b);

  // Flood fill / BFS to find connected cells with the same token
  function getConnectedCells(startR: number, startC: number, token: string) {
    const group: Array<{ r: number; c: number }> = [];
    const queue = [{ r: startR, c: startC }];
    visited.add(getGroupKey(startR, startC));

    while (queue.length > 0) {
      const cell = queue.shift()!;
      group.push(cell);

      const neighbors = [
        { r: cell.r - 1, c: cell.c },
        { r: cell.r + 1, c: cell.c },
        { r: cell.r, c: cell.c - 1 },
        { r: cell.r, c: cell.c + 1 },
      ];

      for (const n of neighbors) {
        if (
          n.r >= 0 &&
          n.r < height &&
          n.c >= 0 &&
          n.c < grid[n.r].length &&
          grid[n.r][n.c] === token &&
          !visited.has(getGroupKey(n.r, n.c))
        ) {
          visited.add(getGroupKey(n.r, n.c));
          queue.push(n);
        }
      }
    }

    return group;
  }

  for (let r = 0; r < height; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      const token = grid[r][c];
      if (token === "🕳") continue; // Stripped empty cell emoji
      if (visited.has(getGroupKey(r, c))) continue;

      // Handle seats
      if (token === "💺") {
        // Determine column letter dynamically based on its column order
        const colIdx = sortedSeatCols.indexOf(c);
        const seatPrefix = String.fromCharCode(65 + colIdx); // A, B, C, D...

        if (seatCounters[seatPrefix] === undefined) {
          seatCounters[seatPrefix] = 0;
        }

        const num = ++seatCounters[seatPrefix];
        const id = `${seatPrefix}${num}`;
        elements.push({
          id,
          type: "TABLE" as SeatPlanElementType,
          x: c,
          y: r,
          width: 1,
          height: 1,
          label: id,
        });
        visited.add(getGroupKey(r, c));
      } else {
        // Group connected cells for infrastructure elements (columns are kept separate)
        let cells;
        if (token === "🏛") {
          cells = [{ r, c }];
          visited.add(getGroupKey(r, c));
        } else {
          cells = getConnectedCells(r, c, token);
        }
        const rows = cells.map((cell) => cell.r);
        const cols = cells.map((cell) => cell.c);
        const minX = Math.min(...cols);
        const maxX = Math.max(...cols);
        const minY = Math.min(...rows);
        const maxY = Math.max(...rows);

        let x = minX;
        let y = minY;
        let w = maxX - minX + 1;
        let h = maxY - minY + 1;

        let type: SeatPlanElementType = "TABLE";
        let label: string | null = null;

        if (token === "🏛") { // Stripped column emoji
          type = "COLUMN";
          label = "Säule";
          x = x + 0.25;
          y = y + 0.25;
          w = 0.5;
          h = 0.5;
        } else if (token === "❄") { // Stripped fridge emoji
          type = "FRIDGE";
          label = "Kühlschrank";
        } else if (token === "🚪") {
          // If placed on the bottom row, it's the main entrance. Otherwise a door.
          if (y === height - 1) {
            type = "ENTRANCE";
            label = "Eingang";
            y = y + 0.5;
            h = 0.5;
          } else {
            type = "DOOR";
            label = "Tür";
          }
        } else if (token === "🚨") {
          type = "EXIT";
          label = "Notausgang";
          x = x + 0.1;
          y = y + 0.1;
          w = 0.8;
          h = 0.8;
        } else if (token === "🛋") { // Stripped couch emoji
          type = "COUCH";
          label = "Sofa";
        }

        elements.push({
          id: `${type.toLowerCase()}_${elements.length}`,
          type,
          x,
          y,
          width: w,
          height: h,
          label,
        });
      }
    }
  }

  return {
    width,
    height,
    elements,
  };
}

const SEAT_PLAN = parseVisualLayout(LAYOUT_TEMPLATE);


export const Party: Pick<PartyResolvers, 'attending' | 'attendings' | 'costPerDay' | 'endDate' | 'feedingCosts' | 'id' | 'latitude' | 'location' | 'locationWidgetSrc' | 'longitude' | 'paidDues' | 'payday' | 'pictures' | 'registrationDeadline' | 'rentalCosts' | 'roomsAvailable' | 'seatPlan' | 'seatsAvailable' | 'startDate' | 'tentative' | '__isTypeOf'> = {
  attendings: async (parent, _arg, ctx) => {
    return ctx.data.Attending.filterByPartyId(parent.id);
  },
  locationWidgetSrc: (parent) => {
    return parent.iframeSrc;
  },
  pictures: (parent, _, ctx) => {
    return ctx.data.Picture.filterByPartyId(parent.id);
  },
  registrationDeadline: (parent) => {
    return parent.registrationDeadline ? parent.registrationDeadline : null;
  },
  payday: (parent) => {
    return parent.payday ? parent.payday : null;
  },
  paidDues: async (parent, _, ctx) => {
    const attendings = await ctx.data.Attending.filterByPartyId(parent.id);
    return attendings.reduce((acc, attending) => acc + attending.paidDues, 0);
  },
  attending: (parent, { userId }, ctx) => {
    return ctx.data.Attending.findByPartyIdAndUserId(
      parent.id,
      userId ?? ctx.jwt.user.id,
    );
  },
  costPerDay: async (parent, _arg, ctx) => {
    const attendings = await ctx.data.Attending.filterByPartyId(parent.id);
    const daysWithAttending = attendings.reduce(
      (acc, attending) => acc + Math.max(attending.dates.length - 1, 0),
      0,
    );
    const donations = await ctx.data.Donation.filterByPartyId(parent.id);
    const donationsForRent = donations
      .filter((donation) => donation.dedication === "rent")
      .reduce((acc, donation) => acc + donation.amount, 0);

    if (daysWithAttending === 0) {
      return 0;
    }

    return (
      (parent.rentalCosts + parent.feedingCosts - donationsForRent) /
      daysWithAttending
    );
  },
  seatPlan: () => SEAT_PLAN,
  seatsAvailable: () => {
    return SEAT_PLAN.elements.filter((el) => el.type === "TABLE").length;
  },
};
