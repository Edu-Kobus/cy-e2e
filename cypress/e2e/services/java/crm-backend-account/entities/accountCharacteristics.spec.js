const fixAccountCharacteristics = require('../../../../../fixtures/api_payloads/java/backend-account/entities/accountCharacteristics.json')

describe('Entities Account Characteristics', () => {

    let ID_REGISTER = null

    it('POST Account Characteristics', () => {
        cy.postAccountCharacteristics(fixAccountCharacteristics).then((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.id).to.be.not.undefined
            expect(res.body.content).to.eq(fixAccountCharacteristics.content)
            expect(res.body.dateTime).to.eq(fixAccountCharacteristics.dateTime)

            ID_REGISTER = res.body.id
        })
    });

    it('GET Account Characteristics', () => {
        cy.getAllAccountCharacteristics().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)
        })

        cy.getOneAccountCharacteristics(ID_REGISTER).then((resGetOne) => {
            expect(resGetOne.status).to.eq(200)
            expect(resGetOne.body.id).to.be.not.undefined
            expect(resGetOne.body.content).to.eq(fixAccountCharacteristics.content)
            expect(resGetOne.body.dateTime).to.eq(fixAccountCharacteristics.dateTime)
        })
    });

    it('PUT Account Characteristics', () => {
       fixAccountCharacteristics.id = ID_REGISTER

        cy.putAccountCharacteristics(fixAccountCharacteristics, ID_REGISTER).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.id).to.be.not.undefined
            expect(res.body.content).to.eq(fixAccountCharacteristics.content)
            expect(res.body.dateTime).to.eq(fixAccountCharacteristics.dateTime)
        })
    });

    it('DELETE Account Characteristics', () => {
        cy.deleteAccountCharacteristics(ID_REGISTER).then((res) => {
            expect(res.status).to.eq(204)
        })
    });
});