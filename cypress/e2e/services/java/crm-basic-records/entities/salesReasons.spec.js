const fixSalesReasons = require('../../../../../fixtures/api_payloads/java/basic-records/entities/salesReasons.json')

describe('Entities SalesReasons ', () => {

    it('POST SalesReasons', () => {
        cy.postSalesReasons(fixSalesReasons).then((res) => {
            expect(res.status).to.eq(201)
            
            expect(res.body.id).to.not.null
            expect(res.body.name).to.eq(fixSalesReasons.name)

            expect(res.body.companyBranch.company.id).to.not.null
            expect(res.body.companyBranch.branch.id).to.not.null
            
        })
    });

    it('GET SalesReasons', () => {
        cy.getAllSalesReasons().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixSalesReasons).then((id) => {
                cy.getOneSalesReasons(id).then((resGetOne) => {

                    expect(resGetOne.status).to.eq(200)

                    expect(resGetOne.body.id).to.not.null
                    expect(resGetOne.body.name).to.eq(fixSalesReasons.name)
                    expect(resGetOne.body.active).to.eq(fixSalesReasons.active)

                    expect(resGetOne.body.companyBranch.company.id).to.not.null
                    expect(resGetOne.body.companyBranch.branch.id).to.not.null
                })
            })
        })
    });

    it('PUT SalesReasons', () => {
        cy.getAllSalesReasons().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixSalesReasons).then((id) => {
                cy.putSalesReasons(id, fixSalesReasons).then((res) => {
                    expect(res.status).to.eq(200)

                    expect(res.body.id).to.not.null
                    expect(res.body.active).to.eq(fixSalesReasons.active)
                    expect(res.body.name).to.eq(fixSalesReasons.name)

                    expect(res.body.companyBranch.company.id).to.not.null
                    expect(res.body.companyBranch.branch.id).to.not.null
                })
            })
        })
    });

    it('DELETE SalesReasons', () => {
        cy.getAllSalesReasons().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixSalesReasons).then((id) => {
                cy.deleteSalesReasons(id).then((res) => {
                    expect(res.status).to.eq(204)
                })
            })
        })
    });
});