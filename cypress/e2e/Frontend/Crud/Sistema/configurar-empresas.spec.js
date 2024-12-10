import login from '../../login.spec'
import fixCompany from '../../../../fixtures/Frontend/Crud/Sistema/configurar-empresas.json'

const { faker } = require('@faker-js/faker');
const fakerBr = require('faker-br');

var idModule = 267

var idCompany = 270
var idCompanyList = 195

var idBranch = 271
var idBranchList = 196

var randomCompany = faker.company.bs()
var randomFantasyCompany = faker.company.bsBuzz()
var randomNumber = faker.datatype.number({ min: 10 }, { max: 100 })
var randomCnpj = fakerBr.br.cnpj();
var randomName = faker.name.firstName()
var randomEmail = faker.internet.email()
var randomPhone = faker.phone.number('## ### ## ##')
var randomUrl = faker.internet.url()

describe('Empresa', () => {

  it('Abrir Programa - Configurar Empresas', () => {
    cy.clickMenu(idCompanyList, idModule)
  })
  
  it('Validar campos obrigatórios no formulário e mensagem de erro da Empresa', () => {
    cy.intercept('GET', '**/templates').as('getTemplates')
    cy.interceptGetList(idCompanyList)

    cy.get('[ng-bind="aba.nome"]').contains(fixCompany.labelCompany).click()
    cy.waitGetList()
    cy.get('.panel-title-container').contains(fixCompany.labelCompany)

    cy.wait(1000)
    cy.get('#novoRegistro').click()

    cy.wait('@getTemplates').its('response.statusCode').should('eq', 200)
    
    cy.submitData()

    cy.get('input[style="border-color: red;"]').should('have.length', 6)
    cy.get('.toast-message')
      .should('have.html', fixCompany.errorMessage)

    cy.get('#clear').click()

    cy.get('.form-actions')
      .should('not.be.contain', '[style="border-color: red;"]')
      
    cy.close_message()
  });

  it('Cadastrar Empresa', () => {
    cy.interceptGetList(idCompanyList)
    cy.interceptPostForm(idCompanyList)
    cy.interceptSelectOptions()

    cy.get('#razao_social').type(randomCompany, { delay: 0 })
    cy.get('#nome_fantasia').type(randomFantasyCompany, { delay: 0 })
    cy.get('#empresa_erp').type(randomNumber, { delay: 0 })
    cy.get('#cnpj').type(randomCnpj, { delay: 0 })
    cy.get('#responsavel').type(randomName, { delay: 0 })
    cy.get('#email').type(randomEmail, { delay: 0 })

    cy.get('#pais').contains('BRASIL')

    cy.get('.input-group > #cep').type('89031300', { delay: 0 })
    cy.get('[title="Buscar Endereço"]').click()
    cy.waitSelectOptions()

    cy.get('#estado').should('not.be.empty')
    cy.get('#cidade').should('not.be.empty')
    cy.get('input#endereco').should('to.be.not.null')
    cy.get('input#bairro').should('to.be.not.null')

    cy.get('#div_telefone #telefone')
      .last()
      .type(randomPhone, { delay: 0 })

    cy.get('#url').type(randomUrl, { delay: 0 })

    cy.submitData()

    cy.waitPostForm()
    cy.waitGetList()
  });

  it ('Detalhar Empresa', () => {
    cy.detailRegister(idCompany)
  })

  it('Editar Empresa', () => {
    cy.interceptGetList(idCompanyList)
    cy.interceptPutForm(idCompanyList)

    cy.btnActionEdit(idCompany)

    cy.get('#razao_social')
      .clear()
      .type(randomCompany, { delay: 0 })

    cy.submitData()

    cy.waitPutForm()
    cy.waitGetList()
  })

  it('Remover Empresa', () => {
    cy.get('input[class$=input-sm]')
      .first()
      .type(`${randomCompany}{enter}`, { delay: 0 })
      .should('have.value', randomCompany)

    cy.removeRegister(idCompany, idCompanyList)
  })
});

describe('Empresa/Filial', () => {
  it('Abrir aba Empresa/Filial', () => {
    cy.get('[ng-bind="aba.nome"]')
      .contains(fixCompany.labelBranch)
      .click()
  })

  it('Cadastrar Empresa/Filial', () => {
    cy.interceptSelectOptions()
    cy.interceptGetList(idBranchList)
    cy.interceptPostForm(idBranchList)
    
    cy.get('[ng-controller="empresaFilialCtrl"] #novoRegistro')
      .contains(fixCompany.buttonLabelBranch)
      .click()

    cy.get('#empresa').click()
    cy.wait(6000)
    cy.clickSelectOptions()

    cy.get('#empresa').should('not.be.empty')

    cy.get('#razao_social').type(randomCompany, { delay: 0 })
    cy.get('#nome_fantasia').type(randomFantasyCompany, { delay: 0 })
    cy.get('#cnpj').type(randomCnpj, { delay: 0 })
    cy.get('#filial_erp').type(randomNumber, { delay: 0 })
    cy.get('#responsavel').type(randomName, { delay: 0 })
    cy.get('#email').type(randomEmail, { delay: 0 })

    cy.get('#pais').contains('BRASIL')

    cy.get('.input-group > #cep').type('89031300')
    cy.get('[title="Buscar Endereço"]').click()
    cy.waitSelectOptions()

    cy.get('#estado').should('not.be.empty')
    cy.get('#cidade').should('not.be.empty')
    cy.get('input#endereco').should('to.be.not.null')
    cy.get('input#bairro').should('to.be.not.null')

    cy.get('#telefone').type(randomPhone, { delay: 0 })
    cy.get('#url').type(randomUrl, { delay: 0 })

    cy.submitData()

    cy.waitPostForm()
    cy.waitGetList()
  });

  it ('Detalhar Empresa', () => {
    cy.get('[ng-controller="empresaFilialCtrl"] [type="search"]')
      .type(`${randomCompany}{enter}`, { delay: 0 })
      .should('have.value', randomCompany)

    cy.get('[class*=acoes-lista-271]').first().click()
    cy.get('.odd [data-title="Empresa"]').click()
  })

  it('Editar Empresa', () => {
    cy.interceptGetList(idBranchList)
    cy.interceptPutForm(idBranchList)

    cy.btnActionEdit(idBranch)

    cy.get('#razao_social')
      .clear()
      .type(randomCompany, { delay: 0 })

    cy.submitData()

    cy.waitPutForm()
    cy.waitGetList()
  })

  it('Remover Empresa', () => {
    cy.get('[ng-controller="empresaFilialCtrl"] [type="search"]')
      .first()
      .type(`${randomCompany}{enter}`, { delay: 0 })
      .should('have.value', randomCompany)

    cy.get('[class*=acoes-lista-271]').invoke('show').click()
    cy.get('[class*=acoes-lista-271] [acao="Remover"]').first().click({force:true})
    cy.get('button[data-bb-handler="confirm"]').click()
  })
});