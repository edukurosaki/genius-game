let order = [];
let clickOrder = [];
let score = 0;

//0 = verde
//1 = vermelho
//2 = amarelo
//3 = azul

const azul = document.querySelector('.azul');
const vermelho = document.querySelector('.vermelho');
const amarelo = document.querySelector('.amarela');
const verde = document.querySelector('.verde');


//Cria ordem aleatoria
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickOrder = [];

    for(let i in order) {
        let elementorColor = createColorElement(order[1]);
        lightColor(elementorColor, Number(i)+i);
    }
}

//Acende a proxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add("selected");
    }, number - 300);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}
//Checa os botoes clicados são os mesmos da ordem gerada
let checkOrder = () => {
    for(let i in clickOrder) {
        if(clickOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if(clickOrder.length == order.length){
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

//Funçao para o click do jogador
let click = (color) => {
    clickOrder[clickOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
},250);
    
}

//Criar a funçao de retorno as açoes

let createColorElement = (color) => {
    if(color == 0) {
        return verde;
    } else if(color == 1) {
        return vermelho;
    } else if (color == 2) {
        return amarelo;
    } else if (color == 3) {
        return azul;
    }
}

//função para o proximo nivel

let nextLevel = () =>{
    score++;
    shuffleOrder();
}

//Função de fim de jogo

let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`);
    order = [];
    clickOrder = [];

    playGame();
}

//iniciar o jogo

let playGame = () => {
    alert('Bem vindo ao Gênesis! Iniciando novo jogo!');

    score = 0;
    nextLevel();
}

//Açoes do jogo 
verde.onclick = () => click(0);
vermelho.onclick = () => click(1);
amarelo.onclick = () => click(2);
azul.onclick = () => click(3);

playGame();