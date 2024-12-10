const fixAccountResponsible = require('../../../../../fixtures/api_payloads/java/backend-account/entities/accountResponsible.json')

describe('Entities Account Responsible', () => {

    let ID_REGISTER = null

    it('POST Account Responsible', () => {
        cy.postAccountResponsible(fixAccountResponsible).then((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.id).to.be.not.undefined

            ID_REGISTER = res.body.id
        })
    });

    it('GET Account Responsible', () => {
        cy.getAllAccountResponsible().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)
        })

        cy.getOneAccountResponsible(ID_REGISTER).then((resGetOne) => {
            expect(resGetOne.status).to.eq(200)
            expect(resGetOne.body.id).to.be.not.undefined
        })
    });

    it('PUT Account Responsible', () => {
        fixAccountResponsible.id = ID_REGISTER

        cy.putAccountResponsible(fixAccountResponsible, ID_REGISTER).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.id).to.be.not.undefined
        })
    });

    it('DELETE Account Responsible', () => {
        cy.deleteAccountResponsible(ID_REGISTER).then((res) => {
            expect(res.status).to.eq(204)
        })
    });
});