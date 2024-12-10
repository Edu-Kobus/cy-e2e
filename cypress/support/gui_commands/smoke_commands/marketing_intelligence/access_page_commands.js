//** Acessar página MKT INT */

Cypress.Commands.add('visit_page_mkt_int', (page_access) => {
    cy.visit(`${Cypress.config('baseUrlLeafMkt')}${page_access}`)
});

Cypress.Commands.add('interceptLegalNatureCache', () => {
    cy.intercept('POST', '**/legalNatureCache').as('postLegalNatureCache')
});

Cypress.Commands.add('interceptSegmentCnaeCache', () => {
    cy.intercept('POST', '**/segmentCnaeCache').as('postSegmentCnaeCache')
});

Cypress.Commands.add('interceptSubsegmentCnaeCache', () => {
    cy.intercept('POST', '**/subsegmentCnaeCache').as('postSubsegmentCnaeCache')
});

Cypress.Commands.add('waitLegalNatureCache', () => {
    cy.wait('@postLegalNatureCache')
        .its('response.statusCode')
        .should('eq', 200)
});

Cypress.Commands.add('waitSegmentCnaeCache', () => {
    cy.wait('@postSegmentCnaeCache')
        .its('response.statusCode')
        .should('eq', 200)
});

Cypress.Commands.add('waitSubsegmentCnaeCache', () => {
    cy.wait('@postSubsegmentCnaeCache')
        .its('response.statusCode')
        .should('eq', 200)
});

//** Esconder instruções de uso */
Cypress.Commands.add('hide_instructions', () => {
    cy.get('.ui-button-text-only').click()
});