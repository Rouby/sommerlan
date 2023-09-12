describe("event", () => {
  it("should be able to be planned", () => {
    cy.seedData("User", {
      displayName: "Erwin Beispiel",
      name: "Erwin Beispiel",
      email: "erwin@example.com",
      password: "hello",
    }).login();
    cy.seedData("Party", {
      startDate: new Date(Date.now() + 7 * 86400000)
        .toISOString()
        .substring(0, 10),
      endDate: new Date(Date.now() + 7 * 86400000)
        .toISOString()
        .substring(0, 10),
    });

    cy.visit("/events");

    cy.contains("button", "Ein Event eintragen").click();

    cy.get('input[name="eventName"]').type("Ein Event");

    cy.contains(
      "[data-cy=dropzone]",
      "Alternativ kannst du ein Bild hochladen"
    ).selectFile("cypress/fixtures/avatar.png", { action: "drag-drop" });

    cy.contains("button", "Event erstellen").click();

    cy.contains("[data-cy=event]", "Ein Event");
    cy.get("[data-cy=event] img")
      .should("have.attr", "src")
      .and("match", /^http:\/\/localhost.*\.png$/);
  });
});
