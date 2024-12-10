const accountIdentifications = `${Cypress.config('baseUrlLeaf')}/account/apis/accountIdentifications`

Cypress.Commands.add('postAccountIdentifications', (fixAccount) => {
    cy.request({
        method: 'POST',
        url: accountIdentifications,
        failOnStatusCode: false,
        body: fixAccount
    });
});

Cypress.Commands.add('getAllAccountIdentifications', () => {
    cy.request({
        method: 'GET',
        url: `${accountIdentifications}?size=250`,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('getOneAccountIdentifications', (id) => {
    cy.request({
        method: 'GET',
        url: `${accountIdentifications}/${id}`,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('putAccountIdentifications', (fixAccount, id) => {
    cy.request({
        method: 'PUT',
        url: `${accountIdentifications}/${id}`,
        failOnStatusCode: false,
        body: fixAccount
    });
});

Cypress.Commands.add('deleteAccountIdentifications', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${accountIdentifications}/${id}`,
        failOnStatusCode: false,
    });
});