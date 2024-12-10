const fixUnitMeasurement = require('../../../../fixtures/api_payloads/php/Cadastros/unidadeDeMedida.json')

describe('Unidade de Medida v2', () => {

    let ID_REGISTER = null

    before(() => {
        cy.getToken()
    })

    it('POST Unidade de Medida v2', () => {
        cy.postUnitMeasurement(fixUnitMeasurement).should((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.id).to.not.null.and.not.undefined
            expect(res.body.nome).to.eq(fixUnitMeasurement.nome)
            expect(res.body.sigla).to.eq(fixUnitMeasurement.sigla)
            expect(res.body.ativo).to.eq(true)

            ID_REGISTER = res.body.return
        })
    })

    it('GET Unidade de Medida v2', () => {
        cy.getAllUnitMeasurement().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)
        })

        cy.getOneUnitMeasurement(ID_REGISTER).should((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.id).to.not.null
            expect(res.body.nome).to.eq(fixUnitMeasurement.nome)
            expect(res.body.sigla).to.eq(fixUnitMeasurement.sigla)
            expect(res.body.ativo).to.eq(true)
        })
    })

    it('PUT Unidade de Medida v2', () => {
        fixUnitMeasurement.id = ID_REGISTER

        cy.putUnitMeasurement(ID_REGISTER, fixUnitMeasurement).should((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.id).to.eq(ID_REGISTER)
            expect(res.body.nome).to.eq(fixUnitMeasurement.nome)
            expect(res.body.sigla).to.eq(fixUnitMeasurement.sigla)
            expect(res.body.ativo).to.eq(true)
        })
    })

    it('DELETE Unidade de Medida v2', () => {
        cy.deleteUnitMeasurement(ID_REGISTER).should((res) => {
            expect(res.status).to.eq(204)
        })
    })
})