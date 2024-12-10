const fixMeasurementUnit = require('../../../../../fixtures/api_payloads/java/basic-records/entities/measurementUnit.json')

describe('Entities Measurement Unit ', () => {

    it('POST Measurement Unit', () => {
        cy.postMeasurementUnit(fixMeasurementUnit).then((res) => {
            expect(res.status).to.eq(201)
            
            expect(res.body.id).to.not.null
            expect(res.body.name).to.eq(fixMeasurementUnit.name)
            expect(res.body.initials).to.eq(fixMeasurementUnit.initials)
        })
    });

    it('GET Measurement Unit', () => {
        cy.getAllMeasurementUnit().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixMeasurementUnit).then((id) => {
                cy.getOneMeasurementUnit(id).then((resGetOne) => {

                    expect(resGetOne.status).to.eq(200)

                    expect(resGetOne.body.id).to.not.null
                    expect(resGetOne.body.active).to.be.exist
                    expect(resGetOne.body.name).to.be.exist
                    expect(resGetOne.body.initials).to.be.exist
                })
            })
        })
    });

    it('PUT Measurement Unit', () => {
        cy.getAllMeasurementUnit().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixMeasurementUnit).then((id) => {
                cy.putMeasurementUnit(id, fixMeasurementUnit).then((res) => {

                    expect(res.status).to.eq(200)

                    expect(res.body.id).to.not.null
                    expect(res.body.active).to.eq(fixMeasurementUnit.active)
                    expect(res.body.name).to.eq(fixMeasurementUnit.name)
                    expect(res.body.initials).to.eq(fixMeasurementUnit.initials)
                })
            })
        })
    });

    it('DELETE Measurement Unit', () => {
        cy.getAllMeasurementUnit().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixMeasurementUnit).then((id) => {
                cy.deleteMeasurementUnit(id).then((res) => {
                    expect(res.status).to.eq(204)
                })
            })
        })
    });
});