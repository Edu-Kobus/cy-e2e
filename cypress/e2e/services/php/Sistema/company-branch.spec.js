const fixCompanyBranch = require('../../../../fixtures/api_payloads/php/Sistema/company-branch.json')

describe('Cadastro Empresa Filial v2', () => {

    before(() => cy.getToken())

    var ID_REGISTER = null

    it('POST Company Branch', () => {
        cy.postCompanyBranchV2(fixCompanyBranch).then((res) => {
            expect(res.status).to.eq(201)

            ID_REGISTER = res.body.id
        })
    });

    it('GET Company Branch', () => {
        fixCompanyBranch.id = ID_REGISTER

        cy.getCompanyBranchV2().then((res) => {
            expect(res.status).to.eq(200)
        })

        cy.getOneCompanyBranchV2(ID_REGISTER).should((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.id).be.not.null
        })
    });

    it('DELETE Company Branch', () => {
        cy.deleteCompanyBranchV2(ID_REGISTER).then((res) => {
            expect(res.status).to.eq(204)
        })
    });
});