/// <reference types= 'Cypress'/>

describe('Teste funcional de login', () => {
    it('O sistema deverá realizar o login com sucesso', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('.title').should('contain', 'Products')
    })
});
