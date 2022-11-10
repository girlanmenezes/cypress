//<reference types="Cypress" />

import LoginElements from '../Elements/loginElement'
const loginElements = new LoginElements
const url = Cypress.config("baseUrl")

class LoginPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    preencherUsuarioSenha(){
        cy.get(loginElements.usuarioLogin()).type("7410051")
        cy.get(loginElements.senhaLogin()).type("Sgp@1234")
    }

    // Clica no botão que acessa a página de login do site
    clicarBotaoPaginaLogin() {
        cy.contains(loginElements.botaoLogin()).click()
    }
  
}

export default LoginPage;