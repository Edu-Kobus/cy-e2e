const fixture = require('../../../../fixtures/api_payloads/php/Cadastros/ramoDeAtividade.json')

describe('Activity Branches v2', () => {
    before(() => {
        cy.getToken()
    })

    it('POST Activity Branches v2', () => {
        cy.postActivityBranchesV2(fixture).should((res) => {
            
            expect(res.status).to.eq(201)
            expect(res.body.id).to.not.null.and.not.undefined
            expect(res.body.nome).to.eq(fixture.nome)
            expect(res.body.ativo).to.eq(true)
            expect(res.body.empresa.id).to.be.not.undefined
        })
    })

    it('GET Activity Branches v2', () => {
        cy.getAllActivityBranchesV2().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)
            
            cy.sortList(resGetAll, fixture).then((id) => {
                cy.getOneActivityBranchesV2(id).should((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body.id).to.not.null.and.not.undefined
                    expect(res.body.nome).to.eq(fixture.nome)
                    expect(res.body.ativo).to.eq(true)
                    expect(res.body.empresa.id).to.be.not.undefined
                })
            })
        })
    })

    it('PUT Activity Branches v2', () => {
        cy.getAllActivityBranchesV2().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixture).then((id) => {
                cy.putActivityBranchesV2(id, fixture).should((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body.id).to.not.null.and.not.undefined
                    expect(res.body.nome).to.eq(fixture.nome)
                    expect(res.body.ativo).to.eq(true)
                    expect(res.body.empresa.id).to.be.not.undefined
                })
            })
        })
    })

    it('DELETE Activity Branches v2', () => {
        cy.getAllActivityBranchesV2().then((resGetAll) => {

            cy.sortList(resGetAll, fixture).then((id) => {
                cy.deleteActivityBranchesV2(id).should((res) => {
                    expect(res.status).to.eq(204)
                })
            })
        })
    })
})