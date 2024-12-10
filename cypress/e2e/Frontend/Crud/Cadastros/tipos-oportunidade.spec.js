import login from '../../login.spec'

var idPrograma = 56
var idLista = 63

describe('Tipos de Oportunidade', () => {

  const crudForm = require('../../../../fixtures/Frontend/Crud/crud_form.json')

  it('Abrir Programa', () => {
    cy.clickMenu(idLista, idPrograma)
  })

  it('Cadastrar', () => {
    cy.interceptGetList(idLista)
    cy.interceptPostForm(idLista)

    cy.interceptOppNotifies()

    cy.newRegister()
    
    cy.get('#empresa_filial').click()
    cy.wait(2500)
    cy.clickSelectOptions()
    
    cy.registerName(crudForm.nome)
    cy.submitData()

    cy.waitPostForm()

    context('Cadastrar Notificação de Oportunidade', () => {
      cy.waitOppNotifies()
      cy.newRegister()
      cy.submitDataLast()
    })

    cy.backButton()
    cy.waitGetList()
  })

  it('Detalhar', () => {
    cy.searchRegister(crudForm.nome)
    cy.detailRegister(idPrograma)
  })

  it('Editar', () => {
    cy.interceptGetList(idLista)
    cy.interceptOppNotifies()
    cy.interceptPutForm(idLista) 
    
    cy.btnActionEdit(idPrograma)

    cy.registerNameEdit(crudForm.nomeEdit)
    cy.registerNotActive()
    cy.submitData()

    cy.waitPutForm()

    context('Remover Notificação de Oportunidade', () => {
      cy.waitOppNotifies()
      cy.removeRegisterMasterDetail()
    })

    cy.backButton()

    cy.waitGetList()
  })

  it('Remover', () => {
    cy.searchRegister(crudForm.nomeEdit)

    cy.removeRegister(idPrograma, idLista)
  })
})