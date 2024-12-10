const accountPhone = `${Cypress.config('baseUrlLeaf')}/account/apis/accountPhone`

Cypress.Commands.add('postAccountPhone', (fixAccountPhone) => {
    cy.request({
        method: 'POST',
        url: accountPhone,
        failOnStatusCode: false,
        body: fixAccountPhone
    });
});

Cypress.Commands.add('getAllAccountPhone', () => {
    cy.request({
        method: 'GET',
        url: `${accountPhone}?size=250`,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('getOneAccountPhone', (id) => {
    cy.request({
        method: 'GET',
        url: `${accountPhone}/${id}`,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('putAccountPhone', (fixAccountPhone, id) => {
    cy.request({
        method: 'PUT',
        url: `${accountPhone}/${id}`,
        failOnStatusCode: false,
        body: fixAccountPhone
    });
});

Cypress.Commands.add('deleteAccountPhone', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${accountPhone}/${id}`,
        failOnStatusCode: false,
    });
});