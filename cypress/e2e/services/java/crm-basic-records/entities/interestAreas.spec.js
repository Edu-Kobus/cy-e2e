const fixInterestAreas = require('../../../../../fixtures/api_payloads/java/basic-records/entities/interestAreas.json')

describe('Entities Interest Areas', () => {

    it('POST Interest Areas', () => {
        cy.postInterestAreas(fixInterestAreas).then((res) => {
            expect(res.status).to.eq(201)
            
            expect(res.body.id).to.not.null
            expect(res.body.name).to.eq(fixInterestAreas.name)
            expect(res.body.company.id).to.eq(fixInterestAreas.company.id)
            expect(res.body.active).to.eq(fixInterestAreas.active)
            expect(res.body.customFields.name).to.eq(fixInterestAreas.customFields.name)
        })
    });

    it('GET Interest Areas', () => {
        cy.getAllInterestAreas().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixInterestAreas).then((id) => {
                cy.getOneInterestAreas(id).then((resGetOne) => {
                    expect(resGetOne.status).to.eq(200)

                    expect(resGetOne.body.id).to.not.null
                    expect(resGetOne.body.name).to.eq(fixInterestAreas.name)
                    expect(resGetOne.body.company.id).to.eq(fixInterestAreas.company.id)
                    expect(resGetOne.body.active).to.eq(fixInterestAreas.active)
                })
            })
        })
    });

    it('PUT Interest Areas', () => {
        cy.getAllInterestAreas().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixInterestAreas).then((id) => {
                cy.putInterestAreas(id, fixInterestAreas).then((res) => {
                    expect(res.status).to.eq(200)

                    expect(res.body.id).to.not.null
                    expect(res.body.name).to.eq(fixInterestAreas.name)
                    expect(res.body.company.id).to.eq(fixInterestAreas.company.id)
                    expect(res.body.active).to.eq(fixInterestAreas.active)
                })
            })
        })
    });

    it('DELETE Interest Areas', () => {
        cy.getAllInterestAreas().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixInterestAreas).then((id) => {
                cy.deleteInterestAreas(id).then((res) => {
                    expect(res.status).to.eq(204)
                })
            })
        })
    });
});