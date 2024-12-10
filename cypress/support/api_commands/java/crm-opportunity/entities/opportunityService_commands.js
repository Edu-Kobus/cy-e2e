const OpportunityService = `${Cypress.config('baseUrlLeaf')}/opportunity/apis/opportunityProposalService`

Cypress.Commands.add('getAllOpportunityService', () => {
    cy.request({
        url: OpportunityService,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOneOpportunityService', (id) => {
    cy.request({
        url: `${OpportunityService}/${id}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postOpportunityService', (fixService) => {
    cy.request({
        method: 'POST',
        url: OpportunityService,
        failOnStatusCode: false,
        body: fixService
    })
});

Cypress.Commands.add('putOpportunityService', (id, fixService) => {
    cy.request({
        method: 'PUT',
        url: `${OpportunityService}/${id}`,
        failOnStatusCode: false,
        body: fixService
    })
});

Cypress.Commands.add('deleteOpportunityService', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${OpportunityService}/${id}`,
        failOnStatusCode: false
    })
});