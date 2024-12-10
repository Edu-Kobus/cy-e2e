const fixEventsStatus = require('../../../../../fixtures/api_payloads/java/basic-records/entities/eventsStatus.json')

describe('Entities Events Status', () => {

    it('POST Events Status', () => {
        cy.postEventStatus(fixEventsStatus).then((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.name).to.eq(fixEventsStatus.name)
            expect(res.body.active).to.eq(fixEventsStatus.active)
            expect(res.body.icon).to.eq(fixEventsStatus.icon)
            expect(res.body.customFields.name).to.eq(fixEventsStatus.customFields.name)
            expect(res.body.id).not.be.null.and.not.be.undefined
        })
    });

    it('GET Events Status', () => {
        cy.getAllEventStatus().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixEventsStatus).then((id) => {
                cy.getOneEventStatus(id).then((resGetOne) => {
                    expect(resGetOne.status).to.eq(200)
                })
            })
        })
    });

    it('PUT Events Status', () => {
        cy.getAllEventStatus().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixEventsStatus).then((id) => {
                cy.putEventStatus(id, fixEventsStatus).then((resGetOne) => {
                    expect(resGetOne.status).to.eq(200)
                    expect(resGetOne.body.name).to.eq(fixEventsStatus.name)
                    expect(resGetOne.body.active).to.eq(fixEventsStatus.active)
                    expect(resGetOne.body.icon).to.eq(fixEventsStatus.icon)
                    expect(resGetOne.body.customFields.name).to.eq(fixEventsStatus.customFields.name)
                    expect(resGetOne.body.id).not.be.null.and.not.be.undefined
                })
            })
        })
    });

    it('DELETE Events Status', () => {
        cy.getAllEventStatus().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixEventsStatus).then((id) => {
                cy.deleteEventStatus(id).then((resGetOne) => {
                    expect(resGetOne.status).to.eq(204)
                })
            })
        })
    });
});