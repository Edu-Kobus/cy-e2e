describe('API Test backend-account', () => {

    before(() => cy.getTokenPlatform())

    context('entities', () => {
        require('../../backend-account/entities/entityAccount.spec');
        require('../../backend-account/entities/accountAddress.spec');
        require('../../backend-account/entities/accountCharacteristics.spec');
        require('../../backend-account/entities/accountContact.spec');
        require('../../backend-account/entities/accountDefinition.spec');
        require('../../backend-account/entities/accountHistoryIntegration.spec');
        require('../../backend-account/entities/accountIdentifications.spec');
        require('../../backend-account/entities/accountInterestAreas.spec');
        require('../../backend-account/entities/accountPhone.spec');
        require('../../backend-account/entities/accountRelationships.spec');
        require('../../backend-account/entities/accountResponsible.spec');
    });

    context('queries', () => {
        require('../../backend-account/queries/queryAccount.spec');
    });
});