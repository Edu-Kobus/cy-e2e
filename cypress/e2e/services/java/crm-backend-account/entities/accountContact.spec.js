const fixAccountContact = require('../../../../../fixtures/api_payloads/java/backend-account/entities/accountContact.json')

describe('Entities Account Contact', () => {

    let ID_REGISTER = null

    it('POST Account Contact', () => {
        cy.postAccountContact(fixAccountContact).then((res) => {
            expect(res.status).to.eq(201)
            expect(res.body.id).to.be.not.undefined
            expect(res.body.visibility).to.eq(fixAccountContact.visibility)
            expect(res.body.name).to.eq(fixAccountContact.name)
            expect(res.body.treatment).to.eq(fixAccountContact.treatment)
            expect(res.body.gender).to.eq(fixAccountContact.gender)
            expect(res.body.address).to.eq(fixAccountContact.address)
            expect(res.body.zipCode).to.eq(fixAccountContact.zipCode)
            expect(res.body.number).to.eq(fixAccountContact.number)
            expect(res.body.complement).to.eq(fixAccountContact.complement)
            expect(res.body.complement).to.eq(fixAccountContact.complement)
            expect(res.body.district).to.eq(fixAccountContact.district)
            expect(res.body.cpf).to.eq(fixAccountContact.cpf)
            expect(res.body.rg).to.eq(fixAccountContact.rg)
            expect(res.body.telephone).to.eq(fixAccountContact.telephone)
            expect(res.body.corporatePhone).to.eq(fixAccountContact.corporatePhone)
            expect(res.body.phoneBranch).to.eq(fixAccountContact.phoneBranch)
            expect(res.body.cell).to.eq(fixAccountContact.cell)
            expect(res.body.corporateCellPhone).to.eq(fixAccountContact.corporateCellPhone)
            expect(res.body.mobileWhatsapp).to.eq(fixAccountContact.mobileWhatsapp)
            expect(res.body.operator).to.eq(fixAccountContact.operator)
            expect(res.body.email).to.eq(fixAccountContact.email)
            expect(res.body.corporateEmail).to.eq(fixAccountContact.corporateEmail)
            expect(res.body.receiveCampaign).to.eq(fixAccountContact.receiveCampaign)
            expect(res.body.receiveSearch).to.eq(fixAccountContact.receiveSearch)
            expect(res.body.skype).to.eq(fixAccountContact.skype)
            expect(res.body.twitter).to.eq(fixAccountContact.twitter)
            expect(res.body.facebook).to.eq(fixAccountContact.facebook)
            expect(res.body.birthDate).to.eq(fixAccountContact.birthDate)
            expect(res.body.decisionLevel).to.eq(fixAccountContact.decisionLevel)
            expect(res.body.opinionCompany).to.eq(fixAccountContact.opinionCompany)
            expect(res.body.reasonOpinionCompany).to.eq(fixAccountContact.reasonOpinionCompany)
            expect(res.body.note).to.eq(fixAccountContact.note)

            ID_REGISTER = res.body.id
        })
    });

    it('GET Account Contact', () => {
        cy.getAllAccountContact().then((resGetAll) => {
            expect(resGetAll.status).to.eq(200)
        })

        cy.getOneAccountContact(ID_REGISTER).then((resGetOne) => {
            expect(resGetOne.status).to.eq(200)
            expect(resGetOne.body.id).to.be.not.undefined
            expect(resGetOne.body.visibility).to.eq(fixAccountContact.visibility)
            expect(resGetOne.body.name).to.eq(fixAccountContact.name)
            expect(resGetOne.body.treatment).to.eq(fixAccountContact.treatment)
            expect(resGetOne.body.gender).to.eq(fixAccountContact.gender)
            expect(resGetOne.body.addresGetOnes).to.eq(fixAccountContact.addresGetOnes)
            expect(resGetOne.body.zipCode).to.eq(fixAccountContact.zipCode)
            expect(resGetOne.body.number).to.eq(fixAccountContact.number)
            expect(resGetOne.body.complement).to.eq(fixAccountContact.complement)
            expect(resGetOne.body.complement).to.eq(fixAccountContact.complement)
            expect(resGetOne.body.district).to.eq(fixAccountContact.district)
            expect(resGetOne.body.cpf).to.eq(fixAccountContact.cpf)
            expect(resGetOne.body.rg).to.eq(fixAccountContact.rg)
            expect(resGetOne.body.telephone).to.eq(fixAccountContact.telephone)
            expect(resGetOne.body.corporatePhone).to.eq(fixAccountContact.corporatePhone)
            expect(resGetOne.body.phoneBranch).to.eq(fixAccountContact.phoneBranch)
            expect(resGetOne.body.cell).to.eq(fixAccountContact.cell)
            expect(resGetOne.body.corporateCellPhone).to.eq(fixAccountContact.corporateCellPhone)
            expect(resGetOne.body.mobileWhatsapp).to.eq(fixAccountContact.mobileWhatsapp)
            expect(resGetOne.body.operator).to.eq(fixAccountContact.operator)
            expect(resGetOne.body.email).to.eq(fixAccountContact.email)
            expect(resGetOne.body.corporateEmail).to.eq(fixAccountContact.corporateEmail)
            expect(resGetOne.body.receiveCampaign).to.eq(fixAccountContact.receiveCampaign)
            expect(resGetOne.body.receiveSearch).to.eq(fixAccountContact.receiveSearch)
            expect(resGetOne.body.skype).to.eq(fixAccountContact.skype)
            expect(resGetOne.body.twitter).to.eq(fixAccountContact.twitter)
            expect(resGetOne.body.facebook).to.eq(fixAccountContact.facebook)
            expect(resGetOne.body.birthDate).to.eq(fixAccountContact.birthDate)
            expect(resGetOne.body.decisionLevel).to.eq(fixAccountContact.decisionLevel)
            expect(resGetOne.body.opinionCompany).to.eq(fixAccountContact.opinionCompany)
            expect(resGetOne.body.reasonOpinionCompany).to.eq(fixAccountContact.reasonOpinionCompany)
            expect(resGetOne.body.note).to.eq(fixAccountContact.note)
        })
    });

    it('PUT Account Contact', () => {
        fixAccountContact.id = ID_REGISTER

        cy.putAccountContact(fixAccountContact, ID_REGISTER).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.id).to.be.not.undefined
            expect(res.body.visibility).to.eq(fixAccountContact.visibility)
            expect(res.body.name).to.eq(fixAccountContact.name)
            expect(res.body.treatment).to.eq(fixAccountContact.treatment)
            expect(res.body.gender).to.eq(fixAccountContact.gender)
            expect(res.body.address).to.eq(fixAccountContact.address)
            expect(res.body.zipCode).to.eq(fixAccountContact.zipCode)
            expect(res.body.number).to.eq(fixAccountContact.number)
            expect(res.body.complement).to.eq(fixAccountContact.complement)
            expect(res.body.complement).to.eq(fixAccountContact.complement)
            expect(res.body.district).to.eq(fixAccountContact.district)
            expect(res.body.cpf).to.eq(fixAccountContact.cpf)
            expect(res.body.rg).to.eq(fixAccountContact.rg)
            expect(res.body.telephone).to.eq(fixAccountContact.telephone)
            expect(res.body.corporatePhone).to.eq(fixAccountContact.corporatePhone)
            expect(res.body.phoneBranch).to.eq(fixAccountContact.phoneBranch)
            expect(res.body.cell).to.eq(fixAccountContact.cell)
            expect(res.body.corporateCellPhone).to.eq(fixAccountContact.corporateCellPhone)
            expect(res.body.mobileWhatsapp).to.eq(fixAccountContact.mobileWhatsapp)
            expect(res.body.operator).to.eq(fixAccountContact.operator)
            expect(res.body.email).to.eq(fixAccountContact.email)
            expect(res.body.corporateEmail).to.eq(fixAccountContact.corporateEmail)
            expect(res.body.receiveCampaign).to.eq(fixAccountContact.receiveCampaign)
            expect(res.body.receiveSearch).to.eq(fixAccountContact.receiveSearch)
            expect(res.body.skype).to.eq(fixAccountContact.skype)
            expect(res.body.twitter).to.eq(fixAccountContact.twitter)
            expect(res.body.facebook).to.eq(fixAccountContact.facebook)
            expect(res.body.birthDate).to.eq(fixAccountContact.birthDate)
            expect(res.body.decisionLevel).to.eq(fixAccountContact.decisionLevel)
            expect(res.body.opinionCompany).to.eq(fixAccountContact.opinionCompany)
            expect(res.body.reasonOpinionCompany).to.eq(fixAccountContact.reasonOpinionCompany)
            expect(res.body.note).to.eq(fixAccountContact.note)
        })
    });

    it('DELETE Account Contact', () => {
        cy.deleteAccountContact(ID_REGISTER).then((res) => {
            expect(res.status).to.eq(204)
        })
    });
});