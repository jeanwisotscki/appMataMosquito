// variáveis globais
var altura
var largura
var vidas = 1
var tempo = 10

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(largura, altura);
}
ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function(){
    tempo--
    if(tempo < 0 ){
        //vitória
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    } else{
        document.getElementById('cronometro').innerHTML = tempo
    }
} ,1000)

function posicaoRandomica() {

    // remove mosquito anterior (caso exista)
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        //vidas
        if(vidas >= 3){
            //game over
            window.location.href = 'game-over.html'
        } else{
            document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
            vidas++
        }
    }

    // posição aleatória do mosquito
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY);

    //criar o elemento html
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/diogo-head.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }

    document.body.appendChild(mosquito)    
}

// tamanho aleatório do mosquito
function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)

    switch(classe){
        case 0:
            return 'mosquito1'
            
        case 1:
            return 'mosquito2'
        
        case 2:
            return 'mosquito3'
    }
}

// lado aleatório que o mosquito aparece
function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2)

    switch(classe){
        case 0:
            return 'ladoA'
            
        case 1:
            return 'ladoB'
    }
}
