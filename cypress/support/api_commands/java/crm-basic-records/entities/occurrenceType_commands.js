const occurrenceType = `${Cypress.config('baseUrlLeaf')}/basic_records/apis/occurrenceType`

Cypress.Commands.add('getAllOccurrenceType', () => {
    cy.request({
        url: `${occurrenceType}?size=200`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOneOccurrenceType', (id) => {
    cy.request({
        url: `${occurrenceType}/${id}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postOccurrenceType', (fixEvent) => {
    cy.request({
        method: 'POST',
        url: occurrenceType,
        body: fixEvent,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('putOccurrenceType', (id, fixEvent) => {
    cy.request({
        method: 'PUT',
        url: `${occurrenceType}/${id}`,
        body: fixEvent,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('deleteOccurrenceType', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${occurrenceType}/${id}`,
        failOnStatusCode: false
    });
});