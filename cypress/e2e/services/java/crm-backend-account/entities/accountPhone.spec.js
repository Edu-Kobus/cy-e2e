const fixAccountPhone = require('../../../../../fixtures/api_payloads/java/backend-account/entities/accountPhone.json')

describe('Entities Account Phone', () => {

    let ID_REGISTER = null

    it('POST Account Phone', () => {
        cy.postAccountPhone(fixAccountPhone).then((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.id).to.be.not.undefined
            expect(res.body.number).to.eq(fixAccountPhone.number)
            expect(res.body.type).to.eq(fixAccountPhone.type)
            expect(res.body.operator).to.eq(fixAccountPhone.operator)
            expect(res.body.main).to.eq(fixAccountPhone.main)
            expect(res.body.account.id).to.eq(fixAccountPhone.account.id)

            ID_REGISTER = res.body.id
        })
    });

    it('GET Account Phone', () => {
        cy.getAllAccountPhone().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)
        })

        cy.getOneAccountPhone(ID_REGISTER).then((resGetOne) => {
            expect(resGetOne.status).to.eq(200)
            expect(resGetOne.body.id).to.be.not.undefined
            expect(resGetOne.body.number).to.eq(fixAccountPhone.number)
            expect(resGetOne.body.type).to.eq(fixAccountPhone.type)
            expect(resGetOne.body.operator).to.eq(fixAccountPhone.operator)
            expect(resGetOne.body.main).to.eq(fixAccountPhone.main)
            expect(resGetOne.body.account.id).to.eq(fixAccountPhone.account.id)
        })
    });

    it('PUT Account Phone', () => {
        fixAccountPhone.id = ID_REGISTER

        cy.putAccountPhone(fixAccountPhone, ID_REGISTER).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.id).to.be.not.undefined
            expect(res.body.number).to.eq(fixAccountPhone.number)
            expect(res.body.type).to.eq(fixAccountPhone.type)
            expect(res.body.operator).to.eq(fixAccountPhone.operator)
            expect(res.body.main).to.eq(fixAccountPhone.main)
            expect(res.body.account.id).to.eq(fixAccountPhone.account.id)
        })
    });

    it('DELETE Account Phone', () => {
        cy.deleteAccountPhone(ID_REGISTER).then((res) => {
            expect(res.status).to.eq(204)
        })
    });
});