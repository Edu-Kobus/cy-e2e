const eventsStatus = `${Cypress.config('baseUrlLeaf')}/basic_records/apis/eventsStatus`

Cypress.Commands.add('getAllEventStatus', () => {
    cy.request({
        method: 'GET',
        url: eventsStatus,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('getOneEventStatus', (id) => {
    cy.request({
        method: 'GET',
        url: `${eventsStatus}/${id}`,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('postEventStatus', (fixEventStatus) => {
    cy.request({
        method: 'POST',
        url: eventsStatus,
        failOnStatusCode: false,
        body: fixEventStatus
    });
});

Cypress.Commands.add('putEventStatus', (id, fixEventStatus) => {
    cy.request({
        method: 'PUT',
        url: `${eventsStatus}/${id}`,
        failOnStatusCode: false,
        body: fixEventStatus
    });
});

Cypress.Commands.add('deleteEventStatus', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${eventsStatus}/${id}`,
        failOnStatusCode: false
    });
});