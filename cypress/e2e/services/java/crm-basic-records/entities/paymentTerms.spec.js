const fixPaymentTerms = require('../../../../../fixtures/api_payloads/java/basic-records/entities/paymentTerms.json')

describe('Entities Payment Terms', () => {

    it('POST Payment Terms', () => {
        cy.postPaymentTerms(fixPaymentTerms).then((res) => {
            expect(res.status).to.eq(201)
            
            expect(res.body.id).to.not.null
            expect(res.body.active).to.eq(fixPaymentTerms.active)
            expect(res.body.name).to.eq(fixPaymentTerms.name)
            expect(res.body.icon).to.eq(fixPaymentTerms.icon)
            expect(res.body.company.id).to.eq(fixPaymentTerms.company.id)
            expect(res.body.generateInstallments).to.eq(fixPaymentTerms.generateInstallments)
            expect(res.body.quantityInstallments).to.eq(fixPaymentTerms.quantityInstallments)
            expect(res.body.accrualInstallments).to.eq(fixPaymentTerms.accrualInstallments)
            expect(res.body.rounding).to.eq(fixPaymentTerms.rounding)
        })
    });

    it('GET Payment Terms', () => {
        cy.getAllPaymentTerms().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixPaymentTerms).then((id) => {

                cy.getOnePaymentTerms(id).then((resGetOne) => {
                    expect(resGetOne.status).to.eq(200)
                    expect(resGetOne.body.id).to.not.null
                    expect(resGetOne.body.active).to.eq(fixPaymentTerms.active)
                    expect(resGetOne.body.company.id).to.eq(fixPaymentTerms.company.id)
                    expect(resGetOne.body.generateInstallments).to.eq(fixPaymentTerms.generateInstallments)
                    expect(resGetOne.body.quantityInstallments).to.eq(fixPaymentTerms.quantityInstallments)
                    expect(resGetOne.body.accrualInstallments).to.eq(fixPaymentTerms.accrualInstallments)
                    expect(resGetOne.body.rounding).to.eq(fixPaymentTerms.rounding)
                })
            })
        })
    });

    it('PUT Payment Terms', () => {
        cy.getAllPaymentTerms().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixPaymentTerms).then((id) => {

                cy.putPaymentTerms(id, fixPaymentTerms).then((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body.id).to.not.null
                    expect(res.body.active).to.eq(fixPaymentTerms.active)
                    expect(res.body.name).to.eq(fixPaymentTerms.name)
                    expect(res.body.icon).to.eq(fixPaymentTerms.icon)
                    expect(res.body.company.id).to.eq(fixPaymentTerms.company.id)
                    expect(res.body.generateInstallments).to.eq(fixPaymentTerms.generateInstallments)
                    expect(res.body.quantityInstallments).to.eq(fixPaymentTerms.quantityInstallments)
                    expect(res.body.accrualInstallments).to.eq(fixPaymentTerms.accrualInstallments)
                    expect(res.body.rounding).to.eq(fixPaymentTerms.rounding)
                })
            })
        })
    });

    it('DELETE Payment Terms', () => {
        cy.getAllPaymentTerms().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixPaymentTerms).then((id) => {
                
                cy.deletePaymentTerms(id).then((res) => {
                    expect(res.status).to.eq(204)
                })
            })
        })
    });
});