const fixProposal = require('../../../../../fixtures/api_payloads/java/opportunity/entities/opportunityProposal.json')

describe('Opportunity Proposal', () => {

    it('POST Opportunity Proposal', () => {
        cy.postProposal(fixProposal).then((res) => {
            const resBody = res.body

            expect(res.status).to.eq(201)
            expect(resBody.opportunity.id).to.eq(fixProposal.opportunity.id)

            expect(resBody.date).to.eq(fixProposal.date)
            expect(resBody.hour).to.eq(fixProposal.hour)

            // expect(resBody.proposalNumber).to.eq(fixProposal.proposalNumber)
            expect(resBody.orderNumber).to.eq(fixProposal.orderNumber)
            expect(resBody.shortName).to.eq(fixProposal.shortName)

            expect(resBody.template).to.eq(fixProposal.template)
            expect(resBody.languageLayout).to.eq(fixProposal.languageLayout)
            expect(resBody.proposalStatus).to.eq(fixProposal.proposalStatus)

            expect(resBody.paymentTermId).to.eq(fixProposal.paymentTermId)
        })
    });

    it('GET Opportunity Proposal', () => {
        cy.getAllOpportunityProposal().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixProposal).then((id) => {
                
                cy.getOneOpportunityProposal(id).then((resGetOne) => {
                    expect(resGetOne.status).to.eq(200)
                })
            })
        })
    });

    it('PUT Opportunity Proposal', () => {
        cy.getAllOpportunityProposal().then((resGetAll) => {
            cy.sortList(resGetAll, fixProposal).then((id) => {

                cy.putProposal(id, fixProposal).then((res) => {
                    const resBody = res.body

                    expect(res.status).to.eq(200)
                    expect(resBody.opportunity.id).to.eq(fixProposal.opportunity.id)
                    expect(resBody.date).to.eq(fixProposal.date)
                    expect(resBody.hour).to.eq(fixProposal.hour)

                    // expect(resBody.proposalNumber).to.eq(fixProposal.proposalNumber)
                    expect(resBody.orderNumber).to.eq(fixProposal.orderNumber)
                    expect(resBody.shortName).to.eq(fixProposal.shortName)

                    expect(resBody.template).to.eq(fixProposal.template)
                    expect(resBody.languageLayout).to.eq(fixProposal.languageLayout)
                    expect(resBody.proposalStatus).to.eq(fixProposal.proposalStatus)

                    expect(resBody.paymentTermId).to.eq(fixProposal.paymentTermId)
                })
            })
        })
    });

    it('DELETE Opportunity Proposal', () => {
        cy.getAllOpportunityProposal().then((resGetAll) => {
            cy.sortList(resGetAll, fixProposal).then((id) => {

                cy.deleteProposal(id).then((res) => {
                    expect(res.status).to.eq(204)
                })
            })
        })
    });
})