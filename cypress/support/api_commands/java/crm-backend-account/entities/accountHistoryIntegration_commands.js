const accountHistoryIntegration = `${Cypress.config('baseUrlLeaf')}/account/apis/accountHistoryIntegration`

Cypress.Commands.add('postAccountHistoryIntegration', (fixAccountHistory) => {
    cy.request({
        method: 'POST',
        url: accountHistoryIntegration,
        failOnStatusCode: false,
        body: fixAccountHistory
    });
});

Cypress.Commands.add('getAllAccountHistoryIntegration', () => {
    cy.request({
        method: 'GET',
        url: `${accountHistoryIntegration}?size=250`,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('getOneAccountHistoryIntegration', (id) => {
    cy.request({
        method: 'GET',
        url: `${accountHistoryIntegration}/${id}`,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('putAccountHistoryIntegration', (fixAccountHistory, id) => {
    cy.request({
        method: 'PUT',
        url: `${accountHistoryIntegration}/${id}`,
        failOnStatusCode: false,
        body: fixAccountHistory
    });
});

Cypress.Commands.add('deleteAccountHistoryIntegration', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${accountHistoryIntegration}/${id}`,
        failOnStatusCode: false,
    });
});