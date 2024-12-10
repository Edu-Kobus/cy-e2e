const accountResponsible = `${Cypress.config('baseUrlLeaf')}/account/apis/accountResponsible`

Cypress.Commands.add('postAccountResponsible', (fixAccountResponsible) => {
    cy.request({
        method: 'POST',
        url: accountResponsible,
        failOnStatusCode: false,
        body: fixAccountResponsible
    });
});

Cypress.Commands.add('getAllAccountResponsible', () => {
    cy.request({
        method: 'GET',
        url: `${accountResponsible}?size=250`,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('getOneAccountResponsible', (id) => {
    cy.request({
        method: 'GET',
        url: `${accountResponsible}/${id}`,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('putAccountResponsible', (fixAccountResponsible, id) => {
    cy.request({
        method: 'PUT',
        url: `${accountResponsible}/${id}`,
        failOnStatusCode: false,
        body: fixAccountResponsible
    });
});

Cypress.Commands.add('deleteAccountResponsible', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${accountResponsible}/${id}`,
        failOnStatusCode: false,
    });
});