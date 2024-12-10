const occurrenceSubtype = require('../../../../../fixtures/api_payloads/java/basic-records/entities/occurrenceSubtype.json')

describe('Entities ocurrenceSubtype', () => {

    it('POST ocurrenceSubtype', () => {
        cy.postOccurrenceSubtype(occurrenceSubtype).then((res) => {
            expect(res.status).to.eq(201)
            
            expect(res.body.id).to.not.null
            expect(res.body.active).to.eq(occurrenceSubtype.active)
            expect(res.body.name).to.eq(occurrenceSubtype.name)
            expect(res.body.companyBranch.company.id).to.eq(occurrenceSubtype.companyBranch.company.id)
            expect(res.body.companyBranch.branch.id).to.eq(occurrenceSubtype.companyBranch.branch.id)
            expect(res.body.occurrenceType.id).to.eq(occurrenceSubtype.occurrenceType.id)
            expect(res.body.sla).to.eq(occurrenceSubtype.sla)
        })
    });

    it('GET ocurrenceSubtype', () => {
        cy.getAllOccurrenceSubtype().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, occurrenceSubtype).then((id) => {
                cy.getOneOccurrenceSubtype(id).then((resGetOne) => {
                    expect(resGetOne.status).to.eq(200)

                    expect(resGetOne.body.id).to.not.null
                    expect(resGetOne.body.active).to.eq(occurrenceSubtype.active)
                    expect(resGetOne.body.name).to.eq(occurrenceSubtype.name)
                    expect(resGetOne.body.companyBranch.company.id).to.eq(occurrenceSubtype.companyBranch.company.id)
                    expect(resGetOne.body.companyBranch.branch.id).to.eq(occurrenceSubtype.companyBranch.branch.id)
                    expect(resGetOne.body.occurrenceType.id).to.eq(occurrenceSubtype.occurrenceType.id)
                    expect(resGetOne.body.sla).to.eq(occurrenceSubtype.sla)
                })
            })
        })
    });

    it('PUT ocurrenceSubtype', () => {
        cy.getAllOccurrenceSubtype().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, occurrenceSubtype).then((id) => {
                cy.putOccurrenceSubtype(id, occurrenceSubtype).then((res) => {
                    expect(res.status).to.eq(200)

                    expect(res.body.id).to.not.null
                    expect(res.body.active).to.eq(occurrenceSubtype.active)
                    expect(res.body.name).to.eq(occurrenceSubtype.name)
                    expect(res.body.companyBranch.company.id).to.eq(occurrenceSubtype.companyBranch.company.id)
                    expect(res.body.companyBranch.branch.id).to.eq(occurrenceSubtype.companyBranch.branch.id)
                    expect(res.body.occurrenceType.id).to.eq(occurrenceSubtype.occurrenceType.id)
                    expect(res.body.sla).to.eq(occurrenceSubtype.sla)
                })
            })
        })
    });

    it('DELETE ocurrenceSubtype', () => {
        cy.getAllOccurrenceSubtype().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, occurrenceSubtype).then((id) => {
                cy.deleteOccurrenceSubtype(id).then((res) => {
                    expect(res.status).to.eq(204)
                })
            })
        })
    });
});