const accountStatus = `${Cypress.config('baseUrlLeaf')}/basic_records/apis/accountStatus`

Cypress.Commands.add('getAllAccountStatus', () => {
    cy.request({
        url: accountStatus,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOneAccountStatus', (id) => {
    cy.request({
        url: `${accountStatus}/${id}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postAccountStatus', (fixEvent) => {
    cy.request({
        method: 'POST',
        url: accountStatus,
        body: fixEvent,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('putAccountStatus', (id, fixEvent) => {
    cy.request({
        method: 'PUT',
        url: `${accountStatus}/${id}`,
        body: fixEvent,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('deleteAccountStatus', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${accountStatus}/${id}`,
        failOnStatusCode: false
    });
});