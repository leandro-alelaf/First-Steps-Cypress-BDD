describe('Testes de Login', () => {
  it('Deve fazer login com um usuário válido', () => {
    cy.visit ('http://localhost:3000/login')
    cy.get('#username').type('leandroqa2')
    cy.get('#password').type('leandroqa123')
    cy.get('[data-test="signin-submit"]').click()
    cy.get('[data-test="user-onboarding-dialog-title"]').contains('Get Started with Real World App')
    cy.get('[data-test="user-onboarding-next"]').click()
  })
  it('Deve fazer login com um usuário inválido', () => {
    cy.visit ('http://localhost:3000/login')
    cy.get('#username').type('leandroqa')
    cy.get('#password').type('123456')
    cy.get('[data-test="signin-submit"]').click()
    cy.get('.MuiAlert-message').contains('Username or password is invalid')
  });
  describe('Registro de novo usuário', () => {
  it('Deve registrar um novo usuário com informações válidas', () => {
    cy.visit ('http://localhost:3000/signup')
    cy.get('#firstName').type('Leandro')
    cy.get('#lastName').type('Rocha')
    cy.get('#username').type('leandroqa2')
    cy.get('#password').type('leandroqa123')
    cy.get('#confirmPassword').type('leandroqa123')
    cy.get('[data-test="signup-submit"]').click()
  });
  describe('Tentar registrar um novo usuário com informações incompletas', () => {
  it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
   cy.visit ('http://localhost:3000/signup')
   cy.get('#username').type('leandroqa2')
   cy.get('#password').type('leandroqa123')
   cy.get('#confirmPassword').type('leandroqa123')
   cy.get('#firstName-helper-text').contains('First Name is required');
  });
});
});
});

//done