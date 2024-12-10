const carrier = 'backend/public/v2/carriers'

Cypress.Commands.add('getAllCarriers', () => {
    cy.request({
        url: `${carrier}?pageSize=250`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOneCarriers', (id) => {
    cy.request({
        url: `${carrier}/${id}?pageSize=250`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postCarriers', (fixCarriers) => {
    cy.request({
        method: 'POST',
        url: carrier,
        failOnStatusCode: false,
        body: fixCarriers
    })
});

Cypress.Commands.add('putCarriers',  (id, fixCarriers) => {
    cy.request({
        method: 'PUT',
        url: `${carrier}/${id}`,
        failOnStatusCode: false,
        body: fixCarriers
    })
});

Cypress.Commands.add('deleteCarriers', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${carrier}/${id}`,
        failOnStatusCode: false
    })
});