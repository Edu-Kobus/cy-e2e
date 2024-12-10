const fixRegions = require('../../../../../fixtures/api_payloads/java/basic-records/entities/regions.json')

describe('Entities Regions ', () => {
 
    it('POST Regions', () => {
        cy.postRegions(fixRegions).then((res) => {
            expect(res.status).to.eq(201)
            
            expect(res.body.id).to.not.null
            expect(res.body.name).to.eq(fixRegions.name)
            expect(res.body.companyBranch.id).to.eq(fixRegions.companyBranch.id)
            expect(res.body.companyBranch.company.id).to.eq(fixRegions.companyBranch.company.id)
            expect(res.body.companyBranch.branch.id).to.eq(fixRegions.companyBranch.branch.id)
        })
    });

    it('GET Regions', () => {
        cy.getAllRegions().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixRegions).then((id) => {
                cy.getOneRegions(id).then((res) => {
                    expect(res.status).to.eq(200)

                    expect(res.body.id).to.not.null
                    expect(res.body.active).to.eq(fixRegions.active)
                    expect(res.body.name).to.eq(fixRegions.name)
                    expect(res.body.companyBranch.id).to.eq(fixRegions.companyBranch.id)
                    expect(res.body.companyBranch.company.id).to.eq(fixRegions.companyBranch.company.id)
                    expect(res.body.companyBranch.branch.id).to.eq(fixRegions.companyBranch.branch.id)
                })
            })
        })
    });

    it('PUT Regions', () => {
        cy.getAllRegions().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixRegions).then((id) => {
                cy.putRegions(id, fixRegions).then((res) => {
                    expect(res.status).to.eq(200)

                    expect(res.body.id).to.not.null
                    expect(res.body.active).to.eq(fixRegions.active)
                    expect(res.body.name).to.eq(fixRegions.name)
                    expect(res.body.companyBranch.id).to.eq(fixRegions.companyBranch.id)
                    expect(res.body.companyBranch.company.id).to.eq(fixRegions.companyBranch.company.id)
                    expect(res.body.companyBranch.branch.id).to.eq(fixRegions.companyBranch.branch.id)
                })
            })
        })
    });

    it('DELETE Regions', () => {
        cy.getAllRegions().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixRegions).then((id) => {
                cy.deleteRegions(id).then((res) => {
                    expect(res.status).to.eq(204)
                })
            })
        })
    });
});