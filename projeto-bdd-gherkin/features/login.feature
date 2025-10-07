Feature: login

  Scenario: Login com sucesso
    Given o usuário acessa a página de login
    When ele insere um email válido e uma senha válida
    And clica no botão de login
    Then ele deve ser redirecionado para a página inicial

  Scenario: Login com falha
    Given o usuário acessa a página de login
    When ele insere um email inválido ou uma senha inválida
    And clica no botão de login
    Then ele deve ver uma mensagem de erro indicando que o login falhou

  Scenario: Esqueci minha senha
    Given o usuário acessa a página de login
    When ele clica no link "Esqueci minha senha"
    And insere seu email registrado
    And clica no botão para enviar o link de recuperação
    Then ele deve ver uma mensagem indicando que um email de recuperação foi enviado 
    And ele deve receber um email com instruções para redefinir sua senha


