const endpoint = `${Cypress.config('baseUrlLeaf')}/basic_records/apis/company`

Cypress.Commands.add('getAllCompany', (fixCompany) => {
    cy.request({
        method: 'GET',
        url: endpoint,
        failOnStatusCode: false,
        body: fixCompany
    });
});

Cypress.Commands.add('getOneCompany', (id, fixCompany) => {
    cy.request({
        method: 'GET',
        url: `${endpoint}/${id}`,
        failOnStatusCode: false,
        body: fixCompany
    });
});