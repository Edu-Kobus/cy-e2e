const accountCharacteristics = `${Cypress.config('baseUrlLeaf')}/account/apis/accountCharacteristics`

Cypress.Commands.add('postAccountCharacteristics', (fixAccountCharacteristics) => {
    cy.request({
        method: 'POST',
        url: accountCharacteristics,
        failOnStatusCode: false,
        body: fixAccountCharacteristics
    });
});

Cypress.Commands.add('getAllAccountCharacteristics', () => {
    cy.request({
        method: 'GET',
        url: `${accountCharacteristics}?size=250`,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('getOneAccountCharacteristics', (id) => {
    cy.request({
        method: 'GET',
        url: `${accountCharacteristics}/${id}`,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('putAccountCharacteristics', (fixAccountCharacteristics, id) => {
    cy.request({
        method: 'PUT',
        url: `${accountCharacteristics}/${id}`,
        failOnStatusCode: false,
        body: fixAccountCharacteristics
    });
});

Cypress.Commands.add('deleteAccountCharacteristics', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${accountCharacteristics}/${id}`,
        failOnStatusCode: false,
    });
});