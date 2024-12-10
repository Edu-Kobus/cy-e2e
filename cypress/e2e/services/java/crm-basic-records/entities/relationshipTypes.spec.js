const fixRelationshipTypes = require('../../../../../fixtures/api_payloads/java/basic-records/entities/relationshipTypes.json')

describe('Entities RelationshipTypes ', () => {
 
    it('POST RelationshipTypes', () => {
        cy.postRelationshipTypes(fixRelationshipTypes).then((res) => {

            expect(res.status).to.eq(201)
            
            expect(res.body.id).to.not.null
            expect(res.body.name).to.eq(fixRelationshipTypes.name)
            expect(res.body.customFields.name).to.not.null
            expect(res.body.active).to.eq(fixRelationshipTypes.active)
            
        })
    });

    it('GET RelationshipTypes', () => {
        cy.getAllRelationshipTypes().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixRelationshipTypes).then((id) => {
                cy.getOneRelationshipTypes(id).then((resGetOne) => {

                    expect(resGetOne.status).to.eq(200)

                    expect(resGetOne.body.id).to.not.null
                    expect(resGetOne.body.name).to.eq(fixRelationshipTypes.name)
                    expect(resGetOne.body.customFields.name).to.not.null
                    expect(resGetOne.body.active).to.eq(fixRelationshipTypes.active)
                })
            })
        })
    });

    it('PUT RelationshipTypes', () => {
        cy.getAllRelationshipTypes().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixRelationshipTypes).then((id) => {
                cy.putRelationshipTypes(id, fixRelationshipTypes).then((res) => {

                    expect(res.status).to.eq(200)

                    expect(res.body.id).to.not.null
                    expect(res.body.active).to.eq(fixRelationshipTypes.active)
                    expect(res.body.customFields.name).to.not.null
                    expect(res.body.name).to.eq(fixRelationshipTypes.name)
                })
            })
        })
    });

    it('DELETE RelationshipTypes', () => {
        cy.getAllRelationshipTypes().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)

            cy.sortList(resGetAll, fixRelationshipTypes).then((id) => {
                cy.deleteRelationshipTypes(id).then((res) => {
                    expect(res.status).to.eq(204)
                })
            })
        })
    });
});