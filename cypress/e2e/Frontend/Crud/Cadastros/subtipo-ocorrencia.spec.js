import login from '../../login.spec'

var idPrograma = 55
var idLista = 62

describe('Sub-tipo de Ocorrência', () => {
  const crudForm = require('../../../../fixtures/Frontend/Crud/crud_form.json')

  it('Abrir Programa', () => {
    cy.clickMenu(idLista, idPrograma)
  })

  it('Cadastrar', () => {
    cy.interceptGetList(idLista)
    cy.interceptSelectOptions()
    cy.interceptPostForm(idLista)

    cy.newRegister()

    cy.registerName(crudForm.nome)
    cy.get('#tipo_ocorrencia').click()
    cy.waitSelectOptions()
    cy.wait(1000)
    cy.clickSelectOptions()

    cy.wait(2000)

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
    cy.get('#sla').type('1').should('have.value', '01')

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