//<reference types="Cypress" />

import OperacaoElements from '../Elements/operacaoElement'
const operacaoElements = new OperacaoElements

class OperacaoPage {

    informaPeriodo(){
        cy.wait(1000)
        cy.get(operacaoElements.periodoOperacao()).should('be.visible').click()
        cy.get(operacaoElements.selecionadoOperacao()).click()
    }

    checaNome(){
        cy.contains(operacaoElements.nomeOperacao()).should('be.visible')

    }

}

export default OperacaoPage;