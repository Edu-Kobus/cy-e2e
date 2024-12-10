const accountInterestAreas = `${Cypress.config('baseUrlLeaf')}/account/apis/accountInterestAreas`

Cypress.Commands.add('postAccountInterestAreas', (fixAccountInterestAreas) => {
    cy.request({
        method: 'POST',
        url: accountInterestAreas,
        failOnStatusCode: false,
        body: fixAccountInterestAreas
    });
});

Cypress.Commands.add('getAllAccountInterestAreas', () => {
    cy.request({
        method: 'GET',
        url: `${accountInterestAreas}?size=250`,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('getOneAccountInterestAreas', (id) => {
    cy.request({
        method: 'GET',
        url: `${accountInterestAreas}/${id}`,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('putAccountInterestAreas', (fixAccountInterestAreas, id) => {
    cy.request({
        method: 'PUT',
        url: `${accountInterestAreas}/${id}`,
        failOnStatusCode: false,
        body: fixAccountInterestAreas
    });
});

Cypress.Commands.add('deleteAccountInterestAreas', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${accountInterestAreas}/${id}`,
        failOnStatusCode: false,
    });
});