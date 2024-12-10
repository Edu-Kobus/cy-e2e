const fixUserGroups = require('../../../../../fixtures/api_payloads/java/basic-records/entities/userGroups.json')

describe('Entities User Groups ', () => {

    it('POST User Groups', () => {
        cy.postUserGroups(fixUserGroups).then((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.id).to.not.null
            expect(res.body.name).to.eq(fixUserGroups.name)
            expect(res.body.customFields.name).to.eq(fixUserGroups.customFields.name)
            expect(res.body.company.id).to.eq(fixUserGroups.company.id)
        })
    });

    it('GET User Groups', () => {
        cy.getAllUserGroups().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixUserGroups).then((id) => {
                cy.getOneUserGroups(id).then((resGetOne) => {

                    expect(resGetOne.status).to.eq(200)
                    expect(resGetOne.body.id).to.not.null
                    expect(resGetOne.body.name).to.eq(fixUserGroups.name)
                    expect(resGetOne.body.active).to.eq(fixUserGroups.active)
                    expect(resGetOne.body.company.id).to.eq(fixUserGroups.company.id)
                    expect(resGetOne.body.customFields.name).to.eq(fixUserGroups.customFields.name)
                })
            })
        })
    });

    it('PUT User Groups', () => {
        cy.getAllUserGroups().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixUserGroups).then((id) => {
                cy.putUserGroups(id, fixUserGroups).then((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body.id).to.not.null
                    expect(res.body.active).to.eq(fixUserGroups.active)
                    expect(res.body.name).to.eq(fixUserGroups.name)
                    expect(res.body.company.id).to.eq(fixUserGroups.company.id)
                    expect(res.body.customFields).to.exist
                })
            })
        })
    });

    it('DELETE UserGroups', () => {
        cy.getAllUserGroups().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixUserGroups).then((id) => {
                cy.deleteUserGroups(id).then((res) => {
                    expect(res.status).to.eq(204)
                })
            })
        })
    });
});