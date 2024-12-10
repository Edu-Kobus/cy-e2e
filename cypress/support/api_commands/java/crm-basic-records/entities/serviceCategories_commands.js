const basic_record = `${Cypress.config('baseUrlLeaf')}/basic_records/apis/serviceCategories`

Cypress.Commands.add('getAllServiceCategories', () => {
    cy.request({
        url: `${basic_record}?size=200`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOneServiceCategories', (id) => {
    cy.request({
        url: `${basic_record}/${id}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postServiceCategories', (fixEvent) => {
    cy.request({
        method: 'POST',
        url: basic_record,
        body: fixEvent,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('putServiceCategories', (id, fixEvent) => {
    cy.request({
        method: 'PUT',
        url: `${basic_record}/${id}`,
        body: fixEvent,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('deleteServiceCategories', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${basic_record}/${id}`,
        failOnStatusCode: false
    });
});