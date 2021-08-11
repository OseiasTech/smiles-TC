import PreencherCampos from '../pageObjects/campoSmiles'
const preencher = new PreencherCampos

Given(/^que eu tenha acessado o site da smiles$/, () => {
    preencher.abrirBrowser();
})

When(/^inserir os dados de partida e destino dentro do site da smiles$/, () => {
    preencher.PreencherCampoViagem();
    preencher.PreencherCampoData();
    preencher.selecaoDePassagem();
})

Then(/^o sistema deve me mostra os campos preenchidos e selecionados$/, () => {
    preencher.validacao();
    
})  