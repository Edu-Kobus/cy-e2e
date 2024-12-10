import login from '../../login.spec'

var idPrograma = 19
var idLista = 28

const city = require('../../../../fixtures/Frontend/Crud/cidades.json')

const { faker } = require('@faker-js/faker')
const cityFaker = faker.name.fullName()
const cityFakerEdit = faker.name.fullName()

describe('Cidades', () => {
  it('Abrir Programa', () => {
    cy.clickMenu(idLista, idPrograma)
  })

  it('Cadastrar', () => {
    cy.interceptGetList(idLista)
    cy.interceptPostForm(idLista)

    cy.intercept('GET', '/backend/public/select-options?option=30*',
     { fixture: 'Frontend/form/select-country.json'}
     ).as('selectCountry')

     cy.intercept('GET', '/backend/public/select-options?option=52*',
    { fixture: 'Frontend/form/select-state.json'}
    ).as('selectState')

    cy.newRegister()

    cy.registerName(cityFaker)

    cy.clickCountryField()
    cy.wait('@selectCountry').its('response.statusCode').should('eq', 200)
    cy.wait(2000)
    cy.clickSelectOptions()

    cy.clickStateField()
    cy.wait('@selectState').its('response.statusCode').should('eq', 200)
    cy.wait(2000)
    cy.clickSelectOptions()

    cy.FillPopulation(city.population)
    cy.FillPopulationEstimated(city.populationEstimated)

    cy.FillPotential(city.potential)
    cy.FillPib(city.pib)
    cy.wait(1000)
    cy.submitData()

    cy.waitPostForm()
    cy.waitGetList()
  })

  it ('Detalhar', () => {
    cy.searchRegister(cityFaker)
    cy.detailRegister(idPrograma)
  })

  it ('Editar', () => {
    cy.interceptGetList(idLista)
    cy.interceptPutForm(idLista)

    cy.btnActionEdit(idPrograma)

    cy.registerNameEdit(cityFakerEdit)
    cy.wait(1000)
    cy.submitData()

    cy.waitPutForm()
    cy.waitGetList()
  })

  it ('Remover', () => {
    cy.searchRegister(cityFakerEdit)

    cy.removeRegister(idPrograma, idLista)
  })
})