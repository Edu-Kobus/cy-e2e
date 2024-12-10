import login from '../../login.spec'

var idPrograma = 182
var idLista = 136

describe('Tipos de Conta', () => {

  const crudForm = require('../../../../fixtures/Frontend/Crud/crud_form.json')

  it('Abrir Programa', () => {
    cy.clickMenu(idLista, idPrograma)
  })

  it('Cadastrar', () => {
    cy.interceptGetList(idLista)
    cy.interceptPostForm(idLista)

    cy.newRegister()

    cy.registerName(crudForm.nome)
    cy.get('#icone .dropdown-toggle').click()
    cy.get('.fa-heart').click()

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
    cy.submitData()

    cy.waitPutForm()
    cy.waitGetList()
  })

  it('Remover', () => {
    cy.searchRegister(crudForm.nomeEdit)

    cy.removeRegister(idPrograma, idLista)
  })
})