const basic_record = `${Cypress.config('baseUrlLeaf')}/basic_records/apis/opportunityType`

Cypress.Commands.add('getAllOpportunityType', () => {
    cy.request({
        url: `${basic_record}?offset=0&size=250`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOneOpportunityType', (id) => {
    cy.request({
        url: `${basic_record}/${id}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postOpportunityType', (fixEvent) => {
    cy.request({
        method: 'POST',
        url: basic_record,
        body: fixEvent,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('putOpportunityType', (id, fixEvent) => {
    cy.request({
        method: 'PUT',
        url: `${basic_record}/${id}`,
        body: fixEvent,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('deleteOpportunityType', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${basic_record}/${id}`,
        failOnStatusCode: false
    });
});