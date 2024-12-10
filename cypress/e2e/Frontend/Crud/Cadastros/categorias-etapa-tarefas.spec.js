import login from '../../login.spec'

const crudForm = require('../../../../fixtures/Frontend/Crud/crud_form.json')

var idPrograma = 140021
var idLista = 140006

describe('Categorias da Etapa da Tarefas', () => {

  it('Abrir Programa da Cadastro', () => {
    cy.clickMenu(idLista, idPrograma)
  })

  it('Cadastrar Categorias da Etapa da Tarefas', () => {
    cy.interceptGetList(idLista)
    cy.interceptPostForm(idLista)

    cy.newRegister()

    cy.registerName(crudForm.nome)
    cy.wait(500)
    cy.submitData()

    cy.waitPostForm()
    cy.waitGetList()
  })

  it ('Detalhar Categorias da Etapa da Tarefas', () => {
    cy.interceptGetList(idLista)

    cy.searchRegister(crudForm.nome)
    cy.waitGetList()
    cy.wait(500)
    cy.detailRegister(idPrograma)
  })

  it ('Editar Categorias da Etapa da Tarefas', () => {
    cy.interceptGetList(idLista)
    cy.interceptPutForm(idLista)

    cy.btnActionEdit(idPrograma)

    cy.registerNameEdit(crudForm.nomeEdit)
    cy.wait(500)
    cy.submitData()

    cy.waitPutForm()
    cy.waitGetList()
  })

  it('Remover Categorias da Etapa da Tarefas', () => {
    cy.searchRegister(crudForm.nomeEdit)
    cy.removeRegister(idPrograma, idLista)
  })
})