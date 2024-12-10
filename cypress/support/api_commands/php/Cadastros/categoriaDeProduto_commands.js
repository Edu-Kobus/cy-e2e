const serviceCategories = 'backend/public/v2/product-categories'

Cypress.Commands.add('getAllProductCategoriesV2', () => {
    cy.request({
        url: `${serviceCategories}?pageSize=200`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOneProductCategoriesV2', (id) => {
    cy.request({
        url: `${serviceCategories}/${id}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postProductCategoriesV2', (fixProductCategoriesV2) => {
    cy.request({
        method: 'POST',
        url: serviceCategories,
        failOnStatusCode: false,
        body: fixProductCategoriesV2
    })
});

Cypress.Commands.add('putProductCategoriesV2',  (id, fixProductCategoriesV2) => {
    cy.request({
        method: 'PUT',
        url: `${serviceCategories}/${id}`,
        failOnStatusCode: false,
        body: fixProductCategoriesV2
    })
});

Cypress.Commands.add('deleteProductCategoriesV2', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${serviceCategories}/${id}`,
        failOnStatusCode: false
    })
});