const {faker} = require('@faker-js/faker')
const fixCountries = require('../../../../../fixtures/api_payloads/java/basic-records/entities/countries.json')

describe('Entity Countries', () => {

    var ID_REGISTER = null

    it('POST Countries', () => {
        fixCountries.name = faker.name.fullName({ lastName: 'Country' })

        cy.postCountries(fixCountries).then((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.id).be.not.undefined
            expect(res.body.idErp).to.eq(fixCountries.idErp)
            expect(res.body.name).to.eq(fixCountries.name)

            ID_REGISTER = res.body.id
        })
    });

    it('GET Countries', () => {
        fixCountries.id = ID_REGISTER

        cy.getAllCountries().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)
            expect(resGetAll.body).to.not.be.empty.and.not.be.null
        })

        cy.getOneCountries(fixCountries, ID_REGISTER).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.id).to.eq(fixCountries.id)
            expect(res.body.idErp).to.eq(fixCountries.idErp)
            expect(res.body.name).to.eq(fixCountries.name)
        })
    });

    it('PUT Countries', () => {
        fixCountries.id = ID_REGISTER
        fixCountries.name = faker.name.fullName({ lastName: 'Country' })

        cy.putCountries(fixCountries, ID_REGISTER).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.id).to.eq(fixCountries.id)
            expect(res.body.idErp).to.eq(fixCountries.idErp)
            expect(res.body.name).to.eq(fixCountries.name)
        })
    });

    it('DELETE Countries', () => {
        fixCountries.id = ID_REGISTER

        cy.deleteCountries(ID_REGISTER).then((resGetOne) => {
            expect(resGetOne.status).to.eq(204)
        })
    });
});