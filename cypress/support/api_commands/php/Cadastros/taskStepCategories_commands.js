const taskStepCategories = 'backend/public/v2/task-step-categories'

Cypress.Commands.add('getAllTaskStepCategories', () => {
    cy.request({
        url: `${taskStepCategories}?pageSize=250`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOneTaskStepCategories', (id) => {
    cy.request({
        url: `${taskStepCategories}/${id}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postTaskStepCategories', (fixTaskStepCategories) => {
    cy.request({
        method: 'POST',
        url: taskStepCategories,
        failOnStatusCode: false,
        body: fixTaskStepCategories
    })
});

Cypress.Commands.add('putTaskStepCategories',  (id, fixTaskStepCategories) => {
    cy.request({
        method: 'PUT',
        url: `${taskStepCategories}/${id}`,
        failOnStatusCode: false,
        body: fixTaskStepCategories
    })
});

Cypress.Commands.add('deleteTaskStepCategories', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${taskStepCategories}/${id}`,
        failOnStatusCode: false
    })
});