const endpoint = `${Cypress.config('baseUrlLeaf')}/basic_records/apis/carrier`

Cypress.Commands.add('postCarrier', (fixCarrier) => {
    cy.request({
        method: 'POST',
        url: endpoint,
        failOnStatusCode: false,
        body: fixCarrier
    });
});

Cypress.Commands.add('getAllCarrier', (fixCarrier) => {
    cy.request({
        method: 'GET',
        url: `${endpoint}?size=250`,
        failOnStatusCode: false,
        body: fixCarrier
    });
});

Cypress.Commands.add('getOneCarrier', (fixCarrier, id) => {
    cy.request({
        method: 'GET',
        url: `${endpoint}/${id}`,
        failOnStatusCode: false,
        body: fixCarrier
    });
});

Cypress.Commands.add('deleteCarrier', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${endpoint}/${id}`,
        failOnStatusCode: false
    });
});