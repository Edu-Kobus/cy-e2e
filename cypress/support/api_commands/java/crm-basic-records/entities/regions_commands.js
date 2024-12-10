const basic_record = `${Cypress.config('baseUrlLeaf')}/basic_records/apis/regions`

Cypress.Commands.add('getAllRegions', () => {
    cy.request({
        url: `${basic_record}?size=200`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOneRegions', (id) => {
    cy.request({
        url: `${basic_record}/${id}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postRegions', (fixEvent) => {
    cy.request({
        method: 'POST',
        url: basic_record,
        body: fixEvent,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('putRegions', (id, fixEvent) => {
    cy.request({
        method: 'PUT',
        url: `${basic_record}/${id}`,
        body: fixEvent,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('deleteRegions', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${basic_record}/${id}`,
        failOnStatusCode: false
    });
});