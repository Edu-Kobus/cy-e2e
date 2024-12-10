const fixCompany = require('../../../../../fixtures/api_payloads/java/basic-records/entities/companyBranch.json')

describe('Entity Company Branch', () => {

    var ID_REGISTER = null

    it('POST Company Branch', () => {
        cy.postCompanyBranch(fixCompany).then((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.id).to.be.not.undefined
            expect(res.body.company.id).to.eq(fixCompany.company.id)
            expect(res.body.branch.id).to.eq(fixCompany.branch.id)

            ID_REGISTER = res.body.id
        })
    });

    it('GET Company Branch', () => {
        fixCompany.id = ID_REGISTER

        cy.getAllCompanyBranch().then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body).to.not.be.empty.and.not.be.null
        })

        cy.getOneCompanyBranch(fixCompany, ID_REGISTER).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.id).to.be.not.undefined
            expect(res.body.company.id).to.eq(fixCompany.company.id)
            expect(res.body.branch.id).to.eq(fixCompany.branch.id)
        })
    });

    it('DELETE Company Branch', () => {
        cy.deleteCompanyBranch(ID_REGISTER).then((resGetOne) => {
            expect(resGetOne.status).to.eq(204)
        })
    });
});