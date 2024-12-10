const fixProductCategoriesV2 = require('../../../../fixtures/api_payloads/php/Cadastros/categoriaDeProduto.json')

describe('Categoria de Produto v2', () => {
    before(() => {
        cy.getToken()
    })

    it('POST Categoria de Serviço v2', () => {
        cy.postProductCategoriesV2(fixProductCategoriesV2).should((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.id).to.not.null.and.not.undefined
            expect(res.body.idErp).to.eq(fixProductCategoriesV2.idErp)
            expect(res.body.nome).to.eq(fixProductCategoriesV2.nome)
            expect(res.body.ativo).to.eq(true)
            expect(res.body.empresa.id).to.be.not.undefined
        })
    })

    it('GET Categoria de Serviço v2', () => {
        cy.getAllProductCategoriesV2().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)
            
            cy.sortList(resGetAll, fixProductCategoriesV2).then((id) => {
                cy.getOneProductCategoriesV2(id).should((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body.id).to.not.null.and.not.undefined
                    expect(res.body.idErp).to.eq(fixProductCategoriesV2.idErp)
                    expect(res.body.nome).to.eq(fixProductCategoriesV2.nome)
                    expect(res.body.ativo).to.eq(true)
                    expect(res.body.empresa.id).to.be.not.undefined
                })
            })
        })
    })

    it('PUT Categoria de Serviço v2', () => {
        cy.getAllProductCategoriesV2().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixProductCategoriesV2).then((id) => {
                cy.putProductCategoriesV2(id, fixProductCategoriesV2).should((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body.id).to.not.null.and.not.undefined
                    expect(res.body.idErp).to.eq(fixProductCategoriesV2.idErp)
                    expect(res.body.nome).to.eq(fixProductCategoriesV2.nome)
                    expect(res.body.ativo).to.eq(true)
                    expect(res.body.empresa.id).to.be.not.undefined
                })
            })
        })
    })

    it('DELETE Categoria de Serviço v2', () => {
        cy.getAllProductCategoriesV2().then((resGetAll) => {

            cy.sortList(resGetAll, fixProductCategoriesV2).then((id) => {
                cy.deleteProductCategoriesV2(id).should((res) => {
                    expect(res.status).to.eq(204)
                })
            })
        })
    })
})