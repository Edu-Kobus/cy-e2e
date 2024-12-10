const basic_record = `${Cypress.config('baseUrlLeaf')}/basic_records/apis/locations`

Cypress.Commands.add('getAllLocations', () => {
    cy.request({
        url: `${basic_record}?size=250`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOneLocations', (id) => {
    cy.request({
        url: `${basic_record}/${id}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postLocations', (fixEvent) => {
    cy.request({
        method: 'POST',
        url: basic_record,
        body: fixEvent,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('putLocations', (id, fixEvent) => {
    cy.request({
        method: 'PUT',
        url: `${basic_record}/${id}`,
        body: fixEvent,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('deleteLocations', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${basic_record}/${id}`,
        failOnStatusCode: false
    });
});