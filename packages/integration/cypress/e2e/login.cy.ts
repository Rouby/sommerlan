describe("login", () => {
  it("should be able with password", () => {
    cy.seedData("User", {
      displayName: "Erwin Beispiel",
      name: "Erwin Beispiel",
      email: "erwin@example.com",
      password: "hello",
    });

    cy.visit("/");

    cy.contains("button", "Log in").click();

    cy.contains("button", "Mit Passwort anmelden").click();

    cy.get('input[name="email"]').type("erwin@example.com");

    cy.get('input[name="password"]').type("hello");

    cy.contains("button", "Anmelden").click();

    cy.contains('[data-cy="user button"]', "Erwin Beispiel").should(
      "be.visible"
    );
  });

  it("should be able with one-time-link", () => {
    cy.seedData("User", {
      displayName: "Erwin Beispiel",
      name: "Erwin Beispiel",
      email: "erwin@example.com",
    });

    cy.visit("/");

    cy.contains("button", "Log in").click();

    cy.contains(
      "button",
      "Einen Einmal-Link zum einloggen per Email anfordern"
    ).click();

    cy.get('input[name="email"]').type("erwin@example.com");

    cy.contains("button", "Link zuschicken").click();

    cy.getMailsSent()
      .should("have.length", 1)
      .its("0.html")
      .then((html) => {
        const code = /\?auth=(.+?)"/.exec(html).at(1);

        cy.visit(`/?auth=${code}`);
      });

    cy.contains('[data-cy="user button"]', "Erwin Beispiel").should(
      "be.visible"
    );
  });
});
