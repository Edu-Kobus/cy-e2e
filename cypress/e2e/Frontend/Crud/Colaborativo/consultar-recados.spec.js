import login from '../../login.spec'

var idPrograma = 69
var idLista = 8

const crudForm = require('../../../../fixtures/Frontend/Crud/crud_form.json')
const fixtures = require('../../../../fixtures/Frontend/Crud/Colaborativo/Recados/recados.json')

describe('Consultar Recados', () => {

  it('Abrir Programa', () => {
    cy.clickMenu(idLista, idPrograma)
  })

  it('Cadastrar', () => {
    cy.interceptGetList(idLista)
    cy.interceptPostForm(idLista)
    
    cy.newRegister()
    
    cy.get('#remetente span')
      .last()
      .should('include.text', fixtures.senderUser)

    cy.get('div[name="usuarios_destinatarios"]').click()
    cy.wait(1000)
    cy.clickSelectOptions()

    cy.get('#assunto').type(crudForm.nome)
    cy.get('#mensagem').type(crudForm.nome)

    cy.get('[value="0"]').contains(" NÃO").click()
    
    cy.submitData()
    cy.waitPostForm()

    cy.validateFieldsForm()
    cy.get('#mensagem').should('not.be.empty')

    cy.backButton()
    cy.waitGetList()
  })

  it('Detalhar', () => {
    cy.searchRegister(crudForm.nome)
    cy.detailRegister(idPrograma)

    cy.validateFieldsForm()
  })

  it('Editar', () => {
    cy.interceptGetList(idLista)
    cy.interceptPutForm(idLista)

    cy.btnActionEdit(idPrograma)
    
    cy.get('#usuarios_destinatarios span')
      .last()
      .should('include.text', fixtures.recipientUser)

    cy.get('#assunto').type(crudForm.nomeEdit)
    cy.get('#mensagem')
    cy.submitData()

    cy.waitPutForm()
    cy.backButton()

    cy.waitGetList()
  })

  it ('Remover', () => {
    cy.searchRegister(crudForm.nome)
    cy.removeRegister(idPrograma, idLista)
  })
})