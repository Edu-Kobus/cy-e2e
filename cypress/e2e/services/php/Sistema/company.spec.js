const fixCompany = require('../../../../fixtures/api_payloads/php/Sistema/company.json')

describe('Cadastro Empresa v2', () => {

    before(() => cy.getToken())

    //DELETE Method not Allowed

    // it('POST Company', () => {
    //     cy.postCompanyV2(fixCompany).then((res) => {
    //         expect(res.status).to.eq(201)

    //         expect(res.body.id).be.not.null
    //         expect(res.body.razaoSocial).to.eq(fixCompany.razaoSocial)
    //         expect(res.body.nomeFantasia).to.eq(fixCompany.nomeFantasia)
    //         expect(res.body.cnpj).to.eq(fixCompany.cnpj)
    //         expect(res.body.nomeBanco).to.eq('development')
    //         expect(res.body.urlAcesso).to.be.not.empty
    //     })
    // });

    it('GET Company', () => {
        cy.getCompanyV2().then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.id).be.not.null
            expect(res.body.razaoSocial).to.be.not.null
            expect(res.body.nomeFantasia).to.be.not.null
            expect(res.body.cnpj).to.be.not.null

          cy.sortList(res, fixCompany).then((id) => {

            cy.getOneCompanyV2(id).should((res) => {
                expect(res.status).to.eq(200)

                expect(res.body.id).be.not.null
                expect(res.body.razaoSocial).to.be.not.null
                expect(res.body.nomeFantasia).to.be.not.null
                expect(res.body.cnpj).to.be.not.null
            })
          })
        })
    });
});