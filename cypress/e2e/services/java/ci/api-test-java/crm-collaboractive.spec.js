describe('API Test collaboractive', () => {

    before(() => cy.getTokenPlatform())

    context('entities', () => {
        require('../../collaborative/entities/appointment.spec');
        require('../../collaborative/entities/event.spec');
    });
});