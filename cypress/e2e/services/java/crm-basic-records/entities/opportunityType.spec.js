const fixOpportunityType = require('../../../../../fixtures/api_payloads/java/basic-records/entities/opportunityType.json')

describe('Entities Opportunity Type', () => {
 
    it('POST Opportunity Type', () => {
        cy.postOpportunityType(fixOpportunityType).then((res) => {
            expect(res.status).to.eq(201)
            
            expect(res.body.id).to.be.not.undefined
            expect(res.body.idErp).to.be.not.undefined
            expect(res.body.name).to.eq(fixOpportunityType.name)
            expect(res.body.active).to.eq(fixOpportunityType.active)
        })
    });

    it('GET Opportunity Type', () => {
        cy.getAllOpportunityType().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixOpportunityType).then((id) => {
                cy.getOneOpportunityType(id).then((resGetOne) => {
                    expect(resGetOne.status).to.eq(200)

                    expect(resGetOne.body.id).to.not.null
                    expect(resGetOne.body.active).to.eq(fixOpportunityType.active)
                })
            })
        })
    });

    it('PUT Opportunity Type', () => {
        cy.getAllOpportunityType().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixOpportunityType).then((id) => {
                cy.putOpportunityType(id, fixOpportunityType).then((res) => {

                    expect(res.status).to.eq(200)
                    expect(res.body.id).to.be.not.undefined
                    expect(res.body.idErp).to.be.not.undefined
                    expect(res.body.name).to.eq(fixOpportunityType.name)
                    expect(res.body.active).to.eq(fixOpportunityType.active)
                })
            })
        })
    });

    it('DELETE Opportunity Type', () => {
        cy.getAllOpportunityType().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixOpportunityType).then((id) => {
                cy.deleteOpportunityType(id).then((res) => {
                    expect(res.status).to.eq(204)
                })
            })
        })
    });
});