const fixFollowType = require('../../../../../fixtures/api_payloads/java/basic-records/entities/followType.json')

describe('Entities Follow Types', () => {

    it('POST Follow Type', () => {
        cy.postFollowType(fixFollowType).then((res) => {
            expect(res.status).to.eq(201)

            expect(res.body.companyBranch.id).to.eq(fixFollowType.companyBranch.id)
            expect(res.body.companyBranch.company.id).to.eq(fixFollowType.companyBranch.company.id)
            expect(res.body.companyBranch.branch.id).to.eq(fixFollowType.companyBranch.branch.id)

            expect(res.body.name).to.eq(fixFollowType.name)
            expect(res.body.active).to.eq(fixFollowType.active)
            expect(res.body.slaHours).to.eq(fixFollowType.slaHours)
            expect(res.body.module).to.eq(fixFollowType.module)
            expect(res.body.customFields.name).to.eq(fixFollowType.customFields.name)
        })
    });

    it('GET Follow Type', () => {
        cy.getAllFollowType().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixFollowType).then((id) => {
                cy.getOneFollowType(id).then((resGetOne) => {
                    expect(resGetOne.status).to.eq(200)
                })
            })
        })
    });

    it('PUT Follow Type', () => {
        cy.getAllFollowType().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixFollowType).then((id) => {
                cy.putFollowType(id, fixFollowType).then((res) => {
                    expect(res.status).to.eq(200)

                    expect(res.body.companyBranch.id).to.eq(fixFollowType.companyBranch.id)
                    expect(res.body.companyBranch.company.id).to.eq(fixFollowType.companyBranch.company.id)
                    expect(res.body.companyBranch.branch.id).to.eq(fixFollowType.companyBranch.branch.id)
                    expect(res.body.name).to.eq(fixFollowType.name)
                    expect(res.body.active).to.eq(fixFollowType.active)
                    expect(res.body.slaHours).to.eq(fixFollowType.slaHours)
                    expect(res.body.module).to.eq(fixFollowType.module)
                    expect(res.body.customFields.name).to.eq(fixFollowType.customFields.name)
                })
            })
        })
    });

    it('DELETE Follow Type', () => {
        cy.getAllFollowType().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixFollowType).then((id) => {
                cy.deleteFollowType(id).then((res) => {
                    expect(res.status).to.eq(204)
                })
            })
        })
    });
});