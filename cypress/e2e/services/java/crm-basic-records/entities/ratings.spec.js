const fixRatings = require('../../../../../fixtures/api_payloads/java/basic-records/entities/ratings.json')

describe('Entities Ratings ', () => {

    var ID_REGISTER = null

    it('POST Ratings', () => {
        cy.postRatings(fixRatings).then((res) => {
            expect(res.status).to.eq(201)

            expect(res.body.id).to.not.null
            expect(res.body.name).to.eq(fixRatings.name)
            expect(res.body.icon).to.eq(fixRatings.icon)
            expect(res.body.active).to.eq(fixRatings.active)

            ID_REGISTER = res.body.id
        })
    });

    it('GET Ratings', () => {
        fixRatings.id = ID_REGISTER

        cy.getAllRatings().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)
        })

        cy.getOneRatings(ID_REGISTER).then((resGetOne) => {
            expect(resGetOne.status).to.eq(200)

            expect(resGetOne.body.id).to.not.null
            expect(resGetOne.body.active).to.eq(fixRatings.active)
        })
    });

    it('PUT Ratings', () => {
        fixRatings.id = ID_REGISTER

        cy.putRatings(ID_REGISTER, fixRatings).then((res) => {
            expect(res.status).to.eq(200)

            expect(res.body.id).to.not.null
            expect(res.body.active).to.eq(fixRatings.active)
            expect(res.body.name).to.eq(fixRatings.name)
            expect(res.body.icon).to.eq(fixRatings.icon)
        })
    });

    it('DELETE Ratings', () => {
        cy.deleteRatings(ID_REGISTER).then((res) => {
            expect(res.status).to.eq(204)
        })
    });
});