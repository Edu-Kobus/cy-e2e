Cypress.Commands.add('selectAddressType', () => {
    cy.get('#tipo_endereco')
        .click()

    cy.wait(3000)

    cy.get('.ui-select-choices-row-inner')
        .first()
        .click({ force: true })
});

Cypress.Commands.add('searchCepAddress', () => {
    cy.intercept('GET', '**/select-options?*').as('getSelectOptions')

    cy.get('#cep').type('89012-001')
    cy.get('#cep').should('have.value', '89012-001')

    cy.get('.input-group-btn [title="Buscar Endereço"]').click()

    cy.wait('@getSelectOptions')
        .its('response.statusCode')
        .should('equal', 200)

    cy.wait(1000)
});

Cypress.Commands.add('fillNumber', () => {
    cy.get('#numero').type('100')
    cy.get('#numero').should('have.value', '100')
});

Cypress.Commands.add('inactiveRegister', () => {
    cy.get('[value="0"] > .ng-binding').click()
});