const fixLossReasons = require('../../../../../fixtures/api_payloads/java/basic-records/entities/lossReasons.json')

describe('Entities Loss Reason', () => {

    it('POST Loss Reasons', () => {
        cy.postLossReasons(fixLossReasons).then((res) => {
            expect(res.status).to.eq(201)
            
            expect(res.body.id).to.not.null
            expect(res.body.active).to.eq(fixLossReasons.active)
            expect(res.body.name).to.eq(fixLossReasons.name)
            expect(res.body.companyBranch.company.id).to.eq(fixLossReasons.companyBranch.company.id)
            expect(res.body.companyBranch.branch.id).to.eq(fixLossReasons.companyBranch.branch.id)
        })
    });

    it('GET Loss Reasons', () => {
        cy.getAllLossReasons().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixLossReasons).then((id) => {
                cy.getOneLossReasons(id).then((resGetOne) => {
                    expect(resGetOne.status).to.eq(200)

                    expect(resGetOne.body.id).to.not.null
                    expect(resGetOne.body.active).to.eq(fixLossReasons.active)
                    expect(resGetOne.body.name).to.eq(fixLossReasons.name)
                })
            })
        })
    });

    it('PUT Loss Reasons', () => {
        cy.getAllLossReasons().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixLossReasons).then((id) => {
                cy.putLossReasons(id, fixLossReasons).then((res) => {
                    expect(res.status).to.eq(200)

                    expect(res.body.id).to.not.null
                    expect(res.body.active).to.eq(fixLossReasons.active)
                    expect(res.body.name).to.eq(fixLossReasons.name)
                    expect(res.body.companyBranch.company.id).to.eq(fixLossReasons.companyBranch.company.id)
                    expect(res.body.companyBranch.branch.id).to.eq(fixLossReasons.companyBranch.branch.id)
                })
            })
        })
    });

    it('DELETE Loss Reasons', () => {
        cy.getAllLossReasons().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixLossReasons).then((id) => {
                cy.deleteLossReasons(id).then((res) => {
                    expect(res.status).to.eq(204)
                })
            })
        })
    });
});