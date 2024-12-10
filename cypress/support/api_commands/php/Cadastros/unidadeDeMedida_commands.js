const unitMeasurement = 'backend/public/unit-of-measurement'

Cypress.Commands.add('getAllUnitMeasurement', () => {
    cy.request({
        url: unitMeasurement,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOneUnitMeasurement', (id) => {
    cy.request({
        url: `${unitMeasurement}/${id}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postUnitMeasurement', (fixUnitMeasurement) => {
    cy.request({
        method: 'POST',
        url: unitMeasurement,
        failOnStatusCode: false,
        body: fixUnitMeasurement
    })
});

Cypress.Commands.add('putUnitMeasurement',  (id, fixUnitMeasurement) => {
    cy.request({
        method: 'PUT',
        url: `${unitMeasurement}/${id}`,
        failOnStatusCode: false,
        body: fixUnitMeasurement
    })
});

Cypress.Commands.add('deleteUnitMeasurement', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${unitMeasurement}/${id}`,
        failOnStatusCode: false
    })
});