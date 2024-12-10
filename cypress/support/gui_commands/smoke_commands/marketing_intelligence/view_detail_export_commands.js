//*** Visualizar Detalhe da Exportação ***//

Cypress.Commands.add('export_detail_one',  () => {
    cy.get('[class*="s-button-text"]')
        .contains('Ver registro selecionado')
        .click()

    cy.get('div[role="dialog"]').should('be.visible')
});

Cypress.Commands.add('export_detail',  (label) => {
    cy.get('[class*="s-button-text"]')
        .contains(label)
        .click()

    cy.get('div[role="dialog"]').should('be.visible')
});

Cypress.Commands.add('retrieve_account',  (messageNoAccount) => {
    cy.get('.ui-table-tbody button[class*="s-button-with-icon"]')
        .first()
        .click()
        
    cy.get('[class*="noElement"]').contains(messageNoAccount)
});

Cypress.Commands.add('add_account',  (messageAddAccount) => {
    cy.get('[class="row footer"] button')
        .first()
        .click()

    cy.get('.ui-toast-message-content').contains(messageAddAccount)
});

Cypress.Commands.add('close_export_detail',  () => {
    cy.get('[role="button"] [class*="pi-times"]').click()
});

Cypress.Commands.add('status_account_exist',  () => {
    cy.get('[class*="ui-table-tbody"] [class*="customer-badge"]')
        .contains('Exportado')
});