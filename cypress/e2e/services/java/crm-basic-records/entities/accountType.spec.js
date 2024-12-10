const fixAccountType = require('../../../../../fixtures/api_payloads/java/basic-records/entities/accountType.json')

describe('Entities Account Type', () => {

    it('POST Account Type', () => {
        cy.postAccountType(fixAccountType).then((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.id).to.be.not.undefined
            expect(res.body.name).to.eq(fixAccountType.name)
            expect(res.body.icon).to.eq(fixAccountType.icon)
            expect(res.body.color).to.eq(fixAccountType.color)
        })
    });

    it('GET Account Type', () => {
        cy.getAllAccountType().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixAccountType).then((id) => {
                cy.getOneAccountType(id).then((resGetOne) => {
                    expect(resGetOne.status).to.eq(200)
                    expect(resGetOne.body.id).to.be.not.undefined
                })
            })
        })
    });

    it('PUT Account Type', () => {
        cy.getAllAccountType().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixAccountType).then((id) => {
                cy.putAccountType(id, fixAccountType).then((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body.id).to.be.not.undefined
                    expect(res.body.name).to.eq(fixAccountType.name)
                    expect(res.body.icon).to.eq(fixAccountType.icon)
                    expect(res.body.color).to.eq(fixAccountType.color)
                })
            })
        })
    });

    it('DELETE Account Type', () => {
        cy.getAllAccountType().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixAccountType).then((id) => {
                cy.deleteAccountType(id).then((res) => {
                    expect(res.status).to.eq(204)
                })
            })
        })
    });
});