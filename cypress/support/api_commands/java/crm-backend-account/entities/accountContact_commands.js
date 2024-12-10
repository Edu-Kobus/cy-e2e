const accountContact = `${Cypress.config('baseUrlLeaf')}/account/apis/contact`

Cypress.Commands.add('postAccountContact', (fixAccountContact) => {
    cy.request({
        method: 'POST',
        url: accountContact,
        failOnStatusCode: false,
        body: fixAccountContact
    });
});

Cypress.Commands.add('getAllAccountContact', () => {
    cy.request({
        method: 'GET',
        url: `${accountContact}?size=250`,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('getOneAccountContact', (id) => {
    cy.request({
        method: 'GET',
        url: `${accountContact}/${id}`,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('putAccountContact', (fixAccountContact, id) => {
    cy.request({
        method: 'PUT',
        url: `${accountContact}/${id}`,
        failOnStatusCode: false,
        body: fixAccountContact
    });
});

Cypress.Commands.add('deleteAccountContact', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${accountContact}/${id}`,
        failOnStatusCode: false,
    });
});