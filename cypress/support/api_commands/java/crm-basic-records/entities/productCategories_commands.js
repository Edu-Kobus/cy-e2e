const basic_record = `${Cypress.config('baseUrlLeaf')}/basic_records/apis/productCategories`

Cypress.Commands.add('getAllProductCategories', () => {
    cy.request({
        url: `${basic_record}?size=250`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOneProductCategories', (id) => {
    cy.request({
        url: `${basic_record}/${id}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postProductCategories', (fixEvent) => {
    cy.request({
        method: 'POST',
        url: basic_record,
        body: fixEvent,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('putProductCategories', (id, fixEvent) => {
    cy.request({
        method: 'PUT',
        url: `${basic_record}/${id}`,
        body: fixEvent,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('deleteProductCategories', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${basic_record}/${id}`,
        failOnStatusCode: false
    });
});