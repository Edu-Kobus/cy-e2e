const accountDefinition = `${Cypress.config('baseUrlLeaf')}/account/apis/accountDefinition`

Cypress.Commands.add('postAccountDefinition', (fixAccount) => {
    cy.request({
        method: 'POST',
        url: accountDefinition,
        failOnStatusCode: false,
        body: fixAccount
    });
});

Cypress.Commands.add('getAllAccountDefinition', () => {
    cy.request({
        method: 'GET',
        url: `${accountDefinition}?size=250`,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('getOneAccountDefinition', (id) => {
    cy.request({
        method: 'GET',
        url: `${accountDefinition}/${id}`,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('putAccountDefinition', (fixAccount, id) => {
    cy.request({
        method: 'PUT',
        url: `${accountDefinition}/${id}`,
        failOnStatusCode: false,
        body: fixAccount
    });
});

Cypress.Commands.add('deleteAccountDefinition', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${accountDefinition}/${id}`,
        failOnStatusCode: false,
    });
});