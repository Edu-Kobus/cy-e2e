Cypress.Commands.add('typeDescription', (description) => {
    cy.get('#descricao')
        .clear()
        .type(description)
        .should('have.value', description)
});

Cypress.Commands.add('newRegisterMd',  () => {
    cy.get('.portlet-body #novoRegistro').last().click()
});

Cypress.Commands.add('submitMd',  () => {
    cy.get('#step-container #submit')
});

Cypress.Commands.add('clickButtonAction',  () => {
    cy.get('.odd .btn').click({ force:true })
});

Cypress.Commands.add('clickButtonDelete',  () => {
    cy.get('a[acao="Remover"]')
        .last()
        .invoke('show')
        .click({ force:true })
});

Cypress.Commands.add('clickConfirmDelete',  () => {
    cy.get('button[data-bb-handler="confirm"]').click()
});

Cypress.Commands.add('typeImgUpload', (url) => {
    cy.get('#div_destino input')
        .type(url, { delay:0 })
        .should('have.value', `${url}`)
});

Cypress.Commands.add('validateFieldsForm',  () => {
    cy.get('.form-body .input input').should((inputForm) => {
        expect(inputForm).to.be.not.null
        expect(inputForm).to.be.not.undefined
    })

    cy.get('.form-body .ui-select-container').should((selectForm) => {
        expect(selectForm).to.be.not.null
        expect(selectForm).to.be.not.undefined
    })
});

Cypress.Commands.add('validateFieldsDocument',  (titleDoc, nrDoc, review, save, typeDoc) => {
    cy.get('.grid-body .odd').should((input) => {
        expect(input).to.contain(titleDoc)
        expect(input).to.contain(nrDoc)
        expect(input).to.contain(review)
        expect(input).to.contain(save)
        expect(input).to.contain(typeDoc)
        expect(input).to.be.not.null
    })
});

Cypress.Commands.add('validateFieldsAttendees', (user, func) => {
    cy.get('.grid-body .odd').should((input) => {
        expect(input).to.contain(user)
        expect(input).to.contain(func)
    })
});

Cypress.Commands.add('validateFieldsActions', () => {
    cy.get('.grid-body .odd tr').should((input) => {
        expect(input).to.be.not.null
        expect(input).to.be.not.undefined
    })
});
