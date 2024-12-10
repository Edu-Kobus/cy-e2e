Cypress.Commands.add('interceptOppNotifies', () => {
    cy.intercept('GET', '/backend/public/opportunity-type-notifies?*').as('getOpportunityNotifies')
})

Cypress.Commands.add('waitOppNotifies', () => {
    cy.wait('@getOpportunityNotifies').its('response.statusCode').should('equal', 200)
})

Cypress.Commands.add('removeRegisterMasterDetail', () => {
    cy.get('[data-title="Ações"] > .btn-group > .btn').click({ force:true })
    cy.get(':nth-child(3) > .text-left').click({ force:true })
    cy.get('button[data-bb-handler="confirm"]').click()
})