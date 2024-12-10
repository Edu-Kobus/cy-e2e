const fixStates = require('../../../../../fixtures/api_payloads/java/basic-records/entities/states.json')

const { faker } = require('@faker-js/faker')
const fakeInitial = faker.random.alpha(2)
const fakeAddress = faker.address.state()
const fakeStreet = faker.address.streetAddress()
const fakeAddressEdit = faker.address.state()

describe('Entities States ', () => {

    it('POST States', () => {
        fixStates.name = `${fakeAddress} ${fakeStreet}`
        fixStates.initials = fakeInitial

        cy.postStates(fixStates).then((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.id).to.be.not.undefined
            expect(res.body.idErp).to.eq(fixStates.idErp)
            expect(res.body.name).to.eq(fixStates.name)
            expect(res.body.initials).to.eq(fixStates.initials)
            expect(res.body.country.id).to.be.not.undefined
        })
    });

    it('GET States', () => {
        cy.getAllStates().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixStates).then((id) => {

                cy.getOneStates(id).then((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body.id).to.be.not.undefined
                    expect(res.body.idErp).to.eq(fixStates.idErp)
                    expect(res.body.name).to.eq(fixStates.name)
                    expect(res.body.initials).to.eq(fixStates.initials)
                    expect(res.body.country.id).to.be.not.undefined
                })
            })
        })
    });

    it('PUT States', () => {
        fixStates.name = `${fakeAddressEdit} ${fakeStreet}`
        fixStates.initials = fakeInitial

        cy.getAllStates().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixStates).then((id) => {

                cy.putStates(id, fixStates).then((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body.id).to.be.not.undefined
                    expect(res.body.idErp).to.eq(fixStates.idErp)
                    expect(res.body.name).to.eq(fixStates.name)
                    expect(res.body.initials).to.eq(fixStates.initials)
                    expect(res.body.country.id).to.be.not.undefined
                })
            })
        })
    });

    it('DELETE States', () => {
        cy.getAllStates().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixStates).then((id) => {

                cy.deleteStates(id).then((res) => {
                    expect(res.status).to.eq(204)
                })
            })
        })
    });
});