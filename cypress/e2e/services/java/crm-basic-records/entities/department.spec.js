const fixDepartment = require('../../../../../fixtures/api_payloads/java/basic-records/entities/department.json')

describe('Entity Department', () => {

    it('POST Department', () => {
        cy.postDepartment(fixDepartment).then((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.id).not.be.undefined
            expect(res.body.name).to.eq(fixDepartment.name)
            expect(res.body.useOccurrence).to.eq(fixDepartment.useOccurrence)

        })
    });

    it('GET Department', () => {
        cy.getAllDepartment().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)
            expect(resGetAll.body).to.not.be.empty.and.not.be.null

            cy.sortList(resGetAll, fixDepartment).then((id) => {
                cy.getOneDepartment(fixDepartment, id).then((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body.id).not.be.undefined
                    expect(res.body.name).to.eq(fixDepartment.name)
                    expect(res.body.useOccurrence).to.eq(fixDepartment.useOccurrence)
                })

            })
        })
    });

    it('PUT Department', () => {
        cy.getAllDepartment().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixDepartment).then((id) => {
                cy.putDepartment(fixDepartment, id).then((resGetOne) => {
                    expect(resGetOne.status).to.eq(200)
                    expect(resGetOne.body.id).not.be.undefined
                    expect(resGetOne.body.name).to.eq(fixDepartment.name)
                    expect(resGetOne.body.useOccurrence).to.eq(fixDepartment.useOccurrence)
                })
            })
        })
    });

    it('DELETE Department', () => {
        cy.getAllDepartment().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixDepartment).then((id) => {
                cy.deleteDepartment(id).then((resGetOne) => {
                    expect(resGetOne.status).to.eq(204)
                })
            })
        })
    });
});