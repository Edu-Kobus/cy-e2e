//Guardar Cookies da Platform
Cypress.Commands.add('saveCookies', () => {
    const cookiesToPreserve = [
      'com.token',
      'com.services.url',
      'com.portal.url',
      'com.pau.userdata',
      'com.pau.token',
      'com.pau.soap.url',
      'com.pau.services.url',
      'com.pau.odata.url',
      'com.pau.domain',
      'com.domain',
      'com.base.url',
      '_gid',
      '_gat_gtag_UA_150752658_1',
      '_gat',
      '_ga',
      'TS015ca226'
    ];

    cy.getCookies().then(cookies => {
      cookies.forEach(cookie => {
        const shouldPreserve = cookiesToPreserve.includes(cookie.name);
        shouldPreserve ? cy.setCookie(cookie.name, cookie.value, cookie) : cy.clearCookie(cookie.name, cookie);
      });
    });
  });

//Preserve LocalStorage
let LOCAL_STORAGE_MEMORY = {};

Cypress.Commands.add("saveLocalStorageCache", () => {
    Object.keys(localStorage).forEach(key => {
        LOCAL_STORAGE_MEMORY[key] = localStorage[key];
    });
});

Cypress.Commands.add("restoreLocalStorageCache", () => {
    Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
        localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
    });
});

beforeEach(() => {
    cy.restoreLocalStorageCache();
});

afterEach(() => {
    cy.saveLocalStorageCache();
});