const appointment = `${Cypress.config('baseUrlLeaf')}/collaborative/apis/appointment`

Cypress.Commands.add('postAppointment', (fixAppointment) => {
    cy.request({
        method: 'POST',
        url: appointment,
        body: fixAppointment,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('getAllAppointment', () => {
    cy.request({
        method: 'GET',
        url: `${appointment}?size=250`,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('getOneAppointment', (fixAppointment, id) => {
    cy.request({
        method: 'GET',
        url: `${appointment}/${id}`,
        body: fixAppointment,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('putAppointment', (fixAppointment, id) => {
    cy.request({
        method: 'PUT',
        url: `${appointment}/${id}`,
        body: fixAppointment,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('deleteAppointment', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${appointment}/${id}`,
        failOnStatusCode: false
    });
});