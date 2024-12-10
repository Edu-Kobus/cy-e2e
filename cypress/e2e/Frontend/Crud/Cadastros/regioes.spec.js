import login from '../../login.spec'

var idPrograma = 268
var idLista = 203

describe('Regiões', () => {

  const crudForm = require('../../../../fixtures/Frontend/Crud/crud_form.json')

  it('Abrir Programa', () => {
    cy.clickMenu(idLista, idPrograma)
  })

  it('Cadastrar', () => {
    cy.interceptGetList(idLista)
    cy.interceptPostForm(idLista)
    cy.interceptSelectOptions()

    cy.intercept('GET', '**/select-options?option=160001*',
    { fixture: 'Frontend/form/select-city.json'}
    ).as('selectCity')

    cy.newRegister()

    cy.registerName(crudForm.nome)
    cy.wait(1000)

    cy.get('input[class^="ui-select-search"]').click()
    cy.wait('@selectCity').its('response.statusCode').should('eq', 200)
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
    cy.wait(2500)

    cy.registerNameEdit(crudForm.nomeEdit)
    cy.wait(3000)
    cy.submitData()

    cy.waitPutForm()
    cy.waitGetList()
  })

  it ('Remover', () => {
    cy.searchRegister(crudForm.nomeEdit)

    cy.removeRegister(idPrograma, idLista)
  })
})