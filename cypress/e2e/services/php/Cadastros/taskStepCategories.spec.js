const fixture = require('../../../../fixtures/api_payloads/php/Cadastros/taskStepCategories.json')

describe('Categoria de Etapa da Tarefa', () => {
    before(() => {
        cy.getToken()
    })

    it('POST Categoria de Etapa da Tarefa', () => {
        cy.postTaskStepCategories(fixture).should((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.id).to.not.null.and.not.undefined
            expect(res.body.nome).to.eq(fixture.nome)
            expect(res.body.ativo).to.eq(fixture.ativo)
        })
    })

    it('GET Categoria de Etapa da Tarefa', () => {
        cy.getAllTaskStepCategories().then((res) => {
            expect(res.status).to.eq(200)
            
            cy.sortList(res, fixture).then((id) => {
                cy.getOneTaskStepCategories(id).should((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body.id).to.eq(fixture.id)
                    expect(res.body.nome).to.eq(fixture.nome)
                    expect(res.body.ativo).to.eq(fixture.ativo)
                })
            })
        })
    })

    it('PUT Categoria de Etapa da Tarefa', () => {
        cy.getAllTaskStepCategories().then((res) => {
            expect(res.status).to.eq(200)

            cy.sortList(res, fixture).then((id) => {
                cy.putTaskStepCategories(id, fixture).should((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body.id).to.eq(fixture.id)
                    expect(res.body.nome).to.eq(fixture.nome)
                    expect(res.body.ativo).to.eq(fixture.ativo)
                })
            })
        })
    })

    it('DELETE Categoria de Etapa da Tarefa', () => {
        cy.getAllTaskStepCategories().then((res) => {

            cy.sortList(res, fixture).then((id) => {
                cy.deleteTaskStepCategories(id).should((res) => {
                    expect(res.status).to.eq(204)
                })
            })
        })
    })
})