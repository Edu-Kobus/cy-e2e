import login from '../../login.spec'

var idPrograma = 58
var idLista = 65

describe('Tipos de Pagamento', () => {
  const crudForm = require('../../../../fixtures/Frontend/Crud/crud_form.json')

  it('Abrir Programa', () => {
    cy.clickMenu(idLista, idPrograma)
  })

  it('Cadastrar', () => {
    cy.interceptGetList(idLista)
    cy.interceptPostForm(idLista)

    cy.newRegister()

    cy.registerName(crudForm.nome)
    cy.get('#valor_acrescimo').type('5').should('have.value', 'R$ 0,05')

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