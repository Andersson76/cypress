/// <reference types="cypress" />
import React from "react";
import { mount } from "cypress/react"; // För att mounta komponenten
import TaskItem from "../../src/components/TaskItem"; // Importera din komponent
import { Task } from "../../interfaces/task"; // Importera interfacet

describe("TaskItem Component", () => {
  const mockTask: Task = {
    id: 1,
    title: "Test Task",
    status: "pending",
  };

  let mockOnToggleStatus: Cypress.Agent<sinon.SinonSpy>;
  let mockOnDelete: Cypress.Agent<sinon.SinonSpy>;

  beforeEach(() => {
    // Initiera spionerna i beforeEach
    mockOnToggleStatus = cy.spy().as("onToggleStatus");
    mockOnDelete = cy.spy().as("onDelete");

    // Mounta komponenten
    mount(
      <TaskItem
        task={mockTask}
        onToggleStatus={mockOnToggleStatus}
        onDelete={mockOnDelete}
      />
    );
  });

  it("renders task details correctly", () => {
    cy.contains("Test Task").should("be.visible"); // Kontrollera uppgiftstitel
    cy.contains("Status: pending").should("be.visible"); // Kontrollera status
    cy.get("button").contains("Mark as Done").should("be.visible"); // Kontrollera knappen
  });

  it("calls onToggleStatus when Mark as Done button is clicked", () => {
    cy.get("button").contains("Mark as Done").click();
    cy.get("@onToggleStatus").should(
      "have.been.calledWith",
      mockTask.id,
      "pending"
    );
  });

  it("calls onDelete when Delete button is clicked", () => {
    cy.get("button").contains("Radera").click();
    cy.get("@onDelete").should("have.been.calledWith", mockTask.id);
  });
});
