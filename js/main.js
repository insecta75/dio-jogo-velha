var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');
var quadrados = document.getElementsByClassName('quadrado'); //mapeia o conteudo dos quadrados 

mudarJogador('X'); //inicia o jogo pelo jogador X

//FUNCAO PRINCIPAL
function escolherQuadrado(id) {
    if(vencedor !== null) return; //se ja existe um vencedor, fim do jogo

    var quadrado = document.getElementById(id);

    if(quadrado.innerHTML !== '-') { //evita que valor ja inserido por um jogador, seja mudado por outro jogador
        return; //sai da funcao e evita alteracao
    }

    quadrado.innerHTML = jogador; //modifica o conteudo html existente na div
    quadrado.style.color = '#000'; //modifica a cor CSS na div

    if(jogador === 'X') { //apos a jogada, altera o jogador
        jogador = 'O';
    } else {
        jogador = 'X';
    }
    mudarJogador(jogador);
    checaVencedor(); //verificar se ja houve uma sequencia tripla de acerto
}

//FUNCOES AUXILIARES
function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checaVencedor() {
    var quadradoUm = document.getElementById(1);
    var quadradoDois = document.getElementById(2);
    var quadradoTres = document.getElementById(3);
    var quadradoQuatro = document.getElementById(4);
    var quadradoCinco = document.getElementById(5);
    var quadradoSeis = document.getElementById(6);
    var quadradoSete = document.getElementById(7);
    var quadradoOito = document.getElementById(8);
    var quadradoNove = document.getElementById(9);

    if(checaSequencia(quadradoUm, quadradoDois, quadradoTres)) {
        mudarCorQuadrado(quadradoUm, quadradoDois, quadradoTres);
        mudarVencedor(quadradoUm);
        return;
    } else if(checaSequencia(quadradoQuatro, quadradoCinco, quadradoSeis)) {
        mudarCorQuadrado(quadradoQuatro, quadradoCinco, quadradoSeis);
        mudarVencedor(quadradoQuatro);
        return;
    } else if(checaSequencia(quadradoSete, quadradoOito, quadradoNove)) {
        mudarCorQuadrado(quadradoSete, quadradoOito, quadradoNove);
        mudarVencedor(quadradoSete);
        return;
    } else if(checaSequencia(quadradoUm, quadradoQuatro, quadradoSete)) {
        mudarCorQuadrado(quadradoUm, quadradoQuatro, quadradoSete);
        mudarVencedor(quadradoUm);
        return;
    } else if(checaSequencia(quadradoDois, quadradoCinco, quadradoOito)) {
        mudarCorQuadrado(quadradoDois, quadradoCinco, quadradoOito);
        mudarVencedor(quadradoDois);
        return;
    } else if(checaSequencia(quadradoTres, quadradoSeis, quadradoNove)) {
        mudarCorQuadrado(quadradoTres, quadradoSeis, quadradoNove);
        mudarVencedor(quadradoTres);
        return;
    } else if(checaSequencia(quadradoUm, quadradoCinco, quadradoNove)) {
        mudarCorQuadrado(quadradoUm, quadradoCinco, quadradoNove);
        mudarVencedor(quadradoUm);
        return;
    } else if(checaSequencia(quadradoTres, quadradoCinco, quadradoSete)) {
        mudarCorQuadrado(quadradoTres, quadradoCinco, quadradoSete);
        mudarVencedor(quadradoTres);
        return;
    }
}

function checaSequencia(quadA, quadB, quadC) {
    var igual = false;

    if(quadA.innerHTML != '-' && quadA.innerHTML == quadB.innerHTML && quadB.innerHTML === quadC.innerHTML) {
        igual = true;
    }
    return igual;
}

function mudarCorQuadrado(quadA, quadB, quadC) {
    quadA.style.background = '#0f0';
    quadB.style.background = '#0f0';
    quadC.style.background = '#0f0';
}

function mudarVencedor(quadrado) {
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function reiniciar() {
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for(var i = 1; i <= 9; i++) { //limpa o conteudo de todos os quadrados
        var quadrado = document.getElementById(i);
        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-';
    }
    mudarJogador('X'); //inicia o jogo pelo jogador X
}