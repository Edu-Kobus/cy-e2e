const accountOrigins = `${Cypress.config('baseUrlLeaf')}/basic_records/apis/accountOrigins`

Cypress.Commands.add('getAllAccountOrigins', () => {
    cy.request({
        url: `${accountOrigins}?size=250`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOneAccountOrigins', (id) => {
    cy.request({
        url: `${accountOrigins}/${id}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postAccountOrigins', (fixEvent) => {
    cy.request({
        method: 'POST',
        url: accountOrigins,
        body: fixEvent,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('putAccountOrigins', (id, fixEvent) => {
    cy.request({
        method: 'PUT',
        url: `${accountOrigins}/${id}`,
        body: fixEvent,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('deleteAccountOrigins', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${accountOrigins}/${id}`,
        failOnStatusCode: false
    });
});