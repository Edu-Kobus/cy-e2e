Cypress.Commands.add('typeEmail', (emailGeneral) => {
    cy.get('#email_geral')
        .type(`${ emailGeneral }`, { delay: 0 })

    cy.get('#email_geral').should('have.value', `${ emailGeneral }`)
});

Cypress.Commands.add('typePhone', (phoneNumber) => {
    cy.get('.input [id$="telefone"]')
        .last()
        .type(`${ phoneNumber }`, { delay: 0 })
        
    cy.get('.input [id$="telefone"]').should('have.value', `${ phoneNumber }`)
});

Cypress.Commands.add('typeCep', (cepNumber) => {
    cy.get('#cep')
        .type(`${ cepNumber }`, { delay: 0 })

    cy.get('#cep').should('have.value', `${ cepNumber }`)
});

Cypress.Commands.add('searchCep', () => {
    cy.get('.input-group-btn [title="Buscar Endereço"]').click()
    cy.wait(2000)
});

Cypress.Commands.add('typeNumber', (addressNumber) => {
    cy.get('#numero')
        .type(`${ addressNumber }`, { delay: 0 })

    cy.get('#numero').should('have.value', `${ addressNumber }`)
});