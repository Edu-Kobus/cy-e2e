import login from '../../login.spec'
const crudForm = require('../../../../fixtures/Frontend/Crud/crud_form.json')

var idPrograma = 154
var idLista = 110

describe('Insumos Agrícolas', () => {

  it('Abrir Programa', () => {
    cy.clickMenu(idLista, idPrograma)
  })

  it('Cadastrar', () => {
    cy.interceptGetList(idLista)
    cy.interceptPostForm(idLista)
    cy.interceptSelectOptions()

    cy.newRegister()

    cy.get('#produto').click()
    cy.wait(1500)
    cy.clickSelectOptions()

    cy.get('#tecnologia').click()
    cy.wait(1000)
    cy.clickSelectOptions()

    cy.get('#valor_produto').type('100')
    cy.get('#quantidade').type('1000')
    cy.get('#valor_he').type('1000')

    cy.get('#cultura').click()
    cy.wait(1000)
    cy.clickSelectOptions()

    cy.get('#grupo_insumo').click()
    cy.wait(1000)
    cy.clickSelectOptions()

    cy.wait(1000)

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

    cy.get('#valor_produto').type('1000')
    cy.wait(1000)

    cy.submitData()

    cy.waitPutForm()
    cy.waitGetList()
  })

  it('Remover', () => {
    cy.searchRegister(crudForm.nomeEdit)
    cy.removeRegister(idPrograma, idLista)
  })
})