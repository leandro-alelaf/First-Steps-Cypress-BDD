describe('Testes de Login', () => {
    it('Deve fazer login com um usuário válido', () => {
        cy.visit ('http://https://seubarriga.wcaquino.me/login')
        cy.get([name='email']).type('leandroqa@gmail.com')
        cy.get([name='senha']).type('senha123')

})
     })