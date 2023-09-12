describe("profile", () => {
  it("should be able to upload a picture", () => {
    cy.seedData("User", {
      displayName: "Erwin Beispiel",
      name: "Erwin Beispiel",
      email: "erwin@example.com",
      password: "hello",
    }).login();

    cy.visit("/profile");

    cy.contains(
      "[data-cy=dropzone]",
      "Alternativ kannst du ein Bild hochladen"
    ).selectFile("cypress/fixtures/avatar.png", { action: "drag-drop" });

    cy.contains("button", "Speichern").click();

    cy.contains('[data-cy="user button"]', "Erwin Beispiel")
      .find("img")
      .should("have.attr", "src")
      .and("match", /^http:\/\/localhost.*\.png$/);
  });
});
