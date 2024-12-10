const fixDefinition = require('../../../../../fixtures/api_payloads/php/Contas/account-definitions.json')

describe('Account Definition', () => {

    let ID_REGISTER = null

    before(() => {
        cy.getToken()
    })

    it('POST Account Definition', () => {
        cy.postDefinition(fixDefinition).should((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.empresa_filial).to.eq(fixDefinition.empresa_filial)
            expect(res.body.conta).to.eq(fixDefinition.conta)
            expect(res.body.tipo_conta).to.eq(fixDefinition.tipo_conta)
            expect(res.body.status).to.eq(fixDefinition.status)
            expect(res.body.representante).to.eq(fixDefinition.representante)
            expect(res.body).to.not.undefined.and.not.null
            expect(res.body.return).to.not.undefined.and.not.null

            ID_REGISTER = res.body.return
        })
    })

    it('GET Account Definition', () => {
        cy.getAllDefinition().should((res) => {
            expect(res.status).to.eq(200)
        })

        cy.getOneDefinition(ID_REGISTER).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.id).to.not.undefined.and.not.null
        })
    })

    it('PUT Account Definition', () => {
        fixDefinition.id = ID_REGISTER

        cy.putDefinition(ID_REGISTER, fixDefinition).should((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.empresa_filial).to.eq(fixDefinition.empresa_filial)
            expect(res.body.conta).to.eq(fixDefinition.conta)
            expect(res.body.tipo_conta).to.eq(fixDefinition.tipo_conta)
            expect(res.body.status).to.eq(fixDefinition.status)
            expect(res.body.representante).to.eq(fixDefinition.representante)
            expect(res.body.return).to.not.undefined.and.not.null
        })
    })

    it('DELETE Account Definition', () => {
        cy.deleteDefinition(ID_REGISTER).should((res) => {
            expect(res.status).to.eq(204)

        })
    })
})