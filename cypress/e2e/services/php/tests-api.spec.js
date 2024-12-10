describe('Testes API', ()=> {
    context('Cadastros', () => {
        require('../php/Cadastros/transportadora.spec')
        require('../php/Cadastros/tabelaDePreco.spec')
        require('../php/Cadastros/unidadeDeMedida.spec')
        require('../php/Cadastros/categoriaDeServico.spec')
        require('../php/Cadastros/categoriaDeProduto.spec')
        require('../php/Cadastros/taskCategories.spec')
        require('../php/Cadastros/taskStepCategories.spec')
        require('../php/Cadastros/origemContato.spec')
        require('../php/Cadastros/funcoes.spec')
        require('../php/Cadastros/departamentos.spec')
        require('../php/Cadastros/ramoDeAtividade.spec')
        // require('../php/Cadastros/empresaFilial.spec')
        require('../php/Cadastros/gruposDeEmpresa.spec')
        require('../php/Cadastros/gruposDeEmpresa.spec')
        require('../php/Cadastros/porteDeEmpresa.spec')
        require('../php/Cadastros/statusOcorrencia.spec')
        require('../php/Cadastros/origemOcorrencia.spec')
        require('../php/Cadastros/characteristics.spec')
        // require('../php/Cadastros/characteristicsHierarchy.spec')
    })

    context('Contas', () => {
        require('./Contas/account.spec')

        context('Definição da Conta', () => {
            require('./Contas/Definicao/accountDefinition.spec')
        })

        context('Endereço da Conta', () => {
            require('./Contas/Endereco/accountAddress.spec')
        })

        context('Contatos da Conta', () => {
            require('./Contas/Contatos/contacts.spec')
        })

        context('Telefones da Conta', () => {
            require('./Contas/Telefones/accountPhones.spec')
        })
    })

    context('Contas v2', () => {
        require('./Contas/account-v2.spec')
    })

    context('Colaborativo', () => {
        context('Compromissos', () => {
            require('./Colaborativo/Compromissos/appointment.spec')
        })

        context('Eventos', () => {
            require('./Colaborativo/Eventos/event.spec')
        })

        context('Tarefas', () => {
            require('./Colaborativo/Tarefas/tasks.spec')
        })
    })

    context('Oportunidades', () => {
        require('./Oportunidades/opportunities.spec')
    })

    context('Sistema', () => {
        require('./Sistema/company.spec')
        require('./Sistema/company-branch.spec')
    })
})