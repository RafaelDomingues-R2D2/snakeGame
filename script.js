//Seta o canvas na variavel. Selecionando o id que foi colocado no canvas 
let canvas = document.getElementById("snake");
//Informa as dimensoes
let context = canvas.getContext("2d");
//Defini os pixels
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

//Cria o canvas
function criarBG(){
    //Defini a cor
    context.fillStyle = "lightgreen";
    //Criar a tela
    context.fillRect(0, 0, 16 * box, 16 * box);
}


function criarCobrinha(){
    for(i=0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

criarBG();
criarCobrinha();