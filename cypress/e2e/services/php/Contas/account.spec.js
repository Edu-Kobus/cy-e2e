const fakerBr = require('faker-br')
const { faker } = require('@faker-js/faker')
const fixAccount = require('../../../../fixtures/api_payloads/php/Contas/add-account.json')

describe('Account', () => {

    let ID_REGISTER = null

    before(() => {
        cy.getToken()
    })

    it('POST Account', () => {
        fixAccount.nome = faker.name.fullName()
        fixAccount.fantasia = fakerBr.company.bs()
        fixAccount.email_geral = fakerBr.internet.email()

        cy.postAccount(fixAccount).should((res) => {
            expect(res.status).to.eq(201)

            expect(res.body.nome).to.eq(fixAccount.nome)
            expect(res.body.fantasia).to.eq(fixAccount.fantasia)
            expect(res.body.cnpj).to.eq(fixAccount.cnpj)
            expect(res.body.email_geral).to.eq(fixAccount.email_geral)
            expect(res.body.tipo_pessoa).to.eq(fixAccount.tipo_pessoa)
            expect(res.body.grupo_empresa).to.eq(fixAccount.grupo_empresa)
            expect(res.body.origem).to.eq(fixAccount.origem)
            expect(res.body.ativo).to.eq(`${fixAccount.ativo}`)

            ID_REGISTER = res.body.id
        })
    })

    it('GET Account', () => {
        cy.getAllAccount().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)
            expect(resGetAll.body).to.be.not.null

        })

        cy.getOneAccount(ID_REGISTER).should(res => {
            expect(res.status).to.eq(200)
            expect(res.body).to.be.not.null
            expect(res.body.id).to.not.null.and.not.undefined
        })
    })

    it('PUT Account', () => {
        fixAccount.id = ID_REGISTER
        fixAccount.nome = faker.name.fullName()
        fixAccount.fantasia = fakerBr.company.bs()
        fixAccount.email_geral = fakerBr.internet.email()

        cy.putAccount(ID_REGISTER, fixAccount).should(res => {
            expect(res.status).to.eq(200)
            expect(res.body.nome).to.eq(fixAccount.nome)
            expect(res.body.fantasia).to.eq(fixAccount.fantasia)
            expect(res.body.cnpj).to.eq(fixAccount.cnpj)
            expect(res.body.email_geral).to.eq(fixAccount.email_geral)
            expect(res.body.tipo_pessoa).to.eq(fixAccount.tipo_pessoa)
            expect(res.body.grupo_empresa).to.eq(fixAccount.grupo_empresa)
            expect(res.body.origem).to.eq(fixAccount.origem)
            expect(res.body.ativo).to.eq(`${fixAccount.ativo}`)
        })
    })

    it('DELETE Account', () => {
        cy.deleteAccount(ID_REGISTER).then((res) => {
            expect(res.status).to.eq(204)
        })
    })
})