const fixBusinessTypes = require('../../../../../fixtures/api_payloads/java/basic-records/entities/businessTypes.json')

describe('Entities Business Types', () => {

    it('POST Business Types', () => {
        cy.postBusinessTypes(fixBusinessTypes).then((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.id).to.be.not.undefined
            expect(res.body.name).to.eq(fixBusinessTypes.name)
            expect(res.body.note).to.eq(fixBusinessTypes.note)

            expect(res.body.companyBranch.id).to.be.not.undefined
            expect(res.body.companyBranch.company.id).to.be.not.undefined
            expect(res.body.companyBranch.branch.id).to.be.not.undefined
        })
    });

    it('GET Business Types', () => {
        cy.getAllBusinessTypes().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixBusinessTypes).then((id) => {
                cy.getOneBusinessTypes(id).then((resGetOne) => {
                    expect(resGetOne.status).to.eq(200)
                    expect(resGetOne.body.id).to.be.not.undefined
                })
            })
        })
    });

    it('PUT Business Types', () => {
        cy.getAllBusinessTypes().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixBusinessTypes).then((id) => {
                cy.putBusinessTypes(id, fixBusinessTypes).then((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body.id).to.be.not.undefined
                    expect(res.body.name).to.eq(fixBusinessTypes.name)
                })
            })
        })
    });

    it('DELETE Business Types', () => {
        cy.getAllBusinessTypes().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixBusinessTypes).then((id) => {
                cy.deleteBusinessTypes(id).then((res) => {
                    expect(res.status).to.eq(204)
                })
            })
        })
    });
});