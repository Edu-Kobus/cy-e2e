const healthCheck = `${Cypress.config('baseUrlLeaf')}/basic_records/queries/healthcheck`

Cypress.Commands.add('postHealthCheck', (fixHealthCheck) => {
    cy.request({
        method: 'POST',
        url: healthCheck,
        body: fixHealthCheck,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('getAllHealthCheck', () => {
    cy.request({
        url: healthCheck,
        failOnStatusCode: false
    });
});