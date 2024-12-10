const occurrenceOrigin = 'backend/public/v2/occurrence-origin'

Cypress.Commands.add('getAllOccurrenceOriginV2', () => {
    cy.request({
        url: `${occurrenceOrigin}?pageSize=250`,
        failOnOriginCode: false
    })
});

Cypress.Commands.add('getOneOccurrenceOriginV2', (id) => {
    cy.request({
        url: `${occurrenceOrigin}/${id}`,
        failOnOriginCode: false
    })
});

Cypress.Commands.add('postOccurrenceOriginV2', (fixture) => {
    cy.request({
        method: 'POST',
        url: occurrenceOrigin,
        failOnOriginCode: false,
        body: fixture
    })
});

Cypress.Commands.add('putOccurrenceOriginV2',  (id, fixture) => {
    cy.request({
        method: 'PUT',
        url: `${occurrenceOrigin}/${id}`,
        failOnOriginCode: false,
        body: fixture
    })
});

Cypress.Commands.add('deleteOccurrenceOriginV2', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${occurrenceOrigin}/${id}`,
        failOnOriginCode: false
    })
});