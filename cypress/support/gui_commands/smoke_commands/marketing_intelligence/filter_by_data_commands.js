//*** Preencher Filtros  ***//

Cypress.Commands.add('type_razao_social', (razaoSocial) => {
    cy.get('[id="filtro.ds_company_name"]').type(razaoSocial)
});

Cypress.Commands.add('type_cnpj', (cnpj) => {
    cy.get('[id="filtro.id_receita_companies"]')
        .first()
        .type(cnpj)
});

Cypress.Commands.add('select_seg_atividade', (segAtividade) => {
    cy.get('[id="filtro.id_cnae_section"]')
        .click()

    cy.get('.ui-widget .ui-dropdown-items p-dropdownitem')
        .contains(segAtividade)
        .click()
});

Cypress.Commands.add('select_sub_segmento', (subSeg) => {
    cy.get('[id="filtro.companies.id_cnae_division"]')
        .click()

    cy.get('.ui-dropdown-item')
        .contains(subSeg)
        .click()
    
    cy.wait(100)

    cy.get('[id="filtro.companies.id_cnae_division"] .ui-dropdown-trigger')
        .click()
});

Cypress.Commands.add('interceptCnaeMainCache', () => {
    cy.intercept('POST', '**/cnaeMainCache').as('cnaeMainCache')
})

Cypress.Commands.add('type_cnae_principal', (cnaePrincipal) => {
    cy.get('[id="filtro.principal_cnae"]').type(cnaePrincipal)

    cy.wait('@cnaeMainCache')
        .its('response.statusCode')
        .should('equal', 200)

    cy.get('.ui-autocomplete-list-item')
        .first()
        .click({force:true})
});

Cypress.Commands.add('select_natureza_juridica', (natJuridica) => {
    cy.get('[id="filtro.di_cod_legal_nature"]')
        .first()
        .click()

    cy.get('.ui-dropdown-item')
        .contains(natJuridica)
        .click()

    cy.get('[id="filtro.di_cod_legal_nature"] div[aria-haspopup="listbox"]').click()
    cy.wait(1000)
});

Cypress.Commands.add('check_class_nat_juridica', (classNat) => {
    cy.get('[id="companies.id_cod_subclass_legal_nature"] .ui-dropdown-trigger')
        .click()

    cy.get('.ui-dropdown-items')
        .contains(classNat)
        .click()
});

Cypress.Commands.add('select_capital_social', (capitalSocial) => {
    cy.get('[id="filtro.di_startup_capital_operator_simbol"]')
        .click()

    cy.get(`[aria-label="${ capitalSocial }"]`)
        .click()
});

Cypress.Commands.add('type_valor',(valor) => {
    cy.get('[class="ui-inputgroup"] [class*="ui-inputtext"]')
        .type(`${ valor }`)
});

Cypress.Commands.add('select_porte_empresa',(porteEmpresa) => {
    cy.get('[id="filtro.id_company_size"]').click()
    cy.get(`[aria-label="${ porteEmpresa }"]`).click()
});

Cypress.Commands.add('select_data_inicio', (dataInicio) => {
    cy.get('[class$="ui-calendar-w-btn"]')
        .first()
        .type(`${ dataInicio }`)
});

Cypress.Commands.add('select_data_fim',() => {
    cy.get('[class$="ui-calendar-w-btn"]')
        .last()
        .click()

    cy.get(".ui-calendar-button")
        .last()
        .click()
});