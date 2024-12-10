const endpoint = 'backend/public/v2/company-branch'

Cypress.Commands.add('postCompanyBranchV2', (fixCompany) => {
    cy.request({
        method: 'POST',
        url: endpoint,
        failOnStatusCode: false,
        body: fixCompany
    });
});

Cypress.Commands.add('getCompanyBranchV2', () => {
    cy.request({
        method: 'GET',
        url: endpoint,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('getOneCompanyBranchV2', (id) => {
    cy.request({
        method: 'GET',
        url: `${endpoint}/${id}`,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('deleteCompanyBranchV2', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${endpoint}/${id}`,
        failOnStatusCode: false
    });
});