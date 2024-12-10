import login from '../../login.spec'

var idPrograma = 57
var idLista = 64

describe('Sub-tipo de Oportunidade', () => {
  const crudForm = require('../../../../fixtures/Frontend/Crud/crud_form.json')

  it('Abrir Programa', () => {
    cy.clickMenu(idLista, idPrograma)
  })

  it('Cadastrar', () => {
    cy.interceptGetList(idLista)
    cy.interceptPostForm(idLista)

    cy.interceptSelectOptions()

    cy.newRegister()

    cy.registerName(crudForm.nome)
    cy.get('#tipo_oportunidade > .btn-default').click()
    cy.waitSelectOptions()
    cy.wait(2000)
    cy.clickSelectOptions()

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
    cy.registerNotActive()
    cy.wait(3000)

    cy.submitData()

    cy.waitPutForm()
    cy.waitGetList()
  })

  it('Remover', () => {
    cy.searchRegister(crudForm.nomeEdit)

    cy.removeRegister(idPrograma, idLista)
  })
})