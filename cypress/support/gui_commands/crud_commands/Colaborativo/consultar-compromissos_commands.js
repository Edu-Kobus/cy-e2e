const user = require('../../../../fixtures/Frontend/Smoke/user.json')

Cypress.Commands.add('interceptRecurrence', () => {
    cy.intercept('GET', '/backend/public/appointment-recurrence?filtros*').as('getRecurrence')
});

Cypress.Commands.add('waitRecurrence', () => {
    cy.wait('@getRecurrence')
        .its('response.statusCode')
        .should('equal', 200)
});

Cypress.Commands.add('interceptAttendees', () => {
    cy.intercept('GET', '/backend/public/appointment-attendees*').as('getAttendees')
});

Cypress.Commands.add('waitAttendees', () => {
    cy.wait('@getAttendees')
        .its('response.statusCode')
        .should('equal', 200)
});

Cypress.Commands.add('requestConfirmation', () => {
    cy.get('[name*="solicita_aceite"]').first().click()
});

Cypress.Commands.add('confirmSendEmail', () => {
    cy.get('[name*="notificar_email"]').first().click()
});

Cypress.Commands.add('typeSubject', (subject) => {
    cy.get('#assunto')
        .clear()
        .type(`${ subject }`, { delay: 0 })
        .should('have.value', `${ subject }`)
});

Cypress.Commands.add('searchAppointment', (idPrograma) => {
    cy.get(`.acoes-lista-${ user.programas[idPrograma].id }[reg="${ Cypress.env("idRegistro") }"]`).click()
    cy.get(`a[acao="Remover"][reg="${ Cypress.env("idRegistro") }"]`).click({force: true})

});

Cypress.Commands.add('typeReasonCancellation', (reason) => {
    cy.get('#justificativaCancelamento')
        .type(`${ reason }`, { delay: 0 })
});

Cypress.Commands.add('confirmCancellation', (content) => {
    cy.get('.modal-footer .btn')
        .contains(`${ content }`)
        .click()
});

Cypress.Commands.add('interceptDelete', (idLista) => {
    cy.intercept('DELETE', `/backend/public${ user.listas[idLista].url }/*`).as('deleteReg')
});

Cypress.Commands.add('waitDelete', () => {
    cy.wait('@deleteReg')
    .its('response.statusCode')
    .should('equal', 204)
})