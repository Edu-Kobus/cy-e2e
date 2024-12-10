import login from '../../login.spec'

var idPrograma = 12
var idLista = 21

describe('Características', () => {
  const dataForm = require('../../../../fixtures/ui_form_default.json')

  it('Abrir Programa', () => {
    cy.clickMenu(idLista, idPrograma)
  })

  it('Cadastrar', () => {
    cy.interceptGetList(idLista)
    cy.interceptPostForm(idLista)
    cy.interceptSelectContas()

    cy.newRegister()
    cy.registerName(dataForm.nome)

    cy.wait(2000)
    cy.submitData()

    cy.waitPostForm()
    // cy.waitGetList()

    cy.newDependent('Carac. Dependent')
    cy.backButton()

    cy.waitGetList()
    cy.wait(2000)
  })

  it ('Detalhar', () => {
    cy.searchRegister(dataForm.nome)
    cy.detailRegister(idPrograma)
  })

  it ('Editar', () => {
    cy.interceptGetList(idLista)
    cy.interceptPutForm(idLista)

    cy.btnActionEdit(idPrograma)

    cy.registerNameEdit(dataForm.nomeEdit)
    cy.wait(2000)
    cy.submitData()

    cy.waitPutForm()
    cy.waitGetList()

    cy.wait(3000)

    cy.removeDependent()
    cy.backButton()

    cy.waitGetList()
  })

  it ('Remover', () => {
    cy.searchRegister(dataForm.nomeEdit)

    cy.removeRegister(idPrograma, idLista)
  })
})