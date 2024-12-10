const fixAccountRelationships = require('../../../../../fixtures/api_payloads/java/backend-account/entities/accountRelationships.json')

describe('Entities Account Relationships', () => {

    let ID_REGISTER = null

    it('POST Account Relationships', () => {
        cy.postAccountRelationships(fixAccountRelationships).then((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.id).to.be.not.undefined

            ID_REGISTER = res.body.id
        })
    });

    it('GET Account Relationships', () => {
        cy.getAllAccountRelationships().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)
        })

        cy.getOneAccountRelationships(ID_REGISTER).then((resGetOne) => {
            expect(resGetOne.status).to.eq(200)
            expect(resGetOne.body.id).to.be.not.undefined
        })
    });

    it('PUT Account Relationships', () => {
        fixAccountRelationships.id = ID_REGISTER

        cy.putAccountRelationships(fixAccountRelationships, ID_REGISTER).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.id).to.be.not.undefined
        })
    });

    it('DELETE Account Relationships', () => {
        cy.deleteAccountRelationships(ID_REGISTER).then((res) => {
            expect(res.status).to.eq(204)
        })
    });
});