const fixFunctionsV2 = require('../../../../fixtures/api_payloads/php/Cadastros/funcoes.json')

describe('Funções v2', () => {
    before(() => {
        cy.getToken()
    })

    it('POST Funções v2', () => {
        cy.postFunctionsV2(fixFunctionsV2).should((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.id).to.not.null.and.not.undefined
            expect(res.body.nome).to.eq(fixFunctionsV2.nome)
            expect(res.body.ativo).to.eq(true)
            expect(res.body.empresa.id).to.be.not.undefined
        })
    })

    it('GET Funções v2', () => {
        cy.getAllFunctionsV2().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)
            
            cy.sortList(resGetAll, fixFunctionsV2).then((id) => {
                cy.getOneFunctionsV2(id).should((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body.id).to.not.null.and.not.undefined
                    expect(res.body.nome).to.eq(fixFunctionsV2.nome)
                    expect(res.body.ativo).to.eq(true)
                    expect(res.body.empresa.id).to.be.not.undefined
                })
            })
        })
    })

    it('PUT Funções v2', () => {
        cy.getAllFunctionsV2().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixFunctionsV2).then((id) => {
                cy.putFunctionsV2(id, fixFunctionsV2).should((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body.id).to.not.null.and.not.undefined
                    expect(res.body.nome).to.eq(fixFunctionsV2.nome)
                    expect(res.body.ativo).to.eq(true)
                    expect(res.body.empresa.id).to.be.not.undefined
                })
            })
        })
    })

    it('DELETE Funções v2', () => {
        cy.getAllFunctionsV2().then((resGetAll) => {

            cy.sortList(resGetAll, fixFunctionsV2).then((id) => {
                cy.deleteFunctionsV2(id).should((res) => {
                    expect(res.status).to.eq(204)
                })
            })
        })
    })
})