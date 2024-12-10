const fixAccountIdentifications = require('../../../../../fixtures/api_payloads/java/backend-account/entities/accountIdentifications.json')

describe('Entities Account Identifications', () => {

    let ID_REGISTER = null

    it('POST Account Identifications', () => {
        cy.postAccountIdentifications(fixAccountIdentifications).then((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.id).to.be.not.undefined
            expect(res.body.description).to.eq(fixAccountIdentifications.description)

            ID_REGISTER = res.body.id
        })
    });

    it('GET Account Identifications', () => {
        cy.getAllAccountIdentifications().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)
        })

        cy.getOneAccountIdentifications(ID_REGISTER).then((resGetOne) => {
            expect(resGetOne.status).to.eq(200)
            expect(resGetOne.body.id).to.be.not.undefined
            expect(resGetOne.body.description).to.eq(fixAccountIdentifications.description)
        })
    });

    it('PUT Account Identifications', () => {
        fixAccountIdentifications.id = ID_REGISTER

        cy.putAccountIdentifications(fixAccountIdentifications, ID_REGISTER).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.id).to.be.not.undefined
            expect(res.body.description).to.eq(fixAccountIdentifications.description)
        })
    });

    it('DELETE Account Identifications', () => {
        cy.deleteAccountIdentifications(ID_REGISTER).then((res) => {
            expect(res.status).to.eq(204)
        })
    });
});