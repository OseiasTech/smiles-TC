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

        cy.get(PreencherCampo.erro()).should('have.class', 'fade') // se tem a class fade é porque não tem erro/está escondido


    }

selecaoDePassagem () {

    cy.get(PreencherCampo.passagemIda()).click({force: true})
    cy.get(PreencherCampo.passagemVolta()).click({force: true})

 }

 async ObtervaloresDoBilhete() {
    await cy.get(PreencherCampo.ValorBilheteIda()).invoke('text').then((value) => {
        cy.expect(isNaN(Number(value))).to.be.false
        valorDeIda = Number(value)
        cy.log(valorDeIda)
        cy.log(value)
        .should('contain', valorDeIda)
    })

    await cy.get(PreencherCampo.ValorBilheteVolta()).invoke('text').then((value) => {
        cy.expect(isNaN(Number(value))).to.be.false
        valorDeVolta = Number(value)
        cy.log(valorDeVolta)
        cy.log(value)
        .should('contain', valorDeVolta)
    })

    await cy.get(PreencherCampo.ValorTaxaEmbarque()).invoke('text').then((value) => {
        cy.expect(isNaN(Number(value))).to.be.false
        valorDaTaxa = Number(value)
        cy.log(valorDaTaxa)
        cy.log(value)
        .should('contain', valorDaTaxa)
    })
}

async ValidarTotalDoBilhete() {
    const getSomaIdaVolta = () => valorDeIda + valorDeVolta 

    await cy.get(PreencherCampo.ValorTotalDoBilhete()).invoke('text').then((value) => {
        cy.expect(isNaN(Number(value))).to.be.false
        valorTotal = Number(value)
        cy.log(getSomaIdaVolta())
        cy.log(value)
        .should('contain', getSomaIdaVolta())
    })
}

async ValidarValorTotal() {
    const getSomaTaxaBilhete = () => valorTotal + valorDaTaxa 

    await cy.get(PreencherCampo.ValorTotal()).invoke('text').then((value) => {
        cy.log(value)
        cy.log(getSomaTaxaBilhete())
        .should('contain', getSomaTaxaBilhete())
    })
}

AceitarTermosContinuar() {
    cy.get(PreencherCampo.condicoes()).click()
    cy.get(PreencherCampo.btnContinuar()).click()
    cy.get(PreencherCampo.login()).should('contain', 'acessar conta')
} 
};

export default SmilesCampos


   