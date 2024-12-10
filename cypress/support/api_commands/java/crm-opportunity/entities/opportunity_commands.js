const endpoint = `${Cypress.config('baseUrlLeaf')}/opportunity/apis/opportunity`

Cypress.Commands.add('getAllOpportunity', () => {
    cy.request({
        url: `${endpoint}?size=250`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOneOpportunity', (reg) => {
    cy.request({
        url: `${endpoint}/${reg}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postOpportunity', (fixOpportunity) => {
    cy.request({
        method: 'POST',
        url: endpoint,
        failOnStatusCode: false,
        body: fixOpportunity
    })
})

Cypress.Commands.add('putOpportunity', (id, fixOpportunity) => {
    cy.request({
        method: 'PUT',
        url: `${endpoint}/${id}`,
        failOnStatusCode: false,
        body: fixOpportunity
    });
});

Cypress.Commands.add('deleteOpportunity', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${endpoint}/${id}`,
        failOnStatusCode: false
    });
});