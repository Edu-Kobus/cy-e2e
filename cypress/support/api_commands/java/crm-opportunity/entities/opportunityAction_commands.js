const endpoint = `${Cypress.config('baseUrlLeaf')}/opportunity/apis/opportunityAction`

Cypress.Commands.add('getAllOpportunityAction', () => {
    cy.request({
        url: endpoint,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOneOpportunityAction', (reg) => {
    cy.request({
        url: `${endpoint}/${reg}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postOpportunityAction', (fixOpportunity) => {
    cy.request({
        method: 'POST',
        url: endpoint,
        failOnStatusCode: false,
        body: fixOpportunity
    })
})

Cypress.Commands.add('putOpportunityAction', (id, fixOpportunity) => {
    cy.request({
        method: 'PUT',
        url: `${endpoint}/${id}`,
        failOnStatusCode: false,
        body: fixOpportunity
    });
});

Cypress.Commands.add('deleteOpportunityAction', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${endpoint}/${id}`,
        failOnStatusCode: false
    });
});