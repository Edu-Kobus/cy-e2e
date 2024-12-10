const activityBranches = 'backend/public/v2/activity-branches'

Cypress.Commands.add('getAllActivityBranchesV2', () => {
    cy.request({
        url: `${activityBranches}?pageSize=250`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('getOneActivityBranchesV2', (id) => {
    cy.request({
        url: `${activityBranches}/${id}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('postActivityBranchesV2', (fixture) => {
    cy.request({
        method: 'POST',
        url: activityBranches,
        failOnStatusCode: false,
        body: fixture
    })
});

Cypress.Commands.add('putActivityBranchesV2',  (id, fixture) => {
    cy.request({
        method: 'PUT',
        url: `${activityBranches}/${id}`,
        failOnStatusCode: false,
        body: fixture
    })
});

Cypress.Commands.add('deleteActivityBranchesV2', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${activityBranches}/${id}`,
        failOnStatusCode: false
    })
});