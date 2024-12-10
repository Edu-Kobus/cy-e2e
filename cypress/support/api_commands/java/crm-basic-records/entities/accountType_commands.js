const accountType = `${Cypress.config('baseUrlLeaf')}/basic_records/apis/accountType`

Cypress.Commands.add('getAllAccountType', () => {
    cy.request({
        url: `${accountType}?size=250`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOneAccountType', (id) => {
    cy.request({
        url: `${accountType}/${id}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postAccountType', (fixEvent) => {
    cy.request({
        method: 'POST',
        url: accountType,
        body: fixEvent,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('putAccountType', (id, fixEvent) => {
    cy.request({
        method: 'PUT',
        url: `${accountType}/${id}`,
        body: fixEvent,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('deleteAccountType', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${accountType}/${id}`,
        failOnStatusCode: false
    });
});