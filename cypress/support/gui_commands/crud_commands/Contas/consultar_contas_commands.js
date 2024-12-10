Cypress.Commands.add('interceptAccountDefinition', () => {
    cy.intercept('GET', '/backend/public/account-definitions*').as('getAccountDefinitions')
});

Cypress.Commands.add('waitAccountDefinition', () => {
    cy.wait('@getAccountDefinitions')
        .its('response.statusCode')
        .should('equal', 200)
});

Cypress.Commands.add('typeIE', (ie) => {
    cy.get('#inscricao_estadual').type(`${ie}`, { delay: 0 })
});

Cypress.Commands.add('typeIM', (im) => {
    cy.get('#inscricao_municipal').type(`${im}`, { delay: 0 })
});

Cypress.Commands.add('typeEmployees', (employees) => {
    cy.get('#funcionarios').type(`{backspace}${employees}`, { delay: 0 })
});

Cypress.Commands.add('selectCompanyGroup',  () => {
    cy.get('#grupo_empresa .btn-default').click()
});

Cypress.Commands.add('selectCompanySize',  () => {
    cy.get('#porte_empresa .btn-default').click()
});

Cypress.Commands.add('clickSelectCompanySize',  () => {
    cy.get('[class="ui-select-choices-row-inner"]')
      .contains("Grande")
      .click()
  })

Cypress.Commands.add('typeAnnualRecipe', (recipe) => {
    cy.get('#receita_anual').type(`${recipe}`, { delay: 0 })
});

Cypress.Commands.add('typeEmailGeneral', (emailGeneral) => {
    cy.get('[name="email_geral"]')
        .type(`${ emailGeneral }`, { delay: 0 })
});

Cypress.Commands.add('typeEmailFinance', (emailFinance) => {
    cy.get('[name="email_financeiro"]')
        .type(`${ emailFinance }`, { delay: 0 })
});

Cypress.Commands.add('assertRegisterTimeline', (qtdRegisterTimeLine) => {
    cy.get('[class*="timeline-counter"]')
      .last()
      .should('have.text', `${qtdRegisterTimeLine}`)
});

Cypress.Commands.add('assertTitleTimeLine', () => {
    cy.get('h4[class^="timeline-title"]')
});

Cypress.Commands.add('clickKindPerson', (person) => {
    cy.get('[name="tipo_pessoa"]')
      .contains(`${ person }`)
      .click()
});

Cypress.Commands.add('typeCpf', (cpf) => {
    cy.get('#cpf').type(`${ cpf }`, { delay: 0 })
});

Cypress.Commands.add('typeRg', (rg) => {
    cy.get('#rg').type(`${ rg }`, { delay: 0 })
});

Cypress.Commands.add('typeBirthDate', (date) => {
    cy.get('#data_nascimento')
        .type(`${ date }`, { delay: 0 })
});

Cypress.Commands.add('typeIdErp', (idErp) => {
    cy.get('#id_erp')
        .type(`${ idErp }`, { delay: 0 })
});

Cypress.Commands.add('validateFillFields', (name, ie, im, group, size, branch, origin) => {
    cy.get('#nome').should('have.value', `${ name }`)
    cy.get('#inscricao_estadual').should('have.value', `${ ie }`)
    cy.get('#inscricao_municipal').should('have.value', `${ im }`)
    cy.get('#grupo_empresa').contains(`${ group }`)
    cy.get('#porte_empresa').contains(`${ size  }`)
    cy.get('#ramo_atividade').contains(`${ branch }`)
    cy.get('#origem').contains(`${ origin }`)
});

Cypress.Commands.add('validateFillFieldsEdit', (rg, birthDate) => {
    cy.get('#rg').should('have.value', `${ rg  }`)
    cy.get('#data_nascimento').should('have.value', `${ birthDate }`)
});