describe('API Test', () => {

    before(() => cy.getTokenPlatform())

    context('entities', () => {
        require('../../campaign/entities/campaignType.spec');
        require('../../campaign/entities/cancellationReason.spec');
    });
});