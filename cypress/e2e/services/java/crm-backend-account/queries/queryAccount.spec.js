const fixContactByPhone = require('../../../../../fixtures/api_payloads/java/backend-account/queries/accountContactByPhone.json')

describe('Queries Account', () => {

    it('POST Account Contact By Phone', () => {
        cy.postAccountContactByPhone(fixContactByPhone).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.accounts[0]).to.be.not.null.and.not.be.empty
            expect(res.body.contacts).to.have.lengthOf(0)
        })
    });
})