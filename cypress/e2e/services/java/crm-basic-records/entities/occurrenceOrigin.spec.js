const fixture = require('../../../../../fixtures/api_payloads/java/basic-records/entities/occurrenceOrigin.json')

describe('Entities Ocurrence Origin', () => {

    it('POST Ocurrence Origin', () => {
        cy.postOccurrenceOrigin(fixture).then((res) => {
            expect(res.status).to.eq(201)
            
            expect(res.body.id).to.not.null
            expect(res.body.active).to.eq(fixture.active)
            expect(res.body.name).to.eq(fixture.name)
            expect(res.body.companyBranch.id).to.eq(fixture.companyBranch.id)
        })
    });

    it('GET Ocurrence Origin', () => {
        cy.getAllOccurrenceOrigin().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixture).then((id) => {
                cy.getOneOccurrenceOrigin(id).then((res) => {
                    expect(res.status).to.eq(200)

                    expect(res.body.id).to.not.null
                    expect(res.body.active).to.eq(fixture.active)
                    expect(res.body.name).to.eq(fixture.name)
                    expect(res.body.companyBranch.id).to.eq(fixture.companyBranch.id)
                })
            })
        })
    });

    it('PUT Ocurrence Origin', () => {
        cy.getAllOccurrenceOrigin().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixture).then((id) => {
                cy.putOccurrenceOrigin(id, fixture).then((res) => {
                    expect(res.status).to.eq(200)

                    expect(res.body.id).to.not.null
                    expect(res.body.active).to.eq(fixture.active)
                    expect(res.body.name).to.eq(fixture.name)
                    expect(res.body.companyBranch.id).to.eq(fixture.companyBranch.id)
                })
            })
        })
    });

    it('DELETE Ocurrence Origin', () => {
        cy.getAllOccurrenceOrigin().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixture).then((id) => {
                cy.deleteOccurrenceOrigin(id).then((res) => {
                    expect(res.status).to.eq(204)
                })
            })
        })
    });
});