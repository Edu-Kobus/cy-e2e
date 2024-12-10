const fixStarter = require('../../../../fixtures/api_payloads/php/Empacotamento/starter.json')
const fixAdvanced = require('../../../../fixtures/api_payloads/php/Empacotamento/advanced.json')
const fixAdvancedQS = require('../../../../fixtures/api_payloads/php/Empacotamento/advanced-qs.json')
const fixAdvancedAgro = require('../../../../fixtures/api_payloads/php/Empacotamento/advanced-agro.json')
const fixAdvancedAgroQS = require('../../../../fixtures/api_payloads/php/Empacotamento/advanced-agro-qs.json')

describe('Empacotamento X', () => {

  before(() => {
    cy.getToken()
  })
  
  it('Validar Pacote starter', () => {
      cy.getStarter(fixStarter).then((res) => {
          expect(res.status).to.be.equal(200)
          expect(res.body.name).to.be.eq(fixStarter.name);
          expect(JSON.stringify(res.body)).to.be.equal(JSON.stringify(fixStarter))
        })
      })
      
  it('Validar Pacote Advanced', () => {
    cy.getAdvanced(fixAdvanced).then((res) => {   
      expect(res.status).to.be.equal(200)
      expect(res.body.name).to.be.eq(fixAdvanced.name);
      expect(JSON.stringify(res.body)).to.be.equal(JSON.stringify(fixAdvanced))
    })
  })

  it('Validar Pacote Advanced + QS', () => {
    cy.getAdvancedQS(fixAdvancedQS).then((res) => {
      expect(res.status).to.be.equal(200)
      expect(res.body.name).to.be.eq(fixAdvancedQS.name);
      expect(JSON.stringify(res.body)).to.be.equal(JSON.stringify(fixAdvancedQS))
    })
  })

  it('Validar Pacote Advanced + Agro', () => {
    cy.getAdvancedAgro(fixAdvancedAgro).then((res) => {
      expect(res.status).to.be.equal(200)
      expect(res.body.name).to.be.eq(fixAdvancedAgro.name);
      expect(JSON.stringify(res.body)).to.be.equal(JSON.stringify(fixAdvancedAgro))
    })
  })

  it('Validar Pacote Advanced + Agro + QS', () => {
    cy.getAdvancedAgroQS(fixAdvancedAgroQS).then((res) => {
      expect(res.status).to.be.equal(200)
      expect(res.body.name).to.be.eq(fixAdvancedAgroQS.name);
      expect(JSON.stringify(res.body)).to.be.equal(JSON.stringify(fixAdvancedAgroQS))
    })
  })
})