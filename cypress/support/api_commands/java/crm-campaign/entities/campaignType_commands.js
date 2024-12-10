const campaignType = `${Cypress.config('baseUrlLeaf')}/campaign/entities/campaignType`

Cypress.Commands.add('postCampaignType', (fixture) => {
    cy.request({
        method: 'POST',
        url: campaignType,
        body: fixture,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('getAllCampaignType', (id) => {
    cy.request({
        method: 'GET',
        url: `${campaignType}?filter=id eq '${id}'`,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('getOneCampaignType', (fixture, id) => {
    cy.request({
        method: 'GET',
        url: `${campaignType}/${id}`,
        body: fixture,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('putCampaignType', (fixture, id) => {
    cy.request({
        method: 'PUT',
        url: `${campaignType}/${id}`,
        body: fixture,
        failOnStatusCode: false
    });
});

Cypress.Commands.add('deleteCampaignType', (id) => {
    cy.request({
        method: 'DELETE',
        url: `${campaignType}/${id}`,
        failOnStatusCode: false
    });
});