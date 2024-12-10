const taskCategories = 'backend/public/v2/task-categories'

Cypress.Commands.add('getAllTaskCategories', () => {
    cy.request({
        url: `${taskCategories}?pageSize=250`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOneTaskCategories', (id) => {
    cy.request({
        url: `${taskCategories}/${id}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postTaskCategories', (fixTaskCategories) => {
    cy.request({
        method: 'POST',
        url: taskCategories,
        failOnStatusCode: false,
        body: fixTaskCategories
    })
});

Cypress.Commands.add('putTaskCategories',  (id, fixTaskCategories) => {
    cy.request({
        method: 'PUT',
        url: `${taskCategories}/${id}`,
        failOnStatusCode: false,
        body: fixTaskCategories
    })
});

Cypress.Commands.add('deleteTaskCategories', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${taskCategories}/${id}`,
        failOnStatusCode: false
    })
});