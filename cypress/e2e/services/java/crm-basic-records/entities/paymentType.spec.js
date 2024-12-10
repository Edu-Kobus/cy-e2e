const fixPaymentType = require('../../../../../fixtures/api_payloads/java/basic-records/entities/paymentType.json')

describe('Entities Payment Type', () => {

    it('POST Payment Type', () => {
        cy.postPaymentType(fixPaymentType).then((res) => {
            expect(res.status).to.eq(201)
            
            expect(res.body.id).to.not.null
            expect(res.body.active).to.eq(fixPaymentType.active)
            expect(res.body.name).to.eq(fixPaymentType.name)
            expect(res.body.icon).to.eq(fixPaymentType.icon)
        })
    });

    it('GET Payment Type', () => {
        cy.getAllPaymentType().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixPaymentType).then((id) => {
                cy.getOnePaymentType(id).then((resGetOne) => {
                    expect(resGetOne.status).to.eq(200)

                    expect(resGetOne.body.id).to.not.null
                    expect(resGetOne.body.active).to.eq(fixPaymentType.active)
                })
            })
        })
    });

    it('PUT Payment Type', () => {
        cy.getAllPaymentType().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixPaymentType).then((id) => {
                cy.putPaymentType(id, fixPaymentType).then((res) => {
                    expect(res.status).to.eq(200)

                    expect(res.body.id).to.not.null
                    expect(res.body.active).to.eq(fixPaymentType.active)
                    expect(res.body.name).to.eq(fixPaymentType.name)
                    expect(res.body.icon).to.eq(fixPaymentType.icon)
                })
            })
        })
    });

    it('DELETE Payment Type', () => {
        cy.getAllPaymentType().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixPaymentType).then((id) => {
                cy.deletePaymentType(id).then((res) => {
                    expect(res.status).to.eq(204)
                })
            })
        })
    });
});