describe('e-mail Marketing', () => {
    const formFix = require('../../../../fixtures/Frontend/Smoke/email-marketing/form.json');

    before(() => cy.clearCookies())

    beforeEach(() => cy.saveCookies())

    it('Login', () => {
        cy.login_platform();
        cy.screenshot();
    })

    it('Visitar página e-mail marketing', () => {
        cy.intercept('GET', '**/emailMarketing?*').as('getEmailMarketing');

        cy.visit(`${Cypress.config("baseUrlLeafUI")}/gestao-relacionamento/campaign/#/email-marketing`);

        cy.wait('@getEmailMarketing')
            .its('response.statusCode')
            .should('eq', 200);

    });

    context('Cadastrar e-mail Marketing', () => {
        it('Adicionar novo registro', () => {
            cy.get('#add-button')
                .should('have.text', 'Adicionar')
                .click({ force:true });
        });

        context('Preencher dados do formulário', () => {
            it('Preencher campo nome', () => {
                cy.get('#name').type(formFix.name);
            });

            it('Selecionar status da campanha', () => {
                cy.get('p-dropdown')
                    .first()
                    .click();

                cy.get('label[for="status"]')
                    .should('contain', formFix.label.campaignStatus);

                cy.get('.ui-dropdown-items')
                    .should($opt => {
                        expect($opt[0].childElementCount).to.eq(2);
                        expect($opt.first()).to.contain(formFix.campaignStatus.note);
                        expect($opt.last()).to.contain(formFix.campaignStatus.planned);
                    })
                .first()
                .click();
            });

            it('Selecionar Tipo da Campanha', () => {
                cy.intercept('**/campaignType?*').as('getCampaignType');

                cy.get('label[for="campaignType"]')
                    .should('contain', formFix.label.campaignType);

                cy.get('.button-addon').click();

                cy.get('.ui-dialog-title')
                    .should('contain', formFix.label.campaignTypeModal);

                cy.get('.ui-dialog-mask #name')
                    .type('Teste');

                cy.get('#campaignType-filter-button').click();

                cy.wait('@getCampaignType')
                    .its('response.statusCode')
                    .should('eq', 200);

                cy.get('.ui-table-scrollable-body .ui-table-tbody').click();
                cy.get('#campaignType-select-button').click();
            });

            it('Preencher Receita esperada', () => {
                cy.get('label[for="expectedRevenue"]')
                    .should('contain', formFix.label.expectedRevenue);

                    cy.get('#expectedRevenue').type('10000');
                });

            it('Preencher Resposta esperada', () => {
                cy.get('label[for="expectedAnswer"]')
                    .should('contain', formFix.label.expectedAnswer);

                cy.get('#expectedAnswer').type('15000');
            });

            it('Preencher Custo estimado', () => {
                cy.get('label[for="estimatedCost"]')
                    .should('contain', formFix.label.estimatedCost);

                cy.get('#estimatedCost').type('50000');
            });

            it('Preencher Custo real', () => {
                cy.get('label[for="realCost"]')
                    .should('contain', formFix.label.realCost);

                cy.get('#realCost').type('60000');
            });

            it('Preencher Data/hora de agendamento', () => {
                let timeElapsed = Date.now();
                let date = new Date(timeElapsed);

                date.setMinutes(date.getMinutes() + 5);

                var dateNow = date.toLocaleDateString('pt-BR', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit'
                });
                var hourNow = date.toLocaleTimeString('pt-BR', { hour12: false });

                cy.get('label[for="scheduling"]')
                    .should('contain', formFix.label.scheduling);

                cy.get('#scheduling').type(`${dateNow}${hourNow}`);
                cy.get('.ui-calendar-button').click();
            });

            it('Preencher Tipo de público alvo', () => {
                cy.get('p-dropdown').eq(1).click();

                cy.get('label[for="targetAudienceType"]')
                .should('contain', formFix.label.targetAudienceType);

                cy.get('.ui-dropdown-items')
                    .should($opt => {
                        expect($opt[0].childElementCount).to.eq(3);
                        expect($opt).to.contain(formFix.options.targetAudienceType.accountAndContacts);
                        expect($opt).to.contain(formFix.options.targetAudienceType.onlyMainAccountEmail);
                        expect($opt).to.contain(formFix.options.targetAudienceType.onlyContactsOfAccount);
                    }).eq(0).click();
            });

            it('Preencher Observação', () => {
                cy.get('label[for="note"]')
                    .should('contain', formFix.label.note);

                cy.get('#note').type('Obs');
            });
        });

        context('Contas Selecionadas', () => {
            it('Validar se nenhuma conta está selecionada', () => {
                cy.get('.no-data-container')
                    .should('contain', formFix.account.title);

                cy.get('.no-data-container')
                    .should('contain', formFix.account.description);
            });

            it('Adicionar/Filtrar Contas', () => {
                cy.intercept('GET', '**/companySize').as('getCompanySize');
                cy.intercept('GET', '**/opportunityParameters').as('getOpportunityParameters');
                cy.intercept('GET', '**/account*').as('getAccount');
                cy.intercept('GET', '**/ratings').as('getRatings')

                cy.get('.ui-panel-content .s-button-priority-primary')
                    .first()
                    .should('contain', formFix.account.addAccount)
                    .click();

                cy.get('.ui-dialog-title')
                    .should('have.text', formFix.label.filterTitle);

                cy.wait('@getCompanySize')
                    .its('response.statusCode')
                    .should('eq', 200);

                cy.get('.menu-container')
                    .find('.side-option')
                    .should('have.length', 10);

                cy.wait('@getOpportunityParameters')
                    .its('response.statusCode')
                    .should('eq', 200);

                cy.get('#undefined-select-button').click({ force: true });

                cy.wait('@getAccount')
                    .its('response.statusCode')
                    .should('eq', 200);

                cy.wait('@getRatings')
                    .its('response.statusCode')
                    .should('eq', 200);

                cy.wait(1000)

                cy.get('.ui-chkbox-box')
                    .should('have.attr', 'aria-checked', 'true');

                cy.get('button#undefined-add-button').click();

                cy.wait('@getAccount')
                    .its('response.statusCode')
                    .should('eq', 200);
            });
        })

        context('Corpo do e-mail marketing', () => {
            it('Selecionar Opção de resposta', () => {
                cy.intercept('GET', '**/account*').as('getAccount');

                cy.wait(5000);

                cy.get('label[for="senderOption"]')
                    .should('contain', formFix.emailBody.senderOption);

                cy.wait('@getAccount')
                    .its('response.statusCode')
                    .should('eq', 200);

                cy.get('p-dropdown')
                    .eq(3)
                    .click();

                cy.get('.ui-dropdown-items')
                    .should($opt => {
                        expect($opt[0].childElementCount).to.eq(3);
                        expect($opt).to.contain(formFix.options.senderOptions.smtp);
                        expect($opt).to.contain(formFix.options.senderOptions.accountResponsable);
                        expect($opt).to.contain(formFix.options.senderOptions.manual);
                }).eq(0).click();
            });

            it('Preencher Assunto', () => {
                cy.get('label[for="subject"]')
                    .should('contain', 'Assunto');

                cy.get('#subject').type(formFix.emailBody.subject);
            });

            it('Selecionar Tipo da mensagem', () => {
                cy.get('label[for="messageType"]')
                    .should('contain', formFix.emailBody.messageType);

                cy.get('p-dropdown')
                    .eq(4)
                    .click({ timeout: 2000 });

                cy.get('.ui-dropdown-items')
                    .should($opt => {
                        expect($opt[0].childElementCount).to.eq(3);
                        expect($opt).to.contain(formFix.options.messageType.textMessage);
                        expect($opt).to.contain(formFix.options.messageType.html);
                        expect($opt).to.contain(formFix.options.messageType.templateMessage);
                });

                cy.get('[aria-label="Mensagem do tipo Template"]')
                    .click();

                cy.get('div .ui-dropdown-trigger').eq(3).click();
            });

            it('Selecionar Template', () => {
                cy.intercept('GET', '**/templateEmailMarketing*').as('getTemplate')

                cy.get('label[for="template"]')
                    .should('contain', formFix.label.template);

                cy.get('.button-addon')
                    .last()
                    .click();

                    cy.wait(1000)

                cy.get('.ui-dialog-title')
                    .should('have.text', formFix.template.modalTitle);

                cy.get('.ui-dialog-mask #name')
                    .type(formFix.template.templateName);

                cy.get('#template-filter-button').click();

                cy.wait('@getTemplate')
                    .its('response.statusCode')
                    .should('eq', 200);

                cy.get('td .ng-star-inserted')
                    .last()
                    .click({ force: true });

                cy.get('#template-select-button')
                    .click();

                cy.wait('@getTemplate')
                    .its('response.statusCode')
                    .should('eq', 200);
            });

            it('Enviar e-mail de teste', () => {
                cy.intercept('POST', '**/emailTest').as('postEmailTest')

                cy.get('#send-mail-test-button span')
                    .should('have.text', formFix.label.mailTestButton)
                    .click();

                cy.get('.ui-confirmdialog-message')
                    .should('have.text', formFix.sendMailTestModal);

                cy.get('.ui-confirmdialog button')
                    .contains(formFix.label.mailTestButtonContinue)
                    .click({ timeout: 1000 });

                cy.wait('@postEmailTest')
                    .its('response.statusCode')
                    .should('eq', 200);
            });
        });

        context('Anexos', () => {
            it('Verificar mensagem do painel de anexo quando vazio', () => {
                cy.get('#ui-panel-5')
                    .should('contain', formFix.label.panelAttachment);
            });
        });

        context('Salvar registro e-mail marketing', () => {
            it('Clicar em Salvar Registro', () => {
                cy.intercept('POST', '**/manageEmailMarketing').as('postActionManageEmailMarketing')

                cy.get('#save-button-footer').click();

                cy.wait('@postActionManageEmailMarketing')
                    .its('response.statusCode')
                    .should('eq', 200);
            });
        });
    });

    context('Consultar registro cadastrado e excluir', () => {
        it('Verificar status e atualização do registro no painel', () => {
            cy.get('#ui-panel-8')
                .should('contain', formFix.campaignStatus.preparing);

            cy.wait(5000)

            cy.get('.ui-paginator-page').click()

            cy.get('#ui-panel-8')
                .should('contain', formFix.campaignStatus.planned);
        });

        // it('Filtrar Registro cadastrado', () => {
        //     cy.get('#ui-panel-7 #ui-panel-0-label pi').click();

        //     cy.get('p-dropdown')
        //         .first()
        //         .click();

        //     cy.get('label[for="status"]')
        //         .should('contain', formFix.label.campaignStatus);

        //     cy.get('.ui-dropdown-items')
        //         .contains(formFix.campaignStatus.planned)
        //         .click();

        //     cy.get('#filter-button').click();
        // });

        it('Excluir registros da lista', () => {
            cy.get('.ui-chkbox-box').first().click();
            cy.get('#delete-button').click();
            cy.get('.ui-confirmdialog-acceptbutton').click();
        });
    });
});