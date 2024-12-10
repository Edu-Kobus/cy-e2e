const basic_record = `${Cypress.config('baseUrlLeaf')}/basic_records/apis/salesReasons`

Cypress.Commands.add('getAllSalesReasons', () => {
    cy.request({
        url: `${basic_record}?size=250`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOneSalesReasons', (id) => {
    cy.request({
        url: `${basic_record}/${id}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postSalesReasons', (fixEvent) => {
    cy.request({
        method: 'POST',
        url: basic_record,
        body: fixEvent,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('putSalesReasons', (id, fixEvent) => {
    cy.request({
        method: 'PUT',
        url: `${basic_record}/${id}`,
        body: fixEvent,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('deleteSalesReasons', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${basic_record}/${id}`,
        failOnStatusCode: false
    });
});