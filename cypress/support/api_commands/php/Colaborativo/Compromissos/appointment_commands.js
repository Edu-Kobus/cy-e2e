const appointment = 'backend/public/appointment'

Cypress.Commands.add('getAllAppointmentv1', () => {
    cy.request({
        url: appointment,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOneAppointmentv1', (id) => {
    cy.request({
        url: `${appointment}/${id}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postAppointmentv1', (fixAppointment) => {
    cy.request({
        method: 'POST',
        url: appointment,
        failOnStatusCode: false,
        body: fixAppointment
    })
});

Cypress.Commands.add('putAppointmentv1',  (id, fixAppointment) => {
    cy.request({
        method: 'PUT',
        url: `${appointment}/${id}`,
        failOnStatusCode: false,
        body: fixAppointment
    })
});

Cypress.Commands.add('deleteAppointmentv1', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${appointment}/${id}`,
        failOnStatusCode: false
    })
});