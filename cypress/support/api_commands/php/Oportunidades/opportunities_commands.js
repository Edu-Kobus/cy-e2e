const opportunity = 'backend/public/v3/opportunity'

Cypress.Commands.add('getAllOpportunityV3',  () => {
    cy.request({
        method: 'GET',
        url:`${opportunity}?pageSize=200`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOneOpportunityV3',  (id) => {
    cy.request({
        method: 'GET',
        url: `${opportunity}/${id}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postOpportunityV3', (fixOpportunitie) => {
    cy.request({
        method: 'POST',
        url: opportunity,
        failOnStatusCode: false,
        body: fixOpportunitie
    })
})

Cypress.Commands.add('putOpportunityV3', (id, fixOpportunitie) => {
    cy.request({
        method: 'PUT',
        url: `${opportunity}/${id}`,
        failOnStatusCode: false,
        body: fixOpportunitie
    })
});

Cypress.Commands.add('deleteOpportunityV3', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${opportunity}/${id}`,
        failOnStatusCode: false
    })
});