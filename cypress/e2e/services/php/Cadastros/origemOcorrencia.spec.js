const fixture = require('../../../../fixtures/api_payloads/php/Cadastros/origemOcorrencia.json')

describe('Origem Ocorrência v2', () => {
    before(() => {
        cy.getToken()
    })

    it('POST Origem Ocorrência v2', () => {
        cy.postOccurrenceOriginV2(fixture).should((res) => {
            
            expect(res.status).to.eq(201)
            expect(res.body.id).to.not.null
            expect(res.body.ativo).to.eq(fixture.ativo)
            expect(res.body.nome).to.eq(fixture.nome)
            expect(res.body.empresaFilial.id).to.eq(fixture.empresaFilial.id)
        })
    })

    it('GET Origem Ocorrência v2', () => {
        cy.getAllOccurrenceOriginV2().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)
            
            cy.sortList(resGetAll, fixture).then((id) => {
                cy.getOneOccurrenceOriginV2(id).should((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body.id).to.not.null
                    expect(res.body.ativo).to.eq(fixture.ativo)
                    expect(res.body.nome).to.eq(fixture.nome)
                    expect(res.body.empresaFilial.id).to.eq(fixture.empresaFilial.id)
                })
            })
        })
    })

    it('PUT Origem Ocorrência v2', () => {
        cy.getAllOccurrenceOriginV2().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixture).then((id) => {
                cy.putOccurrenceOriginV2(id, fixture).should((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body.id).to.not.null
                    expect(res.body.ativo).to.eq(fixture.ativo)
                    expect(res.body.nome).to.eq(fixture.nome)
                    expect(res.body.empresaFilial.id).to.eq(fixture.empresaFilial.id)
                })
            })
        })
    })

    it('DELETE Origem Ocorrência v2', () => {
        cy.getAllOccurrenceOriginV2().then((resGetAll) => {

            cy.sortList(resGetAll, fixture).then((id) => {
                cy.deleteOccurrenceOriginV2(id).should((res) => {
                    expect(res.status).to.eq(204)
                })
            })
        })
    })
})