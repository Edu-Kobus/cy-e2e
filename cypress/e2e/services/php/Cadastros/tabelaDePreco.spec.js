const fixPriceTableV2 = require('../../../../fixtures/api_payloads/php/Cadastros/tabelaDePreco.json')

describe('Tabela de Preço v2', () => {
    before(() => {
        cy.getToken()
    })

    var ID_REGISTER = null

    it('POST Tabela de Preço v2', () => {
        cy.postPriceTableV2(fixPriceTableV2).should((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.id).to.not.null.and.not.undefined
            expect(res.body.idErp).to.eq(fixPriceTableV2.idErp)
            expect(res.body.nome).to.eq(fixPriceTableV2.nome)
            expect(res.body.ativo).to.eq(true)
            expect(res.body.empresaFilial.id).to.be.not.undefined
            expect(res.body.empresaFilial.empresa.id).to.be.not.undefined
            expect(res.body.empresaFilial.filial.id).to.be.not.undefined

            ID_REGISTER = res.body.id
        })
    })

    it('GET Tabela de Preço v2', () => {
        cy.getAllPriceTableV2().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)
        })

        cy.getOnePriceTableV2(ID_REGISTER).should((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.id).to.not.null
        })
    })

    it('PUT Tabela de Preço v2', () => {
        fixPriceTableV2.id = ID_REGISTER

        cy.putPriceTableV2(ID_REGISTER, fixPriceTableV2).should((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.id).to.not.null.and.not.undefined
            expect(res.body.idErp).to.eq(fixPriceTableV2.idErp)
            expect(res.body.nome).to.eq(fixPriceTableV2.nome)
            expect(res.body.ativo).to.eq(true)
            expect(res.body.empresaFilial.id).to.be.not.undefined
            expect(res.body.empresaFilial.empresa.id).to.be.not.undefined
            expect(res.body.empresaFilial.filial.id).to.be.not.undefined
        })
    })

    it('DELETE Tabela de Preço v2', () => {
        cy.deletePriceTableV2(ID_REGISTER).should((res) => {
            expect(res.status).to.eq(204)
        })
    })
})