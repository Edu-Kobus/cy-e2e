const fixAppointment = require('../../../../../fixtures/api_payloads/java/collaborative/entities/appointment.json')

describe('Entity Appointment', () => {

    it('POST Appointment', () => {
        cy.postAppointment(fixAppointment).then((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.appointments[0]).not.be.empty
            expect(res.body.description).to.eq(fixAppointment.description)
            expect(res.body.place).to.eq(fixAppointment.place)
            expect(res.body.syncApp).to.eq(fixAppointment.syncApp)
            expect(res.body.appId).to.eq(fixAppointment.appId)
            expect(res.body.appEdit).to.eq(fixAppointment.appEdit)
            expect(res.body.appOrigin).to.eq(fixAppointment.appOrigin)
            expect(res.body.priority.id).to.eq(fixAppointment.priority.id)
            expect(res.body.recurrenceType).to.eq(fixAppointment.recurrenceType)
            expect(res.body.intervalRecurrence).to.eq(fixAppointment.intervalRecurrence)
            expect(res.body.weeklyRecurrence[0]).to.eq(fixAppointment.weeklyRecurrence[0])
            expect(res.body.annualMonthlyRecurrence).to.eq(fixAppointment.annualMonthlyRecurrence)
            expect(res.body.canceled).to.eq(fixAppointment.canceled)
            expect(res.body.justificationCancellation).to.eq(fixAppointment.justificationCancellation)
            expect(res.body.notifyEmail).to.eq(fixAppointment.notifyEmail)
            expect(res.body.requestAcceptance).to.eq(fixAppointment.requestAcceptance)
            expect(res.body.hidden).to.eq(fixAppointment.hidden)
            expect(res.body.externalId).to.eq(fixAppointment.externalId)
            expect(res.body.originIntegration.id).to.eq(fixAppointment.originIntegration.id)
            expect(res.body.status).to.eq(fixAppointment.status)
            expect(res.body.customFields.teste).to.eq(fixAppointment.customFields.teste)
        })
    });

    it('GET Appointment', () => {
        cy.getAllAppointment().then((res) => {
            expect(res.status).to.eq(200)
            
        }).then((resGetAll) => {
            cy.sortList(resGetAll, fixAppointment).then((id) => {
                cy.getOneAppointment(fixAppointment, id).then((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body.appointments[0]).not.be.empty
                    expect(res.body.description).to.eq(fixAppointment.description)
                    expect(res.body.place).to.eq(fixAppointment.place)
                    expect(res.body.syncApp).to.eq(fixAppointment.syncApp)
                    expect(res.body.appId).to.eq(fixAppointment.appId)
                    expect(res.body.appEdit).to.eq(fixAppointment.appEdit)
                    expect(res.body.appOrigin).to.eq(fixAppointment.appOrigin)
                    expect(res.body.priority.id).to.eq(fixAppointment.priority.id)
                    expect(res.body.recurrenceType).to.eq(fixAppointment.recurrenceType)
                    expect(res.body.intervalRecurrence).to.eq(fixAppointment.intervalRecurrence)
                    expect(res.body.weeklyRecurrence[0]).to.eq(fixAppointment.weeklyRecurrence[0])
                    expect(res.body.annualMonthlyRecurrence).to.eq(fixAppointment.annualMonthlyRecurrence)
                    expect(res.body.canceled).to.eq(fixAppointment.canceled)
                    expect(res.body.justificationCancellation).to.eq(fixAppointment.justificationCancellation)
                    expect(res.body.notifyEmail).to.eq(fixAppointment.notifyEmail)
                    expect(res.body.requestAcceptance).to.eq(fixAppointment.requestAcceptance)
                    expect(res.body.hidden).to.eq(fixAppointment.hidden)
                    expect(res.body.externalId).to.eq(fixAppointment.externalId)
                    expect(res.body.originIntegration.id).to.eq(fixAppointment.originIntegration.id)
                    expect(res.body.status).to.eq(fixAppointment.status)
                    expect(res.body.customFields.teste).to.eq(fixAppointment.customFields.teste)
                })
            })
        })
    });

    it('PUT Appointment', () => {
        cy.getAllAppointment(fixAppointment).then((res) => {
            expect(res.status).to.eq(200)
      
        }).then((resGetAll) => {
            cy.sortList(resGetAll, fixAppointment).then((id) => {
                cy.putAppointment(fixAppointment, id).then((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body.appointments[0]).not.to.be.null
                    expect(res.body.description).to.eq(fixAppointment.description)
                    expect(res.body.place).to.eq(fixAppointment.place)
                    expect(res.body.syncApp).to.eq(fixAppointment.syncApp)
                    expect(res.body.appId).to.eq(fixAppointment.appId)
                    expect(res.body.appEdit).to.eq(fixAppointment.appEdit)
                    expect(res.body.appOrigin).to.eq(fixAppointment.appOrigin)
                    expect(res.body.priority.id).to.eq(fixAppointment.priority.id)
                    expect(res.body.recurrenceType).to.eq(fixAppointment.recurrenceType)
                    expect(res.body.intervalRecurrence).to.eq(fixAppointment.intervalRecurrence)
                    expect(res.body.weeklyRecurrence[0]).to.eq(fixAppointment.weeklyRecurrence[0])
                    expect(res.body.annualMonthlyRecurrence).to.eq(fixAppointment.annualMonthlyRecurrence)
                    expect(res.body.canceled).to.eq(fixAppointment.canceled)
                    expect(res.body.justificationCancellation).to.eq(fixAppointment.justificationCancellation)
                    expect(res.body.notifyEmail).to.eq(fixAppointment.notifyEmail)
                    expect(res.body.requestAcceptance).to.eq(fixAppointment.requestAcceptance)
                    expect(res.body.hidden).to.eq(fixAppointment.hidden)
                    expect(res.body.externalId).to.eq(fixAppointment.externalId)
                    expect(res.body.originIntegration.id).to.eq(fixAppointment.originIntegration.id)
                    expect(res.body.status).to.eq(fixAppointment.status)
                    expect(res.body.customFields.teste).to.eq(fixAppointment.customFields.teste)
                })
            })
        })
    });

    it('DELETE Appointment', () => {
        cy.getAllAppointment(fixAppointment).then((res) => {
            expect(res.status).to.eq(200)
      
        }).then((resGetAll) => {
            cy.sortList(resGetAll, fixAppointment).then((id) => {
                cy.deleteAppointment(id).then((res) => {
                    expect(res.status).to.eq(204)
                })
            })
        })
    });
})