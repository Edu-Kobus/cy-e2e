/* eslint-disable cypress/unsafe-to-chain-command */
/* eslint-disable-next-line cypress/no-force */

//**
 /* Comandos customizados para preenchimento formulário padrão X.
 /*/

const user = require('../../../fixtures/Frontend/Smoke/user.json')

//~~~~~~~~~~~~~~~~ Commands suite Cadastro ~~~~~~~~~~~~~~~~//

Cypress.Commands.add('newRegister', () => {
  cy.get('button#novoRegistro').should('not.be.empty').click()
});

Cypress.Commands.add('registerName', (typeName) => {
  const searchField = Cypress._.repeat(typeName, 1)

  cy.get('#nome')
      .clear()
      .type(searchField, { delay: 0 })
      .should('have.value', searchField)
});

Cypress.Commands.add('submitData', () => {
  cy.get('button#submit').click()
});

Cypress.Commands.add('submitDataLast', () => {
  cy.get('button#submit').last().click()
});

Cypress.Commands.add('clickMenu', (idLista, idPrograma) => {
    cy.intercept('GET', `/backend/public${ user.listas[idLista].url}*`).as('getLista')

    cy.get(`button#${ user.programas[idPrograma].categoria }`).click()
    cy.get(`a[programa="${ user.programas[idPrograma].url }"]`).click()

    cy.wait('@getLista').its('response.statusCode').should('equal', 200)
});

Cypress.Commands.add('clickMenuLegado', (idPrograma) => {
  cy.get(`button#${ user.programas[idPrograma].categoria }`).click()
  cy.get(`a[programa="${ user.programas[idPrograma].url }"]`).click()
})

Cypress.Commands.add('interceptPostForm', (idLista) => {
  cy.intercept('POST',  `/backend/public${ user.listas[idLista].url }`).as('postForm')
});

Cypress.Commands.add('waitPostForm', () => {
  cy.wait('@postForm')
    .then((resPostForm) => {
      let reg = resPostForm.response.body

      if(reg.hasOwnProperty('id')) {
        Cypress.env('idRegistro', reg.id)
        expect(reg.id).to.eq(Cypress.env('idRegistro'))

      } else if (reg.hasOwnProperty('return')){
        Cypress.env('idRegistro', reg.return)
        expect(reg.return).to.eq(Cypress.env('idRegistro'))
      }

      expect(reg).to.be.not.null
      expect(reg).to.be.not.undefined
      expect(resPostForm.response.statusCode).to.eq(201)
    })
});

Cypress.Commands.add('interceptGetList', (idLista) => {
  cy.intercept('GET', `/backend/public${ user.listas[idLista].url}?*`).as('getList')
});

Cypress.Commands.add('waitGetList', () => {
  cy.wait('@getList')
    .its('response.statusCode')
    .should('equal', 200)
});

Cypress.Commands.add('interceptSelectOptions', () => {
  cy.intercept('GET', '/backend/public/select-options?*').as('getSelectOptions')
});

Cypress.Commands.add('interceptSelectContas', () => {
  cy.intercept('GET', '/backend/public/select-options?option=426*',
    { fixture: 'Frontend/form/select-options.json' }
    ).as('getSelectConta')
});

Cypress.Commands.add('waitSelectOptions', () => {
  cy.wait('@getSelectOptions')
    .its('response.statusCode')
    .should('equal', 200)
});

Cypress.Commands.add('waitSelectContas', () => {
  cy.wait('@getSelectConta')
    .its('response.statusCode')
    .should('eq', 200)
});

Cypress.Commands.add('clickSelectOptions',  () => {
  cy.get('[class="ui-select-choices-row-inner"]')
    .first()
    .click()
})

Cypress.Commands.add('backButton',  () => {
  cy.get('#cancel').click()
})

//~~~~~~~~~~~~~~~~ Commands suite Detalhar ~~~~~~~~~~~~~~~~//

Cypress.Commands.add('searchRegister', (typeSearch) => {
  cy.get('input[class$=input-sm]')
    .clear()
    .type(`${typeSearch}{enter}`, { delay: 3 })
    .should('have.value', typeSearch)

  cy.get('select[class$=input-sm]')
    .invoke('show')
    .select('100')
    .should('have.value', '100')

  cy.wait(800)
});

Cypress.Commands.add('detailRegister', (idPrograma) => {
  cy.log(Cypress.env('idRegistro'))

  try{
    cy.get(`[class*="acoes-lista-${ user.programas[idPrograma].id }"][reg="${ Cypress.env('idRegistro') }"]`)
      .click()
  }catch(err){
    cy.get('#dataTable_last').click()

    cy.get(`[class*="acoes-lista-${ user.programas[idPrograma].id }"][reg="${ Cypress.env('idRegistro') }"]`)
      .click()
  }

  cy.get(`a[acao="Detalhar"][reg=${ Cypress.env('idRegistro') }]`).click()
});

Cypress.Commands.add('close_message', () => {
  cy.get("#toast-container .toast-close-button").then($button => {
    if ($button.length == 1){
      cy.get($button)
        .click()
        .should('be.visible')
    } else if($button.length > 1){
      cy.get($button)
        .click({ multiple: true })
        .should('be.visible')
    } else {
      cy.get($button)
        .should('not.be.visible')
    }
  })
});

//~~~~~~~~~~~~~~~~ Commands suite Editar ~~~~~~~~~~~~~~~~//

Cypress.Commands.add('registerNameEdit', (typeNameEdit) => {
  const searchFieldEdit = Cypress._.repeat(typeNameEdit, 1)

  cy.get('#nome')
      .clear()
      .type(`${searchFieldEdit}`, { delay: 0 })
      .should('have.value', searchFieldEdit)
});

Cypress.Commands.add('btnActionEdit', (idPrograma) => {
  cy.get(`.acoes-formulario-${ user.programas[idPrograma].id }`)
    .invoke('show')

  cy.get('.botao-acao[acao="Editar"]').click({force:true})
});

Cypress.Commands.add('interceptPutForm', (idLista) => {
  cy.intercept('PUT', `/backend/public${ user.listas[idLista].url }/*`).as('putForm')
});

Cypress.Commands.add('waitPutForm', () => {
  cy.wait('@putForm')
    .its('response.statusCode')
    .should('equal', 200)
});

Cypress.Commands.add('registerNotActive',  () => {
  cy.get('[value="0"] > .ng-binding').first().click()
});

//~~~~~~~~~~~~~~~~ Commands suite Remover ~~~~~~~~~~~~~~~~//

Cypress.Commands.add('removeRegister', (idPrograma, idLista) => {
  cy.intercept('DELETE', `/backend/public${ user.listas[idLista].url }/*`).as('deleteReg')

  // eslint-disable-next-line cypress/no-force
  cy.get(`.acoes-lista-${ user.programas[idPrograma].id }[reg="${ Cypress.env("idRegistro") }"]`).click({force:true})
  // eslint-disable-next-line cypress/no-force
  cy.get(`a[acao="Remover"][reg="${ Cypress.env("idRegistro") }"]`).click({ force:true })

  cy.get('button[data-bb-handler="confirm"]').click()

  cy.wait('@deleteReg')
    .its('response.statusCode')
    .should('equal', 204)
});

//iframe Legado
Cypress.Commands.add('myFrame', () => {
  cy.get('#myframe').its('0.contentDocument.body').then(cy.wrap)
});