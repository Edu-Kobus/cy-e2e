import login from '../../login.spec'

var idPrograma = 53
var idLista = 131

const crudForm = require('../../../../fixtures/Frontend/Crud/crud_form.json')

describe('Tipos de Follow', () => {

  it('Abrir Programa', () => {
    cy.clickMenu(idLista, idPrograma)
  })

  it('Cadastrar', () => {
    cy.interceptGetList(idLista)
    cy.interceptPostForm(idLista)
    cy.interceptSelectOptions()

    cy.newRegister()

    cy.registerName(crudForm.nome)
    cy.get('#sla_horas').type('1').should('have.value', '1')
    cy.get('#modulo').click()
    cy.waitSelectOptions()
    cy.wait(1000)
    cy.clickSelectOptions()
    cy.wait(1000)
    cy.submitData()

    cy.waitPostForm()
    cy.waitGetList()
  })

  it('Detalhar', () => {
    cy.searchRegister(crudForm.nome)
    cy.detailRegister(idPrograma)
  })

  it('Editar', () => {
    cy.interceptGetList(idLista)
    cy.interceptPutForm(idLista)

    cy.btnActionEdit(idPrograma)

    cy.registerNameEdit(crudForm.nomeEdit)
    cy.wait(2000)

    cy.submitData()

    cy.waitPutForm()
    cy.waitGetList()
  })

  it('Remover', () => {
    cy.searchRegister(crudForm.nomeEdit)

    cy.removeRegister(idPrograma, idLista)
  })
})