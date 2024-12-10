const contactOrigin = `${Cypress.config('baseUrlLeaf')}/basic_records/apis/contactOrigin`

Cypress.Commands.add('postContactOrigin', (fixContactOrigin) => {
    cy.request({
        method: 'POST',
        url: contactOrigin,
        failOnStatusCode: false,
        body: fixContactOrigin
    });
});

Cypress.Commands.add('getAllContactOrigin', () => {
    cy.request({
        method: 'GET',
        url: `${contactOrigin}?size=200`,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('getOneContactOrigin', (fixContactOrigin, id) => {
    cy.request({
        method: 'GET',
        url: `${contactOrigin}/${id}`,
        failOnStatusCode: false,
        body: fixContactOrigin
    });
});

Cypress.Commands.add('putContactOrigin', (fixContactOrigin, id) => {
    cy.request({
        method: 'PUT',
        url: `${contactOrigin}/${id}`,
        failOnStatusCode: false,
        body: fixContactOrigin
    });
});

Cypress.Commands.add('deleteContactOrigin', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${contactOrigin}/${id}`,
        failOnStatusCode: false
    });
});