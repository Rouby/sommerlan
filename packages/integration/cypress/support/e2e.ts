/// <reference types="cypress" />

Cypress.Commands.add("seedData", (model, data) => {
  return cy.task("seedData", { model, data });
});

Cypress.Commands.add("findData", (model, query) => {
  return cy.task("findData", { model, query });
});

Cypress.Commands.add("getMailsSent", () => {
  return cy.task("getMailsSent", {});
});

beforeEach(() => {
  cy.task("clearData");
});

declare namespace Cypress {
  interface Chainable {
    seedData(
      model: "User",
      data: import("../../../server/src/data/$base").Values<
        import("../../../server/src/data/users").User
      >
    ): Chainable<any>;
    seedData(
      model: "Party",
      data: import("../../../server/src/data/$base").Values<
        import("../../../server/src/data/parties").Party
      >
    ): Chainable<any>;
    seedData(
      model: "Picture",
      data: import("../../../server/src/data/$base").Values<
        import("../../../server/src/data/pictures").Picture
      >
    ): Chainable<any>;
    seedData(
      model: "Attending",
      data: import("../../../server/src/data/$base").Values<
        import("../../../server/src/data/attendings").Attending
      >
    ): Chainable<any>;
    seedData(
      model: "Game",
      data: import("../../../server/src/data/$base").Values<
        import("../../../server/src/data/games").Game
      >
    ): Chainable<any>;
    seedData(
      model: "Event",
      data: import("../../../server/src/data/$base").Values<
        import("../../../server/src/data/events").Event
      >
    ): Chainable<any>;
    seedData(model: string, data: unknown): Chainable<any>;

    findData(
      model: "User",
      data: import("../../../server/src/data/$base").Values<
        import("../../../server/src/data/users").User
      >
    ): Chainable<any>;
    findData(
      model: "Party",
      data: import("../../../server/src/data/$base").Values<
        import("../../../server/src/data/parties").Party
      >
    ): Chainable<any>;
    findData(
      model: "Picture",
      data: import("../../../server/src/data/$base").Values<
        import("../../../server/src/data/pictures").Picture
      >
    ): Chainable<any>;
    findData(
      model: "Attending",
      data: import("../../../server/src/data/$base").Values<
        import("../../../server/src/data/attendings").Attending
      >
    ): Chainable<any>;
    findData(
      model: "Game",
      data: import("../../../server/src/data/$base").Values<
        import("../../../server/src/data/games").Game
      >
    ): Chainable<any>;
    findData(
      model: "Event",
      data: import("../../../server/src/data/$base").Values<
        import("../../../server/src/data/events").Event
      >
    ): Chainable<any>;
    findData(model: string, data: unknown): Chainable<any>;

    getMailsSent(): Chainable<any>;
  }
}
