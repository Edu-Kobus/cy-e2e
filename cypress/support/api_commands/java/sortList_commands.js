Cypress.Commands.add('sortList', (res, fixture) => {
    let sortList = Cypress._.reverse(res.body.contents)
    let id = sortList[0].id

    fixture.id = id

    return id
});

Cypress.Commands.add('sortReverse', (res) => {
    let sortList = Cypress._.reverse(res.body)
    let id = sortList[0].id

    return id
});

Cypress.Commands.add('sortDataReverse', (res) => {
    let sortList = Cypress._.reverse(res.body.data)
    let id = sortList[0].id

    return id
});