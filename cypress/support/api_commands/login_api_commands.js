//login API X
Cypress.Commands.add('getToken', () => {
  cy.request({
    method: 'POST',
    url: `${Cypress.config('baseUrl')}/backend/public/oauth`,
    failOnStatusCode: false,
    body: {
      client_id:`${Cypress.env('login')}`,
      client_secret:`${Cypress.env('tenant')}`,
      grant_type:"client_credentials"
    },
    headers: {
      tenant: `${Cypress.env('tenant')}`
    }
  }).its('body.access_token')
    .should('not.be.empty')
    .then(access_token => {
      Cypress.env('access_token', access_token)
      return access_token
    })
  })

  //platform
Cypress.Commands.add('getTokenPlatform', () => {
  cy.request({
      method: 'POST',
      url: `${Cypress.config('baseUrlLeaf')}/platform/authentication/actions/login`,
      failOnStatusCode: false,
      body: {
          username : Cypress.env('login'),
          password : Cypress.env('password')
      },
      headers: {
        'content-type': "application/json"
      }
  }).its('body')
    .should('not.be.undefined')
    .and('not.be.empty')
    .then((res) => {
      let token = JSON.parse(res.jsonToken).access_token

      Cypress.env('access_token_platform', token)
      return token
    })
})

// Sobrescrever Request com access_token
Cypress.Commands.overwrite('request', (originalFn, ...options) => {
  if(options.length == 1) {
    if (Cypress.env('access_token')) {
      options[0].headers = {
        Authorization: `Bearer ${Cypress.env('access_token')}`,
        tenant: `${Cypress.env('tenant')}`
      }
    } else if(Cypress.env('access_token_platform')){
      options[0].headers = {
        Authorization: `Bearer ${Cypress.env('access_token_platform')}`
      }
    }
  }

  return originalFn(...options)
})