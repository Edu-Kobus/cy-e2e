const events = `${Cypress.config('baseUrlLeaf')}/collaborative/apis/event`

Cypress.Commands.add('postEvent', (fixEvent) => {
    cy.request({
        method: 'POST',
        url: events,
        body: fixEvent,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('getAllEvent', () => {
    cy.request({
        method: 'GET',
        url: `${events}?size=250`,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('getOneEvent', (fixEvent, id) => {
    cy.request({
        method: 'GET',
        url: `${events}/${id}`,
        body: fixEvent,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('putEvent', (fixEvent, id) => {
    cy.request({
        method: 'PUT',
        url: `${events}/${id}`,
        body: fixEvent,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('deleteEvent', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${events}/${id}`,
        failOnStatusCode: false
    });
});