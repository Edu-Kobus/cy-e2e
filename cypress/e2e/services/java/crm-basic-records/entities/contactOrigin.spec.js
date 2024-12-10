const fixContactOrigin = require('../../../../../fixtures/api_payloads/java/basic-records/entities/contactOrigin.json')

describe('Entity Contact Origin', () => {

    it('POST Contact Origin', () => {
        cy.postContactOrigin(fixContactOrigin).then((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.id).not.be.undefined
            expect(res.body.name).to.eq(fixContactOrigin.name)
            expect(res.body.company.id).to.eq(fixContactOrigin.company.id)
            expect(res.body.active).to.eq(fixContactOrigin.active)
        })
    });

    it('GET Contact Origin', () => {
        cy.getAllContactOrigin().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)
            expect(resGetAll.body).to.not.be.empty.and.not.be.null

            cy.sortList(resGetAll, fixContactOrigin).then((id) => {
                cy.getOneContactOrigin(fixContactOrigin, id).then((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body.id).not.be.undefined
                    expect(res.body.name).to.eq(fixContactOrigin.name)
                    expect(res.body.company.id).to.eq(fixContactOrigin.company.id)
                    expect(res.body.active).to.eq(fixContactOrigin.active)
                })

            })
        })
    });

    it('PUT Contact Origin', () => {
        cy.getAllContactOrigin().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixContactOrigin).then((id) => {
                cy.putContactOrigin(fixContactOrigin, id).then((res) => {
                    expect(res.status).to.eq(200)
                    expect(res.body.id).not.be.undefined
                    expect(res.body.name).to.eq(fixContactOrigin.name)
                    expect(res.body.company.id).to.eq(fixContactOrigin.company.id)
                    expect(res.body.active).to.eq(fixContactOrigin.active)
                })
            })
        })
    });

    it('DELETE Contact Origin', () => {
        cy.getAllContactOrigin().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixContactOrigin).then((id) => {
                cy.deleteContactOrigin(id).then((res) => {
                    expect(res.status).to.eq(204)
                })
            })
        })
    });
});