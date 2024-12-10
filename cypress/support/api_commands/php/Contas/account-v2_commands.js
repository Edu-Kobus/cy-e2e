let account = '/backend/public/v2/account'

Cypress.Commands.add('postAccountv2', (fixAccount) => {
    cy.request({
        method: 'POST',
        url: account,
        body: fixAccount,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('getAccountv2', () => {
    cy.request({
        method: 'GET',
        url: `${account}?pageSize=250`,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('getOneAccountv2', (id) => {
    cy.request({
        method: 'GET',
        url: `${account}/${id}`,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('putAccountv2', (id, fixAccount) => {
    cy.request({
        method: 'PUT',
        url: `${account}/${id}`,
        body: fixAccount,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('deleteAccountv2', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${account}/${id}`,
        failOnStatusCode: false
    });
});