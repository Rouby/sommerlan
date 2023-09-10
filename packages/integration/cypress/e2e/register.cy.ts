describe("register", () => {
  it("should create a new user", () => {
    cy.visit("/");

    cy.contains("button", "Sign up").click();

    cy.get('input[name="username"]').type("Erwin Beispiel");

    cy.get('input[name="email"]').type("erwin@example.com");

    cy.contains("button", "Anmelden").click();

    cy.contains('[data-cy="user button"]', "Erwin Beispiel").should(
      "be.visible"
    );

    cy.findData("User", { email: "erwin@example.com" }).should("deep.include", {
      displayName: "Erwin Beispiel",
    });
  });

  it("should create a new user with password", () => {
    cy.visit("/");

    cy.contains("button", "Sign up").click();

    cy.get('input[name="username"]').type("Erwin Beispiel");

    cy.get('input[name="email"]').type("erwin@example.com");

    cy.get('input[name="new-password"]').type("hello");

    cy.contains("button", "Anmelden").click();

    cy.contains('[data-cy="user button"]', "Erwin Beispiel").should(
      "be.visible"
    );

    cy.findData("User", { email: "erwin@example.com" }).should("deep.include", {
      password: "hello",
    });
  });
});
