let basic_record = `${Cypress.config('baseUrlLeaf')}/basic_records/apis/eventTypes`

Cypress.Commands.add('getAllEventTypes', () => {
    cy.request({
        url: basic_record,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOneEventTypes', (id) => {
    cy.request({
        url: `${basic_record}/${id}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postEventTypes', (fixEvent) => {
    cy.request({
        method: 'POST',
        url: basic_record,
        body: fixEvent,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('putEventTypes', (id, fixEvent) => {
    cy.request({
        method: 'PUT',
        url: `${basic_record}/${id}`,
        body: fixEvent,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('deleteEventTypes', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${basic_record}/${id}`,
        failOnStatusCode: false
    });
});