const fixture = require('../../../../../fixtures/api_payloads/java/basic-records/entities/occurrenceStatus.json')

describe('Entities Ocurrence Status', () => {

    it('POST Ocurrence Status', () => {
        cy.postOccurrenceStatus(fixture).then((res) => {
            expect(res.status).to.eq(201)
            
            expect(res.body.id).to.not.null
            expect(res.body.active).to.eq(fixture.active)
            expect(res.body.name).to.eq(fixture.name)
            expect(res.body.companyBranch.id).to.eq(fixture.companyBranch.id)
            expect(res.body.occurrenceStarts).to.eq(fixture.occurrenceStarts)
            expect(res.body.occurrenceEnds).to.eq(fixture.occurrenceEnds)
            expect(res.body.defaultColor).to.eq(fixture.defaultColor)
            expect(res.body.displayOrder).to.eq(fixture.displayOrder)
        })
    });

    it('GET Ocurrence Status', () => {
        cy.getAllOccurrenceStatus().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixture).then((id) => {
                cy.getOneOccurrenceStatus(id).then((res) => {
                    expect(res.status).to.eq(200)

                    expect(res.body.id).to.not.null
                    expect(res.body.active).to.eq(fixture.active)
                    expect(res.body.name).to.eq(fixture.name)
                    expect(res.body.companyBranch.id).to.eq(fixture.companyBranch.id)
                    expect(res.body.occurrenceStarts).to.eq(fixture.occurrenceStarts)
                    expect(res.body.occurrenceEnds).to.eq(fixture.occurrenceEnds)
                    expect(res.body.defaultColor).to.eq(fixture.defaultColor)
                    expect(res.body.displayOrder).to.eq(fixture.displayOrder)
                })
            })
        })
    });

    it('PUT Ocurrence Status', () => {
        cy.getAllOccurrenceStatus().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixture).then((id) => {
                cy.putOccurrenceStatus(id, fixture).then((res) => {
                    expect(res.status).to.eq(200)

                    expect(res.body.id).to.not.null
                    expect(res.body.active).to.eq(fixture.active)
                    expect(res.body.name).to.eq(fixture.name)
                    expect(res.body.companyBranch.id).to.eq(fixture.companyBranch.id)
                    expect(res.body.occurrenceStarts).to.eq(fixture.occurrenceStarts)
                    expect(res.body.occurrenceEnds).to.eq(fixture.occurrenceEnds)
                    expect(res.body.defaultColor).to.eq(fixture.defaultColor)
                    expect(res.body.displayOrder).to.eq(fixture.displayOrder)
                })
            })
        })
    });

    it('DELETE Ocurrence Status', () => {
        cy.getAllOccurrenceStatus().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixture).then((id) => {
                cy.deleteOccurrenceStatus(id).then((res) => {
                    expect(res.status).to.eq(204)
                })
            })
        })
    });
});