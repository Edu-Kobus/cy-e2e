Cypress (e2e)
=========

Instalação com [Cypress](https://www.cypress.io/)
--------

### Pré-requisitos:
Cypress requer [Node.js](https://nodejs.org/en) para ser instalado:
* Node.js 18.x
* Node.js 20.x ou superior

##### Linux (Ubuntu/Debian):
Se estiver usando linux necessário instalar as seguintes dependências:
~~~CLI
apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth xvfb
~~~
Caso esteja utilizando outra versão consulte a doc official para mais informações em [_Installing Cypress_](https://docs.cypress.io/guides/getting-started/installing-cypress)

### Comandos
* Para instalar o cypress: `npm i cypress` ou `npm i cypress@latest` para instalar última versão disponível.
* Para executar o Cypress em GUI: `npm run cy:open`
* Para executar o cypress em modo _headless_: `npm run cy:run`
