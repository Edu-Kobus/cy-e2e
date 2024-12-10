const opportunityOrigins = `${Cypress.config('baseUrlLeaf')}/basic_records/apis/opportunityOrigins`

Cypress.Commands.add('getAllOpportunityOrigins', () => {
    cy.request({
        url: `${opportunityOrigins}?size=250`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOneOpportunityOrigins', (id) => {
    cy.request({
        url: `${opportunityOrigins}/${id}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postOpportunityOrigins', (fixEvent) => {
    cy.request({
        method: 'POST',
        url: opportunityOrigins,
        body: fixEvent,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('putOpportunityOrigins', (id, fixEvent) => {
    cy.request({
        method: 'PUT',
        url: `${opportunityOrigins}/${id}`,
        body: fixEvent,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('deleteOpportunityOrigins', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${opportunityOrigins}/${id}`,
        failOnStatusCode: false
    });
});