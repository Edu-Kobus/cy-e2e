import login from '../../login.spec'

var idPrograma = 100001
var idLista = 100000

const crudForm = require('../../../../fixtures/Frontend/Crud/crud_form.json')
const { faker } = require('@faker-js/faker')
const fakeEmailExternal = faker.internet.email()

describe('Consultar Compromissos', () => {

  it('Abrir Programa', () => {
    cy.clickMenu(idLista, idPrograma)
  })

  it('Cadastrar', () => {
    const date = new Date();

    date.setHours(date.getHours() + 1);
    const startTime = ('0' + date.getHours()).slice(-2);

    date.setHours(date.getHours() + 1);
    const endTime = ('0' + date.getHours()).slice(-2);

    const currentMinute = ('0' + date.getMinutes()).slice(-2);

    cy.intercept('**/templates').as('getTemplates')
    cy.interceptGetList(idLista)
    cy.interceptSelectOptions()
    cy.interceptSelectContas()
    cy.interceptPostForm(idLista)
    cy.interceptRecurrence()
    cy.interceptAttendees()

    cy.newRegister()

    cy.wait('@getTemplates')
      .its('response.statusCode')
      .should('eq', 200)

    cy.requestConfirmation()
    cy.confirmSendEmail()

    cy.get('#data_inicio').dblclick()

    cy.typeSubject(crudForm.nome)
    cy.get('#hora_inicio').should('have.value', `${startTime}:${currentMinute}`)
    cy.get('#hora_fim').should('have.value', `${endTime}:${currentMinute}`)

    cy.get('#categoria .btn-default').click()
    cy.waitSelectOptions()
    cy.wait(1500)
    cy.clickSelectOptions()

    cy.get('[name="status"] span').contains('Agendado')
    cy.get('[name="status"] span i').should('have.class', 'fa-dot-circle-o')

    cy.get('#conta .btn-default').click()
    cy.wait(1000)
    cy.clickSelectOptions()

    cy.get('div[name="contato"]').click()
    cy.waitSelectOptions()
    cy.wait(3000)
    cy.clickSelectOptions()

    // cy.get('#propriedade').click()
    // cy.waitSelectOptions()
    // cy.wait(3000)
    // cy.clickSelectOptions()

    cy.get('#local').type('Blumenau')

    cy.get('#descricao').type(crudForm.nome)

    cy.get('div[name="participantes_compromisso"]').click()
    cy.waitSelectOptions()
    cy.wait(3000)
    cy.clickSelectOptions()

    cy.get('[name="participantes_externos_show"]').click()

    cy.get('div[name="participantes_externos"] input')
      .type(`${fakeEmailExternal}`)
    cy.wait(1000)
    cy.clickSelectOptions()

    cy.wait(1000)
    cy.submitData()

    cy.waitPostForm()
    cy.waitAttendees()
    cy.waitRecurrence()

    cy.backButton()
    cy.waitGetList()
  })

  it ('Detalhar', () => {
    cy.searchRegister(crudForm.nome)
    cy.wait(1000)
    cy.detailRegister(idPrograma)
  })

  it ('Editar', () => {
    cy.interceptGetList(idLista)
    cy.interceptPutForm(idLista)
    cy.interceptRecurrence()
    cy.interceptAttendees()

    cy.btnActionEdit(idPrograma)
    cy.waitRecurrence()
    cy.typeSubject(crudForm.nomeEdit)
    cy.submitData()

    cy.waitPutForm()
    cy.waitRecurrence()

    cy.backButton()
    cy.waitGetList()
  })

  it ('Remover', () => {
    cy.interceptGetList(idLista)
    cy.interceptDelete(idLista)
    cy.interceptPutForm(idLista)

    cy.searchRegister(crudForm.nomeEdit)
    cy.wait(1000)

    cy.searchAppointment(idPrograma)
    cy.typeReasonCancellation('Motivo: Cancelamento')
    cy.confirmCancellation('Sim')

    cy.waitGetList()
    cy.waitPutForm()

    cy.wait(500)

    cy.searchRegister(crudForm.nomeEdit)
    cy.wait(1000)
    cy.searchAppointment(idPrograma)
    cy.confirmCancellation('Sim')

    cy.waitDelete()
  })
})