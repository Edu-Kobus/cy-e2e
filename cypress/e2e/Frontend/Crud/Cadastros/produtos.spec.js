import login from '../../login.spec'

var idPrograma = 42
var idLista = 50

const crudForm = require('../../../../fixtures/Frontend/Crud/crud_form.json')
const product = require('../../../../fixtures/Frontend/Crud/produtos.json')

describe('Produtos', () => {

  it('Abrir Programa', () => {
    cy.clickMenu(idLista, idPrograma)
  })

  it('Cadastrar', () => {
    cy.interceptGetList(idLista)
    cy.interceptPostForm(idLista)

    cy.newRegister()

    cy.registerName(crudForm.nome)
    cy.selectCategory()
    cy.wait(3000)
    cy.clickSelectOptions()

    cy.selectUnit()
    cy.wait(2000)
    cy.clickSelectOptions()

    cy.typeQuantity(product.quantityDefault)
    cy.typeSalePrice(product.salePrice)
    cy.typeMaxDiscount(product.maxDiscount)
    cy.typeCorrectionFactor(product.correctionFactor)

    cy.typeIpi(product.ipi)
    cy.typeIcms(product.icms)
    cy.typeWeight(product.weight)
    cy.typeNote(product.note)

    cy.selectOportunityType()
    cy.wait(1000)
    cy.clickSelectOptions()

    cy.wait(1500)

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
    cy.registerNotActive()

    cy.wait(2000)

    cy.submitData()

    cy.waitPutForm()
    cy.waitGetList()
  })

  it ('Remover', () => {
    cy.searchRegister(crudForm.nomeEdit)

    cy.removeRegister(idPrograma, idLista)
  })
})