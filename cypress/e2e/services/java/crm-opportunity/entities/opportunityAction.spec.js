const fixOpportunityAction = require('../../../../../fixtures/api_payloads/java/opportunity/entities/opportunityAction.json')

describe('Opportunity Proposal Action',() => {

    it('POST Opportunity Proposal Action', () => {
        cy.postOpportunityAction(fixOpportunityAction).then((res) => {
            expect(res.status).to.eq(201)

            Cypress.env('id', res.body.id )
        })
    });
    
    it('GET Opportunity Proposal Action', () => {
        cy.getAllOpportunityAction().then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body).to.not.null
            expect(res.body).not.be.empty
        }).then((resGetAll) => {
            cy.sortList(resGetAll, fixOpportunityAction).then(id => {

                cy.getOneOpportunityAction(id).then((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body).to.not.null
                    expect(res.body).not.be.empty
                })
            })
        })
    });


    it('PUT Opportunity Proposal Action', () => {
        let idRegister = Cypress.env('id')
        fixOpportunityAction.id = Cypress.env('id')

        cy.putOpportunityAction(idRegister, fixOpportunityAction).then((res) => {
            expect(res.status).to.eq(200)
        })
    });

    it('DELETE Opportunity Proposal Action', () => {
        let idRegister = Cypress.env('id')

        cy.deleteOpportunityAction(idRegister).then((res) => {
            expect(res.status).to.eq(204)
        })
    });
})