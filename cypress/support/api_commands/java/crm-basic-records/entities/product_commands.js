const basic_record = `${Cypress.config('baseUrlLeaf')}/basic_records/apis/product`

Cypress.Commands.add('getAllProduct', () => {
    cy.request({
        url: `${basic_record}?size=200`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOneProduct', (id) => {
    cy.request({
        url: `${basic_record}/${id}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postProduct', (fixEvent) => {
    cy.request({
        method: 'POST',
        url: basic_record,
        body: fixEvent,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('putProduct', (id, fixEvent) => {
    cy.request({
        method: 'PUT',
        url: `${basic_record}/${id}`,
        body: fixEvent,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('deleteProduct', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${basic_record}/${id}`,
        failOnStatusCode: false
    });
});