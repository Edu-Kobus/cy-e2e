const fixEventTypes = require('../../../../../fixtures/api_payloads/java/basic-records/entities/eventTypes.json') 

describe('Entities Event Types', () => {

    it('POST Event Types', () => {
        cy.postEventTypes(fixEventTypes).then((res) => { 
            expect(res.status).to.eq(201)
            expect(res.body.name).to.eq(fixEventTypes.name)
            expect(res.body.active).to.eq(fixEventTypes.active)
        })  
    });
    
    it('GET Event Types', () => {
        cy.getAllEventTypes().then((resGetAll) => {
            let sortList = Cypress._.reverse(resGetAll.body.contents)
            let id = sortList[0].id

            fixEventTypes.id = resGetAll.body.contents[0].id

            expect(resGetAll.status).to.eq(200)

            cy.getOneEventTypes(id).then((resGetOne) => {
                expect(resGetOne.status).to.eq(200)
                expect(resGetOne.body.name).to.eq(fixEventTypes.name)
                expect(resGetOne.body.companyBranch.id).to.eq(fixEventTypes.companyBranch.id)
                expect(resGetOne.body.active).to.eq(fixEventTypes.active)
            })
        })
    })
    
    it('PUT Event Types', () => {
        cy.getAllEventTypes().then((resGetAll) => {
            let sortList = Cypress._.reverse(resGetAll.body.contents)
            fixEventTypes.id = resGetAll.body.contents[0].id

            cy.putEventTypes(sortList[0].id, fixEventTypes).then((res) => { 
                expect(res.status).to.eq(200)
                expect(res.body.name).to.eq(fixEventTypes.name)
                expect(res.body.active).to.eq(fixEventTypes.active)
            })
        })
    });

    it('DELETE Event Types', () => {
        cy.getAllEventTypes().then((resGetAll) => {
            let sortList = Cypress._.reverse(resGetAll.body.contents)
            fixEventTypes.id = resGetAll.body.contents[0].id
            
            cy.deleteEventTypes(sortList[0].id).then((res) => {
                expect(res.status).to.eq(204)
            })
        })
    });    
});