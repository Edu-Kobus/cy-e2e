const addressTypes = `${Cypress.config('baseUrlLeaf')}/basic_records/apis/addressTypes`

Cypress.Commands.add('postAddressTypes', (fixAddressTypes) => {
    cy.request({
        method: 'POST',
        url: addressTypes,
        failOnStatusCode: false,
        body: fixAddressTypes
    });
});

Cypress.Commands.add('getAllAddressTypes', (fixAddressTypes) => {
    cy.request({
        method: 'GET',
        url: `${addressTypes}?size=250`,
        failOnStatusCode: false,
        body: fixAddressTypes
    });
});

Cypress.Commands.add('getOneAddressTypes', (fixAddressTypes, id) => {
    cy.request({
        method: 'GET',
        url: `${addressTypes}/${id}`,
        failOnStatusCode: false,
        body: fixAddressTypes
    });
});

Cypress.Commands.add('putAddressTypes', (fixAddressTypes, id) => {
    cy.request({
        method: 'PUT',
        url: `${addressTypes}/${id}`,
        failOnStatusCode: false,
        body: fixAddressTypes
    });
});

Cypress.Commands.add('deleteAddressTypes', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${addressTypes}/${id}`,
        failOnStatusCode: false
    });
});