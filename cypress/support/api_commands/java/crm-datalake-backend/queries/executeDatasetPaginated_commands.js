const query = `${Cypress.config('baseUrlLeaf')}/platform/dataset/queries`

Cypress.Commands.add('postExecuteDataset', (fixDataset) => {
    cy.request({
        method: 'POST',
        url: `${query}/executeDatasetPaginated`,
        failOnStatusCode: false,
        body: fixDataset
    })
});