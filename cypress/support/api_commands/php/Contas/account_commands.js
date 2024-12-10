const account = 'backend/public/account'
const filterDesc = '?columns%5B0%5D%5Bdata%5D=id&order%5B0%5D%5Bcolumn%5D=0&order%5B0%5D%5Bdir%5D=desc'

Cypress.Commands.add('getAllAccount', () => {
    cy.request({
        url: `${account}${filterDesc}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOneAccount', (id) => {
    cy.request({
        url: `${account}/${id}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postAccount', (fixAccount) => {
    cy.request({
        method: 'POST',
        url: account,
        failOnStatusCode: false,
        body: fixAccount
    })
});

Cypress.Commands.add('putAccount', (id, fixAccount) => {
    cy.request({
        method: 'PUT',
        url: `${account}/${id}`,
        failOnStatusCode: false,
        body: fixAccount
    })
});

Cypress.Commands.add('deleteAccount', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${account}/${id}`,
        failOnStatusCode: false
    })
});