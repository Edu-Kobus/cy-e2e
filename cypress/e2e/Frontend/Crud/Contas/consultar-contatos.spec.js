import login from '../../login.spec'

var idPrograma = 77
var idLista = 91

const fixContact = require('../../../../fixtures/Frontend/Crud/Contas/contato.json')

const { faker } = require('@faker-js/faker')
const fakerBr = require('faker-br');

const fakerName = faker.name.fullName()
const fakerTreatment = faker.company.bs()
const fakeNameEdit = faker.name.fullName();
const fakerEmail = faker.internet.email()

const fakeCpf = fakerBr.br.cpf()


describe('Consultar Contatos', () => {

  it('Abrir Programa', () => {
    cy.clickMenu(idLista, idPrograma)
  })

  it('Cadastrar', () => {
    cy.interceptGetList(idLista)
    cy.interceptPostForm(idLista)
    cy.interceptSelectOptions()
    cy.interceptSelectContas()

    cy.newRegister()

    cy.get('#empresa_filial').click()
    cy.wait(5000)
    cy.clickSelectOptions()

    cy.get('#empresa_filial').should('not.be.empty')

    cy.registerName(fakerName)

    cy.get('#tratamento').type(fakerTreatment, { delay:0 })
    cy.get('#tratamento').should('have.value', fakerTreatment)

    cy.get('#email').type(fakerEmail, { delay:0 })
    cy.get('#email').should('have.value', fakerEmail)

    cy.get('#telefone').type(fixContact.phone, {force:true})
    cy.get('#telefone').should('have.value', fixContact.phone)

    cy.get('#ramal').type(fixContact.extension, { delay:0 })
    cy.get('#ramal').should('have.value', fixContact.extension)

    cy.get('#data_nascimento').dblclick()

    cy.get('#cpf').type(fakeCpf, { delay:0 })
    cy.get('#cpf').should('have.value', fakeCpf)

    cy.get('#rg').type(fixContact.rg, { delay:0 })
    cy.get('#rg').should('have.value', fixContact.rg)

    cy.get('#origem_contato .btn-default').click()
    cy.wait(1000)
    cy.clickSelectOptions()

    cy.get('#departamento .btn-default').click()
    cy.wait(800)
    cy.clickSelectOptions()

    cy.get('#funcao .btn-default').click()
    cy.wait(1000)
    cy.clickSelectOptions()

    cy.get('#motivo_parecer_empresa').type(fixContact.reason)
    cy.get('#motivo_parecer_empresa').should('have.value', fixContact.reason)

    cy.get('#conta .btn-default').click()
    cy.wait(500)
    cy.clickSelectOptions()

    cy.get('#pais .btn-default')
      .contains(fixContact.country)

    cy.get('#cep')
      .type(fixContact.cep)

    cy.get('.input-group-btn [title="Buscar Endereço"]').click()
    cy.waitSelectOptions()
    cy.wait(3000)

    // cy.get('#bairro').should('have.value', fixContact.district)

    // cy.get('#endereco').should('have.value', fixContact.address)

    // cy.get('#numero').type(fixContact.number)
    // cy.get('#numero').should('have.value', fixContact.number)

    // cy.get('#complemento').type(fixContact.complement)
    // cy.get('#complemento').should('have.value', fixContact.complement)

    cy.get('#celular').type(fixContact.cell)
    cy.get('#celular').should('have.value', '(48) 99815-2657')

    cy.get('#operadora').click()
    cy.wait(500)
    cy.clickSelectOptions()

    cy.get('#facebook').type(fixContact.facebook, { delay:0 })
    cy.get('#facebook').should('have.value', fixContact.facebook)

    cy.get('#skype').type(fixContact.skype, { delay:0 })
    cy.get('#skype').should('have.value', fixContact.skype)

    cy.get('#twitter').type(fixContact.twitter, { delay:0 })
    cy.get('#twitter').should('have.value', fixContact.twitter)

    cy.get('#observacao').type(fixContact.note, { delay:0 })
    cy.get('#observacao').should('have.value', fixContact.note)

    cy.submitData()

    cy.waitPostForm()
    cy.waitGetList()
  })

  it ('Detalhar', () => {
    cy.searchRegister(fakerName)
    cy.detailRegister(idPrograma)

    cy.get('form .input input')
      .should('to.be.not.null')

    cy.get('.ui-select-container span')
      .should('to.be.not.null')
  })

  it ('Editar', () => {
    cy.interceptGetList(idLista)
    cy.interceptPutForm(idLista)

    cy.btnActionEdit(idPrograma)

    cy.registerNameEdit(fakeNameEdit)
    cy.submitData()

    cy.waitPutForm()
    cy.waitGetList()
  })

  it ('Remover', () => {
    cy.wait(500)
    cy.searchRegister(fakeNameEdit)
    cy.removeRegister(idPrograma, idLista)
  })
})