const fixture = require('../../../../fixtures/api_payloads/php/Cadastros/empresaFilial.json')

describe('Empresa Filial v2', () => {
    before(() => {
        cy.getToken()
    })

    it('POST Empresa Filial v2', () => {
        cy.postCompanyBranchV2(fixture).should((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.id).to.not.null.and.not.undefined
        })
    })

    it('GET Empresa Filial v2', () => {
        cy.getAllCompanyBranchV2().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)
            
            cy.sortList(resGetAll, fixture).then((id) => {
                cy.getOneCompanyBranchV2(id).should((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body.id).to.eq(fixture.id)
                })
            })
        })
    })

    it('DELETE Empresa Filial v2', () => {
        cy.getAllCompanyBranchV2().then((resGetAll) => {

            cy.sortList(resGetAll, fixture).then((id) => {
                cy.deleteCompanyBranchV2(id).should((res) => {
                    expect(res.status).to.eq(204)
                })
            })
        })
    })
})