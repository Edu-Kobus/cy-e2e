const endpoint = `${Cypress.config('baseUrlLeaf')}/basic_records/apis/companyBranch`

Cypress.Commands.add('postCompanyBranch', (fixCompany) => {
    cy.request({
        method: 'POST',
        url: endpoint,
        failOnStatusCode: false,
        body: fixCompany
    });
});

Cypress.Commands.add('getAllCompanyBranch', () => {
    cy.request({
        method: 'GET',
        url: `${endpoint}`,
        failOnStatusCode: false,
    });
});

Cypress.Commands.add('getOneCompanyBranch', (fixCompany, id) => {
    cy.request({
        method: 'GET',
        url: `${endpoint}/${id}`,
        failOnStatusCode: false,
        body: fixCompany
    });
});

Cypress.Commands.add('deleteCompanyBranch', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${endpoint}/${id}`,
        failOnStatusCode: false
    });
});