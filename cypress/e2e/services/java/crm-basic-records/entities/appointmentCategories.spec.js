const fixAppointmentCategories = require('../../../../../fixtures/api_payloads/java/basic-records/entities/appointmentCategories.json')

describe('Entity Appointment Categories', () => {

    it('POST Appointment Categories', () => {
        cy.postAppointmentCategories(fixAppointmentCategories).then((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.name).to.eq(fixAppointmentCategories.name)
        })
    });

    it('GET Appointment Categories', () => {
        cy.getAllAppointmentCategories().then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body).to.not.be.empty.and.not.be.null

            cy.sortList(res, fixAppointmentCategories).then((id) => {
                cy.getOneAppointmentCategories(fixAppointmentCategories, id).then((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body).to.not.be.empty.and.not.be.null
                })
            })
        })
    });

    it('PUT Appointment Categories', () => {
        cy.getAllAppointmentCategories().then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body).to.not.be.empty.and.not.be.null

            cy.sortList(res, fixAppointmentCategories).then((id) => {
                cy.putAppointmentCategories(fixAppointmentCategories, id).then((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body).to.not.be.empty.and.not.be.null
                    expect(res.body.name).to.eq(fixAppointmentCategories.name)
                })

            })
        })
    });

    it('DELETE Appointment Categories', () => {
        cy.getAllAppointmentCategories().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixAppointmentCategories).then((id) => {

                cy.deleteAppointmentCategories(id).then((resGetOne) => {
                    expect(resGetOne.status).to.eq(204)
                })
            })
        })
    });
});