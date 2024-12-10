const fixLocations = require('../../../../../fixtures/api_payloads/java/basic-records/entities/locations.json')

describe('Entities Locations', () => {

    it('POST Locations', () => {
        cy.postLocations(fixLocations).then((res) => {
            expect(res.status).to.eq(201)
            
            expect(res.body.id).to.not.null
            expect(res.body.active).to.eq(fixLocations.active)
            expect(res.body.name).to.eq(fixLocations.name)
            expect(res.body.note).to.eq(fixLocations.note)
        })
    });

    it('GET Locations', () => {
        cy.getAllLocations().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixLocations).then((id) => {
                cy.getOneLocations(id).then((resGetOne) => {
                    expect(resGetOne.status).to.eq(200)

                    expect(resGetOne.body.id).to.not.null
                    expect(resGetOne.body.active).to.eq(fixLocations.active)
                    expect(resGetOne.body.name).to.eq(fixLocations.name)
                    expect(resGetOne.body.note).to.eq(fixLocations.note)
                })
            })
        })
    });

    it('PUT Locations', () => {
        cy.getAllLocations().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixLocations).then((id) => {
                cy.putLocations(id, fixLocations).then((res) => {
                    expect(res.status).to.eq(200)

                    expect(res.body.id).to.not.null
                    expect(res.body.active).to.eq(fixLocations.active)
                    expect(res.body.name).to.eq(fixLocations.name)
                    expect(res.body.note).to.eq(fixLocations.note)
                })
            })
        })
    });

    it('DELETE Locations', () => {
        cy.getAllLocations().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixLocations).then((id) => {
                cy.deleteLocations(id).then((res) => {
                    expect(res.status).to.eq(204)
                })
            })
        })
    });
});