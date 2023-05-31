function verificaSeChutePossuiValorValido(chute) {
    /* TRANSFORMAR O NÚMERO PARA INTEIRO */ 
    const numero = +chute

    /* SE NÃO FOR UM NÚMERO */
    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    } 
    
    /* SE O NÚMERO FOR MAIOR OU MENOR DO QUE O PERMITIDO */
    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: fale um número entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    /* SE A PESSOA ACERTAR VAI PRA OUTRA PÁGINA (BODY) PARA EXIBIR UMA MENSAGEM */ 
    if (numero === numeroSecreto) {
        document.body.innerHTML = 
        `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>

        <button id="jogar-novamente" class="btn-jogar">JOGAR NOVAMENTE</button>
        `
    } 
    /* DICAS */
    else if (numero > numeroSecreto) {
        elementoChute.innerHTML += 
        `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down-9-1" style="color: #FFF8DE;"></i></div>
        `
    } else {
        elementoChute.innerHTML += 
        `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up-9-1" style="color: #FFF8DE;"></i></div>
        `
    }
}
    /* FUNÇÃO DO PRIMEIRO IF */
    function chuteForInvalido(numero) {
        return Number.isNaN(numero)
    }

    /* FUNÇÃO DO SEGUNDO IF */
    function numeroForMaiorOuMenorQueOValorPermitido(numero) {
        return numero > maiorValor || numero < menorValor
    }

    /* REINICIAR A PÁGINA AO CLICAR NO BOTÃO */
    document.body.addEventListener('click', e => {
        if(e.target.id == 'jogar-novamente') {
            window.location.reload()
        }
    })