const account = `${Cypress.config('baseUrlLeaf')}/account/apis/account`

Cypress.Commands.add('postAccountEntity', (fixAccount) => {
    cy.request({
        method: 'POST',
        url: account,
        failOnStatusCode: false,
        body: fixAccount
    });
});

Cypress.Commands.add('getAllAccountEntity', () => {
    cy.request({
        method: 'GET',
        url: `${account}?offset=0&size=200`,
        failOnStatusCode: false
    });
});


Cypress.Commands.add('getOneAccountEntity', (id) => {
    cy.request({
        method: 'GET',
        url: `${account}/${id}`,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('putAccountEntity', (fixAccount, id) => {
    cy.request({
        method: 'PUT',
        url: `${account}/${id}`,
        failOnStatusCode: false,
        body: fixAccount
    });
});

Cypress.Commands.add('deleteAccountEntity', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${account}/${id}`,
        failOnStatusCode: false,
    });
});