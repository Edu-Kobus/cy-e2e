const basic_record = `${Cypress.config('baseUrlLeaf')}/basic_records/apis/measurementUnit`

Cypress.Commands.add('getAllMeasurementUnit', () => {
    cy.request({
        url: `${basic_record}?size=250`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOneMeasurementUnit', (id) => {
    cy.request({
        url: `${basic_record}/${id}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postMeasurementUnit', (fixEvent) => {
    cy.request({
        method: 'POST',
        url: basic_record,
        body: fixEvent,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('putMeasurementUnit', (id, fixEvent) => {
    cy.request({
        method: 'PUT',
        url: `${basic_record}/${id}`,
        body: fixEvent,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('deleteMeasurementUnit', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${basic_record}/${id}`,
        failOnStatusCode: false
    });
});