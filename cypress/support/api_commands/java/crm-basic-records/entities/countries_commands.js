const countries = `${Cypress.config('baseUrlLeaf')}/basic_records/apis/countries`

Cypress.Commands.add('postCountries', (fixCompany) => {
    cy.request({
        method: 'POST',
        url: countries,
        failOnStatusCode: false,
        body: fixCompany
    });
});

Cypress.Commands.add('getAllCountries', (fixCompany) => {
    cy.request({
        method: 'GET',
        url: `${countries}?size=250`,
        failOnStatusCode: false,
        body: fixCompany
    });
});

Cypress.Commands.add('getOneCountries', (fixCompany, id) => {
    cy.request({
        method: 'GET',
        url: `${countries}/${id}`,
        failOnStatusCode: false,
        body: fixCompany
    });
});

Cypress.Commands.add('putCountries', (fixCompany, id) => {
    cy.request({
        method: 'PUT',
        url: `${countries}/${id}`,
        failOnStatusCode: false,
        body: fixCompany
    });
});

Cypress.Commands.add('deleteCountries', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${countries}/${id}`,
        failOnStatusCode: false
    });
});