//*** Visualizar lista ***//

Cypress.Commands.add('view_page',() => {
    cy.get('[id="filtro.btn_view_on_screen"]')
        .last()
        .click({ force: true })
});

//*** interceptar carregamento da listagem ***//
Cypress.Commands.add('interceptListCompanies',  () => {
    cy.intercept('POST', '**/listCompanies').as('postListCompanies')
});

Cypress.Commands.add('interceptLogListConsult',  () => {
    cy.intercept('POST', '**/logListConsult').as('logListConsult')
});

//*** aguardar carregamento da listagem ***//
Cypress.Commands.add('waitListCompanies', () => {
    cy.wait('@postListCompanies')
    .its('response.statusCode')
    .should('eq', 200)
});

Cypress.Commands.add('waitLogListConsult',() => {
    cy.wait('@logListConsult').then((res) => {
        expect(res.response.statusCode).to.eq(200)
        expect(res.body).to.not.null
    })
});

Cypress.Commands.add('load_page',() => {
    cy.waitListCompanies()
    cy.waitLogListConsult()
});

//*** Selecionar todos checkbox exibidos na lista ***//
Cypress.Commands.add('check_all',  () => {
    cy.get('[id="prime_checkbox_select_all"]')
        .click()
        .find('span')
        .should('to.have.class', 'pi-check')        
});

Cypress.Commands.add('verify_check_disable',  () => {
    cy.get('[class*="ui-table-tbody"] [role="checkbox"]')
        .should('have.class', 'ui-state-default')
        .and('not.have.class', 'pi-check')
});

Cypress.Commands.add('verify_status_exist',  () => {
    cy.get('[class*="ui-table-tbody"] [class*="customer-badge"]').should(($status) => {
        expect($status).to.contain('Exportado')
        expect($status).to.contain('Já existente no ')
        expect($status).to.contain('Não exportado')
    })  
});

//*** Limpar Filtros ***//
Cypress.Commands.add('clear_filter', () => {
    cy.get('[id="filtro.btn_clear"]')
        .last()    
        .click()

    cy.get('.ui-g-12').should('have.value', '')
});