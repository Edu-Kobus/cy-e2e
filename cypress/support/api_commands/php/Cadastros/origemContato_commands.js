const contactOrigin = 'backend/public/v2/contact-origin'

Cypress.Commands.add('getAllContactOriginV2', () => {
    cy.request({
        url: `${contactOrigin}?pageSize=250`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOneContactOriginV2', (id) => {
    cy.request({
        url: `${contactOrigin}/${id}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postContactOriginV2', (fixContactOriginV2) => {
    cy.request({
        method: 'POST',
        url: contactOrigin,
        failOnStatusCode: false,
        body: fixContactOriginV2
    })
});

Cypress.Commands.add('putContactOriginV2',  (id, fixContactOriginV2) => {
    cy.request({
        method: 'PUT',
        url: `${contactOrigin}/${id}`,
        failOnStatusCode: false,
        body: fixContactOriginV2
    })
});

Cypress.Commands.add('deleteContactOriginV2', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${contactOrigin}/${id}`,
        failOnStatusCode: false
    })
});