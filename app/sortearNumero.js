/* DECLARANDO A VARIÁVEL PARA IDENTIFICAR QUAL FOI O NÚMERO SECRETO */
const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio()

/* FUNÇÃO PARA RETORNAR UM NÚMERO SECRETO */
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

console.log("Número secreto: " + numeroSecreto)

/* MANIPULANDO O HTML PARA ALTERAR O MENOR VALOR E MAIOR VALOR COM INNER HTML */
const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor