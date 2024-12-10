Cypress.Commands.add('clickCountryField',  () => {
    cy.get('#pais .btn-default').click()
});

Cypress.Commands.add('clickStateField',  () => {
    cy.get('#estado .btn-default').click()
});

Cypress.Commands.add('FillPopulation',  (population) => {
    cy.get('#populacao').type(population)
});

Cypress.Commands.add('FillPopulationEstimated',  (estPopulation) => {
    cy.get('#populacao_estimada').type(estPopulation)
});

Cypress.Commands.add('FillPotential',  (estPopulation) => {
    cy.get('#potencial_consumo').type(estPopulation)
});

Cypress.Commands.add('FillPib',  (estPopulation) => {
    cy.get('#pib').type(estPopulation)
});