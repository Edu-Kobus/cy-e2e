Cypress.Commands.add('selectCategory', () => {
    cy.get('#categoria_produto').click()
});

Cypress.Commands.add('selectUnit', () => {
    cy.get('#unidade_medida').click()
});

Cypress.Commands.add('typeQuantity', (qtdDefault) => {
    cy.get('#quantidade_padrao').type(`${ qtdDefault }`)
});

Cypress.Commands.add('typeSalePrice', (salePrice) => {
    cy.get('#preco_venda').type(`${ salePrice }`)
});

Cypress.Commands.add('typeMaxDiscount', (maxDiscount) => {
    cy.get('#desconto_maximo').type(`${ maxDiscount }`)
});

Cypress.Commands.add('typeCorrectionFactor', (correctionFactor) => {
    cy.get('#fator_correcao').type(`${ correctionFactor }`)
});

Cypress.Commands.add('typeIpi', (ipi) => {
    cy.get('#ipi').type(`${ ipi }`)
});

Cypress.Commands.add('typeIcms', (icms) => {
    cy.get('#icms').type(`${ icms }`)
});
Cypress.Commands.add('typeWeight', (wight) => {
    cy.get('#peso').type(`${ wight }`)
});

Cypress.Commands.add('typeNote', (note) => {
    cy.get('#observacoes').type(`${ note }`)
});

Cypress.Commands.add('selectOportunityType', () => {
    cy.get('.ui-select-container > :nth-child(1) > .ui-select-search').click()
});