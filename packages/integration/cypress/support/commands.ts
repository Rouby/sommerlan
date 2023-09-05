/// <reference types="cypress" />

Cypress.Commands.add("seed", (model, data) => {
  return cy.task("seed", { model, data });
});

declare namespace Cypress {
  interface Chainable {
    seed(
      model: "User",
      data: import("../../../server/src/data/$base").Values<
        import("../../../server/src/data/users").User
      >
    ): Chainable<any>;
    seed(
      model: "Party",
      data: import("../../../server/src/data/$base").Values<
        import("../../../server/src/data/parties").Party
      >
    ): Chainable<any>;
    seed(
      model: "Picture",
      data: import("../../../server/src/data/$base").Values<
        import("../../../server/src/data/pictures").Picture
      >
    ): Chainable<any>;
    seed(
      model: "Attending",
      data: import("../../../server/src/data/$base").Values<
        import("../../../server/src/data/attendings").Attending
      >
    ): Chainable<any>;
    seed(
      model: "Game",
      data: import("../../../server/src/data/$base").Values<
        import("../../../server/src/data/games").Game
      >
    ): Chainable<any>;
    seed(
      model: "Event",
      data: import("../../../server/src/data/$base").Values<
        import("../../../server/src/data/events").Event
      >
    ): Chainable<any>;
    seed(model: string, data: unknown): Chainable<any>;
  }
}
