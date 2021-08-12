/// <reference types="cypress" />

const ambiente = Cypress.config("baseUrl")

import PreencherCamposElements from '../elements/elementsSmiles'

const PreencherCampo = new PreencherCamposElements

class SmilesCampos {

abrirBrowser() {
    cy.visit(ambiente)
}

PreencherCampoViagem() {
    cy.get(PreencherCampo.partida()).type("gru")

    cy.contains(PreencherCampo.partidaName()).click()

    cy.get(PreencherCampo.destino()).type("rio")

    cy.contains(PreencherCampo.destinoName()).click()
} 

PreencherCampoData() {
        const dataAtual = new Date()
        const mesDePartida = dataAtual.getMonth();
        const dataDePartida = dataAtual.getDate() + 10
        const mesDeChegada = dataAtual.getMonth();
        const dataDeChagada = dataAtual.getDate();
        dataAtual.setDate(dataDePartida + 30);

        cy.get(PreencherCampo.calendario()).click()

        cy.get(PreencherCampo.dataIda()).contains(dataDePartida).click({force: true})
        for (let i = 1; i <= mesDeChegada - mesDePartida; i++) {
            cy.get(PreencherCampo.voltaProximoMes()).click({force: true})
        }
        cy.get(PreencherCampo.dataVolta()).contains(dataDeChagada).click({force: true})

        cy.get(PreencherCampo.confirmacaoData()).click({force: true})

        cy.get(PreencherCampo.buscarVoou()).click()

        cy.screenshot()

    }

selecaoDePassagem () {

    cy.get(PreencherCampo.passagemIda()).click({force: true})
    cy.get(PreencherCampo.passagemVolta()).click({force: true})

 }
 


validacao() {
    cy.get(PreencherCampo.condicoes()).click()
    cy.get(PreencherCampo.btnContinuar()).click()
    cy.get(PreencherCampo.login()).should('contain', 'Acesse sua conta')

    cy.get(PreencherCampo.campoLogin()).should('be.visible')

    cy.screenshot()
}

}
export default SmilesCampos


   