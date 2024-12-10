const personType = `${Cypress.config('baseUrlLeaf')}/basic_records/apis/personType`

Cypress.Commands.add('getAllPersonType', () => {
    cy.request({
        url: personType,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOnePersonType', (id) => {
    cy.request({
        url: `${personType}/${id}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postPersonType', (fixPersonType) => {
    cy.request({
        method: 'POST',
        url: personType,
        body: fixPersonType,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('putPersonType', (id, fixPersonType) => {
    cy.request({
        method: 'PUT',
        url: `${personType}/${id}`,
        body: fixPersonType,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('deletePersonType', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${personType}/${id}`,
        failOnStatusCode: false
    });
});