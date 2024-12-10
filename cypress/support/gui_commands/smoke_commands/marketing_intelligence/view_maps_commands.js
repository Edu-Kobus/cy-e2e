//*** Visualizar Mapa ***//

Cypress.Commands.add('view_maps',  () => {    
    cy.get('[id="filtro.btn_view_on_map"]')
        .last()
        .click()
})

Cypress.Commands.add('intercept_maps',  () => {    
    cy.intercept('GET', '**/maps/*').as('getGoogleMaps')
})

Cypress.Commands.add('intercept_query_mkt',  () => {    
    cy.intercept('POST', '**/queries/marketingIntelligence').as('postQueryMkt')
})

Cypress.Commands.add('wait_maps',  () => {    
    cy.wait('@getGoogleMaps')
        .its('response.statusCode')
        .should('eq', 200)
})

Cypress.Commands.add('wait_query_mkt',  () => {    
    cy.wait('@postQueryMkt')
        .its('response.statusCode')
        .should('eq', 200)
})

Cypress.Commands.add('selectRegister',  () => {
    cy.get('[id="s-button-9"]').click()
});