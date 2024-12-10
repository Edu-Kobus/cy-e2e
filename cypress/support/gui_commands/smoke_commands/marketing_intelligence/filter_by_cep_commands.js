//** Filtrar por CEP Único */

Cypress.Commands.add('fill_zip_single', (cepUnico) => {
    cy.get('#ui-tabpanel-2-label').click()

    cy.get('[id="filtro.ds_address_zip_start_fixed"]')
        .type(cepUnico)
});

Cypress.Commands.add('last_paginated', () => {
    cy.get('a[class^="ui-paginator-last"]').click()
});

Cypress.Commands.add('list_visible', () => {
    cy.get('[id="painel_tabela"]').should('be.visible')
});

Cypress.Commands.add('maps_visible', () => {
    cy.get('[id="painel_mapa"]').should('be.visible')
});