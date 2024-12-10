Cypress (e2e)
=========

Installation with [Cypress](https://www.cypress.io/)
--------

### Prerequisites:
Cypress requires [Node.js](https://nodejs.org/en) to be installed:
* Node.js 18.x
* Node.js 20.x or higher

##### Linux (Ubuntu/Debian):
If you are using Linux, you need to install the following dependencies:
~~~CLI
apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth xvfb
~~~
If you are using another version, please consult the official documentation for more information at [_Installing Cypress_](https://docs.cypress.io/guides/getting-started/installing-cypress)

### Commands
* To install Cypress: `npm i cypress` or `npm i cypress@latest` to install the latest available version.
* To run Cypress in GUI mode: `npm run cy:open`
* To run Cypress in headless mode: `npm run cy:run`
