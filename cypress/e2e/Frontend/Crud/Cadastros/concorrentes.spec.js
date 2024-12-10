import login from '../../login.spec'

var idPrograma = 264
var idLista = 204

describe('Concorrentes', () => {
  const crudForm = require('../../../../fixtures/Frontend/Crud/crud_form.json')
  const concurrent = require('../../../../fixtures/Frontend/Crud/concorrentes.json')

  it('Abrir Programa', () => {
    cy.clickMenu(idLista, idPrograma)
  })

  it('Cadastrar', () => {
    cy.interceptGetList(idLista)
    cy.interceptSelectOptions()
    cy.interceptPostForm(idLista)

    cy.newRegister()
    cy.registerName(crudForm.nome)

    cy.typeEmail(concurrent.email_general)
    cy.typePhone(concurrent.phone_number)
    // cy.typeCep(concurrent.cep_number)
    // cy.searchCep()

    cy.wait(2000)
    cy.get('#estado > .btn-default').click()
    cy.waitSelectOptions()
    cy.wait(3000)
    cy.get('.ui-select-choices-row-inner')
      .contains('SC - SANTA CATARINA')
      .click()

    cy.get('#cidade > .btn-default').click()
    cy.wait(2000)
    cy.get('.ui-select-choices-row-inner')
      .contains('Blumenau')
      .click()

    cy.wait(3000)
    cy.waitSelectOptions()
    cy.typeNumber(concurrent.address_number)

    cy.wait(3000)

    cy.submitData()

    cy.waitPostForm()
    cy.waitGetList()
  })

  it ('Detalhar', () => {
    cy.searchRegister(crudForm.nome)
    cy.detailRegister(idPrograma)
  })

  it ('Editar', () => {
    cy.interceptGetList(idLista)
    cy.interceptPutForm(idLista)

    cy.btnActionEdit(idPrograma)

    cy.registerNameEdit(crudForm.nomeEdit)
    cy.wait(2000)
    cy.submitData()

    cy.waitPutForm()
    cy.waitGetList()
  })

  it ('Remover', () => {
    cy.searchRegister(crudForm.nomeEdit)

    cy.removeRegister(idPrograma, idLista)
  })
})