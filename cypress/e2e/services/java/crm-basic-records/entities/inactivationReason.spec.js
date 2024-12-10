const fixInactivationReason = require('../../../../../fixtures/api_payloads/java/basic-records/entities/inactivationReason.json')

describe('Entities Inactivation Reason', () => {
 
    it('POST Inactivation Reason', () => {
        cy.postInactivationReason(fixInactivationReason).then((res) => {
            expect(res.status).to.eq(201)
            
            expect(res.body.id).to.not.null
            expect(res.body.active).to.eq(fixInactivationReason.active)
            expect(res.body.name).to.eq(fixInactivationReason.name)
        })
    });

    it('GET Inactivation Reason', () => {
        cy.getAllInactivationReason().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixInactivationReason).then((id) => {
                cy.getOneInactivationReason(id).then((resGetOne) => {
                    expect(resGetOne.status).to.eq(200)

                    expect(resGetOne.body.id).to.not.null
                    expect(resGetOne.body.active).to.eq(fixInactivationReason.active)
                    expect(resGetOne.body.name).to.eq(fixInactivationReason.name)
                })
            })
        })
    });

    it('PUT Inactivation Reason', () => {
        cy.getAllInactivationReason().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixInactivationReason).then((id) => {
                cy.putInactivationReason(id, fixInactivationReason).then((res) => {
                    expect(res.status).to.eq(200)

                    expect(res.body.id).to.not.null
                    expect(res.body.active).to.eq(fixInactivationReason.active)
                    expect(res.body.name).to.eq(fixInactivationReason.name)
                })
            })
        })
    });

    it('DELETE Inactivation Reason', () => {
        cy.getAllInactivationReason().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixInactivationReason).then((id) => {
                cy.deleteInactivationReason(id).then((res) => {
                    expect(res.status).to.eq(204)
                })
            })
        })
    });
});