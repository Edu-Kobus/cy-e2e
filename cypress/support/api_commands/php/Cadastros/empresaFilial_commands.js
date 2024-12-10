const companyBranch = 'backend/public/v2/company-branch'

Cypress.Commands.add('getAllCompanyBranchV2', () => {
    cy.request({
        url: `${companyBranch}?pageSize=250`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOneCompanyBranchV2', (id) => {
    cy.request({
        url: `${companyBranch}/${id}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postCompanyBranchV2', (fixture) => {
    cy.request({
        method: 'POST',
        url: companyBranch,
        failOnStatusCode: false,
        body: fixture
    })
});

Cypress.Commands.add('putCompanyBranchV2',  (id, fixture) => {
    cy.request({
        method: 'PUT',
        url: `${companyBranch}/${id}`,
        failOnStatusCode: false,
        body: fixture
    })
});

Cypress.Commands.add('deleteCompanyBranchV2', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${companyBranch}/${id}`,
        failOnStatusCode: false
    })
});