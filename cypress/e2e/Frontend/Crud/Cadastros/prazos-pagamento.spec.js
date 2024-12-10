import login from '../../login.spec'

var idPrograma = 41
var idLista = 49

describe('Prazos de Pagamento', () => {
  const crudForm = require('../../../../fixtures/Frontend/Crud/crud_form.json')

  it('Abrir Programa', () => {
    cy.clickMenu(idLista, idPrograma)
  })

  it('Cadastrar', () => {
    cy.interceptGetList(idLista)
    cy.interceptPostForm(idLista)

    cy.newRegister()

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
    cy.registerNotActive()
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