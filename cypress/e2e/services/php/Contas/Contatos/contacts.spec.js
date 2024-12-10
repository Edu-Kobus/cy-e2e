const fixContact = require('../../../../../fixtures/api_payloads/php/Contas/account-contacts.json')

describe('Contatos', () => {

    var ID_REGISTER = null

    before(() => {
        cy.getToken()
    })

    it('POST Contatos', () => {
        cy.postContacts(fixContact).should((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.return).to.be.not.null.and.not.undefined
            expect(res.body.empresa.valor).to.eq(fixContact.empresa.valor)
            expect(res.body.empresa_filial.valor).to.eq(fixContact.empresa_filial.valor)
            expect(res.body.ativo).to.eq(fixContact.ativo)
            expect(res.body.nome).to.eq(fixContact.nome)
            expect(res.body.tratamento).to.eq(fixContact.tratamento)

            ID_REGISTER = res.body.return
        })
    })

    it('GET Contatos', () => {
        cy.getAllContacts().then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body).to.be.not.null.and.not.undefined
        })

        cy.getOneContacts(ID_REGISTER).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body).to.be.not.null.and.not.undefined
        })
    })

    it('PUT Contatos', () => {
        fixContact.id = ID_REGISTER

        cy.putContacts(ID_REGISTER, fixContact).should((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.empresa.valor).to.eq(fixContact.empresa.valor)
            expect(res.body.empresa_filial.valor).to.eq(fixContact.empresa_filial.valor)
            expect(res.body.ativo).to.eq(fixContact.ativo)
            expect(res.body.nome).to.eq(fixContact.nome)
            expect(res.body.tratamento).to.eq(fixContact.tratamento)  
        })
    })

    it('DELETE Contatos', () => {
        cy.deleteContacts(ID_REGISTER).should((res) => {
            expect(res.status).to.eq(204)
        })
    })
})