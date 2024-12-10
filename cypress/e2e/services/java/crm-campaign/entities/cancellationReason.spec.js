const fixture = require('../../../../../fixtures/api_payloads/java/campaign/entities/cancellationReason.json')

describe('Entities Cancellation Reason', () => {

    var REGISTER_ID = null

    it('POST Cancellation Reason', () => {
        fixture.id = null
        
        cy.postCancellationReason(fixture).then((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.id).to.be.not.undefined
            expect(res.body.name).to.eq(fixture.name)
            expect(res.body.active).to.eq(fixture.active)
            
            REGISTER_ID = res.body.id
        })
    });
    
    it('GET Cancellation Reason', () => {
        fixture.id = REGISTER_ID

        cy.getAllCancellationReason(REGISTER_ID).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.contents[0].id).to.eq(fixture.id)
            expect(res.body.contents[0].name).to.eq(fixture.name)
            expect(res.body.contents[0].active).to.eq(fixture.active)
        })

        cy.getOneCancellationReason(fixture, REGISTER_ID).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.id).to.eq(fixture.id)
            expect(res.body.name).to.eq(fixture.name)
            expect(res.body.active).to.eq(fixture.active)
        })
    });

    it('PUT Cancellation Reason', () => {
        fixture.id = REGISTER_ID

        cy.putCancellationReason(fixture, REGISTER_ID).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.id).to.eq(fixture.id)
            expect(res.body.name).to.eq(fixture.name)
            expect(res.body.active).to.eq(fixture.active)
        })
    });

    it('DELETE Cancellation Reason', () => {
        cy.deleteCancellationReason(REGISTER_ID).then((res) => {
            expect(res.status).to.eq(204)
        })
    });
});