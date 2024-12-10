const fixDepartmentsV2 = require('../../../../fixtures/api_payloads/php/Cadastros/departamentos.json')

describe('Departamentos v2', () => {
    before(() => {
        cy.getToken()
    })

    it('POST Departamentos v2', () => {
        cy.postDepartmentsV2(fixDepartmentsV2).should((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.id).to.not.null.and.not.undefined
            expect(res.body.nome).to.eq(fixDepartmentsV2.nome)
            expect(res.body.ativo).to.eq(true)
            expect(res.body.usaOcorrencia).to.eq(fixDepartmentsV2.usaOcorrencia)
            expect(res.body.empresaFilial.id).to.be.not.undefined
        })
    })

    it('GET Departamentos v2', () => {
        cy.getAllDepartmentsV2().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)
            
            cy.sortList(resGetAll, fixDepartmentsV2).then((id) => {
                cy.getOneDepartmentsV2(id).should((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body.id).to.not.null.and.not.undefined
                    expect(res.body.nome).to.eq(fixDepartmentsV2.nome)
                    expect(res.body.ativo).to.eq(true)
                    expect(res.body.usaOcorrencia).to.eq(fixDepartmentsV2.usaOcorrencia)
                    expect(res.body.empresaFilial.id).to.be.not.undefined
                })
            })
        })
    })

    it('PUT Departamentos v2', () => {
        cy.getAllDepartmentsV2().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixDepartmentsV2).then((id) => {
                cy.putDepartmentsV2(id, fixDepartmentsV2).should((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body.id).to.not.null.and.not.undefined
                    expect(res.body.nome).to.eq(fixDepartmentsV2.nome)
                    expect(res.body.ativo).to.eq(true)
                    expect(res.body.usaOcorrencia).to.eq(fixDepartmentsV2.usaOcorrencia)
                    expect(res.body.empresaFilial.id).to.be.not.undefined
                })
            })
        })
    })

    it('DELETE Departamentos v2', () => {
        cy.getAllDepartmentsV2().then((resGetAll) => {

            cy.sortList(resGetAll, fixDepartmentsV2).then((id) => {
                cy.deleteDepartmentsV2(id).should((res) => {
                    expect(res.status).to.eq(204)
                })
            })
        })
    })
})