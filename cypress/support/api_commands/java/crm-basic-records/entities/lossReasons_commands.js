const lossReasons = `${Cypress.config('baseUrlLeaf')}/basic_records/apis/lossReasons`

Cypress.Commands.add('getAllLossReasons', () => {
    cy.request({
        url: `${lossReasons}?size=250`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOneLossReasons', (id) => {
    cy.request({
        url: `${lossReasons}/${id}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postLossReasons', (fixEvent) => {
    cy.request({
        method: 'POST',
        url: lossReasons,
        body: fixEvent,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('putLossReasons', (id, fixEvent) => {
    cy.request({
        method: 'PUT',
        url: `${lossReasons}/${id}`,
        body: fixEvent,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('deleteLossReasons', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${lossReasons}/${id}`,
        failOnStatusCode: false
    });
});