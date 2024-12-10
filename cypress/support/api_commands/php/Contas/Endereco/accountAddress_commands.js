const accountAddress = 'backend/public/account-addresses'

Cypress.Commands.add('getAllAddress', () => {
    cy.request({
        url: accountAddress,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOneAddress', (id) => {
    cy.request({
        url: `${accountAddress}/${id}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postAddress', (fixAccountAddress) => {
    cy.request({
        method: 'POST',
        url: accountAddress,
        failOnStatusCode: false,
        body: fixAccountAddress
    })
});

Cypress.Commands.add('putAddress', (id, fixAccountAddress) => {
    cy.request({
        method: 'PUT',
        url: `${accountAddress}/${id}`,
        failOnStatusCode: false,
        body: fixAccountAddress
    })
});

Cypress.Commands.add('deleteAddress', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${accountAddress}/${id}`,
        failOnStatusCode: false
    })
})