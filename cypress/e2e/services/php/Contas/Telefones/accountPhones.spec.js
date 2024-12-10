const fixPhone = require('../../../../../fixtures/api_payloads/php/Contas/add-account-phones.json')
const fixChangePhone = require('../../../../../fixtures/api_payloads/php/Contas/change-account-phones.json')

describe('Account Phones', () => {
    before(() => {
        cy.getToken()
    })

  it('POST Account Phones', () => {
    cy.postPhones(fixPhone).should((res) => {

      Cypress.env("idPhone", res.body.return)

      expect(res.status).to.eq(201)
      
      expect(res.body.tipo_telefone.nome).to.eq(fixPhone.tipo_telefone.nome)
      expect(res.body.tipo_telefone.valor).to.eq(fixPhone.tipo_telefone.valor)
      expect(res.body.operadora.nome).to.eq(fixPhone.operadora.nome)
      expect(res.body.operadora.valor).to.eq(fixPhone.operadora.valor)
      expect(res.body.principal).to.eq(fixPhone.principal)
      expect(res.body.numero).to.eq(fixPhone.numero)
      expect(res.body.conta).to.eq(fixPhone.conta)
      expect(res.body.origem.conta).to.eq(fixPhone.origem.conta)
    })
  })

  it('GET Account Phones', () => {
    cy.getAllPhones().then((resGetAll) => {
      cy.sortReverse(resGetAll).then((id) => {

        cy.getOnePhones(id).should((res) => {
            expect(res.status).to.eq(200)
            expect(res.body).to.not.null
            expect(res.body.id).to.not.null
        })
      })
    })
  })

  it('PUT Account Phones', () => {
    cy.putPhones(Cypress.env("idPhone"), fixChangePhone).should((res) => {
      expect(res.status).to.eq(200)

      expect(res.body.tipo_telefone.nome).to.eq(fixChangePhone.tipo_telefone.nome)
      expect(res.body.tipo_telefone.valor).to.eq(fixChangePhone.tipo_telefone.valor)
      expect(res.body.operadora.nome).to.eq(fixChangePhone.operadora.nome)
      expect(res.body.operadora.valor).to.eq(fixChangePhone.operadora.valor)
      expect(res.body.principal).to.eq(fixChangePhone.principal)
      expect(res.body.numero).to.eq(fixChangePhone.numero)
      expect(res.body.conta).to.eq(fixChangePhone.conta)
      expect(res.body.origem.conta).to.eq(fixChangePhone.origem.conta)
    })
  })

  it('DELETE Account Phones', () => {
    cy.deletePhones(Cypress.env("idPhone")).should((res) => {
        expect(res.status).to.eq(204)
    })
  })
})