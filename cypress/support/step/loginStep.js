/* global Given, Then, When, And */

import LoginPage from '../pageObject/loginPage'
const loginPage = new LoginPage

Given("que realize login", () => {
    loginPage.acessarSite();
    loginPage.preencherUsuarioSenha()
    loginPage.clicarBotaoPaginaLogin()
})
