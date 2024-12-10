const fixProduct = require('../../../../../fixtures/api_payloads/java/opportunity/entities/opportunityProduct.json')

describe('Opportunity Proposal Product',() => {
    
    it('POST Opportunity Proposal Product', () => {
        cy.postOpportunityProduct(fixProduct).then((res) => { 
            expect(res.status).to.eq(201)
        })
    });

    it('GET Opportunity Proposal Product', () => {
        cy.getAllOpportunityProduct().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)
            expect(resGetAll.body).to.not.null
            expect(resGetAll.body).not.be.empty
            
            cy.sortList(resGetAll, fixProduct).then((id) => {
                cy.getOneOpportunityProduct(id).then((resGetOne) => {
                    expect(resGetOne.status).to.eq(200)
                    expect(resGetOne.body).to.not.null
                    expect(resGetOne.body).not.be.empty
                })
            })
        })
    });
    
    it('PUT Opportunity Proposal Product', () => {
        cy.getAllOpportunityProduct().then((resGetAll) => {
            cy.sortList(resGetAll, fixProduct).then((id) => {
                cy.putOpportunityProduct(id, fixProduct).then((res) => {
                    expect(res.status).to.eq(200)
                    
                })
            })
        })
    });

    it('DELETE Opportunity Proposal Product', () => {
        cy.getAllOpportunityProduct().then((resGetAll) => {
            cy.sortList(resGetAll, fixProduct).then((id) => {
                cy.deleteOpportunityProduct(id).then((res) => {
                    expect(res.status).to.eq(204)
                })
            })
        })
    });
})