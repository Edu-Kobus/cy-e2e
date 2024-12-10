Cypress.Commands.add('validateParams', () => {
    expect(Cypress.env('login')).to.not.eq(undefined)
    expect(Cypress.env('password')).to.not.eq(undefined)
    expect(Cypress.env('baseUrl')).to.not.eq(undefined)
})

//Login X
Cypress.Commands.add('login_x',() => {
    cy.visit('/app').then(() => {
    localStorage.setItem('debug', 0)

        if (expect(localStorage.getItem('user')).to.be.null) {
          cy.intercept('POST', '/backend/public/oauth').as('getOauth')
          cy.intercept('GET', '/backend/public/oauth/resource').as('getOauthResource')
          cy.intercept('GET', '/backend/public/versao/*').as('getVersion')
          cy.intercept('GET', '/backend/public/user/*').as('getUser')
          cy.intercept('GET', '/backend/public/programas/6').as('getPrograma')
          cy.intercept('GET', '/backend/public/formularios/*').as('getForm')
          cy.intercept('GET', '/backend/public/select-options').as('getSelectOptions')
  
          cy.get('[name="user"]')
          .first()
            .type(Cypress.env('login'))
            .should('have.value', Cypress.env('login'))
  
          cy.get('[name="password"]')
            .type(Cypress.env('password'))
            .should('have.value', Cypress.env('password'))
  
          cy.get('#loginbtn').click()
  
          cy.wait('@getOauth').its('response.statusCode').should('equal', 200)
          cy.wait('@getVersion').its('response.statusCode').should('equal', 200)
          cy.wait('@getUser')
            .then((interception) => {
              Cypress.env('user', interception.response.body)
            })
            .its('response.statusCode').should('equal', 200)
  
          cy.wait('@getPrograma')
            .then((interception) => {
              Cypress.env('programs', interception.response.body)
            })
            .its('response.statusCode').should('equal', 200)
  
          cy.wait('@getOauthResource').its('response.statusCode').should('equal', 200)
  
          // cy.wait('@getForm')
          //     .then((interception) => {
          //       Cypress.env('form', interception.response.body)
          //     })
          //     .its('response.statusCode').should('equal', 200)
        }
      })
});