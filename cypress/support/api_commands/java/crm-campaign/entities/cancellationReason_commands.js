const cancellationReason = `${Cypress.config('baseUrlLeaf')}/campaign/entities/cancellationReason`

Cypress.Commands.add('postCancellationReason', (fixture) => {
    cy.request({
        method: 'POST',
        url: cancellationReason,
        body: fixture,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('getAllCancellationReason', (id) => {
    cy.request({
        method: 'GET',
        url: `${cancellationReason}?filter=id eq '${id}'`,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('getOneCancellationReason', (fixture, id) => {
    cy.request({
        method: 'GET',
        url: `${cancellationReason}/${id}`,
        body: fixture,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('putCancellationReason', (fixture, id) => {
    cy.request({
        method: 'PUT',
        url: `${cancellationReason}/${id}`,
        body: fixture,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('deleteCancellationReason', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${cancellationReason}/${id}`,
        failOnStatusCode: false
    });
});