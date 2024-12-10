//** Filtragem por Região */

Cypress.Commands.add('select_estado',(estado) => {
    cy.get('[id="filtro.ds_address_state_province_short_name"]')
        .click()

    cy.get('[class*="ui-multiselect-filter-container"] [class*=ui-state-default]')
        .type(estado)

    cy.get(`[aria-label="${ estado }"]`)
        .click()

    cy.get('.ui-multiselect-close > .pi')
        .last()
        .click()
});

Cypress.Commands.add('select_cidade', (cidade) => {
    cy.get('[id="filtro.ds_address_county"]')
        .type(cidade)

    cy.get('.ui-multiselect-item')
        .last()
        .click()

    cy.get('.ui-multiselect-close > .pi').click()
});

Cypress.Commands.add('type_bairro', (bairro) => {
    cy.get('[id="filtro.ds_address_district"]')
        .type(bairro)
});

Cypress.Commands.add('type_endereco',(endereco) => {
    cy.get('[id="filtro.ds_address"]')
        .type(endereco)
});