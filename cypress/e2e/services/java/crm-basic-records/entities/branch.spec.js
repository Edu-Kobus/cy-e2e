const fixBranch = require('../../../../../fixtures/api_payloads/java/basic-records/entities/branch.json')

describe('Entity Branch', () => {

    it('GET Branch', () => {
        cy.getAllBranch().then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body).to.not.be.empty.and.not.be.null

        }).then((getAll) => {

            cy.sortList(getAll, fixBranch).then((id) => {
                cy.getOneBranch(id, fixBranch).then((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body).to.not.be.empty.and.not.be.null
                })

            })
        })
    });
});