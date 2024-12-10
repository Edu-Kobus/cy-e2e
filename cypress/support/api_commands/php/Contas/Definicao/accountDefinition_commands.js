const accountDefinition = '/backend/public/account-definitions'

Cypress.Commands.add('getAllDefinition', () => {
    cy.request({
        method: 'GET',
        url: accountDefinition,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOneDefinition', (id) => {
    cy.request({
        method: 'GET',
        url: `${accountDefinition}/${id}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postDefinition', (fixDefinition) => {
    cy.request({
        method: 'POST',
        url: accountDefinition,
        failOnStatusCode: false,
        body: fixDefinition
    })
});

Cypress.Commands.add('putDefinition', (id, fixDefinition) => {
    cy.request({
        method: 'PUT',
        url: `${accountDefinition}/${id}`,
        failOnStatusCode: false,
        body: fixDefinition
    })
});

Cypress.Commands.add('deleteDefinition', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${accountDefinition}/${id}`,
        failOnStatusCode: false
    })
});