const fixProduct = require('../../../../../fixtures/api_payloads/java/basic-records/entities/product.json')

describe('Entities Product ', () => {

    it('POST Product ', () => {
        cy.postProduct(fixProduct).then((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.id).to.not.null
            expect(res.body.idErp).to.eq(fixProduct.idErp)
            expect(res.body.name).to.eq(fixProduct.name)
            expect(res.body.partNumber).to.eq(fixProduct.partNumber)
            expect(res.body.derivationPartNumber).to.eq(fixProduct.derivationPartNumber)
            expect(res.body.derivationName).to.eq(fixProduct.derivationName)
            expect(res.body.salePrice).to.eq(fixProduct.salePrice)
            expect(res.body.maximumDiscount).to.eq(fixProduct.maximumDiscount)
            expect(res.body.defaultQuantity).to.eq(fixProduct.defaultQuantity)
            expect(res.body.correctionFactor).to.eq(fixProduct.correctionFactor)
            expect(res.body.saleType).to.eq(fixProduct.saleType)
            expect(res.body.ipi).to.eq(fixProduct.ipi)
            expect(res.body.icms).to.eq(fixProduct.icms)
            expect(res.body.weight).to.eq(fixProduct.weight)
            expect(res.body.note).to.eq(fixProduct.note)

            expect(res.body.productCategory.id).to.be.not.undefined
            expect(res.body.unitMeasurement.id).to.be.not.undefined
        })
    });

    it('GET Product ', () => {
        cy.getAllProduct().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixProduct).then((id) => {

                cy.getOneProduct(id).then((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body.id).to.not.null
                    expect(res.body.idErp).to.eq(fixProduct.idErp)
                    expect(res.body.name).to.eq(fixProduct.name)
                    expect(res.body.partNumber).to.eq(fixProduct.partNumber)
                    expect(res.body.derivationPartNumber).to.eq(fixProduct.derivationPartNumber)
                    expect(res.body.derivationName).to.eq(fixProduct.derivationName)
                    expect(res.body.salePrice).to.eq(fixProduct.salePrice)
                    expect(res.body.maximumDiscount).to.eq(fixProduct.maximumDiscount)
                    expect(res.body.defaultQuantity).to.eq(fixProduct.defaultQuantity)
                    expect(res.body.correctionFactor).to.eq(fixProduct.correctionFactor)
                    expect(res.body.saleType).to.eq(fixProduct.saleType)
                    expect(res.body.ipi).to.eq(fixProduct.ipi)
                    expect(res.body.icms).to.eq(fixProduct.icms)
                    expect(res.body.weight).to.eq(fixProduct.weight)
                    expect(res.body.note).to.eq(fixProduct.note)

                    expect(res.body.productCategory.id).to.be.not.undefined
                    expect(res.body.unitMeasurement.id).to.be.not.undefined
                })
            })
        })
    });

    it('PUT Product ', () => {
        cy.getAllProduct().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixProduct).then((id) => {

                cy.putProduct(id, fixProduct).then((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body.id).to.not.null
                    expect(res.body.idErp).to.eq(fixProduct.idErp)
                    expect(res.body.name).to.eq(fixProduct.name)
                    expect(res.body.partNumber).to.eq(fixProduct.partNumber)
                    expect(res.body.derivationPartNumber).to.eq(fixProduct.derivationPartNumber)
                    expect(res.body.derivationName).to.eq(fixProduct.derivationName)
                    expect(res.body.salePrice).to.eq(fixProduct.salePrice)
                    expect(res.body.maximumDiscount).to.eq(fixProduct.maximumDiscount)
                    expect(res.body.defaultQuantity).to.eq(fixProduct.defaultQuantity)
                    expect(res.body.correctionFactor).to.eq(fixProduct.correctionFactor)
                    expect(res.body.saleType).to.eq(fixProduct.saleType)
                    expect(res.body.ipi).to.eq(fixProduct.ipi)
                    expect(res.body.icms).to.eq(fixProduct.icms)
                    expect(res.body.weight).to.eq(fixProduct.weight)
                    expect(res.body.note).to.eq(fixProduct.note)
                    
                    expect(res.body.productCategory.id).to.be.not.undefined
                    expect(res.body.unitMeasurement.id).to.be.not.undefined
                })
            })
        })
    });

    it('DELETE Product ', () => {
        cy.getAllProduct().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixProduct).then((id) => {

                cy.deleteProduct(id).then((res) => {
                    expect(res.status).to.eq(204)
                })
            })
        })
    });
});