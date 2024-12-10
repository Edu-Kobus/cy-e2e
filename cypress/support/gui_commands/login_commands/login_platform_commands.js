Cypress.Commands.add('login_platform',  () => {
    cy.intercept('POST', '**/collect*', { timeout: 2000 }).as('postCollect')

    cy.visit(Cypress.config('baseUrlLeafUI'))
    cy.wait('@postCollect')

    cy.wait(1000)

    cy.get('#username-input-field')
        .clear()
        .type(Cypress.env('login'), { delay: 0 })

    cy.get('#password-input-field')
        .type(Cypress.env('password'), { log: false }, { delay: 0 })

    cy.get('#loginbtn').click()

    cy.screenshot();
})