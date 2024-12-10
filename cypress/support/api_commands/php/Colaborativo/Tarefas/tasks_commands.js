const tasks = 'backend/public/v2/tasks'

Cypress.Commands.add('getAllTasksV2', () => {
    cy.request({
        url: `${tasks}?pageSize=250`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOneTasksV2', (id) => {
    cy.request({
        url: `${tasks}/${id}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postTasksV2', (fixAppointment) => {
    cy.request({
        method: 'POST',
        url: tasks,
        failOnStatusCode: false,
        body: fixAppointment
    })
});

Cypress.Commands.add('putTasksV2',  (id, fixAppointment) => {
    cy.request({
        method: 'PUT',
        url: `${tasks}/${id}`,
        failOnStatusCode: false,
        body: fixAppointment
    })
});

Cypress.Commands.add('deleteTasksV2', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${tasks}/${id}`,
        failOnStatusCode: false
    })
});