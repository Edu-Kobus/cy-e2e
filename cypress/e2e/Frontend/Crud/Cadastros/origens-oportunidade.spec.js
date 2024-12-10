import login from '../../login.spec'

var idPrograma = 38
var idLista = 46

const crudForm = require('../../../../fixtures/Frontend/Crud/crud_form.json')

describe('Origens de Oportunidade', () => {

  it('Abrir Programa', () => {
    cy.clickMenu(idLista, idPrograma)
  })

  it('Cadastrar', () => {
    cy.intercept('GET', '/app/views/components/*').as('getViews')
    cy.intercept('GET', '**/templates').as('getTemplates')
    cy.interceptGetList(idLista)
    cy.interceptPostForm(idLista)

    cy.newRegister()

    cy.wait('@getViews')
      .its('response.statusCode')
      .should('eq', 200)

    cy.wait('@getTemplates')
      .its('response.statusCode')
      .should('eq', 200)

    cy.get('#empresa_filial').click()
    cy.wait(2500)
    cy.clickSelectOptions()

    cy.registerName(crudForm.nome)
    cy.wait(1000)
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
    cy.wait(1000)
    cy.submitData()

    cy.waitPutForm()
    cy.waitGetList()
  })

  it ('Remover', () => {
    cy.searchRegister(crudForm.nomeEdit)

    cy.removeRegister(idPrograma, idLista)
  })
})