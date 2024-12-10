import login from '../../login.spec'
const crudForm = require('../../../../fixtures/Frontend/Crud/crud_form.json')

var idPrograma = 203
var idLista = 160 

describe('Segmento da Propriedade', () => {

  it('Abrir Programa', () => {
    cy.clickMenu(idLista, idPrograma)
  })

  it('Cadastrar', () => {
    cy.interceptPostForm(idLista)
    cy.interceptGetList(idLista)
    
    cy.newRegister()

    cy.get('#nome').type(crudForm.nome)
    cy.get('#icone .dropdown-toggle').click()
    cy.get(':nth-child(5) > .btn > .fa').click({ force: true })
    cy.get('#area_minima').type('100000')

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
    cy.wait(600)
    cy.submitData()

    cy.waitPutForm()
    cy.waitGetList()
  })

  it ('Remover', () => {
    cy.searchRegister(crudForm.nomeEdit)
    cy.removeRegister(idPrograma, idLista)
  })
})