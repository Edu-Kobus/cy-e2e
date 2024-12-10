const fixAccountAddress = require('../../../../../fixtures/api_payloads/java/backend-account/entities/accountAddress.json')

describe('Entities Account Address', () => {

    let ID_REGISTER = null

    it('POST Account Address', () => {
        cy.postAccountAddress(fixAccountAddress).then((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.id).to.be.not.undefined

            ID_REGISTER = res.body.id
        })
    });

    it('GET Account Address', () => {
        cy.getAllAccountAddress().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)
        })

        cy.getOneAccountAddress(ID_REGISTER).then((resGetOne) => {
            expect(resGetOne.status).to.eq(200)
            expect(resGetOne.body.id).to.be.not.undefined
        })
    });

    it('PUT Account Address', () => {
        fixAccountAddress.id = ID_REGISTER

        cy.putAccountAddress(fixAccountAddress, ID_REGISTER).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.id).to.be.not.undefined
        })
    });

    it('DELETE Account Address', () => {
        cy.deleteAccountAddress(ID_REGISTER).then((res) => {
            expect(res.status).to.eq(204)
        })
    });
});