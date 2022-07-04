import faker from "@faker-js/faker";

describe("smoke tests", () => {
  afterEach(() => {
    cy.cleanupUser();
  });

  it("should allow you to register and login", () => {
    const loginForm = {
      email: `${faker.internet.userName()}@example.com`,
      name: faker.name.findName(),
      password: faker.internet.password(),
    };
    cy.then(() => ({ email: loginForm.email })).as("user");

    cy.visit("/");
    cy.findByRole("link", { name: /anmelden/i }).click();

    cy.findByRole("textbox", { name: /email/i }).type(loginForm.email);
    cy.findByLabelText(/passwort/i).type(loginForm.password);
    cy.findByRole("textbox", { name: /name/i }).type(loginForm.name);
    cy.findByRole("button", { name: /account anlegen/i }).click();

    cy.findByRole("link", { name: new RegExp(loginForm.name, "i") }).should(
      "exist"
    );
  });

  it("should allow you to participate at an event and change attendance", () => {
    cy.login();
    cy.visit("/participants");

    cy.findByRole("button", { name: /teilnehmen/i }).click();
    cy.contains("Du kannst deine Anwesenheit im Kalender ändern").should(
      "exist"
    );

    cy.findByRole("button", { name: /\b8\b/i }).click();
    cy.findByRole("button", { name: /\b10\b/i }).click();

    cy.contains("2 Nächte").should("exist");
  });
});
