const endpoint = 'backend/public/v2/company'

Cypress.Commands.add('postCompanyV2', (fixCompany) => {
    cy.request({
        method: 'POST',
        url: endpoint,
        failOnStatusCode: false,
        body: fixCompany
    });
});

Cypress.Commands.add('getCompanyV2', () => {
    cy.request({
        method: 'GET',
        url: endpoint,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('getOneCompanyV2', (id) => {
    cy.request({
        method: 'GET',
        url: `${endpoint}/${id}`,
        failOnStatusCode: false
    });
});