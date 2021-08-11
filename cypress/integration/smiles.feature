Feature: Verificar a seleção de voos 

    Scenario: Preencher os campos de ida e volta
    Given que eu tenha acessado o site da smiles
    When inserir os dados de partida e destino dentro do site da smiles
    Then o sistema deve me mostra os campos preenchidos e selecionados
