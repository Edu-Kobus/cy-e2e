const states = `${Cypress.config('baseUrlLeaf')}/basic_records/apis/states`

Cypress.Commands.add('getAllStates', () => {
    cy.request({
        url: `${states}?size=250`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOneStates', (id) => {
    cy.request({
        url: `${states}/${id}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postStates', (fixState) => {
    cy.request({
        method: 'POST',
        url: states,
        body: fixState,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('putStates', (id, fixState) => {
    cy.request({
        method: 'PUT',
        url: `${states}/${id}`,
        body: fixState,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('deleteStates', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${states}/${id}`,
        failOnStatusCode: false
    });
});