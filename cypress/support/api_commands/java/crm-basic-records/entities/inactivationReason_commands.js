let basic_record = `${Cypress.config('baseUrlLeaf')}/basic_records/apis/inactivationReason`

Cypress.Commands.add('getAllInactivationReason', () => {
    cy.request({
        url: `${basic_record}?size=250`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOneInactivationReason', (id) => {
    cy.request({
        url: `${basic_record}/${id}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postInactivationReason', (fixInactivationReason) => {
    cy.request({
        method: 'POST',
        url: basic_record,
        body: fixInactivationReason,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('putInactivationReason', (id, fixInactivationReason) => {
    cy.request({
        method: 'PUT',
        url: `${basic_record}/${id}`,
        body: fixInactivationReason,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('deleteInactivationReason', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${basic_record}/${id}`,
        failOnStatusCode: false
    });
});