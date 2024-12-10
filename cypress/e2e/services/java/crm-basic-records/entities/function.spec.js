const fixFunction = require('../../../../../fixtures/api_payloads/java/basic-records/entities/function.json')

describe('Entity Function', () => {

    it('POST Function', () => {
        cy.postFunction(fixFunction).then((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.id).not.be.undefined
            expect(res.body.name).to.eq(fixFunction.name)
            expect(res.body.useOccurrence).to.eq(fixFunction.useOccurrence)

        })
    });

    it('GET Function', () => {
        cy.getAllFunction().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)
            expect(resGetAll.body).to.not.be.empty.and.not.be.null

            cy.sortList(resGetAll, fixFunction).then((id) => {
                cy.getOneFunction(fixFunction, id).then((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body.id).not.be.undefined
                    expect(res.body.name).to.eq(fixFunction.name)
                    expect(res.body.useOccurrence).to.eq(fixFunction.useOccurrence)
                })

            })
        })
    });

    it('PUT Function', () => {
        cy.getAllFunction().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixFunction).then((id) => {
                cy.putFunction(fixFunction, id).then((resGetOne) => {
                    expect(resGetOne.status).to.eq(200)
                    expect(resGetOne.body.id).not.be.undefined
                    expect(resGetOne.body.name).to.eq(fixFunction.name)
                    expect(resGetOne.body.useOccurrence).to.eq(fixFunction.useOccurrence)
                })
            })
        })
    });

    it('DELETE Function', () => {
        cy.getAllFunction().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixFunction).then((id) => {
                cy.deleteFunction(id).then((resGetOne) => {
                    expect(resGetOne.status).to.eq(204)
                })
            })
        })
    });
});