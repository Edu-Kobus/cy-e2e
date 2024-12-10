import login from '../../login.spec'

var idPrograma = 75
var idLista = 90

const { faker } = require('@faker-js/faker');
const fakerBr = require('faker-br');
const account = require('../../../../fixtures/Frontend/Crud/Contas/consultar_contas.json')
const fixMessage = require('../../../../fixtures/Frontend/Crud/Sistema/configurar-empresas.json')

const fakeName = faker.name.fullName();
const fakeNameEdit = faker.name.fullName();
const fakeCnpj = fakerBr.br.cnpj()
const fakeCpf = fakerBr.br.cpf()
const fakeEmailGeneral = faker.internet.email()
const fakeEmailFinance = faker.internet.exampleEmail()

describe('Consultar Contas', () => {
  it('Abrir Programa', () => {
    cy.clickMenu(idLista, idPrograma)
  })

  it('Cadastrar', () => {
    cy.interceptGetList(idLista)
    cy.interceptAccountDefinition()
    cy.interceptPostForm(idLista)
    cy.interceptSelectOptions()

    cy.newRegister()

    cy.get('#nome').type(fakeName, { delay: 0 })
    cy.get('#fantasia').type(fakeName, { delay: 0 })
    cy.get('#cnpj').type(fakeCnpj, { delay: 0 })
    cy.typeIE(account.IE)
    cy.typeIM(account.IM)
    cy.typeEmployees(account.employees)
    cy.typeAnnualRecipe(account.recipe)

    cy.selectCompanyGroup()
    cy.wait(1500)
    cy.get('[class="ui-select-choices-row-inner"]')
      .contains(account.companyGroup)
      .click()

    cy.selectCompanySize()
    cy.waitSelectOptions()
    cy.wait(1000)
    cy.clickSelectCompanySize()

    cy.get('#ramo_atividade .btn-default').click()
    cy.waitSelectOptions()
    cy.wait(2000)
    cy.clickSelectOptions()

    cy.get('#origem .btn-default').click()
    cy.waitSelectOptions()
    cy.wait(1000)
    cy.clickSelectOptions()

    cy.typeEmailGeneral(fakeEmailGeneral)
    cy.clickSelectOptions()
    cy.typeEmailFinance(fakeEmailFinance)
    cy.clickSelectOptions()

    cy.submitData()
    cy.waitPostForm()

    cy.waitAccountDefinition()

    cy.validateFillFields(
      fakeName,
      account.IE,
      account.IM,
      account.companyGroup,
      account.companySize,
      account.branchActivity,
      account.origin
    )

    context('Validar registro na timeline',() => {
      cy.assertRegisterTimeline(account.qtdRegisterTimeLine)
      cy.assertTitleTimeLine().contains(account.responsibleTimeLine)
      cy.assertTitleTimeLine().contains(account.accountTimeLine)
      cy.assertTitleTimeLine().contains(account.definitionTimeLine)
    })

    cy.backButton()
    cy.waitGetList()
  })

  it ('Detalhar', () => {
    cy.searchRegister(fakeName)
    cy.wait(2000)
    cy.detailRegister(idPrograma)
  })

  it ('Editar', () => {
    cy.interceptGetList(idLista)

    cy.interceptAccountDefinition()
    cy.interceptPutForm(idLista)

    cy.btnActionEdit(idPrograma)

    cy.registerNameEdit(fakeNameEdit)
    cy.clickKindPerson(account.kindPerson)
    cy.typeCpf(fakeCpf)
    cy.typeRg(account.rg)
    cy.typeBirthDate(account.birthDate)

    cy.validateFillFieldsEdit(
      account.rg,
      account.birthDate
    )

    cy.submitData()
    cy.waitPutForm()
    cy.waitAccountDefinition()

    cy.wait(3000)
    cy.backButton()
    cy.waitGetList()
  })

  it ('Remover', () => {
    cy.interceptGetList(idLista)

    cy.wait(2000)
    cy.searchRegister(fakeNameEdit)
    cy.waitGetList()
    cy.removeRegister(idPrograma, idLista)
  })
})