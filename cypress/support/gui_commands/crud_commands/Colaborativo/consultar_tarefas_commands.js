Cypress.Commands.add('clickContact', () => {
    cy.get('[class^="ui-select-search"]').click()
});

Cypress.Commands.add('interceptReminder', () => {
    cy.intercept('GET', '**/reminder*').as('getReminder')
});

Cypress.Commands.add('waitReminder', () => {
    cy.wait('@getReminder').its('response.statusCode').should('equal', 200)
});