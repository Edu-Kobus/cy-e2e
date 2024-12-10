Cypress.Commands.add("queryDb", (query) => {
    cy.task("queryDb", query);
  });