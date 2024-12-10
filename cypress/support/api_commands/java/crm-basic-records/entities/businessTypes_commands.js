const businessTypes = `${Cypress.config('baseUrlLeaf')}/basic_records/apis/businessTypes`

Cypress.Commands.add('getAllBusinessTypes', () => {
    cy.request({
        url: `${businessTypes}?size=250`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOneBusinessTypes', (id) => {
    cy.request({
        url: `${businessTypes}/${id}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postBusinessTypes', (fixBusinessTypes) => {
    cy.request({
        method: 'POST',
        url: businessTypes,
        body: fixBusinessTypes,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('putBusinessTypes', (id, fixBusinessTypes) => {
    cy.request({
        method: 'PUT',
        url: `${businessTypes}/${id}`,
        body: fixBusinessTypes,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('deleteBusinessTypes', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${businessTypes}/${id}`,
        failOnStatusCode: false
    });
});