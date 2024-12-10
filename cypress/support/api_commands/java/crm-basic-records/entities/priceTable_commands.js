const basic_record = `${Cypress.config('baseUrlLeaf')}/basic_records/apis/priceTable`

Cypress.Commands.add('getAllPriceTable', () => {
    cy.request({
        url: `${basic_record}?size=200`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOnePriceTable', (id) => {
    cy.request({
        url: `${basic_record}/${id}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postPriceTable', (fixEvent) => {
    cy.request({
        method: 'POST',
        url: basic_record,
        body: fixEvent,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('putPriceTable', (id, fixEvent) => {
    cy.request({
        method: 'PUT',
        url: `${basic_record}/${id}`,
        body: fixEvent,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('deletePriceTable', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${basic_record}/${id}`,
        failOnStatusCode: false
    });
});