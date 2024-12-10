const deposit = `${Cypress.config('baseUrlLeaf')}/basic_records/apis/deposit`

Cypress.Commands.add('postDeposit', (fixDeposit) => {
    cy.request({
        method: 'POST',
        url: deposit,
        failOnStatusCode: false,
        body: fixDeposit
    });
});

Cypress.Commands.add('getAllDeposit', () => {
    cy.request({
        method: 'GET',
        url: `${deposit}?size=200`,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('getOneDeposit', (id) => {
    cy.request({
        method: 'GET',
        url: `${deposit}/${id}`,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('putDeposit', (fixDeposit, id) => {
    cy.request({
        method: 'PUT',
        url: `${deposit}/${id}`,
        failOnStatusCode: false,
        body: fixDeposit
    });
});

Cypress.Commands.add('deleteDeposit', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${deposit}/${id}`,
        failOnStatusCode: false
    });
});