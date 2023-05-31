const elementoChute = document.getElementById('chute')

/* WEB SPEECH API */
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-br'
/* MICROFONE LIGADO */
recognition.start()

/* RECONHECER UMA VOZ E EXECUTAR UMA FUNÇÃO */
recognition.addEventListener('result', onSpeak)

/*FUNÇÃO DE FALAR PARA EXIBIR E VERIFICAR*/
function onSpeak(e) {
    chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)
    verificaSeChutePossuiValorValido(chute)
}

/* FUNÇÃO PARA EXIBIR O QUE FOI FALADO NA TELA COM INNER HTML E TEMPLATE STRING */
function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = 
    `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())