//Seta o canvas na variavel. Selecionando o id que foi colocado no canvas 
let canvas = document.getElementById("snake");
//Informa as dimensoes
let context = canvas.getContext("2d");
//Defini os pixels
let box = 32;

//Cria o canvas
function criarBG(){
    //Defini a cor
    context.fillStyle = "lightgreen";
    //Criar a tela
    context.fillRect(0, 0, 16 * box, 16 * box);
}

criarBG();