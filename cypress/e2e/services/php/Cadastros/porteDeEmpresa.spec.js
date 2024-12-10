const fixture = require('../../../../fixtures/api_payloads/php/Cadastros/porteDeEmpresa.json')

describe('Porte De Empresa v2', () => {
    before(() => {
        cy.getToken()
    })

    it('POST Porte De Empresa v2', () => {
        cy.postCompanySizeV2(fixture).should((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.id).to.not.null.and.not.undefined
            expect(res.body.nome).to.eq(fixture.nome)
            expect(res.body.ativo).to.eq(fixture.ativo)
        })
    })

    it('GET Porte De Empresa v2', () => {
        cy.getAllCompanySizeV2().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)
            
            cy.sortList(resGetAll, fixture).then((id) => {
                cy.getOneCompanySizeV2(id).should((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body.id).to.not.null.and.not.undefined
                    expect(res.body.nome).to.eq(fixture.nome)
                    expect(res.body.ativo).to.eq(fixture.ativo)
                })
            })
        })
    })

    it('PUT Porte De Empresa v2', () => {
        cy.getAllCompanySizeV2().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixture).then((id) => {
                cy.putCompanySizeV2(id, fixture).should((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body.id).to.not.null.and.not.undefined
                    expect(res.body.nome).to.eq(fixture.nome)
                    expect(res.body.ativo).to.eq(fixture.ativo)
                })
            })
        })
    })

    it('DELETE Porte De Empresa v2', () => {
        cy.getAllCompanySizeV2().then((resGetAll) => {

            cy.sortList(resGetAll, fixture).then((id) => {
                cy.deleteCompanySizeV2(id).should((res) => {
                    expect(res.status).to.eq(204)
                })
            })
        })
    })
})