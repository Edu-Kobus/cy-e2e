
var postMessageWaitScreen = '{"token":{"version":1,"scope":"desktop+device_253d28d2-d3f8-4b25-8264-a5c73c6c4370","expires_in":21600,"username":"suporte@development.com.br","token_type":"bearer","access_token":"712403260faa1d4f3b6f5475bb55b0475bec6cb0","refresh_token":"Eqyj7SEojvXQPOKZAoba1KLoXwB0oSdR","type":"internal","email":"suporte@com.br","fullName":"Suporte++QA","tenantName":"developmentcombr","locale":"pt-BR","tenant":"developmentcombr"},"servicesUrl":"https://cloud-leaf.com.br/t/com.br/bridge/1.0/rest/"}'

Cypress.Commands.add('postMessage', () => {
    cy.window()
    .then($window => {
    const message = JSON.parse(postMessageWaitScreen)
    $window.postMessage(message, '*')
  })
})