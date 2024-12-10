const fixService = require('../../../../../fixtures/api_payloads/java/basic-records/entities/service.json')

describe('Entities Service  ', () => {

    it('POST Service', () => {
        cy.postService(fixService).then((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.id).to.be.not.undefined
            expect(res.body.name).to.eq(fixService.name)
            expect(res.body.company.id).to.eq(fixService.company.id)
            expect(res.body.salePrice).to.eq(fixService.salePrice)
            expect(res.body.maximumDiscount).to.eq(fixService.maximumDiscount)
            expect(res.body.note).to.eq(fixService.note)
            expect(res.body.serviceCategory.id).to.be.not.undefined
            expect(res.body.unitMeasurement.id).to.be.not.undefined
        })
    });

    it('GET Service', () => {
        cy.getAllService().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixService).then((id) => {

                cy.getOneService(id).then((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body.id).to.be.not.undefined
                    expect(res.status).to.eq(200)
                    expect(res.body.id).to.be.not.undefined
                    expect(res.body.name).to.eq(fixService.name)
                    expect(res.body.company.id).to.eq(fixService.company.id)
                    expect(res.body.salePrice).to.eq(fixService.salePrice)
                    expect(res.body.maximumDiscount).to.eq(fixService.maximumDiscount)
                    expect(res.body.note).to.eq(fixService.note)

                    expect(res.body.serviceCategory.id).to.be.not.undefined
                    expect(res.body.unitMeasurement.id).to.be.not.undefined
                })
            })
        })
    });

    it('PUT Service', () => {
        cy.getAllService().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixService).then((id) => {

                cy.putService(id, fixService).then((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body.id).to.be.not.undefined
                    expect(res.body.name).to.eq(fixService.name)
                    expect(res.body.company.id).to.eq(fixService.company.id)
                    expect(res.body.salePrice).to.eq(fixService.salePrice)
                    expect(res.body.maximumDiscount).to.eq(fixService.maximumDiscount)
                    expect(res.body.note).to.eq(fixService.note)

                    expect(res.body.serviceCategory.id).to.be.not.undefined
                    expect(res.body.unitMeasurement.id).to.be.not.undefined
                })
            })
        })
    });

    it('DELETE Service', () => {
        cy.getAllService().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixService).then((id) => {

                cy.deleteService(id).then((res) => {
                    expect(res.status).to.eq(204)
                })
            })
        })
    });
});