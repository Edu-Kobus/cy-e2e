const characteristics = 'backend/public/v2/characteristics'

Cypress.Commands.add('getAllCharacteristicsV2', () => {
    cy.request({
        url: `${characteristics}?pageSize=250`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOneCharacteristicsV2', (id) => {
    cy.request({
        url: `${characteristics}/${id}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postCharacteristicsV2', (fixCharacteristicsV2) => {
    cy.request({
        method: 'POST',
        url: characteristics,
        failOnStatusCode: false,
        body: fixCharacteristicsV2
    })
});

Cypress.Commands.add('putCharacteristicsV2',  (id, fixCharacteristicsV2) => {
    cy.request({
        method: 'PUT',
        url: `${characteristics}/${id}`,
        failOnStatusCode: false,
        body: fixCharacteristicsV2
    })
});

Cypress.Commands.add('deleteCharacteristicsV2', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${characteristics}/${id}`,
        failOnStatusCode: false
    })
});