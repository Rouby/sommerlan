describe("test", () => {
  it("should work", () => {
    cy.seed("User", { id: "specific" }).should("deep.include", {
      id: "specific",
    });
  });
});
