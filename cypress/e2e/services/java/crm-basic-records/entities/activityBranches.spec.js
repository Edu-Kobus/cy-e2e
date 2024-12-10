const fixActivityBranches = require('../../../../../fixtures/api_payloads/java/basic-records/entities/activityBranches.json')

describe('Entity Activity Branches', () => {

    it('POST Activity Branches', () => {
        cy.postActivityBranches(fixActivityBranches).then((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.id).to.be.not.undefined
            expect(res.body.idErp).to.be.not.undefined
            expect(res.body.name).to.eq(fixActivityBranches.name)

            cy.log(`Registro ID=${res.body.id}`)
        })
    });

    it('GET Activity Branches', () => {
        cy.getAllActivityBranches().then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body).to.not.be.empty.and.not.be.null

        }).then((getAll) => {

            cy.sortList(getAll, fixActivityBranches).then((id) => {
                cy.getOneActivityBranches(fixActivityBranches, id).then((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body.id).to.be.not.undefined
                    expect(res.body.idErp).to.be.not.undefined
                    expect(res.body).to.not.be.empty.and.not.be.null
                })
            })
        })
    });

    it('PUT Activity Branches', () => {
        cy.getAllActivityBranches().then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body).to.not.be.empty.and.not.be.null

        }).then((getAll) => {

            cy.sortList(getAll, fixActivityBranches).then((id) => {
                cy.putActivityBranches(fixActivityBranches, id).then((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body).to.not.be.empty.and.not.be.null
                    expect(res.body.id).to.be.not.undefined
                    expect(res.body.idErp).to.be.not.undefined
                    expect(res.body.name).to.eq(fixActivityBranches.name)
                })

            })
        })
    });

    it('DELETE Activity Branches', () => {
        cy.getAllActivityBranches().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixActivityBranches).then((id) => {

                cy.deleteActivityBranches(id).then((resGetOne) => {
                    expect(resGetOne.status).to.eq(204)
                })
            })
        })
    });
});