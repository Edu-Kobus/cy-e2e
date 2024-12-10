const fixCities = require('../../../../../fixtures/api_payloads/java/basic-records/entities/cities.json')

describe('Entity Cities', () => {

    it('POST Entity Cities', () => {
        cy.postCities(fixCities).then((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.ibgeCode).to.eq(fixCities.ibgeCode)
            expect(res.body.ibgeCode).to.eq(fixCities.ibgeCode)
            expect(res.body.name).to.eq(fixCities.name)
            expect(res.body.dddCode).to.eq(fixCities.dddCode)
            expect(res.body.population).to.eq(fixCities.population)
            expect(res.body.estimatedPopulation).to.eq(fixCities.estimatedPopulation)
            expect(res.body.consumptionPotencial).to.eq(fixCities.consumptionPotencial)
            expect(res.body.pib).to.eq(fixCities.pib)

            expect(res.body.state.id).to.be.not.undefined
            expect(res.body.country.id).to.be.not.undefined

            Cypress.env('ID_CITY', res.body.id)
        })
    });

    it('GET Entity Cities', () => {
        fixCities.id = Cypress.env('ID_CITY')

        cy.getOneCities(Cypress.env('ID_CITY')).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body).to.not.be.empty.and.not.be.null
        })
    });

    it('PUT Entity Cities', () => {
        cy.putCities(fixCities, Cypress.env('ID_CITY')).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.ibgeCode).to.eq(fixCities.ibgeCode)
            expect(res.body.ibgeCode).to.eq(fixCities.ibgeCode)
            expect(res.body.name).to.eq(fixCities.name)
            expect(res.body.dddCode).to.eq(fixCities.dddCode)
            expect(res.body.population).to.eq(fixCities.population)
            expect(res.body.estimatedPopulation).to.eq(fixCities.estimatedPopulation)
            expect(res.body.consumptionPotencial).to.eq(fixCities.consumptionPotencial)
            expect(res.body.pib).to.eq(fixCities.pib)

            expect(res.body.state.id).to.be.not.undefined
            expect(res.body.country.id).to.be.not.undefined
        })
    });

    it('DELETE Entity Cities', () => {
        cy.deleteCities(Cypress.env('ID_CITY')).then((resGetOne) => {
            expect(resGetOne.status).to.eq(204)
        })
    });
});