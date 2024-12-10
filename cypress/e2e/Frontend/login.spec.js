describe('Login', () => {

  beforeEach(() => {
    cy.clearAllCookies()
    cy.clearAllLocalStorage()
  });

  it('Limpar Cache', () => {
    cy.exec('npm cache clear --force', {failOnNonZeroExit: false})
  });

  it('Realizar Login', () => {
    cy.intercept('POST', '**/oauth').as('oauth')
    cy.intercept('GET', '**/parametros').as('getParams')
    cy.intercept('GET', '**/user/*').as('getUser')
    cy.intercept('GET', '**/select-options', { fixture: 'Frontend/form/options.json' }).as('getOptions')
    cy.intercept('GET', '**/resource').as('getOauthResource')

    cy.visit(`${Cypress.config('baseUrl')}/app`)
    cy.clearCookie('tenant');
    cy.setCookie('tenant', `${Cypress.env('tenant')}`);
    cy.wait(500)
    cy.reload();

    cy.wait(3000)

    cy.get('[name="user"]')
      .first()
      .type(Cypress.env('login'), { log: false })
      .should('have.value', Cypress.env('login'))

    cy.get('[name="password"]')
      .type(Cypress.env('tenant'), { log: false })
      .should('have.value', Cypress.env('tenant'))

    cy.get('#loginbtn').click()

    cy.wait('@oauth').then(($res) => {
      expect($res.response.statusCode).to.eq(200)
      expect($res.response.body.access_token).to.be.not.empty
    })

    cy.wait('@getUser')
      .its('response.statusCode')
      .should('eq', 200)

    cy.wait('@getParams')
      .its('response.statusCode')
      .should('eq', 200)

    cy.wait('@getOptions')
      .its('response.statusCode')
      .should('eq', 200)

    cy.wait('@getOauthResource')
      .its('response.statusCode')
      .should('eq', 200)
  })
})
