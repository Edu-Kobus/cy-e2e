import login from '../../login.spec'

var idPrograma = 67
var idLista = 10

const crudForm = require('../../../../fixtures/ui_form_default.json')

describe('Consultar Tarefas', () => {

  it('Abrir Programa', () => {
    cy.clickMenu(idLista, idPrograma)
  })

  it('Cadastrar Tarefa', () => {
    cy.interceptGetList(idLista)
    cy.interceptPostForm(idLista)
    cy.interceptSelectOptions()
    cy.interceptSelectContas()
    cy.intercept('GET', '**/reminder*').as('getReminder')

    cy.newRegister()

    cy.typeDescription(crudForm.nome)
    cy.get('#data_prazo').dblclick()
    cy.get('#data_termino').dblclick()

    cy.get('#conta .btn-default').click()
    cy.wait(2000)
    cy.clickSelectOptions()

    cy.clickContact()
    cy.waitSelectOptions()
    cy.wait(1500)
    cy.clickSelectOptions()

    cy.get('[name="prioridade"] .fa').first().click();
    cy.get('[name="status"] .fa').first().click();
    cy.get('#percentual_concluido').type('10')
    cy.get('#observacoes').type(crudForm.nome)

    cy.submitData()

    cy.waitPostForm()

    cy.validateFieldsForm()

    cy.get('.form-group [name="prioridade"]')
      .contains(' Baixa')

    cy.get('#aba_md_Follow-up').contains('Follow-up').click()

    cy.wait('@getReminder')
      .its('response.statusCode')
      .should('eq', 200)
  })

  it('Cadastrar Follow-up da tarefa', () => {
    cy.interceptReminder()
    cy.interceptSelectOptions()
    cy.intercept('POST', '**/reminder').as('postReminder')
    cy.interceptGetList(idLista)

    cy.wait(1000)

    cy.newRegister()
    cy.wait(1000)

    cy.get('#field-usuarios_destinatarios').should('not.be.null')
    cy.submitMd().click()

    cy.wait('@postReminder')
      .its('response.statusCode')
      .should('eq', 201)

    cy.waitReminder()
  });

  it('Cadastrar etapas da tarefa', () => {
    cy.intercept('GET', '**/tasks-step*').as('getTaskStep')
    cy.intercept('POST', '**/tasks-step').as('postTaskStep')
    cy.interceptGetList(idLista)

    cy.wait(2000)

    cy.get('[id="aba_md_Etapas da Tarefa"]')
      .contains('Etapas da Tarefa')
      .click()

    cy.wait('@getTaskStep')
      .its('response.statusCode')
      .should('eq', 200)

    cy.get('button#novoRegistro').contains('Cadastrar etapas da tarefa').click()
    cy.wait(500)

    cy.get('#body_138 #data_inicio').dblclick()
    cy.get('#hora_inicio').dblclick()

    cy.get('#body_138 #data_termino').dblclick()
    cy.get('#hora_termino').dblclick()
    cy.get('[id*="etapa_tarefa"] [value="1"]').click()
    cy.get('[id*="etapa_tarefa"] #percentual_concluido').type('100')

    cy.get('#body_138 #observacoes').type(crudForm.nome)

    cy.submitMd().click()

    cy.wait('@postTaskStep')
      .its('response.statusCode')
      .should('eq', 201)

    cy.wait('@getTaskStep')
      .its('response.statusCode')
      .should('eq', 200)

    cy.get('.grid-body [data-title="Status"]').should('contain', 'Em Andamento')
    cy.get('.grid-body [data-title="Usuário"]').should('contain', ' Jenkins ')
    cy.get('.grid-body .progress').should('contain', '1% ')
    cy.get('.grid-body [data-title="Data/hora inicial"]').should('not.be.empty')
    cy.get('.grid-body [data-title="Data/hora final"]').should('not.be.empty')


    cy.backButton()
    cy.waitGetList()

    cy.wait(2000)

    cy.get('.grid-body [data-title="Status"]').contains('Em Andamento')
    cy.get('.grid-body .progress').should('contain', '1% ')

    cy.close_message()
  });

  it('Detalhar Tarefa', () => {
    cy.searchRegister(crudForm.nome)
    cy.detailRegister(idPrograma)

    cy.validateFieldsForm()
  })

  it('Editar Tarefa', () => {
    cy.interceptPutForm(idLista)
    cy.interceptReminder()

    cy.btnActionEdit(idPrograma)

    cy.typeDescription(crudForm.nomeEdit)
    cy.submitData()

    cy.waitReminder()
    cy.waitPutForm()
  })


  it('Remover Follow-up da tarefa', () => {
    cy.intercept('GET', '**/reminder?*').as('getReminder')

    cy.wait('@getReminder')
      .its('response.statusCode')
      .should('equal', 200)

    cy.clickButtonAction()
    cy.clickButtonDelete()
    cy.clickConfirmDelete()
  });

  it('Remover etapas da tarefa', () => {
    cy.intercept('GET', '**/tasks-step*').as('getTaskStep')
    cy.interceptGetList(idLista)

    cy.get('[id="aba_md_Etapas da Tarefa"]')
      .contains('Etapas da Tarefa')
      .click()

    cy.wait('@getTaskStep')
      .its('response.statusCode')
      .should('eq', 200)

    cy.clickButtonAction()
    cy.clickButtonDelete()
    cy.clickConfirmDelete()

    cy.backButton()
    cy.waitGetList()
  });

  it('Remover Tarefa', () => {
    cy.searchRegister(crudForm.nomeEdit)
    cy.wait(4000)
    cy.removeRegister(idPrograma, idLista)
  })
})