let basic_record = `${Cypress.config('baseUrlLeaf')}/basic_records/apis/followType`

Cypress.Commands.add('getAllFollowType', () => {
    cy.request({
        url: basic_record,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOneFollowType', (id) => {
    cy.request({
        url: `${basic_record}/${id}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postFollowType', (fixEvent) => {
    cy.request({
        method: 'POST',
        url: basic_record,
        body: fixEvent,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('putFollowType', (id, fixEvent) => {
    cy.request({
        method: 'PUT',
        url: `${basic_record}/${id}`,
        body: fixEvent,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('deleteFollowType', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${basic_record}/${id}`,
        failOnStatusCode: false
    });
});