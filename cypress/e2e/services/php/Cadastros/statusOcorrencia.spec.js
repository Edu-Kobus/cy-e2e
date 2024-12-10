const fixture = require('../../../../fixtures/api_payloads/php/Cadastros/statusOcorrencia.json')

describe('Status Ocorrência v2', () => {
    before(() => {
        cy.getToken()
    })

    it('POST Status Ocorrência v2', () => {
        cy.postOccurrenceStatusV2(fixture).should((res) => {
            
            expect(res.status).to.eq(201)
            expect(res.body.id).to.not.null
            expect(res.body.ativo).to.eq(fixture.ativo)
            expect(res.body.nome).to.eq(fixture.nome)
            expect(res.body.empresaFilial.id).to.eq(fixture.empresaFilial.id)
            expect(res.body.iniciaOcorrencia).to.eq(fixture.iniciaOcorrencia)
            expect(res.body.encerraOcorrencia).to.eq(fixture.encerraOcorrencia)
            expect(res.body.corPadrao).to.eq(fixture.corPadrao)
            expect(res.body.ordemExibicao).to.eq(fixture.ordemExibicao)
        })
    })

    it('GET Status Ocorrência v2', () => {
        cy.getAllOccurrenceStatusV2().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)
            
            cy.sortList(resGetAll, fixture).then((id) => {
                cy.getOneOccurrenceStatusV2(id).should((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body.id).to.not.null
                    expect(res.body.ativo).to.eq(fixture.ativo)
                    expect(res.body.nome).to.eq(fixture.nome)
                    expect(res.body.empresaFilial.id).to.eq(fixture.empresaFilial.id)
                    expect(res.body.iniciaOcorrencia).to.eq(fixture.iniciaOcorrencia)
                    expect(res.body.encerraOcorrencia).to.eq(fixture.encerraOcorrencia)
                    expect(res.body.corPadrao).to.eq(fixture.corPadrao)
                    expect(res.body.ordemExibicao).to.eq(fixture.ordemExibicao)
                })
            })
        })
    })

    it('PUT Status Ocorrência v2', () => {
        cy.getAllOccurrenceStatusV2().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixture).then((id) => {
                cy.putOccurrenceStatusV2(id, fixture).should((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body.id).to.not.null
                    expect(res.body.ativo).to.eq(fixture.ativo)
                    expect(res.body.nome).to.eq(fixture.nome)
                    expect(res.body.empresaFilial.id).to.eq(fixture.empresaFilial.id)
                    expect(res.body.iniciaOcorrencia).to.eq(fixture.iniciaOcorrencia)
                    expect(res.body.encerraOcorrencia).to.eq(fixture.encerraOcorrencia)
                    expect(res.body.corPadrao).to.eq(fixture.corPadrao)
                    expect(res.body.ordemExibicao).to.eq(fixture.ordemExibicao)
                })
            })
        })
    })

    it('DELETE Status Ocorrência v2', () => {
        cy.getAllOccurrenceStatusV2().then((resGetAll) => {

            cy.sortList(resGetAll, fixture).then((id) => {
                cy.deleteOccurrenceStatusV2(id).should((res) => {
                    expect(res.status).to.eq(204)
                })
            })
        })
    })
})