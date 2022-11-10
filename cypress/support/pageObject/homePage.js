//<reference types="Cypress" />

import HomeElements from '../Elements/homeElement'
const homeElements = new HomeElements

class HomePage {

    NavegarListao(){
        cy.contains(homeElements.inicioHome())
        cy.contains(homeElements.diarioHome()).click()
        cy.get(homeElements.listaoHome()).should('be.visible').click()
        
    }

    trocarPerfil(){ 
        cy.wait(3000) 
        cy.contains(homeElements.perfilHome()).should('be.visible').click()
        cy.contains(homeElements.selecionarPerfil()).should('be.visible').click()

    }

    validarPerfil(){  
        cy.contains(homeElements.selecionarPerfil()).should('be.visible')
    }


    SelecionarLista(){
        cy.wait(1000)
        cy.get(homeElements.bimestreHome()).should('be.visible').click()
        cy.get(homeElements.listabHome()).should('be.visible').click()
        
    }

    SelecionarFrequencia(){
        cy.wait(1000)
        cy.get(homeElements.frequenciaHome()).should('be.visible').click()
        
    }

    ApresentarTurma(){
        cy.contains(homeElements.turmaHome()).should('be.visible')
        
    }

    logoutOperacao(){
        cy.get(homeElements.logoutHome()).should('be.visible').click()
    }
    
    
  
}

export default HomePage;