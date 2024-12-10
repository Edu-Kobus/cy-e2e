Cypress.Commands.add('descriptionRegister', (registerName) => {
    cy.get('#descricao')
        .type(`{selectAll}{backspace}${registerName}`)
        .should('have.value', registerName)
})

Cypress.Commands.add('typeInitial', (initial) => {
    cy.get('#abreviatura').type(initial)
})

Cypress.Commands.add('typeScientific', (name) => {
    cy.get('#nome_cientifico')
        .type(name)
        .should('have.value', name)
})

