const fixOpportunity = require('../../../../../fixtures/api_payloads/java/opportunity/entities/opportunity.json')

describe('Opportunity',() => {

var ID_REGISTER = null

    it('POST Opportunity', () => {
        cy.postOpportunity(fixOpportunity).then((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.id).not.be.undefined.and.not.null
            expect(res.body.account.id).to.eq(fixOpportunity.account.id)
            expect(res.body.companyBranch.id).to.eq(fixOpportunity.companyBranch.id)
            expect(res.body.proposalNumber).to.eq(fixOpportunity.proposalNumber)
            expect(res.body.orderNumber).to.eq(fixOpportunity.orderNumber)
            expect(res.body.autoNumbered).to.eq(fixOpportunity.autoNumbered)
            expect(res.body.initialPredictedValue).to.eq(fixOpportunity.initialPredictedValue)
            expect(res.body.closedValue).to.eq(fixOpportunity.closedValue)
            expect(res.body.predictedValueCurrency).to.eq(fixOpportunity.predictedValueCurrency)
            expect(res.body.closedValueCurrency).to.eq(fixOpportunity.closedValueCurrency)
            expect(res.body.predictedQuantitative).to.eq(fixOpportunity.predictedQuantitative)
            expect(res.body.quantitativeAccomplished).to.eq(fixOpportunity.quantitativeAccomplished)
            expect(res.body.history).to.eq(fixOpportunity.history)
            expect(res.body.description).to.eq(fixOpportunity.description)
            expect(res.body.operatorRegistration.id).to.eq(fixOpportunity.operatorRegistration.id)
            expect(res.body.operatorChange.id).to.eq(fixOpportunity.operatorChange.id)
            expect(res.body.businessType.id).to.eq(fixOpportunity.businessType.id)
            expect(res.body.type.id).to.eq(fixOpportunity.type.id)
            expect(res.body.notifyEmail).to.eq(fixOpportunity.notifyEmail)

            ID_REGISTER = Cypress.env('ID_OPPORTUNITY', res.body.id )
        })
    });
    
    it('GET Opportunity', () => {
        fixOpportunity.id = ID_REGISTER

        cy.getAllOpportunity().then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body).to.not.null
            expect(res.body).not.be.empty

            cy.getOneOpportunity(ID_REGISTER).then((res) => {
                expect(res.status).to.eq(200)
                expect(res.body.id).to.eq(fixOpportunity.id)
                expect(res.body.account.id).to.eq(fixOpportunity.account.id)
                expect(res.body.companyBranch.id).to.eq(fixOpportunity.companyBranch.id)
                expect(res.body.proposalNumber).to.eq(fixOpportunity.proposalNumber)
                expect(res.body.orderNumber).to.eq(fixOpportunity.orderNumber)
                expect(res.body.autoNumbered).to.eq(fixOpportunity.autoNumbered)
                expect(res.body.initialPredictedValue).to.eq(fixOpportunity.initialPredictedValue)
                expect(res.body.closedValue).to.eq(fixOpportunity.closedValue)
                expect(res.body.predictedValueCurrency).to.eq(fixOpportunity.predictedValueCurrency)
                expect(res.body.closedValueCurrency).to.eq(fixOpportunity.closedValueCurrency)
                expect(res.body.predictedQuantitative).to.eq(fixOpportunity.predictedQuantitative)
                expect(res.body.quantitativeAccomplished).to.eq(fixOpportunity.quantitativeAccomplished)
                expect(res.body.history).to.eq(fixOpportunity.history)
                expect(res.body.description).to.eq(fixOpportunity.description)
                expect(res.body.operatorRegistration.id).to.eq(fixOpportunity.operatorRegistration.id)
                expect(res.body.operatorChange.id).to.eq(fixOpportunity.operatorChange.id)
                expect(res.body.businessType.id).to.eq(fixOpportunity.businessType.id)
                expect(res.body.type.id).to.eq(fixOpportunity.type.id)
                expect(res.body.notifyEmail).to.eq(fixOpportunity.notifyEmail)
            })
        })
    });


    it('PUT Opportunity', () => {
        fixOpportunity.id = ID_REGISTER

        cy.putOpportunity(ID_REGISTER, fixOpportunity).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.id).to.eq(fixOpportunity.id)
            expect(res.body.account.id).to.eq(fixOpportunity.account.id)
            expect(res.body.companyBranch.id).to.eq(fixOpportunity.companyBranch.id)
            expect(res.body.proposalNumber).to.eq(fixOpportunity.proposalNumber)
            expect(res.body.orderNumber).to.eq(fixOpportunity.orderNumber)
            expect(res.body.autoNumbered).to.eq(fixOpportunity.autoNumbered)
            expect(res.body.initialPredictedValue).to.eq(fixOpportunity.initialPredictedValue)
            expect(res.body.closedValue).to.eq(fixOpportunity.closedValue)
            expect(res.body.predictedValueCurrency).to.eq(fixOpportunity.predictedValueCurrency)
            expect(res.body.closedValueCurrency).to.eq(fixOpportunity.closedValueCurrency)
            expect(res.body.predictedQuantitative).to.eq(fixOpportunity.predictedQuantitative)
            expect(res.body.quantitativeAccomplished).to.eq(fixOpportunity.quantitativeAccomplished)
            expect(res.body.history).to.eq(fixOpportunity.history)
            expect(res.body.description).to.eq(fixOpportunity.description)
            expect(res.body.operatorRegistration.id).to.eq(fixOpportunity.operatorRegistration.id)
            expect(res.body.operatorChange.id).to.eq(fixOpportunity.operatorChange.id)
            expect(res.body.businessType.id).to.eq(fixOpportunity.businessType.id)
            expect(res.body.type.id).to.eq(fixOpportunity.type.id)
            expect(res.body.notifyEmail).to.eq(fixOpportunity.notifyEmail)
        })
    });

    it('DELETE Opportunity', () => {
        cy.deleteOpportunity(ID_REGISTER).then((res) => {
            expect(res.status).to.eq(204)
        })
    });
})