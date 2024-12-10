const fixture = require('../../../../../fixtures/api_payloads/java/campaign/entities/campaignType.json')

describe('Entities Campaign Type', () => {

    var REGISTER_ID = null

    it('POST Campaign Type', () => {
        fixture.id = null

        cy.postCampaignType(fixture).then((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.id).to.be.not.undefined
            expect(res.body.name).to.eq(fixture.name)
            expect(res.body.active).to.eq(fixture.active)

            REGISTER_ID = res.body.id
        })
    });

    it('GET Campaign Type', () => {
        fixture.id = REGISTER_ID

        cy.getAllCampaignType(REGISTER_ID).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.contents[0].id).to.eq(fixture.id)
            expect(res.body.contents[0].name).to.eq(fixture.name)
            expect(res.body.contents[0].active).to.eq(fixture.active)
        })

        cy.getOneCampaignType(fixture, REGISTER_ID).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.id).to.eq(fixture.id)
            expect(res.body.name).to.eq(fixture.name)
            expect(res.body.active).to.eq(fixture.active)
        })
    });

    it('PUT Campaign Type', () => {
        fixture.id = REGISTER_ID

        cy.putCampaignType(fixture, REGISTER_ID).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.id).to.eq(fixture.id)
            expect(res.body.name).to.eq(fixture.name)
            expect(res.body.active).to.eq(fixture.active)
        })
    });

    it('DELETE Campaign Type', () => {
        cy.deleteCampaignType(REGISTER_ID).then((res) => {
            expect(res.status).to.eq(204)
        })
    });
});