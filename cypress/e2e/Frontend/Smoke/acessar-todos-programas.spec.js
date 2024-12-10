import login from '../login.spec.js'

let user = []
let programas = []

try {
  user = require('../../../fixtures/Frontend/Smoke/user.json')
  programas = require('../../../fixtures/Frontend/Smoke/programs.json')
} catch (e) {
}

for (let key in programas) {
  let programa = user.programas[programas[key].id]

  if (programa) {
    if (programa.menu > 0) {
      describe((programa.categoria ? programa.categoria  + ' > ' : '') + programa.descricao, () => {
        it('Abrir programa', () => {
          if (programa.xready == 1 && (programa.categoria != undefined || programa.categoria != null)) {
            var hasList = programa.comportamento == 0 && programa.lista != null

            if (hasList) {
              hasList = user.listas.hasOwnProperty(programa.lista)
            }
            if (hasList) {
              let lista = user.listas[programa.lista]
              cy.intercept('GET', '/backend/public' + lista.url + '?*').as('getLista')
            }

            cy.wait(500)
            cy.get('button[id="' + programa.categoria + '"]').click()
            cy.wait(250)
            cy.get('a[programa="' + programa.url + '"]').click()

            if (programa.id == 63) {
              cy.wait(10000)
            } else {
              cy.wait(2500)
            }

            cy.get('.page-content').then((elem) => {
              let scope = elem.scope()
              
              if (hasList && scope.hasOwnProperty('dataTable')) {
                cy.wait('@getLista').its('response.statusCode').should('equal', 200)
              }
            })
          } else if (programa.xready == 0) {
            let programaLegado = '';

            if (programa.url.indexOf('.php') >= 0) {
              programaLegado = programa.url
            } else {
              programaLegado = programa.tabela_mestre
            }

            cy.intercept(location.protocol + '//' + user.urlAcesso + programaLegado + '?*').as('getLegado')

            if (programa.categoria) {
              cy.get('button[id="' + programa.categoria + '"]').click()
              cy.get('a[programa="' + programa.url + '"]').click()
            } else {
              cy.get('button[id="' + programa.descricao + '"]').click()
            }

            cy.wait('@getLegado').its('response.statusCode').should('equal', 200)

            cy.get('#myframe').then(($iframe) => {
              let body = $iframe.contents().find('body')
              cy.wait(1000)
              cy.wrap(body).find('table#erro_mysql').should('not.exist')

              if (body.html().indexOf('id="btn_pesquisa"') >= 0) {
                cy.wrap(body).find('#btn_pesquisa').click()
                cy.wait(2000)
                cy.wrap(body).find('table#erro_mysql').should('not.exist')
              }
            })
          }
        })
      })
    }
  }
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
}
