const departments = 'backend/public/v2/departments'

Cypress.Commands.add('getAllDepartmentsV2', () => {
    cy.request({
        url: `${departments}?pageSize=250`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOneDepartmentsV2', (id) => {
    cy.request({
        url: `${departments}/${id}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postDepartmentsV2', (fixDepartmentsV2) => {
    cy.request({
        method: 'POST',
        url: departments,
        failOnStatusCode: false,
        body: fixDepartmentsV2
    })
});

Cypress.Commands.add('putDepartmentsV2',  (id, fixDepartmentsV2) => {
    cy.request({
        method: 'PUT',
        url: `${departments}/${id}`,
        failOnStatusCode: false,
        body: fixDepartmentsV2
    })
});

Cypress.Commands.add('deleteDepartmentsV2', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${departments}/${id}`,
        failOnStatusCode: false
    })
});