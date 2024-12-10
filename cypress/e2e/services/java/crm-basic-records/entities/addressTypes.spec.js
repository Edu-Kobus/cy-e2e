const fixAddressTypes = require('../../../../../fixtures/api_payloads/java/basic-records/entities/addressTypes.json')

describe('Entity Address Types', () => {

    it('POST Address Types', () => {
        cy.postAddressTypes(fixAddressTypes).then((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.id).to.be.not.undefined
            expect(res.body.name).to.eq(fixAddressTypes.name)

            cy.log(`Registro ID=${res.body.id}`)
        })
    });

    it('GET Address Types', () => {
        cy.getAllAddressTypes().then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body).to.not.be.empty.and.not.be.null

            cy.sortList(res, fixAddressTypes).then((id) => {
                cy.getOneAddressTypes(fixAddressTypes, id).then((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body.id).to.be.not.undefined
                    expect(res.body).to.not.be.empty.and.not.be.null
                })
            })
        })
    });

    it('PUT Address Types', () => {
        cy.getAllAddressTypes().then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body).to.not.be.empty.and.not.be.null

            cy.sortList(res, fixAddressTypes).then((id) => {
                cy.putAddressTypes(fixAddressTypes, id).then((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body).to.not.be.empty.and.not.be.null
                    expect(res.body.id).to.be.not.undefined
                    expect(res.body.name).to.eq(fixAddressTypes.name)
                })

            })
        })
    });

    it('DELETE Address Types', () => {
        cy.getAllAddressTypes().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixAddressTypes).then((id) => {

                cy.deleteAddressTypes(id).then((resGetOne) => {
                    expect(resGetOne.status).to.eq(204)
                })
            })
        })
    });
});