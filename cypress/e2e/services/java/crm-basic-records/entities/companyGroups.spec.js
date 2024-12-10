const fixCompanyGroups = require('../../../../../fixtures/api_payloads/java/basic-records/entities/companyGroups.json')

describe('Entity Company Groups', () => {

    it('POST Company Groups', () => {
        cy.postCompanyGroups(fixCompanyGroups).then((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.id).to.be.not.undefined
            expect(res.body.idErp).to.be.not.undefined
            expect(res.body.name).to.eq(fixCompanyGroups.name)
            expect(res.body.company.id).to.eq(fixCompanyGroups.company.id)
            
            cy.log(`Registro ID=${res.body.id}`)
        })
    });

    it('GET Company Groups', () => {
        cy.getAllCompanyGroups().then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body).to.not.be.empty.and.not.be.null

        }).then((resGetAll) => {
            cy.sortList(resGetAll, fixCompanyGroups).then((id) => {
                cy.getOneCompanyGroups(id).then((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body).to.not.be.empty.and.not.be.null
                    expect(res.body.id).to.be.not.undefined
                    expect(res.body.idErp).to.be.not.undefined
                    expect(res.body.name).to.eq(fixCompanyGroups.name)
                })
            })
        })
    });

    it('PUT Company Groups', () => {
        cy.getAllCompanyGroups().then((res) => {
            expect(res.status).to.eq(200)

        }).then((resGetAll) => {
            cy.sortList(resGetAll, fixCompanyGroups).then((id) => {

                cy.putCompanyGroups(fixCompanyGroups, id).then((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body.id).to.be.not.undefined
                    expect(res.body.idErp).to.be.not.undefined
                    expect(res.body.name).to.eq(fixCompanyGroups.name)
                })
            })
        })
    });

    it('DELETE Company Groups', () => {
        cy.getAllCompanyGroups().then((res) => {
            expect(res.status).to.eq(200)

        }).then((resGetAll) => {
            cy.sortList(resGetAll, fixCompanyGroups).then((id) => {

                cy.deleteCompanyGroups(id).then((resGetOne) => {
                    expect(resGetOne.status).to.eq(204)
                })
            })
        })
    });
});