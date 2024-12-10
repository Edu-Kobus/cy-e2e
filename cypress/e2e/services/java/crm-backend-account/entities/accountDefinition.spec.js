const fixAccountDefinition = require('../../../../../fixtures/api_payloads/java/backend-account/entities/accountDefinition.json')

describe('Entities Account Definition', () => {

    var ID_REGISTER = null

    it('POST Account Definition', () => {
        cy.postAccountDefinition(fixAccountDefinition).then((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.id).to.be.not.undefined
            expect(res.body.receiveEmail).to.eq(fixAccountDefinition.receiveEmail)
            expect(res.body.receiveSurvey).to.eq(fixAccountDefinition.receiveSurvey)
            expect(res.body.receiveTrackEmail).to.eq(fixAccountDefinition.receiveTrackEmail)
            expect(res.body.rating.id).to.eq(fixAccountDefinition.rating.id)
            expect(res.body.account.id).to.eq(fixAccountDefinition.account.id)
            expect(res.body.accountType.id).to.eq(fixAccountDefinition.accountType.id)
            expect(res.body.companyBranch.id).to.eq(fixAccountDefinition.companyBranch.id)
            expect(res.body.status.id).to.eq(fixAccountDefinition.status.id)

            ID_REGISTER = res.body.id
        })
    });

    it('GET Account Definition', () => {
        fixAccountDefinition.id = ID_REGISTER

        cy.getAllAccountDefinition().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

        })

        cy.getOneAccountDefinition(ID_REGISTER).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.id).to.be.not.undefined
            expect(res.body.receiveEmail).to.eq(fixAccountDefinition.receiveEmail)
            expect(res.body.receiveSurvey).to.eq(fixAccountDefinition.receiveSurvey)
            expect(res.body.receiveTrackEmail).to.eq(fixAccountDefinition.receiveTrackEmail)
            expect(res.body.rating.id).to.eq(fixAccountDefinition.rating.id)
            expect(res.body.account.id).to.eq(fixAccountDefinition.account.id)
            expect(res.body.accountType.id).to.eq(fixAccountDefinition.accountType.id)
            expect(res.body.companyBranch.id).to.eq(fixAccountDefinition.companyBranch.id)
            expect(res.body.status.id).to.eq(fixAccountDefinition.status.id)
        })
    });

    it('PUT Account Definition', () => {
        fixAccountDefinition.id = ID_REGISTER

        cy.putAccountDefinition(fixAccountDefinition, ID_REGISTER).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.id).to.be.not.undefined
            expect(res.body.receiveEmail).to.eq(fixAccountDefinition.receiveEmail)
            expect(res.body.receiveSurvey).to.eq(fixAccountDefinition.receiveSurvey)
            expect(res.body.receiveTrackEmail).to.eq(fixAccountDefinition.receiveTrackEmail)
            expect(res.body.rating.id).to.eq(fixAccountDefinition.rating.id)
            expect(res.body.account.id).to.eq(fixAccountDefinition.account.id)
            expect(res.body.accountType.id).to.eq(fixAccountDefinition.accountType.id)
            expect(res.body.companyBranch.id).to.eq(fixAccountDefinition.companyBranch.id)
            expect(res.body.status.id).to.eq(fixAccountDefinition.status.id)
        })
    });

    it('DELETE Account Definition', () => {
        cy.deleteAccountDefinition(ID_REGISTER).then((res) => {
            expect(res.status).to.eq(204)
        })
    });
})
