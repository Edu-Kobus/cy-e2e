describe("Acessar Platform", () => {

  before(() => {
    cy.clearCookie('com.token')
      .clearCookie('com.pau.token')
  })

  beforeEach(() => cy.saveCookies())

  it('Login', () => {
    cy.login_platform()
  })
})