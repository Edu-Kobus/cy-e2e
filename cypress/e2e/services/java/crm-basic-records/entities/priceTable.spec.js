const fixPriceTable = require('../../../../../fixtures/api_payloads/java/basic-records/entities/priceTable.json')

describe('Entities Price Table', () => {

    it('POST Price Table', () => {
        cy.postPriceTable(fixPriceTable).then((res) => {
            expect(res.status).to.eq(201)
            
            expect(res.body.name).to.eq(fixPriceTable.name)
            expect(res.body.id).to.not.null
        })
    });

    it('GET Price Table', () => {
        cy.getAllPriceTable().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixPriceTable).then((id) => {
                cy.getOnePriceTable(id).then((resGetOne) => {
                    expect(resGetOne.status).to.eq(200)

                    expect(resGetOne.body.id).to.not.null
                    expect(resGetOne.body.active).to.eq(fixPriceTable.active)
                })
            })
        })
    });

    it('PUT Price Table', () => {
        cy.getAllPriceTable().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixPriceTable).then((id) => {
                cy.putPriceTable(id, fixPriceTable).then((res) => {
                    expect(res.status).to.eq(200)

                    expect(res.body.id).to.not.null
                    expect(res.body.active).to.eq(fixPriceTable.active)
                    expect(res.body.name).to.eq(fixPriceTable.name)
                })
            })
        })
    });

    it('DELETE Price Table', () => {
        cy.getAllPriceTable().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixPriceTable).then((id) => {
                cy.deletePriceTable(id).then((res) => {
                    expect(res.status).to.eq(204)
                })
            })
        })
    });
});