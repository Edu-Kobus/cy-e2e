const fixAccountOrigins = require('../../../../../fixtures/api_payloads/java/basic-records/entities/accountOrigins.json')

describe('Entities Account Origins', () => {

    it('POST Account Origins', () => {
        cy.postAccountOrigins(fixAccountOrigins).then((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.id).to.be.not.undefined
            expect(res.body.name).to.eq(fixAccountOrigins.name)
        })
    });

    it('GET Account Origins', () => {
        cy.getAllAccountOrigins().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixAccountOrigins).then((id) => {
                cy.getOneAccountOrigins(id).then((resGetOne) => {
                    expect(resGetOne.status).to.eq(200)
                    expect(resGetOne.body.id).to.be.not.undefined
                })
            })
        })
    });

    it('PUT Account Origins', () => {
        cy.getAllAccountOrigins().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixAccountOrigins).then((id) => {
                cy.putAccountOrigins(id, fixAccountOrigins).then((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body.id).to.be.not.undefined
                    expect(res.body.name).to.eq(fixAccountOrigins.name)
                })
            })
        })
    });

    it('DELETE Account Origins', () => {
        cy.getAllAccountOrigins().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixAccountOrigins).then((id) => {
                cy.deleteAccountOrigins(id).then((res) => {
                    expect(res.status).to.eq(204)
                })
            })
        })
    });
});