const occurrenceStatus = 'backend/public/v2/occurrence-status'

Cypress.Commands.add('getAllOccurrenceStatusV2', () => {
    cy.request({
        url: `${occurrenceStatus}?pageSize=250`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOneOccurrenceStatusV2', (id) => {
    cy.request({
        url: `${occurrenceStatus}/${id}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postOccurrenceStatusV2', (fixture) => {
    cy.request({
        method: 'POST',
        url: occurrenceStatus,
        failOnStatusCode: false,
        body: fixture
    })
});

Cypress.Commands.add('putOccurrenceStatusV2',  (id, fixture) => {
    cy.request({
        method: 'PUT',
        url: `${occurrenceStatus}/${id}`,
        failOnStatusCode: false,
        body: fixture
    })
});

Cypress.Commands.add('deleteOccurrenceStatusV2', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${occurrenceStatus}/${id}`,
        failOnStatusCode: false
    })
});