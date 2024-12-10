const fixEvent = require('../../../../../fixtures/api_payloads/php/Colaborativo/event.json')

describe('Event v2', () => {

  let ID_REGISTER = null

  before(() => {
      cy.getToken()
  })

  it('POST Event v2', () => {
    cy.postEventV2(fixEvent).then((res) => {
      expect(res.status).to.eq(201)
      expect(res.body.id).to.be.not.undefined
      expect(res.body.descricao).to.eq(fixEvent.descricao)
      expect(res.body.dataInicio).to.eq(fixEvent.dataInicio)
      expect(res.body.horaInicio).to.eq(fixEvent.horaInicio)
      expect(res.body.dataTermino).to.eq(fixEvent.dataTermino)
      expect(res.body.horaTermino).to.eq(fixEvent.horaTermino)
      expect(res.body.usuario.id).to.eq(fixEvent.usuario.id)
      expect(res.body.empresaFilial.id).to.eq(fixEvent.empresaFilial.id)
      expect(res.body.status.id).to.eq(fixEvent.status.id)
      expect(res.body.tipoEvento.id).to.eq(fixEvent.tipoEvento.id)

      ID_REGISTER = res.body.id
    })
  })

  it('GET Event v2', () => {
    cy.getAllEventV2().then((resGetAll) => {
      expect(resGetAll.status).to.eq(200)
    })

    cy.getOneEventV2(ID_REGISTER).should((res) => {
      expect(res.status).to.eq(200)
      expect(res.body.descricao).to.eq(fixEvent.descricao)
      expect(res.body.dataInicio).to.eq(fixEvent.dataInicio)
      expect(res.body.horaInicio).to.eq(fixEvent.horaInicio)
      expect(res.body.dataTermino).to.eq(fixEvent.dataTermino)
      expect(res.body.horaTermino).to.eq(fixEvent.horaTermino)
      expect(res.body.usuario.id).to.eq(fixEvent.usuario.id)
      expect(res.body.empresaFilial.id).to.eq(fixEvent.empresaFilial.id)
      expect(res.body.status.id).to.eq(fixEvent.status.id)
      expect(res.body.tipoEvento.id).to.eq(fixEvent.tipoEvento.id)
    })
  })

  it('PUT Event v2', () => {
    fixEvent.id = ID_REGISTER

    cy.putEventV2(ID_REGISTER, fixEvent).should((res) => {
      expect(res.status).to.eq(200)
      expect(res.body.id).to.eq(fixEvent.id)
      expect(res.body.descricao).to.eq(fixEvent.descricao)
      expect(res.body.dataInicio).to.eq(fixEvent.dataInicio)
      expect(res.body.horaInicio).to.eq(fixEvent.horaInicio)
      expect(res.body.dataTermino).to.eq(fixEvent.dataTermino)
      expect(res.body.horaTermino).to.eq(fixEvent.horaTermino)
      expect(res.body.usuario.id).to.eq(fixEvent.usuario.id)
      expect(res.body.empresaFilial.id).to.eq(fixEvent.empresaFilial.id)
      expect(res.body.status.id).to.eq(fixEvent.status.id)
      expect(res.body.tipoEvento.id).to.eq(fixEvent.tipoEvento.id)
    })
  })
  it('DELETE Event v2', () => {
    cy.deleteEventV2(ID_REGISTER).should((res) => {
      expect(res.status).to.eq(204)
    })
  })
})