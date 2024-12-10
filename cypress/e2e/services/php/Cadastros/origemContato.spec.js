const fixContactOriginV2 = require('../../../../fixtures/api_payloads/php/Cadastros/origemContato.json')

describe('Origem Contato v2', () => {
    before(() => {
        cy.getToken()
    })

    it('POST Origem Contato v2', () => {
        cy.postContactOriginV2(fixContactOriginV2).should((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.id).to.not.null.and.not.undefined
            expect(res.body.nome).to.eq(fixContactOriginV2.nome)
            expect(res.body.ativo).to.eq(true)
            expect(res.body.empresa.id).to.be.not.undefined
        })
    })

    it('GET Origem Contato v2', () => {
        cy.getAllContactOriginV2().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)
            
            cy.sortList(resGetAll, fixContactOriginV2).then((id) => {
                cy.getOneContactOriginV2(id).should((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body.id).to.not.null.and.not.undefined
                    expect(res.body.nome).to.eq(fixContactOriginV2.nome)
                    expect(res.body.ativo).to.eq(true)
                    expect(res.body.empresa.id).to.be.not.undefined
                })
            })
        })
    })

    it('PUT Origem Contato v2', () => {
        cy.getAllContactOriginV2().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixContactOriginV2).then((id) => {
                cy.putContactOriginV2(id, fixContactOriginV2).should((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body.id).to.not.null.and.not.undefined
                    expect(res.body.nome).to.eq(fixContactOriginV2.nome)
                    expect(res.body.ativo).to.eq(true)
                    expect(res.body.empresa.id).to.be.not.undefined
                })
            })
        })
    })

    it('DELETE Origem Contato v2', () => {
        cy.getAllContactOriginV2().then((resGetAll) => {

            cy.sortList(resGetAll, fixContactOriginV2).then((id) => {
                cy.deleteContactOriginV2(id).should((res) => {
                    expect(res.status).to.eq(204)
                })
            })
        })
    })
})