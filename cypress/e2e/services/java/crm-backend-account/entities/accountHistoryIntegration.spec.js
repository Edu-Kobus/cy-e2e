const fixAccountHistoryIntegration = require('../../../../../fixtures/api_payloads/java/backend-account/entities/accountHistoryIntegration.json')

describe('Entities Account History Integration', () => {

    let ID_REGISTER = null

    it('POST Account History Integration', () => {
        cy.postAccountHistoryIntegration(fixAccountHistoryIntegration).then((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.id).to.be.not.undefined
            expect(res.body.content).to.eq(fixAccountHistoryIntegration.content)
            expect(res.body.dateTime).to.eq(fixAccountHistoryIntegration.dateTime)

            ID_REGISTER = res.body.id
        })
    });

    it('GET Account History Integration', () => {
        cy.getAllAccountHistoryIntegration().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)
        })

        cy.getOneAccountHistoryIntegration(ID_REGISTER).then((resGetOne) => {
            expect(resGetOne.status).to.eq(200)
            expect(resGetOne.body.id).to.be.not.undefined
            expect(resGetOne.body.content).to.eq(fixAccountHistoryIntegration.content)
            expect(resGetOne.body.dateTime).to.eq(fixAccountHistoryIntegration.dateTime)
        })
    });

    it('PUT Account History Integration', () => {
        fixAccountHistoryIntegration.id = ID_REGISTER

        cy.putAccountHistoryIntegration(fixAccountHistoryIntegration, ID_REGISTER).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.id).to.be.not.undefined
            expect(res.body.content).to.eq(fixAccountHistoryIntegration.content)
            expect(res.body.dateTime).to.eq(fixAccountHistoryIntegration.dateTime)
        })
    });

    it('DELETE Account History Integration', () => {
        cy.deleteAccountHistoryIntegration(ID_REGISTER).then((res) => {
            expect(res.status).to.eq(204)
        })
    });
});