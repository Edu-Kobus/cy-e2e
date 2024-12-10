const endpoint = `${Cypress.config('baseUrlLeaf')}/basic_records/apis/branch`

Cypress.Commands.add('getAllBranch', (fixBranch) => {
    cy.request({
        method: 'GET',
        url: endpoint,
        failOnStatusCode: false,
        body: fixBranch
    });
});

Cypress.Commands.add('getOneBranch', (id, fixBranch) => {
    cy.request({
        method: 'GET',
        url: `${endpoint}/${id}`,
        failOnStatusCode: false,
        body: fixBranch
    });
});