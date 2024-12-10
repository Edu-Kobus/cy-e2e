const serviceCategories = 'backend/public/v2/service-categories'

Cypress.Commands.add('getAllServiceCategoriesV2', () => {
    cy.request({
        url: `${serviceCategories}?pageSize=250`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOneServiceCategoriesV2', (id) => {
    cy.request({
        url: `${serviceCategories}/${id}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postServiceCategoriesV2', (fixServiceCategoriesV2) => {
    cy.request({
        method: 'POST',
        url: serviceCategories,
        failOnStatusCode: false,
        body: fixServiceCategoriesV2
    })
});

Cypress.Commands.add('putServiceCategoriesV2',  (id, fixServiceCategoriesV2) => {
    cy.request({
        method: 'PUT',
        url: `${serviceCategories}/${id}`,
        failOnStatusCode: false,
        body: fixServiceCategoriesV2
    })
});

Cypress.Commands.add('deleteServiceCategoriesV2', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${serviceCategories}/${id}`,
        failOnStatusCode: false
    })
});