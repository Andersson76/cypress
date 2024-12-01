describe("Create task E2E Test", () => {
  it("Should create a new task successfully", () => {
    cy.visit("http://localhost:3000");

    // Fyll input fältet med en uppgift
    cy.get('input[type="text"]')
      .type("Ny cypress uppgift")
      .should("have.value", "Ny cypress uppgift");

    // Klicka på "lägg till knappen"
    cy.get("button").contains("Lägg till").click();

    // Kontrollera om den nya uppgiften syns i listan
    cy.contains("Ny cypress uppgift").should("be.visible");

    //Verifiera att en POST request skickades för att skapa uppgiften
    cy.intercept("POST", "http://localhost:3000/api/tasks").as("createTask");
    //cy.wait("@createTask").its("response.statusCode").should("eq", 201);
  });
});
