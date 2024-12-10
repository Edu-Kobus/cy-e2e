const companySize = 'backend/public/v2/company-size'

Cypress.Commands.add('getAllCompanySizeV2', () => {
    cy.request({
        url: `${companySize}?pageSize=250`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOneCompanySizeV2', (id) => {
    cy.request({
        url: `${companySize}/${id}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postCompanySizeV2', (fixCompanySizeV2) => {
    cy.request({
        method: 'POST',
        url: companySize,
        failOnStatusCode: false,
        body: fixCompanySizeV2
    })
});

Cypress.Commands.add('putCompanySizeV2',  (id, fixCompanySizeV2) => {
    cy.request({
        method: 'PUT',
        url: `${companySize}/${id}`,
        failOnStatusCode: false,
        body: fixCompanySizeV2
    })
});

Cypress.Commands.add('deleteCompanySizeV2', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${companySize}/${id}`,
        failOnStatusCode: false
    })
});