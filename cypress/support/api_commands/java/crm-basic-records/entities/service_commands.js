const basic_record = `${Cypress.config('baseUrlLeaf')}/basic_records/apis/service`

Cypress.Commands.add('getAllService', () => {
    cy.request({
        url: `${basic_record}?size=200`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOneService', (id) => {
    cy.request({
        url: `${basic_record}/${id}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postService', (fixEvent) => {
    cy.request({
        method: 'POST',
        url: basic_record,
        body: fixEvent,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('putService', (id, fixEvent) => {
    cy.request({
        method: 'PUT',
        url: `${basic_record}/${id}`,
        body: fixEvent,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('deleteService', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${basic_record}/${id}`,
        failOnStatusCode: false
    });
});