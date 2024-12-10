const fixture = require('../../../../fixtures/api_payloads/php/Cadastros/gruposDeEmpresa.json')

describe('Grupos De Empresa v2', () => {
    before(() => {
        cy.getToken()
    })

    it('POST Grupos De Empresa v2', () => {
        cy.postCompanyGroupV2(fixture).should((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.id).to.not.null.and.not.undefined
            expect(res.body.nome).to.eq(fixture.nome)
            expect(res.body.ativo).to.eq(fixture.ativo)
            expect(res.body.ativo).to.eq(fixture.ativo)
            expect(res.body.idErp).to.eq(fixture.idErp)
        })
    })

    it('GET Grupos De Empresa v2', () => {
        cy.getAllCompanyGroupV2().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)
            
            cy.sortList(resGetAll, fixture).then((id) => {
                cy.getOneCompanyGroupV2(id).should((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body.id).to.not.null.and.not.undefined
                    expect(res.body.nome).to.eq(fixture.nome)
                    expect(res.body.ativo).to.eq(fixture.ativo)
                    expect(res.body.empresa.id).to.be.not.undefined
                    expect(res.body.idErp).to.eq(fixture.idErp)
                })
            })
        })
    })

    it('PUT Grupos De Empresa v2', () => {
        cy.getAllCompanyGroupV2().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixture).then((id) => {
                cy.putCompanyGroupV2(id, fixture).should((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body.id).to.not.null.and.not.undefined
                    expect(res.body.nome).to.eq(fixture.nome)
                    expect(res.body.ativo).to.eq(fixture.ativo)
                    expect(res.body.empresa.id).to.be.not.undefined
                    expect(res.body.idErp).to.eq(fixture.idErp)
                })
            })
        })
    })

    it('DELETE Grupos De Empresa v2', () => {
        cy.getAllCompanyGroupV2().then((resGetAll) => {

            cy.sortList(resGetAll, fixture).then((id) => {
                cy.deleteCompanyGroupV2(id).should((res) => {
                    expect(res.status).to.eq(204)
                })
            })
        })
    })
})