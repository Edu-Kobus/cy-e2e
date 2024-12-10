const fixDeposit = require('../../../../../fixtures/api_payloads/java/basic-records/entities/deposit.json')

describe('Entities Deposit', () => {

    it('POST Deposit', () => {
        cy.postDeposit(fixDeposit).then((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.id).not.be.null.and.not.be.undefined
            expect(res.body.idErp).not.be.null.and.not.be.undefined
            expect(res.body.name).to.eq(fixDeposit.name)
            expect(res.body.active).to.eq(fixDeposit.active)
        })
    });

    it('GET Deposit', () => {
        cy.getAllDeposit().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixDeposit).then((id) => {

                cy.getOneDeposit(id).then((resGetOne) => {
                    expect(resGetOne.status).to.eq(200)
                    expect(resGetOne.body.id).not.be.null.and.not.be.undefined
                    expect(resGetOne.body.idErp).not.be.null.and.not.be.undefined
                })
            })
        })
    });

    it('PUT Deposit', () => {
        cy.getAllDeposit().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixDeposit).then((id) => {
                
                cy.putDeposit(fixDeposit, id).then((resGetOne) => {
                    expect(resGetOne.status).to.eq(200)
                    expect(resGetOne.body.id).not.be.null.and.not.be.undefined
                    expect(resGetOne.body.idErp).not.be.null.and.not.be.undefined
                    expect(resGetOne.body.name).to.eq(fixDeposit.name)
                    expect(resGetOne.body.active).to.eq(fixDeposit.active)
                })
            })
        })
    });

    it('DELETE Deposit', () => {
        cy.getAllDeposit().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixDeposit).then((id) => {

                cy.deleteDeposit(id).then((resGetOne) => {
                    expect(resGetOne.status).to.eq(204)
                })
            })
        })
    });
});