const paymentTerms = `${Cypress.config('baseUrlLeaf')}/basic_records/apis/paymentTerms`

Cypress.Commands.add('getAllPaymentTerms', () => {
    cy.request({
        url: `${paymentTerms}?size=250`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOnePaymentTerms', (id) => {
    cy.request({
        url: `${paymentTerms}/${id}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postPaymentTerms', (fixEvent) => {
    cy.request({
        method: 'POST',
        url: paymentTerms,
        body: fixEvent,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('putPaymentTerms', (id, fixEvent) => {
    cy.request({
        method: 'PUT',
        url: `${paymentTerms}/${id}`,
        body: fixEvent,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('deletePaymentTerms', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${paymentTerms}/${id}`,
        failOnStatusCode: false
    });
});