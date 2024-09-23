function setup() {// funçao de configuraçao
  createCanvas(600, 600);// tamanho da tela
  background("white")// da tela 
}

function draw() {// desenhar
  stroke("blue");// borda do retangulo
  fill("red");// cor do preenchimento
  
  
  if (mouseIsPressed) {// pressione o mause 
    rect(mouseX, mouseY, 20, 35);// seguir o mause 
  }
}
