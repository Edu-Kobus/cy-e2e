const accountRelationships = `${Cypress.config('baseUrlLeaf')}/account/apis/accountRelationships`

Cypress.Commands.add('postAccountRelationships', (fixAccountRelationships) => {
    cy.request({
        method: 'POST',
        url: accountRelationships,
        failOnStatusCode: false,
        body: fixAccountRelationships
    });
});

Cypress.Commands.add('getAllAccountRelationships', () => {
    cy.request({
        method: 'GET',
        url: `${accountRelationships}?size=250`,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('getOneAccountRelationships', (id) => {
    cy.request({
        method: 'GET',
        url: `${accountRelationships}/${id}`,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('putAccountRelationships', (fixAccountRelationships, id) => {
    cy.request({
        method: 'PUT',
        url: `${accountRelationships}/${id}`,
        failOnStatusCode: false,
        body: fixAccountRelationships
    });
});

Cypress.Commands.add('deleteAccountRelationships', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${accountRelationships}/${id}`,
        failOnStatusCode: false,
    });
});