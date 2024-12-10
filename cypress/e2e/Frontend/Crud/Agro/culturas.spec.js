import login from '../../login.spec'

var idPrograma = 139
var idLista = 83

describe('Culturas', () => {
  const crudForm = require('../../../../fixtures/Frontend/Crud/crud_form.json')
  
  const { faker } = require('@faker-js/faker')
  const fakeInitial = faker.random.locale()

  it('Abrir Programa', () => {
    cy.clickMenu(idLista, idPrograma)
  })

  it('Cadastrar', () => {
    cy.interceptGetList(idLista)
    cy.interceptPostForm(idLista)

    cy.newRegister()
    cy.descriptionRegister(crudForm.nome)
    cy.typeInitial(fakeInitial)
    cy.typeScientific(crudForm.nome)

    cy.get('#data_inicio_semeadura')
      .get('#data_fim_semeadura')
      .get('#data_inicio_cultivo')
      .get('#data_fim_cultivo')
      .get('#data_inicio_colheita')
      .get('#data_fim_colheita').dblclick()

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

    cy.descriptionRegister(crudForm.nomeEdit)
    cy.submitData()

    cy.waitPutForm()
    cy.waitGetList()
  })

  it ('Remover', () => {
    cy.searchRegister(crudForm.nomeEdit)
    cy.removeRegister(idPrograma, idLista)
  })
})