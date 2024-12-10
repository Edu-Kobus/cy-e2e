const fixProduct = require('../../../../../fixtures/api_payloads/java/basic-records/entities/productCategories.json')

describe('Entities Product Categories', () => {

    it('POST Product Categories', () => {
        cy.postProductCategories(fixProduct).then((res) => {
            expect(res.status).to.eq(201)
            
            expect(res.body.id).to.not.null
            expect(res.body.idErp).to.eq(fixProduct.idErp)
            expect(res.body.name).to.eq(fixProduct.name)
            expect(res.body.company.id).to.eq(fixProduct.company.id)
        })
    });

    it('GET Product Categories', () => {
        cy.getAllProductCategories().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixProduct).then((id) => {
                cy.getOneProductCategories(id).then((resGetOne) => {
                    expect(resGetOne.status).to.eq(200)

                    expect(resGetOne.body.id).to.not.null
                    expect(resGetOne.body.active).to.eq(fixProduct.active)
                })
            })
        })
    });

    it('PUT Product Categories', () => {
        cy.getAllProductCategories().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixProduct).then((id) => {
                cy.putProductCategories(id, fixProduct).then((res) => {
                    expect(res.status).to.eq(200)

                    expect(res.body.id).to.not.null
                    expect(res.body.active).to.eq(fixProduct.active)
                    expect(res.body.idErp).to.eq(fixProduct.idErp)
                    expect(res.body.name).to.eq(fixProduct.name)
                    expect(res.body.company.id).to.eq(fixProduct.company.id)
                })
            })
        })
    });

    it('DELETE Product Categories', () => {
        cy.getAllProductCategories().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixProduct).then((id) => {
                cy.deleteProductCategories(id).then((res) => {
                    expect(res.status).to.eq(204)
                })
            })
        })
    });
});