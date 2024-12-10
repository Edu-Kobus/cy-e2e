import login from '../../login.spec'

const crudForm = require('../../../../fixtures/Frontend/Crud/crud_form.json')

var idPrograma = 257
var idLista = 189

describe('Feriados', () => {

  it('Abrir Programa', () => {
    cy.clickMenu(idLista, idPrograma)
  })

  it('Cadastrar', () => {
    cy.interceptGetList(idLista)
    cy.interceptPostForm(idLista)
    cy.interceptSelectOptions()

    cy.intercept('GET', '/backend/public/select-options?option=30*',
     { fixture: 'Frontend/form/select-country.json'}
     ).as('selectCountry')

    cy.intercept('GET', '/backend/public/select-options?option=52*',
    { fixture: 'Frontend/form/select-state.json'}
    ).as('selectState')

    cy.intercept('GET', '/backend/public/select-options?option=32*',
    { fixture: 'Frontend/form/select-city.json'}
    ).as('selectCity')

    cy.newRegister()
    cy.wait(2000)

    cy.get('#estado .btn-default').click()
    cy.wait('@selectState').its('response.statusCode').should('eq', 200)
    cy.wait(2000)
    cy.clickSelectOptions()

    cy.selectCidade()
    cy.wait('@selectCity').its('response.statusCode').should('eq', 200)
    cy.wait(2000)
    cy.clickSelectOptions()

    cy.fillDate()

    cy.registerName(crudForm.nome)
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
    cy.wait(1500)
    cy.submitData()

    cy.waitPutForm()
    cy.waitGetList()
  })

  it ('Remover', () => {
    cy.searchRegister(crudForm.nomeEdit)

    cy.removeRegister(idPrograma, idLista)
  })
})