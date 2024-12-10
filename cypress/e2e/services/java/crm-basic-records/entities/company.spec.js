const fixCompany = require('../../../../../fixtures/api_payloads/java/basic-records/entities/company.json')

describe('Entity Company', () => {

    it('GET Company', () => {
        cy.getAllCompany().then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body).to.not.be.empty.and.not.be.null

        }).then((getAll) => {

            cy.sortList(getAll, fixCompany).then((id) => {
                cy.getOneCompany(id, fixCompany).then((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body).to.not.be.empty.and.not.be.null
                })

            })
        })
    });
});