/* global Given, Then, When, And */

import LoginPage from '../pageObject/loginPage'
import HomePage from '../pageObject/homePage'
const loginPage = new LoginPage
const homePage = new HomePage


And("Acesse listao e selecionar 3o bimestre", () => {
    homePage.NavegarListao();
    homePage.SelecionarLista();
    
})

When("for apresentado a turma e clicar em frequencia", () => {
    homePage.ApresentarTurma();
    homePage.SelecionarFrequencia();
})


When("realizar a troca de perfil", () => {
    homePage.trocarPerfil()
    
})

Then("devera trocar o perfil", () => {
    homePage.validarPerfil()
    
})