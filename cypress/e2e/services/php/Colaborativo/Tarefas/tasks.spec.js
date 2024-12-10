const fixture = require('../../../../../fixtures/api_payloads/php/Colaborativo/tasks.json')

describe('Tasks v2', () => {

  let ID_REGISTER = null

    before(() => {
        cy.getToken()
    })

  it('POST Tasks v2', () => {
    cy.postTasksV2(fixture).then((res) => {
        expect(res.status).to.eq(201)
        expect(res.body.id).to.be.not.undefined
        expect(res.body.conta.id).to.eq(fixture.conta.id)
        expect(res.body.categoria.id).to.eq(fixture.categoria.id)
        expect(res.body.usuarioAgendador.id).to.eq(fixture.usuarioAgendador.id)
        expect(res.body.usuario.id).to.eq(fixture.usuario.id)
        expect(res.body.dataAceite).to.eq(fixture.dataAceite)
        expect(res.body.dataInicio).to.eq(fixture.dataInicio)
        expect(res.body.dataTermino).to.eq(fixture.dataTermino)
        expect(res.body.dataPrazo).to.eq(fixture.dataPrazo)
        expect(res.body.usuario.id).to.eq(fixture.usuario.id)
        expect(res.body.status.id).to.eq(fixture.status.id)
        expect(res.body.notificarEmail).to.eq(fixture.notificarEmail)

        ID_REGISTER = res.body.id
    })
  })

  it('GET Tasks v2', () => {
    cy.getAllTasksV2().then((resGetAll) => {
      expect(resGetAll.status).to.eq(200)
    })

    cy.getOneTasksV2(ID_REGISTER).should((res) => {
        expect(res.status).to.eq(200)
        expect(res.body.conta.id).to.eq(fixture.conta.id)
        expect(res.body.categoria.id).to.eq(fixture.categoria.id)
        expect(res.body.usuarioAgendador.id).to.eq(fixture.usuarioAgendador.id)
        expect(res.body.usuario.id).to.eq(fixture.usuario.id)
        expect(res.body.dataAceite).to.eq(fixture.dataAceite)
        expect(res.body.dataInicio).to.eq(fixture.dataInicio)
        expect(res.body.dataTermino).to.eq(fixture.dataTermino)
        expect(res.body.dataPrazo).to.eq(fixture.dataPrazo)
        expect(res.body.usuario.id).to.eq(fixture.usuario.id)
        expect(res.body.status.id).to.eq(fixture.status.id)
        expect(res.body.notificarEmail).to.eq(fixture.notificarEmail)
    })
  })

  it('PUT Tasks v2', () => {
    fixture.id = ID_REGISTER

    cy.putTasksV2(ID_REGISTER, fixture).should((res) => {
        expect(res.status).to.eq(200)
        expect(res.body.id).to.eq(fixture.id)
        expect(res.body.conta.id).to.eq(fixture.conta.id)
        expect(res.body.categoria.id).to.eq(fixture.categoria.id)
        expect(res.body.usuarioAgendador.id).to.eq(fixture.usuarioAgendador.id)
        expect(res.body.usuario.id).to.eq(fixture.usuario.id)
        expect(res.body.dataAceite).to.eq(fixture.dataAceite)
        expect(res.body.dataInicio).to.eq(fixture.dataInicio)
        expect(res.body.dataTermino).to.eq(fixture.dataTermino)
        expect(res.body.dataPrazo).to.eq(fixture.dataPrazo)
        expect(res.body.usuario.id).to.eq(fixture.usuario.id)
        expect(res.body.status.id).to.eq(fixture.status.id)
        expect(res.body.notificarEmail).to.eq(fixture.notificarEmail)
    })
  })

  it('DELETE Tasks v2', () => {
    cy.deleteTasksV2(ID_REGISTER).should((res) => {
      expect(res.status).to.eq(204)
    })
  })
})