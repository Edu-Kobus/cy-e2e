const user = `${Cypress.config('baseUrlLeaf')}/basic_records/apis/user`

Cypress.Commands.add('postUser', (fixUser) => {
    cy.request({
        method: 'POST',
        url: user,
        failOnStatusCode: false,
        body: fixUser
    });
});

Cypress.Commands.add('getAllUser', () => {
    cy.request({
        method: 'GET',
        url: `${user}?offset=0&size=250`,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('getOneUser', (id) => {
    cy.request({
        method: 'GET',
        url: `${user}/${id}`,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('putUser', (id, fixUser) => {
    cy.request({
        method: 'PUT',
        url: `${user}/${id}`,
        failOnStatusCode: false,
        body: fixUser
    });
});