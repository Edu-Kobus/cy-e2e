const companySize = `${Cypress.config('baseUrlLeaf')}/basic_records/apis/companySize`

Cypress.Commands.add('postCompanySize', (fixCompanySize) => {
    cy.request({
        method: 'POST',
        url: companySize,
        failOnStatusCode: false,
        body: fixCompanySize
    });
});

Cypress.Commands.add('getAllCompanySize', () => {
    cy.request({
        method: 'GET',
        url: `${companySize}?size=200`,
        failOnStatusCode: false,
    });
});

Cypress.Commands.add('getOneCompanySize', (id) => {
    cy.request({
        method: 'GET',
        url: `${companySize}/${id}`,
        failOnStatusCode: false,
    });
});

Cypress.Commands.add('putCompanySize', (fixCompanySize, id) => {
    cy.request({
        method: 'PUT',
        url: `${companySize}/${id}`,
        failOnStatusCode: false,
        body: fixCompanySize
    });
});

Cypress.Commands.add('deleteCompanySize', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${companySize}/${id}`,
        failOnStatusCode: false
    });
});