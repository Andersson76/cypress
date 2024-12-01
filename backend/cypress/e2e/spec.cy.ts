describe("Create task E2E Test", () => {
  it("Should create a new task successfully", () => {
    cy.visit("/");

    cy.get('input[type="text"]')
      .type("Ny cypress uppgift")
      .should("have.value", "Ny cypress uppgift");

    cy.get("button").contains("Lägg till").click();

    cy.contains("Ny cypress uppgift").should("be.visible");

    cy.intercept("POST", "http://localhost:3000/api/tasks").as("createTask");
  });
});
