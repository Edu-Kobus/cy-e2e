describe('Marketing Intelligence v2', () => {

const data = require('../../../../fixtures/Frontend/marketing_intelligence/data_mkt.json')
const filtro = data.filtro

    before(() => {
        cy.clearCookie('com.token')
          .clearCookie('com.pau.token')
    })

    beforeEach(() => cy.saveCookies())

    it('Login', () => {
        cy.login_platform()
    })

    it('Acessar página', () => {
        cy.visit_page_mkt_int('/marketing-intelligence/marketing-intelligence/#/marketing-intelligence')
    })

    context('Consulta Marketing Intelligence', () => {
        it('Preencher Filtros', () => {
            cy.interceptSubsegmentCnaeCache()
            cy.interceptCnaeMainCache()

            cy.hide_instructions()

            cy.type_razao_social(filtro.nome)
            cy.type_cnpj(filtro.cnpj)

            cy.select_seg_atividade(filtro.seg_atividade)
            cy.waitSubsegmentCnaeCache()

            cy.select_sub_segmento(filtro.sub_seg_atividade)

            cy.type_cnae_principal(filtro.cnae_principal)

            cy.select_natureza_juridica(filtro.nat_juridica)
            cy.check_class_nat_juridica(filtro.classe_nat_juridica)

            cy.select_capital_social(filtro.cap_social)
            cy.type_valor(filtro.valor)

            cy.select_porte_empresa(filtro.porte_empresa)

            cy.select_data_inicio(filtro.data_abertura_inicio)
            cy.select_data_fim()

            cy.percySnapshot(('Step - Preencher Filtros', { widths: [1920, 1080] }))
        })

        it('Filtragem por Região', () => {
            cy.interceptListCompanies()
            cy.interceptLogListConsult()

            cy.select_estado(filtro.estado)
            cy.select_cidade(filtro.cidade)

            cy.type_bairro(filtro.bairro)
            cy.type_endereco(filtro.endereco)

            cy.view_page()
            cy.load_page()
            cy.list_visible()

            cy.get('.desktop-tr .ui-chkbox-box')
                .click()
                .find('span')
                .should('to.have.class', 'pi-check')

            cy.export_detail(filtro.label_export_singular)

            cy.retrieve_account(filtro.message_no_account)
            cy.add_account(filtro.message_content)
            cy.close_export_detail()

            cy.percySnapshot(('Step - Filtragem por Região', { widths: [1920, 1080] }))

            cy.clear_filter()
        });

        it('Filtragem por Faixa de CEP', () => {
            cy.interceptListCompanies()
            cy.interceptLogListConsult()

            cy.fill_zip_range(filtro.zip_start, filtro.zip_end)

            cy.view_page()
            cy.load_page()
            cy.list_visible()

            cy.last_paginated()
            cy.waitListCompanies()
            
            cy.check_all()

            cy.export_detail(filtro.label_export_plural)
            cy.close_export_detail()

            cy.percySnapshot(('Step - Filtragem por Faixa de CEP', { widths: [1920, 1080] }))

            cy.clear_filter()
        });

        it('Filtragem por CEP único', () => {
            cy.interceptListCompanies()
            cy.interceptLogListConsult()

            cy.fill_zip_single(filtro.zip_single)

            cy.view_page()
            cy.load_page()
            cy.list_visible()

            cy.verify_status_exist()

            cy.check_all()
            cy.verify_check_disable()

            cy.export_detail(filtro.label_export_plural)
            cy.close_export_detail()

            cy.percySnapshot(('Step - Filtragem por CEP único', { widths: [1920, 1080] }))
        });
        
        it('Visualizar no Mapa', () => {
            cy.interceptListCompanies()
            cy.intercept_maps()

            cy.view_maps()
            cy.waitListCompanies()

            cy.maps_visible()
            cy.wait_maps()

            cy.get('div[role="button"]')
                .last()
                .find('img')
                .click({ force:true })

            cy.percySnapshot(('Step - Visualizar Mapa', { widths: [1920, 1080] }))
        });
        
        it('Limpar Campos do Filtro', () => {
            cy.clear_filter()
        });
    })
})