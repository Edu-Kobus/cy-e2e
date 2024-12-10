const occurrenceStatus = `${Cypress.config('baseUrlLeaf')}/basic_records/apis/occurrenceStatus`

Cypress.Commands.add('getAllOccurrenceStatus', () => {
    cy.request({
        url: `${occurrenceStatus}?size=200`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOneOccurrenceStatus', (id) => {
    cy.request({
        url: `${occurrenceStatus}/${id}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postOccurrenceStatus', (fixEvent) => {
    cy.request({
        method: 'POST',
        url: occurrenceStatus,
        body: fixEvent,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('putOccurrenceStatus', (id, fixEvent) => {
    cy.request({
        method: 'PUT',
        url: `${occurrenceStatus}/${id}`,
        body: fixEvent,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('deleteOccurrenceStatus', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${occurrenceStatus}/${id}`,
        failOnStatusCode: false
    });
});