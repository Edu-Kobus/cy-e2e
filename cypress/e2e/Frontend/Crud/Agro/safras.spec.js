import login from '../../login.spec'

var idPrograma = 142
var idLista = 87

describe('Safras', () => {

  it('Abrir Programa', () => {
    cy.clickMenu(idLista, idPrograma)
  })

  it('Cadastrar', () => {
    cy.interceptPostForm(idLista)
    cy.interceptGetList(idLista)
    cy.intercept('GET', '**/harvest-field-income?*').as('getHarvestIncome')
    cy.intercept('GET','**/templates').as('getTemplates')
    
    cy.newRegister()

    cy.wait('@getTemplates').its('response.statusCode').should('equal', 200)

    cy.get('#cultura_id > .btn-default').click({ force: true })
    cy.wait(1000)
    cy.get('.ui-select-choices-row-inner').contains('Açaí').click({ force: true })

    cy.get('#data_inicio').dblclick()
    cy.get('#data_termino').dblclick()
    
    cy.submitData()

    cy.waitPostForm()

    context('Vincular Talhão a Safra', ()=> {
      cy.wait('@getHarvestIncome').its('response.statusCode').should('equal', 200)
      cy.get('#novoRegistro').click({ force:true })

      cy.get('#talhao > .btn-default').click({ force:true })
      cy.wait(2000)
      cy.get('.ui-select-choices-row-inner').first().click({ force: true })
      cy.get('#data_inicio_plantio').dblclick()
      cy.get('#data_inicio_cultivo').dblclick()
      cy.get('#data_colheita').dblclick()

      cy.submitData()

      cy.get('button#cancel').last().click()
    })

    cy.backButton()
    cy.waitGetList()
  })

  it('Detalhar', () => {
    cy.searchRegister('Açaí')
    cy.detailRegister(idPrograma)
  })

  it('Editar', () => {
    cy.interceptGetList(idLista)
    cy.interceptPutForm(idLista)
    cy.intercept('GET', '**/harvest-field-income?*').as('getHarvestIncome')

    cy.btnActionEdit(idPrograma)

    cy.get('[value="0"] > .ng-binding > .fa').click()
    cy.submitData()

    cy.waitPutForm()
    cy.wait('@getHarvestIncome').its('response.statusCode').should('equal', 200)

    cy.backButton()
    cy.waitGetList()
  })

  it ('Remover', () => {
    cy.interceptGetList(idLista)
    cy.wait(2000)
    cy.searchRegister('Açaí')
    cy.wait(2000)
    cy.removeRegister(idPrograma, idLista)
  })
})