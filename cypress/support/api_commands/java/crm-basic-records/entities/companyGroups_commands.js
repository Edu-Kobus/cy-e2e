const endpoint = `${Cypress.config('baseUrlLeaf')}/basic_records/apis/companyGroups`

Cypress.Commands.add('postCompanyGroups', (fixCompanyGroups) => {
    cy.request({
        method: 'POST',
        url: endpoint,
        failOnStatusCode: false,
        body: fixCompanyGroups
    });
});

Cypress.Commands.add('getAllCompanyGroups', () => {
    cy.request({
        method: 'GET',
        url: `${endpoint}?size=200`,
        failOnStatusCode: false,
    });
});

Cypress.Commands.add('getOneCompanyGroups', (id) => {
    cy.request({
        method: 'GET',
        url: `${endpoint}/${id}`,
        failOnStatusCode: false,
    });
});

Cypress.Commands.add('putCompanyGroups', (fixCompanyGroups, id) => {
    cy.request({
        method: 'PUT',
        url: `${endpoint}/${id}`,
        failOnStatusCode: false,
        body: fixCompanyGroups
    });
});

Cypress.Commands.add('deleteCompanyGroups', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${endpoint}/${id}`,
        failOnStatusCode: false
    });
});