Cypress.Commands.add('typeState', (state) => {
    cy.get('#estado').type(`${ state }`)
});

Cypress.Commands.add('selectCidade', () => {
    cy.get('#cidade .btn-default').click()
});

Cypress.Commands.add('fillDate', () => {
    cy.get('#data').dblclick()
});