class PreencherCamposElements {

    partida = () => {return '#inputOrigin'}
    partidaName = () => {return 'São Paulo, Brasil, Guarulhos (GRU)'}

    destino = () => {return '#inputDestination'}
    destinoName = () => {return 'Rio de Janeiro, Brasil, Todos os Aeroportos (RIO)'}

    calendario = () => {return '#_smilesflightsearchportlet_WAR_smilesbookingportlet_departure_date'}
    dataIda = () => {return '.ui-datepicker-group-first > .ui-datepicker-calendar > tbody >'}
    dataVolta = () => {return '.ui-datepicker-group-last > .ui-datepicker-calendar > tbody >'}
    voltaProximoMes = () => {return '.ui-datepicker-next'}
    confirmacaoData = () => {return '.ui-datepicker-current'}

    buscarVoou = () => {return '#submitFlightSearch'}

    passagemIda = () => {return '#firstFlights > .segmentsFlightsTemplate > .smiles__flight-search > #flightsArticle0 > :nth-child(4) > .column-miles > .miles > [style="position:relative"] > .checkbox > .flightlb'}

    passagemVolta = () => {return '#secondFlights > .segmentsFlightsTemplate > .smiles__flight-search > #flightsArticle0 > :nth-child(4) > .column-miles > .miles > [style="position:relative"] > .checkbox > .flightlb'}

    FormaDePagTaxa = () => {return '#opt1'}
    
    condicoes = () => {return '.terms > label'}
    btnContinuar = () => {return '.button > .btn'}

    login = () => {return '.main-content > h3'}

    

    // Validações da passagem
    valorIda = () => {return '#firstFlights > .segmentsFlightsTemplate > .smiles__flight-search > #flightsArticle0 > :nth-child(4) > .column-miles > .miles > [style="position:relative"] > .checkbox > .flightlb'}
    valorVolta = () => {return'#secondFlights > .segmentsFlightsTemplate > .smiles__flight-search > #flightsArticle0 > :nth-child(4) > .column-miles > .miles > [style="position:relative"] > .checkbox > .flightlb'}
    valorTotal = () => {return '.summary-side-fare-miles-total'}
    valorTaxa = () => {return '.summary-side-boarding-miles-value'}
    valorTotal = () => {return '#summarytotalmilesId'}
}

export default PreencherCamposElements