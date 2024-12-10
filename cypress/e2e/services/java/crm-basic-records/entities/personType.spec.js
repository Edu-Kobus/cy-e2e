const fixPersonType = require('../../../../../fixtures/api_payloads/java/basic-records/entities/personType.json')

describe('Entities Person Type', () => {
    it('GET Person Type', () => {
        cy.getAllPersonType().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.getOnePersonType(resGetAll.body.contents[0].id).then((resGetOne) => {
                expect(resGetOne.status).to.eq(200)
                expect(resGetOne.body.id).to.eq(fixPersonType.id)
                expect(resGetOne.body.name).to.eq(fixPersonType.name)
                expect(resGetOne.body.icon).to.eq(fixPersonType.icon)
                expect(resGetOne.body.active).to.eq(fixPersonType.active)
            })
        })
    });
});