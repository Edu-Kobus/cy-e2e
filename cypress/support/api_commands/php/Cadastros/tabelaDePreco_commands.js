const priceTable = 'backend/public/v2/price-table'

Cypress.Commands.add('getAllPriceTableV2', () => {
    cy.request({
        url: priceTable,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOnePriceTableV2', (id) => {
    cy.request({
        url: `${priceTable}/${id}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postPriceTableV2', (fixPriceTableV2) => {
    cy.request({
        method: 'POST',
        url: priceTable,
        failOnStatusCode: false,
        body: fixPriceTableV2
    })
});

Cypress.Commands.add('putPriceTableV2',  (id, fixPriceTableV2) => {
    cy.request({
        method: 'PUT',
        url: `${priceTable}/${id}`,
        failOnStatusCode: false,
        body: fixPriceTableV2
    })
});

Cypress.Commands.add('deletePriceTableV2', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${priceTable}/${id}`,
        failOnStatusCode: false
    })
});