import login from '../../login.spec'

var idPrograma = 178
var idLista = 147
var idListaDocumento = 12
var idListaAcoes = 149
var idListaFollow = 13
var idListaDespesa = 148
var idListaConta = 90

const crudForm = require('../../../../fixtures/Frontend/Crud/crud_form.json')
const fixEvent = require('../../../../fixtures/Frontend/Crud/events.json')

describe('Consultar Eventos', () => {

  it('Abrir Programa', () => {
    cy.clickMenu(idLista, idPrograma)
  })

  it('Cadastrar', () => {
    cy.interceptGetList(idLista)
    cy.interceptSelectOptions()
    cy.interceptGetList(idListaDocumento)
    cy.interceptGetList(idListaAcoes)
    cy.interceptGetList(idListaDespesa)
    cy.interceptGetList(idListaFollow)
    cy.interceptGetList(idListaConta)
    cy.interceptPostForm(idLista)

    cy.newRegister()
    cy.typeDescription(crudForm.nome)

    cy.get('#tipo_evento .btn-default').click()
    cy.waitSelectOptions()
    cy.wait(1000)
    cy.clickSelectOptions()

    cy.get('#local .btn-default').click()
    cy.wait(1500)
    cy.clickSelectOptions()

    cy.get('#data_inicio').type(fixEvent.dataInitial, { delay: 0 })
    cy.get('#data_termino').type(fixEvent.dataEnd, { delay: 0 })
    cy.get('#hora_inicio').type(fixEvent.hourInitial, { delay: 0 })
    cy.get('#hora_termino').type(fixEvent.hourEnd, { delay: 0 })

    cy.get('#observacoes').type(fixEvent.note)

    cy.submitData()
    cy.waitPostForm()

    cy.validateFieldsForm()

    context('Cadastro Documento', () => {
      const doc = fixEvent.document

      cy.waitGetList()

      cy.newRegister()
      cy.get('#titulo').type(doc.title)

      cy.get('#tipo_documento .btn-default').type(doc.typeDocument)
      cy.wait(2000)
      cy.clickSelectOptions()

      cy.get('#numero_documento').type(doc.documentNumber)
      cy.get('#revisao').type(doc.review)
      cy.get('#Documentos #observacoes').type(fixEvent.note)

      cy.get('[name="tipo_upload"]')
        .last()
        .contains(doc.typeUpload)
        .click()

      cy.typeImgUpload(doc.url)

      cy.submitMd()
        .first()
        .click()

      cy.waitGetList()

      cy.validateFieldsDocument(
        doc.title,
        doc.documentNumber,
        doc.review,
        doc.save,
        doc.typeDocument
      )
    })

    context('Cadastro Participante', () => {
      const att = fixEvent.attendees

      cy.get('#aba_md_Participantes').click()

      cy.waitGetList()
      cy.newRegisterMd()

      cy.get('[name="usuario"] input')
        .last()
        .type(att.user)

      cy.wait(1000)

      cy.clickSelectOptions()

      cy.get('#funcao .btn-default')
        .type(att.function)

      cy.wait(1000)

      cy.clickSelectOptions()

      cy.submitMd().first().click()
      cy.waitGetList()

      cy.validateFieldsAttendees(
        att.user,
        att.function
      )
    })

    context('Cadastro Ações/Etapas', () => {
      cy.get('[id="aba_md_Ações/Etapas"]').click()

      cy.waitGetList()
      cy.wait(1500)
      cy.newRegisterMd()

      cy.get('#data').dblclick()
      cy.get('#hora').dblclick()

      cy.get('#tipo_acao .btn-default').first().click()
      cy.waitSelectOptions()
      cy.wait(2000)
      cy.clickSelectOptions()

      cy.get('#_acoes #observacoes').type(fixEvent.note)

      cy.submitMd().click()
      cy.waitGetList()

      cy.validateFieldsActions()
    })

    context('Cadastro Follow-up', () => {
      cy.get('#aba_md_Follow-up').click()
      cy.waitGetList()
      cy.newRegisterMd()

      cy.get('[id="observacoes"]')
        .last()
        .type(fixEvent.note)

      cy.submitMd()
        .first()
        .click()

      cy.waitGetList()
    })

    context('Cadastro Despesa', () => {
      cy.get('#aba_md_Despesas').click()
      cy.waitGetList()

      cy.newRegisterMd()
      cy.get('#des_despesas #div_descricao').type(fixEvent.expense.description)

      cy.get('#conta .btn-default').click()
      cy.wait(2500)
      cy.clickSelectOptions()

      cy.get('#valor').type(fixEvent.expense.value)

      cy.get('#tipo_pagamento .btn-default').click()
      cy.waitSelectOptions()
      cy.wait(1000)
      cy.clickSelectOptions()

      cy.get('#observacao').last().type(fixEvent.note)
      cy.submitMd().first().click()
      cy.waitGetList()
    })

    context('Víncular Conta', () => {
      cy.get('#aba_md_Contas').click()
      cy.waitGetList()
    })

    cy.backButton()
    cy.waitGetList()
  })

  it ('Detalhar', () => {
    cy.searchRegister(crudForm.nome)
    cy.detailRegister(idPrograma)

    cy.validateFieldsForm()
  })

  it ('Editar', () => {
    cy.interceptGetList(idLista)
    cy.interceptPutForm(idLista)

    cy.btnActionEdit(idPrograma)

    cy.typeDescription(crudForm.nomeEdit)
    cy.wait(1000)
    cy.submitData()

    cy.waitPutForm()
    cy.backButton()

    cy.waitGetList()
  })

  it ('Remover', () => {
    cy.interceptGetList(idLista)
    cy.interceptGetList(idListaDocumento)
    cy.interceptGetList(idListaAcoes)
    cy.interceptGetList(idListaDespesa)
    cy.interceptGetList(idListaFollow)
    cy.interceptGetList(idListaConta)

    cy.searchRegister(crudForm.nomeEdit)
    cy.detailRegister(idPrograma)

    context('Remover Documento', () => {
      cy.waitGetList()

      cy.clickButtonAction()
      cy.clickButtonDelete()
      cy.wait(500)
      cy.clickConfirmDelete()
      cy.waitGetList()
    })

    context('Remover Participante', () => {
      cy.get('#aba_md_Participantes').click()
      cy.waitGetList()

      cy.clickButtonAction()
      cy.clickButtonDelete()
      cy.wait(500)
      cy.clickConfirmDelete()
      cy.waitGetList()
    })

    context('Remover Ações/Etapas', () => {
      cy.get('[id="aba_md_Ações/Etapas"]').click({ force:true })
      cy.waitGetList()

      cy.clickButtonAction()
      cy.clickButtonDelete()
      cy.clickConfirmDelete()
      cy.waitGetList()
    })

    context('Remover Follow-up', () => {
      cy.get('#aba_md_Follow-up').click()
      cy.waitGetList()

      cy.clickButtonAction()
      cy.clickButtonDelete()
      cy.wait(500)
      cy.clickConfirmDelete()
      cy.waitGetList()
    })

    context('Remover Despesas', () => {
      cy.get('#aba_md_Despesas').click()
      cy.waitGetList()

      cy.clickButtonAction()
      cy.clickButtonDelete()
      cy.wait(500)
      cy.clickConfirmDelete()
      cy.waitGetList()
    })

    cy.backButton()

    cy.searchRegister(crudForm.nomeEdit)
    cy.waitGetList()
    cy.removeRegister(idPrograma, idLista)
  })
})