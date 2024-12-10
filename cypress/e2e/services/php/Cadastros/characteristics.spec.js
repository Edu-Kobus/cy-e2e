const fixCharacteristicsV2 = require('../../../../fixtures/api_payloads/php/Cadastros/categoriaDeServico.json')

describe('Características v2', () => {

    let ID_REGISTER = null

    before(() => {
        cy.getToken()
    })

    it('POST Características v2', () => {
        cy.postCharacteristicsV2(fixCharacteristicsV2).should((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.id).to.not.null.and.not.undefined
            expect(res.body.nome).to.eq(fixCharacteristicsV2.nome)
            expect(res.body.ativo).to.eq(true)
            expect(res.body.empresa.id).to.be.not.undefined

            ID_REGISTER = res.body.id
        })
    })

    it('GET Características v2', () => {
        cy.getAllCharacteristicsV2().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)
        })

        cy.getOneCharacteristicsV2(ID_REGISTER).should((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.id).to.not.null.and.not.undefined
            expect(res.body.nome).to.eq(fixCharacteristicsV2.nome)
            expect(res.body.ativo).to.eq(true)
            expect(res.body.empresa.id).to.be.not.undefined
        })
    })

    it('PUT Características v2', () => {
        fixCharacteristicsV2.id = ID_REGISTER

        cy.putCharacteristicsV2(ID_REGISTER, fixCharacteristicsV2).should((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.id).to.not.null.and.not.undefined
            expect(res.body.nome).to.eq(fixCharacteristicsV2.nome)
            expect(res.body.ativo).to.eq(true)
            expect(res.body.empresa.id).to.be.not.undefined
        })
    })

    it('DELETE Características v2', () => {
        cy.deleteCharacteristicsV2(ID_REGISTER).should((res) => {
            expect(res.status).to.eq(204)
        })
    })
})