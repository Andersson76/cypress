describe("Full E2E Test", () => {
  it("Should add a task and verify it in the database", () => {
    cy.visit("/");

    const taskTitle = "DatabaseConnectedTask";
    cy.get('input[placeholder="Lägg till en ny uppgift"]').type(
      "DatabaseConnectedTask"
    );
    cy.get("button").contains("Lägg till").click();

    cy.contains(taskTitle).should("be.visible");

    cy.request("GET", "/api/tasks").then((response) => {
      expect(response.status).to.eq(200);
      cy.log(JSON.stringify(response.body));

      const taskExists = response.body.some(
        (task: { title: string }) => task.title === taskTitle
      );
      expect(taskExists).to.be.true;
    });
  });
});
