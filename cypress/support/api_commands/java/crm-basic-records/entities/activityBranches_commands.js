const ActivityBranches = `${Cypress.config('baseUrlLeaf')}/basic_records/apis/activityBranches`

Cypress.Commands.add('postActivityBranches', (fixActivityBranches) => {
    cy.request({
        method: 'POST',
        url: ActivityBranches,
        failOnStatusCode: false,
        body: fixActivityBranches
    });
});

Cypress.Commands.add('getAllActivityBranches', (fixActivityBranches) => {
    cy.request({
        method: 'GET',
        url: `${ActivityBranches}?size=250`,
        failOnStatusCode: false,
        body: fixActivityBranches
    });
});

Cypress.Commands.add('getOneActivityBranches', (fixActivityBranches, id) => {
    cy.request({
        method: 'GET',
        url: `${ActivityBranches}/${id}`,
        failOnStatusCode: false,
        body: fixActivityBranches
    });
});

Cypress.Commands.add('putActivityBranches', (fixActivityBranches, id) => {
    cy.request({
        method: 'PUT',
        url: `${ActivityBranches}/${id}`,
        failOnStatusCode: false,
        body: fixActivityBranches
    });
});

Cypress.Commands.add('deleteActivityBranches', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${ActivityBranches}/${id}`,
        failOnStatusCode: false
    });
});