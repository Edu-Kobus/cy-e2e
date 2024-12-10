const functions = 'backend/public/v2/functions'

Cypress.Commands.add('getAllFunctionsV2', () => {
    cy.request({
        url: `${functions}?pageSize=250`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOneFunctionsV2', (id) => {
    cy.request({
        url: `${functions}/${id}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postFunctionsV2', (fixFunctionsV2) => {
    cy.request({
        method: 'POST',
        url: functions,
        failOnStatusCode: false,
        body: fixFunctionsV2
    })
});

Cypress.Commands.add('putFunctionsV2',  (id, fixFunctionsV2) => {
    cy.request({
        method: 'PUT',
        url: `${functions}/${id}`,
        failOnStatusCode: false,
        body: fixFunctionsV2
    })
});

Cypress.Commands.add('deleteFunctionsV2', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${functions}/${id}`,
        failOnStatusCode: false
    })
});