//*** PLUGINS ***/
// import '@percy/cypress';
import '../plugins/console_table_commands'
import '../plugins/event_platform_commands'
import '../plugins/preserve_storage_commands'
import 'cypress-plugin-api'
import './db_commands'
import '@shelex/cypress-allure-plugin'

//*** LOGIN ***//
import './gui_commands/login_commands/login_x_commands'
import './gui_commands/login_commands/login_platform_commands'

//*** CRUD ***//
import './gui_commands/crud_commands/crud_form_commands'
import './gui_commands/crud_commands/Cadastros/endereco_commands'
import './gui_commands/crud_commands/Cadastros/cidades_commands'
import './gui_commands/crud_commands/Cadastros/caracteristicas_commands'
import './gui_commands/crud_commands/Cadastros/concorrentes_commands'
import './gui_commands/crud_commands/Cadastros/feriados_commands'
import './gui_commands/crud_commands/Cadastros/produtos_commands'
import './gui_commands/crud_commands/Cadastros/tipos-oportunidades_commands'
import './gui_commands/crud_commands/Contas/consultar_contas_commands'
import './gui_commands/crud_commands/Colaborativo/consultar-compromissos_commands'
import './gui_commands/crud_commands/Agro/culturas_commands'
import './gui_commands/crud_commands/Agro/culturas_commands'
import './gui_commands/crud_commands/Colaborativo/consultar_eventos_commands'

//*** Smoke ***//
import './gui_commands/smoke_commands/marketing_intelligence/access_page_commands'
import './gui_commands/smoke_commands/marketing_intelligence/filter_by_cep_commands'
import './gui_commands/smoke_commands/marketing_intelligence/filter_by_data_commands'
import './gui_commands/smoke_commands/marketing_intelligence/filter_by_range_cep_commands'
import './gui_commands/smoke_commands/marketing_intelligence/filter_by_region_commands'
import './gui_commands/smoke_commands/marketing_intelligence/view_detail_export_commands'
import './gui_commands/smoke_commands/marketing_intelligence/view_list_commands'
import './gui_commands/smoke_commands/marketing_intelligence/view_maps_commands'

import './gui_commands/crud_commands/Colaborativo/consultar_tarefas_commands'

//*** API ***//
import './api_commands/login_api_commands'
import './api_commands/java/sortList_commands'

// --- PHP --- //
import './api_commands/php/Empacotamento/sale_commands'

import './api_commands/php/Oportunidades/opportunities_commands'

import './api_commands/php/Contas/account_commands'
import './api_commands/php/Contas/Contato/contacts_commands'
import './api_commands/php/Contas/Definicao/accountDefinition_commands'
import './api_commands/php/Contas/Endereco/accountAddress_commands'
import './api_commands/php/Contas/Telefone/accountPhones_commands'
import './api_commands/php/Contas/account-v2_commands'

import './api_commands/php/Colaborativo/Compromissos/appointment_commands'
import './api_commands/php/Colaborativo/Eventos/event_commands'
import './api_commands/php/Colaborativo/Tarefas/tasks_commands'

import './api_commands/php/Sistema/company_commands'
import './api_commands/php/Sistema/company-branch_commands'

import './api_commands/php/Cadastros/transportadora_commands'
import './api_commands/php/Cadastros/tabelaDePreco_commands'
import './api_commands/php/Cadastros/unidadeDeMedida_commands'
import './api_commands/php/Cadastros/categoriaDeServico_commands'
import './api_commands/php/Cadastros/categoriaDeProduto_commands'
import './api_commands/php/Cadastros/origemContato_commands'
import './api_commands/php/Cadastros/funcoes_commands'
import './api_commands/php/Cadastros/departamentos_commands'
import './api_commands/php/Cadastros/ramoDeAtividade_commands'
import './api_commands/php/Cadastros/empresaFilial_commands'
import './api_commands/php/Cadastros/gruposDeEmpresa_commands'
import './api_commands/php/Cadastros/porteDeEmpresa_commands'
import './api_commands/php/Cadastros/statusOcorrencia_commands'
import './api_commands/php/Cadastros/origemOcorrencia_commands'
import './api_commands/php/Cadastros/taskStepCategories_commands'
import './api_commands/php/Cadastros/taskCategories_commands'
import './api_commands/php/Cadastros/characteristics_commands'
import './api_commands/php/Cadastros/characteristicsHierarchy_commands'

// --- JAVA --- //
import './api_commands/java/opportunity/entities/opportunity_commands'
import './api_commands/java/opportunity/entities/opportunityProposal_commands'
import './api_commands/java/opportunity/entities/opportunityProduct_commands'
import './api_commands/java/opportunity/entities/opportunityService_commands'
import './api_commands/java/opportunity/entities/opportunityAction_commands'

import './api_commands/java/datalake-backend/queries/executeDatasetPaginated_commands'

import './api_commands/java/collaborative/entities/appointment_commands'
import './api_commands/java/collaborative/entities/event_commands'

import './api_commands/java/backend-account/queries/queryAccount_commands'
import './api_commands/java/backend-account/entities/entityAccount_commands'
import './api_commands/java/backend-account/entities/accountDefinition_commands'
import './api_commands/java/backend-account/entities/accountCharacteristics_commands'
import './api_commands/java/backend-account/entities/accountPhone_commands'
import './api_commands/java/backend-account/entities/accountContact_commands'
import './api_commands/java/backend-account/entities/accountRelationships_commands'
import './api_commands/java/backend-account/entities/accountResponsible_commands'
import './api_commands/java/backend-account/entities/accountInterestAreas_commands'
import './api_commands/java/backend-account/entities/accountIdentifications_commands'
import './api_commands/java/backend-account/entities/accountHistoryIntegration_commands'
import './api_commands/java/backend-account/entities/accountAddress_commands'

import './api_commands/java/basic-records/entities/eventTypes_commands'
import './api_commands/java/basic-records/entities/eventsStatus_commands'
import './api_commands/java/basic-records/entities/followType_commands'
import './api_commands/java/basic-records/entities/interestAreas_commands'
import './api_commands/java/basic-records/entities/locations_commands'
import './api_commands/java/basic-records/entities/inactivationReason_commands'
import './api_commands/java/basic-records/entities/lossReasons_commands'
import './api_commands/java/basic-records/entities/opportunityOrigins_commands'
import './api_commands/java/basic-records/entities/opportunityType_commands'
import './api_commands/java/basic-records/entities/product_commands'
import './api_commands/java/basic-records/entities/productCategories_commands'
import './api_commands/java/basic-records/entities/paymentTerms_commands'
import './api_commands/java/basic-records/entities/paymentType_commands'
import './api_commands/java/basic-records/entities/accountType_commands'
import './api_commands/java/basic-records/entities/accountOrigins_commands'
import './api_commands/java/basic-records/entities/accountStatus_commands'
import './api_commands/java/basic-records/entities/ratings_commands'
import './api_commands/java/basic-records/entities/deposit_commands'
import './api_commands/java/basic-records/entities/regions_commands'
import './api_commands/java/basic-records/entities/relationshipTypes_commands'
import './api_commands/java/basic-records/entities/salesReasons_commands'
import './api_commands/java/basic-records/entities/serviceCategories_commands'
import './api_commands/java/basic-records/entities/service_commands'
import './api_commands/java/basic-records/entities/measurementUnit_commands'
import './api_commands/java/basic-records/entities/userGroups_commands'
import './api_commands/java/basic-records/entities/companyBranch_commands'
import './api_commands/java/basic-records/entities/companyGroups_commands'
import './api_commands/java/basic-records/entities/cities_commands'
import './api_commands/java/basic-records/entities/company_commands'
import './api_commands/java/basic-records/entities/companySize_commands'
import './api_commands/java/basic-records/entities/branch_commands'
import './api_commands/java/basic-records/entities/priceTable_commands'
import './api_commands/java/basic-records/entities/carrier_commands'
import './api_commands/java/basic-records/entities/countries_commands'
import './api_commands/java/basic-records/entities/appointmentCategories_commands'
import './api_commands/java/basic-records/entities/user_commands'
import './api_commands/java/basic-records/entities/activityBranches_commands'
import './api_commands/java/basic-records/entities/states_commands'
import './api_commands/java/basic-records/entities/addressTypes_commands'
import './api_commands/java/basic-records/entities/businessTypes_commands'
import './api_commands/java/basic-records/entities/department_commands'
import './api_commands/java/basic-records/entities/function_commands'
import './api_commands/java/basic-records/entities/contactOrigin_commands'
import './api_commands/java/basic-records/entities/occurrenceSubtype_commands'
import './api_commands/java/basic-records/entities/occurrenceType_commands'
import './api_commands/java/basic-records/entities/personType_commands'
import './api_commands/java/basic-records/entities/occurrenceStatus_commands'
import './api_commands/java/basic-records/entities/occurrenceOrigin_commands'

import './api_commands/java/campaign/entities/campaignType_commands'
import './api_commands/java/campaign/entities/cancellationReason_commands'

import './api_commands/java/basic-records/queries/healthCheck_commands'

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})