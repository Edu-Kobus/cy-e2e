describe('API Test', () => {

    before(() => cy.getTokenPlatform())

    context('entities', () => {
        require('../../opportunity/entities/opportunity.spec');
        require('../../opportunity/entities/opportunityAction.spec');
        require('../../opportunity/entities/opportunityProduct.spec');
        require('../../opportunity/entities/opportunityProposal.spec');
        require('../../opportunity/entities/opportunityService.spec');
    });
});