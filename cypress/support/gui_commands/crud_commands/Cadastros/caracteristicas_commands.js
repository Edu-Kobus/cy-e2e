Cypress.Commands.add('newDependent',  (nameDependency) => {
    cy.intercept('POST', 'backend/public/characteristics').as('postCharacDependency')

    cy.get('button#novoRegistro').click()

    cy.get('[class*="col-sm-9"] #nome').type(nameDependency, { delay: 0 })
    cy.get('[id="body_277"] [id="submit"]').click()
    cy.wait('@postCharacDependency')
});

Cypress.Commands.add('removeDependent',  () => {
    cy.get('[data-title*="Ações"] button').click()
    cy.get('[acao="Remover"]').last().click({force: true})
    cy.get('button[data-bb-handler="confirm"]').click()
});