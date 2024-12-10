let opportunityProposal = `${Cypress.config('baseUrlLeaf')}/opportunity/apis/opportunityProposal`

Cypress.Commands.add('getAllOpportunityProposal', () => {
    cy.request({
        url: opportunityProposal,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOneOpportunityProposal', (reg) => {
    cy.request({
        url: `${opportunityProposal}/${reg}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postProposal', (fixProposal) => {
    cy.request({
        method: 'POST',
        url: opportunityProposal,
        body: fixProposal,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('putProposal', (id, fixProposal) => {
    cy.request({
        method: 'PUT',
        url: `${opportunityProposal}/${id}`,
        body: fixProposal,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('deleteProposal', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${opportunityProposal}/${id}`,
        failOnStatusCode: false
    })
});