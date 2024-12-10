const sale = 'backend/public/sale'

Cypress.Commands.add('getStarter', (fixStarter) => {
    cy.request({
        url: `${sale}/2`,
        failOnStatusCode: false,
        body: fixStarter
    })
});

Cypress.Commands.add('getAdvanced', (fixAdvanced) => {
    cy.request({
        url: `${sale}/3`,
        failOnStatusCode: false,
        body: fixAdvanced
    })
});

Cypress.Commands.add('getAdvancedAgro', (fixAdvancedAgro) => {
    cy.request({
        url: `${sale}/4`,
        failOnStatusCode: false,
        body: fixAdvancedAgro
    })
});

Cypress.Commands.add('getAdvancedQS', (fixAdvancedQS) => {
    cy.request({
        url: `${sale}/5`,
        failOnStatusCode: false,
        body: fixAdvancedQS
    })
});

Cypress.Commands.add('getAdvancedAgroQS', (fixAdvancedAgroQS) => {
    cy.request({
        url: `${sale}/6`,
        failOnStatusCode: false,
        body: fixAdvancedAgroQS
    })
});