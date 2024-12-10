const { faker } = require('@faker-js/faker')
const fixOpportunitie = require('../../../../fixtures/api_payloads/php/Oportunidades/add-opportunities.json')

describe('Opportunities', () => {

    let ID_REGISTER = null

    before(() => {
        cy.getToken()
    })

    it('POST Opportunity', () => {
        fixOpportunitie.nomeOportunidade = faker.company.bs()
        fixOpportunitie.numeroPedido = faker.random.numeric(5)
        fixOpportunitie.descricao = faker.random.words(500)

        cy.postOpportunityV3(fixOpportunitie).then((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.id).to.be.not.undefined
            expect(res.body.conta.id).to.eq(fixOpportunitie.conta.id)
            expect(res.body.empresaFilial.id).to.eq(fixOpportunitie.empresaFilial.id)
            expect(res.body.data).not.be.empty
            expect(res.body.hora).not.be.empty
            expect(res.body.empresaId).to.eq(fixOpportunitie.empresaId)
            expect(res.body.nomeOportunidade).to.eq(fixOpportunitie.nomeOportunidade)
            expect(res.body.usuario.id).to.eq(fixOpportunitie.usuario.id)
            expect(res.body.estagio).to.eq(fixOpportunitie.estagio)
            expect(res.body.estagioStandby).to.eq(fixOpportunitie.estagioStandby)
            expect(res.body.probabilidade).to.eq(fixOpportunitie.probabilidade)
            expect(res.body.probabilidadeStandby).to.eq(fixOpportunitie.probabilidadeStandby)
            expect(res.body.numeroPedido).to.eq(fixOpportunitie.numeroPedido)
            expect(res.body.autoNumerada).to.eq(fixOpportunitie.autoNumerada)
            expect(res.body.valorPrevistoInicial).to.eq(fixOpportunitie.valorPrevistoInicial)
            expect(res.body.valorPrevisto).to.eq(fixOpportunitie.valorPrevisto)
            expect(res.body.valorFechado).to.eq(fixOpportunitie.valorFechado)
            expect(res.body.valorPrevistoMoeda).to.eq(fixOpportunitie.valorPrevistoMoeda)
            expect(res.body.valorFechadoMoeda).to.eq(fixOpportunitie.valorFechadoMoeda)
            expect(res.body.quantitativoPrevisto).to.eq(fixOpportunitie.quantitativoPrevisto)
            expect(res.body.quantitativoRealizado).to.eq(fixOpportunitie.quantitativoRealizado)
            expect(res.body.historico).to.eq(fixOpportunitie.historico)
            expect(res.body.descricao).to.eq(fixOpportunitie.descricao)
            expect(res.body.tipoOportunidade.id).to.eq(fixOpportunitie.tipoOportunidade.id)
            expect(res.body.notificarEmail).to.eq(fixOpportunitie.notificarEmail)

            ID_REGISTER = res.body.id
        })
    })

    it('GET Opportunity', () => {
        cy.getAllOpportunityV3().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)
            expect(resGetAll.body.id).to.be.not.null
        })

        cy.getOneOpportunityV3(ID_REGISTER).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.id).to.be.not.undefined
            expect(res.body.conta.id).to.eq(fixOpportunitie.conta.id)
            expect(res.body.empresaFilial.id).to.eq(fixOpportunitie.empresaFilial.id)
            expect(res.body.empresaId).to.eq(fixOpportunitie.empresaId)
            expect(res.body.nomeOportunidade).to.eq(fixOpportunitie.nomeOportunidade)
            expect(res.body.usuario.id).to.eq(fixOpportunitie.usuario.id)
            expect(res.body.estagio).to.eq(fixOpportunitie.estagio)
            expect(res.body.estagioStandby).to.eq(fixOpportunitie.estagioStandby)
            expect(res.body.probabilidade).to.eq(fixOpportunitie.probabilidade)
            expect(res.body.probabilidadeStandby).to.eq(fixOpportunitie.probabilidadeStandby)
            expect(res.body.numeroPedido).to.eq(fixOpportunitie.numeroPedido)
            expect(res.body.autoNumerada).to.eq(fixOpportunitie.autoNumerada)
            expect(res.body.valorPrevistoInicial).to.eq(fixOpportunitie.valorPrevistoInicial)
            expect(res.body.valorPrevisto).to.eq(fixOpportunitie.valorPrevisto)
            expect(res.body.valorFechado).to.eq(fixOpportunitie.valorFechado)
            expect(res.body.valorPrevistoMoeda).to.eq(fixOpportunitie.valorPrevistoMoeda)
            expect(res.body.valorFechadoMoeda).to.eq(fixOpportunitie.valorFechadoMoeda)
            expect(res.body.quantitativoPrevisto).to.eq(fixOpportunitie.quantitativoPrevisto)
            expect(res.body.quantitativoRealizado).to.eq(fixOpportunitie.quantitativoRealizado)
            expect(res.body.historico).to.eq(fixOpportunitie.historico)
            expect(res.body.descricao).to.eq(fixOpportunitie.descricao)
            expect(res.body.tipoOportunidade.id).to.eq(fixOpportunitie.tipoOportunidade.id)
            expect(res.body.notificarEmail).to.eq(fixOpportunitie.notificarEmail)
        })
    })

    it('PUT Opportunity', () => {
        fixOpportunitie.id = ID_REGISTER
        fixOpportunitie.nomeOportunidade = faker.company.bs()
        fixOpportunitie.numeroPedido = faker.random.numeric(5)
        fixOpportunitie.descricao = faker.random.words(500)

        cy.putOpportunityV3(ID_REGISTER, fixOpportunitie).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.id).to.be.not.undefined
            expect(res.body.conta.id).to.eq(fixOpportunitie.conta.id)
            expect(res.body.empresaFilial.id).to.eq(fixOpportunitie.empresaFilial.id)
            expect(res.body.data).not.be.empty
            expect(res.body.hora).not.be.empty
            expect(res.body.empresaId).to.eq(fixOpportunitie.empresaId)
            expect(res.body.nomeOportunidade).to.eq(fixOpportunitie.nomeOportunidade)
            expect(res.body.usuario.id).to.eq(fixOpportunitie.usuario.id)
            expect(res.body.estagio).to.eq(fixOpportunitie.estagio)
            expect(res.body.estagioStandby).to.eq(fixOpportunitie.estagioStandby)
            expect(res.body.probabilidade).to.eq(fixOpportunitie.probabilidade)
            expect(res.body.probabilidadeStandby).to.eq(fixOpportunitie.probabilidadeStandby)
            expect(res.body.numeroPedido).to.eq(fixOpportunitie.numeroPedido)
            expect(res.body.autoNumerada).to.eq(fixOpportunitie.autoNumerada)
            expect(res.body.valorPrevistoInicial).to.eq(fixOpportunitie.valorPrevistoInicial)
            expect(res.body.valorPrevisto).to.eq(fixOpportunitie.valorPrevisto)
            expect(res.body.valorFechado).to.eq(fixOpportunitie.valorFechado)
            expect(res.body.valorPrevistoMoeda).to.eq(fixOpportunitie.valorPrevistoMoeda)
            expect(res.body.valorFechadoMoeda).to.eq(fixOpportunitie.valorFechadoMoeda)
            expect(res.body.quantitativoPrevisto).to.eq(fixOpportunitie.quantitativoPrevisto)
            expect(res.body.quantitativoRealizado).to.eq(fixOpportunitie.quantitativoRealizado)
            expect(res.body.historico).to.eq(fixOpportunitie.historico)
            expect(res.body.descricao).to.eq(fixOpportunitie.descricao)
            expect(res.body.tipoOportunidade.id).to.eq(fixOpportunitie.tipoOportunidade.id)
            expect(res.body.notificarEmail).to.eq(fixOpportunitie.notificarEmail)
        })
    })

    it('DELETE Opportunity', () => {
        cy.deleteOpportunityV3(ID_REGISTER).should((res) => {
            expect(res.status).to.eq(204)
        })
    })
})