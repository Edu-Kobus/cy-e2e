import login from '../../login.spec'

const crudForm = require('../../../../fixtures/Frontend/Crud/crud_form.json')

var idPrograma = 140020
var idLista = 140005

describe('Categorias de Tarefas', () => {

  it('Abrir Programa de Cadastro', () => {
    cy.clickMenu(idLista, idPrograma)
  })

  it('Cadastrar Categoria de Tarefa', () => {
    cy.interceptGetList(idLista)
    cy.interceptPostForm(idLista)

    cy.newRegister()

    cy.registerName(crudForm.nome)
    cy.wait(500)
    cy.submitData()

    cy.waitPostForm()
    cy.waitGetList()
  })

  it ('Detalhar Categoria de Tarefa', () => {
    cy.interceptGetList(idLista)

    cy.searchRegister(crudForm.nome)
    cy.waitGetList()
    cy.wait(2000)
    cy.detailRegister(idPrograma)
  })

  it ('Editar Categoria de Tarefa', () => {
    cy.interceptGetList(idLista)
    cy.interceptPutForm(idLista)

    cy.btnActionEdit(idPrograma)

    cy.registerNameEdit(crudForm.nomeEdit)
    cy.wait(500)
    cy.submitData()

    cy.waitPutForm()
    cy.waitGetList()
  })

  it('Remover Categoria de Tarefa', () => {
    cy.searchRegister(crudForm.nomeEdit)
    cy.removeRegister(idPrograma, idLista)
  })
})