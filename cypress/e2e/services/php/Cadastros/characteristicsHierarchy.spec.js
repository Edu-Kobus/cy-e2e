const fixCharacteristicsHierarchyV2 = require('../../../../fixtures/api_payloads/php/Cadastros/characteristicsHierarchy.json')

describe('Características Dependente v2', () => {

    let ID_REGISTER = null

    before(() => {
        cy.getToken()
    })

    it('POST Características Dependente v2', () => {
        cy.postCharacteristicsHierarchyV2(fixCharacteristicsHierarchyV2).should((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.id).to.not.null.and.not.undefined
            expect(res.body.caracteristicaPai.id).to.eq(fixCharacteristicsHierarchyV2.caracteristicaPai.id)
            expect(res.body.caracteristicaPai.nome).to.eq(fixCharacteristicsHierarchyV2.caracteristicaPai.nome)
            expect(res.body.caracteristicaPai.ativo).to.eq(fixCharacteristicsHierarchyV2.caracteristicaPai.ativo)
            expect(res.body.caracteristicaPai.empresa.id).to.be.not.undefined

            expect(res.body.caracteristicaFilha.id).to.eq(fixCharacteristicsHierarchyV2.caracteristicaFilha.id)
            expect(res.body.caracteristicaFilha.nome).to.eq(fixCharacteristicsHierarchyV2.caracteristicaFilha.nome)
            expect(res.body.caracteristicaFilha.ativo).to.eq(fixCharacteristicsHierarchyV2.caracteristicaFilha.ativo)
            expect(res.body.caracteristicaFilha.empresa.id).to.be.not.undefined

            ID_REGISTER = res.body.id
        })
    })

    it('GET Características Dependente v2', () => {
        cy.getAllCharacteristicsHierarchyV2().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)
        })

        cy.getOneCharacteristicsHierarchyV2(ID_REGISTER).should((res) => {cy
            expect(res.status).to.eq(200)
            expect(res.body.id).to.not.null.and.not.undefined
            expect(res.body.caracteristicaPai.id).to.eq(fixCharacteristicsHierarchyV2.caracteristicaPai.id)
            expect(res.body.caracteristicaPai.nome).to.eq(fixCharacteristicsHierarchyV2.caracteristicaPai.nome)
            expect(res.body.caracteristicaPai.ativo).to.eq(fixCharacteristicsHierarchyV2.caracteristicaPai.ativo)
            expect(res.body.caracteristicaPai.empresa.id).to.be.not.undefined

            expect(res.body.caracteristicaFilha.id).to.eq(fixCharacteristicsHierarchyV2.caracteristicaFilha.id)
            expect(res.body.caracteristicaFilha.nome).to.eq(fixCharacteristicsHierarchyV2.caracteristicaFilha.nome)
            expect(res.body.caracteristicaFilha.ativo).to.eq(fixCharacteristicsHierarchyV2.caracteristicaFilha.ativo)
            expect(res.body.caracteristicaFilha.empresa.id).to.be.not.undefined
        })
    })

    it('PUT Características Dependente v2', () => {
        fixCharacteristicsHierarchyV2.id = ID_REGISTER

        cy.putCharacteristicsHierarchyV2(ID_REGISTER, fixCharacteristicsHierarchyV2).should((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.id).to.not.null.and.not.undefined
            expect(res.body.caracteristicaPai.id).to.eq(fixCharacteristicsHierarchyV2.caracteristicaPai.id)
            expect(res.body.caracteristicaPai.nome).to.eq(fixCharacteristicsHierarchyV2.caracteristicaPai.nome)
            expect(res.body.caracteristicaPai.ativo).to.eq(fixCharacteristicsHierarchyV2.caracteristicaPai.ativo)
            expect(res.body.caracteristicaPai.empresa.id).to.be.not.undefined

            expect(res.body.caracteristicaFilha.id).to.eq(fixCharacteristicsHierarchyV2.caracteristicaFilha.id)
            expect(res.body.caracteristicaFilha.nome).to.eq(fixCharacteristicsHierarchyV2.caracteristicaFilha.nome)
            expect(res.body.caracteristicaFilha.ativo).to.eq(fixCharacteristicsHierarchyV2.caracteristicaFilha.ativo)
            expect(res.body.caracteristicaFilha.empresa.id).to.be.not.undefined
        })
    })

    it('DELETE Características Dependente v2', () => {
        cy.deleteCharacteristicsHierarchyV2(ID_REGISTER).should((res) => {
            expect(res.status).to.eq(204)
        })
    })
})