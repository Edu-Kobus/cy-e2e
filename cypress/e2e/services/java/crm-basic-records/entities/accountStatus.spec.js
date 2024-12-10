const fixAccountStatus = require('../../../../../fixtures/api_payloads/java/basic-records/entities/accountStatus.json')

describe('Entities Account Status', () => {

    it('POST Account Status', () => {
        cy.postAccountStatus(fixAccountStatus).then((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.id).to.be.not.undefined
            expect(res.body.name).to.eq(fixAccountStatus.name)
            expect(res.body.icon).to.eq(fixAccountStatus.icon)
        })
    });

    it('GET Account Status', () => {
        cy.getAllAccountStatus().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixAccountStatus).then((id) => {
                cy.getOneAccountStatus(id).then((resGetOne) => {
                    expect(resGetOne.status).to.eq(200)
                    expect(resGetOne.body.id).to.be.not.undefined
                })
            })
        })
    });

    it('PUT Account Status', () => {
        cy.getAllAccountStatus().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixAccountStatus).then((id) => {
                cy.putAccountStatus(id, fixAccountStatus).then((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body.id).to.be.not.undefined
                    expect(res.body.name).to.eq(fixAccountStatus.name)
                    expect(res.body.icon).to.eq(fixAccountStatus.icon)
                })
            })
        })
    });

    it('DELETE Account Status', () => {
        cy.getAllAccountStatus().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixAccountStatus).then((id) => {
                cy.deleteAccountStatus(id).then((res) => {
                    expect(res.status).to.eq(204)
                })
            })
        })
    });
});