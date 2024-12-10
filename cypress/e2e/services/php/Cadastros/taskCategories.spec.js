const fixture = require('../../../../fixtures/api_payloads/php/Cadastros/taskCategories.json')

describe('Categoria de Tarefa', () => {
    before(() => {
        cy.getToken()
    })

    it('POST Categoria de Tarefa', () => {
        cy.postTaskCategories(fixture).should((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.id).to.not.null.and.not.undefined
            expect(res.body.nome).to.eq(fixture.nome)
            expect(res.body.ativo).to.eq(fixture.ativo)
        })
    })

    it('GET Categoria de Tarefa', () => {
        cy.getAllTaskCategories().then((res) => {
            expect(res.status).to.eq(200)
            
            cy.sortList(res, fixture).then((id) => {
                cy.getOneTaskCategories(id).should((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body.id).to.eq(fixture.id)
                    expect(res.body.nome).to.eq(fixture.nome)
                    expect(res.body.ativo).to.eq(fixture.ativo)
                })
            })
        })
    })

    it('PUT Categoria de Tarefa', () => {
        cy.getAllTaskCategories().then((res) => {
            expect(res.status).to.eq(200)

            cy.sortList(res, fixture).then((id) => {
                cy.putTaskCategories(id, fixture).should((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body.id).to.eq(fixture.id)
                    expect(res.body.nome).to.eq(fixture.nome)
                    expect(res.body.ativo).to.eq(fixture.ativo)
                })
            })
        })
    })

    it('DELETE Categoria de Tarefa', () => {
        cy.getAllTaskCategories().then((res) => {

            cy.sortList(res, fixture).then((id) => {
                cy.deleteTaskCategories(id).should((res) => {
                    expect(res.status).to.eq(204)
                })
            })
        })
    })
})