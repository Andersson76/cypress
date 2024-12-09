describe("Integrationstest GET", () => {
  it("Should fetch all tasks", () => {
    cy.request("GET", "/api/tasks").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("tasks");
      expect(response.body.tasks).to.be.an("array");
    });
  });
});
