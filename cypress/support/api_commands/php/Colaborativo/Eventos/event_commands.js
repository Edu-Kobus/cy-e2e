const events = 'backend/public/v2/event'

Cypress.Commands.add('getAllEventV2', () => {
    cy.request({
        url: `${events}?pageSize=250`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOneEventV2', (id) => {
    cy.request({
        url: `${events}/${id}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postEventV2', (fixEvent) => {
    cy.request({
        method: 'POST',
        url: events,
        failOnStatusCode: false,
        body: fixEvent
    })
});

Cypress.Commands.add('putEventV2', (id, fixEvent) => {
    cy.request({
        method: 'PUT',
        url: `${events}/${id}`,
        failOnStatusCode: false,
        body: fixEvent
    })
});

Cypress.Commands.add('deleteEventV2', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${events}/${id}`,
        failOnStatusCode: false
    })
});