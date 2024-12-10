const accountAddress = `${Cypress.config('baseUrlLeaf')}/account/apis/accountAddress`

Cypress.Commands.add('postAccountAddress', (fixAccountAddress) => {
    cy.request({
        method: 'POST',
        url: accountAddress,
        failOnStatusCode: false,
        body: fixAccountAddress
    });
});

Cypress.Commands.add('getAllAccountAddress', () => {
    cy.request({
        method: 'GET',
        url: `${accountAddress}?size=250`,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('getOneAccountAddress', (id) => {
    cy.request({
        method: 'GET',
        url: `${accountAddress}/${id}`,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('putAccountAddress', (fixAccountAddress, id) => {
    cy.request({
        method: 'PUT',
        url: `${accountAddress}/${id}`,
        failOnStatusCode: false,
        body: fixAccountAddress
    });
});

Cypress.Commands.add('deleteAccountAddress', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${accountAddress}/${id}`,
        failOnStatusCode: false,
    });
});