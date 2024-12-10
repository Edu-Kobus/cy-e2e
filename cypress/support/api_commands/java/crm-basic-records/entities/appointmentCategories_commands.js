const AppointmentCategories = `${Cypress.config('baseUrlLeaf')}/basic_records/apis/appointmentCategories`

Cypress.Commands.add('postAppointmentCategories', (fixCompany) => {
    cy.request({
        method: 'POST',
        url: AppointmentCategories,
        failOnStatusCode: false,
        body: fixCompany
    });
});

Cypress.Commands.add('getAllAppointmentCategories', (fixCompany) => {
    cy.request({
        method: 'GET',
        url: `${AppointmentCategories}?size=250`,
        failOnStatusCode: false,
        body: fixCompany
    });
});

Cypress.Commands.add('getOneAppointmentCategories', (fixCompany, id) => {
    cy.request({
        method: 'GET',
        url: `${AppointmentCategories}/${id}`,
        failOnStatusCode: false,
        body: fixCompany
    });
});

Cypress.Commands.add('putAppointmentCategories', (fixCompany, id) => {
    cy.request({
        method: 'PUT',
        url: `${AppointmentCategories}/${id}`,
        failOnStatusCode: false,
        body: fixCompany
    });
});

Cypress.Commands.add('deleteAppointmentCategories', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${AppointmentCategories}/${id}`,
        failOnStatusCode: false
    });
});