const fixAccount = require('../../../../../fixtures/api_payloads/java/backend-account/entities/entityAccount.json')

describe('Entities Account', () => {

    let ID_REGISTER = null

    it('POST Account', () => {
        cy.postAccountEntity(fixAccount).should(res => {
            expect(res.status).to.eq(201)

            ID_REGISTER = res.body.id
        })
    });

    it('GET Account', () => {
        cy.getAllAccountEntity().should(resGetAll => {
            expect(resGetAll.status).to.eq(200)
        })

        cy.getOneAccountEntity(ID_REGISTER).should(res => {
            expect(res.status).to.eq(200)
        })
    });

    it('PUT Account', () => {
        fixAccount.id =  ID_REGISTER

        cy.putAccountEntity(fixAccount, ID_REGISTER).should(res => {
            expect(res.status).to.eq(200)
        })
    });

    it('DELETE Account', () => {
        cy.deleteAccountEntity(ID_REGISTER).should(res => {
            expect(res.status).to.eq(204)
        })
    });
});