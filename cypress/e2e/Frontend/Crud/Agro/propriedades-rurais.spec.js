import login from '../../login.spec'

const crudForm = require('../../../../fixtures/Frontend/Crud/crud_form.json')

var idPrograma = 141
var idLista = 85

describe('Propriedades Rurais', () => {

  it('Abrir Programa', () => {
    cy.clickMenu(idLista, idPrograma)
  })

  it('Cadastrar', () => {
    cy.interceptGetList(idLista)
    cy.interceptSelectOptions()
    cy.interceptSelectContas()
    cy.interceptPostForm(idLista)
    cy.intercept('GET', '**/versao/1').as('getVersionOne')
    cy.intercept('GET', '**/field**').as('getField')
    cy.intercept('GET', '**/family-group-property**').as('getFamilyGroup')
    
    cy.newRegister()

    cy.get('#nome').type(crudForm.nome)

    cy.get('#conta_id').click()
    cy.waitSelectContas()
    cy.wait(1000)
    cy.clickSelectOptions()

    cy.get('#area_total').type('11000')

    cy.get('#cep').type('89012-001')
    cy.get('.input-group-btn').click()
    cy.waitSelectOptions()
    cy.wait(500)

    cy.get('#numero').type('825')
    cy.get('#inscricao_estadual').type('389000876')
    cy.get('#inscricao_municipal').type('339000321')
    cy.get('#observacao').type(crudForm.nome)
    
    cy.submitData()

    cy.waitPostForm()
    cy.wait('@getVersionOne').its('response.statusCode').should('eq', 200)

    context('Cadastrar Talhões', () => {
      cy.wait('@getField').its('response.statusCode').should('eq', 200)

      cy.newRegister()
      cy.get('#tamanho').type('4343')

      cy.get('#cultura_id').click()
      cy.wait(1000)
      cy.get('[class="ui-select-choices-row-inner"]').contains('Açaí').click()
      
      cy.get('.ui-select-container > :nth-child(1) > .ui-select-search').click()
      cy.wait(1000)
      cy.clickSelectOptions()

      cy.get('button#submit').last().click()
      cy.waitSelectOptions()
    })

    context('Vincular Grupo Familiar', () => {
      cy.get('a[id="aba_md_Grupo Familiar"]').click()
      cy.wait('@getFamilyGroup').its('response.statusCode').should('eq', 200)

      cy.get('.panel-body > #novoRegistro').last().click({ force: true })
      cy.get('.ui-select-container > :nth-child(1) > .ui-select-search').click({ force: true })
      cy.wait(2000)
      cy.get('[class="ui-select-choices-row-inner"]').first().click({ force:true })

      cy.get('button#submit').last().click()
    })

    cy.backButton()
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

    cy.get('[value="0"] > .ng-binding > .fa').click()
    cy.submitData()

    cy.wait(2000)
    cy.waitPutForm()

    cy.backButton()
    cy.waitGetList()
  })

  it ('Remover', () => {
    cy.interceptGetList(idLista)
    cy.intercept('GET', '**/field**').as('getField')
    cy.intercept('GET', '**/family-group-property**').as('getFamilyGroup')

    cy.searchRegister(crudForm.nomeEdit)
    cy.detailRegister(idPrograma)
    
    context('Remover Talhão', () => {
      cy.wait('@getField').its('response.statusCode').should('eq', 200)

      cy.get('[data-title="Ações"] > .btn-group > .btn').click()
    
      cy.get('a[acao="Remover"]').last().click({force:true})

      // cy.get('button[ng-show="mostraBotaoDetalhe(botoesDetalhes)"]')
      //   .last()
      //   .click()

      cy.get('button[data-bb-handler="confirm"]').click()
      
      cy.wait('@getField').its('response.statusCode').should('eq', 200)
    })

    context('Remover Grupo Familiar', () => {
      cy.get('a[id="aba_md_Grupo Familiar"]').click()

      cy.wait('@getFamilyGroup').its('response.statusCode').should('eq', 200)

      cy.get('[data-title="Ações"] > .btn-group > .btn').click()

      cy.get('a[acao="Remover"]').last().click({force:true})

      // cy.get('button[ng-show="mostraBotaoDetalhe(botoesDetalhes)"]')
      //   .last()
      //   .click({force: true})

      cy.get('button[data-bb-handler="confirm"]').click()
      cy.wait('@getFamilyGroup').its('response.statusCode').should('eq', 200)

      cy.backButton()
      cy.waitGetList()
    })

    cy.searchRegister(crudForm.nomeEdit)
    
    cy.removeRegister(idPrograma, idLista)
  })
})