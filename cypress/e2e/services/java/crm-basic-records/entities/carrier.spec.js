const fixCarrier = require('../../../../../fixtures/api_payloads/java/basic-records/entities/carrier.json')

describe('Entity Carrier', () => {

    it('POST Entity Carrier', () => {
        cy.postCarrier(fixCarrier).then((res) => {
            expect(res.status).to.eq(201)
        })
    });

    it('GET Entity Carrier', () => {
        cy.getAllCarrier().then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body).to.not.be.empty.and.not.be.null

        }).then((getAll) => {

            cy.sortList(getAll, fixCarrier).then((id) => {
                cy.getOneCarrier(fixCarrier, id).then((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body).to.not.be.empty.and.not.be.null
                })

            })
        })
    });

    it('DELETE Entity Carrier', () => {
        cy.getAllCarrier().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixCarrier).then((id) => {

                cy.deleteCarrier(id).then((resGetOne) => {
                    expect(resGetOne.status).to.eq(204)
                })
            })
        })
    });
});