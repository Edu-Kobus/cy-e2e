const basic_record = `${Cypress.config('baseUrlLeaf')}/basic_records/apis/ratings`

Cypress.Commands.add('getAllRatings', () => {
    cy.request({
        url: basic_record,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOneRatings', (id) => {
    cy.request({
        url: `${basic_record}/${id}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postRatings', (fixEvent) => {
    cy.request({
        method: 'POST',
        url: basic_record,
        body: fixEvent,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('putRatings', (id, fixEvent) => {
    cy.request({
        method: 'PUT',
        url: `${basic_record}/${id}`,
        body: fixEvent,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('deleteRatings', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${basic_record}/${id}`,
        failOnStatusCode: false
    });
});