const gruposDeEmpresa = 'backend/public/v2/company-group'

Cypress.Commands.add('getAllCompanyGroupV2', () => {
    cy.request({
        url: `${gruposDeEmpresa}?pageSize=250`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOneCompanyGroupV2', (id) => {
    cy.request({
        url: `${gruposDeEmpresa}/${id}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postCompanyGroupV2', (fixture) => {
    cy.request({
        method: 'POST',
        url: gruposDeEmpresa,
        failOnStatusCode: false,
        body: fixture
    })
});

Cypress.Commands.add('putCompanyGroupV2',  (id, fixture) => {
    cy.request({
        method: 'PUT',
        url: `${gruposDeEmpresa}/${id}`,
        failOnStatusCode: false,
        body: fixture
    })
});

Cypress.Commands.add('deleteCompanyGroupV2', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${gruposDeEmpresa}/${id}`,
        failOnStatusCode: false
    })
});