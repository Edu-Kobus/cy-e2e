//*** Filtragem por Faixa de CEP ***//

Cypress.Commands.add('fill_zip_range', (cepInicio, cepFinal) => {
    cy.get('#ui-tabpanel-1-label').click()

    cy.get('[id="filtro.ds_address_zip_start"]')
        .type(cepInicio)

    cy.get('[id="filtro.ds_address_zip_end"]')
        .type(`{moveToStart}${ cepFinal }`, { delay: 0 })
});