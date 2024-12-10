/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
    if(config.hasOwnProperty('env') &&  config.env.hasOwnProperty('baseUrl')){
        config.baseUrl = config.env.baseUrl;
    }
    return config
}

// const mysql = require("mysql");
// function queryTestDb(query, config) {
//   // creates a new mysql connection using credentials from cypress.json env's
//   const connection = mysql.createConnection(config.env.db);
//   // start connection to db
//   connection.connect();
//   // exec query + disconnect to db as a Promise
//   return new Promise((resolve, reject) => {
//     connection.query(query, (error, results) => {
//       if (error) reject(error);
//       else {
//         connection.end();
//         // console.log(results)
//         return resolve(results);
//       }
//     });
//   });
// }

//task for connection database
module.exports = (on, config) => {
  // Usage: cy.task('queryDb', query)
  on("task", {
    queryDb: query => {
      return queryTestDb(query, config);
    }
  });
};
