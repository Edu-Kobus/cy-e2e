import login from '../../login.spec'

const fixPotencial = require('../../../../fixtures/Frontend/Crud/Agro/potencialCidade.json')

var idPrograma = 140
var idLista = 86

describe('Potencial Cultura por Cidade', () => {

  it('Abrir Programa', () => {
    cy.clickMenu(idLista, idPrograma)
  })

  it('Cadastrar', () => {
    cy.interceptGetList(idLista)
    cy.interceptPostForm(idLista)
    cy.interceptSelectOptions()

    cy.newRegister()

    cy.get('#cidade_id .btn-default').click()
    // cy.waitSelectOptions()
    cy.wait(800)
    cy.clickSelectOptions()

    cy.get('#cultura_id .btn-default').click()
    cy.wait(500)
    cy.clickSelectOptions()

    cy.get('#area_plantada').type(fixPotencial.area_plantada)
    cy.get('#rendimento_medio').type(fixPotencial.rendimento_medio)

    cy.submitData()

    cy.waitPostForm()
    cy.waitGetList()
  })

  it ('Detalhar', () => {
    cy.searchRegister(fixPotencial.rendimento_medio)
    cy.detailRegister(idPrograma)
  })

  it ('Editar', () => {
    cy.interceptGetList(idLista)
    cy.interceptPutForm(idLista)

    cy.btnActionEdit(idPrograma)

    cy.get('#area_plantada').type(fixPotencial.area_plantada)
    cy.submitData()

    cy.waitPutForm()
    cy.waitGetList()
  })

  it ('Remover', () => {
    cy.searchRegister(fixPotencial.rendimento_medio)
    cy.removeRegister(idPrograma, idLista)
  })
})