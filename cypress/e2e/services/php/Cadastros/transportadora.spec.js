const fixCarriers = require('../../../../fixtures/api_payloads/php/Cadastros/transportadora.json')

describe('Transportadora', () => {
    before(() => {
        cy.getToken()
    })

    it('POST Transportadora', () => {
        cy.postCarriers(fixCarriers).should((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.id).to.not.null.and.not.be.undefined
            expect(res.body.idErp).to.not.null.and.not.be.undefined
            expect(res.body.nome).to.eq(fixCarriers.nome)
            expect(res.body.ativo).to.eq(fixCarriers.ativo)
            expect(res.body.empresaFilial.id).to.eq(fixCarriers.empresaFilial.id)
            expect(res.body.empresaFilial.empresa.id).to.eq(fixCarriers.empresaFilial.empresa.id)
            expect(res.body.empresaFilial.filial.id).to.eq(fixCarriers.empresaFilial.filial.id)
        })
    })

    it('GET Transportadora', () => {
        cy.getAllCarriers().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)
            
            cy.sortList(resGetAll, fixCarriers).then((id) => {
                cy.getOneCarriers(id).should((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body.id).to.not.null
                    expect(res.body.nome).to.eq(fixCarriers.nome)
                    expect(res.body.ativo).to.eq(fixCarriers.ativo)
                    expect(res.body.empresaFilial.id).to.eq(fixCarriers.empresaFilial.id)
                    expect(res.body.empresaFilial.empresa.id).to.eq(fixCarriers.empresaFilial.empresa.id)
                    expect(res.body.empresaFilial.filial.id).to.eq(fixCarriers.empresaFilial.filial.id)
                })
            })
        })
    })

    it('PUT Transportadora', () => {
        cy.getAllCarriers().then((resGetAll) => {

            cy.sortList(resGetAll, fixCarriers).then((id) => {
                cy.putCarriers(id, fixCarriers).should((res) => {
                    expect(res.body.id).to.not.null
                    expect(res.status).to.eq(200)
                    expect(res.body.idErp).to.not.null
                    expect(res.body.nome).to.eq(fixCarriers.nome)
                    expect(res.body.ativo).to.eq(fixCarriers.ativo)
                    expect(res.body.empresaFilial.id).to.eq(fixCarriers.empresaFilial.id)
                    expect(res.body.empresaFilial.empresa.id).to.eq(fixCarriers.empresaFilial.empresa.id)
                    expect(res.body.empresaFilial.filial.id).to.eq(fixCarriers.empresaFilial.filial.id)
                })
            })
        })
    })

    it('DELETE Transportadora', () => {
        cy.getAllCarriers().then((resGetAll) => {

            cy.sortList(resGetAll, fixCarriers).then((id) => {
                cy.deleteCarriers(id).should((res) => {
                    expect(res.status).to.eq(204)
                })
            })
        })
    })
})