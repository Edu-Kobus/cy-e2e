const fixServiceCategories = require('../../../../../fixtures/api_payloads/java/basic-records/entities/serviceCategories.json')

describe('Entities Service Categories ', () => {

    it('POST Service Categories', () => {
        cy.postServiceCategories(fixServiceCategories).then((res) => {
            expect(res.status).to.eq(201)
            
            expect(res.body.id).to.not.null
            expect(res.body.name).to.eq(fixServiceCategories.name)
            expect(res.body.idErp).to.eq(fixServiceCategories.idErp)
            expect(res.body.company.id).to.eq(fixServiceCategories.company.id)
        })
    });

    it('GET Service Categories', () => {
        cy.getAllServiceCategories().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixServiceCategories).then((id) => {
                cy.getOneServiceCategories(id).then((res) => {

                    expect(res.status).to.eq(200)

                    expect(res.body.id).to.not.null
                    expect(res.body.active).to.eq(fixServiceCategories.active)
                    expect(res.body.idErp).to.eq(fixServiceCategories.idErp)
                    expect(res.body.company.id).to.eq(fixServiceCategories.company.id)
                })
            })
        })
    });

    it('PUT Service Categories', () => {
        cy.getAllServiceCategories().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixServiceCategories).then((id) => {
                cy.putServiceCategories(id, fixServiceCategories).then((res) => {

                    expect(res.status).to.eq(200)

                    expect(res.body.id).to.not.null
                    expect(res.body.active).to.eq(fixServiceCategories.active)
                    expect(res.body.name).to.eq(fixServiceCategories.name)
                    expect(res.body.idErp).to.eq(fixServiceCategories.idErp)
                    expect(res.body.company.id).to.eq(fixServiceCategories.company.id)
                })
            })
        })
    });

    it('DELETE ServiceCategories', () => {
        cy.getAllServiceCategories().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixServiceCategories).then((id) => {
                cy.deleteServiceCategories(id).then((res) => {
                    expect(res.status).to.eq(204)
                })
            })
        })
    });
});