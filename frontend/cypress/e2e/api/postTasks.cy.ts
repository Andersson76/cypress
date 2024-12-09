describe("Integrationstest POST", () => {
  it("Should add a new task", () => {
    const newTask = { title: "Integration Test Task", status: "pending" };
    cy.request("POST", "/api/tasks", newTask).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.title).to.eq("Integration Test Task");
    });
  });
});
