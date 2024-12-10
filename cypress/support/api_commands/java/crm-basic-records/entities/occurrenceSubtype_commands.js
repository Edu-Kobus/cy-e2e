const occurrenceSubtype = `${Cypress.config('baseUrlLeaf')}/basic_records/apis/occurrenceSubtype`

Cypress.Commands.add('getAllOccurrenceSubtype', () => {
    cy.request({
        url: `${occurrenceSubtype}?size=200`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOneOccurrenceSubtype', (id) => {
    cy.request({
        url: `${occurrenceSubtype}/${id}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postOccurrenceSubtype', (fixEvent) => {
    cy.request({
        method: 'POST',
        url: occurrenceSubtype,
        body: fixEvent,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('putOccurrenceSubtype', (id, fixEvent) => {
    cy.request({
        method: 'PUT',
        url: `${occurrenceSubtype}/${id}`,
        body: fixEvent,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('deleteOccurrenceSubtype', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${occurrenceSubtype}/${id}`,
        failOnStatusCode: false
    });
});