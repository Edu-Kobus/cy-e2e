const department = `${Cypress.config('baseUrlLeaf')}/basic_records/apis/department`

Cypress.Commands.add('postDepartment', (fixDepartment) => {
    cy.request({
        method: 'POST',
        url: department,
        failOnStatusCode: false,
        body: fixDepartment
    });
});

Cypress.Commands.add('getAllDepartment', (fixDepartment) => {
    cy.request({
        method: 'GET',
        url: `${department}?size=200`,
        failOnStatusCode: false,
        body: fixDepartment
    });
});

Cypress.Commands.add('getOneDepartment', (fixDepartment, id) => {
    cy.request({
        method: 'GET',
        url: `${department}/${id}`,
        failOnStatusCode: false,
        body: fixDepartment
    });
});

Cypress.Commands.add('putDepartment', (fixDepartment, id) => {
    cy.request({
        method: 'PUT',
        url: `${department}/${id}`,
        failOnStatusCode: false,
        body: fixDepartment
    });
});

Cypress.Commands.add('deleteDepartment', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${department}/${id}`,
        failOnStatusCode: false
    });
});