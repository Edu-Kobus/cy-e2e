const cities = `${Cypress.config('baseUrlLeaf')}/basic_records/apis/cities`

Cypress.Commands.add('postCities', (fixCities) => {
    cy.request({
        method: 'POST',
        url: cities,
        failOnStatusCode: false,
        body: fixCities
    });
});

Cypress.Commands.add('getAllCities', () => {
    cy.request({
        method: 'GET',
        url: cities,
        failOnStatusCode: false,
        timeout: 20000
    });
});

Cypress.Commands.add('getOneCities', (id) => {
    cy.request({
        method: 'GET',
        url: `${cities}/${id}`,
        failOnStatusCode: false,
    });
});

Cypress.Commands.add('putCities', (fixCities, id) => {
    cy.request({
        method: 'PUT',
        url: `${cities}/${id}`,
        failOnStatusCode: false,
        body: fixCities
    });
});

Cypress.Commands.add('deleteCities', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${cities}/${id}`,
        failOnStatusCode: false
    });
});