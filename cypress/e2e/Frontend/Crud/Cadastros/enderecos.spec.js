import login from '../../login.spec'

var idPrograma = 194
var idLista = 153

describe('Endereços', () => {

  it('Abrir Programa', () => {
    cy.clickMenu(idLista, idPrograma)
  })

  it('Cadastrar', () => {
    cy.interceptGetList(idLista)
    cy.interceptPostForm(idLista)
    cy.interceptSelectOptions()

    cy.intercept('GET', '/backend/public/select-options?option=52*',
    { fixture: 'Frontend/form/select-state.json'}
    ).as('selectState')

    cy.intercept('GET', '/backend/public/select-options?option=32*',
    { fixture: 'Frontend/form/select-city.json'}
    ).as('selectCity')

    cy.newRegister()
    cy.selectAddressType()
    cy.searchCepAddress()

    cy.get('#estado .btn-default').click()
    cy.wait('@selectState').its('response.statusCode').should('eq', 200)
    cy.wait(2000)
    cy.clickSelectOptions()

    cy.selectCidade()
    cy.wait('@selectCity').its('response.statusCode').should('eq', 200)
    cy.wait(2000)
    cy.clickSelectOptions()

    cy.fillNumber()
    cy.submitData()

    cy.wait(2000)
    cy.waitPostForm()
    cy.waitGetList()
  })

  it ('Detalhar', () => {
    cy.searchRegister('Rua São Paulo')
    cy.detailRegister(idPrograma)
  })

  it ('Editar', () => {
    cy.interceptGetList(idLista)
    cy.interceptPutForm(idLista)
    cy.interceptSelectOptions()

    cy.btnActionEdit(idPrograma)
    cy.waitSelectOptions()
    cy.inactiveRegister()

    cy.submitData()

    cy.waitPutForm()
    cy.wait(2000)
    cy.waitGetList()
  })

  it ('Remover', () => {
    cy.searchRegister('Rua São Paulo')

    cy.removeRegister(idPrograma, idLista)
  })
})