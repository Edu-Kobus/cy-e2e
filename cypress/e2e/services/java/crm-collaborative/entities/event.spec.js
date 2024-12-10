const fixEvent = require('../../../../../fixtures/api_payloads/java/collaborative/entities/event.json')

describe('Entity Event', () => {

    it('POST Event', () => {
        cy.postEvent(fixEvent).then((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.id).to.be.not.undefined
            expect(res.body.companyBranch.id).to.eq(fixEvent.companyBranch.id)
            expect(res.body.companyBranch.company.id).to.eq(fixEvent.companyBranch.company.id)
            expect(res.body.companyBranch.branch.id).to.eq(fixEvent.companyBranch.branch.id)
            expect(res.body.user.id).to.eq(fixEvent.user.id)
            expect(res.body.eventType.id).to.eq(fixEvent.eventType.id)
            expect(res.body.status.id).to.eq(fixEvent.status.id)
            expect(res.body.description).to.eq(fixEvent.description)
            expect(res.body.startDate).to.eq(fixEvent.startDate)
            expect(res.body.endDate).to.eq(fixEvent.endDate)
            expect(res.body.startHour).to.eq(fixEvent.startHour)
            expect(res.body.endHour).to.eq(fixEvent.endHour)
        })
    });

    it('GET Event', () => {
        cy.getAllEvent().then((res) => {
            expect(res.status).to.eq(200)
            
            cy.sortList(res, fixEvent).then((id) => {
                cy.getOneEvent(fixEvent, id).then((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body.id).to.eq(fixEvent.id)
                    expect(res.body.companyBranch.id).to.eq(fixEvent.companyBranch.id)
                    expect(res.body.companyBranch.company.id).to.eq(fixEvent.companyBranch.company.id)
                    expect(res.body.companyBranch.branch.id).to.eq(fixEvent.companyBranch.branch.id)
                    expect(res.body.user.id).to.eq(fixEvent.user.id)
                    expect(res.body.eventType.id).to.eq(fixEvent.eventType.id)
                    expect(res.body.status.id).to.eq(fixEvent.status.id)
                    expect(res.body.description).to.eq(fixEvent.description)
                    expect(res.body.startDate).to.eq(fixEvent.startDate)
                    expect(res.body.endDate).to.eq(fixEvent.endDate)
                    expect(res.body.startHour).to.eq(fixEvent.startHour)
                    expect(res.body.endHour).to.eq(fixEvent.endHour)
                })
            })
        })
    });

    it('PUT Event', () => {
        cy.getAllEvent(fixEvent).then((res) => {
            expect(res.status).to.eq(200)
      
            cy.sortList(res, fixEvent).then((id) => {
                cy.putEvent(fixEvent, id).then((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body.id).to.eq(fixEvent.id)
                    expect(res.body.companyBranch.id).to.eq(fixEvent.companyBranch.id)
                    expect(res.body.companyBranch.company.id).to.eq(fixEvent.companyBranch.company.id)
                    expect(res.body.companyBranch.branch.id).to.eq(fixEvent.companyBranch.branch.id)
                    expect(res.body.user.id).to.eq(fixEvent.user.id)
                    expect(res.body.eventType.id).to.eq(fixEvent.eventType.id)
                    expect(res.body.status.id).to.eq(fixEvent.status.id)
                    expect(res.body.description).to.eq(fixEvent.description)
                    expect(res.body.startDate).to.eq(fixEvent.startDate)
                    expect(res.body.endDate).to.eq(fixEvent.endDate)
                    expect(res.body.startHour).to.eq(fixEvent.startHour)
                    expect(res.body.endHour).to.eq(fixEvent.endHour)
                })
            })
        })
    });

    it('DELETE Event', () => {
        cy.getAllEvent(fixEvent).then((res) => {
            expect(res.status).to.eq(200)
      
            cy.sortList(res, fixEvent).then((id) => {
                cy.deleteEvent(id).then((res) => {
                    expect(res.status).to.eq(204)
                })
            })
        })
    });
})