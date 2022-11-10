/* global Given, Then, When, And */

import HomePage from '../pageObject/homePage';
import OperacaoPage from '../pageObject/operacaoPage'
const homePage = new HomePage
const operacaoPage = new OperacaoPage


And("selecionar período", () => {
   operacaoPage.informaPeriodo();
})

Then("deverar apresentar aluna", () => {
    operacaoPage.checaNome();
    homePage.logoutOperacao();
})

