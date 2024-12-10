const basic_record = `${Cypress.config('baseUrlLeaf')}/basic_records/apis/paymentType`

Cypress.Commands.add('getAllPaymentType', () => {
    cy.request({
        url: basic_record,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOnePaymentType', (id) => {
    cy.request({
        url: `${basic_record}/${id}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postPaymentType', (fixEvent) => {
    cy.request({
        method: 'POST',
        url: basic_record,
        body: fixEvent,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('putPaymentType', (id, fixEvent) => {
    cy.request({
        method: 'PUT',
        url: `${basic_record}/${id}`,
        body: fixEvent,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('deletePaymentType', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${basic_record}/${id}`,
        failOnStatusCode: false
    });
});