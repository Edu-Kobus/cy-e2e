import login from '../../login.spec'

var idPrograma = 24
var idLista = 33

const { faker } = require('@faker-js/faker')
const fakeInitial = faker.random.locale(2)
const fakeAddress = faker.address.state()
const fakeAddressEdit = faker.address.streetAddress()
const fakeName = faker.name.fullName()


describe('Estados', () => {

  it('Abrir Programa', () => {
    cy.clickMenu(idLista, idPrograma)
  })

  it('Cadastrar', () => {
    cy.interceptGetList(idLista)

    cy.intercept('GET', '/backend/public/select-options?option=30*',
     { fixture: 'Frontend/form/select-country.json'}
     ).as('selectCountry')

    cy.interceptPostForm(idLista)

    cy.newRegister()

    cy.registerName(`${fakeAddress}${fakeName}`)
    cy.get('#sigla').type(fakeInitial)

    cy.wait(2000)
    cy.submitData()

    cy.waitPostForm()
    cy.waitGetList()
  })

  it ('Detalhar', () => {
    cy.searchRegister(fakeAddress)
    cy.detailRegister(idPrograma)
  })

  it ('Editar', () => {
    cy.interceptGetList(idLista)
    cy.interceptPutForm(idLista)

    cy.btnActionEdit(idPrograma)

    cy.registerNameEdit(fakeAddressEdit)
    cy.wait(2000)
    cy.submitData()

    cy.waitPutForm()
    cy.waitGetList()
  })

  it ('Remover', () => {
    cy.searchRegister(fakeAddressEdit)

    cy.removeRegister(idPrograma, idLista)
  })
})