const opportunityProduct = `${Cypress.config('baseUrlLeaf')}/opportunity/apis/opportunityProposalProduct`


Cypress.Commands.add('getAllOpportunityProduct', () => {
    cy.request({
        url: opportunityProduct,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOneOpportunityProduct', (id) => {
    cy.request({
        url: `${opportunityProduct}/${id}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postOpportunityProduct', (fixProduct) => {
    cy.request({
        method: 'POST',
        url: opportunityProduct,
        failOnStatusCode: false,
        body: fixProduct
    })
});

Cypress.Commands.add('putOpportunityProduct', (id, fixProduct) => {
    cy.request({
        method: 'PUT',
        url: `${opportunityProduct}/${id}`,
        failOnStatusCode: false,
        body: fixProduct
    })
});

Cypress.Commands.add('deleteOpportunityProduct', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${opportunityProduct}/${id}`,
        failOnStatusCode: false
    })
});
