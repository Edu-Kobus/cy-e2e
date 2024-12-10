const fixAppointment = require('../../../../../fixtures/api_payloads/php/Colaborativo/add-appointment.json')

describe('Appointment', () => {

    var ID_REGISTER = null
    

    before(() => {
        cy.getToken()
    })

    it('POST Appointment', () => {
        cy.postAppointmentv1(fixAppointment).should((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.id).to.not.null

            ID_REGISTER = res.body.id
        })
    })

    it('GET Appointment', () => {
        cy.getAllAppointmentv1().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)
        })

        cy.getOneAppointmentv1(ID_REGISTER).should((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.id).to.not.null

        })
    })

    it('PUT Appointment', () => {
        fixAppointment.id = ID_REGISTER

        cy.putAppointmentv1(ID_REGISTER, fixAppointment).should((res) => {
            expect(res.status).to.eq(200)
        })
    })

    it('DELETE Appointment', () => {
        cy.deleteAppointmentv1(ID_REGISTER).should((res) => {
            expect(res.status).to.eq(204)
        })
    })
})