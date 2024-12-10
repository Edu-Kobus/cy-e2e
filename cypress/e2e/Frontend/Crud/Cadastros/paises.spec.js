import login from '../../login.spec'

var idPrograma = 39
var idLista = 47

describe('Países', () => {
  const { faker } = require('@faker-js/faker')
  const countryFaker = faker.name.fullName()
  const countryFakerEdit = faker.name.fullName()

  it('Abrir Programa', () => {
    cy.clickMenu(idLista, idPrograma)
  })

  it('Cadastro', () => {
    cy.interceptGetList(idLista)
    cy.interceptPostForm(idLista)

    cy.newRegister()

    cy.registerName(countryFaker)
    cy.submitData()
  
    cy.waitPostForm()
    cy.waitGetList()
  })

  it ('Detalhar', () => {
    cy.searchRegister(countryFaker)
    cy.detailRegister(idPrograma)
  })

  it ('Editar', () => {
    cy.interceptGetList(idLista)
    cy.interceptPutForm(idLista) 
    
    cy.btnActionEdit(idPrograma)

    cy.registerNameEdit(countryFakerEdit)
    cy.get('[value="0"] > .ng-binding').click()

    cy.submitData()

    cy.waitPutForm()
    cy.waitGetList()
  })

  it ('Remover', () => {
    cy.searchRegister(countryFakerEdit)

    cy.removeRegister(idPrograma, idLista)
  })
})