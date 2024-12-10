const fixAccountInterestAreas = require('../../../../../fixtures/api_payloads/java/backend-account/entities/accountInterestAreas.json')

describe('Entities Account Interest Areas', () => {

    let ID_REGISTER = null

    before(() => cy.getTokenPlatform())

    it('POST Account Interest Areas', () => {
        cy.postAccountInterestAreas(fixAccountInterestAreas).then((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.id).to.be.not.undefined
            expect(res.body.note).to.eq(fixAccountInterestAreas.note)
            expect(res.body.dateRegister).to.eq(fixAccountInterestAreas.dateRegister)
            expect(res.body.interestType).to.eq(fixAccountInterestAreas.interestType)
            expect(res.body.account.id).to.eq(fixAccountInterestAreas.account.id)
            expect(res.body.interestAreas.id).to.eq(fixAccountInterestAreas.interestAreas.id)
            expect(res.body.interestAreas.name).to.eq(fixAccountInterestAreas.interestAreas.name)
            expect(res.body.interestAreas.company.id).to.eq(fixAccountInterestAreas.interestAreas.company.id)

            ID_REGISTER = res.body.id
        })
    });

    it('GET Account Interest Areas', () => {
        cy.getAllAccountInterestAreas().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)
        })

        cy.getOneAccountInterestAreas(ID_REGISTER).then((resGetOne) => {
            expect(resGetOne.status).to.eq(200)
            expect(resGetOne.body.id).to.be.not.undefined
            expect(resGetOne.body.note).to.eq(fixAccountInterestAreas.note)
            expect(resGetOne.body.dateRegister).to.eq(fixAccountInterestAreas.dateRegister)
            expect(resGetOne.body.interestType).to.eq(fixAccountInterestAreas.interestType)
            expect(resGetOne.body.account.id).to.eq(fixAccountInterestAreas.account.id)
            expect(resGetOne.body.interestAreas.id).to.eq(fixAccountInterestAreas.interestAreas.id)
            expect(resGetOne.body.interestAreas.name).to.eq(fixAccountInterestAreas.interestAreas.name)
            expect(resGetOne.body.interestAreas.company.id).to.eq(fixAccountInterestAreas.interestAreas.company.id)
        })
    });

    it('PUT Account Interest Areas', () => {
        fixAccountInterestAreas.id = ID_REGISTER

        cy.putAccountInterestAreas(fixAccountInterestAreas, ID_REGISTER).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.id).to.be.not.undefined
            expect(res.body.note).to.eq(fixAccountInterestAreas.note)
            expect(res.body.dateRegister).to.eq(fixAccountInterestAreas.dateRegister)
            expect(res.body.interestType).to.eq(fixAccountInterestAreas.interestType)
            expect(res.body.account.id).to.eq(fixAccountInterestAreas.account.id)
            expect(res.body.interestAreas.id).to.eq(fixAccountInterestAreas.interestAreas.id)
            expect(res.body.interestAreas.name).to.eq(fixAccountInterestAreas.interestAreas.name)
            expect(res.body.interestAreas.company.id).to.eq(fixAccountInterestAreas.interestAreas.company.id)
        })
    });

    it('DELETE Account Interest Areas', () => {
        cy.deleteAccountInterestAreas(ID_REGISTER).then((res) => {
            expect(res.status).to.eq(204)
        })
    });
});