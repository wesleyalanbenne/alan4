let cor;
let posicaoHorizontal; // x
let posicaoVertical; // y

function setup() {//configuraçoes
  createCanvas(1000, 1000);// tamanho do quadrado
   background(color(100,0,0));// cor do quadrado
  cor = color(random(0,255), random(0,255), random(0,255));//gerar cor aleatoria
  posicaoHorizontal = 200;
  posicaoVertical = 200;
}


function draw() {// desenhar
  
  fill(cor);// cor do circulo
  circle(posicaoHorizontal,posicaoVertical,50);
 
  
  
  if (mouseX < posicaoHorizontal){
    posicaoHorizontal =  posicaoHorizontal - 1;//pro lado -1
  }
  
  if (mouseX > posicaoHorizontal){
    posicaoHorizontal =  posicaoHorizontal + 1;// pro lado +1
  }
  
  if (mouseY < posicaoVertical){// pra cima -1
    posicaoVertical--;
  }
    
  if (mouseY > posicaoVertical){// pra baixo +1
    posicaoVertical++;
  }
  
  if (mouseIsPressed){//quando preciona o mouse
    cor = color(random(0,255), random(0,255), random(0,255), random(0,100));// muda a cor do circulo quando pressionado
  }
    
}
