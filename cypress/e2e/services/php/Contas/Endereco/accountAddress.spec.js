const fixAccountAddresses = require('../../../../../fixtures/api_payloads/php/Contas/add-account-addresses.json')

describe('Account Address', () => {

    let ID_REGISTER = null

    before(() => {
        cy.getToken()
    })

    it('POST Account Address', () => {
        cy.postAddress(fixAccountAddresses).should((res) => {
            expect(res.status).to.eq(201)

            expect(res.body.id).to.be.not.null
            expect(res.body.endereco.ativo).to.eq(fixAccountAddresses.ativo)
            expect(res.body.conta.id).to.eq(JSON.parse(fixAccountAddresses.conta))
            expect(res.body.principal).to.eq(fixAccountAddresses.principal)
            expect(res.body.endereco.cep).to.eq(fixAccountAddresses.cep)
            expect(res.body.endereco.endereco).to.eq(fixAccountAddresses.endereco)
            expect(res.body.cad_cidades.nome).to.eq(fixAccountAddresses.cidade.nome)
            expect(res.body.endereco.bairro).to.eq(fixAccountAddresses.bairro)
            expect(res.body.endereco.numero).to.eq(fixAccountAddresses.numero)
            expect(res.body.cad_tipo_endereco.nome).to.eq(fixAccountAddresses.tipo_endereco.nome)

            ID_REGISTER = res.body.id
        })
    })

    it('GET Account Address', () => {
        cy.getAllAddress().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)
        })
        cy.getOneAddress(ID_REGISTER).should((resAddressAccount) => {
            expect(resAddressAccount.status).to.eq(200)
        })
    })

    it('PUT Account Address', () => {
        fixAccountAddresses.id = ID_REGISTER

        cy.putAddress(ID_REGISTER, fixAccountAddresses).should((res) => {
            expect(res.status).to.eq(200)

            expect(res.body.id).to.be.not.null
            expect(res.body.endereco.ativo).to.eq(fixAccountAddresses.ativo)
            expect(res.body.conta.id).to.eq(JSON.parse(fixAccountAddresses.conta))
            expect(res.body.principal).to.eq(fixAccountAddresses.principal)
            expect(res.body.endereco.cep).to.eq(fixAccountAddresses.cep)
            expect(res.body.endereco.endereco).to.eq(fixAccountAddresses.endereco)
            expect(res.body.cad_cidades.nome).to.eq(fixAccountAddresses.cidade.nome)
            expect(res.body.endereco.bairro).to.eq(fixAccountAddresses.bairro)
            expect(res.body.endereco.numero).to.eq(fixAccountAddresses.numero)
            expect(res.body.cad_tipo_endereco.nome).to.eq(fixAccountAddresses.tipo_endereco.nome)
        })
    })

    it('DELETE Account Address', () => {
        cy.deleteAddress(ID_REGISTER).should((res) => {
            expect(res.status).to.eq(204)
        })
    })
})