const fixCompanySize = require('../../../../../fixtures/api_payloads/java/basic-records/entities/companySize.json')

describe('Entity Company Size', () => {

    it('POST Company Size', () => {
        cy.postCompanySize(fixCompanySize).then((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.name).to.eq(fixCompanySize.name)
        })
    });

    it('GET Company Size', () => {
        cy.getAllCompanySize().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)
            expect(resGetAll.body).to.not.be.empty.and.not.be.null

            cy.sortList(resGetAll, fixCompanySize).then((id) => {
                
                cy.getOneCompanySize(id).then((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body).to.not.be.empty.and.not.be.null
                })

            })
        })
    });

    it('PUT Company Size', () => {
        cy.getAllCompanySize().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixCompanySize).then((id) => {

                cy.putCompanySize(fixCompanySize, id).then((resGetOne) => {
                    expect(resGetOne.status).to.eq(200)
                    expect(resGetOne.body.name).to.eq(fixCompanySize.name)
                })
            })
        })
    });

    it('DELETE Company Size', () => {
        cy.getAllCompanySize().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixCompanySize).then((id) => {

                cy.deleteCompanySize(id).then((resGetOne) => {
                    expect(resGetOne.status).to.eq(204)
                })
            })
        })
    });
});