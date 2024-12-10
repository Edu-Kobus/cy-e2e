
const fixture = require('../../../../fixtures/api_payloads/php/Contas/account-v2.json')

describe('Account v2', () => {

    var ID_ACCOUNT = null

    before(() => {
        cy.getToken()
    });

    it('POST Account v2', () => {
        cy.postAccountv2(fixture).should(res => {
            expect(res.status).to.eq(201)
            expect(res.body.id).to.be.exist
            expect(res.body.nome).to.eq(fixture.nome)
            expect(res.body.fantasia).to.eq(fixture.fantasia)
            expect(res.body.cnpj).to.eq(fixture.cnpj)
            expect(res.body.ativo).to.eq(fixture.ativo)
            expect(res.body.ramoAtividade.nome).to.eq(fixture.ramoAtividade.nome)
            expect(res.body.grupoEmpresa.nome).to.eq(fixture.grupoEmpresa.nome)
            expect(res.body.origem.nome).to.eq(fixture.origem.nome)

            expect(res.body.definicoes[0]).to.be.not.empty

            ID_ACCOUNT = res.body.id
        })
    });

    it('GET Account v2', () => {
        fixture.id = ID_ACCOUNT

        cy.getAccountv2().then(res => {
            expect(res.status).to.eq(200)
            expect(res.body).to.be.not.null.and.not.be.empty
        })
            
        cy.getOneAccountv2(ID_ACCOUNT).should(res => {
            expect(res.status).to.eq(200)
            expect(res.body.id).to.be.exist
            expect(res.body.nome).to.eq(fixture.nome)
            expect(res.body.fantasia).to.eq(fixture.fantasia)
            expect(res.body.cnpj).to.eq(fixture.cnpj)
            expect(res.body.ativo).to.eq(fixture.ativo)
            expect(res.body.ramoAtividade.nome).to.eq(fixture.ramoAtividade.nome)
            expect(res.body.grupoEmpresa.nome).to.eq(fixture.grupoEmpresa.nome)
            expect(res.body.origem.nome).to.eq(fixture.origem.nome)

            expect(res.body.definicoes).to.be.not.empty
        })
    });

    it('PUT Account v2', () => {
        fixture.id = ID_ACCOUNT

        cy.putAccountv2(ID_ACCOUNT, fixture).should(res => {
            expect(res.status).to.eq(200)
            expect(res.body.id).to.be.exist
            expect(res.body.nome).to.eq(fixture.nome)
            expect(res.body.fantasia).to.eq(fixture.fantasia)
            expect(res.body.cnpj).to.eq(fixture.cnpj)
            expect(res.body.ativo).to.eq(fixture.ativo)
            expect(res.body.ramoAtividade.nome).to.eq(fixture.ramoAtividade.nome)
            expect(res.body.grupoEmpresa.nome).to.eq(fixture.grupoEmpresa.nome)
            expect(res.body.origem.nome).to.eq(fixture.origem.nome)

            expect(res.body.definicoes).to.be.empty
        })
    });

    it('DELETE Account v2', () => {
        cy.deleteAccountv2(ID_ACCOUNT).should(res => {
            expect(res.status).to.eq(204)
            expect(res.body).to.be.empty
        })
    });
});