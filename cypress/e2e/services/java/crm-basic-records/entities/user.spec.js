const fixUser = require('../../../../../fixtures/api_payloads/java/basic-records/entities/user.json')

describe('Entities User ', () => {

    before(() => cy.getTokenPlatform())

    it('POST User', () => {
        cy.postUser(fixUser).then((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.id).to.not.undefined
            expect(res.body.name).to.eq(fixUser.name)

            Cypress.env('USER_ID', res.body.id)
        })
    });

    it('GET User', () => {
        cy.getAllUser().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixUser).then((id) => {

                cy.getOneUser(id).then((resGetOne) => {
                    expect(resGetOne.status).to.eq(200)
                    expect(resGetOne.body.id).to.not.undefined
                })
            })
        })
    });

    it('PUT User', () => {
        cy.getAllUser().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixUser).then((id) => {

                cy.putUser(id, fixUser).then((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body.id).to.not.undefined
                })
            })
        })
    });

    it('DELETE User', () => {
        cy.getAllUser().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixUser).then((userId) => {

                if(userId === Cypress.env('USER_ID')) {
                    cy.queryDb(`DELETE FROM development.usuarios WHERE usuario_id=${userId} AND nome='User Cypress API Test';`).then(res => {
                        expect(res.affectedRows).to.eq(1);
                    })
                }
            })
        })
    });
});