const characteristicsHierarchy = 'backend/public/v2/characteristics-hierarchy'

Cypress.Commands.add('getAllCharacteristicsHierarchyV2', () => {
    cy.request({
        url: `${characteristicsHierarchy}?pageSize=250`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOneCharacteristicsHierarchyV2', (id) => {
    cy.request({
        url: `${characteristicsHierarchy}/${id}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postCharacteristicsHierarchyV2', (fixCharacteristicsHierarchyV2) => {
    cy.request({
        method: 'POST',
        url: characteristicsHierarchy,
        failOnStatusCode: false,
        body: fixCharacteristicsHierarchyV2
    })
});

Cypress.Commands.add('putCharacteristicsHierarchyV2',  (id, fixCharacteristicsHierarchyV2) => {
    cy.request({
        method: 'PUT',
        url: `${characteristicsHierarchy}/${id}`,
        failOnStatusCode: false,
        body: fixCharacteristicsHierarchyV2
    })
});

Cypress.Commands.add('deleteCharacteristicsHierarchyV2', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${characteristicsHierarchy}/${id}`,
        failOnStatusCode: false
    })
});