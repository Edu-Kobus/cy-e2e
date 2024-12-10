const fixServiceCategoriesV2 = require('../../../../fixtures/api_payloads/php/Cadastros/categoriaDeServico.json')

describe('Categoria de Serviço v2', () => {
    before(() => {
        cy.getToken()
    })

    it('POST Categoria de Serviço v2', () => {
        cy.postServiceCategoriesV2(fixServiceCategoriesV2).should((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.id).to.not.null.and.not.undefined
            expect(res.body.idErp).to.eq(fixServiceCategoriesV2.idErp)
            expect(res.body.nome).to.eq(fixServiceCategoriesV2.nome)
            expect(res.body.ativo).to.eq(true)
            expect(res.body.empresa.id).to.be.not.undefined
        })
    })

    it('GET Categoria de Serviço v2', () => {
        cy.getAllServiceCategoriesV2().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)
            
            cy.sortList(resGetAll, fixServiceCategoriesV2).then((id) => {
                cy.getOneServiceCategoriesV2(id).should((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body.id).to.not.null.and.not.undefined
                    expect(res.body.idErp).to.eq(fixServiceCategoriesV2.idErp)
                    expect(res.body.nome).to.eq(fixServiceCategoriesV2.nome)
                    expect(res.body.ativo).to.eq(true)
                    expect(res.body.empresa.id).to.be.not.undefined
                })
            })
        })
    })

    it('PUT Categoria de Serviço v2', () => {
        cy.getAllServiceCategoriesV2().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixServiceCategoriesV2).then((id) => {
                cy.putServiceCategoriesV2(id, fixServiceCategoriesV2).should((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body.id).to.not.null.and.not.undefined
                    expect(res.body.idErp).to.eq(fixServiceCategoriesV2.idErp)
                    expect(res.body.nome).to.eq(fixServiceCategoriesV2.nome)
                    expect(res.body.ativo).to.eq(true)
                    expect(res.body.empresa.id).to.be.not.undefined
                })
            })
        })
    })

    it('DELETE Categoria de Serviço v2', () => {
        cy.getAllServiceCategoriesV2().then((resGetAll) => {

            cy.sortList(resGetAll, fixServiceCategoriesV2).then((id) => {
                cy.deleteServiceCategoriesV2(id).should((res) => {
                    expect(res.status).to.eq(204)
                })
            })
        })
    })
})