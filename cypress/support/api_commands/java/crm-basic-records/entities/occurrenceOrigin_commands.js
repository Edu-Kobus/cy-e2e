const occurrenceOrigin = `${Cypress.config('baseUrlLeaf')}/basic_records/apis/occurrenceOrigin`

Cypress.Commands.add('getAllOccurrenceOrigin', () => {
    cy.request({
        url: `${occurrenceOrigin}?size=200`,
        failOnOriginCode: false
    })
});

Cypress.Commands.add('getOneOccurrenceOrigin', (id) => {
    cy.request({
        url: `${occurrenceOrigin}/${id}`,
        failOnOriginCode: false
    })
});

Cypress.Commands.add('postOccurrenceOrigin', (fixEvent) => {
    cy.request({
        method: 'POST',
        url: occurrenceOrigin,
        body: fixEvent,
        failOnOriginCode: false
    });
});

Cypress.Commands.add('putOccurrenceOrigin', (id, fixEvent) => {
    cy.request({
        method: 'PUT',
        url: `${occurrenceOrigin}/${id}`,
        body: fixEvent,
        failOnOriginCode: false
    });
});

Cypress.Commands.add('deleteOccurrenceOrigin', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${occurrenceOrigin}/${id}`,
        failOnOriginCode: false
    });
});