const occurrenceType = require('../../../../../fixtures/api_payloads/java/basic-records/entities/occurrenceType.json')

describe('Entities Occurrence Type', () => {

    it('POST Occurrence Type', () => {
        cy.postOccurrenceType(occurrenceType).then((res) => {
            expect(res.status).to.eq(201)
            
            expect(res.body.id).to.not.null
            expect(res.body.active).to.eq(occurrenceType.active)
            expect(res.body.name).to.eq(occurrenceType.name)
            expect(res.body.companyBranch.company.id).to.eq(occurrenceType.companyBranch.company.id)
            expect(res.body.companyBranch.branch.id).to.eq(occurrenceType.companyBranch.branch.id)
            expect(res.body.sla).to.eq(occurrenceType.sla)
        })
    });

    it('GET Occurrence Type', () => {
        cy.getAllOccurrenceType().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, occurrenceType).then((id) => {
                cy.getOneOccurrenceType(id).then((resGetOne) => {
                    expect(resGetOne.status).to.eq(200)

                    expect(resGetOne.body.id).to.not.null
                    expect(resGetOne.body.active).to.eq(occurrenceType.active)
                    expect(resGetOne.body.name).to.eq(occurrenceType.name)
                    expect(resGetOne.body.companyBranch.company.id).to.eq(occurrenceType.companyBranch.company.id)
                    expect(resGetOne.body.companyBranch.branch.id).to.eq(occurrenceType.companyBranch.branch.id)
                    expect(resGetOne.body.sla).to.eq(occurrenceType.sla)
                })
            })
        })
    });

    it('PUT Occurrence Type', () => {
        cy.getAllOccurrenceType().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, occurrenceType).then((id) => {
                cy.putOccurrenceType(id, occurrenceType).then((res) => {
                    expect(res.status).to.eq(200)

                    expect(res.body.id).to.not.null
                    expect(res.body.active).to.eq(occurrenceType.active)
                    expect(res.body.name).to.eq(occurrenceType.name)
                    expect(res.body.companyBranch.company.id).to.eq(occurrenceType.companyBranch.company.id)
                    expect(res.body.companyBranch.branch.id).to.eq(occurrenceType.companyBranch.branch.id)
                    expect(res.body.sla).to.eq(occurrenceType.sla)
                })
            })
        })
    });

    it('DELETE Occurrence Type', () => {
        cy.getAllOccurrenceType().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, occurrenceType).then((id) => {
                cy.deleteOccurrenceType(id).then((res) => {
                    expect(res.status).to.eq(204)
                })
            })
        })
    });
});