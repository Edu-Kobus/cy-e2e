const fixOpportunityOrigins = require('../../../../../fixtures/api_payloads/java/basic-records/entities/opportunityOrigins.json')

describe('Entities Opportunity Origins', () => {
 
    it('POST Opportunity Origins', () => {
        cy.postOpportunityOrigins(fixOpportunityOrigins).then((res) => {
            expect(res.status).to.eq(201)
            
            expect(res.body.id).to.not.null
            expect(res.body.active).to.eq(fixOpportunityOrigins.active)
            expect(res.body.name).to.eq(fixOpportunityOrigins.name)
            expect(res.body.companyBranch.company.id).to.eq(fixOpportunityOrigins.companyBranch.company.id)
            expect(res.body.companyBranch.branch.id).to.eq(fixOpportunityOrigins.companyBranch.branch.id)
        })
    });

    it('GET Opportunity Origins', () => {
        cy.getAllOpportunityOrigins().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixOpportunityOrigins).then((id) => {
                cy.getOneOpportunityOrigins(id).then((resGetOne) => {
                    expect(resGetOne.status).to.eq(200)

                    expect(resGetOne.body.id).to.not.null
                    expect(resGetOne.body.active).to.eq(fixOpportunityOrigins.active)
                    expect(resGetOne.body.name).to.eq(fixOpportunityOrigins.name)
                    expect(resGetOne.body.companyBranch.company.id).to.eq(fixOpportunityOrigins.companyBranch.company.id)
                    expect(resGetOne.body.companyBranch.branch.id).to.eq(fixOpportunityOrigins.companyBranch.branch.id)
                })
            })
        })
    });

    it('PUT Opportunity Origins', () => {
        cy.getAllOpportunityOrigins().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixOpportunityOrigins).then((id) => {
                cy.putOpportunityOrigins(id, fixOpportunityOrigins).then((res) => {
                    expect(res.status).to.eq(200)

                    expect(res.body.id).to.not.null
                    expect(res.body.active).to.eq(fixOpportunityOrigins.active)
                    expect(res.body.name).to.eq(fixOpportunityOrigins.name)
                    expect(res.body.companyBranch.company.id).to.eq(fixOpportunityOrigins.companyBranch.company.id)
                    expect(res.body.companyBranch.branch.id).to.eq(fixOpportunityOrigins.companyBranch.branch.id)
                })
            })
        })
    });

    it('DELETE Opportunity Origins', () => {
        cy.getAllOpportunityOrigins().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixOpportunityOrigins).then((id) => {
                cy.deleteOpportunityOrigins(id).then((res) => {
                    expect(res.status).to.eq(204)
                })
            })
        })
    });
});