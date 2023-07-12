
let frutasArray = [];
let laticiniosArray = [];
let congeladosArray = [];
let docesArray = [];

let perguntaInicial = prompt('Bem vindo ao site de lista de compras. \n Deseja adicionar um item a lista? \n Digite Sim ou Não')

if(perguntaInicial == 'Sim') {
    
    } else {
        alert('Nenhum item foi adicionado a lista.')
    }
 
let select = document.getElementById('select')
select.addEventListener('change', function seleciona () {
    var selecao = select.value;
    
let input = document.querySelector('.input-botao')
input.focus();

function adicionaItem() {

    if(selecao == 'frutas') {
        frutasArray.push(input.value)
        novoItem();
    }

    if(selecao == 'laticinios') {
        laticiniosArray.push(input.value)
        novoItem();
        
    }
    if(selecao == 'congelados') {
        congeladosArray.push(input.value)
        novoItem();
        
    }
    if(selecao == 'doces') {
        docesArray.push(input.value)
        novoItem();
        
    }     
    input.value = " ";
    input.focus(); 
}
let button = document.querySelector('button');
    button.onclick = adicionaItem;

    function novoItem () {
        let adicionaNovoItem = confirm('Item adicionado á lista \n \n Deseja adicionar um novo item?')

        if(adicionaNovoItem) {
            
        } else 
        alert('Clique no botão imprimir lista, para que a sua lista de compras seja mostrada')
    }    
})

function imprimeLista () {
    document.write(` Sua lista de compras é: <br><br> `)
    document.write(`Frutas: ${frutasArray} <br><br> `) 
    document.write(`Laticinios: ${laticiniosArray} <br><br>`)  
    document.write(`Congelados: ${congeladosArray} <br><br>`)  
    document.write(`Doces: ${docesArray} <br><br>`)  
    // alert(`Sua lista de compras é: \n \n Frutas: ${frutasArray} \n \n Laticinios: ${laticiniosArray} \n \n Congelados: ${congeladosArray} \n \n Doces: ${docesArray}`)
}

let botaoImprime = document.querySelector('.imprime')
botaoImprime.onclick = imprimeLista;

