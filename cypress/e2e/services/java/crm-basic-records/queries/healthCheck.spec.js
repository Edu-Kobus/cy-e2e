const fixHealthCheck = require('../../../../../fixtures/api_payloads/java/basic-records/queries/healthCheck.json')

describe('Query Health Check', () => {

    it('POST Health Check', () => {
        cy.postHealthCheck(fixHealthCheck).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.status).to.eq(fixHealthCheck.status)
        })
    });

    it('GET Health Check', () => {
        cy.getAllHealthCheck().then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.status).to.eq(fixHealthCheck.status)
        })
    });
});