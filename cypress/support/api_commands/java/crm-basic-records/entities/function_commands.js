const functions = `${Cypress.config('baseUrlLeaf')}/basic_records/apis/function`

Cypress.Commands.add('postFunction', (fixFunction) => {
    cy.request({
        method: 'POST',
        url: functions,
        failOnStatusCode: false,
        body: fixFunction
    });
});

Cypress.Commands.add('getAllFunction', (fixFunction) => {
    cy.request({
        method: 'GET',
        url: `${functions}?size=200`,
        failOnStatusCode: false,
        body: fixFunction
    });
});

Cypress.Commands.add('getOneFunction', (fixFunction, id) => {
    cy.request({
        method: 'GET',
        url: `${functions}/${id}`,
        failOnStatusCode: false,
        body: fixFunction
    });
});

Cypress.Commands.add('putFunction', (fixFunction, id) => {
    cy.request({
        method: 'PUT',
        url: `${functions}/${id}`,
        failOnStatusCode: false,
        body: fixFunction
    });
});

Cypress.Commands.add('deleteFunction', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${functions}/${id}`,
        failOnStatusCode: false
    });
});