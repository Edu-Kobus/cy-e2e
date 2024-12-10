const contacts = '/backend/public/contacts'

Cypress.Commands.add('getAllContacts', () => {
    cy.request({
        method: 'GET',
        url: contacts,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOneContacts', (id) => {
    cy.request({
        method: 'GET',
        url: `${contacts}/${id}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postContacts', (fixContact) => {
    cy.request({
        method: 'POST',
        url: contacts,
        failOnStatusCode: false,
        body: fixContact
    })
});

Cypress.Commands.add('putContacts', (id, fixContact) => {
    cy.request({
        method: 'PUT',
        url: `${contacts}/${id}`,
        failOnStatusCode: false,
        body: fixContact
    })
});

Cypress.Commands.add('deleteContacts', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${contacts}/${id}`,
        failOnStatusCode: false
    })
});