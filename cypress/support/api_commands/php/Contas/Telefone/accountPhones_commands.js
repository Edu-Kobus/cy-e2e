const accountPhones = 'backend/public/account-phones'

Cypress.Commands.add('getAllPhones', () => {
    cy.request({
        url: accountPhones,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOnePhones', (id) => {
    cy.request({
        url: `${accountPhones}/${id}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postPhones', (fixPhone) => {
    cy.request({
        method: 'POST',
        url: accountPhones,
        failOnStatusCode: false,
        body: fixPhone
    })
});

Cypress.Commands.add('putPhones', (id, fixPhone) => {
    cy.request({
        method: 'PUT',
        url: `${accountPhones}/${id}`,
        failOnStatusCode: false,
        body: fixPhone
    })
});

Cypress.Commands.add('deletePhones', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${accountPhones}/${id}`,
        failOnStatusCode: false
    })
});