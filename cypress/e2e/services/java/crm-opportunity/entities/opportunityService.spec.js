const fixService = require('../../../../../fixtures/api_payloads/java/opportunity/entities/opportunityService.json')

describe('Opportunity Service',() => {

    it('POST Opportunity Proposal Service', () => {
        cy.postOpportunityService(fixService).then((res) => {
            expect(res.status).to.eq(201)
            expect(res.body).to.not.null
            expect(res.body).not.be.empty
        })
    }); 

    it('GET Opportunity Proposal Service', () => {
        cy.getAllOpportunityService().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)
            expect(resGetAll.body).to.not.null
            expect(resGetAll.body).not.be.empty
            
            cy.sortList(resGetAll, fixService).then((id) => {

                cy.getOneOpportunityService(id).then((resGetOne) => {
                    expect(resGetOne.status).to.eq(200)
                    expect(resGetOne.body).to.not.null
                    expect(resGetOne.body).not.be.empty
                })
            })
        })
    }); 

    it('PUT Opportunity Proposal Service', () => {
        cy.getAllOpportunityService().then((resGetAll) => {

            cy.sortList(resGetAll, fixService).then((id) => {

                cy.putOpportunityService(id, fixService).then((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body).to.not.null
                    expect(res.body).not.be.empty
                })
            })
        })
    }); 

    it('DELETE Opportunity Proposal Service', () => {
        cy.getAllOpportunityService().then((resGetAll) => {

            cy.sortList(resGetAll, fixService).then((id) => {

                cy.deleteOpportunityService(id).then((res) => {
                    expect(res.status).to.eq(204)
                })
            })
        })
    }); 
})