const account = `${Cypress.config('baseUrlLeaf')}/account/queries`

Cypress.Commands.add('postAccountContactByPhone',  (fixContact) => {
    cy.request({
        method: 'POST',
        url: `${account}/getAccountContactByPhone`,
        failOnStatusCode: false,
        body: fixContact
    })
});
